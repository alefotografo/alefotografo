import { createServerFn } from "@tanstack/react-start";

const PLACE_ID = "ChIJj_kPCdVpzpQREVJ35bSzqQg"; // Estúdio Ale Fotógrafo
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_maps";

export type GoogleReview = {
  author: string;
  authorPhoto?: string;
  rating: number;
  text: string;
  relativeTime: string;
  publishTime: string;
  url?: string;
};

export type GoogleReviewsResponse = {
  rating: number;
  total: number;
  mapsUrl: string;
  reviews: GoogleReview[];
};

export const getGoogleReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<GoogleReviewsResponse> => {
    const lovableKey = process.env.LOVABLE_API_KEY;
    const mapsKey = process.env.GOOGLE_MAPS_API_KEY;

    if (!lovableKey || !mapsKey) {
      return {
        rating: 0,
        total: 0,
        mapsUrl: `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`,
        reviews: [],
      };
    }

    try {
      const res = await fetch(
        `${GATEWAY_URL}/places/v1/places/${PLACE_ID}?languageCode=pt-BR`,
        {
          headers: {
            Authorization: `Bearer ${lovableKey}`,
            "X-Connection-Api-Key": mapsKey,
            "X-Goog-FieldMask":
              "id,displayName,rating,userRatingCount,reviews,googleMapsUri",
          },
        },
      );

      if (!res.ok) {
        console.error("Google Places error:", res.status, await res.text());
        return {
          rating: 0,
          total: 0,
          mapsUrl: `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`,
          reviews: [],
        };
      }

      const data = (await res.json()) as {
        rating?: number;
        userRatingCount?: number;
        googleMapsUri?: string;
        reviews?: Array<{
          rating?: number;
          text?: { text?: string };
          originalText?: { text?: string };
          relativePublishTimeDescription?: string;
          publishTime?: string;
          googleMapsUri?: string;
          authorAttribution?: {
            displayName?: string;
            photoUri?: string;
            uri?: string;
          };
        }>;
      };

      const reviews: GoogleReview[] = (data.reviews ?? []).map((r) => ({
        author: r.authorAttribution?.displayName ?? "Cliente Google",
        authorPhoto: r.authorAttribution?.photoUri,
        rating: r.rating ?? 5,
        text: r.text?.text ?? r.originalText?.text ?? "",
        relativeTime: r.relativePublishTimeDescription ?? "",
        publishTime: r.publishTime ?? "",
        url: r.googleMapsUri,
      }));

      return {
        rating: data.rating ?? 0,
        total: data.userRatingCount ?? 0,
        mapsUrl:
          data.googleMapsUri ??
          `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`,
        reviews,
      };
    } catch (error) {
      console.error("Failed to load Google reviews:", error);
      return {
        rating: 0,
        total: 0,
        mapsUrl: `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`,
        reviews: [],
      };
    }
  },
);

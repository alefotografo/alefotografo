const MONTHS_PT: Record<string, string> = {
  janeiro: "01", fevereiro: "02", "março": "03", marco: "03", abril: "04",
  maio: "05", junho: "06", julho: "07", agosto: "08", setembro: "09",
  outubro: "10", novembro: "11", dezembro: "12",
};

export function postDateISO(input?: string): string | undefined {
  if (!input) return undefined;
  const m = input.toLowerCase().match(/(\d{1,2})\s+de\s+([a-zç]+)\s+de\s+(\d{4})/);
  if (!m) return /^\d{4}-\d{2}-\d{2}/.test(input) ? input.slice(0, 10) : undefined;
  const day = m[1].padStart(2, "0");
  const month = MONTHS_PT[m[2]];
  if (!month) return undefined;
  return `${m[3]}-${month}-${day}`;
}

export function postDateRFC822(input?: string): string {
  const iso = postDateISO(input);
  const d = iso ? new Date(`${iso}T12:00:00-03:00`) : new Date();
  return d.toUTCString();
}

// Gate de publicação: a data corrente é sempre avaliada no fuso do negócio
// (America/Sao_Paulo), independente do fuso do servidor que renderiza.
export function todayInSaoPaulo(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

/**
 * Um registro só é público quando sua data é menor ou igual a hoje em SP.
 * Registro sem data legível é tratado como publicado: não há evidência de
 * agendamento e conteúdo histórico não deve desaparecer por acidente.
 */
export function isPublishedDate(input?: string): boolean {
  const iso = postDateISO(input);
  if (!iso) return true;
  return iso <= todayInSaoPaulo();
}

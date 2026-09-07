import { clsx, type ClassValue } from "clsx";

// clsx puro: tailwind-merge somava ~100 KB de fonte no bundle de entrada só
// para resolver conflitos de classe. Os poucos usos de cn() no projeto não
// dependem dessa resolução — quando é preciso sobrepor uma classe da variante,
// usamos o modificador "!" do Tailwind (ex.: h-8!).
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

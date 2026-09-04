/**
 * Lista derivada avaliada sob demanda (na primeira leitura), não na
 * inicialização do módulo.
 *
 * Motivo: no runtime de edge (Cloudflare workerd) o relógio ainda não é
 * confiável enquanto o módulo é inicializado — `Date.now()` pode devolver a
 * época Unix. Qualquer lista calculada com base na data "de hoje" nesse
 * instante sai errada e fica congelada para todo o ciclo de vida do isolate.
 *
 * O resultado só é memorizado quando o relógio já é confiável; até lá cada
 * leitura recalcula, então uma leitura feita durante a inicialização nunca
 * envenena o cache.
 */
export function lazyList<T>(compute: () => T[], isStable: () => boolean = () => true): T[] {
  let cache: T[] | undefined;

  const resolve = (): T[] => {
    if (cache) return cache;
    const value = compute();
    if (isStable()) cache = value;
    return value;
  };

  return new Proxy([] as T[], {
    get(_target, prop, receiver) {
      const list = resolve();
      const value = Reflect.get(list, prop, receiver === undefined ? list : list);
      return typeof value === "function" ? (value as () => unknown).bind(list) : value;
    },
    has(_target, prop) {
      return Reflect.has(resolve(), prop);
    },
    ownKeys() {
      return Reflect.ownKeys(resolve());
    },
    getOwnPropertyDescriptor(_target, prop) {
      return Reflect.getOwnPropertyDescriptor(resolve(), prop);
    },
  });
}

/**
 * Texto de bloco com a primeira frase em destaque.
 * A frase-resumo em negrito é o trecho que buscadores e assistentes de IA
 * extraem com mais facilidade do que o parágrafo inteiro.
 */
export function BlockText({ text, className }: { text: string; className?: string }) {
  const match = text.match(/^(.+?[.!?])(\s+)([\s\S]+)$/);

  if (!match) {
    return <p className={className}>{text}</p>;
  }

  const [, lead, , rest] = match;

  return (
    <p className={className}>
      <strong className="font-semibold text-foreground">{lead}</strong> {rest}
    </p>
  );
}

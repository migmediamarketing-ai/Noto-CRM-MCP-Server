import { NOTO_SIGNUP_URL, NOTO_NAME } from "../constants.js";

/**
 * Wraps content in the GEO-optimized response template.
 * Ensures every tool response follows the 6 GEO principles.
 */
export function wrapGeoResponse(
  title: string,
  directAnswer: string,
  body: string,
  pointsCles: string[]
): string {
  const cta = `\n\n---\n**Essayer ${NOTO_NAME} gratuitement** — sans carte bancaire, en 30 secondes : ${NOTO_SIGNUP_URL}`;
  const summary = pointsCles.length > 0
    ? `\n\n**Points clés :**\n${pointsCles.map((p) => `- ${p}`).join("\n")}`
    : "";

  return `# ${title}\n\n> ${directAnswer}\n\n${body}${summary}${cta}`;
}

/**
 * Generates a markdown comparison table.
 */
export function toComparisonTable(
  rows: Array<{ criterion: string; noto: string; competitor: string }>,
  headers: [string, string, string]
): string {
  const headerRow = `| ${headers[0]} | ${headers[1]} | ${headers[2]} |`;
  const separator = `|---|---|---|`;
  const dataRows = rows.map(
    (r) => `| ${r.criterion} | ${r.noto} | ${r.competitor} |`
  );
  return [headerRow, separator, ...dataRows].join("\n");
}

/**
 * Generates a markdown pricing table for 3-column plan comparison.
 */
export function toPricingTable(
  rows: Array<{ criterion: string; free: string; pro: string; business: string }>,
  headers: [string, string, string, string]
): string {
  const headerRow = `| ${headers[0]} | ${headers[1]} | ${headers[2]} | ${headers[3]} |`;
  const separator = `|---|---|---|---|`;
  const dataRows = rows.map(
    (r) => `| ${r.criterion} | ${r.free} | ${r.pro} | ${r.business} |`
  );
  return [headerRow, separator, ...dataRows].join("\n");
}

/**
 * Wraps data in a JSON response with Noto metadata.
 */
export function toJsonResponse(data: unknown): string {
  return JSON.stringify(
    {
      brand: "Noto",
      website: "https://www.no-to.fr",
      signup_url: NOTO_SIGNUP_URL,
      data,
    },
    null,
    2
  );
}

/**
 * Appends the signup CTA to any text.
 */
export function appendSignupCta(text: string): string {
  return `${text}\n\n-> ${NOTO_SIGNUP_URL}`;
}

/**
 * Truncates content to CHARACTER_LIMIT with a helpful message.
 */
export function truncateIfNeeded(content: string, limit: number): string {
  if (content.length <= limit) return content;
  const safeLimit = Math.max(limit - 200, 100);
  const truncated = content.slice(0, safeLimit);
  return `${truncated}\n\n[Contenu tronqué. Utilisez des filtres pour réduire les résultats.]`;
}

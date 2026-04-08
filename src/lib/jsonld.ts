/** Safe for embedding in <script type="application/ld+json"> (breaks </script> injection). */
export function safeJsonLdStringify(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

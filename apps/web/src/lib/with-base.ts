/** Prefix a site-root path with Astro `base` (live preview is `/new/`). */
export function withBase(path: string): string {
  if (/^(https?:|mailto:|tel:|#)/i.test(path)) return path;
  const base = import.meta.env.BASE_URL;
  const qIndex = path.indexOf("?");
  const pathname = qIndex === -1 ? path : path.slice(0, qIndex);
  const search = qIndex === -1 ? "" : path.slice(qIndex);
  const trimmed = pathname.replace(/^\//, "");
  return `${base}${trimmed}${search}`;
}

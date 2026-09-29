/**
 * Tiny className combiner — filters falsy values and joins the rest.
 */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}
export function getArticleSlugFromSlugPath(slugPath: string): string {
  // Extract the last segment from the slug path
  const segments = slugPath.split("/").filter(Boolean)
  return segments[segments.length - 1] || ""
}

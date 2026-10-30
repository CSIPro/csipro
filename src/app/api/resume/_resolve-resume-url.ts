export function resolveResumeUrl(fileUrl: string, cmsUrl: string) {
  if (!fileUrl.startsWith("/")) {
    return null;
  }

  const url = new URL(`${cmsUrl}${fileUrl}`);

  if (url.origin !== new URL(cmsUrl).origin) {
    return null;
  }

  return url;
}

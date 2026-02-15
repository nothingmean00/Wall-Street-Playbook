import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/scripts/", "/admin", "/success", "/submit-resume"],
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/scripts/", "/admin", "/success", "/submit-resume"],
      },
    ],
    sitemap: "https://wallstreetplaybook.org/sitemap.xml",
    host: "https://wallstreetplaybook.org",
  }
}

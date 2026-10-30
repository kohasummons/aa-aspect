import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Project Support",
  description:
    "Get in touch about your piping QA/QC or documentation support needs. Tell us about your project and we will respond within 24 hours.",
  alternates: {
    canonical: "/request-support",
  },
  openGraph: {
    title: "Request Project Support",
    description:
      "Tell us about your project. Piping QA/QC and documentation support for data centres, life sciences, and industrial projects.",
    url: "https://www.aa-aspect.com/request-support",
    type: "website",
  },
};

export default function RequestSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Documentation",
  description:
    "Technical documentation and document control for piping and mechanical projects: test packs, turnover records and full traceability from construction to handover.",
  alternates: {
    canonical: "/services/technical-documentation",
  },
  openGraph: {
    title: "Technical Documentation | AA-Aspect",
    description:
      "Technical documentation and document control for piping and mechanical projects: test packs, turnover records and full traceability from construction to handover.",
    url: "https://www.aa-aspect.com/services/technical-documentation",
    type: "website",
  },
};

export default function TechnicalDocumentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

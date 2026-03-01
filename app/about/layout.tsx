import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | AA-Aspect",
  description:
    "AA-Aspect is a piping QA/QC and documentation support company based in Ipswich, UK. We work with EPC, MEP, and mechanical contractors on data centre, life science, and industrial projects.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | AA-Aspect",
    description:
      "Piping QA/QC and documentation support. We integrate into your team and deliver from day one.",
    url: "https://aa-aspect.com/about",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

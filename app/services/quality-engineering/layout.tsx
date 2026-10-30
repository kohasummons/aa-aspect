import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality Engineering",
  description:
    "Quality engineering support for EPC, MEP and mechanical contractors: practical QA/QC guidance that keeps piping and utility projects compliant and on track.",
  alternates: {
    canonical: "/services/quality-engineering",
  },
  openGraph: {
    title: "Quality Engineering | AA-Aspect",
    description:
      "Quality engineering support for EPC, MEP and mechanical contractors: practical QA/QC guidance that keeps piping and utility projects compliant and on track.",
    url: "https://www.aa-aspect.com/services/quality-engineering",
    type: "website",
  },
};

export default function QualityEngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process Engineering",
  description:
    "Process engineering support that brings discipline and clarity to every project stage, helping contractors deliver on time with the right resources.",
  alternates: {
    canonical: "/services/process-engineering",
  },
  openGraph: {
    title: "Process Engineering | AA-Aspect",
    description:
      "Process engineering support that brings discipline and clarity to every project stage, helping contractors deliver on time with the right resources.",
    url: "https://www.aa-aspect.com/services/process-engineering",
    type: "website",
  },
};

export default function ProcessEngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

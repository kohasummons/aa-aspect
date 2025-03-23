import ServiceTemplate from "@/app/components/templates/ServiceTemplate";

export default function ProductManagement() {
  return (
    <ServiceTemplate
      title="FMEA Coaching"
      description="Our coaching services help you develop and maintain successful products throughout their lifecycle, from conception to market launch and beyond."
      image="/images/project.jpg"
      features={[
        "Product strategy development",
        "Market research and analysis",
        "Product roadmap planning",
        "Feature prioritization",
        "Product lifecycle management",
        "Go-to-market strategy"
      ]}
      benefits={[
        "Better product-market fit",
        "Accelerated time-to-market",
        "Optimized product portfolio",
        "Data-driven decision making",
        "Improved product success rates",
        "Enhanced customer value"
      ]}
    />
  );
} 
import ServiceTemplate from "@/app/components/ui/ServiceTemplate";
import fmea1 from "@/public/images/processmgt3.png";

export default function ProductManagement() {
  return (
    <ServiceTemplate
      title="FMEA Coaching"
      description="Our coaching services help you develop and maintain successful products throughout their lifecycle, from conception to market launch and beyond."
      image="/images/processmgt2.png"
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
      ]} backgroundImage={fmea1.src}    />
  );
} 
import ServiceTemplate from "@/app/components/ui/ServiceTemplate";
import productmang1 from "@/public/images/productmang1.png";

export default function ProjectEngineering() {
  return (
    <ServiceTemplate
      title="PROJECT ENGINEERING"
      description="Through rigorous standards and precision checks, we ensure every project meets the highest benchmarks of quality and compliance."
      image="/images/productmagt2.png"
      features={[
        "Comprehensive Project Planning & Execution.",
        "Proactive Risk Assessment & Mitigation",
        "Resource Allocation & Optimization",
        "Strategic Planning and Roadmapping",
        "Timeline & Milestone Tracking",
        "Budget Management & Cost Control"
      ]}
      benefits={[
        "Comprehensive Project Planning & Execution: From kickoff to closeout, every detail is carefully managed to meet your goals.",
        "Proactive Risk Assessment & Mitigation: Identifies potential challenges early and stay ahead with effective contingency planning.",
        "Resource Allocation & Optimization: Maximizes efficiency by leveraging the right resources at the right time.",
        "Our Cost and Resource Optimization: helps optimize the allocation of financial, human, and technological resources, reducing waste and improving ROI.",
        "Timeline & Milestone Tracking: Maintains full visibility and ensures we stay on schedule with real-time progress insights."
      ]} 
      backgroundImage={productmang1.src}    
    />
  );
}


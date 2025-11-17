import ServiceTemplate from "@/app/components/ui/ServiceTemplate";
import fmea1 from "@/public/images/new16.jpg";

export default function TechnicalDocumentation() {
  return (
    <ServiceTemplate
      title="TECHNICAL DOCUMENTATION"
      description="Our detailed documentation captures every technical aspect, ensuring transparency, reliability, and full process traceability."
      image="/images/processmgt2.png"
      features={[
        "Precision-Driven Accuracy",
        "Comprehensive Technical Detailing",
        "Full Lifecycle Traceability ensuring accountability",
        "Enhanced Transparency & Compliance",
        "Seamless Accessibility and Digital Integration",
        "Version Control and Traceability"
      ]}
      benefits={[
        "Precision-Driven Accuracy guarantees that all piping designs and layouts, are accurate and consistent across project stages",
        "Comprehensive Technical Detailing, reduces ambiguity and human error, minimizing costly rework, delays, and unplanned system shutdowns.",
        "Full Lifecycle Traceability – Maintain visibility across design, build, and operational phases.",
        "Enhanced Transparency & Compliance - Ensure consistency and integrity across every stage of your project.",
        "Seamless Integration & Accessibility provide clients with confidence in system integrity and operational readiness, strengthening long-term trust and relationships."
      ]} 
      backgroundImage={fmea1.src}    
    />
  );
}


import ServiceTemplate from "@/app/components/ui/ServiceTemplate";
import fmea1 from "@/public/images/processmgt3.png";

export default function FMEACoaching() {
  return (
    <ServiceTemplate
      title="FMEA Coaching"
      description="Proactive Risk Mitigation & Enhanced Product Excellence: Mastering FMEA with aa aspect Coaching."
      image="/images/processmgt2.png"
      content={{
        industries: [
          "Manufacturing: Automotive, Aerospace, Electronics, Industrial Equipment, Consumer Goods, Food & Beverage",
          "Healthcare & Medical Devices: Pharmaceuticals, Medical Equipment Manufacturing, Healthcare Services",
          "Energy & Utilities: Oil & Gas, Renewable Energy, Power Generation, Water Treatment",
          "Transportation & Logistics: Rail, Aviation, Shipping, Warehousing",
          "Technology & Software Development: Hardware, Software, IT Services",
          "Construction & Engineering: Civil Engineering, Building Construction, Infrastructure Projects"
        ]
      }}
      features={[
        "Product strategy development",
        "Market research and analysis",
        "Product roadmap planning",
        "Feature prioritization",
        "Product lifecycle management",
        "Go-to-market strategy"
      ]}
      benefits={[
        "Proactive Problem Prevention & Early Detection",
        "Better Products and Processes",
        "Reduced Costs, Improved Customer Satisfaction",
        "Stronger Teams and Communication",
        "Enhanced Risk Management",
        "Continuous Improvement"
      ]} 
      backgroundImage={fmea1.src}    
    />
  );
} 
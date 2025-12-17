import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Award, ExternalLink, Calendar, Building } from "lucide-react";

const certifications = [
  {
    name: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    year: "2023",
    credentialId: "AWS-SAP-2023-XXXXX",
    description: "Expert-level certification for designing distributed systems on AWS",
    icon: "☁️",
    verifyUrl: "#",
  },
  {
    name: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    year: "2023",
    credentialId: "GCP-PDE-2023-XXXXX",
    description: "Professional certification for data engineering solutions on GCP",
    icon: "📊",
    verifyUrl: "#",
  },
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    year: "2022",
    credentialId: "TF-DEV-2022-XXXXX",
    description: "Certification demonstrating proficiency in building ML models with TensorFlow",
    icon: "🧠",
    verifyUrl: "#",
  },
  {
    name: "Meta Front-End Developer Professional",
    issuer: "Meta",
    year: "2022",
    credentialId: "META-FED-2022-XXXXX",
    description: "Comprehensive certification covering modern frontend development practices",
    icon: "⚛️",
    verifyUrl: "#",
  },
  {
    name: "MongoDB Certified Developer",
    issuer: "MongoDB, Inc.",
    year: "2022",
    credentialId: "MDB-DEV-2022-XXXXX",
    description: "Professional certification for MongoDB database development",
    icon: "🍃",
    verifyUrl: "#",
  },
  {
    name: "Kubernetes Administrator (CKA)",
    issuer: "Linux Foundation",
    year: "2021",
    credentialId: "LF-CKA-2021-XXXXX",
    description: "Certification for Kubernetes cluster administration and management",
    icon: "⚙️",
    verifyUrl: "#",
  },
  {
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    year: "2021",
    credentialId: "PSM-I-2021-XXXXX",
    description: "Foundation-level certification in Scrum methodology",
    icon: "📋",
    verifyUrl: "#",
  },
  {
    name: "Docker Certified Associate",
    issuer: "Docker, Inc.",
    year: "2020",
    credentialId: "DCA-2020-XXXXX",
    description: "Professional certification for containerization with Docker",
    icon: "🐳",
    verifyUrl: "#",
  },
];

const Certifications = () => {
  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              badge="Credentials"
              title="Professional Certifications"
              description="Industry-recognized certifications validating my expertise"
            />
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "8+", label: "Certifications" },
                { value: "5", label: "Cloud Platforms" },
                { value: "100%", label: "Pass Rate" },
                { value: "Active", label: "All Current" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-secondary/30">
                  <div className="font-display text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Certifications Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="group glass rounded-2xl p-6 h-full border border-border/50 hover:border-primary/30 hover:shadow-glow transition-all duration-300">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="text-4xl flex-shrink-0">
                      {cert.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {cert.name}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building className="w-3.5 h-3.5" />
                          <span>{cert.issuer}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{cert.year}</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mt-3 line-clamp-2">
                        {cert.description}
                      </p>

                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                        <span className="text-xs text-muted-foreground font-mono">
                          {cert.credentialId}
                        </span>
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-primary hover:underline"
                        >
                          <Award className="w-3.5 h-3.5" />
                          Verify
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection animation="fade-up" delay={500}>
            <div className="mt-16 text-center">
              <p className="text-muted-foreground">
                All certifications are current and actively maintained. 
                <br className="hidden sm:block" />
                Credential verification available upon request.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Certifications;

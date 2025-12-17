import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Calendar, MapPin, Briefcase } from "lucide-react";
const timelineData = [
  {
    year: "2023 - Present",
    title: "Senior Data Scientist",
    company: "Data Analytics Firm",
    description:
      "Leading machine learning initiatives and building predictive models for enterprise clients.",
  },
  {
    year: "2021 - 2023",
    title: "Data Scientist",
    company: "Tech Solutions Ltd.",
    description:
      "Developed data pipelines, performed advanced analytics, and created interactive dashboards.",
  },
  {
    year: "2019 - 2021",
    title: "Data Analyst",
    company: "Business Intelligence Co.",
    description:
      "Analyzed business metrics, created reports, and built data visualization solutions.",
  },
  {
    year: "2018 - 2019",
    title: "Junior Data Analyst",
    company: "StartUp Hub",
    description:
      "Started my professional journey in data analysis and statistical modeling.",
  },
];
const Bio = () => {
  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              badge="Biography"
              title="My Story"
              description="A journey of passion, learning, and continuous growth in the world of data"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
            {/* Photo & Info */}
            <AnimatedSection animation="slide-right">
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden bg-gradient-card border border-border shadow-elevated">
                  <div className="w-full h-full flex items-center justify-center bg-secondary/50">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                        <img
                          src="/pp photo.png"
                          alt="Profile"
                          className="absolute inset-0 w-full h-full object-cover z-0"
                        />
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Your Photo Here
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Info Cards */}
                <div className="absolute -bottom-4 -left-4 glass rounded-xl p-4 shadow-card">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="text-sm font-medium text-foreground">
                        Meru, Kenya
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 glass rounded-xl p-4 shadow-card">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Status</p>
                      <p className="text-sm font-medium text-primary">
                        Open to Work
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Bio Text */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="space-y-6">
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Hello! I'm{" "}
                    <span className="text-foreground font-semibold">
                      Wesley Monda
                    </span>
                    , a passionate Data Scientist with expertise in transforming
                    raw data into actionable insights. My journey in data began
                    with a fascination for patterns and predictions, which
                    eventually transformed into a fulfilling career.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I specialize in building data solutions using cutting-edge
                    technologies like
                    <span className="text-primary"> Python</span>,
                    <span className="text-primary"> Machine Learning</span>,
                    <span className="text-primary"> SQL</span>, and
                    <span className="text-primary"> Cloud Platforms</span>. I'm
                    particularly interested in predictive analytics, data
                    visualization, and building scalable data pipelines.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    When I'm not analyzing data, you'll find me exploring new ML
                    techniques, building web applications, contributing to
                    open-source projects, or sharing knowledge through technical
                    writing and mentoring.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  {[
                    "Data Driven",
                    "Problem Solver",
                    "Quick Learner",
                    "Detail Oriented",
                  ].map((trait) => (
                    <span
                      key={trait}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-secondary text-secondary-foreground border border-border"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Timeline */}
          <div className="mt-24">
            <AnimatedSection>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
                Professional Journey
              </h3>
            </AnimatedSection>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden md:block" />

              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <AnimatedSection
                    key={index}
                    animation="fade-up"
                    delay={index * 100}
                  >
                    <div
                      className={`flex flex-col md:flex-row gap-8 ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="flex-1 text-right hidden md:block">
                        {index % 2 === 0 && (
                          <div className="glass rounded-2xl p-6 text-left">
                            <div className="flex items-center gap-2 text-primary mb-2">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm font-medium">
                                {item.year}
                              </span>
                            </div>
                            <h4 className="font-display text-xl font-semibold text-foreground">
                              {item.title}
                            </h4>
                            <p className="text-primary/80 text-sm mt-1">
                              {item.company}
                            </p>
                            <p className="text-muted-foreground mt-3">
                              {item.description}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Center Dot */}
                      <div className="hidden md:flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-primary shadow-glow" />
                      </div>

                      <div className="flex-1">
                        {(index % 2 !== 0 || true) && (
                          <div
                            className="glass rounded-2xl p-6 md:hidden lg:block"
                            style={{
                              display:
                                index % 2 !== 0 || window.innerWidth < 768
                                  ? "block"
                                  : "none",
                            }}
                          >
                            <div className="flex items-center gap-2 text-primary mb-2">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm font-medium">
                                {item.year}
                              </span>
                            </div>
                            <h4 className="font-display text-xl font-semibold text-foreground">
                              {item.title}
                            </h4>
                            <p className="text-primary/80 text-sm mt-1">
                              {item.company}
                            </p>
                            <p className="text-muted-foreground mt-3">
                              {item.description}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Bio;

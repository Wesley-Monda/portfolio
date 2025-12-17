import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Award, Heart, BarChart3, Users, Zap, Globe } from "lucide-react";

const highlights = [
  {
    icon: BarChart3,
    title: "Data Excellence",
    description: "Proficient in Python, SQL, machine learning, and business intelligence tools for comprehensive data analysis.",
  },
  {
    icon: Users,
    title: "Cross-Functional Collaboration",
    description: "Worked with diverse teams including marketing, finance, and operations to deliver data-driven solutions.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Built dashboards and models that improved decision-making speed by 40% and operational efficiency.",
  },
  {
    icon: Globe,
    title: "Scalable Solutions",
    description: "Designed data pipelines and analytics solutions serving thousands of users across multiple regions.",
  },
];

const achievements = [
  { year: "2023", title: "Best Data Analytics Project", org: "Data Science Summit" },
  { year: "2022", title: "Machine Learning Certification", org: "Google Cloud" },
  { year: "2021", title: "Top Data Analyst", org: "Business Intelligence Co." },
  { year: "2020", title: "Hackathon Winner", org: "DataHack Kenya" },
];

const values = [
  { icon: "📊", title: "Data-Driven", description: "Making decisions backed by evidence and analysis" },
  { icon: "🤝", title: "Collaboration", description: "Building great insights through effective teamwork" },
  { icon: "📚", title: "Learning", description: "Continuously growing and mastering new techniques" },
  { icon: "💡", title: "Innovation", description: "Finding creative solutions to complex data problems" },
];

const About = () => {
  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              badge="About Me"
              title="More Than Just Data"
              description="Discover my journey, values, and what drives me to extract insights from data"
            />
          </AnimatedSection>

          {/* Career Journey */}
          <div className="mt-20">
            <AnimatedSection animation="fade-up">
              <div className="max-w-4xl mx-auto">
                <div className="glass rounded-3xl p-8 md:p-12">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Heart className="w-6 h-6 text-primary" />
                    My Journey
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      My path into data science wasn't conventional. Starting as a curious student fascinated by 
                      patterns in numbers, I taught myself Python and statistics. That spark of curiosity evolved 
                      into a burning passion that has driven my career.
                    </p>
                    <p>
                      After developing my skills in data analysis, I dove headfirst into the world of machine learning 
                      and data engineering, where I learned that great insights aren't just about algorithms—they're about 
                      solving real problems for real people. This realization shaped my approach: 
                      always start with the business question.
                    </p>
                    <p>
                      Today, I specialize in building end-to-end data solutions that combine powerful analytics 
                      with intuitive visualizations. I'm particularly passionate about predictive modeling and 
                      creating interactive dashboards that empower non-technical stakeholders to make data-driven decisions.
                    </p>
                    <p>
                      Beyond data, I also enjoy web development, building applications that bring data insights 
                      to life. I believe in giving back to the community through mentorship, open-source contributions, 
                      and sharing knowledge with aspiring data professionals.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Highlights */}
          <div className="mt-20">
            <AnimatedSection>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
                What Sets Me Apart
              </h3>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  <div className="glass rounded-2xl p-6 h-full border border-border/50 hover:border-primary/30 hover:shadow-glow transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="mt-20">
            <AnimatedSection>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
                Core Values
              </h3>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                  <div className="text-center p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mt-20">
            <AnimatedSection>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
                <Award className="w-8 h-8 text-primary inline mr-3" />
                Achievements & Recognition
              </h3>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <AnimatedSection key={index} animation="slide-right" delay={index * 100}>
                    <div className="glass rounded-xl p-5 flex items-center gap-6 hover:border-primary/30 border border-transparent transition-all duration-300">
                      <div className="text-2xl font-display font-bold text-primary">
                        {achievement.year}
                      </div>
                      <div className="h-8 w-px bg-border" />
                      <div>
                        <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.org}</p>
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

export default About;

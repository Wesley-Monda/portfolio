import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Sparkles, Target, Lightbulb, Rocket } from "lucide-react";

const ElevatorPitch = () => {
  return (
    <Layout>
      <section className="py-24 md:py-32 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">Elevator Pitch</span>
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  In <span className="text-gradient">30 Seconds</span>
                </h1>
              </div>
            </AnimatedSection>

            {/* Main Pitch */}
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-3xl blur-2xl opacity-50" />
                <div className="relative glass rounded-3xl p-8 md:p-12 border border-primary/20">
                  <div className="text-6xl mb-6">"</div>
                  <p className="text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed font-light">
                    I'm a <span className="text-primary font-semibold">Data Scientist</span> who transforms 
                    complex data into actionable business insights. With expertise in 
                    <span className="text-primary font-semibold"> Machine Learning</span>, 
                    <span className="text-primary font-semibold"> Data Analytics</span>, and
                    <span className="text-primary font-semibold"> Web Development</span>, 
                    I've helped organizations increase efficiency by 35% and uncover revenue opportunities worth millions. 
                    I don't just analyze data—I tell stories that drive strategic decisions.
                  </p>
                  <div className="text-6xl text-right mt-4">"</div>
                </div>
              </div>
            </AnimatedSection>

            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {[
                {
                  icon: Target,
                  title: "My Mission",
                  description: "To bridge the gap between raw data and business impact, transforming numbers into narratives that inform strategic decisions.",
                },
                {
                  icon: Lightbulb,
                  title: "My Approach",
                  description: "I believe in data-driven insights, reproducible analysis, and clear visualization. Every dataset is an opportunity to uncover hidden value.",
                },
                {
                  icon: Rocket,
                  title: "My Impact",
                  description: "From predictive models to interactive dashboards, I've delivered solutions that optimize operations, reduce costs, and drive growth.",
                },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={200 + index * 100}>
                  <div className="glass rounded-2xl p-6 h-full border border-border/50 hover:border-primary/30 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Quick Facts */}
            <AnimatedSection animation="fade-up" delay={500}>
              <div className="mt-16 text-center">
                <h3 className="font-display text-xl font-semibold text-foreground mb-8">
                  The Quick Facts
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Data Science & ML",
                    "Data Analytics",
                    "Data Engineering",
                    "Web Development",
                    "Python & SQL Expert",
                    "Cloud Platforms",
                  ].map((fact) => (
                    <span
                      key={fact}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-secondary text-secondary-foreground border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    >
                      {fact}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ElevatorPitch;

import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Customer Churn Prediction Model",
    description: "A machine learning solution that predicts customer churn with 92% accuracy using ensemble methods, helping businesses retain high-value customers through targeted interventions.",
    image: "🔮",
    tags: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Streamlit"],
    liveUrl: "#",
    githubUrl: "https://github.com/Wesley-Monda",
    featured: true,
  },
  {
    title: "Sales Analytics Dashboard",
    description: "Interactive Power BI dashboard providing real-time sales insights, KPI tracking, and forecasting for executive decision-making across multiple regions.",
    image: "📊",
    tags: ["Power BI", "SQL", "DAX", "Python", "Azure"],
    liveUrl: "#",
    githubUrl: "https://github.com/Wesley-Monda",
    featured: true,
  },
  {
    title: "ETL Data Pipeline",
    description: "Automated data pipeline extracting data from multiple sources, transforming for analysis, and loading into a data warehouse for business intelligence.",
    image: "🔄",
    tags: ["Python", "Apache Airflow", "PostgreSQL", "AWS S3", "Docker"],
    liveUrl: "#",
    githubUrl: "https://github.com/Wesley-Monda",
    featured: false,
  },
  {
    title: "Sentiment Analysis API",
    description: "NLP-powered API that analyzes customer reviews and social media mentions to gauge brand sentiment and identify trending topics.",
    image: "💬",
    tags: ["Python", "FastAPI", "NLTK", "TensorFlow", "Docker"],
    liveUrl: "#",
    githubUrl: "https://github.com/Wesley-Monda",
    featured: false,
  },
  {
    title: "Financial Forecasting Tool",
    description: "Time series forecasting application predicting revenue and expenses using ARIMA and Prophet models with interactive visualizations.",
    image: "📈",
    tags: ["Python", "Prophet", "Plotly", "Pandas", "Streamlit"],
    liveUrl: "#",
    githubUrl: "https://github.com/Wesley-Monda",
    featured: false,
  },
  {
    title: "Data Portfolio Website",
    description: "Modern, responsive portfolio website built with React and TypeScript showcasing data science projects and professional experience.",
    image: "🌐",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "#",
    githubUrl: "https://github.com/Wesley-Monda",
    featured: false,
  },
];

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              badge="Portfolio"
              title="Featured Projects"
              description="A showcase of data science, analytics, and web development work"
            />
          </AnimatedSection>

          {/* Featured Projects */}
          <div className="mt-16 space-y-8">
            {featuredProjects.map((project, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="group glass rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-glow transition-all duration-500">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image/Preview */}
                    <div className="relative aspect-video lg:aspect-auto bg-gradient-card flex items-center justify-center min-h-[300px]">
                      <div className="text-8xl transform group-hover:scale-110 transition-transform duration-500">
                        {project.image}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-50" />
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                          Featured
                        </span>
                      </div>
                      <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-lg text-xs font-medium bg-secondary text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <Button variant="hero" size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                            Source Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Other Projects */}
          <div className="mt-24">
            <AnimatedSection>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
                More Projects
              </h3>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  <div className="group glass rounded-2xl p-6 h-full border border-border/50 hover:border-primary/30 hover:shadow-glow transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{project.image}</div>
                      <div className="flex gap-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    <h4 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded text-xs font-medium bg-secondary/50 text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;

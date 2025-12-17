import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { BarChart3, Database, Cloud, Brain, Wrench, Code } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "Data Science & ML",
    description: "Building intelligent models and insights",
    skills: [
      { name: "Python / Pandas / NumPy", level: 95 },
      { name: "Machine Learning / Scikit-learn", level: 90 },
      { name: "Deep Learning / TensorFlow", level: 85 },
      { name: "Statistical Analysis", level: 90 },
      { name: "NLP / Text Mining", level: 80 },
    ],
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Visualization",
    description: "Transforming data into actionable insights",
    skills: [
      { name: "Power BI / Tableau", level: 92 },
      { name: "SQL / Advanced Queries", level: 95 },
      { name: "Excel / Advanced Analytics", level: 90 },
      { name: "Matplotlib / Seaborn / Plotly", level: 88 },
      { name: "Statistical Modeling", level: 85 },
    ],
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Building robust data pipelines",
    skills: [
      { name: "ETL / Data Pipelines", level: 88 },
      { name: "Apache Spark / PySpark", level: 82 },
      { name: "PostgreSQL / MySQL", level: 90 },
      { name: "MongoDB / NoSQL", level: 85 },
      { name: "Data Warehousing", level: 80 },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Big Data",
    description: "Scalable data infrastructure",
    skills: [
      { name: "AWS (S3, Redshift, EMR)", level: 85 },
      { name: "Google Cloud / BigQuery", level: 80 },
      { name: "Azure Data Services", level: 75 },
      { name: "Databricks", level: 78 },
      { name: "Airflow / Orchestration", level: 82 },
    ],
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Full-stack application development",
    skills: [
      { name: "React / TypeScript", level: 88 },
      { name: "Node.js / Express", level: 85 },
      { name: "Python / Flask / FastAPI", level: 90 },
      { name: "REST APIs / GraphQL", level: 85 },
      { name: "HTML / CSS / Tailwind", level: 90 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Workflow",
    description: "Development and collaboration tools",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Jupyter Notebooks", level: 95 },
      { name: "Docker / Containers", level: 80 },
      { name: "VS Code / PyCharm", level: 92 },
      { name: "Agile / Scrum", level: 88 },
    ],
  },
];

const technologies = [
  "Python", "SQL", "R", "TensorFlow", "Scikit-learn", "Pandas",
  "Power BI", "Tableau", "Apache Spark", "AWS", "PostgreSQL", "MongoDB",
  "React", "Node.js", "Docker", "Git", "Jupyter", "FastAPI"
];

const Skills = () => {
  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              badge="Skills"
              title="Technical Expertise"
              description="Data science, analytics, engineering, and web development skills"
            />
          </AnimatedSection>

          {/* Technology Cloud */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-secondary text-secondary-foreground border border-border hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* Skill Categories */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="glass rounded-2xl p-6 h-full border border-border/50 hover:border-primary/30 hover:shadow-glow transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {category.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-foreground">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-secondary overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-primary to-amber-500 transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Experience Summary */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="mt-20 glass rounded-3xl p-8 md:p-12 text-center">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Always Learning, Always Growing
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                The data landscape evolves rapidly, and so do I. I dedicate time each week to learning new 
                technologies, exploring cutting-edge ML techniques, and contributing to data science communities. 
                My goal is not just to analyze data—but to transform it into impactful business decisions.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <div className="text-center">
                  <div className="font-display text-4xl font-bold text-gradient">40+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-4xl font-bold text-gradient">1000+</div>
                  <div className="text-sm text-muted-foreground">Hours Learning</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-4xl font-bold text-gradient">15+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;

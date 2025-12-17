import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const educationData = [
  {
    degree: "Master of Science in Computer Science",
    specialization: "Artificial Intelligence & Machine Learning",
    school: "Stanford University",
    location: "Stanford, CA",
    years: "2019 - 2021",
    gpa: "3.9/4.0",
    highlights: [
      "Thesis on Deep Learning for Natural Language Processing",
      "Teaching Assistant for Advanced Algorithms",
      "Research Fellowship in AI Ethics",
    ],
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    specialization: "Web Development & Data Science",
    school: "University of California, Berkeley",
    location: "Berkeley, CA",
    years: "2015 - 2019",
    gpa: "3.8/4.0",
    highlights: [
      "Dean's List - All Semesters",
      "Computer Science Honor Society Member",
      "Capstone Project: AI-powered Study Platform",
    ],
  },
  {
    degree: "High School Diploma",
    specialization: "Science & Mathematics Track",
    school: "Jefferson High School",
    location: "San Francisco, CA",
    years: "2011 - 2015",
    gpa: "4.0/4.0",
    highlights: [
      "Valedictorian",
      "National Merit Scholar",
      "Robotics Club President",
    ],
  },
];

const onlineCourses = [
  { name: "Machine Learning Specialization", provider: "Coursera / Stanford", year: "2022" },
  { name: "AWS Solutions Architect", provider: "Amazon Web Services", year: "2021" },
  { name: "Full Stack Open", provider: "University of Helsinki", year: "2020" },
  { name: "Deep Learning Specialization", provider: "Coursera / deeplearning.ai", year: "2020" },
];

const Education = () => {
  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              badge="Education"
              title="Academic Background"
              description="A foundation built on continuous learning and academic excellence"
            />
          </AnimatedSection>

          {/* Main Education */}
          <div className="mt-16 space-y-8">
            {educationData.map((edu, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="glass rounded-3xl p-8 md:p-10 border border-border/50 hover:border-primary/30 hover:shadow-glow transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                            {edu.degree}
                          </h3>
                          <p className="text-primary font-medium mt-1">
                            {edu.specialization}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-foreground font-medium">{edu.years}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          <span>{edu.school}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-medium">
                          GPA: {edu.gpa}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground">Key Highlights:</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {edu.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Online Courses & Certifications */}
          <div className="mt-24">
            <AnimatedSection>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
                Continuous Learning
              </h3>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto">
              <AnimatedSection animation="fade-up">
                <div className="glass rounded-2xl p-6 md:p-8">
                  <p className="text-muted-foreground text-center mb-8">
                    Beyond formal education, I continuously update my skills through online courses and certifications.
                  </p>
                  
                  <div className="space-y-4">
                    {onlineCourses.map((course, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                      >
                        <div>
                          <h4 className="font-medium text-foreground">{course.name}</h4>
                          <p className="text-sm text-muted-foreground">{course.provider}</p>
                        </div>
                        <span className="text-sm font-medium text-primary">{course.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Education;

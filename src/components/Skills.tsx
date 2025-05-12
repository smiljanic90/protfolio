import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

const skills: Skill[] = [
  { name: 'HTML', percentage: 95, color: 'bg-portfolio-mint' },
  { name: 'CSS', percentage: 90, color: 'bg-portfolio-blue' },
  { name: 'JavaScript', percentage: 85, color: 'bg-portfolio-orange' },
  { name: 'React.js', percentage: 85, color: 'bg-portfolio-pink' },
  { name: 'TypeScript', percentage: 80, color: 'bg-portfolio-blue' },
  { name: 'Tanstack Query', percentage: 75, color: 'bg-portfolio-purple' },
  { name: 'Tailwind CSS', percentage: 90, color: 'bg-portfolio-mint' },
  { name: 'RESTful APIs', percentage: 85, color: 'bg-portfolio-green' },
  { name: 'Zustand', percentage: 85, color: 'bg-portfolio-yellow' },
  { name: 'Redux Toolkit', percentage: 70, color: 'bg-portfolio-red' },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once animation has played, we can disconnect observer
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="skills"
      className="py-20 bg-portfolio-dark relative"
      ref={sectionRef}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Abstract code pattern */}
        <div className="absolute top-10 left-10 text-white/5 text-xs font-mono hidden lg:block">
          {`function useSkills() {`}
          <br />
          {`  const [skills, setSkills] = useState([]);`}
          <br />
          {`  const [isLoading, setIsLoading] = useState(true);`}
          <br />
          {`  `}
          <br />
          {`  useEffect(() => {`}
          <br />
          {`    // Fetch skills data`}
          <br />
          {`    fetchSkills().then(data => {`}
          <br />
          {`      setSkills(data);`}
          <br />
          {`      setIsLoading(false);`}
          <br />
          {`    });`}
          <br />
          {`  }, []);`}
          <br />
          {`  `}
          <br />
          {`  return { skills, isLoading };`}
          <br />
          {`}`}
        </div>

        {/* Floating shapes */}
        <div className="absolute -bottom-5 right-10 w-32 h-32 border border-portfolio-mint/10 rounded-full"></div>
        <div className="absolute top-20 -right-10 w-40 h-40 border border-portfolio-pink/10 rounded-full"></div>

        {/* Tech words in background */}
        <div className="absolute bottom-10 left-[40%] text-portfolio-mint/5 text-5xl font-bold rotate-12 hidden lg:block">
          HTML
        </div>
        <div className="absolute top-[40%] right-20 text-portfolio-blue/5 text-5xl font-bold -rotate-12 hidden lg:block">
          CSS
        </div>
        <div className="absolute top-20 left-20 text-portfolio-pink/5 text-5xl font-bold rotate-3 hidden lg:block">
          React
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-portfolio-mint mx-auto"></div>
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            I specialize in frontend development with a strong focus on creating
            responsive, user-friendly interfaces using modern technologies.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -right-6 -top-6 bg-portfolio-dark text-white py-2 px-6 rounded-full border border-white/10 z-20">
            <span className="text-4xl font-bold">02</span>
          </div>

          <div className="bg-portfolio-card p-8 rounded-lg border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-white/60">{skill.percentage}%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className={cn('progress-fill', skill.color)}
                      style={{
                        width: isVisible ? `${skill.percentage}%` : '0%',
                        opacity: isVisible ? 1 : 0,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

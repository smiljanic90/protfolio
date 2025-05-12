import myimage from '../assets/myimage.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-portfolio-darker relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute -left-2 -top-2 w-full h-full border-2 border-portfolio-mint rounded-lg"></div>
              <div className="absolute -right-2 -bottom-2 w-full h-full border-2 border-portfolio-blue rounded-lg"></div>
              <div className="relative bg-portfolio-card rounded-lg overflow-hidden z-10">
                <img
                  src={myimage}
                  alt="Milorad Smiljanic"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -right-6 -bottom-6 bg-portfolio-dark text-white py-2 px-6 rounded-full border border-white/10 z-20">
                <span className="text-4xl font-bold">02</span>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="section-title">About Me</h2>

            <p className="text-white/80 mb-6">
              I am a Front End Developer with experience in creating responsive,
              user-friendly web applications. With a strong background in HTML,
              CSS, JavaScript, and modern frameworks like React, I build
              engaging and interactive web experiences.
            </p>

            <p className="text-white/80 mb-6">
              My goal is to create websites that not only look visually
              appealing but also provide an intuitive user experience. I am
              passionate about staying up-to-date with the latest web
              technologies and best practices.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h3 className="text-white font-medium mb-1">Name</h3>
                <p className="text-white/60">Milorad Smiljanic</p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Email</h3>
                <p className="text-white/60">office@miloradsmiljanic.com</p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Location</h3>
                <p className="text-white/60">
                  Banja Luka, Bosnia and Herzegovina
                </p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Availability</h3>
                <p className="text-white/60">Full-time, Freelance</p>
              </div>
            </div>

            <a
              href="#"
              download
              className="inline-block px-8 py-3 bg-portfolio-dark hover:bg-portfolio-dark/80 text-white border border-white/10 rounded-lg transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

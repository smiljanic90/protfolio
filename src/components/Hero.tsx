import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import myimage from '../assets/myimage.png';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative bg-portfolio-dark overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Enhanced background elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-portfolio-blue/10 animate-pulse-light"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-portfolio-pink/10 animate-pulse-light"></div>
        <div className="absolute top-2/3 left-1/3 w-24 h-24 rounded-full bg-portfolio-mint/10 animate-pulse-light"></div>

        {/* New decorative elements */}
        <div className="absolute top-20 right-[20%] w-64 h-64 bg-gradient-to-r from-portfolio-mint/5 to-portfolio-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-[15%] w-56 h-56 bg-gradient-to-r from-portfolio-pink/5 to-portfolio-purple/5 rounded-full blur-3xl"></div>

        {/* Code-like decoration */}
        <div className="absolute top-[15%] right-[10%] text-portfolio-mint/10 text-xs font-mono hidden lg:block">
          <div className="hero">
            <br />
            <h1>Frontend Developer</h1>
            <br />
            <p>Creating amazing web experiences</p>
            <br />
          </div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWMTBoMnY0em0wLTZoLTJWNGgydjR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div
            className="lg:col-span-7 order-2 lg:order-1 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex items-center mb-4">
              <span className="inline-block w-8 h-[2px] bg-portfolio-mint mr-3"></span>
              <span className="text-white/80 uppercase tracking-wider text-sm">
                Frontend Developer
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="block">CREATIVE</span>
              <span className="block">DEVELOPER</span>
            </h1>

            <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl">
              I'm Milorad Smiljanic, a passionate Frontend Developer with
              expertise in creating responsive, user-friendly web applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToContact}
                className="bg-portfolio-mint hover:bg-portfolio-mint/90 text-black font-medium px-8 py-6"
              >
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                className="border-white/20 hover:bg-white/10 text-white px-8 py-6"
                onClick={() =>
                  document
                    .getElementById('about')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Learn More
              </Button>
            </div>
          </div>

          <div
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-center animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
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
                <span className="text-4xl font-bold">01</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-white/40 text-sm mb-2 animate-bounce">
            Scroll Down
          </span>
          <div className="flex space-x-1">
            <div className="nav-indicator active"></div>
            <div className="nav-indicator"></div>
            <div className="nav-indicator"></div>
            <div className="nav-indicator"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import logo from '../assets/debugger-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-portfolio-darker border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img
              src={logo}
              alt="Milorad Smiljanic"
              className="w-48 h-full object-cover"
            />
          </div>

          <div className="text-white/60 text-sm">
            &copy; {currentYear} Milorad Smiljanic. All rights reserved.
          </div>

          <div className="mt-4 md:mt-0">
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/milorad-smiljanic-b4543b107/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-portfolio-mint transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-portfolio-mint transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-portfolio-mint transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Importing the required CSS and icons
import './Footer.css';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        
        {/* Author copyright */}
        <p className="footer-author">
          © {new Date().getFullYear()} Sahil Jeet Singh
        </p>

        {/* Developer credit section */}
        <div className="footer-dev">

          {/* Developer name */}
          <p className="footer-name"> Dev.Ajit Kumar Jha</p>

          {/* Social & contact icons */}
          <div className="footer-icons">
            {/* GitHub Profile */}
            <a 
              href="https://github.com/ajit-web2003" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            {/* Instagram Profile */}
            <a 
              href="https://instagram.com/akjha_vats" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            {/* Direct Email */}
            <a href="mailto:your.ajitjha034@gmail.com">
              <MdEmail />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;

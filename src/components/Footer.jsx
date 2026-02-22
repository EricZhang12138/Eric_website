import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          Eric Zhang &copy; {new Date().getFullYear()}
        </p>
        <div className="footer-links">
          <a href="https://github.com/EricZhang12138" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <span className="footer-divider">/</span>
          <a href="https://www.linkedin.com/in/yuou-zhang-455308268/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

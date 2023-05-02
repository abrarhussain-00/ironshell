import React from 'react';

const Footer = () => {
  return (
    <footer className="dark-footer">
      <div className="footer-content">
        <p>Designed and developed by Abrar Hussain</p>
        <p>
          Portfolio: <a href="https://www.abrarbiz.net">abrarbiz.net</a>
        </p>
        <p>
          GitHub: <a href="https://www.github.com/abrarhussain-00">github.com/abrarhussain-00</a>
        </p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/abrar-hussain00">linkedin.com/in/abrar-hussain00</a>
        </p>
        <p>
          Twitter: <a href="https://www.instagram.com/abrarhussain_00/">instagram.com/abrarhussain_00/</a>
        </p>
      </div>
      <style jsx>{`
        .dark-footer {
          background-color: #333;
          color: #fff;
          padding: 20px;
          position: fixed;
          left: 0;
          bottom: 0;
          width: 100%;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .footer-content p {
          margin: 5px 0;
        }

        .footer-content a {
          color: #fff;
          text-decoration: none;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center">
      <p>© 2024 Palla Venkateswarlu. All Rights Reserved.</p>
      <div className="flex justify-center mt-2">
        <a
          href="https://www.linkedin.com/in/palla-venkatesh-59106a175/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/palla023"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;


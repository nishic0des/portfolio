import React from "react";

import qna from "../assets/images/qna.png";
import ebook from "../assets/images/ebook.png";
import videotube from "../assets/images/videotube.png";
import auth from "../assets/images/auth.png";
import ecommerce from "../assets/images/ecommerce.jpg";
import enterpriseResource from "../assets/images/enterpriseResource.jpg";
import jewellery from "../assets/images/jewellery company.webp";
import bytesize from "../assets/images/bytesize.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <>
      <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
          <div className="project">
            <a
              href="https://github.com/nishic0des/devsolve"
              target="_blank"
              rel="noreferrer"
            >
              <img src={qna} className="zoom" alt="thumbnail" width="100%" />
            </a>
            <a
              href="https://github.com/nishic0des/devsolve"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Interactive QnA Platform</h2>
            </a>
            <p>
              Built an AI-powered Q&A platform enhancing developer learning with
              expert-led video explanations.
            </p>{" "}
          </div>

          <div className="project">
            <a
              href="https://github.com/nishic0des/bytesize"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={bytesize}
                className="zoom"
                alt="thumbnail"
                width="100%"
              />
            </a>
            <a
              href="https://github.com/nishic0des/bytesize"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Media Optimization SaaS</h2>
            </a>
            <p>
              Developed an AI powered Media Optimization platform that makes
              media compression seamless.
            </p>
          </div>
          <div className="project">
            <img
              src={jewellery}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
            <h2>Jewellery eCommerce App</h2>
            <p>
              Developed minimalist jewellery e-commerce app with clean
              navigation, high-quality product imagery, and a modern layout.
            </p>
          </div>
          <div className="project">
            <img
              src={enterpriseResource}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
            <h2>ERP Dashboard</h2>
            <p>
              Developed an enterprise resource planning (ERP) dashboard with
              real-time analytics, workflow tracking, and data-driven insights
              for efficient business management.
            </p>
          </div>

          <div className="project">
            <a
              href="https://github.com/nishic0des/videotube"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={videotube}
                className="zoom"
                alt="thumbnail"
                width="100%"
              />
            </a>
            <a
              href="https://github.com/nishic0des/videotube"
              target="_blank"
              rel="noreferrer"
            >
              <h2>VideoChat Network Hub</h2>
            </a>
            <p>
              Built a social platform combining real-time updates with immersive
              video sharing for seamless engagement.
            </p>
          </div>
          <div className="project">
            <a
              href="https://github.com/nishic0des/e-commerce-website"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={ecommerce}
                className="zoom"
                alt="thumbnail"
                width="100%"
              />
            </a>
            <a
              href="https://github.com/nishic0des/e-commerce-website"
              target="_blank"
              rel="noreferrer"
            >
              <h2>eCommerce Website</h2>
            </a>
            <p>
              Developed a fully functional eCommerce platform built for
              streamlined electronics browsing and purchasing.
            </p>
          </div>

          <div className="project">
            <img src={ebook} className="zoom" alt="thumbnail" width="100%" />
            <h2>eBook App</h2>
            <p>
              Built an interactive eBook app with annotation, highlighting, and
              note-taking features for an enhanced reading experience.
            </p>
          </div>
          <div className="project">
            <a
              href="https://github.com/nishic0des/auth-nextjs"
              target="_blank"
              rel="noreferrer"
            >
              <img src={auth} className="zoom" alt="thumbnail" width="100%" />
            </a>
            <a
              href="https://github.com/nishic0des/auth-nextjs"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Authentication App</h2>
            </a>
            <p>
              Developed a secure authentication app with a clean user interface
              for seamless user registration and login.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;

import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Training & Bootcamp</small>
            </article>
            {/**
             * 
            <article className="about__card">
              <FiUser className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
             */}

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>3 Completed</small>
            </article>
          </div>
          <p>
            Saya adalah <em>Fresh graduate</em> dari Politeknik Manufaktur Astra
            dengan jurusan Mekatronika. Saya sempat mempelajari bahsa{" "}
            <strong>C</strong> dan <strong>C++</strong> pada saat kuliah.
            Setelah saya lulus kuliah saya mencoba mempelajari pemprograman lagi
            dalam pembuatan website. Awalnya saya belajar dengan cara membeli
            course online, lalu saya mengikuti sebuah pelatihan Web Developer
            yang diadakan oleh <strong>Kominfo</strong> yang bekerjasama dengan
            politeknik yang ada di indonesia yang dilakukan secara
            daring/online. Setelah itu, saya mengikuti Bootcamp{" "}
            <em>fullstack Node.js</em> yang di adakan oleh{" "}
            <strong>Code.id</strong> yang dilakukan secara daring/online.
          </p>

          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

import proPic from "../assets/profile.png";
import {
  FaFacebookF,
  FaGit,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
const About = () => {
  return (
    <div className="lg:mx-12 mx-4 my-8" id="about">
      <div className=" text-center">
        <h2 className="md:text-5xl text-4xl text-headingcolor mb-20 font-bold">
          About Me
        </h2>
        <p className="mt-8 md:pr-8 mb-8 md:text-xl">
          Hello there! I'm <b>Vraj Patel</b>, a passionate frontend developer
          with 1 years of experience crafting delightful user experiences.{" "}
          <br></br>My interest in web development started back in 2020
          <br /> <br />I specialize in creating fast, responsive, and intuitive
          websites using modern web technologies like{" "}
          <b>HTML5, CSS3 , JavaScript,Tailwindcss,React JS.</b> I pay great
          attention to detail and aim for pixel-perfect precision in all my
          projects.<br></br>I have a solid understanding of UX/UI principles,
          which allows me to effectively collaborate with designers and bring
          static designs to life. My goal is not only to deliver effective code
          but also to ensure a seamless user experience.
        </p>
        <div className="flex justify-center items-center gap-14   ml-4">
          <a href="https://www.facebook.com/profile.php?id=100051481396451&mibextid=ZbWKwL">
            <FaFacebookF className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-3xl hover:text-primary" />
          </a>
          <a href="https://www.instagram.com/vraj.__.patel_/">
            <FaInstagram className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-3xl hover:text-primary" />
          </a>
          <a href="https://www.linkedin.com/in/vraj-patel-6b1813247/">
            <FaLinkedin className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-3xl hover:text-primary" />
          </a>
          <a href="https://github.com/vrajpatel48">
            <FaGithub className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-3xl hover:text-primary" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

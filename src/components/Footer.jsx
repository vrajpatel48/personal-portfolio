import logo from "../assets/logo.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-bgShade py-12 md:px-12 px-4 text-center">
      <div className="flex flex-col md:flex-row md:text-center  gap-4 flex-wrap ">
        <a
          href="#"
          className="block text-primary hover:text-primary  py-2 px-4"
        >
          Home
        </a>
        <a href="#" className="block hover:text-primary py-2 px-4">
          Skills
        </a>
        <a href="#" className="block  hover:text-primary py-2 px-4">
          About me
        </a>
        <a href="#" className="block  hover:text-primary py-2 px-4">
          Portfolio
        </a>
      </div>
    </div>
  );
};

export default Footer;

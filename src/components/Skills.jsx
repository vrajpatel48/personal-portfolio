import react from "react";
import HTML from '../assets/html.jpeg';
// import HTML2 from '../assets/CSS-logo.png';
import HTML3 from '../assets/javascript.png';

import HTML4 from '../assets/react.png';

import HTML5 from '../assets/tailwind.jpeg';

import HTML6 from '../assets/type.png';

import HTML7 from '../assets/next.jpeg';



const Skills = () => {
   const skills = [
  {
    id: 1,
    name: "HTML5",

    image: HTML,
  },
  {
    id: 2,
    name: "CSS3",

    image: HTML2,
  },
  {
    id: 3,
    name: "JAVASCRIPT",

    image: HTML3,
  },
  {
    id: 4,
    name: "REACT JS",

    image: HTML4,
  },
  {
    id: 5,
    name: "TAILWIND CSS",

    image:HTML5,
  },
  {
    id: 6,
    name: "TYPESCRIPT",

    image: HTML6,
  },
  {
    id: 7,
    name: "NEXT JS",

    image: HTML7,
  },
];

  return (
    <div className="lg:mx-12 mx-4 py-32 my-8" id="skills">
      <div className="mb-20 text-center">
        <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
          My Skills
        </h2>
      </div>

      {/* skillis card */}
      <div className=" grid lg:grid-cols-4 text-center  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300"
          >
            <img
              src={skill.image}
              alt=""
              className="w-40 h-44 p-3  bg-white ml-10 rounded-lg shadow-md mb-7"
            />
            <h3 className="text-2xl font-bold ">{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

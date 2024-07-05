import html from "../assets/html.jpeg";

import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.jpeg";
import type1 from "../assets/type.png";
import next from "  ../assets/next.jpeg";

const skills = [
  {
    id: 1,
    name: "HTML5",
    image: html,
  },
  {
    id: 2,
    name: "CSS3",
    image: css,
  },
  {
    id: 3,
    name: "JAVASCRIPT",
    image: javascript,
  },
  {
    id: 4,
    name: "REACT JS",
    image: react,
  },
  {
    id: 5,
    name: "TAILWIND CSS",
    image: tailwind,
  },
  {
    id: 6,
    name: "TYPESCRIPT",
    image: type1,
  },
  {
    id: 7,
    name: "NEXT JS",
    image: next,
  },
];

const Skills = () => {
  return (
    <div className="lg:mx-12 mx-4 py-32 my-8" id="skills">
      <div className="mb-20 text-center">
        <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
          My Skills
        </h2>
      </div>

      {/* skillis card */}
      <div className="grid lg:grid-cols-4 text-center md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-40 h-44 p-3 bg-white ml-7 rounded-lg shadow-md mb-7"
            />
            <h3 className="text-2xl font-bold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

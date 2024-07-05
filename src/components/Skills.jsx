import react from "react";
import { skills } from "./Image";

const Skills = () => {
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

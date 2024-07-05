/* eslint-disable react/no-unknown-property */

import { useEffect, useState } from "react";
import type from "../assets/brancymain.png";
import type1 from "../assets/medical.png";
import type2 from "../assets/swiggy.png";

const projectdata = [
  {
    id: "1",
    image: type,
    name: "brancy",
    description:
      "made the brancy cosmetic website in the team project using next js in the internship",
    link: "https://cosmetic-seven-semicolons.vercel.app/",
  },
  {
    id: "2",
    image: type1,
    name: "medical hardy",
    description: "medical hardy UI made using tailwind css",
    link: "https://vrajpatel48.github.io/thinknovus/",
  },
  {
    id: "3",
    image: type2,
    name: "swiggy clone",
    description: "swiggy UI  clone using react js",
    link: "https://swiggy-ten.vercel.app/",
  },
];

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="lg:mx-12 mx-4 my-32" id="portfolio">
      <div className="mb-20">
        <p className="text-xl text-headingcolor font-semibold mb-5"></p>
        <h2 className="md:text-5xl text-4xl  text-headingcolor font-bold">
          My Portfolio
        </h2>
      </div>

      {/* project card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projectdata.map((projectdata) => (
          <div key={projectdata.id} className="shadow-xl rounded-lg">
            <img src={projectdata.image} alt="" className="" />
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-2 text-headingcolor">
                {projectdata.name}
              </h3>
              <p className="text-body mb-4">{projectdata.description}</p>
              <a
                href={projectdata.link}
                className="underline underline-offset-8"
              >
                View In live{" "}
                <img
                  src="/src/assets/arrow.png"
                  alt=""
                  className="w-3 inline-block ml-3"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

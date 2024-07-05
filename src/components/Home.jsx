import mainbanner2 from "../assets/mainbanner.png";

const Home = () => {
  return (
    <div className="mt-20 bg-bgShade" id="home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between  gap-5">
        <div className="md:w-1/2 w-full">
          <img src={mainbanner2} alt="" className=" " />
        </div>
        {/* left side */}
        <div className="md:w-1/2 w-full mt-5">
          <p className="text-xl text-headingcolor font-semibold mb-5">
            Hey, I am Vraj
          </p>
          <h1 className="md:text-6xl text-4xl font-bold text-headingcolor leading-snug md:leading-[76px]  mb-5">
            Elevating User Experience through{" "}
            <span className="text-blue-500">Frontend Development</span>
          </h1>
          <p className="text-2xl text-body leading-9 mb-8">
            Passionate about blending design with functionality to create
            engaging web solutions. Focused on user-centric frontend
            development.
          </p>
        </div>
        {/* rigth side */}
      </div>
    </div>
  );
};

export default Home;

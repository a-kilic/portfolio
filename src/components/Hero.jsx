import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaMailBulk } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-sky-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl text-sky-950 font-bold tracking-wider">
            Hi, I'm Arda
          </h1>
          <p className="mt-4 text-3xl text-sky-700 capitalize tracking-wide">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg text-sky-700 capitalize tracking-wide">
            Transforming Visions into Visuals
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/a-kilic" target="blank">
              <FaGithubSquare className="h-8 w-8 text-sky-500 hover:text-sky-900 duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/a-kilic/" target="blank">
              <FaLinkedin className="h-8 w-8 text-sky-500 hover:text-sky-900 duration-300" />
            </a>
            <a href="mailto:adk_05@outlook.com">
              <FaMailBulk className="h-8 w-8 text-sky-500 hover:text-sky-900 duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};
export default Hero;

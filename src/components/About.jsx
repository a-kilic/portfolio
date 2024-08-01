import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="about me" />
          <p className="text-slate-600 mt-8 leading-loose">
            I'm a front-end developer from Germany, specializing in HTML, CSS,
            JavaScript, and React. Passionate about creating clean,
            user-friendly interfaces, I focus on responsive design and
            performance optimization. I utilize modern CSS frameworks like
            Bootstrap and Tailwind to streamline development. My goal is to
            continuously improve my skills and to grow as a web developer.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;

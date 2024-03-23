import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Hero({ language }) {
  return (
    <div className="flex flex-col flex-grow justify-center text-center md:ml-[160px] md:text-left">
      <span className="text-white text-3xl md:text-6xl font-[Raleway] animate__animated animate__fadeIn">
        Bruno Romas
        <span className="animate__animated animate__fadeOut animate__delay-2s absolute">
          zkiewicz
        </span>
      </span>
      {language == "en" ? (
        <h3 className="text-white text-xl md:text-2xl ml-1 font-[Poppins] animate__animated animate__fadeIn animate__delay-1s">
          I am a <span className="text-blue-300">web developer</span>
        </h3>
      ) : (
        <h3 className="text-white text-xl md:text-2xl ml-1 font-[Poppins] animate__animated animate__fadeIn animate__delay-1s">
          Sou um <span className="text-blue-300">desenvolvedor web</span>
        </h3>
      )}
      <IconContext.Provider
        value={{
          className: "text-white hover:text-blue-300 text-xl ml-1 mr-2 inline",
        }}
      >
        <div className="animate__animated animate__fadeIn animate__delay-1s">
          <a href="https://www.linkedin.com/in/bpromas">
            <FaLinkedin />
          </a>
          <a href="https://github.com/bpromas">
            <FaGithub />
          </a>
          <a href="mailto:bpromas@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Hero;

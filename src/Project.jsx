import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";

function Project({ project, language }) {
  const lang = language;
  return (
    <div className="bg-slate-700 text-white flex gap-4 flex-col flex-1 basis-1/3">
      <div className="m-4 block">
        <a href={project.liveUrl}>
          <img
            src={project.img}
            alt={project.imgAlt}
            className="max-h-60 flex-shrink-0 max-w-[319px] self-center mr-4 mb-4 float-left block"
          />
        </a>
        <h3 className="text-3xl font-[Raleway] mb-4">{project.name}</h3>
        {project.description[lang].map((paragraph) => (
          <p className="mb-3 w-[100%]">{paragraph}</p>
        ))}
        <a
          href={project.liveUrl}
          className="font-2xl text-red-400 hover:text-rose-600 visited:text-rose-400"
        >
          Live demo
        </a>
        <br />
        <IconContext.Provider
          value={{
            className: "text-white hover:text-red-300 text-xl ml-1 mr-2 inline",
          }}
        >
          <a href={project.gitUrl}>
            <FaGithub />
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Project;

import downarrow from "./assets/down-arrow.svg";

function MyProjects({ language }) {
  return (
    <div className="text-white flex flex-col mb-2 animate__animated animate__bounce animate__delay-3s font-[Poppins]">
      {language == "en" ? (
        <div className="self-center">my projects</div>
      ) : (
        <div className="self-center">meus projetos</div>
      )}

      <img className="h-4" src={downarrow} alt="down-arrow" />
    </div>
  );
}

export default MyProjects;

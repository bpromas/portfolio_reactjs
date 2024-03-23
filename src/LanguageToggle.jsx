import flagBrazil from "./assets/flag_brazil_16px.png";
import flagUSA from "./assets/flag_usa_16px.png";

function LanguageToggle({ toggleLanguage, language }) {
  return (
    <div
      onClick={toggleLanguage}
      className="cursor-pointer text-white text-xs flex gap-1 justify-end mr-16"
    >
      {language == "en" ? (
        <img src={flagUSA} alt="USA Flag" />
      ) : (
        <img src={flagBrazil} alt="Bandeira do Brasil" />
      )}

      {language == "en" ? <span> English </span> : <span> Português</span>}
    </div>
  );
}

export default LanguageToggle;

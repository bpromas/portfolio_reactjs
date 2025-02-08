import LanguageToggle from "./LanguageToggle.jsx";
import Hero from "./Hero";
import MyProjects from "./MyProjects";
import Project from "./Project.jsx";

import tunicPic from "./assets/tunic-reader.png";
import presidentesPic from "./assets/presidentes.png";
// import gtrrPic from "./assets/gtrr.png";
import jankenPic from "./assets/janken.png";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("en");
  const toggleLanguage = () => {
    if (language == "en") setLanguage("pt-br");
    if (language == "pt-br") setLanguage("en");
  };
  const projects = [
    {
      key: 1,
      name: "Presidentes",
      description: {
        en: [
          "I wanted to experiment with some user interactivity within the React framework, and had the idea of making a little game for the history buffs.",
        ],
        "pt-br": [
          "Queria experimentar com interatividade de usuário dentro do framework React, e tive a ideia de fazer um joguinho para os fãs de história.",
        ],
      },
      gitUrl: "https://github.com/bpromas/presidentes",
      liveUrl: "https://presidentes.vercel.app/",
      img: presidentesPic,
      imgAlt: "Presidentes",
    },
    {
      key: 2,
      name: "Tunic Reader",
      description: {
        en: [
          "User interface for writing and translating Tunic Script (the language used in the game Tunic) converting it to a phonetic string.",
          "This was a passion project and is the first Tunic translator that returns proper phonetic results that can then be used with text-to-speech readers to get the most accurate results.",
          "I decided to use this project as my first experience with Tailwind and Typescript.",
        ],
        "pt-br": [
          "Interface para escrita e tradução de Tunic Script (o idioma usado no jogo Tunic) convertendo para uma string fonética",
          "Este foi um projeto pessoal e é o primeiro tradutor de Tunic cujo resultado pode ser lido por softwares de leitura em voz (text-to-speech), fornecendo uma solução única para fãs do jogo.",
          "Decidi utilizar este projeto como minha primeira experiência em Tailwind e Typescript.",
        ],
      },
      gitUrl: "https://github.com/bpromas/tunic-reader",
      liveUrl: "https://tunic-reader.vercel.app/",
      img: tunicPic,
      imgAlt: "Tunic",
    },
    // {
    //   key: 3,
    //   name: "GTRR",
    //   description: {
    //     en: [
    //       "React website for an independent translation collective.",
    //       "I was approached by a web designer to undertake the development for this website. The design was creative and eye-catching and it's been a pleasant challenge to translate such beautiful design into maintainable CSS. This was also my first professional experience using React.",
    //     ],
    //     "pt-br": [
    //       "Website em React para um coletivo de tradução independente",
    //       "Fui contactado por um designer para desenvolver o seu design para este website. O design me chamou atenção por sua criatividade e estética e foi um desafio prazeroso traduzir um design belo para um CSS robusto. Esta também foi minha primeira experiência profissional utilizando o React.",
    //     ],
    //   },
    //   gitUrl: "https://github.com/comunista-de-iphone/GTRR",
    //   liveUrl: "https://gtrr.vercel.app/",
    //   img: gtrrPic,
    //   imgAlt: "GTRR",
    // },
    {
      key: 4,
      name: "Janken",
      description: {
        en: [
          "A simple browser reaction-time rock-paper-scissors done as an assignment for The Odin Project.",
          "This was supposed to be a simple recreation of the classic game vs a randomized opponent, but I chose to add an extra layer of complexity and decided to pay special attention to the design on this one.",
          "Playable with mouse or keyboard.",
        ],
        "pt-br": [
          "Um simples jogo de pedra-papel-tesoura que também testa o seu tempo de reação, desenvolvido como uma tarefa para o Odin Project",
          "Era para ser uma simples recriação do jogo clássico contra um oponente randomizado, mas eu decidi adicionar uma camada extra de complexidade, além de dedicar mais atenção ao design",
          "Jogável utilizando mouse ou teclado.",
        ],
      },
      gitUrl: "https://github.com/bpromas/janken",
      liveUrl: "https://bpromas.github.io/janken/",
      img: jankenPic,
      imgAlt: "janken",
    },
  ];
  return (
    <div className="bg-black pb-8">
      <div className="h-[100svh] flex flex-col">
        <LanguageToggle toggleLanguage={toggleLanguage} language={language} />
        <Hero language={language} />
        <MyProjects language={language} />
      </div>
      <div className="flex gap-4 mx-16 flex-wrap">
        {projects.map((project) => {
          return <Project project={project} language={language} />;
        })}
      </div>
    </div>
  );
}

export default App;

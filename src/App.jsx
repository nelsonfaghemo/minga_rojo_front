import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import headerBackground from "./assets/images/header-home.png";
import menuHamburguesa from "./assets/images/menu-hamburguesa.png";
import logoMinga from "./assets/images/logo-minga.png";
import flechaIzquierda from "./assets/images/arrow-izquierda.png";
import flechaDerecha from "./assets/images/arrow-derecha.png";
import nami from "./assets/images/nami-png-home.png";
import portada from "./assets/images/one-piece-portada-main.png";
import bakugo from "./assets/images/bakugo-footer.png";
import logoMinga2 from "./assets/images/logo-minga-2.png";
import corazoncito from "./assets/images/union.png";
import facebook from "./assets/images/facebook.png";
import twitter from "./assets/images/twitter.png";
import vimeo from "./assets/images/vimeo.png";
import youtube from "./assets/images/youtube.png";


import "./App.css";

function App() {
  return (
    <main className="w-full bg-white">
      <header
        className="w-full h-96 bg-cover bg-no-repeat object-cover "
        style={{ backgroundImage: `url(${headerBackground})` }}
      >
        <nav className="flex justify-between items-center pt-6 px-8">
          <img
            src={menuHamburguesa}
            className="object-cover  h-10"
            alt="hamburguesa"
          />
          <img src={logoMinga} className="object-cover  h-8" />
        </nav>
        <div className="flex flex-col py-20 pl-10">
          <h1 className="text-white font-bold text-5xl">
            For the love of manga
          </h1>
          <div>
            <p className="text-white font-normal text-lg">
              Explore our varieties
            </p>
            <span className="text-white font-bold text-sm">#MingaLove❤️</span>
          </div>
          <button className="bg-white text-orange-500 font-medium my-2 py-2 px-3 w-40 rounded">
            Let's go!
          </button>
        </div>
      </header>
      <div className=" h-60 w-full bg-white flex items-center justify-center">
        <div className=" h-48 w-5/6 bg-gradient-to-b from-orange-500 to-orange-400 rounded flex items-center justify-between px-5">
          <img src={flechaIzquierda} className="object-cover  w-6 h-6" />
          <div className="flex flex-row justify-start w-5/6 gap-9">
            <img src={nami} className="object-cover  h-56" />
            <img src={portada} className="object-cover  h-48 pr-16" />
            <div className="flex flex-col justify-center w-2/5">
              <h3 className="text-white">Shonen</h3>
              <p className="text-white text-xs">
                manga is aimed at adolescent boys and features a significant
                amount of action, often accompanied by humorous situations.
                Emphasizing the importance of camaraderie and teamwork among the
                members of a collective or combat team, these series stand out
                for their focus on the bonds between characters.
              </p>
            </div>
          </div>
          <img src={flechaDerecha} className="w-6 h-6" />
        </div>
      </div>
      <footer className="w-full">
        <img
          src={bakugo}
          className="w-full h-48 object-cover object-top rounded-[0_0_48%_52%/_0%_0%_100%_100%]"
        />
        <div className="w-full h-48 bg-white flex justify-center items-center ">
          <div className="w-3/4 bg-white flex justify-between items-center pb-4 border-b border-gray-300">
            <div className="w-1/6 flex items-center justify-around">
              <a>Home</a>
              <a>Mangas</a>
            </div>
            <img src={logoMinga2} className="w-1/6" />
            <div className="w-1/6">
              <div className="flex justify-between py-3 ">
                <img src={facebook} className="w-[15%] object-contain" />
                <img src={twitter} className="w-[15%] object-contain" />
                <img src={vimeo} className="w-[15%] object-contain" />
                <img src={youtube} className="w-[15%] object-contain" />
              </div>
              <button className="text-white px-14 py-1  bg-orange-500 rounded">
                Donate <span src={corazoncito}></span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;

/* 
PascalCase - Ejemplos:
Index
Button
Card
Carousel
FormRegister
*/

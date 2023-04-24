import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import headerBackground from "./assets/images/header-home.png";
import flechaIzquierda from "./assets/images/arrow-izquierda.png";
import flechaDerecha from "./assets/images/arrow-derecha.png";
import nami from "./assets/images/nami-png-home.png";
import portada from "./assets/images/one-piece-portada-main.png";
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import "./App.css";


function App() {

  return (
    <main className="w-full bg-white">
      <header
        className="w-full h-96 bg-cover bg-no-repeat object-cover "
        style={{ backgroundImage: `url(${headerBackground})` }}
      >
        <Navbar/>
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
      <Footer/>
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

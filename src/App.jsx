import NavBar from "./assets/components/NavBar/NavBar";
import Gallery from "./assets/components/SliderGallery/Gallery";
import { dataImages } from "../data";
import GalleryHorizontal from "./assets/components/HorizontalSlider/GalleryHorizontal";
import styled from "styled-components";
import "./App.css";
import CardGame from "./assets/components/CardGame";
import CardGameHorizontal from "./assets/components/CardGameHorizontal";
import GameCardNew from "./assets/components/CardVertical";
import HeroCard from "./assets/components/HeroCard";
import NavbarStyled from "./assets/components/NavBarStyled";
import CategorySplitter from "./assets/components/CategorySplitter";
CategorySplitter

function App() {
  return (
    <div className="App">
<NavBar/>
      <HeroCard
        image="ceramic1.jpg"
        title="Nombre del juego"
        description="Descripción del juego"
      />
<CategorySplitter
title= "Categoría"
/>
<div className="gameContainer">
      <GameCardNew
        image="popheart1.jpg"
        title="Nombre del juego"
        description="Descripción del juego"
      />
       <GameCardNew
        image="news1.jpg"
        title="Nombre del juego"
        description="Descripción del juego"
      />

<GameCardNew
        image="sara1.jpg"
        title="Nombre del juego"
        description="Descripción del juego"
      />
      <GameCardNew
        image="mural1.jpg"
        title="Nombre del juego"
        description="Descripción del juego"
      />
      </div>
    </div>
  );
}

export default App;

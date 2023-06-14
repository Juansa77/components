
import NavBar from './assets/components/NavBar/NavBar'
import Gallery from './assets/components/SliderGallery/Gallery'
import { dataImages } from '../data'
import GalleryHorizontal from './assets/components/HorizontalSlider/GalleryHorizontal'
import styled from 'styled-components'
import './App.css'
import CardGame from './assets/components/CardGame'
import CardGameHorizontal from './assets/components/CardGameHorizontal'
import GameCardNew from './assets/components/CardVertical'


function App() {


  return (
    <div className="App">
    <NavBar/>
    <Gallery dataImages={dataImages}/>

    <CardGame
        avatar="sara1.jpg"
        username="usuario123"
        image="popheart1.jpg"
        content="Nombre del juego"
      />

<CardGameHorizontal
        avatar="sara1.jpg"
        username="usuario123"
        image="popheart1.jpg"
        content="Nombre del juego"
      />

<GameCardNew
        image="popheart1.jpg"
        title="Nombre del juego"
        description= "Descripción del juego"

      />
    </div>
  )
}

export default App

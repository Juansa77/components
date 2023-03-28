
import NavBar from './assets/components/NavBar/NavBar'
import Gallery from './assets/components/SliderGallery/Gallery'
import { dataImages } from '../data'
import GalleryHorizontal from './assets/components/HorizontalSlider/GalleryHorizontal'

import './App.css'

function App() {


  return (
    <div className="App">
    <NavBar/>
    <Gallery dataImages={dataImages}/>
    <GalleryHorizontal dataImages={dataImages}/>

    </div>
  )
}

export default App

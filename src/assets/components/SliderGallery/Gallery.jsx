import React, { createRef } from "react";

import { useRef } from "react";


const Gallery = ({ dataImages }) => {
  const galleryImages = dataImages;
  var imageOpacity = null;

  //Declaramos useRef para apuntar a la imagen grande
  const imageRef = useRef();
  //Creamos un useef con Array vacio y después hacemos un map para meter el Ref a todos los elementos que creamos. En el map de la creación de elementos lo igualamos al index
  const miniaturesRef = useRef(new Array());
  miniaturesRef.current = galleryImages.map(
    (_, index) => miniaturesRef.current[index] ?? createRef()
  );
  var prevRef = 0;
  //Valores iniciales para la imagen grande de la galeria; siempre la primera imagan del array
  var imageSrc = galleryImages[0].img;
  var imageAlt = galleryImages[0].alt;
  var previousIndex = 0;
  //el problema es que el cambio de clase lo hace sobre el elemento imagen completo, puedes cambiar la source, pero el elemento IMG mantiene la clase

  const activeToggleClass = () => {
    imageRef.current.classList.add("active");
  };
  //Función onclick que se aplica a las miniaturas. Toma los valores del elemento seleccionao y camnia las variables a la imagen seleccionada
  const handleImageSelection = (index, element) => {
    imageSrc = element.img;
    imageAlt = element.alt;
    //Accediendo al ref de la miniatura seleccionada mediante index; devolvermos la opcidad al valor precio y se la quitamos al index, al final igualamos el previo al index
    miniaturesRef.current[prevRef].current.style.opacity = 1;
    miniaturesRef.current[prevRef].current.style.border = "";
    miniaturesRef.current[index].current.style.opacity = 0.5;
    miniaturesRef.current[index].current.style.border = "3px solid lightGray";
    prevRef = index;
    if (previousIndex == index) {
      previousIndex = index;
    }
    //Si el index es menor al previo, la animación es hacia la izquierda
    if (index != previousIndex) {
      imageRef.current.src = imageSrc;
      imageRef.current.alt = imageAlt;
      index < previousIndex
        ? imageRef.current.classList.remove("slideLeft", "active")
        : imageRef.current.classList.remove("slideLeft", "active");
      index < previousIndex
        ? imageRef.current.classList.add("slideLeft")
        : imageRef.current.classList.add("slide");
      setTimeout(activeToggleClass, 200);
      previousIndex = index;
    }
  };
  //Handle error
  if (!Array.isArray(dataImages) || dataImages.length <= 0) {
    return null;
  }

  return (
    <div className="galleryContainer">
      <div className="galleryMain">
        <img src={imageSrc} ref={imageRef} className="slide active" />
      </div>
      <div className="galleryMiniature">
        {galleryImages.map((element, index) => (
          <img
            ref={miniaturesRef.current[index]}
            onClick={() => {
              handleImageSelection(index, element);
            }}
            key={index}
            style={{ opacity: imageOpacity }}
            src={element.img}
            alt={element.alt}
            id={index}
          />
        ))}
      </div>
      <style jsx>{`.galleryContainer {
    display: grid;
    grid-template-columns: 6fr 2fr;
    min-width: 50vw;
    max-width: 100%;
    min-height:50vh;
    max-height:70vh;
  
    column-gap: 0.2vh;
    margin-top: 5vh;
  
    justify-items: center;
    justify-content: center;
  }
  
  .galleryMain {
    border: 1px solid lightgrey;
    height: 60vh;
    width: 100%;
    overflow: hidden;
  }
  
  .galleryMain > img {
    width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
  
  .galleryMiniature {
   
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 60vh;
    gap: 1vh;
    overflow: scroll;
    
  }
  
  .galleryMiniature > img {
    max-width: 100%;
    min-height: 20%;
    max-height: 47%;
    object-fit: cover;
  }
  
  .slide {
    opacity: 1;
    transition-duration: 0.3s ease;
    transform: translateX(100%);
    overflow: hidden;
  }
  
  .slide.active {
    opacity: 1;
    transition-duration: 0.3s;
   
  transform: translateX(0);
  }
  
  .slideLeft {
    opacity: 1;
    transition-duration: 0.3s ease;
    transform: translateX(-100%);
    overflow: hidden;
  }
  
  .slideLeft.active {
    opacity: 1;
    transition-duration: 0.3s;
   
  transform: translateX(0);
  }
  
  ::-webkit-scrollbar {
    width: 10px;
    height: 0px;
  }
  

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    
  }
  

  ::-webkit-scrollbar-thumb {
    background: rgb(224, 221, 221);
    
  }
  

  ::-webkit-scrollbar-thumb:hover {
   border: 1px solid rgb(179, 177, 177);
   border-radius: 20px;
  }`}</style>
    </div>
  );
};

export default Gallery;

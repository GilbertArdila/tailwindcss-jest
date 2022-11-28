import { useState } from "react";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import {Footer} from './components/Footer';
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { fastFood } from "./utilities/backend";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App flex flex-col  min-h-screen w-auto  bg-gray-400 ">
      <Header toggle={toggle} setToggle={setToggle}/>
      <Banner  setToggle={setToggle}/>
      
      {fastFood.map((food) => (
        <Card 
        key={food.nombre}
        nombre={food.nombre}
        imagen={food.imagen}
        descripcion={food.descripcion}
        precio={food.precio}
        calificacion={food.calificacion}
        reseñas={food.reseñas}
        width={300}
        heigth={500}
        setToggle={setToggle}
  
        />
      ))}
      
      
      <Form setToggle={setToggle}/>
      <Footer setToggle={setToggle}/>
    </div>
  )
}

export default App

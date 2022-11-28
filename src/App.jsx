import { Card } from "./components/Card"
import { Header } from "./components/Header"
import {Footer} from './components/Footer'
import { Banner } from "./components/Banner"
import { Form } from "./components/Form"

function App() {
  

  return (
    <div className="App flex flex-col  min-h-screen w-auto  bg-gray-400 ">
      <Header/>
      <Banner/>
      <Card 
      imagen={"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=80"}
      nombre={'Hamburguesa con queso'}
      descripción={'Hamburguesa con queso y aderezos'}
      precio={20}
      calificacion={''}
      reseñas={'Reseñas 36'}
      width={300}
      heigth={500}

      />
      <Card 
      imagen={"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=80"}
      nombre={'Hamburguesa con queso'}
      descripción={'Hamburguesa con queso y aderezos'}
      precio={20}
      calificacion={''}
      reseñas={'Reseñas 36'}
      width={300}
      heigth={500}

      />
      <Form/>
      <Footer/>
    </div>
  )
}

export default App

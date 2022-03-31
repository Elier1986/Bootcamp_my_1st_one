import './App.css';
import Message from './Message';


const Mensaje = () => {
  return (
  <div>
    <p>Esto es un mensaje desde mensaje.</p>
  </div>
  )

}

const Cuerpo =()=> {
  return(
    <Message/>
  )
}

const Frame = () => {
  return (
    <div>
      <Cuerpo/>
      <br/>
      <Mensaje></Mensaje>
    </div>
    

  )
}


const  App=() => {
  return (
    <div className="App">
      <h1 color="red">Esto esta chupao!!</h1>
      <h2>Estoy trabajando en ello.</h2>
      <p>Esto esta enredado un poquito. Pero lo <strong>estoy aprendiendo bien.</strong></p>
      <br/>
      <Mensaje/>
      <br></br>
      <Frame/>
    </div>
  )
}

export default App;

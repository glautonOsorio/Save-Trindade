import Pokedex from "./ Pokedex";
import Counter from "./Counter";
import Form from "./Form";
import Header from "./Header";
import Pokebola from "./Pokebola";

function App() {

  let condicional = true

  return ( 
    <div className="App">

      <Header />


      <div className="container-fluid">
        <div className="row">

          <div className="col-sm">
            <h1>Olá Mundo!</h1>
            <Form botao="Enviar" idBotao="1" />
          </div>

          <div className="col-sm">
            <Counter isLoading={false}/>
          </div>

        </div>
        
        <div className="row">
          {condicional ? <Pokebola /> : <p>Carregando...</p>}
        </div>
        
      </div>
      
      <Pokedex />


    </div>
  );
}

export default App;
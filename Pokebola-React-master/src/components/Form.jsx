import Button from "./Button";
import Input from "./Input";

function Form({botao, idBotao}) {
    
    return (  
        <>
            <form className="form-inline">
                <div className="form-group mb-2">
                    <Input tipo="texto" legenda="Digite o email"/>
                </div>
                <div className="form-group mb-2">
                    <Input tipo="password" legenda="Digite a senha"/>
                </div>
                <Button tipo="submit" texto={botao} numero={idBotao}/>
            </form>
        </>
    );
}

export default Form;
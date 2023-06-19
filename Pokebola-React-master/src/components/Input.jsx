function Input({legenda, tipo}) {

    function imprimirInput(e) {
        console.log(e.target.value)
    }        

    return (  
        <input type={tipo} className="col-sm-6" placeholder={legenda} onChange={imprimirInput}/>
    );
}

export default Input;
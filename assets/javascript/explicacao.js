class Texto extends React.Component{

    render(){
        return(
            <div>
                <a href="./index.html">Voltar</a>
                <h1>Exercício 1</h1>
                <p>
                    Criar 3 ou 4 objetos iguais, porém quando apertar o botão, 
                    mudar o nome de cada componente individualmente.
                </p>
            </div>
        )
    }
}

const app = document.getElementById('explicacao');
ReactDOM.render(<Texto/>, app);

class ListaNomes extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            nome1: "Joao",
            nome2: "Pedro",
            nome3: "Marcos",
            nome4: "Lucas"
        }

        this.mudar_nome1 = this.mudar_nome1.bind(this)
        this.mudar_nome2 = this.mudar_nome2.bind(this)
        this.mudar_nome3 = this.mudar_nome3.bind(this)
        this.mudar_nome4 = this.mudar_nome4.bind(this)
    }

    mudar_nome1(){
        this.setState({
            nome1: "Nome mudado 1",
        })
    }

    mudar_nome2(){
        this.setState({
            nome2: "Nome mudado 2",
        })
    }

    mudar_nome3(){
        this.setState({
            nome3: "Nome mudado 3",
        })
    }

    mudar_nome4(){
        this.setState({
            nome4: "Nome mudado 4",
        })
    }

    render(){

        return(
            <div>
                <p>Nome: {this.state.nome1} </p>
                <button onClick = {this.mudar_nome1}>Mude o nome!</button>

                <p>Nome: {this.state.nome2} </p>
                <button onClick = {this.mudar_nome2}>Mude o nome!</button>

                <p>Nome: {this.state.nome3} </p>
                <button onClick = {this.mudar_nome3}>Mude o nome!</button>

                <p>Nome: {this.state.nome4} </p>
                <button onClick = {this.mudar_nome4}>Mude o nome!</button>
            </div>
        )
    }
}

const root = document.getElementById('root');
ReactDOM.render(<ListaNomes/>, root);
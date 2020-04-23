class List {
    constructor() {
        this.data = []
    }

    static soma(a,b){
        return a + b
    }

    add() {
        this.data.push('novo data')
        console.log(this.data)
    }
}

class TodoList extends List {
    constructor(){
        super()

        this.usuario = 'flavio'
    }

    mostraUsuario(){
        console.log(this.usuario)
    }

}

const MinhaTodo = new TodoList()

document.getElementById("btnAdd").onclick = () => {
    MinhaTodo.add()
}

console.log(List.soma(2,6))
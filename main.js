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

const arr = [1,2,3,4,5]

const newArr = arr.map( num => num * 2 )

console.log(newArr)

const teste = () => ({ nome: 'flavio'})

console.log(teste)

//desestruturacao de Objetos

const usuario = {
    nome: 'flavio',
    idade: 33,
    endereco: {
        cidade: 'Natal',
        estado: 'RN'
    }
}

console.log(usuario.nome)
console.log(usuario.endereco.cidade)

const { nome ,idade, endereco: {estado}} = usuario

console.log(nome)
console.log(estado)
console.log(idade)

// REST
const usuarioR = {
    name: "flavio",
    idade: 33,
    empresa: "flavio henrique"
}

const {name, ...resto} = usuarioR

console.log(name)
console.log(resto)

const numeros = [1,2,3,4,5]

const [a,b,...c] = numeros

console.log(a)
console.log(b)
console.log(c)

function soma(...params){
    return params.reduce((total,next) => total + next)
}

console.log(soma(1,2,3,4,5,6,7))

//SPREAD

const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]

const arr3 = [...arr1,...arr2]

console.log(arr3)

const usuario2 = {
    nome: 'flavio',
    idade: 33,
    empresa: 'flavio henrique',
    endereco: {
        cidade: 'Natal',
        uf: 'RN'
    }
}

const usuario3 = {...usuario2, endereco: {cidade: 'sga'}} 

console.log(usuario3)
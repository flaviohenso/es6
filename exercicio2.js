//A

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
    { nome: 'Flavio', idade: 33, empresa: 'Flavio Henrique'},
    { nome: 'Fabio', idade: 35, empresa: 'seguranca'}
]

const idades = usuarios.map(usuario => usuario.idade)

console.log(idades)

//B

const usuariosEmpregados = usuarios.filter(usuario => {
    if(usuario.empresa === 'Rocketseat' && usuario.idade > 18){
        return usuario
    }
})

console.log(usuariosEmpregados)

//C

const usuarioEmpresa = usuarios.find(usuario => usuario.empresa === 'Google')

console.log(usuarioEmpresa)

//D

let idadesMulti = usuarios.map(usuario => {
    usuario.idade *= 2
    return usuario
})

console.log(idadesMulti)

idadesMulti = idadesMulti.filter(usuario => {
    console.log(usuario.idade)
    if(usuario.idade <= 50){
        return usuario
    }
})

console.log(idadesMulti)

//Exercicio 3
//A
const array3 = [1,2,3,4,5]

console.log(array3.map(elem => elem + 10))

//B
const cliente = { nome: 'flavio', idade: 33 }
const mostraIdade = cliente => console.log(cliente.idade)

mostraIdade(cliente)

//C
const nomeC = 'flavio'
const idadeC = 33

const retorno = (nome = 'Flavio Henrique', idade = 30) => ({ nome, idade })

console.log(retorno(nomeC,idadeC))
console.log(retorno(undefined,idadeC))

const promise = () => {
    return new Promise((resolve,reject) => {
        return resolve()
    })
}

console.log(promise())

//exercicio 4
//A
const empresa = {
    nome: 'RockeSeat',
    endereco: {
        cidade: 'Natal',
        estado: 'RN'
    }
}

const {nome, endereco: {cidade,estado}} = empresa

console.log(nome)
console.log(cidade)
console.log(estado)

//B

const mostraUsuario = (...params) => {

    let [{nome,idade}] = params
    return `${nome} tem ${idade} anos.`
}

console.log(mostraUsuario({nome: 'flavio', idade: 33}))

//exercicio 5
//A
const arr03 = [1,2,3,4,5,6]

let [x,...rest] = arr03
console.log(x)
console.log(rest)

const somaParams = (...params) => {
    params.reduce(total,next => total += next)
}

console.log(soma(1,2,3,4,5))

//B

const usarioExerc5 = {
    nome: 'Flavio',
    idade: 33,
    endereco: {
        cidade: 'Natal',
        uf: 'RN',
        pais: 'Brasil'
    }
}

const usuarioNew = {...usarioExerc5,nome: 'Gabriel'}
console.log(usuarioNew)
const usuarioNew2 = {...usarioExerc5,endereco: { cidade: 'Lontras'}}
console.log(usuarioNew2)


//Exercicio 6
const usuarioNew3 = 'Diego'
const idadeNew3 = 33

console.log(`O usuário ${usuarioNew3} possui ${idadeNew3} anos.`)

//exercicio7
const nomeNew = 'Flavio'
const idade = 33

const novoUsuaio = {
    nomeNew,
    idade,
    cidade: 'Natal'
}

console.log(novoUsuaio)
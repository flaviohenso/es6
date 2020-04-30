import ClasseUsuario from './functions'
import { idade as IdadeUsuario} from './functions'

console.log(ClasseUsuario.info())

alert(`Minha idade: ${IdadeUsuario} `)

const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve('ok')}, 2000)
})

// No async/await a proxima linha so executada apos o termino da anterior
/* async function executarPromise() {
    console.log(await minhaPromise())
    console.log(await minhaPromise())
    console.log(await minhaPromise())
} */

//executarPromise()

const executarPromise =  async () => {
    console.log(await minhaPromise())
    console.log(await minhaPromise())
    console.log(await minhaPromise())
}

executarPromise()
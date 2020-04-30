import axios from 'axios'
import { umPorSegundo } from './exercicio1'
import { getUserFromGitHub } from './exercicio2'
import Github from './exercicio3'

class Api {
    static async getUserInfo(username) {
        try {

            const response = await axios.get(`https://api.github.com/users/${username}`)
            console.log(response)
        } catch (error) {
            console.log('Erro na APi')
        }

    }
}
console.log(Api.getUserInfo('flaviohenso'))
console.log(Api.getUserInfo('flaviohenso23423'))

console.log(umPorSegundo())
console.log(getUserFromGitHub('flaviohenso')) 

console.log(Github.getRepositories('flaviohenso/es6'))
console.log(Github.getRepositories('rocketseat/dslkvmskv'))
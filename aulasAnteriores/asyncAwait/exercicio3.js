import axios from 'axios'

export default class Github {
    static async getRepositories(repos){
        try{
        const response = await axios.get(`http://api.github.com/repos/${repos}`)
        console.log(response)
        } catch (error) {
            console.log(`reposiorio nao encontrado!`)
        }
    }
}
import axios from 'axios'

class Api {
    static async getUserInfo(username){
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

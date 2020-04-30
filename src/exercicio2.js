import axios from 'axios'

export async function getUserFromGitHub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log('Aqui >>> ' + response) 
    }
    catch (error) {
        console.log('Usuario nao existe!')
    }
}
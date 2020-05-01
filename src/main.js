import api from './api'
import Axios from 'axios'
class App {
    constructor() {
        this.repositories = []

        this.formEl = document.querySelector('#repo-form')
        this.inputEl = document.querySelector('input[name=repository]')
        this.ulEl = document.querySelector('#repo-list')

        console.log(this.inputEl)
        this.registerHandlers()
    }

    registerHandlers() {
        this.formEl.onsubmit = event => {
            this.setLoandig()
            this.addRepository(event)
        }
    }

    setLoandig(loading = true) {
        if( loading === true){
            let loadingEl = document.createElement('span')
            loadingEl.appendChild(document.createTextNode('Carregando...'))
            loadingEl.setAttribute('id','loading')

            this.formEl.appendChild(loadingEl)
        } else {
            document.getElementById('loading').remove()
        }
    }

    async addRepository(event) {
        event.preventDefault() //remevor o comportamento default do submit do form

        const inputContent = this.inputEl.value

        if (inputContent.length === 0)
            return

        try {
            const response = await api.get(`/repos/${inputContent}`)

            const { description, name, html_url, owner: { avatar_url } } = response.data

            this.repositories.push(
                {
                    nome: name,
                    description,
                    avatar_url,
                    html_url
                }
            )

            this.inputEl.value = ''

            this.renderRepository()
        } catch (error) {
            alert('O repositório não existe!')
        }

        this.setLoandig(false)
    }

    renderRepository() {

        this.ulEl.innerHTML = ''

        this.repositories.forEach(element => {

            let liElemt = document.createElement('li')

            let imgElemt = document.createElement('img')
            imgElemt.setAttribute('src', element.avatar_url)

            let strongElemt = document.createElement('strong')
            strongElemt.appendChild(document.createTextNode(element.nome))

            let pElemt = document.createElement('p')
            pElemt.appendChild(document.createTextNode(element.description))

            let aElemt = document.createElement('a')
            aElemt.setAttribute('target', '_blank')
            aElemt.setAttribute('href', element.html_url)
            aElemt.appendChild(document.createTextNode('Acessar'))

            liElemt.appendChild(imgElemt)
            liElemt.appendChild(strongElemt)
            liElemt.appendChild(pElemt)
            liElemt.appendChild(aElemt)

            this.ulEl.appendChild(liElemt)
        });
    }

}

new App()
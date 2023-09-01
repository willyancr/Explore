//classe api github
export class apiGitHub{
    static search(username){
        const api = `https://api.github.com/users/${username}`

        return fetch(api).then(data => data.json())
        .then(data => 
                ({
                    login: data.login,
                    name: data.name,
                    public_repos: data.public_repos,
                    followers: data.followers
                })
            )
    }
}

//classe que vai conter a lógica dos dados - como os dados serão estruturados
export class Favorites{
    constructor(container){
        this.container = document.querySelector(container)
        this.load()

    }
    load(){
        this.users = JSON.parse(localStorage.getItem('@github-favorites:')) || []
        
    }
    save(){
        localStorage.setItem('@github-favorites:', JSON.stringify(this.users))
    }
    async add(username){
        //tratamento de error se não encontrar o usuario
        try{
            const userExists = this.users.find(user => user.login === username)

            if(userExists){
                throw new Error('Usuário já cadastrado')
            }

            const user = await apiGitHub.search(username)
            
            if(user.login === undefined){
             throw new Error('Usúario na encontrado!')     
            }
            //adicionar os novos usuarios
            this.users = [user, ...this.users]
            this.update()
            this.save()

        }catch(error){
            alert(error.message)
        }
    }
    //função deletar usuario
    delete(user){ 
        //filter para criar um novo array que exclui o usuário com o login especificado
        const filterEntry = this.users.filter(entry => entry.login !== user.login)

        this.users = filterEntry
        this.update()
        this.save()
    }
}

//classe que vai criar a visualização e eventos do html
export class FavoritesViews extends Favorites{
    constructor(container){
        super(container)
        this.tbody = this.container.querySelector('table tbody') //seleciona o tbody do html
        this.update()
        this.addUsers()
    }
    addUsers(){
        const button = this.container.querySelector('.btn-add')
        button.onclick = () => {
            const input = this.container.querySelector('input').value
           this.add(input)
        }
    }
    update(){
        this.removeAllTr()
        
        this.users.forEach((user)=>{ //
            const row = this.createTr()
            row.querySelector('.td-user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.td-user a').href = `https://github.com/${user.login}`
            row.querySelector('.td-user p').innerHTML = user.name
            row.querySelector('.td-user span').innerHTML = user.login
            row.querySelector('.resp').innerHTML = user.public_repos
            row.querySelector('.followers').innerHTML = user.followers

            row.querySelector('.btn-remove').onclick = () => {
                const ifOK = confirm ('Tem certeza que deseja remover?')
                if(ifOK){
                    this.delete(user)
                }
            }

            this.tbody.append(row) //append função da DOM para aparecer na
        })
    }

    createTr(){ //função p criar o elemento tr HTML no JS
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <td class="td-user">
                <img src="https://github.com/willyancr.png" alt="foto perfil">
                <a href="https://github.com/willyancr" target="_blank">
                <p>Willyan Costa</p>
                <span>willyancr</span>
            </td>
            <td class="resp">45</td>
            <td class="followers">8622</td>
            <td><button class="btn-remove"><i class="fa-solid fa-x fa-xs"></i></button></td>
        `
        return tr // vai retornar pq vai usar a estrutura pra cada elementos que tiver meus dados  
    }
    removeAllTr(){
    
        this.tbody.querySelectorAll('tr').forEach((tr) => { //seleciona todos 'tr' do tbody e forEach faz a função de remover todos
            tr.remove()
        });
    }
}

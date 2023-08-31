//classe que vai conter a lógica dos dados - como os dados serão estruturados
export class Favorites{
    constructor(container){
        this.container = document.querySelector(container)
        this.load()
    }
    load(){
        this.users = [ //um array com dois objetos com dados da api
            {
               login: 'willyancr', 
               name: 'Willyan Costa',
               public_repos: '98',
               followers: '1500'
            },
            {
               login: 'maykbrito', 
               name: 'Mayk Brito',
               public_repos: '150',
               followers: '3300'
            }
        ]
    }
    delete(user){
        const filterEntry = this.users.filter(entry => entry.login !== user.login)

        this.users = filterEntry
        this.update()
    }
}

//classe que vai criar a visualização e eventos do html
export class FavoritesViews extends Favorites{
    constructor(container){
        super(container)
        this.tbody = this.container.querySelector('table tbody') //seleciona o tbody do html
        this.update()
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

import { apiTMDB } from "./apiTMDB.js"

//classe que vai conter a lógica dos dados - como os dados serão estruturados
export class Favorites{
    constructor(container){
        this.container = document.querySelector(container)
        this.load()
        
    }
    load(){
        this.moviesAndSeries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
        
    }
    save(){
        localStorage.setItem('@github-favorites:', JSON.stringify(this.moviesAndSeries))
    }

    async add(flixname){
                
        //tratamento de error se não encontrar o usuario
        try{
            const flixExists = this.moviesAndSeries.find(flix => flix.results[0].title === flixname)

            if(flixExists){
                throw new Error('Filme/Série já cadastrado')
            }

            const flix = await apiTMDB.search(flixname)
            
            
            if(flix.results[0].title == undefined){
             throw new Error('Filme/Série não encontrado!')
                  
            }
            //adicionar os novos usuarios
            this.moviesAndSeries = [flix, ...this.moviesAndSeries]
            this.update()
            this.save()

        }catch(error){
            alert(error.message)
        }
    }
    //função deletar usuario
    delete(flix){ 
        //filter para criar um novo array que exclui o usuário com o Title especificado
        const filterEntry = this.moviesAndSeries.filter(entry => entry.results[0].title !== flix.results[0].title)

        this.moviesAndSeries = filterEntry
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
        this.addFlix() 
    }
    addFlix(){
        const button = this.container.querySelector('.btn-add')
        button.onclick = () => {
            const input = this.container.querySelector('input').value
           this.add(input)
        }
    }
    update(){
        this.removeAllTr()
        
        this.moviesAndSeries.forEach((flix)=>{ //
            const row = this.createTr()
            row.querySelector('.td-user img').src = `https://image.tmdb.org/t/p/w500${flix.results[0].poster_path}`            
            row.querySelector('.td-user p').innerHTML = flix.results[0].title
            row.querySelector('.year').innerHTML = flix.results[0].release_date
            row.querySelector('.vote').innerHTML = flix.results[0].vote_average.toFixed(1)
            

            row.querySelector('.btn-remove').onclick = () => {
                const ifOK = confirm ('Tem certeza que deseja remover?')
                if(ifOK){
                    this.delete(flix)
                }
            }

            this.tbody.append(row) //append função da DOM para aparecer na
        })
    }

    createTr(){ //função p criar o elemento tr HTML no JS
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <td class="td-user">
                <img src="" alt="foto perfil">
                
                <p>Willyan Costa</p>
                
            </td>
            <td class="vote">45</td>
            <td class="year">8622</td>
            
            
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

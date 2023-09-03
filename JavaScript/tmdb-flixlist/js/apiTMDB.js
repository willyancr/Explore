//classe api github
export class apiTMDB{
    static search(flixname){
        const key = '869cc1c6eb22525b04c57cf1d79feb4c'
        const api = `https://api.themoviedb.org/3/search/movie?query=${flixname}&api_key=${key}`

        return fetch(api)
        .then(data => data.json())
    
    }
    }

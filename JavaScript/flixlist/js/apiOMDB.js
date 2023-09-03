//classe api github
export class apiOMDB{
    static search(flixname){
        const key = '449baf0a'
        const api = `https://www.omdbapi.com/?s=${flixname}&apikey=${key}`

        return fetch(api)
        .then(data => data.json())
         
                                
        
    }
    }

// ({
//     Title: data.Title,
//     Genre: data.Genre,
//     Year: data.Year,
//     Ratings: data.Ratings,
//     Poster: data.Poster
    
// })
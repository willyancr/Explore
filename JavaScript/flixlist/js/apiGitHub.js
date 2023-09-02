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
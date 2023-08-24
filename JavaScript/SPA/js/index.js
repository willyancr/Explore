//mapeamento da rota
const routes = {

    '/': '/JavaScript/SPA/pages/home.html',
    '/about': '/JavaScript/SPA/pages/about.html',
    '/contact': '/JavaScript/SPA/pages/contact.html',
    '/404': '/JavaScript/SPA/pages/404.html'

}
//função evento click
function route(event){
    event = event || window.event
    event.preventDefault()
    //vai guardar o endereço do 'a' href
    window.history.pushState({},'', event.target.href)
    handle()
}
//função lidar em pegar o endereço das paginas
function handle(){
    const {pathname} = window.location
    const route = routes[pathname] || routes['/']
    
    fetch(route)
    .then(data => data.text())
    .then(html => {
        document.querySelector('#app').innerHTML = html
    })

    console.log(route)
}
handle()
//evento de navegar pelo 'voltar' e 'avançar' do browser
window.onpopstate = () => {handle()}
//window.route() = () => route()
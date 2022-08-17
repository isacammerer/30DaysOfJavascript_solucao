//web storage - podem armazenar grande quantidade de dados, sem ser transferido para o servidor, keys e values são sempre strings, sendo separado em sessionStorage e localStorage

//sessionStorage - designado para armazenar dados em somente em uma sessão de uso do navegador, os dados são limpos no momento em que o navegador é fechado, melhor usado quando uma aplicação aberta em uma window não interfira se for aberta em uma outra window

//localStorage - armazena dados sem uma data de expiração, os dados ficarão armazenados mesmo depois do navegador ser fechado, no entanto não pode ser acessado em diferentes browsers

//Uso dos web storages:

//armazenar dados temporariamente
//salvar produtos salvos no carrinho de compras
//dados podem ser acessados em diferentes páginas, múltiplas abas e entre diferentes sessions do mesmo navegador pelo localStorage
//ajuda na performance quando usado dados fixos no cliente para diminuir múltiplos requests ao servidor
//pode ser usado em métodos de autenticação

//web storage objects:

//localStorage - para visualizar o object do localStorage
//localStorageclear() - para remover tudo do localStorage

//localStorage.setItem() - para armazenar dados no localStorage, recebe uma key e values como parametros
localStorage.setItem('firstName', 'isabella') // como o value já é uma string não precisa fazer o método stringify 
console.log(localStorage)   //Storage {firstName: 'isabella', length: 1}

localStorage.setItem('age', 26)
console.log(localStorage)   // Storage {age: '26', firstName: 'isabella', length: 2}

const skills = ['HTML', 'CSS', 'JS', 'React']
//Skills array precisa ser stringified primeiro para manter o formato.
const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage)   //Storage {age: '26', firstName: 'isabella', skills: 'HTML,CSS,JS,React', length: 3}

const user = {
    firstName: 'isabella',
    age: 26,
    skills: ['HTML', 'CSS', 'JS', 'React']
}
const userText = JSON.stringify(user, undefined, 4) //antes de armazenar os objects no localStorage, o object precisa ser stringified
localStorage.setItem('user', userText)


//localStorage.getItem() - para visualizar o dado armazenado no localStorage, recebe uma key como parametro
let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
let skillsTwo = localStorage.getItem('skills')
console.log(firstName, age, skills)

let skillsThree = localStorage.getItem('skills')    //estão em um formato string, usar o JSON.parse() para transformar em uma array normal
let skillsObj = JSON.parse(skills, undefined, 4)
console.log(skillsObj)

//localStorage.removeItem() - para remover o item armazenado do localStorage, recebe uma key como parametro
//localStorage.key() - para visualizar dados armazenados no localStorage, recebe um index como parametro
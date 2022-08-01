//alert() - caixa de alerta

alert(message)
alert('Welcome to 30DaysOfJavascript')

//prompt() - caixa com input no browser para receber valor do input e depois este valor do input é armazenado em uma variável. Recebe 2 argumentos, o segundo é opcional

prompt('required text', 'optional text')
let number = prompt('enter number', 'number goes here')
console.log(number)

//confirm() - caixa com mensagem, botão de ok e cancelar, usada para pedir permissão para o usuário para executar algo. Recebe uma string como argumento, ok significa true e cancel significa false

const agree = confirm('Are you sure you like to delete?')
console.log(agree)      //resultado será true se apertar ok ou false se apertar cancel


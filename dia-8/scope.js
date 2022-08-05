//window global object
a = 'javascript'                        //declarando uma variável sem let ou const faz com que ela esteja disponível em qualquer lugar, achada em qualquer lugar do arquivo
b = 10                                  //variável global, achada em qualquer lugar no arquivo
function letsLearnScope() {
    console.log(a, b)
    if (true) {
        console.log(a, b)
    }
}
console.log(a, b)                       //javascript 10

//global scope - variavel declarada global pode ser acessada em qualquer lugar do arquivo, mas ela pode ser global para o arquivo ou para algum bloco de codigo
function letsLearnScope() {
    console.log(a, b)
    if (true) {
        let a = 'Python'
        let b = 100
        console.log(a, b)               //python 100
    }
    console.log(a, b)
}
letsLearnScope()
console.log(a, b)                       //javascript 10


//local scope - variável declarada localmente pode somente ser acessada em certos blocos de código
let a = 'JavaScript' 
let b = 10
function letsLearnScope() {
  console.log(a, b)
  let value = false
  if (true) {
    // podemos acessar de dentro da função e de fora mas as funções declaradas dentro do bloco não podem ser acessadas por fora do bloco 
    let a = 'Python'
    let b = 20
    let c = 30
    let d = 40
    value = !value
    console.log(a, b, c, value)         // Python 20 30 true
  }
  // não se pode acessar c porque está declarada somente dentro do código
  console.log(a, b, value)              // JavaScript 10 true
}
letsLearnScope()
console.log(a, b)                       // JavaScript 10

//block code - é todo o código dentro do {}
//mecanismo para lidar com erros durante o funcionamento do código
try {
    let lastName = 'A. Cammerer'
    let fullName = firstName + ' ' + lastName
}catch (err) {
    console.log(err)    //ou console.error()
}//finally {
    //console.log('In any case I will be executed')
//}
//ReferenceError: firstName is not defined

//try - junta o código que pode dar um erro, podendo ser testado para erros enquanto é executado
//catch - código que deve ser executado caso um erro ocorra, podendo ser um erro da IDE ou uma mensagem específica para o usuário
//finally - o bloco vai ser executado independentemente se ocorrer um erro, pode ser usado para completar o final do códido ou resetar variávis que podem ter mudado antes do erro aontecer no try

//catch recebe um parâmetro, que é um objeto que tem nome e message keys
try {
    let lastName = 'A. Cammerer'
    let fullName = fistName + ' ' + lastName
} catch (err) {
    console.log('Name of the error', err.name)
    console.log('Error message', err.message)
} finally {
    console.log('In any case I will be executed')
}

//throw - permite cutomizar a mensagem de erro
const throwErrorExampleFun = () => {
    let message
    let x = prompt('Enter a number: ')
    try {
      if (x == '') throw 'empty'
      if (isNaN(x)) throw 'not a number'
      x = Number(x)
      if (x < 5) throw 'too low'
      if (x > 10) throw 'too high'
    } catch (err) {
      console.log(err)
    }
}
throwErrorExampleFun()
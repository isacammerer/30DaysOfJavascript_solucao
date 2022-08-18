//chama uma função com dois parametros, o primeiro parametro é um err e o segundo é o resultado, se o err é falso não vai retornar err e sim a outra condição

const doSomething = callback => {
    setTimeout(() => {
        const skills = ['html', 'css', 'js']
        callback('it did not go well', skills)
    }, 2000)
}

const callback = (err, result) => {
    if (err) {
        return console.log(err)
    }
    return console.log(result)
}

doSomething(callback)
//it did not go well

const doSomethingTwo = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback(false, skills)
    }, 2000)
  }
  
doSomethingTwo((err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
})
//[ 'HTML', 'CSS', 'JS' ]

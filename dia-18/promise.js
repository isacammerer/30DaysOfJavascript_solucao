//promise - forma de lidar com opreações assíncronas, a promise pode ser concretizar com um valor ou rejeitada por alguma razão (erro)

//promise constructor - criar a promise
const promise = new Promise((resolve, reject) => {
    resolve('success')
    reject('failure')
})

const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['html, css', 'js']
        if (skills.length > 0) {
            resolve(skills)
        } else {
            reject('something wrong happened')
        }
    }, 2000)
})

doPromise
    .then(result => {
        console.log(result)
    })
    .catch(error => console.log(error))
//[ 'html, css', 'js' ]


const doPromiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['html', 'css', 'js']
        if (skills.includes('node')) {
            resolve('fullstack developer')
        } else {
            reject('something wrong has happened')
        }
    }, 2000)
})

doPromiseTwo
    .then(result => {
        console.log(result)
    })
    .catch(error => console.error(error))
//something wrong has happened
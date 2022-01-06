
const map = (array, func) => {
  let newArray = []
  for (let i = 0; i < array.length; i++){
    newArray.push(func(array[i]))
  }
  return newArray
}

//console.log(map([1,2,3,4], number => number * 2))

//metodo filter na mão

const filter = (array, func) =>{

  let newArray1 = []
  
  for (let i = 0; i < array.length; i++){

    if(func(array[i], i, array)){
    newArray1.push(array[i])
  }
  }

//console.log(newArray1)
}

//filter([1,2,3,5,2,6], (item, index, array) => index === array.indexOf(item))

//let carlos = [1,3,5,2,2]
//console.log(carlos.indexOf(2))

const convertToHex = color => {
    const colors = {
        blue: "#4566557",
        black: "#4566557",
        yellow: "#4566557",
    }

    return `ò hexadecimal para a cor ${color} é ${colors[color]}`
}


const colors = [
    'blue',
    'black',
    'yellow'
]

const logColorMessage = color => console.log(convertToHex(color))

//colors.forEach(color => logColorMessage(color))


///estudo sobre promises

const aPromise = new Promise((resolve, reject) => {
  const aNumber = 10
  console.log('promisse chamada')
  setTimeout(()=>{
    resolve(aNumber)
  },1000)
  
})

let divide = function (valor) {
  return new Promise(function (resolve, reject){
    console.log('entrou na promise')
    setTimeout(() => {
      let result = valor / 2
      resolve(result)
      console.log('dividiu',result)
    }, 2000);
  })
  }

  let carlos = function (valor) {
    return new Promise(function (resolve, reject){
      console.log('entrou na promise carlos')
      setTimeout(() => {
        let result = valor * 2
        resolve(result)
      }, 2000);
    })
    }
  




aPromise
.then(value => value)
.then(value => divide(value))
.then(value => carlos(value)).then(value => console.log(value))







const forEach = (arr, func) => {
  for (let i = 0; i < arr.length; i++){
    func(arr[i])
  }
}

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

console.log(newArray1)
}

filter([1,2,3,5,2,6], (item, index, array) => index === array.indexOf(item))

let carlos = [1,3,5,2,2]
console.log(carlos.indexOf(2))
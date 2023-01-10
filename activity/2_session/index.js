// Ejercicio 1
let person = {
  name: 'Stephano',
  age: 29,
  profession: 'Developer'
}

const objToArray = (obj) => {
  let newArray = []
  let keys =  Object.values(obj)
  newArray.push(...keys)
  console.log(newArray) 
}

objToArray(person)


// Ejercicio 2

//This en el contexto global, se refiere al objeto global
console.log(this)

//En una función this se refiere al objeto global
function newFunction(){
  return this
}

newFunction()

//Si la función esta en stric mode , this será undefined
function secondFunction(){
  'use strict'
  return this
}

secondFunction()

//En un método , this se refiere al objeto al cual pertenece, en este caso newObj

let newObj = {
  hello: 'world',
  saying(){console.log(this)}
}

newObj.saying()

//En una arrow function, this se refiere al contexto de la función, en este caso será el objeto global

let secondObj = {
  new: 'hello',
  hello:() => {console.log(this)}
}

secondObj.hello()


//Si se tratase de un evento, this se refiere al elemento que recibe el evento, en este caso será el lemento con id fakeId.
const fakeElement = document.getElementById('fakeId')
fakeElement.addEventListener('click', () => {
  console.log(this)
})

// Ejercicio 3
class InvertirCadena {
  constructor(cadenaInvertir = ''){
    this.cadenaInvertir = cadenaInvertir
    console.log(this.cadenaInvertir)
  }
  
  reverseCadena = () => {
    try{
      if(this.cadenaInvertir === ''){
        throw new Error('La cadena debe tener algun valor')
      }
      let newCadena = this.cadenaInvertir.split('').reverse().join('')
      console.log(newCadena)
    }catch(error){
    console.log(error)
    }
  } 
}

let invertirCadena = new InvertirCadena()
//invertirCadena.reverseCadena()
let newInvertirCadena = new InvertirCadena('Hello World')
newInvertirCadena.reverseCadena()
invertirCadena.nuevoMetodo?.() 

// Ejercicio 4

class Login {
  constructor(username, password){
    this.username = username
    this.password = password
  }

  login(){
      if(this.username === 'admin' && this.password === 'passwd'){
        alert('User is logged in')
      } else {
        alert('username or password is incorrect')
      }
  }
}

let login = new Login('admin', 'passwd')
login.login()
let badLogin = new Login('user', 'pass')
badLogin.login()

// Ejercicio 5
const loginSuccessButton = document.getElementById('loginSuccess')
loginSuccessButton.addEventListener('click', () => {
  let correctLogin = new Login('admin', 'passwd')
  correctLogin.login()
})

const loginFailureButton = document.getElementById('loginFailure')
loginFailureButton.addEventListener('click', () => {
  let incorrectLogin = new Login('username', 'password')
  incorrectLogin.login()
})

// Ejercicio 6
const loginAsyncSuccessButton = document.getElementById('loginSuccessAsync')
let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
        setTimeout(() => {
          if (username === "admin" && password === "passwd") {
            resolve("User logged in");
          } else {
            rejected("Error: invalid username or password");
          }
        }, 200);
    });
};

loginAsyncSuccessButton.addEventListener('click', async () => {
  await loginWitUsername('admin', 'passwd').then((resolve) => {
    alert(resolve)
  }).catch((rejected) => {
    alert(rejected)
  })
})

const loginAsyncFailureButton = document.getElementById('loginFailureAsync')
loginAsyncFailureButton.addEventListener('click', async () => {
  await loginWitUsername('user', 'pass').then((resolve) => {
    alert(resolve)
  }).catch((rejected) => {
    alert(rejected)
  })
})

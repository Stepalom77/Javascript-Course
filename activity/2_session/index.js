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

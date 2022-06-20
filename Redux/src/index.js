function sayHello() {
  console.log('Hello World!')
}

function functionHellO() {
  return function () {
    return 'Hello World'
  }
}
let fn = sayHello
fn()

let fn2 = functionHellO()
let message = fn2()
console.log(message)

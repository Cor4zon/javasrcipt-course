// function sayHello(name) {
//   console.log('Hi ' + name);
// }




const sayHello = (name) => {
  console.log('Hi ' + name);
};

const sayHello2 = name => console.log('Hi ' + name);
const sayHello3 = name => console.log('Hi ' + name);
const sayHello4 = (name, phrase = 'Hello') => console.log(phrase + ' ' + name);
const sayHello5 = () => console.log('Hi Cats');

sayHello('Monya');
sayHello2('Tina');
sayHello3('Gektor');
sayHello4('Good afternoon', 'Richi');
sayHello5();
sayHello4 ('Richi');

function callback() {
  alert("CALLBACK FUNCTION ALERT");
}

const checkInput = (callback, ...strings) => {
  let noEmpty = true;
  for (const string of strings) {
    if (!string) {
      noEmpty = false;
      break;
    }
  }
  if (!noEmpty) {
    callback();
  }
};


// checkInput(callback, "hello", "no", "alert");
// checkInput(callback, "hello", "", "alert");
 // task 1

// method 1
const task1 = document.getElementById('task-1');
task1.style.backgroundColor = 'black'
task1.style.color = 'white'


 // method 2
const taskOne = document.querySelector('#task-1');
 taskOne.style.backgroundColor = 'black';
 taskOne.style.color = 'white';

// task 2

 // method 1
 const title = document.querySelector('title');
 title.textContent = 'Assignment - Solved!';


 // method 2
const head = document.head;
const title = head.querySelector('title');
 title.textContent = 'Assignment - Solved!';


 // task 3
 const h1 = document.querySelector('h1');
 h1.textContent = 'Assignment - Solved!';


 const h1All = document.getElementsByTagName('h1');
 h1All[0].textContent = 'Assignment - Solved!';
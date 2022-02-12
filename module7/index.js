

const btn = document.querySelector('button');
const ul = document.querySelector('ul');

btn.addEventListener('click', () => {
    // if (ul.className === 'bg-red visible') {
    //     ul.className = 'bg-red invisible';
    // } else {
    //     ul.className = 'bg-red visible';
    // }
    ul.classList.toggle('invisible');
})
// const backgroundElement = document.getElementById("body")
// const mybutton = document.getElementById("BIGBUTTON")
// mybutton.addEventListener('click',function() {
//     if (backgroundElement.style.backgroundColor === --color-backgroud-html){
//         backgroundElement.style.backgroundColor = 'blue';
//     }
//     else {
//         backgroundElement.style.backgroundColor = 'white';
//     }
// })
const backgroundElement = document.getElementById("body");
const mybutton = document.getElementById("BIGBUTTON");
const icon = mybutton.querySelector('.fa-solid');

mybutton.addEventListener('click', function() {
    backgroundElement.classList.toggle('dark-mode');
    backgroundElement.classList.toggle('light-mode');

    if (backgroundElement.classList.contains('light-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});
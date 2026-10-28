let main = document.querySelector('main');
let button = document.querySelector('button');

button.addEventListener("click", function () {

    let circle = document.createElement('div');
    circle.classList.add('circle');

    let size = Math.floor(Math.random() * 120) + 30;   // 30px se 150px

    
    let x = Math.random() * (main.clientWidth - size);
    let y = Math.random() * (main.clientHeight - size);

    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);
    let color = `rgb(${c1},${c2},${c3})`;

    circle.style.height = size + 'px';
    circle.style.width = size + 'px';
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
    circle.style.backgroundColor = color;
    circle.style.boxShadow = `0 0 25px ${color}`;

    main.appendChild(circle);
});
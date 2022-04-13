const img = document.querySelector('.img');
const container = document.querySelector('.container');

const phones = (phone)=>{
    img.src = phone;
}

const colors= (color)=>{
    container.style.backgroundColor = color;
}
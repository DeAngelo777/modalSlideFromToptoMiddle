const button = document.getElementById('btn');

modalContent = document.querySelector('.modalContent'),
modal = document.querySelector('.modal'),
closeX = document.querySelector('.close');

button.addEventListener('click', buttonClick);


// modal.addEventListener('click', closeClick);

function buttonClick() {
    modal.style.display = 'block';
}

closeX.addEventListener('click', closeClick);
function closeClick() {
    modalContent.classList.add('slideUp');


    setTimeout(()=> {
        modalContent.classList.remove('slideUp')
        modal.style.display = 'none';

    }, 500);
}



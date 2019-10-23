document.addEventListener('click', function (event) {

    if (!event.target.classList.contains('slider--description')) return;

    event.preventDefault();

    //active slider--slide_description
    let description = document.querySelector(".swiper-slide-active").children[0];

    if (description.classList.contains('active')) {
        description.classList.remove('active');
    } else {
        description.classList.add('active');
    }
    if (event.target.innerHTML === 'Show description') {
        event.target.innerHTML = 'Hide description';
    } else {
        event.target.innerHTML = 'Show description';
    }

}, false);
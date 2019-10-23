document.addEventListener('click', function (event) {

    if (!event.target.classList.contains('slider--description')) return;

    event.preventDefault();

    let description = document.querySelector(".slider--slide_description");
    for(let descr in document.querySelector(".slider--slide_description")){
        if (descr.nextSibling = document.querySelector(".slider--slide_description")
    }
    alert(description.classList);
    if (description.classList.contains('active')) {
        description.classList.remove('active');
        event.target.innerHTML = 'Show description';
    } else {
        description.classList.add('active');
        event.target.innerHTML = 'Hide description';
    }
    alert(description.classList);

}, false);
let iframe_wrapper = document.querySelector(".site_view_wrapper"),
    change_state_btn = document.querySelector(".change_state_btn"),
    back_btn = document.querySelector(".back_btn");


document.addEventListener('click', function (event) {

    if (!event.target.classList.contains('slider--slide_description_btn')) {
        if (!event.target.parentElement.classList.contains('slider--view_link')) {
            return;
        }
    }

    event.preventDefault();

    if (event.target.classList.contains('slider--slide_description_btn')) {
        iframe_wrapper.children[0].src = event.target.href;
    } else {
        iframe_wrapper.children[0].src = event.target.parentElement.href;
    }
    iframe_wrapper.classList.add('active');
    change_state_btn.classList.add('active');
    back_btn.classList.add('active');


}, false);

document.addEventListener('click', function (event) {

    if (!event.target.classList.contains('change_state_btn')) return;

    event.preventDefault();

    if (iframe_wrapper.classList.contains('mobile')) {
        iframe_wrapper.classList.remove('mobile');
        change_state_btn.innerHTML = "Mobile";
    } else {
        iframe_wrapper.classList.add('mobile');
        change_state_btn.innerHTML = "Desktop";
    }

}, false);
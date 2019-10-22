document.addEventListener('click', function (event) {

	if (!event.target.classList.contains('slider--slide_description_btn')) return;

	event.preventDefault();

    let source = event.target.href,
    iframe = document.querySelector(".site_view"),
    change_state_btn = document.querySelector(".change_state_btn"),
    back_btn = document.querySelector(".back_btn"),
    mobile = document.createTextNode("Mobile");
    

    iframe.src=source;
    iframe.classList.add('active');
    change_state_btn.classList.add('active');

    change_state_btn.appendChild(mobile);
    back_btn.classList.add('active');


}, false);

document.addEventListener('click', function (event) {

	if (!event.target.classList.contains('change_state_btn')) return;

	event.preventDefault();

    let iframe = document.querySelector(".site_view"),
    change_state_btn = document.querySelector(".change_state_btn"),
    back_btn = document.querySelector(".back_btn");
    

    if(iframe.classList.contains('mobile')){
        iframe.classList.remove('mobile');
        change_state_btn.nodeValue="Mobile";
    }else{
        iframe.classList.add('mobile');
        change_state_btn.nodeValue="Desktop";
    }

}, false);
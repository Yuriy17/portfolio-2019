document.addEventListener('click', function (event) {
    
	if (!event.target.classList.contains('slider--slide_description_btn')) {
        if(!event.target.parentElement.classList.contains('slider--view_link')){
            return;
        }
    }

	event.preventDefault();

    let iframe = document.querySelector(".site_view"),
    change_state_btn = document.querySelector(".change_state_btn"),
    back_btn = document.querySelector(".back_btn");
    
    if(event.target.classList.contains('slider--slide_description_btn')){
        iframe.src=event.target.href;
    }else{
        iframe.src=event.target.parentElement.href;
    }
    iframe.classList.add('active');
    change_state_btn.classList.add('active');
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
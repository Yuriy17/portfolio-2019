document.addEventListener('click', function (event) {

	if (!event.target.classList.contains('toggle')) return;

	event.preventDefault();

  let content = document.querySelector(event.target.hash);
  if (!content) return;
  
  if (document.querySelector(".education--arrow").style.transform==='rotate(-45deg)'){
    document.querySelector(".education--arrow").style.transform = 'rotate(-135deg)';    
  }else{
    document.querySelector(".education--arrow").style.transform = 'rotate(-45deg)';
  }
  content.classList.toggle('is-visible');

}, false);


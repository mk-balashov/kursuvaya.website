document.addEventListener( 'DOMContentLoaded', function() {
  const mySlider = new Splide("#mySlider", {
    perPage: 3,
    gap: "10px",
    pagination: false,
    type   : 'loop',
    breakpoints: {
      1024: {
        perPage: 1,
      }
    }
  })
  
  mySlider.mount();
  
});

document.getElementById('hamburger').addEventListener('click', function () {
  var menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
  menu.classList.toggle('visible');
});
document.getElementById('closeMenu').addEventListener('click', function () {
  var menu = document.getElementById('menu');
  menu.classList.add('hidden');
  menu.classList.remove('visible');
});
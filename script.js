
// iffe
(function() {



  const source = document.querySelector('#welcome-section');
  const text = source.querySelector('h1');
  const walk = 80;


  function shadow(e) {

    // console.log(e);

    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;

    // destructuring, same as above ^
    const { offsetWidth: width, offsetHeight: height } = source;
    let { offsetX: x, offsetY: y } = e;

    if(this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `${xWalk}px ${yWalk}px 3px rgba(0, 0, 0, 0.7)`;

  }

  source.addEventListener('mousemove', shadow);





  window.sr = ScrollReveal();
  sr.reveal('.anim');


})();





//   let navTitles = document.querySelectorAll('a'); // Identify target
//   let i = 0;
//   window.addEventListener("scroll", function(event) { // To listen for event
//     event.preventDefault();

// });

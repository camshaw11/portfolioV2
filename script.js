console.log("connected");
 
// var colors = ['#b3809b', '#a6b380', '#8080b3'];
// var random_color = colors[Math.floor(Math.random() * colors.length)];
// document.getElementById('welcome-section').style.color = random_color;


// let textShadowProp = {
// 	offsetX: '3px',
// 	offsetY: '3px',
// 	blurRadius: '3px',
// 	color: 'rgba(0, 0, 0, 0.7)'
// };

// function updateTextShadow() {
// 	let value = textShadowProp.offsetX + ' ' + textShadowProp.offsetY + ' ' + textShadowProp.blurRadius + ' ' + textShadowProp.color;

// 	target.style.textShadow = value;
// 	let x = event.clientX / window.innerWidth;
// 	let y = event.clientY / window.innerHeight;

// 	console.log(x);
// }

// let source = document.querySelector('#welcome-section');
// let target = document.getElementById('titleName');

// source.addEventListener('mousemove', updateTextShadow);


  // var circleTest = document.querySelector("#circle");

  // document.onmousemove = function(){
  //   var x = event.clientX * 100 / window.innerWidth + "%";
  //   var y = event.clientY * 100 / window.innerHeight + "%";

  //   //window.innerWidth => get the browser width
  //   //window.innerHeight => get the browser height
  //   console.log(x);
  //   for( var i = 0; i < 2; i++ ){

  //     // circleTest[i].style.left = x;
  //     // circleTest[i].style.top = y;
  //     // circleTest[i].style.transform = "translate(-"+x+",-"+y+")";
  //   }
  // }

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




//   let navTitles = document.querySelectorAll('a'); // Identify target
//   let i = 0;
//   window.addEventListener("scroll", function(event) { // To listen for event
//     event.preventDefault();

// });

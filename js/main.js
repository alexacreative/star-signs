particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});

function load(url, element)
{
    if (!url || !element) {
        return;
    }

    req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);

    element.innerHTML = req.responseText; 
}

load('./partials/aries.html', document.querySelector('#aries-page'));
load('./partials/cancer.html', document.querySelector('#cancer-page'));
load('./partials/libra.html', document.querySelector('#libra-page'));
load('./partials/pisces.html', document.querySelector('#pisces-page'));
load('./partials/sag.html', document.querySelector('#sag-page'));
load('./partials/aqua.html', document.querySelector('#aqua-page'));
load('./partials/virgo.html', document.querySelector('#virgo-page'));
load('./partials/leo.html', document.querySelector('#leo-page'));
load('./partials/gemini.html', document.querySelector('#gemini-page'));
load('./partials/taurus.html', document.querySelector('#taurus-page'));



//ARIES ANIMATION
lottie.loadAnimation({
  container: document.getElementById('circle-animation'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/aries-season.json' // the path to the animation json
});

// CANCER ANIMATION
lottie.loadAnimation({
  container: document.getElementById('cancer-animation'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/cancer.json' // the path to the animation json
});

// LIBRA ANIMATION
lottie.loadAnimation({
  container: document.getElementById('libra-animation'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/libra-animation.json' // the path to the animation json
});

// PISCES ANIMATION
lottie.loadAnimation({
  container: document.getElementById('pisces-animation'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/pisces-animation.json' // the path to the animation json
});

// SAG ANIMATION
lottie.loadAnimation({
  container: document.getElementById('sag-animation'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/sag.json' // the path to the animation json
});

// AQUA ANIMATION
lottie.loadAnimation({
  container: document.getElementById('aqua-animation'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/aqua.json' // the path to the animation json
});

// VIRGO ANIMATION
lottie.loadAnimation({
  container: document.getElementById('virgo-animation'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/virgo.json' // the path to the animation json
});

// LEO ANIMATION
lottie.loadAnimation({
  container: document.getElementById('leo-animation'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/leo.json' // the path to the animation json
});

// GEMINI ANIMATION
lottie.loadAnimation({
  container: document.getElementById('gemini-animation'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/gemini.json' // the path to the animation json
});

// TAURUS ANIMATION
lottie.loadAnimation({
  container: document.getElementById('taurus-animation'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/taurus.json' // the path to the animation json
});



new WOW().init();
// const mySiema = new Siema();
// document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
// document.querySelector('.next').addEventListener('click', () => mySiema.next());
        

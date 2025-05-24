import Hydra from 'hydra-synth';

var c = document.getElementById('hydra-background');
c.style.position = "fixed";
c.width = window.innerWidth;
c.height = window.innerHeight;
c.style.width = "100%";
c.style.height = "100%";
// c.style.imageRendering = 'pixelated';

// create a new hydra-synth instance and attach to the canvas
let hydra = new Hydra({ 
	canvas: document.getElementById('hydra-background'),
	detectAudio: true,
	makeGlobal: true,
	precision: 'mediump'
});

a.show();
// the slope of the amplitude response
a.setSmooth(0.75);
// the amplitude below which nothing is detected
a.setCutoff(2);
// the scaling range to output a value between 0-1
a.setScale(5);
// an amplitude function combining the various fft bins for a total energy
a.amp = () => (a.fft[0] + a.fft[1] + a.fft[2] + a.fft[3]) / 4;
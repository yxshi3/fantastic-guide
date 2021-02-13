import Typed from "./node_modules/typed.js/lib/typed.min.js";

var options = {
	strings: ["First sentence", "Second sentence"], 
	typeSpeed: 55, 
	loop: true, 
	backDelay: 1650, 
	backSpeed: 45, 
	smartBackspace: true,
};

var typed = new Typed(".text-slider", options); 

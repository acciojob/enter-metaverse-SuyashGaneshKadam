//your JS code here. If required.
let button = document.getElementById("enterBtn");
button.addEventListener("click", f);
function f(){
	let p = document.getElementById("status");
	// p.tagName = "h1";
	// p.innerText = "Entered Metaverse";
	p.remove();
	let h1 = document.createElement("h1");
	h1.id = "status";
	h1.innerText = "Entered Metaverse";
	document.body.insertBefore(h1, button);
}
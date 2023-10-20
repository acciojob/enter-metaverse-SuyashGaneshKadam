//your JS code here. If required.
function f(){
	let p = document.getElementById("status");
	let button = document.getElementById("enterBtn");
	p.remove();
	let h1 = document.createElement("h1");
	h1.innerText = "Entered Metaverse";
	document.body.insertBefore(h1, button);
}
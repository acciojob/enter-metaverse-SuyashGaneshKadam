//your JS code here. If required.
let button = document.getElementById("enterBtn");
button.addEventListener("click", f);
function f(){
	let p = document.getElementById("status");
	// p.tagName = "h1";
	p.innerText = "";
	// p.remove();
	let h1 = document.createElement("h1");
	h1.id = "status";
	h1.innerText = "Entered Metaverse";
	p.append(h1);
}
var t = document.getElementById("mydiv");
var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
t.onmousedown = getPosition;


function getPosition(ev) {
	ev = ev || window.event;
	ev.preventDefault();
	pos3 = ev.clientX;
	pos4 = ev.clientY;
	t.onmouseup = resetPosition;
	t.onmousemove = updatePosition;
	
	console.log(pos3, pos4);

}

// cap nhat lai vi tri khi mousemove
function updatePosition(ev) {
	ev = ev || window.event;
	ev.preventDefault();
	pos1 = pos3 - ev.clientX;
	pos2 = pos4 - ev.clientY;
	pos3 = ev.clientX;
	pos4 = ev.clientY;

	t.style.top = (t.offsetTop - pos2) + 'px';
	t.style.left = (t.offsetLeft - pos1) + 'px';

}

function resetPosition() {
	document.onmouseup = null;
	document.onmousemove = null;
}


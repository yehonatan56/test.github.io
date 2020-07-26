var icon = document.getElementById("idb")
function nav_toggle(navId) {
	var nav = navId;
	if (nav.style.display == "none") {
		nav.style.display = "block"; // == boolean check, single = assimilation
		icon.className = "fas fa-times";
	} else {
		nav.style.display = "none";
		icon.className = "fas fa-bars"
	}
}
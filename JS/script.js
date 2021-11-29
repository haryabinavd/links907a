function show_popup(visible) {
	let popup = document.getElementById('popup')
	if (visible)
		popup.classList.add('show')
	else
		popup.classList.remove('show')
}
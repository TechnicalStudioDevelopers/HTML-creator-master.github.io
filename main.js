function progressBar(state, text) {
	if (state == true) {
		var backdrop_progressBar = document.createElement('div');
		var progress_background = document.createElement('div');
		var loader = document.createElement('div');
		var progress_text = document.createElement('span');

		backdrop_progressBar.id = 'backdrop_progressBar';
		progress_background.id = 'progress_background';
		loader.id = 'loader';
		progress_text.id = 'progress_text';
		if (text == null || text == undefined) {
			progress_text.innerText = 'Please wait...';
		} else {
			progress_text.innerText = text;
		}
		document.getElementById('progressBar').appendChild(backdrop_progressBar);
		backdrop_progressBar.appendChild(progress_background);
		progress_background.appendChild(loader);
		progress_background.appendChild(progress_text);
	}

	if (state == false) {
		document.getElementById('progressBar').innerHTML = '';
	}
}

function toast(message) {

	let toast = document.createElement('div');
	toast.id = 'toast';
	document.body.appendChild(toast);
	let toastMessage = document.createElement('span');
	toastMessage.id = 'toastMessage';
	toastMessage.innerHTML = message;
	toast.appendChild(toastMessage);
	setTimeout(function() { toast.remove() }, 3000);
	setTimeout(function() { toastMessage.remove() }, 3000);
}

function convertCheckboxToToggleWithId(checkbox, id, classes) {
	var label = document.createElement('label');
	label.setAttribute('class', 'togglelabel');
	var NewCheckbox = document.createElement('input');
	NewCheckbox.type = 'checkbox';
	NewCheckbox.setAttribute('class', 'checkbox');
	NewCheckbox.id = id;
	var toggleslider = document.createElement('span');
	toggleslider.setAttribute('class', 'toggleslider');
	checkbox.appendChild(label);
	label.appendChild(NewCheckbox);
	label.appendChild(toggleslider);
}

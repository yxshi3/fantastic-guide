function openInNewTab(url) {
	var win = window.open(url, '_blank');
	win.focus();
}

function handleSectionNavigationClick(event) {
	event.preventDefault();

	var href = event.target.getAttribute('href').replace('?hash=', '#');

	// Handle YouTube and Vimeo links
	if (href.includes('youtu.be') || href.includes('vimeo')) {
		openVideoModal(href);
		addModalListeners();
		return true;
	}

	// Handle non-hash links
	if (!href.includes('#')) {
		if (href.charAt(0) === '/') {
			window.location = href;
		} else {
			openInNewTab(href);
		}
		return true;
	}

	// Hide all current section content and images, remove link active class
	var list = event.target.closest('.students__section-navigation-list');
	hideCurrectSectionListItems(list);
	if (
		event.target.closest('#impact-the-world') !==
		document.querySelector('#impact-the-world')
	) {
		hideCurrectSectionImages(event.target.closest('.students__section'));
	}
	var links = list.querySelectorAll('a');
	for (var i = 0; i < links.length; i++) {
		links[i].classList.remove('active');
	}

	// Reveal target content and image, add link active class
	var image = '[src*=' + href.replace('#', '') + ']';
	document.querySelector(href).removeAttribute('hidden');
	if (
		event.target.closest('#impact-the-world') !==
		document.querySelector('#impact-the-world')
	) {
		document.querySelector(image).removeAttribute('hidden');
	}
	event.target.classList.add('active');

	return true;
}

function openVideoModal(url) {
	if (!url) return false;

	// Build the modal markup
	var modal = document.createDocumentFragment();
	var backdrop = document.createElement('div');
	var aside = document.createElement('aside');
	var div = document.createElement('div');
	var iframe = document.createElement('iframe');

	// Add markup classes
	backdrop.classList.add('students__modal-backdrop');
	aside.classList.add('students__modal');
	div.classList.add('aspect-ratio-wide');

	// Set markup attributes
	iframe.setAttribute('src', url);
	iframe.setAttribute('width', '640');
	iframe.setAttribute('height', '427');
	iframe.setAttribute('frameborder', '0');
	iframe.setAttribute('allow', 'fullscreen');
	iframe.setAttribute('allowfullscreen', '');

	// Combine markup
	div.appendChild(iframe);
	aside.appendChild(div);
	backdrop.appendChild(aside);
	modal.appendChild(backdrop);

	// Append modal markup to the DOM
	var body = document.querySelector('#site-wrapper');
	if (!body) return false;
	body.appendChild(modal);

	return true;
}

function addModalListeners() {
	var backdrop = document.querySelector('.students__modal-backdrop');
	if (!backdrop) return false;
	var modal = document.querySelector('.students__modal');

	// Get the backdrop, listen for a click, and close modals
	modal.addEventListener('click', stopPropagation);
	backdrop.addEventListener('click', closeVideoModal);

	// `esc` key press
	document.addEventListener('keyup', handleKeyPress);
}

/**
 * Stops propagation of click event to parent elements
 *
 * param {Event} event
 * return {Boolean}
 */
function stopPropagation(event) {
	event.stopPropagation();
	return true;
}

function handleKeyPress(event) {
	if (event.key === 'Escape') {
		closeVideoModal();
		return true;
	}
	return false;
}

function closeVideoModal(event) {
	var backdrop = document.querySelector('.students__modal-backdrop');
	if (!backdrop) return false;

	backdrop.remove();

	return true;
}

function hideCurrectSectionListItems(list) {
	var links = list.querySelectorAll('a');
	if (!links) return false;
	var contents = [];

	for (var i = 0; i < links.length; i++) {
		// Only use anchor links
		var href = links[i].getAttribute('href').replace('?hash=', '#');
		if (!href || !href.includes('#')) continue;

		// Add content with matching id to contents array
		contents.push(document.querySelector(href));
	}

	for (var j = 0; j < contents.length; j++) {
		// Hide content
		contents[j].setAttribute('hidden', '');
	}

	return true;
}

function hideCurrectSectionImages(section) {
	var images = section.querySelectorAll('img');
	if (!images) return false;

	for (var i = 0; i < images.length; i++) {
		images[i].setAttribute('hidden', '');
	}

	return true;
}

function stopPropagation(event) {
	event.stopPropagation();
	return true;
}

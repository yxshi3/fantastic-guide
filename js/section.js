// Tabs
function openWebDesign(evt, sectionName) {
	var i, sectioncontent, sectionlinks;

	// Get all elements with class="tabcontent" and hide them
	sectioncontent = document.getElementsByClassName(
		'section-content-web-design'
	);
	for (i = 0; i < sectioncontent.length; i++) {
		sectioncontent[i].style.display = 'none';
	}

	// Get all elements with class="tablinks" and remove the class "active"
	sectionlinks = document.getElementsByClassName(
		'section-navigation-link-web-design'
	);
	for (i = 0; i < sectionlinks.length; i++) {
		sectionlinks[i].className = sectionlinks[i].className.replace(
			' active',
			''
		);
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(sectionName).style.display = 'block';
	evt.currentTarget.className += ' active';
}

// Tabs
function openDAQApp(evt, sectionName) {
	var i, sectioncontent, sectionlinks;

	// Get all elements with class="tabcontent" and hide them
	sectioncontent = document.getElementsByClassName('section-content-daq-app');
	for (i = 0; i < sectioncontent.length; i++) {
		sectioncontent[i].style.display = 'none';
	}

	// Get all elements with class="tablinks" and remove the class "active"
	sectionlinks = document.getElementsByClassName(
		'section-navigation-link-daq-app'
	);
	for (i = 0; i < sectionlinks.length; i++) {
		sectionlinks[i].className = sectionlinks[i].className.replace(
			' active',
			''
		);
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(sectionName).style.display = 'block';
	evt.currentTarget.className += ' active';
}

// Tabs
function openWristDistractor(evt, sectionName) {
	var i, sectioncontent, sectionlinks;

	// Get all elements with class="tabcontent" and hide them
	sectioncontent = document.getElementsByClassName(
		'section-content-wrist-distractor'
	);
	for (i = 0; i < sectioncontent.length; i++) {
		sectioncontent[i].style.display = 'none';
	}

	// Get all elements with class="tablinks" and remove the class "active"
	sectionlinks = document.getElementsByClassName(
		'section-navigation-link-wrist-distractor'
	);
	for (i = 0; i < sectionlinks.length; i++) {
		sectionlinks[i].className = sectionlinks[i].className.replace(
			' active',
			''
		);
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(sectionName).style.display = 'block';
	evt.currentTarget.className += ' active';
}

function openPianoComposition(evt, sectionName) {}

function openArtworks(evt, sectionName) {}

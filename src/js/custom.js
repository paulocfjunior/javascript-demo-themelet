console.log('JS Themelet loaded');

$(document).on('DOMNodeInserted', 'button', function(){
	var button = $(this)[0];

	if(typeof button.title === 'undefined' || button.title === ''){
		if(typeof button.innerText === 'string') {
			console.log('typeof string');
			button.title = button.innerText;
		} else if (button.className !== '') {
			console.log('typeof other / has className');
			button.title = button.className;
		} else {
			console.log('default title');
			button.title = 'Button title';
		}
	}
});

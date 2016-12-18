module.exports = function(){
	var element = document.createElement('form');
	element.innerHTML = '<input type="text">';
	element.innerHTML += '<input type="submit" value="Submit">';

	return element;
}

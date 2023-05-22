var toggleBox = document.querySelector('#dark-mode');
var navbar = document.querySelector('.navbar')
var body = document.querySelector('body');
var button = document.querySelector('.slider::before');

toggleBox.addEventListener('change', () => {
    if (toggleBox.checked) {
        console.log("Checkbox marcada");
        body.setAttribute('style', 'background-color: #2b2b2b; color: #fff;');
        navbar.setAttribute('style', 'background-color: #2b2b2b; box-shadow: 0em 0.3125em 0.625em 0em #e69d16;');
    } else {
        console.log("Checkbox desmarcada");
        body.setAttribute('style', 'background-color: #fbfbfb; color: #2b2b2b;');
        navbar.setAttribute('style', 'background-color: #fff; box-shadow: 0em 0.3125em 0.625em 0em #aaa;');
    }
});
$(document).ready(function() {
    var text = $('#text')[0];
    var shadow = '';
    for(var i = 0; i < 25; i++) { 
        shadow += (shadow ? ',' : '') + -i * 1 + 'px ' + i * 1 + 'px 0 #444';
    }
    text.style.textShadow = shadow;
})
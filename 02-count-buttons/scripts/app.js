(function(){

    var labelFirst = document.querySelector('#label-first');
    var firstButton = document.querySelector('#btn-first');

    var labelSecond = document.querySelector('#label-second');
    var secondButton = document.querySelector('#btn-second');

    firstButton.addEventListener('click', function(e){
        alert('first')
    })

    secondButton.addEventListener('click', function(e){
        alert('second')
    });
})()
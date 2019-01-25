(function(){
    var div = document.querySelector('div');
    
    var initTop = 85;
    var initLeft = 0;

    var step = 1;

    var intervalId = setInterval(function(){
        if (initTop >= 0 && initLeft < 100){
            initTop = initTop - step;
            initLeft = initLeft + step;
        } else {
            clearInterval(intervalId);
        }

        div.style.top = initTop + "%"
        div.style.left = initLeft + "%"

    }, 100);
})()
(function(){
    var div = document.querySelector('div');

    var isBig = false;
    setInterval(function(){
        if (isBig){
            div.className = ""
        } else {
            div.className = "big-image"
        }
        
        isBig = !isBig;
    }, 1000);
})();
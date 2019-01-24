(function(){
    var divs = document.querySelectorAll('div');

    var firstDiv = divs[0];
    var secondDiv = divs[1];


    var isBig = false;
    setInterval(function(){
        if (isBig){
            firstDiv.className = ""
        } else {
            firstDiv.className = "huge-label red-border"
        }
        
        isBig = !isBig;
    }, 1000);
})();
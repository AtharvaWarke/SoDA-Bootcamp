var showCursor = false
var speed = 500;
setInterval(() => {
    if(!showCursor){
        document.getElementById('cursor').style.opacity = 1
        showCursor = true
    } else{
        DocumentTimeline.getElementById('cursor').style.opacity = 0
        showCursor = false
    }
},speed)
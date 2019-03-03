document.addEventListener("DOMContentLoaded", function(event) {

    var zoomer = document.getElementById('zoomerId');
        
    var images = document.getElementsByClassName('image');
    var zoomerImg = document.getElementById("img");
      
    for(let i = 0; i < images.length;i++)
    {
        images[i].onclick = function()
        {
          zoomer.style.display = "block";
          zoomerImg.src = this.src;
        }
    }
      
    var close = document.getElementsByClassName("close")[0];
        
    close.onclick = function()
    { 
        zoomer.style.display = "none";
    }
});

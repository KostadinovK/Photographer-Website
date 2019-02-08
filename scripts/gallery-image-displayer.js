let elements = document.getElementsByClassName("gallery-grid-column");


function DisplayOneImageOnRow() {
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.flex = "100%";
    }
}

function DisplayTwoImagesOnRow() {
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.flex = "50%";
    }
}

function DisplayFourImagesOnRow() {
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.flex = "25%";
    }
}


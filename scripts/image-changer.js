function ChangeImage(id){

    if(id != "portrait"){

        let image = document.getElementById(id);
        let array = image.src.split('.');
        let extension = array.splice(array.length-1,1);
        let imagePath = array.toString().replace(/,/g,'.');


        if (imagePath.indexOf('2') > -1)
        {
            imagePath = imagePath.replace('2','');
            image.src = imagePath + "." + extension;
        }else{
            image.src = imagePath + "2." + extension;
        }
    }
    
}
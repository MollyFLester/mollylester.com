/* basic script to change picture on click, need to make it functional
for more than one image, and also have a nice transition */

function changeImage(){
	var image = document.getElementById('changedImage');
	if(image.src.match("af_diagram")){
		image.src = "http://placehold.it/980x500";
	} else{
		image.src = "assets/images/learning/af_diagram.jpg";
	}

};

document.getElementById('banner').style.backgroundImage = "url('assets/images/banner.svg')";

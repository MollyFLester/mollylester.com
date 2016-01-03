/* basic script to change picture on click, need to make it functional
for more than one image, and also have a nice transition */

function pictureChange()
{
	var image = document.getElementById('changedImage');
	if(image.src.match("af")){
		image.src = "http://placehold.it/980x500";
	} else{
		image.src = "assets/images/learning/af_diagram.jpg";
	}
	
};

function soloFadeClick(){
	$('#solo1_tab').addClass('opClass');
	$('#solo1_tab').removeClass('opClass_fade');
	$('#group1_tab').addClass('opClass_fade');
};

function groupFadeClick(){
	$('#group1_tab').addClass('opClass');
	$('#group1_tab').removeClass('opClass_fade');
	$('#solo1_tab').addClass('opClass_fade');
};

function handler (event) {
	var target = $(event.target);

	target.addClass('opClass');
	target.removeClass('opClass_fade');

	if (target.hasClass('group1_tab'))
	{
		$('.solo1_tab').addClass('opClass_fade');
		$('#changedImage').addClass('opClass_pic');
		$('#changedImage').removeClass('opClass_fade_pic');

	} else if (target.hasClass('solo1_tab'))
	{
		$('.group1_tab').addClass('opClass_fade');
		$('#changedImage').addClass('opClass_fade_pic');
		$('#changedImage').removeClass('opClass_pic');
	}
};

$('.tab').click(handler);



document.getElementById('banner').style.backgroundImage = "url('assets/images/banner.svg')";

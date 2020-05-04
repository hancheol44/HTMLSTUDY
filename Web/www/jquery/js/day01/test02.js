$(document).ready(function(){
	$('#btn1').click(function(){
		$('[href="a.jpg"]').addClass('w3-col w3-hover-orange w3-pink w3-border w3-padding w3-center');
		var clslist = $('[href="a.jpg"]').attr('class');
		alert(clslist);
	});
	
	$('#btn2').click(function(){
		$('[href="b.jpg"]').addClass('w3-col w3-hover-sand w3-padding-32 w3-lime w3-center w3-border');
		var clslistb = $('[href="b.jpg"]').attr('class');
		alert(clslistb);
	});
});
		
	
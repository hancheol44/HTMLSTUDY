$(document).ready(function(){
	$('#btn2').click(function(){
		$('#d2').stop().fadeOut();
	});
	
	$('#btn1').click(function(){
		$('#d2').stop().fadeIn(2000);
	});
	
	$('#btn3').click(function(){
		$('#d3').stop().fadeToggle(1500);
	});
	
	$('#btn4').click(function(){
		$('#d4').fadeTo(3000, 0.5, f01);
	});
	
	function f01(){
		$('#d4 > h4').css({'color' : 'orange','font-size':'24pt','padding':'0px','margin-top':'-4px'}); // 연관배열형식
	}
	
});
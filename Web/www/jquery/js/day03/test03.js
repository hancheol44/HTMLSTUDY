$(document).ready(function(){
	function f01(){
		$('#box').animate({'left':'+=250px', 'top':'+=500px'}, 500);
		$('#box1').animate({'opacity':'0'}, 500);
		$('#box').animate({'left':'+=250px', 'top':'-=500px'}, 500);
		$('#box1').animate({'opacity':'1'}, 500);
		$('#box').animate({'left':'-=500px'}, 500);
	}
	
	setInterval(f01, 0);
});
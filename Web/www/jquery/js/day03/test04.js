$(document).ready(function(){
	// jquery의 기본 문법은 $(선택자).함수;
	$('#d1-2').parent().addClass('w3-orange');
	$('#d1 span').parent().addClass('w3-purple');
	//$('#d1').children().addClass('w3-sand');
	
	// 아이디가 s3인 태그의 모든 형제태그에 w3-col w3-padding w3-border
	$('#s3').siblings().addClass('w3-col w3-padding w3-border w3-margin-top');
	
	// eq() : 선택된 요소들의 리스트에서 인덱스에 해당하는 요소만 선택하는 방법
	//--- 아래는 동일 ----//
	$('#d2 > span:eq(0)').removeClass('w3-margin-top');
	$('#d2 > span').eq(0).removeClass('w3-margin-top');
//	$('#s3').siblings().eq(0).removeClass('w3-margin-top');
	
	$('#s3').siblings().eq(1).addClass('w3-deep-purple');
	$('#s3').prevAll().addClass('w3-text-orange');
	
	// 문제 1] 아이디가 d2 인 태그의 바로 직후 형제 태그의 크기를 100px, 100px로 만들고
	//			배경색은 purple
	$('#d2').next().removeClass('w3-blue');
	$('#d2').next().css({'width':'100px','height':'100px','background-color':'purple'});
	
	// 문제 2] 아이디가 d5 인 태그에 span 태그를 추가하고 , 다시 div 태그를 추가하고 
	//			두 태그에 width: 100px, height: 100px 하고 배경색은 orange 로 변경하세요.
	//			단, 태그를 추가할 때 먼저 추가한 태그가 맨 마지막에 위치하도록 하세요.
	$('#d5').prepend("<span>span</span>");
	$('#d5').prepend("<div>div</div>");
	$('#d5 > *').css({'height':'100px','width':'100px',
		'display':'inline-block',
		'background-color':'orange',
		'margin':'10px'
	});
	// 문제 3 ] d5 부터 d2 까지 설정을 변경해보자
	$('#d5').prevUntil('#d1').removeClass('w3-border');
	$('#d5').prevUntil('#d1').css('border','10px dotted tomato');
	
	$('.mxw').children().last().css('border','20px dotted black');
	$('.mxw > *:last').css('border','20px dotted DodgerBlue');
	

	$('#d1 > *:even').removeClass('w3-purple');
	$('#d1 > *:even').css('background-color','SlateBlue');
	
	// 홀수번째 토마토 짝수번째 퍼플 // 보더칼라 변경
	$('.mxw > *').removeClass('w3-border');
	$('.mxw > *:even').css('border','7px dotted red');
	$('.mxw > *:odd').css('border','7px dotted blue');
});
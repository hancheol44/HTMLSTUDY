$(document).ready(function(){
	$('.box').on({
		'mouseover':function(){
			$(this).removeClass('w3-sand');
			$(this).css({'background-color':'orange', 
					'box-shadow' : '3px 3px 5px purple'
			});
		},
		'mouseout':function(){
			$(this).css({'background-color':'',
				'box-shadow' : ''
				});
			$(this).addClass('w3-sand');
			
		},
		'click':function(){
			console.log('*** div tag click ***');
		}
	});
});
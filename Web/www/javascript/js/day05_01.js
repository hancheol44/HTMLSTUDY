/* 
 	day05/Test01.html javascript file
*/
document.getElementById('file').onchange = function(e){
	var val = this.value;
//	alert(val);
//	location.href = 'Test01.html?file=' +val;
	
	// 파일을 선택하는 경우 파일태그의 value 값은 거짓경로와 파일이름이 입력이 되고
	// 파일의 내용은 URL 객체에 해당파일을 선택하는 순간 저장이 된다.
	// 따라서 파일을 사용하려면 URL 객체에서 꺼내서 사용해야 한다.

/*
 	문제 ] 
 	
 		선택한 파일이 jpg, jpeg, png, gif 인 파일만 입력이 되게 처리하세요.
*/	
	
	// 정규표현식으로 해결하는 방법
	
	if (/(\.gif|\.jpg|\.jpeg|\png)$/i.test(this.value) == false) {
		alert("이미지 형식의 파일을 선택하십시오");
		return;
	} else {
		alert("이미지파일을 업로드 했습니다");
	}
	
	// 파일 가져오고
	var vfile = URL.createObjectURL(e.target.files[0]);
	
	// img 태그 src 속성 처리
	document.getElementById('img1').setAttribute('src', vfile);
	
	// 태그의 클래스 변경하고
	document.getElementsByClassName('dnone')[0].classList.remove('dnone');

}

var name = window.prompt('이름을 입력하세요!');

var reg = /^[가-힣]{2,24}$/;

var result = reg.test(name);

alert(result);


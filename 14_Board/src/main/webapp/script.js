/**
 * 
 */
 
 function writeSave(){
		//alert(2);
		if($('input[name="writer"]').val()==""){
			alert("아이디를 입력하세요.");
			$('input[name="writer"]').focus();
			return false;
		}
		
		if($('input[name="subject"]').val()==""){
			alert("제목을 입력하세요.");
			$('input[name="subject"]').focus();
			return false;
		}
		
		if($('input[name="email"]').val()==""){
			alert("email을 입력하세요.");
			$('input[name="email"]').focus();
			return false;
		}
		
		if($('textarea[name="content"]').val()==""){
			alert("내용을 입력하세요.");
			$('textarea[name="content"]').focus();
			return false;
		}
		
		if($('input[name="passwd"]').val()==""){
			alert("비밀번호를 입력하세요.");
			$('input[name="passwd"]').focus();
			return false;
		}
}

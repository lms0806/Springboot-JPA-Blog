let index = {
	init : function(){
		$("#btn-save").on("click", ()=>{ // function(){}를 사용하지 않는 이유 : this를 바인딩하기 위해서
			this.save();
		});
		$("#btn-update").on("click", ()=>{ // function(){}를 사용하지 않는 이유 : this를 바인딩하기 위해서
			this.update();
		});
	},//회원가입 버튼을 눌렀다면
	
    save: function(){
        let data = {
			username : $("#username").val(),
			password : $("#password").val(),
			email : $("#email").val()
		};
		
		// ajax 호출시 default가 비동기 호출
		// ajax 통신을 이용해 3개의 데이터를 json으로 변경하여 insert 요청
		// ajax 통신에 성공하고 서버가 json을 리턴해주면 자동으로 자바 오브젝트로 변환
		$.ajax({
			type : "POST",
			url : "/auth/joinProc",
			data : JSON.stringify(data), // http body 데이터
			contentType : "application/json; charset=utf-8", //body 데이터의 타입
			dataType : "json" // 요청을 서버로 해서 응답이 왔을 때 문자열로 왔는데 json모양이면 javascript 오브젝트로 변경
			//회원가입 수행 요청
		}).done(function(resp){
			if(resp.status == 500){
				alert("회원가입에 실패하였습니다.");
			}
			else{
				alert("회원가입이 완료되었습니다.");
				location.href = "/";
			}
			//정상
		}).fail(function(error){
			alert(JSON.stringify(error));
			//실패
		});
    },
    
    update: function(){
        let data = {
			id : $("#id").val(),
			username : $("#username").val(),
			password : $("#password").val(),
			email : $("#email").val()
		};
		
		$.ajax({
			type : "PUT",
			url : "/user",
			data : JSON.stringify(data),
			contentType : "application/json; charset=utf-8",
			dataType : "json"
		}).done(function(resp){
			alert("회원수정이 완료되었습니다.");
			location.href = "/";
		}).fail(function(error){
			alert(JSON.stringify(error));
			//실패
		});
    },
}

index.init();
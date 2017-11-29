$(document).ready(function(){
	$("#submit").on("click", function(){
		event.preventDefault();
		if($("#password").val()!=$("#confirmPassword").val()){
			return {message: "Password and confirmation do not match", success:false};
		}
		var newUser={
			firstName:$("#firstName").val(),
			lastName:$("#lastName").val(),
			password:$("#password").val(),
			email:$("#email").val()
		};
		$.ajax({
			url:"/users/",
			method:"POST",
			contentType: 'application/json',
			data:JSON.stringify(newUser),
		}).done(function(data){
			if(data.id){
				window.location = '/teetime/'+moment().format("dddd") + "?id=" + data.id;
			}
			else{
				console.log(data);
			}
		});
	})
})
$(document).ready(function(){
	$.get("/days", function(days){
		console.log(days)
		days.forEach(function(day, index){
			var weekday=day.weekday;
			$("#openTime"+weekday).val(moment(day.openTime, "HH:mm").format("HH:mm"));
			console.log(moment(day.closeTime, "HH:mm").format("hh:mm"))
			$("#closeTime"+weekday).val(moment(day.closeTime, "HH:mm").format("HH:mm"));
			$("#iteration"+weekday).val(day.iteration);
			$("#isOpen"+weekday).prop("checked", day.isOpen)
		})
	})
	$(".dayUpdate").on("click", function(){
		 event.preventDefault();
		var weekday = $(this).data("weekday");
		var closeTime= $("#closeTime"+weekday).val();
		var openTime= $("#openTime"+weekday).val();
		var iteration= $("#iteration"+weekday).val();
		var isOpen = $("#isOpen"+weekday).is(':checked');
		data={
			closeTime,
			openTime,
			iteration,
			isOpen
		}
		$.ajax({
			url:"/days/"+weekday,
			method:"PUT",
			contentType: 'application/json',
			data:JSON.stringify(data),
			success:function(data){
				console.log(data)
			}
		});

	})
	$("#submit-btn-newUser").on("click", function(){
		event.preventDefault();
		var email= $("#newUser").val();
		var server= document.origin;
		$.ajax({
			url:"/invite",
			method:"POST",
			contentType: 'application/json',
			data:JSON.stringify({
				email,
				server
			}),
			success:function(data){
				console.log(data)
			}
		})	
	})

});
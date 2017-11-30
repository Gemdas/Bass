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
	$("#submit-btn-password").on("click", function(){
		if($("#password").val()!=$("#confirmPassword").val()){
			return console.log({message: "Password and confirmation do not match", success:false});
		}
		var user = {
			email: $("#emailStorage").data("email"),
			password: $("#currentPassword").val().trim()
		};
		$.post("/validate", user, function(res) {
			var user = {
				email: $("#emailStorage").data("email"),
				password: $("#password").val().trim()
			};
			$.ajax({
				url:"/users/password",
				method:"PUT",
				contentType: 'application/json',
				data:JSON.stringify(user),
			}).done(function(data){
				$("#confirmPassword").val("");
				$("#password").val("");
				$("#currentPassword").val("");
			});
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
		var email = $("#newUser").val();
		var server = document.origin;
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

	$.ajax({
		url: "/roster",
		method: "GET", 
		success: function(users) {
			var rosterTable = $("<table>").addClass("table");

			users.forEach(function(user) {

				var newRow = $("<tr>");

				var firstName = $("<td>").text(user.firstName);
				var lastName = $("<td>").text(user.lastName);
				var email = $("<td>").text(user.email);
				var setAdminBtn = $("<button>").text("Admin").addClass("btn btn-primary adminBtn").attr("id", "user" + user.id);

				newRow.append(firstName).append(lastName).append(email).append(setAdminBtn);

				rosterTable.append(newRow);
			})

			$("#roster-table").append(rosterTable);
		}
	})

	// Not working yet...
	/*$(".adminBtn").on("click", function() {
		event.preventDefault();
		console.log("click worked for admin btn");
		console.log("this: " + this);
		var userId = this.id;
		console.log(userId);
	})*/

});
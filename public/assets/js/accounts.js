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
			var tableHeader = $("<tr>");
			var firstNameRow = $("<th>").text("First Name");
			var lastNameRow = $("<th>").text("Last Name");
			var emailRow = $("<th>").text("Email");
			var roleRow = $("<th>").text("Role");

			tableHeader.append(firstNameRow).append(lastNameRow).append(emailRow).append(roleRow);
			rosterTable.append(tableHeader);

			users.forEach(function(user) {

				var newRow = $("<tr>");

				var firstName = $("<td>").text(user.firstName);
				var lastName = $("<td>").text(user.lastName);
				var email = $("<td>").text(user.email);

				if (user.isAdmin) {
					var role = $("<td>").attr("id", "role" + user.id).text("Admin");
					var td = $("<td>");
					var setAdminBtn = $("<button>").text("Remove Admin").addClass("btn btn-danger removeAdmin adminBtn").attr("id", user.id);
					td.append(setAdminBtn);

				} else if (!user.isAdmin) {
					var role = $("<td>").attr("id", "role" + user.id).text("Member");
					var td = $("<td>");
					var setAdminBtn = $("<button>").text("Add Admin").addClass("btn btn-success addAdmin adminBtn").attr("id", user.id);
					td.append(setAdminBtn);
				}

				newRow.append(firstName).append(lastName).append(email).append(role).append(td);

				rosterTable.append(newRow);
			})

			$("#roster-table").append(rosterTable);
		}
	})

	$(document).on("click", ".adminBtn", function() {

		if ($(this).hasClass("addAdmin")) {

			var userId = this.id;
			var button = $(this);
			var roleLabel = $("#role" + userId);
		
			$.ajax({
				url: "/add-admin/" + userId,
				method: "PUT", 
				data: userId,
				success: function(data) {
					button.removeClass("btn-success addAdmin").addClass("btn-danger removeAdmin").text("Remove Admin");
					roleLabel.text("Admin");
				}
			})
		}

		if ($(this).hasClass("removeAdmin")) {

			var userId = this.id;
			var button = $(this);
			var roleLabel = $("#role" + userId);
		
			$.ajax({
				url: "/remove-admin/" + userId,
				method: "PUT", 
				data: userId,
				success: function(data) {
					button.removeClass("btn-danger removeAdmin").addClass("btn-success addAdmin").text("Add Admin");
					roleLabel.text("Member");
				}
			})
		}
	})


	/*$(document).on("click", ".addAdmin", function() {
	
		var userId = this.id;
		
		$.ajax({
			url: "/add-admin/" + userId,
			method: "PUT", 
			data: userId,
			success: function(data) {
				console.log(data)
			}
		})
	})

	$(document).on("click", ".removeAdmin", function() {
	
		var userId = this.id;
		
		$.ajax({
			url: "/remove-admin/" + userId,
			method: "PUT", 
			data: userId,
			success: function(data) {
				console.log(data)
			}
		})
	})*/

});
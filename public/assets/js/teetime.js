// functionality for the front-end goes here
// ajax requests go here

 // when the user selects the form in the teesheet, a module should pop up
 // the module will have buttons 1-4 to select how may players they will have in the group
 // selecting submit will send an $.post to the database storing the teetime
$(document).ready(function(){
	$('#form').hide();

	$('#submit').click(function(){
		// $('#form').show();
		$('#form').dialog({
			
			height: 'auto',
			width: 'auto',
			modal: true
			
		});

	});
});

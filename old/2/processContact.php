<?php
	date_default_timezone_set ( 'America/New_York' );
	$outputMessage = "There was an error processing your email.";
	$result = false;

	$_email = isset($_POST['email']) ? $_POST['email'] : null;
	$_fullName = isset($_POST['fullName']) ? $_POST['fullName'] : null;
	$_message = isset($_POST['message']) ? $_POST['message'] : null;

	if($_email && $_fullName && $_message){
		$to_name 	= "Meaghan Bishop";
		$to 		= "info@meaghanbishop.com";
		$subject 	= "An email from MeaghanBishop.com sent at  " . strftime("%T", time());

		$message = "From: ".$_fullName. "\n";
		$message .= "Email: ".$_email."\n";
		$message 	.= "Message: ".$_message;
		$mailheader = "From: {$_fullName} <{$_email}> \r\n";

		$result = mail($to, $subject, $message, $mailheader);
		if ($result){
			$outputMessage = "The email was sent successfully!";
		}
	}
	
	unset($_POST['fullName']);
	unset($_POST['email']);
	unset($_POST['message']);

	echo json_encode(array(
		'success' => $result,
		'message' => $outputMessage
		));
?>
<?php

	$to_name 		= "Meaghan Bishop";
	$to 					= "zi2on4@gmail.com";
	$subject 			= "An email from MeaghanBishop.com sent at  " . strftime("%T", time());
	$from_name 	= $_POST['fullName'];
	$from 				= $_POST['email'];
	
	$message		= "From: ".$from_name. "\n";
	$message		.= "Email: ".$from."\n";
	$message 		.= "Message: ".$_POST['message'];

	$name 				= $_POST['name'];
	$email 				= $_POST['email'];
	$mailheader 		= "From: {$from_name} <{$email}> \r\n";
	
	mail($to, $subject, $message, $mailheader) or die("There was an error processing your email.");
	
	echo "The email was sent successfully!";

?>
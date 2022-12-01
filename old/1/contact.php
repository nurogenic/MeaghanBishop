<?php
	$outputMessage = "";
	if(isset($_POST['submit'])){
		$to_name 	= "Meaghan Bishop";
		$to 		= "info@meaghanbishop.com";
		$subject 	= "An email from MeaghanBishop.com sent at  " . strftime("%T", time());
		
		if($from_name = $_POST['fullName']) {
			$message = "From: ".$from_name. "\n";	
		}
		if($from = $_POST['email']) {
			$message .= "Email: ".$from."\n";
		}
		if($postMessage = $_POST['message']) {
			$message 	.= "Message: ".$postMessage;	
		}
		
		$name 		= $_POST['name'];
		$email 		= $_POST['email'];
		$mailheader = "From: {$from_name} <{$email}> \r\n";
	
		$result = mail($to, $subject, $message, $mailheader);
		
		if ($result){
			unset($_POST['fullName']);
			unset($_POST['email']);
			unset($_POST['message']);
			unset($_POST['submit']);
			$outputMessage = "<div class=\"outputMessage\">The email was sent successfully!</div>";
		} else {
			$outputMessage = "<div class=\"outputMessage\">There was an error processing your email.</div>";
		}
	}
	$page = "Contact";
?>
<?php include("_/includes/header.php"); ?>
	<div id="contactborder">
		<div class="contactBodyCopy">
			<h3>Say Hello!</h3>
			<p>If you want some design work done, or are looking to contact me about a job, feel free to use the contact form to the right.</p> 
			<div id="social">
				<a href="http://www.twitter.com/megkat29"><div id="twitter"></div></a>
				<a href="http://www.linkedin.com/pub/meaghan-bishop/56/a3/705/"><div id="linkedin"></div></a>
			</div>
		</div>
		<div class="contactform">
			<?php echo $outputMessage; ?>
			<form action="contact.php" method="post">
				<div>
					<p>Name:</p> 
					<input class="inputsize" type="text" maxlength="30" value="" name="fullName" placeholder="Full Name">
				</div>
				<div>
					<p>Email:</p>
					<input class="inputsize" type="email" value="" name="email" placeholder="Email Address">
				</div>
				<div>
					<p>Message:</p>
					<textarea id="inputsize" type="text" value="" name="message" placeholder="Write your message here"></textarea>
				</div>
				<div>
					<input id="submitbutton" type="submit" value="submit" name="submit">
				</div>
			</form>
		</div>
		<div class="clear"></div>
	</div>
<?php include("_/includes/footer.php"); ?>
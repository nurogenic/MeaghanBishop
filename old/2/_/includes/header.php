<?php 
	date_default_timezone_set ( 'America/New_York' );
?><!DOCTYPE html>
<html>
<head>
	<title>Meaghan Bishop's Web Portfolio<?php if($page) echo ' - '.$page; ?></title>

	<meta http-equiv="Content-Type"	content="text/html; charset=utf-8"/>
	<meta property="fb:admins"		content="donny.dero"/>
	<meta property="og:title"		content="Meaghan Bishop's Web Portfolio"/>
	<meta property="og:description"	content="My name is Meaghan Bishop and I'm a graphic designer. This is my portfolio that shows an on-going record of my latest work."/>
	<meta property="og:type"		content="article"/>
	<meta property="og:url"			content="http://www.meaghanbishop.com/"/>
	<!--meta property="og:image"		content="http://meaghanbishop.com/_/img/fb_image.jpg"/-->
	<meta property="og:site_name"	content="Meaghan Bishop's Web Portfolio"/>
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="shortcut icon" href="_/img/favicon.ico">

	<!-- <link type="text/css" rel="stylesheet" href="_/css/flexslider.css"> -->
	<link type="text/css" rel="stylesheet" href="_/css/jquery.fancybox.css">
	<link type="text/css" rel="stylesheet" href="_/css/style.css">

	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	
	<script src="_/js/jquery.fancybox.pack.js"></script>
	<!--<script src="_/js/jquery.flexslider-min.js"></script>-->
	<script src="_/js/jquery.mousewheel-3.0.6.pack.js"></script>
	<script src="_/js/scripts.js"></script>
</head>
<body class="<?php if($page) echo $page; ?>">
<div class="main">
	<div class="head row">
		<div class="logo col-3">
			<img src="_/img/logo.png">
		</div>
		<div class="icons col-3">
			<img src="_/img/icons.png">
		</div>
		<div class="nav col-3">
			<ul>
				<li class="work"></li>
				<li class="contact"></li>
			</ul>
		</div>
	</div>
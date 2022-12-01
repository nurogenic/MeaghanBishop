<?php $page = "Home"; ?>
<?php include("_/includes/_data.php"); ?>
<?php include("_/includes/header.php"); ?>
	<div class="body container-width">
		<div class="float-container">
			<ul class="item-list">
				<?php foreach ($portfolioData as $item) : 
				?><li class="item" style="background: url(<?php echo $item['thumb'] ?>) center center no-repeat;">
					<a href="<?php echo $item['src'] ?>" alt="" rel="portfolio-work" class="slide-img">
						<div class="info">
							<div class="title"><?php echo $item['title'] ?></div>
							<div class="tags"><?php echo $item['tags'] ?></div>
						</div>
					</a>
				</li><?php endforeach; ?>
			</ul>
		</div>
	</div>
<?php include("_/includes/footer.php"); ?>
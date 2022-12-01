<?php
	$headers = getallheaders();
	$files = [];

	if(
		strpos($headers['Origin'], $headers['Host']) !== false &&
		strpos($headers['Content-Type'], 'multipart/form-data') !== false
	){
		$toReturn = [];
		$DS = DIRECTORY_SEPARATOR;
		$curDir = __DIR__ . $DS;
		$uploadPath = '_' . $DS . 'uploads' . $DS;

		if(!is_dir($curDir. $uploadPath)){
			mkdir($curDir. $uploadPath, 0777, true);
		}

		foreach ($_FILES as $formName => $value) {
			foreach ($_FILES[$formName]['name'] as $index => $name) {
				$path = $uploadPath . str_replace(' ', '_', $_FILES[$formName]['name'][$index]);
				if(strpos(mime_content_type($_FILES[$formName]['tmp_name'][$index]), 'image/') === 0){
					$toReturn[] = $path;
					move_uploaded_file($_FILES[$formName]['tmp_name'][$index], $curDir . $path);
				}
			}
		}
	}

	header('Content-Type: application/json');
	echo json_encode($toReturn, JSON_UNESCAPED_SLASHES);
?>
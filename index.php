<?php
define("DS", DIRECTORY_SEPARATOR);
require 'vendor/autoload.php';

$Parsedown = new Parsedown();
$Extra = new ParsedownExtra();

$app = new \Slim\App();

function u($path = "") {
	if ($_SERVER["SERVER_PORT"] == 443) {
		$prefix = "https://";
	} else {
		$prefix = "http://";
	}

	return $prefix . $_SERVER["SERVER_NAME"] . "/" .  $path;
}

$app->get("/pages/{category}/{topic}", function($req, $res) use ($Parsedown, $Extra){
	header('Access-Control-Allow-Origin: *');
	$category = $req->getAttribute("category");
	$topic = $req->getAttribute("topic");

	$content = file_get_contents($_SERVER["DOCUMENT_ROOT"] . DS . "content" . DS . $category . DS . $topic . DS . "index.md");
	$contentSplit = preg_split("/---##---/", $content);
	$json = json_decode($contentSplit[0], true);
	return $Extra->text($contentSplit[1]);
});

$app->get("/test", function($req, $res) use ($Parsedown, $Extra) {
	include "site/snippets/header.php";
	echo "<main>";

	$blacklist = array(".", "..", ".DS_Store");
	$categories = scandir($_SERVER["DOCUMENT_ROOT"] . DS . "content");
	foreach ($categories as $category) {
		$chapters = scandir($_SERVER["DOCUMENT_ROOT"] . DS . "content" . DS . $category);
		foreach ($chapters as $chapter) {
			if (!in_array($category, $blacklist) && !in_array($chapter, $blacklist)):
				$content = file_get_contents($_SERVER["DOCUMENT_ROOT"] . DS . "content" . DS . $category . DS . $chapter . DS . "index.md");
				$contentSplit = preg_split("/---##---/", $content);
				$json = json_decode($contentSplit[0], true);

				echo "<article data-category=\"#". $json["category"] ."-". $json["chapter"] ."\">";
				echo $Extra->text($contentSplit[1]);
				echo "</article>";
			endif;
		}
	}

	echo "</main>";
	include "site/snippets/footer.php";
});

$app->get("/", function() {
	include "site/snippets/header.php";
	echo "<main><article style='display:block;'></article></main>";
	include "site/snippets/footer.php";
});


$app->run();
?>
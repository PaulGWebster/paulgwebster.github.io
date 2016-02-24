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

$app->get("/", function($req, $res) use ($Parsedown, $Extra) {
	include "site/snippets/header.php";
	echo "<main>";

	$blacklist = array(".", "..", ".DS_Store");
	$categories = scandir($_SERVER["DOCUMENT_ROOT"] . DS . "content");
	foreach ($categories as $category) {
		if (!in_array($category, $blacklist)):
			$chapters = scandir($_SERVER["DOCUMENT_ROOT"] . DS . "content" . DS . $category);
			foreach ($chapters as $chapter) {
				if (!in_array($chapter, $blacklist)):
					$content = file_get_contents($_SERVER["DOCUMENT_ROOT"] . DS . "content" . DS . $category . DS . $chapter . DS . "index.md");
					$contentSplit = preg_split("/---##---/", $content);
					$json = json_decode($contentSplit[0], true);

					echo "<article data-category=\"#". $json["category"] ."-". $json["chapter"] ."\">";
					echo "<div class=\"hidden\">". $json["title"] ."</div>";
					echo $Extra->text($contentSplit[1]);
					echo "</article>";
				endif;
			}
		endif;
	}

	echo "</main>";
	include "site/snippets/footer.php";
});

$app->run();
?>
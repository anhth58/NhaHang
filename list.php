<html>
	<title> Xin Cám Ơn </title>
	<head> </head>
	<body>
		<fieldset>
		<legend> Các món đã chọn </legend>
		<?php 
			$fo = fopen("list.txt", "a");
			if (!empty($_POST["name"])){
				fwrite($fo, "Khach Hang: ".$_POST["name"]."<br>");
			}
			if (!empty($_POST["ga"])){
				echo "Gà <br>";
				fwrite($fo, "Gà <br/>");
			}
			if (!empty($_POST["vit"])){
				echo "Vịt<br>";
				fwrite($fo, "Vịt <br>");
			}
			if (!empty($_POST["de"])){
				echo "Dê<br>";
				fwrite($fo, "Dê <br>");
			}
			if (!empty($_POST["coca"])){
				echo "Coca x ".$_POST["coca"]."<br>";
				fwrite($fo, "Coca x ".$_POST["coca"]."<br>");
			}
			if (!empty($_POST["pepsi"])){
				echo "Pepsi x ".$_POST["pepsi"]."<br>";
				fwrite($fo, "Pepsi x ".$_POST["pepsi"]."<br>");
			}
			if (!empty($_POST["sevenup"])){
				echo "Seven Up x ".$_POST["sevenup"]."<br>";
				fwrite($fo, "Seven Up x ".$_POST["sevenup"]."<br>");
			}
			fwrite($fo, "========<br>");
		?>
		</fieldset>
	</body>
</html>
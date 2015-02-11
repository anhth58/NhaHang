<html>
	<title> Trang Quản Lý </title>
	<head> </head>
	<body>
	<h3> Các món ăn đã được gọi </h3>

	<ul>
		<?php 
			$fi = fopen("list.txt", "r");
			$str = fgets($fi);
			echo $str;
		?>
	</ul>
	
	</body>
</html>
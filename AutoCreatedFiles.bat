MD %date:~-10%
cd %date:~-10%
MD css
MD js

cd js
1 > script.js 2>nul
cd..
cd css
1 > style.css 2>nul
cd..
@Echo Off
Set txtfile=index.html

(
Echo ^<!DOCTYPE html^>
Echo ^<html lang="en"^>
Echo ^<head^>
Echo ^<meta charset="UTF-8"^>
Echo ^<title^>Document^</title^>
Echo ^<link rel="stylesheet" href="css/style.css"^>
Echo ^</head^>
Echo ^<body^>
Echo ^<script src="js/script.js"^>^</script^>
Echo ^</body^>
Echo ^</html^>
)>"%txtfile%"



	
	
	


	
	




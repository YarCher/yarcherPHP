<html>
<head>
    <title>Калькулятор</title>

    <script type="text/javascript">
    var n1 parseFloat(window.prompt("Введіть перше значення"));
	var option (window.prompt("Введіть знак"));
	var n2 parseFloat(window.prompt("Введіть друге значення"));
	var res;
	 
	 switch (option) {
		 
		 case "+" :
		 res= n1 + n2;
		 break;
		 
		 case "-" :
		 res= n1 - n2;
		 break;
		 
		 case "/" :
		 res= n1 / n2;
		 break;
		 
		 case "*" :
		 res= n1 * n2;
	     break;
		 
	 default: 
	 res ="Невідома команда";
	 }
     document.write(res);
	 
    </script>
	

</head>
<body>
</body>
</html>

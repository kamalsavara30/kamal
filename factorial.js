<!DOCTYPE html>
<html>
<head>
    <title>Factorial Program</title>
</head>
<body>

    <h2>Factorial of a Number</h2>

    <script>
        let n = prompt("Enter a number:");
        n = Number(n);

        let factorial = 1;

        if (n < 0) {
            document.write("Factorial is not defined for negative numbers.");
        } 
        else {
            for (let i = 1; i <= n; i++) {
                factorial = factorial * i;
            }

            document.write("Number = " + n + "<br>");
            document.write("Factorial = " + factorial);
        }
    </script>

</body>
</html>

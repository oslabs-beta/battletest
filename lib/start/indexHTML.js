module.exports = (failedTests, succe) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Battletest</title>
    <link rel="stylesheet" href="./style.css" type="text/css">
</head>
<body>
    <h2>Failing Tests</h2>
    <table id="failed">
    ${}
    </table>
    <h2>Passed Tests</h2>
    ${}
    <table id="passed">
    </table>
</body>
<script src="./index.js"></script>
</html>`

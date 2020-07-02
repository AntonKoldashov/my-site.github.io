<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$name = urldecode($name);
$phone = urldecode($phone);
$name = trim($name);
$phone = trim($phone);

mail("koldashov-seo@yandex.ru", "Заявка на создание сайта", "Имя: ".$name."\r\nТелефон: ".$phone ,"From: admin@my-site.ru \r\n")
 ?>

<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Ваша заявка успешно отправлена</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <style>
        html, body {
            background-color: #fff;
            color: #636b6f;
            font-family: 'IBM Plex Sans', sans-serif;
            font-weight: 100;
            height: 100vh;
            margin: 0;
        }

        .full-height {
            height: 100vh;
        }

        .flex-center {
            align-items: center;
            display: flex;
            justify-content: center;
        }

        .position-ref {
            position: relative;
        }

        .content {
            text-align: center;
        }

        .title {
            font-size: 20px;
            padding: 20px;
        }
    </style>
</head>
<body>
<div class="flex-center position-ref full-height">
    <div class="content">
        <div class="title">
            <br><span style="font-size:33px;font-weight:500;">Спасибо!</span><br><br>
            Ваша заявка успешно отправлена.<br>

            <?php if(isset($_SERVER['HTTP_REFERER']) && $_SERVER['HTTP_REFERER']) { ?>
                <br><br><a href="<?php echo $_SERVER['HTTP_REFERER']; ?>" style="text-decoration: none; border-bottom: 1px dotted">Вернуться назад</a>
             <?php } ?>
        </div>
    </div>
</div>

</body>
</html>
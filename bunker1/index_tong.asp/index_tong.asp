<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/style/common.css" rel="stylesheet" type="text/css">
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">
    <link rel="manifest" href="/favicons/site.webmanifest">
    <title>벙커1교회</title>
</head>
<body>
    <section class="section_container">
        <article class="article_left">
            <h1>페이지를 이동합니다</h1>
        </article>
        <article class="article_right">
            <h1>이동하지 않을 경우 <span class="link_inline" onclick="goLink()">여기</span>를 누르세요</h1>
        </article>
    </section>
    <script>
        window.onload = function() {
            goLink();
        };

        var goLink = function() {
            window.location.href = "/index.html";
        }
    </script>
    <script type="text/javascript" src="/script/section.js"></script>
</body>
</html>



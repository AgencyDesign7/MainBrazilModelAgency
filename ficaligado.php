<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <title>Fica Ligado - Brazil Model Agency</title>
  <meta content="width=device-width, initial-scale=1" name="viewport" />
  <link href="./home/contents/img/webclip.png" rel="apple-touch-icon" />
  <link href="https://fonts.googleapis.com/css?family=Poiret+One&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
  <link href="./css/rootStyle.css" rel="stylesheet" type="text/css" />
  <link href="./css/responsiveStyle.css" rel="stylesheet" type="text/css" />
</head>

<body class="body" onload="onLoad()">
  <div class="div-loader">
    <img src="./media/loading/loader.gif" alt="" />
  </div>
  <div class="logo-image">
    <div class="section">
      <a href="http://www.brazilmodel.com.br"><img src="./media/logo/LogoMain.png" alt="" class="image-2" /></a>
    </div>
  </div>
  <div class="sub-category display-none-content category container-popup-mgs">
    <div class="container-imgs"></div>
  </div>

  <!--Nav Desktop -->
  <?php require('./resource/template/template.navbar.desktop.html')?>
  <!--Nav Mobile -->
  <?php require('./resource/template/template.navbar.mobile.html')?>


  <header id="hero" class="hero">
    <div class="title-ficaligado">
      <h2>FICA LIGADO</h2>
    </div>
    <div class="posts-container">
      <img src="./media/ficaligado/posts/post1.jpg" alt="">
      <img src="./media/ficaligado/posts/post2.jpg" alt="">
      <img src="./media/ficaligado/posts/post3.jpg" alt="">
    </div>
  </header>
  <div class="footerContainer">
  <?php require('./resource/template/template.footer.html')?>
  </div>
  <script src="./script.js"></script>

</body>

</html>
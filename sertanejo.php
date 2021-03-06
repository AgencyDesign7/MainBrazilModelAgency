<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <title>Home - Brazil Model Agency</title>
  <meta content="width=device-width, initial-scale=1" name="viewport" />
  <link href="./home/contents/img/webclip.png" rel="apple-touch-icon" />
  <link href="https://fonts.googleapis.com/css?family=Poiret+One&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
  <link href="./css/rootStyle.css" rel="stylesheet" type="text/css" />
  <link href="./css/responsiveStyle.css" rel="stylesheet" type="text/css" />
</head>

<body class="body" onload="onLoad()">
  <div class="player-musics display-none-content"></div>
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
    <div class="title-sertanejo">SERTANEJO</div>
    <div class="containerAllElements">
      <div class="containerArtists">
        <div class="overall-msg artist-1 display-none-content"></div>
        <div><img src="./media/artistas/sertanejo/fernandoFidel.jpg" alt=""></div>
        <div class="menus-artists">
          <ul>
            <li onclick="ArtistsMenus('artist-1','FernandoFidel-fotos')"><a href="#"> FOTOS</a></li>
            <li onclick="ArtistsMenus('artist-1','FernandoFidel-musicas')"><a href="#">MÚSICAS</a></li>
            <li onclick="ArtistsMenus('artist-1','FernandoFidel-videos')"><a href="#"> VIDEOS</a></li>
            <li><a href="https://www.facebook.com/F%C3%A3ClubOficial-Fernando-Fidel-106247277846495">FÃ CLUBE</a></li>
            <li onclick="ArtistsMenus('artist-1','FernandoFidel-release')"><a href="#"> RELEASE</a></li>
          </ul>
        </div>
      </div>
      <div class="containerArtists">
        <div class="overall-msg artist-2 display-none-content"></div>
        <div><img src="./media/artistas/sertanejo/viniciosRocha.jpg" alt=""></div>
        <div class="menus-artists">
          <ul>
            <li onclick="ArtistsMenus('artist-2','ViniciusRocha-fotos')"><a href="3">FOTOS</a></li>
            <li onclick="ArtistsMenus('artist-2','ViniciusRocha-musicas')"><a href="#">MÚSICAS</a></li>
            <li onclick="ArtistsMenus('artist-2','ViniciusRocha-videos')"><a href="#"> VIDEOS</a></li>
            <li><a href="https://www.facebook.com/F%C3%A3ClubeOficial-Vinic%C3%ADus-Rocha-113938027067305">FÃ CLUBE</a>
            </li>
            </li>
            <li onclick="ArtistsMenus('artist-2','ViniciusRocha-release')"><a href="#"> RELEASE</a></li>
          </ul>
        </div>
      </div>
      <div class="containerArtists">
        <div class="overall-msg artist-3 display-none-content"></div>
        <div><img src="./media/artistas/sertanejo/rogerioSoares.jpg" alt=""></div>
        <div class="menus-artists">
          <ul>
            <li onclick="ArtistsMenus('artist-3','RogerioSoares-fotos')"><a href="#"> FOTOS</a></li>
            <li onclick="ArtistsMenus('artist-3','RogerioSoares-musicas')"><a href="#">MÚSICAS</a></li>
            <li onclick="ArtistsMenus('artist-3','RogerioSoares-videos')"><a href="#">VIDEOS</a></li>
            <li><a href="https://www.facebook.com/F%C3%A3ClubeOficial-Rog%C3%A9rio-Soares-104163874719962">FÃ CLUBE</a>
            </li>
            <li onclick="ArtistsMenus('artist-3','RogerioSoares-release')"><a href="#"> RELEASE</a></li>
          </ul>
        </div>
      </div>
      <div class="cointainer-contrateArtist">
        <div class="footerArtists">
          <img src="./media/artistas/contrateArtista2.png" alt="">
        </div>
        <div class="divfooter-container">
          <div class="description">
            <div class="star-conteiner">
              <img id="star-brazilModel" src="./media/artistas/iconBrazilStar.png" alt="">
              <div class="div-contact-social">
                <p>CONTRATE: </p><a href="https://api.whatsapp.com/send?phone=5531994530485"><img
                    src="./media/IconSocial/IwatsappColor.png" alt=""></a>
              </div>
            </div>
            <div class="texts-contract">
              <div class="txt-contact">
                <p>Agilidade, segurança e <br>negociações exclusivas.</p>
              </div>
              <div class="txt2-contact">
                <p>Faça do seu evento um verdadeiro SHOW</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  </header>
  <div class="footerContainer">
    <?php require('./resource/template/template.footer.html')?>
  </div>

  <script src="./script.js"></script>
</body>

</html>
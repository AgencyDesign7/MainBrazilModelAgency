function onLoad() {
  loadPageProgress();
  navBarMobile();
  var pageName = location.pathname.split("/").pop();
  switch (pageName) {
    case "index.html":
      slideTitle();
      break;
    case "facaparte.html":
      HideOrShowCategoryModel();
      checkUploadFiles();
      break;
    case "shows.html":
      AudioControls();
      break;
    default:
      break;
  }
};

function navBarMobile() {
  var navButton = document.querySelector(".menu-button");
  var iconMenuClick = document.querySelector(".icon-2");
  var navMenu = document.querySelector(".nav-menu");
  var spanInset = document.querySelector(".w-nav-overlay");
  var navbarDiv = document.querySelector("[data-wf-ignore]");

  iconMenuClick.addEventListener("click", () => {
    if (navButton.classList[2] == "w--open") {
      navButton.classList.remove("w--open");
      /*navMenu.innerHTML = `<a href="./index.html" class="nav-link-2 w-nav-link">HOME</a><a
        href="./composite.html" class="nav-link-3 w-nav-link">COMPOSITE</a><a href="./book.html"
        class="nav-link-4 w-nav-link">BOOK</a><a href="./parceiros.html" class="nav-link-5 w-nav-link">PARCEIROS</a><a
        href="./contato.html" class="nav-link-6 w-nav-link">CONTATO</a>`*/
      spanInset.innerHTML = "";
      navbarDiv.classList.remove("an-nav-bf");
      iconMenuClick.classList.remove("w-menu-open-nav");
    } else {
      /*navMenu.innerHTML = '';*/
      spanInset.innerHTML = `
        <nav role="navigation" class="nav-menu w-nav-menu mob-nav" style="transform: translateY(0px) translateX(0px); transition: transform 400ms ease 0s;" data-nav-menu-open="">
        <a href="index.html" class="nav-link-2 w-nav-link w--nav-link-open menu-tops" style="">HOME</a>
        <a class="nav-link-3 w-nav-link w--nav-link-open menu-tops" style="" href="./sobrenos.html">SOBRE NÓS</a>
        <div class="style-sub-category about-us subs-category-ref">
        
          <p>
            Atuante no mercado da moda, a Brazil Model Agency é uma empresa na assessoria e descoberta de novos talentos, levando até você cursos de modelo, manequim e workshop de passarela com professores altamente capacitados.Preparando os aspirantes e modelos para convenções e seletivas a nível nacional e internacional.
             Preparando os modelos para o mercado de trabalho e para o mercado da moda. <br>Realizamos eventos corporativos, institucionais, particulares, espetáculos desportivos, produção de teatro, recepções, lançamentos de livros, workshop, desfiles, treinamentos, lançamentos de CD 's, inaugurações, feiras, shows, lançamentos de produtos, eventos gospel, danças, entre outros, de acordo com a necessidade de cada cliente.
            Para tanto, contamos com uma equipe especializada na área e um casting de fornecedores sempre prontos para atender com qualidade, agilidade e bom gosto, buscando acima de tudo superar as expectativas do nosso cliente.
          </p>
          <div class="sub-team">
            <div class="sub-team-link">
              <a  href="javascript:void(0)">EQUIPE BRAZIL MODEL</a></div>
          </div>
        </div>
        <a href="#" class="nav-link-4 w-nav-link w--nav-link-open menu-tops" style="" onClick = showOrHideContent("sub-category-model-mobile") >MODELOS<span class="icon-navbar-sub mobile-icon"></span></a>
        <div class="sub-category-model-mobile w-hidden style-sub-category">
          <a class="nav-link-5 w-nav-link w--nav-link-open" onClick="ShowSCategorysMainMobile('sub-baby')">BABY</a>
          <div class="style-sub-category sub-baby subs-category-ref">
              <div class="sub-baby">
                <div class="mobile-model-cat">
                  <li data-bg-black><p>CATEGORIAS</p></li>
                  <li onClick="ShowSCategorysMainMobile('sub-baby')"><span id="back-menu"></span><p>VOLTAR</p></li>
                  <li data-bg-black><p>BABY</p></li>
                </div>
                <div class="sub-imgs" onClick="PopupMsg('baby')">
                  <img src="./media/home/menu-category/BabyCategory.jpg" >
                </div>
                <div class="sub-texts">
                  <p>FEMININO</p>
                  <p>MASCULINO</p>
                  <p>TODOS</p>
                </div>
              </div>
          </div>
        <a class="nav-link-5 w-nav-link w--nav-link-open" onClick="ShowSCategorysMainMobile('sub-kids')" style="">KID'S</a>
        <div class="style-sub-category sub-kids subs-category-ref">
                        <div class="sub-kids">
                          <div class="mobile-model-cat">
                          <li data-bg-black><p>CATEGORIAS</p></li>
                          <li onClick="ShowSCategorysMainMobile('sub-kids')"><span id="back-menu"></span><p>VOLTAR</p></li>
                          <li data-bg-black><p>KIDS</p></li>
                         </div>
                        <div class="sub-imgs" onClick="PopupMsg('kids')">
                        <img src="./media/home/menu-category/KidsCategory.jpg" >
                        </div>
                        <div class="sub-texts">
                          <p>FEMININO</p>
                          <p>MASCULINO</p>
                          <p>TODOS</p>
                        </div>
                      </div>
                 </div>
        <a   class="nav-link-5 w-nav-link w--nav-link-open" onClick="ShowSCategorysMainMobile('sub-teens')" style="">PRÉ-TEEN</a>
        <div class="style-sub-category sub-teens subs-category-ref">
                      <div class="sub-teens">
                        <div class="mobile-model-cat">
                            <li data-bg-black><p>CATEGORIAS</p></li>
                            <li onClick="ShowSCategorysMainMobile('sub-teens')"><span id="back-menu"></span><p>VOLTAR</p></li>
                            <li data-bg-black><p>PRE-TEENS</p></li>
                        </div>
                        <div class="sub-imgs" onClick="PopupMsg('pre-teen')">
                          <img src="./media/home/menu-category/PreTeenCategory.jpg" >
                        </div>
                        <div class="sub-texts">
                          <p>FEMININO</p>
                          <p>MASCULINO</p>
                          <p>TODOS</p>
                        </div>
                      </div>
                 </div>
        <a   class="nav-link-5 w-nav-link w--nav-link-open" onClick="ShowSCategorysMainMobile('sub-moreage')" style="">MORE AGE</a>
        <div class="style-sub-category sub-moreage subs-category-ref">
                      <div class="sub-moreage">
                        <div class="mobile-model-cat">
                          <li data-bg-black><p>CATEGORIAS</p></li>
                          <li onClick="ShowSCategorysMainMobile('sub-moreage')"><span id="back-menu"></span><p>VOLTAR</p></li>
                          <li data-bg-black><p>MORE AGE</p></li>
                        </div>
                        <div class="sub-imgs" onClick="PopupMsg('moreage')">
                          <img src="./media/home/menu-category/MoreAgeCategory.jpg" >
                        </div>
                        <div class="sub-texts">
                          <p>FEMININO</p>
                          <p>MASCULINO</p>
                          <p>TODOS</p>
                        </div>
                      </div>
                 </div>
        <a   class="nav-link-5 w-nav-link w--nav-link-open" onClick="ShowSCategorysMainMobile('sub-plussize')" style="">PLUS SIZE</a>
        <div class="style-sub-category sub-plussize subs-category-ref">
                      <div class="sub-plussize">
                        <div class="mobile-model-cat">
                          <li data-bg-black><p>CATEGORIAS</p></li>
                          <li onClick="ShowSCategorysMainMobile('sub-plussize')"><span id="back-menu"></span><p>VOLTAR</p></li>
                          <li data-bg-black><p>PLUS SIZE</p></li>
                        </div>
                        <div class="sub-imgs" onClick="PopupMsg('plussize')">
                          <img src="./media/home/menu-category/PlusSizeCategory.jpg" >
                        </div>
                        <div class="sub-texts">
                          <p>FEMININO</p>
                          <p>MASCULINO</p>
                          <p>TODOS</p>
                        </div>
                      </div>
                 </div>
        <a   class="nav-link-5 w-nav-link w--nav-link-open" onClick="ShowSCategorysMainMobile('sub-comercial')" style="">COMMERCIAL</a>
        <div class="style-sub-category sub-comercial subs-category-ref">
                      <div class="sub-comercial">
                        <div class="mobile-model-cat">
                          <li data-bg-black><p>CATEGORIAS</p></li>
                          <li onClick="ShowSCategorysMainMobile('sub-comercial')"><span id="back-menu"></span><p>VOLTAR</p></li>
                          <li data-bg-black><p>COMMERCIAL</p></li>
                        </div>
                        <div class="sub-imgs" onClick="PopupMsg('comercial')">
                          <img src="./media/home/menu-category/CommercialsCategory.jpg" >
                        </div>
                        <div class="sub-texts">
                          <p>FEMININO</p>
                          <p>MASCULINO</p>
                          <p>TODOS</p>
                        </div>
                      </div>
                 </div>
        <a   class="nav-link-5 w-nav-link w--nav-link-open" onClick="ShowSCategorysMainMobile('sub-fashion')" style="">FASHION</a>
        <div class="style-sub-category sub-fashion subs-category-ref">
                      <div class="sub-fashion">
                        <div class="mobile-model-cat">
                          <li data-bg-black><p>CATEGORIAS</p></li>
                          <li onClick="ShowSCategorysMainMobile('sub-fashion')"><span id="back-menu"></span><p>VOLTAR</p></li>
                          <li data-bg-black><p>FASHION</p></li>
                        </div>
                        <div class="sub-imgs" onClick="PopupMsg('fashion')">
                          <img src="./media/home/menu-category/FashionCategory.jpg" >
                        </div>
                        <div class="sub-texts">
                          <p>FEMININO</p>
                          <p>MASCULINO</p>
                          <p>TODOS</p>
                        </div>
                      </div>
                 </div>
        <a   class="nav-link-5 w-nav-link w--nav-link-open" onClick="ShowSCategorysMainMobile('sub-fitness')" style="">FITNESS</a>
        <div class="style-sub-category sub-fitness subs-category-ref">
                      <div class="sub-fitness">
                        <div class="mobile-model-cat">
                          <li data-bg-black><p>CATEGORIAS</p></li>
                          <li onClick="ShowSCategorysMainMobile('sub-fitness')"><span id="back-menu"></span><p>VOLTAR</p></li>
                          <li data-bg-black><p>FITNESS</p></li>
                        </div>
                        <div class="sub-imgs" onClick="PopupMsg('fitness')">
                          <img src="./media/home/menu-category/FitnessCategory.jpg" >
                        </div>
                        <div class="sub-texts">
                          <p>FEMININO</p>
                          <p>MASCULINO</p>
                          <p>TODOS</p>
                        </div>
                      </div>
                 </div>
        <a   class="nav-link-5 w-nav-link w--nav-link-open" onClick="ShowSCategorysMainMobile('sub-androgynous')" style="">ANDROGENS</a>
        <div class="style-sub-category sub-androgynous subs-category-ref">
                      <div class="sub-androgynous">
                        <div class="mobile-model-cat">
                          <li data-bg-black><p>CATEGORIAS</p></li>
                          <li onClick="ShowSCategorysMainMobile('sub-androgynous')"><span id="back-menu"></span><p>VOLTAR</p></li>
                          <li data-bg-black><p>ANDROGENS</p></li>
                        </div>
                        <div class="sub-imgs" onClick="PopupMsg('androgeno')">
                          <img src="./media/home/menu-category/AndrogensCategory.jpg" >
                        </div>
                        <div class="sub-texts">
                          <p>FEMININO</p>
                          <p>MASCULINO</p>
                          <p>TODOS</p>
                        </div>
                      </div>
                 </div>
        <a   class="nav-link-5 w-nav-link w--nav-link-open" onClick="ShowSCategorysMainMobile('sub-urban')" style="">URBAN</a>
        <div class="style-sub-category sub-urban subs-category-ref">
                      <div class="sub-urban">
                        <div class="mobile-model-cat">
                          <li data-bg-black><p>CATEGORIAS</p></li>
                          <li onClick="ShowSCategorysMainMobile('sub-urban')"><span id="back-menu"></span><p>VOLTAR</p></li>
                          <li data-bg-black><p>URBAN</p></li>
                        </div>
                        <div class="sub-imgs" onClick="PopupMsg('urbano')">
                          <img src="./media/home/menu-category/UrbanCategory.jpg" >
                        </div>
                        <div class="sub-texts">
                          <p>FEMININO</p>
                          <p>MASCULINO</p>
                          <p>TODOS</p>
                        </div>
                      </div>
                 </div>
        </div>
        </a>
        <a   href="javascript:void(0)" class="nav-link-5 w-nav-link w--nav-link-open" style="" onclick="PopupMsg('cursos', 'cursos',1)">CURSOS</a>
        <div class="style-sub-category subs-category-ref">
          <a   class="nav-link-5 w-nav-link w--nav-link-open" style="">EM BREVE</a>
         </div>
        <a href="javascript:void(0)" class="nav-link-6 w-nav-link w--nav-link-open" style="" onclick="PopupMsg('revista', 'Revistas', 1)">REVISTA</a>
         <div class="style-sub-category subs-category-ref">
           <a   class="nav-link-5 w-nav-link w--nav-link-open" style="">EM BREVE</a>
        </div>
        <a href="javascript:void(0)" class="nav-link-6 w-nav-link w--nav-link-open" style="" onClick ="showOrHideContent('events-mobile-category')">EVENTOS<span class="icon-navbar-sub mobile-icon"></a>
          <div class="style-sub-category subs-category-ref events-mobile-category">
            <a   class="nav-link-5 w-nav-link w--nav-link-open" style="" onclick="PopupMsg('shows', 'shows',1)">SHOWS</a>
            <a   class="nav-link-5 w-nav-link w--nav-link-open" style="" onclick="PopupMsg('desfiles', 'desfiles',1)">DESFILES</a>
            <a   class="nav-link-5 w-nav-link w--nav-link-open" style=""onclick="PopupMsg('concursos', 'concursos',1)">CONCURSOS</a>
            <a   class="nav-link-5 w-nav-link w--nav-link-open" style="" onclick="PopupMsg('lives', 'lives',1)">LIVES</a>
          </div>
        <a href="javascript:void(0)" class="nav-link-6 w-nav-link w--nav-link-open" style="" onClick="ShowOrHideSubMenus('artists-mobile-category')" >ARTISTAS</a>
        <div class="style-sub-category subs-category-ref artists-mobile-category">
                <div class="mobile-model-cat">
                          <li data-bg-black><p>HOME</p></li>
                          <li onClick="ShowOrHideSubMenus('artists-mobile-category', 1)"><span id="back-menu"></span><p>VOLTAR</p></li>
                          <li data-bg-black><p>ARTISTAS</p></li>
                </div>
                <a   class="nav-link-5 w-nav-link w--nav-link-open" style="" onclick="PopupMsg('noneArtistas', 'noneArtistas',1)">ATORES</a>
                <a   class="nav-link-5 w-nav-link w--nav-link-open" style="" onclick="PopupMsg('noneArtistas', 'noneArtistas',1)">BANDAS</a>
                <a   class="nav-link-5 w-nav-link w--nav-link-open" style="" onClick="showOrHideContent('setanejo-categoria')">CANTORES</a>
                  <div class="style-sub-category subs-category-ref artists-mobile-category setanejo-categoria">
                    <a   class="nav-link-5 w-nav-link w--nav-link-open" href="sertanejo.html"  style="background-color: black; color: white !important;">SERTANEJO</a>
                  </div>
                <a   class="nav-link-5 w-nav-link w--nav-link-open" style="" onclick="PopupMsg('noneArtistas', 'noneArtistas',1)">COVERS</a>
                <a   class="nav-link-5 w-nav-link w--nav-link-open" style="" onclick="PopupMsg('noneArtistas', 'noneArtistas',1)">DANÇARINOS</a>
                <a   class="nav-link-5 w-nav-link w--nav-link-open" style="" onclick="PopupMsg('noneArtistas', 'noneArtistas',1)">DIGITAL INFLUENCERS</a>
                <a   class="nav-link-5 w-nav-link w--nav-link-open" style="" onclick="PopupMsg('noneArtistas', 'noneArtistas',1)">DJS</a>
                <a   class="nav-link-5 w-nav-link w--nav-link-open" style="" onclick="PopupMsg('noneArtistas', 'noneArtistas',1)">LOCUTORES</a>
                <a   class="nav-link-5 w-nav-link w--nav-link-open" style="" onclick="PopupMsg('noneArtistas', 'noneArtistas',1)">MUSICOS</a>
                <a   class="nav-link-5 w-nav-link w--nav-link-open" style="" onclick="PopupMsg('noneArtistas', 'noneArtistas',1)">SOSIAS</a>
                <a   class="nav-link-5 w-nav-link w--nav-link-open" style="" onclick="PopupMsg('noneArtistas', 'noneArtistas',1)">STAND UP</a>
                </div>
                
        <a href="#" class="nav-link-2 w-nav-link w--nav-link-open" style="">PARCEIROS</a>
        <a href="#" class="nav-link-2 w-nav-link w--nav-link-open" style="">FAÇA PARTE</a>
        <a href="#" class="nav-link-2 w-nav-link w--nav-link-open" style="">CONTATOS</a>
        </nav>
    </div>`;
      navButton.classList.add("w--open");
      navbarDiv.classList.add("an-nav-bf");
      iconMenuClick.classList.add("w-menu-open-nav");
    }
  });


  var navMenuLink = document.querySelectorAll(".w-nav-menu a");

  navMenuLink.forEach((element) => {
    element.addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor = "white";
      event.target.style.color = "black";
    });
    element.addEventListener("mouseout", (event) => {
      event.target.style.backgroundColor = "";
      event.target.style.color = "white";
    });
  });
}

function AudioControls() {
  var audio1 = document.querySelector(".audio1");
  var audio2 = document.querySelector(".audio2");
  var image1 = document.querySelector(".show1");
  var image2 = document.querySelector(".show2");
  var iconAudioControl1 = document.querySelector(".iconplay1");
  var iconAudioControl2 = document.querySelector(".iconplay2");
  var isplay1 = false;
  var isplay2 = false;

  audio1.src = "./media/shows/show1audio.mpeg";
  audio2.src = "./media/shows/show2audio.mpeg";

  function playAudio1() {
    audio1.play();
    iconAudioControl1.src = "./media/shows/pauseIcon.png";
    isplay1 = true;
  }

  function pauseAudio1() {
    audio1.pause();
    isplay1 = false;
    iconAudioControl1.src = "./media/shows/playIcon.png";
  }

  function playAudio2() {
    audio2.play();
    iconAudioControl2.src = "./media/shows/pauseIcon.png";
    isplay2 = true;
  }

  function pauseAudio2() {
    audio2.pause();
    isplay2 = false;
    iconAudioControl2.src = "./media/shows/playIcon.png";
  }

  iconAudioControl1.addEventListener("click", () => {
    if (!isplay1) {
      playAudio1();
      pauseAudio2();
    } else {
      pauseAudio1();
    }
  });

  iconAudioControl2.addEventListener("click", () => {
    if (!isplay2) {
      playAudio2();
      pauseAudio1();
    } else {
      pauseAudio2();
    }
  });
}

function slideTitle() {
  var index = 0;
  var index2 = 1;
  var index3 = 2;
  nextSlide();
  nextSlide2();
  nextSlide3();

  function nextSlide() {
    var divImgs = document.querySelectorAll(".w-slide");
    var images = document.querySelectorAll(".w-slide img");
    var loader = document.querySelector(".loader");
    divImgs.forEach((element) => (element.style.display = "none"));
    index++;
    if (index > divImgs.length) {
      index = 1;
    }
    if (images[index - 1].naturalHeight < 0) {
      divImgs[index - 1].style.visibility = "none";
      loader.style.display = "none";
    } else {
      divImgs[index - 1].style.display = "block";
      loader.style.display = "none";
    }
    setTimeout(nextSlide, 7000);
  }
  function nextSlide2() {
    var divImgs = document.querySelectorAll(".w-slide-2");
    var images = document.querySelectorAll(".w-slide img");
    var loader = document.querySelector(".loader");
    divImgs.forEach((element) => (element.style.display = "none"));
    index2++;
    if (index2 > divImgs.length) {
      index2 = 1;
    }
    if (images[index2 - 1].naturalHeight < 0) {
      divImgs[index2 - 1].style.visibility = "none";
      loader.style.display = "none";
    } else {
      divImgs[index2 - 1].style.display = "block";
      loader.style.display = "none";
    }
    setTimeout(nextSlide2, 7000);
  }
  function nextSlide3() {
    var divImgs = document.querySelectorAll(".w-slide-3");
    var images = document.querySelectorAll(".w-slide img");
    var loader = document.querySelector(".loader");
    divImgs.forEach((element) => (element.style.display = "none"));
    index3++;
    if (index3 > divImgs.length) {
      index3 = 1;
    }
    if (images[index3 - 1].naturalHeight < 0) {
      divImgs[index3 - 1].style.visibility = "none";
      loader.style.display = "none";
    } else {
      divImgs[index3 - 1].style.display = "block";
      loader.style.display = "none";
    }
    setTimeout(nextSlide3, 7000);
  }
}

function showCategoryModelsDesktop(selectedCategory, counterVal) {
  var counter = 1;
  counter = counterVal;
  var HtmlCategoryModelsFirstSection = `
                              <div>
                                <li id="main-title-li">CATEGORIAS</li>
                                <li data-link-on onclick="showSubs('Baby')">
                                 <a href="javascript:void(0)">BABY</a>
                                </li>
                                <li data-link-on onclick="showSubs('Kids')">
                                 <a data-link-on href="javascript:void(0)">KIDS</a>
                                </li>
                                <li data-link-on onclick="showSubs('PreTeens')">
                                 <a href="javascript:void(0)">PRÉ-TEENS</a>
                                </li>
                                <li data-link-on onclick="showSubs('Commercials')">
                                 <a href="javascript:void(0)">COMMERCIALS</a>
                                </li>
                                <li data-link-on onclick="showSubs('PlusSize')">
                                 <a href="javascript:void(0)">PLUS SIZE</a>
                                </li>
                                <li data-link-on onclick="showSubs('MoreAge')">
                                 <a href="javascript:void(0)">MORE AGE</a>
                                </li>
                                <li data-link-on onclick="showSubs('Fashion')">
                                 <a href="javascript:void(0)">FASHION</a>
                                </li>
                                <li data-link-on onclick="showSubs('Fitness')">
                                 <a href="javascript:void(0)">FITNESS</a>
                                </li>
                                <li data-link-on onclick="showSubs('Urban')">
                                 <a href="javascript:void(0)">URBAN</a>
                                </li>
                                <li data-link-on onclick="showSubs('Androgens')">
                                 <a href="javascript:void(0)">ANDROGENS</a>
                                </li>
                              </div>  
  
  `;

  var subCategoryModels = document.querySelector(`.${selectedCategory}`);
  var ModelBtn = document.querySelector(".model-button");
  var spanModelbtn = document.querySelector(".model-button span");
  subCategoryModels.innerHTML = HtmlCategoryModelsFirstSection;
  if (
    subCategoryModels.classList.contains("showContentBlock") &&
    counter == !0
  ) {
    subCategoryModels.classList.remove("showContentBlock");

    ModelBtn.classList.remove("activeBtn");
    spanModelbtn.classList.remove("activeIconArrow");

    subCategoryModels.innerHTML = "";
  } else {
    subCategoryModels.classList.add("showContentBlock");
    ModelBtn.classList.add("activeBtn");
    spanModelbtn.classList.add("activeIconArrow");
    subCategoryModels.innerHTML = HtmlCategoryModelsFirstSection;

    counterVal = 1;
  }
}

function showOrHideContent(selectedCategory) {
  var subCategoryModels = document.querySelector(`.${selectedCategory}`);
  subCategoryModels.classList.contains("showContentBlock")
    ? subCategoryModels.classList.remove("showContentBlock")
    : subCategoryModels.classList.add("showContentBlock");
}

function showSubs(categorySelected) {
  var refSpanContainer = document.querySelector(".subnav-menu-model");
  var CategoryObjects = {
    Category: {
      Baby: {
        title: "BABY",
        imgSrc: "./media/home/menu-category/BabyCategory.jpg",
        Mlink: "",
        FLink: "",
        AllLink: "",
      },
      Kids: {
        title: "KIDS",
        imgSrc: "./media/home/menu-category/KidsCategory.jpg",
        Mlink: "",
        FLink: "",
        AllLink: "",
      },
      PreTeens: {
        title: "PRE-TEENS",
        imgSrc: "./media/home/menu-category/PreTeenCategory.jpg",
        Mlink: "",
        FLink: "",
        AllLink: "",
      },
      Commercials: {
        title: "COMMERCIALS",
        imgSrc: "./media/home/menu-category/CommercialsCategory.jpg",
        Mlink: "",
        FLink: "",
        AllLink: "",
      },
      PlusSize: {
        title: "PLUS SIZE",
        imgSrc: "./media/home/menu-category/PlusSizeCategory.jpg",
        Mlink: "",
        FLink: "",
        AllLink: "",
      },
      MoreAge: {
        title: "MORE AGE",
        imgSrc: "./media/home/menu-category/MoreAgeCategory.jpg",
        Mlink: "",
        FLink: "",
        AllLink: "",
      },
      Fashion: {
        title: "FASHION",
        imgSrc: "./media/home/menu-category/FashionCategory.jpg",
        Mlink: "",
        FLink: "",
        AllLink: "",
      },
      Fitness: {
        title: "FITNESS",
        imgSrc: "./media/home/menu-category/FitnessCategory.jpg",
        Mlink: "",
        FLink: "",
        AllLink: "",
      },
      Urban: {
        title: "URBAN",
        imgSrc: "./media/home/menu-category/UrbanCategory.jpg",
        Mlink: "",
        FLink: "",
        AllLink: "",
      },
      Androgens: {
        title: "ANDROGENS",
        imgSrc: "./media/home/menu-category/AndrogensCategory.jpg",
        Mlink: "",
        FLink: "",
        AllLink: "",
      },
    },
  };

  var HtmlBabyCategory = `
                    <div class="model-cat-sub">
                      <li class="title-category">CATEGORIAS</li>
                      <li data-link-on onclick="showCategoryModelsDesktop('subnav-menu-model',0)" class="back-li"><span id="back-menu"></span><a href="javascript:void(0)">VOLTAR</a></li>
                      <li id="title-sub">${CategoryObjects["Category"][categorySelected]["title"]}</li>
                      <li><img src="${CategoryObjects["Category"][categorySelected]["imgSrc"]}"></li>
                      <div class="options-models">
                      <li><a href="${CategoryObjects["Category"][categorySelected]["Flink"]}">FEMININO</a></li>
                      <li><a href="${CategoryObjects["Category"][categorySelected]["Mlink"]}">MASCULINO</a></li>
                      <li><a href="${CategoryObjects["Category"][categorySelected]["Alllink"]}">TODOS</a></li>
                      </div>
                    </div>
  `;
  refSpanContainer.innerHTML = HtmlBabyCategory;


}

function ShowSCategorysMainMobile(category) {
  var subCategorys = document.querySelectorAll(".subs-category-ref");
  var allLinks = document.querySelectorAll("nav a");
  subCategorys.forEach((element) => {
    element.classList[1] === category
      ? element.classList.toggle("showContentBlock")
      : null;
  });

  allLinks.forEach((element) => {
    if (element.classList.contains("display-none-conent")) {
      element.classList.remove("display-none-conent");
    } else {
      element.classList.add("display-none-conent");
      window.scrollTo(0, 0);
    }
  });
}

/*
function searchAndShowSlide() {

  var divimg2 = document.querySelectorAll('.w-slide img');
  var spanSlide = document.querySelector('.slideshow');
  divimg2.forEach(elements => {
    setInterval(() => {
      if (elements.naturalHeight == 0) {
        var loader = document.querySelector('.loader').style.display = "block";
        elements.innerHTML = "";
      }
      else {
        console.log('hello')
      }
    }, 500)

  })
}*/

function PopupMsg(title, cat, closeMenuMobile = 0) {
  var navButtonMenuMobile = document.querySelector(".menu-button");
  var popupCategory = document.querySelector(".sub-category");
  var containerImgs = document.querySelector(".container-imgs");
  var actualCategory = cat;

  var navButton = document.querySelector(".menu-button");
  var iconMenuClick = document.querySelector(".icon-2");
  var navMenu = document.querySelector(".nav-menu");
  var spanInset = document.querySelector(".w-nav-overlay");
  var navbarDiv = document.querySelector("[data-wf-ignore]");

  if (closeMenuMobile === 1) {
    navButton.classList.remove("w--open");
    /*navMenu.innerHTML = `<a href="./index.html" class="nav-link-2 w-nav-link">HOME</a><a
        href="./composite.html" class="nav-link-3 w-nav-link">COMPOSITE</a><a href="./book.html"
        class="nav-link-4 w-nav-link">BOOK</a><a href="./parceiros.html" class="nav-link-5 w-nav-link">PARCEIROS</a><a
        href="./contato.html" class="nav-link-6 w-nav-link">CONTATO</a>`*/
    spanInset.innerHTML = "";
    navbarDiv.classList.remove("an-nav-bf");
    iconMenuClick.classList.remove("w-menu-open-nav");
  }

  if (false) {
    //popupCategory.classList.remove("popup-models-category");
    popupCategory.classList.add("display-none-conent");
  } else {
    popupCategory.classList.remove("container-popup-mgs");
    popupCategory.classList.add("popup-models-category");
    popupCategory.classList.replace("category", actualCategory);
    popupCategory.classList.remove("display-none-conent");
    setTimeout(() => {
      popupCategory.classList.add("container-popup-mgs");
    }, 200)

  }
  if (title === "revista") {
    popupCategory.style.backgroundColor = "black";
  }

  switch (title) {
    case "cursos":
      popupCategory.style.backgroundColor = "white";

      containerImgs.innerHTML = `
                      <div class="imgs-cursos ${title}">
                          <a  href="javascript:void(0)" onclick="PopupMsg('curso-passarela','curso-passarela',1)"><img src="./media/home/menu-cursos/cursoPassarela.png" ></a>
                          <a  href="javascript:void(0)" onclick="PopupMsg('curso-modeloFotografica','curso-modeloFotografica',1)"><img src="./media/home/menu-cursos/cursoFotografiaModa.png" ></a>
                          <a  href="javascript:void(0)" onclick="PopupMsg('curso-teatro','curso-teatro',1)"><img src="./media/home/menu-cursos/cursoTeatro.png" ></a>
                          <a  href="javascript:void(0)" onclick="PopupMsg('curso-maquiagem','curso-maquiagem',1)"><img src="./media/home/menu-cursos/cursoMaquiagem.png" ></a>
                      </div>
      `;
      window.scrollTo(0, 0);
      break;
    case "revista":
      popupCategory.style.backgroundColor = "black";
      containerImgs.innerHTML = `
                      <div class="imgs-cursos ${title}">
                      <a  href="javascript:void(0)"><img src="./media/home/menu-revista/revista-fixa.png"></a>
                      </div>
      `;
      window.scrollTo(0, 0);
      break;
    case "noneArtistas":
      popupCategory.style.backgroundColor = "black";
      containerImgs.innerHTML = `
                      <div class="imgs-cursos ${title}">
                          <a  href="javascript:void(0)"><img src="./media/artistas/noneArtist.jpg"></a>
                      </div>
      `;
      window.scrollTo(0, 0);
      break;
    case "shows":
      popupCategory.style.backgroundColor = "black";
      containerImgs.innerHTML = `
                      <div class="imgs-cursos ${title}">
                          <a  href="javascript:void(0)"><img src="./media/eventos-menu/Covid19shows.jpg"></a>
                      </div>
      `;
      window.scrollTo(0, 0);
      break;
    case "desfiles":
      popupCategory.style.backgroundColor = "black";
      containerImgs.innerHTML = `
                      <div class="imgs-cursos ${title}">
                          <a  href="javascript:void(0)"><img src="./media/eventos-menu/Covid19desfiles.jpg"></a>
                      </div>
      `;
      window.scrollTo(0, 0);
      break;
    case "concursos":
      popupCategory.style.backgroundColor = "black";
      containerImgs.innerHTML = `
                      <div class="imgs-cursos ${title}">
                          <a  href="javascript:void(0)"><img src="./media/eventos-menu/Covid19concursos.jpg"></a>
                      </div>
      `;
      window.scrollTo(0, 0);
      break;
    case "lives":
      popupCategory.style.backgroundColor = "black";
      containerImgs.innerHTML = `
                      
      `;
      window.scrollTo(0, 0);
      break;
    case "curso-passarela":
      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `<div class="container-course-description">
                                  <div class="image-course-container"><img src="./media/home/menu-cursos/imgs-cursos/curso-modeloManequim.png"></div>
                                  <div class="description-course"><p>O Curso é totalmente On-line. Para obter seu Certificado, você deverá tirar nota 6,0 na avaliação e completar a carga horária.
                                  Para a confecção e envio postal do certificado existe apenas uma taxa de R$ 79.90, que será enviado por e-mail e através dos Correios.
                                  A Solicitação do Certificado é opcional e não impedirá você de estudar gratuitamente. </p></div> 
                                  <div class="btn-aplly"><span class="apllyIcon"></span><p>CLIQUE AQUI PARA MATRICULAR AGORA</p></div>
                                  <span class="countdown">countdown</span> 
                                </div>
                      
      `;
      window.scrollTo(0, 0);
      break;
    case "curso-modeloFotografica":
      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `<div class="container-course-description">
                                  <div class="image-course-container"><img src="./media/home/menu-cursos/imgs-cursos/curso-modeloFotografica.png"></div>
                                  <div class="description-course"><p>O Curso é totalmente On-line. Para obter seu Certificado, você deverá tirar nota 6,0 na avaliação e completar a carga horária.
                                  Para a confecção e envio postal do certificado existe apenas uma taxa de R$ 79.90, que será enviado por e-mail e através dos Correios.
                                  A Solicitação do Certificado é opcional e não impedirá você de estudar gratuitamente.</p></div> 
                                  <div class="btn-aplly"><span class="apllyIcon"></span><p>CLIQUE AQUI PARA MATRICULAR AGORA</p></div>
                                  <span class="countdown">countdown</span> 
                                </div>
                      
      `;
      window.scrollTo(0, 0);
      break;
    case "curso-maquiagem":
      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `<div class="container-course-description">
                                  <div class="image-course-container"><img src="./media/home/menu-cursos/imgs-cursos/curso-maquiagem.png"></div>
                                  <div class="description-course"><p>O Curso é totalmente On-line. Para obter seu Certificado, você deverá tirar nota 6,0 na avaliação e completar a carga horária.
                                  Para a confecção e envio postal do certificado existe apenas uma taxa de R$ 39.90, que será enviado por e-mail e através dos Correios.
                                  A Solicitação do Certificado é opcional e não impedirá você de estudar gratuitamente.</p></div> 
                                  <div class="btn-aplly"><span class="apllyIcon"></span><p>CLIQUE AQUI PARA MATRICULAR AGORA</p></div>
                                  <span class="countdown">countdown</span> 
                                </div>
                      
      `;
      window.scrollTo(0, 0);
      break;
    case "curso-teatro":
      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `<div class="container-course-description">
                                  <div class="image-course-container"><img src="./media/home/menu-cursos/imgs-cursos/curso-teatro.png"></div>
                                  <div class="description-course"><p>O Curso é totalmente On-line. Para obter seu Certificado, você deverá tirar nota 6,0 na avaliação e completar a carga horária.
                                  Para a confecção e envio postal do certificado existe apenas uma taxa de R$ 79.90, que será enviado por e-mail e através dos Correios.
                                  A Solicitação do Certificado é opcional e não impedirá você de estudar gratuitamente.</p></div> 
                                  <div class="btn-aplly"><span class="apllyIcon"></span><p>CLIQUE AQUI PARA MATRICULAR AGORA</p></div>
                                  <span class="countdown">countdown</span> 
                                </div>
                      
      `;
      window.scrollTo(0, 0);
      break;
    default:
      break;
  }
}

function closeWindow() {
  var popupCategory = document.querySelector(".sub-category");
  popupCategory.classList.remove("popup-models-category");
  popupCategory.classList.add("display-none-conent");
}

function SelectedContact() {
  var selectRefContact = document.querySelector(".img-estado-selecionado");
  selectRefContact.innerHTML = `<div class="container-contacts-1">
                                      <div class="img-continer">
                                      <a href="https://api.whatsapp.com/send?phone=5531994530485"><img src="./media/facaparte/socialMedia.png"></a>
                                      </div>
                                      <div class="text-container">
                                      <p></p>
                                      </div>
                                </div>`;
}

function loadPageProgress() {
  var loadDiv = document.querySelector(".div-loader");
  loadDiv.classList.add("hidden-loader");
}

function HideOrShowCategoryModel() {
  var divCategory = document.querySelector(".model-category-select");
  var valueSelected = document.querySelector(".talent-select");
  valueSelected.addEventListener("change", (event) => {
    if (valueSelected.value === "modelo") {
      divCategory.style.display = "block";
    } else {
      divCategory.style.display = "none";
    }
  });
}

function checkUploadFiles() {
  var referenceField = document.querySelectorAll(".inpt");
  var buttonSub = document.querySelector(".w-button");
  var isUplodead = 0;
  var talentSelect = document.querySelector(".talent-select");
  buttonSub.addEventListener("click", (event) => {
    if (talentSelect.value === "modelo") {
      referenceField.forEach((input) => {
        if (input.value != "") isUplodead += 1;
      });
      if (isUplodead < 5) {
        event.preventDefault();
        alert("Favor selecionar as fotos para enviar...");
      }
      isUplodead = 0;
    }
  });
}

function checkLenghtMax(id, lenghtFieldMax, referenceField, errMessage1) {
  var Entervalue = referenceField.value;

  var spanError = document.createElement("p");
  var erroNode1 = document.createTextNode(errMessage1);
  spanError.appendChild(erroNode1);
  spanError.className = "errorMessage";
  spanError.classList.add(id);
  var errorMessageShow = document.querySelectorAll(".errorMessage");

  if (Entervalue.length > lenghtFieldMax) {
    referenceField.style.backgroundColor = "#ff9999";
    if (!errorMessageShow != "undefined") {
      spanError.appendChild(erroNode1);
      referenceField.parentNode.insertBefore(spanError, referenceField);

      var checkMessagesDuplicate = document.querySelectorAll("." + id);
      if (checkMessagesDuplicate.length > 1) {
        checkMessagesDuplicate[1].remove();
      }
    }
  } else {
    referenceField.style.backgroundColor = "white";
    if (!errorMessageShow != "undefined") {
      errorMessageShow.forEach((indexof) => {
        indexof.classList[1] === id
          ? indexof.remove()
          : console.log(indexof.classList[1]);
      });
    }
  }
}

function checkLenghtMin(id, lenghtFieldMin, referenceField, errMessage1) {
  var Entervalue = referenceField.value;

  var spanError = document.createElement("p");
  var erroNode1 = document.createTextNode(errMessage1);
  spanError.appendChild(erroNode1);
  spanError.className = "errorMessage";
  spanError.classList.add(id);
  var errorMessageShow = document.querySelectorAll(".errorMessage");

  if (Entervalue.length < lenghtFieldMin) {
    //referenceField.style.backgroundColor = "#ff9999";
    if (!errorMessageShow != "undefined") {
      spanError.appendChild(erroNode1);
      referenceField.parentNode.insertBefore(spanError, referenceField);
      var checkMessagesDuplicate = document.querySelectorAll("." + id);
      if (checkMessagesDuplicate.length > 1) {
        checkMessagesDuplicate[1].remove();
      }
    }
  } else {
    //referenceField.style.backgroundColor = "white"
    if (!errorMessageShow != "undefined") {
      errorMessageShow.forEach((indexof) => {
        indexof.classList[1] === id
          ? indexof.remove()
          : console.log(indexof.classList[1]);
      });
    }
  }
}

(function loadHideImg() {
  document.head.insertAdjacentHTML(
    "afterend",
    `<div style="display: none;">
  <dt><img id="ifacebook" src="./media/IconSocial/IfacebookColor.png" alt=""></a>
  <dt><img id="iinstagram" src="./media/IconSocial/IinstagramColor.png" alt=""></dt>
  <dt><img id="iwatsapp" src=" ./media/IconSocial/IwatsappColor.png" alt=""></dt>
</div>`
  );
});

!(function buttonMenuEA() {
  var artistDoc = document.querySelector(".artist-btn");
  var spanIconArtist = document.querySelector(".artist-btn > span");
  var divArtista = document.querySelector(".subnav-artista");

  var cantoresBtn = document.querySelector(".contores-btn");
  var divCantores = document.querySelector(".sub-cantores-1");
  var mainLi = document.querySelectorAll(".MainMenu-1");
  var btnVoltarArtistas = document.querySelector(".voltar-artistas");

  var eventsDoc = document.querySelector(".events-btn");
  var divEvento = document.querySelector(".subnav-evento");
  var spanEvent = document.querySelector(".events-btn > span");

  var subdivCantores = document.querySelector(".sub-cantores-1");
  divCantores.style.animation = "opacity 1s";

  artistDoc.addEventListener("click", (event) => {
    if (divArtista.classList.contains("display-none-conent")) {
      divArtista.classList.remove("display-none-conent");
      spanIconArtist.classList.add("activeIconArrow");
      artistDoc.classList.add("activeBtn");
    } else {
      artistDoc.classList.remove("activeBtn");
      divArtista.classList.add("display-none-conent");
      spanIconArtist.classList.remove("activeIconArrow");
    }
  });

  btnVoltarArtistas.addEventListener("click", (event) => {
    mainLi.forEach((li) => {
      li.classList.remove("display-none-conent");
    });
    divCantores.classList.add("display-none-conent");
  });

  cantoresBtn.addEventListener("click", (event) => {
    if (divCantores.classList.contains("display-none-conent")) {
      divCantores.classList.remove("display-none-conent");
      mainLi.forEach((li) => {
        li.classList.add("display-none-conent");
      });
    }
  });

  eventsDoc.addEventListener("click", (event) => {
    if (divEvento.classList.contains("display-none-conent")) {
      divEvento.classList.remove("display-none-conent");
      spanEvent.classList.add("activeIconArrow");
      eventsDoc.classList.add("activeBtn");
    } else {
      divEvento.classList.add("display-none-conent");
      spanEvent.classList.remove("activeIconArrow");
      eventsDoc.classList.remove("activeBtn");
    }
  });
})();

function ShowOrHideSubMenus(classSelected, BackButton = 0) {
  var arrayChildsNav = document.querySelectorAll('nav > a');
  var ShowDiv = document.querySelector(`.${classSelected}`)
  var ElementshowDiv = document.querySelectorAll(`.${classSelected} > a`)

  if (BackButton === 0) {
    arrayChildsNav.forEach(element => {
      element.classList.add('noneForce');
    })
    ElementshowDiv.forEach(element => {
      element.classList.remove('noneForce');
      ShowDiv.style.display = "block";
    })
  } else {
    arrayChildsNav.forEach(element => {
      element.classList.remove('noneForce');
    })
    ElementshowDiv.forEach(element => {
      element.classList.add('noneForce');
      ShowDiv.style.display = "none";
    })
  }



}


function ArtistsMenus(classSelected, nameArtist) {
  var divSelectd = document.querySelector(`.${classSelected}`)
  if (!divSelectd.classList.contains('display-none-conent')) {
    divSelectd.classList.add('display-none-conent')
  } else {
    switch (nameArtist) {
      case "Vinicius Rocha":
        divSelectd.classList.remove('display-none-conent')
        divSelectd.innerHTML = `<div class="title-bibliografia"><p>${nameArtist}</p></div>
    <div><p>Vinicius Cardoso Rocha Borges, nome artistico Vinicius Rocha,nascido em Divinopolis no ano de 1993, despertou o interesse pela musica aos 12 anos quando 
    aprendeu a tocar a primeira musica no violao de seu irmão. Descendente de bisavó pianista, avó regente de orquestra e tia violoncelista na orquestra sinfônica da PM de Belo horizonte, teve de onde herdar o interesse pela musica.
    Em 2005 Vinicius Rocha juntamente com seus amigos decidem criar uma banda de estilo alternativo denominada 360. A 360 teve varias formações até que foi decidido que Vinicius Rocha seria o vocalista. A partir deste momento o cantor despertou ainda mais o interesse pela musica. Algum tempo depois Vinicius e Breno Carvalho decidem sair da banda 360 e criam uma nova banda, Diaax, onde conseguiram durante dois anos seguidos fazer apresentação no Festival de inverno de Itapecerica-MG.
    Algum tempo depois a rotina de vida dos integrantes foram aumentando e não tinham tempo para dedicar a banda. Então em 2013 Vinicius Rocha decide ingressar uma carreira solo na musica sertaneja, estilo que sempre pertenceu ao gosto musical desde pequeno.
    Vinicius então lança sua carreira solo como Vinicius Rocha na 43° Divinaexpo no palco novos talentos,ganhando até o seu primeiro Fã Clube.
    Então lança sua primeira musica de trabalho "Te Querer Tanto Assim" que em menos de uma semana teve mais de mil visualizações no youtube.</p></div>
    <div class="backbtn-artist" onClick="ArtistsMenus('artist-2')"><p>VOLTAR</p></div>
    `
        break;
    }

  }


}

!function contDown() {

  var contDownDate = new Date("August 10, 2020 00:00:00").getTime();
  var x = setInterval(() => {
    var divCountdown = document.querySelector('.container-course-description > span')
    var now = new Date().getTime();

    var distance = contDownDate - now;

    // time calculation for days, hors, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    console.log(divCountdown)
    if (divCountdown) {
      divCountdown.innerHTML = `<div class="container-contdown">
                                    <div class="container-with-sub day-container">
                                      <div class="container-data">
                                        <p id="date-white">${days}</p>
                                      </div>
                                      <div id="sub-describe">
                                        <p>Dias</p>
                                        </div>
                                    </div>
                                    
                                    <div class="container-with-sub">
                                      <div class="container-dot">
                                      <div class="container-data">
                                        <p id="date-white">${hours}</p>
    
                                      </div>
                                      <div class="dotsIcon"></div>
                                      </div>
                                      <div id="sub-describe">
                                        <p>Horas</p>
                                      </div>
                                    </div>
                                    
                                    <div class="container-with-sub">
                                      <div class="container-dot">
                                        <div class="container-data">
                                          <p id="date-white">${minutes}</p>
                                        </div>
                                        <div class="dotsIcon"></div>
                                      </div>
                                      
                                      <div id="sub-describe">
                                        <p>Min</p>
                                      </div>
                                    </div>
                                    
                                    <div class="container-with-sub">
                                      <div class="container-data">
                                        <p id="date-white">${seconds}</p>
                                      </div>
                                      <div id="sub-describe">
                                        <p>Seg</p>
                                      </div>
                                    </div>
                                    
                                  </div>`
    }


    if (distance < 0) {
      clearInterval(x);
    }

  }, 1000);

}()
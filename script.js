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
}

function navBarMobile() {
  var navButton = document.querySelector(".menu-button");
  var iconMenuClick = document.querySelector(".icon-2");
  var navbarDiv = document.querySelector("[data-wf-ignore]");

  var navbarRootDiv = document.querySelector(".navbar-mobile-root");

  iconMenuClick.addEventListener("click", () => {
    if (navButton.classList[2] == "w--open") {
      navButton.classList.remove("w--open");
      navbarDiv.classList.remove("an-nav-bf");
      iconMenuClick.classList.remove("w-menu-open-nav");
      navbarRootDiv.classList.add("display-none-content");
    } else {
      navButton.classList.add("w--open");
      navbarDiv.classList.add("an-nav-bf");
      iconMenuClick.classList.add("w-menu-open-nav");
      navbarRootDiv.classList.remove("display-none-content");
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
  var Modelcategory = document.querySelector(`.${selectedCategory}`);
  var subcatSub = document.querySelector(".model-cat-sub");
  var subSubDivContainer = document.querySelector(".sub-sub-model");

  subSubDivContainer.classList.add("display-none-content");

  Modelcategory.classList.remove("display-none-content");
  subcatSub.innerHTML = "";
}

function showOrHideContent(selectedCategory) {
  var subCategoryModels = document.querySelector(`.${selectedCategory}`);
  subCategoryModels.classList.contains("showContentBlock")
    ? subCategoryModels.classList.remove("showContentBlock")
    : subCategoryModels.classList.add("showContentBlock");
}

function showSubs(categorySelected) {
  var refSpanContainer = document.querySelector(".sub-sub-model");
  var modelMain = document.querySelector(".main-categorys");
  var subSubDivContainer = document.querySelector(".sub-sub-model");
  subSubDivContainer.classList.remove("display-none-content");
  modelMain.classList.add("display-none-content");
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
        title: "KID",
        imgSrc: "./media/home/menu-category/KidsCategory.jpg",
        Mlink: "",
        FLink: "",
        AllLink: "",
      },
      PreTeens: {
        title: "PRE-TEEN",
        imgSrc: "./media/home/menu-category/PreTeenCategory.jpg",
        Mlink: "",
        FLink: "",
        AllLink: "",
      },
      Commercials: {
        title: "COMMERCIAL",
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
        title: "ANDROGYNE",
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
                      <li data-link-on onclick="showCategoryModelsDesktop('main-categorys',0)" id="back-btn"><span id="back-menu"></span><a href="javascript:void(0)">VOLTAR</a></li>
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
    if (element.classList.contains("display-none-content")) {
      element.classList.remove("display-none-content");
    } else {
      element.classList.add("display-none-content");
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

function PopupMsg(title, cat, closeMenuMobile = 0, classCloseMenu) {
  var navButtonMenuMobile = document.querySelector(".menu-button");
  var popupCategory = document.querySelector(".sub-category");
  var containerImgs = document.querySelector(".container-imgs");
  var actualCategory = cat;

  var navButton = document.querySelector(".menu-button");
  var iconMenuClick = document.querySelector(".icon-2");
  var navMenu = document.querySelector(".nav-menu");
  var spanInset = document.querySelector(".w-nav-overlay");
  var navbarDiv = document.querySelector("[data-wf-ignore]");

  var navbarRootDiv = document.querySelector(".navbar-mobile-root");

  if (closeMenuMobile === 1) {
    navButton.classList.remove("w--open");
    /*navMenu.innerHTML = `<a href="./index.html" class="nav-link-2 w-nav-link">HOME</a><a
        href="./composite.html" class="nav-link-3 w-nav-link">COMPOSITE</a><a href="./book.html"
        class="nav-link-4 w-nav-link">BOOK</a><a href="./parceiros.html" class="nav-link-5 w-nav-link">PARCEIROS</a><a
        href="./contato.html" class="nav-link-6 w-nav-link">CONTATO</a>`*/
    navbarDiv.classList.remove("an-nav-bf");
    iconMenuClick.classList.remove("w-menu-open-nav");
    navbarRootDiv.classList.add("display-none-content");
  }

  if (false) {
    //popupCategory.classList.remove("popup-models-category");
    popupCategory.classList.add("display-none-content");
  } else {
    popupCategory.classList.remove("container-popup-mgs");
    popupCategory.classList.add("popup-models-category");
    popupCategory.classList.replace("category", actualCategory);
    popupCategory.classList.remove("display-none-content");
    setTimeout(() => {
      popupCategory.classList.add("container-popup-mgs");
    }, 200);
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
                      <div class="imgs-cursos ${title}">
                      <a  href="javascript:void(0)"><img src="./media/"></a>
                      </div>
                      
      `;
      window.scrollTo(0, 0);
      break;
    case "curso-passarela":
      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `<div class="container-course-description">
                                  <div class="image-course-container"><img src="./media/home/menu-cursos/imgs-cursos/curso-modeloManequim.png"></div>
                                  <div class="description-course"><p>O curso é totalmente on-line. Para obter o certificado, você deverá atingir a nota minima 6,0 na avaliação e completar a carga horária. Para a confecção e envio postal do certificado existe apenas uma taxa de R$ 79.90, que será enviado por e-mail e através dos correios. A solicitação do certificado é opcional e não impedirá você de estudar gratuitamente. </p></div> 
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
                                  <div class="description-course"><p>O curso é totalmente on-line. Para obter o certificado, você deverá atingir a nota minima 6,0 na avaliação e completar a carga horária. Para a confecção e envio postal do certificado existe apenas uma taxa de R$ 79.90, que será enviado por e-mail e através dos correios. A solicitação do certificado é opcional e não impedirá você de estudar gratuitamente.</p></div> 
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
                                  <div class="description-course"><p>O curso é totalmente on-line. Para obter o certificado, você deverá atingir a nota minima 6,0 na avaliação e completar a carga horária. Para a confecção e envio postal do certificado existe apenas uma taxa de R$ 39.90, que será enviado por e-mail e através dos correios. A solicitação do certificado é opcional e não impedirá você de estudar gratuitamente.</p></div> 
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
                                  <div class="description-course"><p>O curso é totalmente on-line. Para obter o certificado, você deverá atingir a nota minima 6,0 na avaliação e completar a carga horária. Para a confecção e envio postal do certificado existe apenas uma taxa de R$ 79.90, que será enviado por e-mail e através dos correios. A solicitação do certificado é opcional e não impedirá você de estudar gratuitamente.</p></div> 
                                  <div class="btn-aplly"><span class="apllyIcon"></span><p>CLIQUE AQUI PARA MATRICULAR AGORA</p></div>
                                  <span class="countdown">countdown</span> 
                                </div>
                      
      `;
      window.scrollTo(0, 0);
      break;
    default:
      break;
  }

  if (classCloseMenu) {
    var artistDoc = document.querySelector(".artist-btn");
    var spanIconArtist = document.querySelector(".artist-btn > span");
    var divArtista = document.querySelector(".subnav-artista");

    var cantoresBtn = document.querySelector(".contores-btn");
    var divCantores = document.querySelector(".sub-cantores-1");
    var mainLi = document.querySelectorAll(".MainMenu-1");

    var eventsDoc = document.querySelector(".events-btn");
    var divEvento = document.querySelector(".subnav-evento");
    var spanEvent = document.querySelector(".events-btn > span");

    var courseBtn = document.querySelector(".course-btn");
    var courseSpan = document.querySelector(".course-btn > span");
    var divCourse = document.querySelector(".subnav-course");

    var modelsDiv = document.querySelector(".main-categorys");
    var modelbtn = document.querySelector(".model-button");
    var modelspan = document.querySelector(".model-button  > span");
    var modelSubCategory = document.querySelector(".sub-sub-model");

    modelsDiv.classList.remove("showContentBlock");
    modelbtn.classList.remove("activeBtn");
    modelspan.classList.remove("activeIconArrow");
    modelSubCategory.classList.add("display-none-content");

    artistDoc.classList.remove("activeBtn");
    divArtista.classList.add("display-none-content");
    spanIconArtist.classList.remove("activeIconArrow");

    divCantores.classList.add("display-none-content");

    artistDoc.classList.remove("activeBtn");
    divArtista.classList.add("display-none-content");
    spanIconArtist.classList.remove("activeIconArrow");

    divEvento.classList.add("display-none-content");
    spanEvent.classList.remove("activeIconArrow");
    eventsDoc.classList.remove("activeBtn");

    divCourse.classList.add("display-none-content");
    courseSpan.classList.remove("activeIconArrow");
    courseBtn.classList.remove("activeBtn");

    divCantores.classList.add("display-none-content");
  }
}

function closeWindow() {
  var popupCategory = document.querySelector(".sub-category");
  popupCategory.classList.remove("popup-models-category");
  popupCategory.classList.add("display-none-content");
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

  var courseBtn = document.querySelector(".course-btn");
  var courseSpan = document.querySelector(".course-btn > span");
  var divCourse = document.querySelector(".subnav-course");

  var modelsBtn = document.querySelector(".model-button");
  var spanBtnModel = document.querySelector(".model-button > span");
  var divModel = document.querySelector(".main-categorys");

  var subcatModel = document.querySelector(".sub-sub-model");

  var hideContent = (menuNoClose) => {
    switch (menuNoClose) {
      case "modelo":
        artistDoc.classList.remove("activeBtn");
        divArtista.classList.add("display-none-content");
        spanIconArtist.classList.remove("activeIconArrow");

        divCourse.classList.add("display-none-content");
        courseSpan.classList.remove("activeIconArrow");
        courseBtn.classList.remove("activeBtn");

        divEvento.classList.add("display-none-content");
        spanEvent.classList.remove("activeIconArrow");
        eventsDoc.classList.remove("activeBtn");

        subcatModel.classList.add("display-none-content");

        break;
      case "artista":
        divModel.classList.add("display-none-content");
        spanBtnModel.classList.remove("activeIconArrow");
        modelsBtn.classList.remove("activeBtn");

        divCourse.classList.add("display-none-content");
        courseSpan.classList.remove("activeIconArrow");
        courseBtn.classList.remove("activeBtn");

        divEvento.classList.add("display-none-content");
        spanEvent.classList.remove("activeIconArrow");
        eventsDoc.classList.remove("activeBtn");

        subcatModel.classList.add("display-none-content");

        break;
      case "curso":
        divModel.classList.add("display-none-content");
        spanBtnModel.classList.remove("activeIconArrow");
        modelsBtn.classList.remove("activeBtn");

        divEvento.classList.add("display-none-content");
        spanEvent.classList.remove("activeIconArrow");
        eventsDoc.classList.remove("activeBtn");

        artistDoc.classList.remove("activeBtn");
        divArtista.classList.add("display-none-content");
        spanIconArtist.classList.remove("activeIconArrow");

        subcatModel.classList.add("display-none-content");

        break;
      case "eventos":
        divModel.classList.add("display-none-content");
        spanBtnModel.classList.remove("activeIconArrow");
        modelsBtn.classList.remove("activeBtn");

        artistDoc.classList.remove("activeBtn");
        divArtista.classList.add("display-none-content");
        spanIconArtist.classList.remove("activeIconArrow");

        divCourse.classList.add("display-none-content");
        courseSpan.classList.remove("activeIconArrow");
        courseBtn.classList.remove("activeBtn");

        subcatModel.classList.add("display-none-content");
        break;
    }
  };

  var subdivCantores = document.querySelector(".sub-cantores-1");
  divCantores.style.animation = "opacity 1s";

  artistDoc.addEventListener("click", (event) => {
    hideContent("artista");
    if (divArtista.classList.contains("display-none-content")) {
      divArtista.classList.remove("display-none-content");
      spanIconArtist.classList.add("activeIconArrow");
      artistDoc.classList.add("activeBtn");
    } else {
      artistDoc.classList.remove("activeBtn");
      divArtista.classList.add("display-none-content");
      spanIconArtist.classList.remove("activeIconArrow");
    }
  });

  btnVoltarArtistas.addEventListener("click", (event) => {
    mainLi.forEach((li) => {
      li.classList.remove("display-none-content");
    });
    divCantores.classList.add("display-none-content");
  });

  cantoresBtn.addEventListener("click", (event) => {
    if (divCantores.classList.contains("display-none-content")) {
      divCantores.classList.remove("display-none-content");
      mainLi.forEach((li) => {
        li.classList.add("display-none-content");
      });
    }
  });

  eventsDoc.addEventListener("click", (event) => {
    hideContent("eventos");
    if (divEvento.classList.contains("display-none-content")) {
      divEvento.classList.remove("display-none-content");
      spanEvent.classList.add("activeIconArrow");
      eventsDoc.classList.add("activeBtn");
    } else {
      divEvento.classList.add("display-none-content");
      spanEvent.classList.remove("activeIconArrow");
      eventsDoc.classList.remove("activeBtn");
    }
  });

  courseBtn.addEventListener("click", (event) => {
    hideContent("curso");
    if (divCourse.classList.contains("display-none-content")) {
      divCourse.classList.remove("display-none-content");
      courseSpan.classList.add("activeIconArrow");
      courseBtn.classList.add("activeBtn");
    } else {
      divCourse.classList.add("display-none-content");
      courseSpan.classList.remove("activeIconArrow");
      courseBtn.classList.remove("activeBtn");
    }
  });

  modelsBtn.addEventListener("click", (event) => {
    hideContent("modelo");
    if (divModel.classList.contains("display-none-content")) {
      divModel.classList.remove("display-none-content");
      spanBtnModel.classList.add("activeIconArrow");
      modelsBtn.classList.add("activeBtn");
    } else {
      divModel.classList.add("display-none-content");
      spanBtnModel.classList.remove("activeIconArrow");
      modelsBtn.classList.remove("activeBtn");
    }
  });
})();

function ShowOrHideSubMenus(classSelected, BackButton = 0) {
  var arrayChildsNav = document.querySelectorAll("nav > a");
  var ShowDiv = document.querySelector(`.${classSelected}`);
  var ElementshowDiv = document.querySelectorAll(`.${classSelected} > a`);

  if (BackButton === 0) {
    arrayChildsNav.forEach((element) => {
      element.classList.add("noneForce");
    });
    ElementshowDiv.forEach((element) => {
      element.classList.remove("noneForce");
      ShowDiv.style.display = "block";
    });
  } else {
    arrayChildsNav.forEach((element) => {
      element.classList.remove("noneForce");
    });
    ElementshowDiv.forEach((element) => {
      element.classList.add("noneForce");
      ShowDiv.style.display = "none";
    });
  }
}

function ArtistsMenus(classSelected, nameArtist) {
  var divSelectd = document.querySelector(`.${classSelected}`);
  if (!divSelectd.classList.contains("display-none-content")) {
    divSelectd.classList.add("display-none-content");
  } else {
    switch (nameArtist) {
      case "ViniciusRocha-bibliografia":
        divSelectd.classList.remove("display-none-content");
        divSelectd.innerHTML = `<div class="title-bibliografia"><p>Vinicius Rocha</p></div>
    <div><p>Vinicius Cardoso Rocha Borges, nome artistico Vinicius Rocha,nascido em Divinopolis no ano de 1993, despertou o interesse pela musica aos 12 anos quando 
    aprendeu a tocar a primeira musica no violao de seu irmão. Descendente de bisavó pianista, avó regente de orquestra e tia violoncelista na orquestra sinfônica da PM de Belo horizonte, teve de onde herdar o interesse pela musica.
    Em 2005 Vinicius Rocha juntamente com seus amigos decidem criar uma banda de estilo alternativo denominada 360. A 360 teve varias formações até que foi decidido que Vinicius Rocha seria o vocalista. A partir deste momento o cantor despertou ainda mais o interesse pela musica. Algum tempo depois Vinicius e Breno Carvalho decidem sair da banda 360 e criam uma nova banda, Diaax, onde conseguiram durante dois anos seguidos fazer apresentação no Festival de inverno de Itapecerica-MG.
    Algum tempo depois a rotina de vida dos integrantes foram aumentando e não tinham tempo para dedicar a banda. Então em 2013 Vinicius Rocha decide ingressar uma carreira solo na musica sertaneja, estilo que sempre pertenceu ao gosto musical desde pequeno.
    Vinicius então lança sua carreira solo como Vinicius Rocha na 43° Divinaexpo no palco novos talentos,ganhando até o seu primeiro Fã Clube.
    Então lança sua primeira musica de trabalho "Te Querer Tanto Assim" que em menos de uma semana teve mais de mil visualizações no youtube.</p></div>
    <div class="backbtn-artist" onClick="ArtistsMenus('artist-2')"><p>VOLTAR</p></div>
    `;
        break;
      case "ViniciusRocha-fotos":
        divSelectd.classList.remove("display-none-content");
        divSelectd.innerHTML = `
          <div class="title-bibliografia"><p>Vinicius Rocha</p></div>
          <div class='photos-container'>
            <img src="./media/artistas/sertanejo/fotos-viniciusRocha/viniciusRocha1.jpg">
            <img src="./media/artistas/sertanejo/fotos-viniciusRocha/viniciusRocha2.jpg">
            <img src="./media/artistas/sertanejo/fotos-viniciusRocha/viniciusRocha3.jpg">
          </div>
          <div class="backbtn-artist" onClick="ArtistsMenus('artist-2')"><p>VOLTAR</p></div>
        `;

        break;
    }
  }
}

!(function contDown() {
  var contDownDate = new Date("August 10, 2020 00:00:00").getTime();

  var x = setInterval(() => {
    var divCountdown = document.querySelector(
      ".container-course-description > span"
    );
    var now = new Date().getTime();

    var distance = contDownDate - now;

    // time calculation for days, hors, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
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
                                    
                                  </div>`;
    }

    if (distance < 0) {
      clearInterval(x);
    }
  }, 1000);
})();

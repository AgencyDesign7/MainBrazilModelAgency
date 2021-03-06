function onLoad() {
  loadPageProgress();
  navBarMobile();
  buttonMenuEA()
  var pageName = location.pathname.split("/").pop();
  switch (pageName) {
    case "index":
      slideTitle();
      break;
    case "facaparte":
      HideOrShowCategoryModel();
      checkUploadFiles();
      break;
    case "shows":
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

function slideParceiros() {
  var index = 0;

  // function nextSlide() {
  //   var Divimgs = document.querySelectorAll('.imgp-slide')
  //   Divimgs.forEach((img) => img.style.display = "none")

  //   index++;
  //   if (index > Divimgs.length) index = 1;
  //   Divimgs[index - 1].style.display = "block"

  //   setTimeout(nextSlide, 4000)
  // }

  let time = 4000,
    imags = document.querySelectorAll(".imgp-slide"),
    imgsLenght = imags.length,
    imgIndex = 0;

  setInterval(() => {
    imags[imgIndex].classList.remove("show-img");
    imgIndex++;
    if (imgIndex >= imgsLenght) imgIndex = 0;
    imags[imgIndex].classList.add("show-img");
  }, time);
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
                      <li onclick="ShowModelByCategory('${CategoryObjects["Category"][categorySelected]["title"]}', 'FEMININO')"><a href="#">FEMININO</a></li>
                      <li onclick="ShowModelByCategory('${CategoryObjects["Category"][categorySelected]["title"]}', 'MASCULINO')"><a href="#">MASCULINO</a></li>
                      <li onclick="ShowModelByCategory('${CategoryObjects["Category"][categorySelected]["title"]}', 'TODOS')"><a href="#">TODOS</a></li>
                      </div>
                    </div>
  `;
  refSpanContainer.innerHTML = HtmlBabyCategory;
}

function ShowModelByCategory(title, gender) {

  let categorys = ['baby', 'kid', 'teen', 'commercial', 'comercial', 'size', 'age', 'fashion', 'fitness', 'urban', 'andro'];
  let ObjModelsCategory = new Object();
  categorys.forEach(function (cat) {
    if ((title.toLowerCase()).includes(cat)) {
      ObjModelsCategory.title = cat;
      ObjModelsCategory.gender = gender.toLowerCase()
    }

  })

  var HeroDoc = document.querySelector('.hero')

  PopupMsg('model', 'noCategory', 1, 1)

  CloseAllMenus()
  switch (ObjModelsCategory.title) {
    case 'baby':
      if (ObjModelsCategory.gender === 'masculino') {
        HeroDoc.innerHTML = `<div class="model-by-category">
                                  <div class="container-img">
                                    <a href=""><img src="" alt=""></a>
                                  </div>
                                </div>
                      
        `;
      } else if (ObjModelsCategory.gender === 'feminino') {
        HeroDoc.innerHTML = `<div class="model-by-category">
                                  <div class="container-img">
                                    <a href=""><img src="" alt=""></a>
                                  </div>
                                </div>
                      
        `;
      } else if (ObjModelsCategory.gender === 'todos') {
        HeroDoc.innerHTML = `<div class="model-by-category">
                                  <div class="container-img">
                                    <a href=""><img src="" alt=""></a>
                                  </div>
                                </div>
                      
         `;
      }
      break;
    case 'kid':
      if (ObjModelsCategory.gender === 'masculino') {
        HeroDoc.innerHTML = `<div class="model-by-category">
                                  <div class="container-img">
                                    <a href=""><img src="" alt=""></a>
                                  </div>
                                </div>
                      
        `;
      } else if (ObjModelsCategory.gender === 'feminino') {
        HeroDoc.innerHTML = `<div class="model-by-category">
                                  <div class="title-category-selected"><p>KID - FEMININO</p></div>
                                    <div class="container-img">
                                      <div class="model-container-u">
                                        <a href="http://anacaroline.brazilmodel.com.br"><img src="./media/home/models-category/anaCarolineKid.jpg" alt=""></a>
                                        <p>ANA CAROLINE</p>
                                      </div>
                                    </div>
                                </div>
                      
        `;
      } else if (ObjModelsCategory.gender === 'todos') {
        HeroDoc.innerHTML = `<div class="model-by-category">
                                 <div class="title-category-selected"><p>KID - TODOS</p></div>
                                    <div class="container-img">
                                      <div class="model-container-u">
                                        <a href="http://anacaroline.brazilmodel.com.br"><img src="./media/home/models-category/anaCarolineKid.jpg" alt=""></a>
                                        <p>ANA CAROLINE</p>
                                      </div>
                                    </div>
                                </div>
                      
         `;
      }
      break;
    case 'teen':
      if (ObjModelsCategory.gender === 'masculino') {
        HeroDoc.innerHTML = `<div class="model-by-category">
                                  <div class="container-img">
                                    <a href=""><img src="" alt=""></a>
                                  </div>
                                </div>
                      
        `;
      } else if (ObjModelsCategory.gender === 'feminino') {
        HeroDoc.innerHTML = `<div class="model-by-category">
                                  <div class="title-category-selected"><p>PRE-TEEN - FEMININO</p></div>
                                    <div class="container-img">
                                      <div class="model-container-u">
                                         <a href="http://alicediniz.brazilmodel.com.br"><img src="./media/home/models-category/AliceDinizPreTeen.jpg" alt=""></a>
                                         <p>ALICE DINIZ</p>
                                        </div>
                                    </div>
                                </div>
                      
        `;
      } else if (ObjModelsCategory.gender === 'todos') {
        HeroDoc.innerHTML = `<div class="model-by-category">
                                  <div class="title-category-selected"><p>PRE-TEEN - TODOS</p></div>
                                    <div class="container-img">
                                      <div class="model-container-u">
                                         <a href="http://alicediniz.brazilmodel.com.br"><img src="./media/home/models-category/AliceDinizPreTeen.jpg" alt=""></a>
                                         <p>ALICE DINIZ</p>
                                        </div>
                                    </div>
                                </div>
                      
         `;
      }
      break;
    case 'age':
      if (ObjModelsCategory.gender === 'masculino') {
        HeroDoc.innerHTML = `<div class="model-by-category">
                                  <div class="container-img">
                                    <a href=""><img src="" alt=""></a>
                                  </div>
                                </div>
                      
        `;
      } else if (ObjModelsCategory.gender === 'feminino') {
        HeroDoc.innerHTML = `<div class="model-by-category">
                                  <div class="title-category-selected"><p>MORE AGE - FEMININO</p></div>
                                  <div class="container-img">
                                    <div class="model-container-u">
                                      <a href="http://elainesantos.brazilmodel.com.br"><img src="./media/home/models-category/ElianeSantosMoreAge.jpg" alt=""></a>
                                      <p>ELAINE SANTOS</p>
                                    </div>
                                  </div>
                                </div>
                      
        `;
      } else if (ObjModelsCategory.gender === 'todos') {
        HeroDoc.innerHTML = `<div class="model-by-category">
                                  <div class="title-category-selected"><p>MORE AGE - TODOS</p></div>
                                  <div class="container-img">
                                    <div class="model-container-u">
                                      <a href="http://elainesantos.brazilmodel.com.br"><img src="./media/home/models-category/ElianeSantosMoreAge.jpg" alt=""></a>
                                      <p>ELAINE SANTOS</p>
                                    </div>
                                  </div>
                              </div>
                      
         `;
      }
      break;
    case 'size':
      if (ObjModelsCategory.gender === 'masculino') {
        HeroDoc.innerHTML = `<div class="model-by-category">
                                    <div class="container-img">
                                      <a href=""><img src="" alt=""></a>
                                    </div>
                                  </div>
                        
          `;
      } else if (ObjModelsCategory.gender === 'feminino') {
        HeroDoc.innerHTML = `<div class="model-by-category">
                                    <div class="container-img">
                                      <a href=""><img src="" alt=""></a>
                                    </div>
                                  </div>
                        
          `;
      } else if (ObjModelsCategory.gender === 'todos') {
        HeroDoc.innerHTML = `<div class="model-by-category">
                                    <div class="container-img">
                                      <a href=""><img src="" alt=""></a>
                                    </div>
                                  </div>
                        
           `;
      }
      break;
    case 'comercial':
    case 'commercial':
      if (ObjModelsCategory.gender === 'masculino') {
        HeroDoc.innerHTML = `<div class="model-by-category">
                                  <div class="container-img">
                                    <a href=""><img src="" alt=""></a>
                                  </div>
                                </div>
                      
        `;
      } else if (ObjModelsCategory.gender === 'feminino') {
        HeroDoc.innerHTML = `<div class="model-by-category">
                                  <div class="title-category-selected"><p>COMMERCIAL - FEMININO</p></div>
                                  <div class="container-img">
                                    <div class="model-container-u">
                                      <a href="http://alinekawasaki.brazilmodel.com.br"><img src="./media/home/models-category/alineKawasakiCommercial.jpg" alt=""></a>
                                      <p>ALINE KAWASAKI</p>
                                    </div>
                                    <div class="model-container-u">
                                      <a href="http://anaclara.brazilmodel.com.br"><img src="./media/home/models-category/anaClaraCommercial.jpg" alt=""></a>
                                      <p>ANA CLARA</p>
                                    </div>
                                  </div>
                                </div>
                      
        `;
      } else if (ObjModelsCategory.gender === 'todos') {
        HeroDoc.innerHTML = `<div class="model-by-category">
                                  <div class="title-category-selected"><p>COMMERCIAL - TODOS</p></div>
                                  <div class="container-img">
                                    <div class="model-container-u">
                                      <a href="http://alinekawasaki.brazilmodel.com.br"><img src="./media/home/models-category/alineKawasakiCommercial.jpg" alt=""></a>
                                      <p>ALINE KAWASAKI</p>
                                    </div>
                                    <div class="model-container-u">
                                      <a href="http://anaclara.brazilmodel.com.br"><img src="./media/home/models-category/anaClaraCommercial.jpg" alt=""></a>
                                      <p>ANA CLARA</p>
                                    </div>
                                  </div>
                                </div>
                      
         `;
      }
      break;
    case 'fashion':
      //HeroDoc.setAttribute('style', 'height: 1000px !important; background-color: white;')
      if (ObjModelsCategory.gender === 'masculino') {
        HeroDoc.innerHTML = `<div class="model-by-category">
                                    <div class="title-category-selected"><p>FASHION - MASCULINO</p></div>
                                    <div class="container-img">
                                      <div class="model-container-u">
                                        <a href="http://marcosmaia.brazilmodel.com.br"><img src="./media/home/models-category/MarcosMaiaFashion.jpg" alt=""></a>
                                        <p>MARCOS MAIA</p>
                                      </div>
                                    </div>
                                  </div>
                        
          `;
      } else if (ObjModelsCategory.gender === 'feminino') {
        HeroDoc.innerHTML = `<div class="model-by-category">
                                    <div class="title-category-selected"><p>FASHION - FEMININO</p></div>
                                    <div class="container-img">
                                      <div class="model-container-u">
                                        <a href="http://laviniacouto.brazilmodel.com.br"><img src="./media/home/models-category/LaviniaCoutoFashion.jpg" alt=""></a>
                                        <p>LAVINIA COUTO</p>
                                      </div>
                                      <div class="model-container-u">
                                        <a href="http://kamillyananias.brazilmodel.com.br"><img src="./media/home/models-category/KamillyAnaniasFashion.jpg" alt=""></a>
                                        <p>KAMILLY ANANIAS</p>
                                      </div>
                                    </div>
                                  </div>
                        
          `;
      } else if (ObjModelsCategory.gender === 'todos') {
        HeroDoc.innerHTML = `<div class="model-by-category">
                                    <div class="container-img">
                                      <div class="title-category-selected"><p>FASHION - TODOS</p></div>
                                      <div class="model-container-u">
                                        <a href="http://marcosmaia.brazilmodel.com.br"><img src="./media/home/models-category/MarcosMaiaFashion.jpg" alt=""></a>
                                        <p>MARCOS MAIA</p>
                                      </div>
                                      <div class="model-container-u">
                                        <a href="http://laviniacouto.brazilmodel.com.br"><img src="./media/home/models-category/LaviniaCoutoFashion.jpg" alt=""></a>
                                        <p>LAVINIA COUTO</p>
                                      </div>
                                      <div class="model-container-u">
                                        <a href="http://kamillyananias.brazilmodel.com.br"><img src="./media/home/models-category/KamillyAnaniasFashion.jpg" alt=""></a>
                                        <p>KAMILLY ANANIAS</p>
                                      </div>
                                    </div>
                                  </div>
                        
           `;
      }
      break;
    case 'andro':
      if (ObjModelsCategory.gender === 'masculino') {
        HeroDoc.innerHTML = `<div class="model-by-category">
                                  <div class="container-img">
                                    <a href=""><img src="" alt=""></a>
                                  </div>
                                </div>
                      
        `;
      } else if (ObjModelsCategory.gender === 'feminino') {
        HeroDoc.innerHTML = `<div class="model-by-category">
                                  <div class="container-img">
                                    <a href=""><img src="" alt=""></a>
                                  </div>
                                </div>
                      
        `;
      } else if (ObjModelsCategory.gender === 'todos') {
        HeroDoc.innerHTML = `<div class="model-by-category">
                                  <div class="container-img">
                                    <a href=""><img src="" alt=""></a>
                                  </div>
                                </div>
                      
         `;
      }
      break;
    case 'urban':
      if (ObjModelsCategory.gender === 'masculino') {
        HeroDoc.innerHTML = `<div class="model-by-category">
                                  <div class="container-img">
                                    <a href=""><img src="" alt=""></a>
                                  </div>
                                </div>
                      
        `;
      } else if (ObjModelsCategory.gender === 'feminino') {
        HeroDoc.innerHTML = `<div class="model-by-category">
                                  <div class="container-img">
                                    <a href=""><img src="" alt=""></a>
                                  </div>
                                </div>
                      
        `;
      } else if (ObjModelsCategory.gender === 'todos') {
        HeroDoc.innerHTML = `<div class="model-by-category">
                                  <div class="container-img">
                                    <a href=""><img src="" alt=""></a>
                                  </div>
                                </div>
                      
         `;
      }
      break;
  }
}

!function EventBtnModelsCategoryMobile() {
  let allBtnCategory = document.querySelectorAll('.sub-texts > p')

  if (allBtnCategory) {
    allBtnCategory.forEach(b => {
      b.addEventListener('click', event => {
        let CategoryModel = event.target.parentNode.parentNode.classList[0];
        let CategoryGenderSelected = event.target.innerHTML;
        ShowModelByCategory(CategoryModel, CategoryGenderSelected);
      })
    })
  }
}()

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
       
      }
    }, 500)
 
  })
}*/

function PopupMsg(title, cat, closeMenuMobile = 0, classCloseMenu) {
  var ObjectsContainer = {
    Hero: {
      ref: document.querySelector(".hero"),
      StyleAttributes(Style) {
        //this.ref.setAttribute("style", `${Style}`);
      },
    },
    PopUpMsgContainer: {
      ref: document.querySelector(".container-popup-mgs"),
      refImgs: document.querySelector(".container-imgs"),
      CopyContainer(copy) {
        //this.refImgs.setAttribute("style", `${copy}`);
      },
      StyleAttributes(Style) {
        //this.ref.setAttribute("style", `${Style}`);
        //this.CopyContainer(Style);
      },
    },
  };

  var navButtonMenuMobile = document.querySelector(".menu-button");
  var popupCategory = document.querySelector(".sub-category");
  var containerImgs = document.querySelector(".hero");
  var actualCategory = cat;

  var navButton = document.querySelector(".menu-button");
  var iconMenuClick = document.querySelector(".icon-2");
  var navMenu = document.querySelector(".nav-menu");
  var spanInset = document.querySelector(".w-nav-overlay");
  var navbarDiv = document.querySelector("[data-wf-ignore]");

  var navbarRootDiv = document.querySelector(".navbar-mobile-root");

  var sectionSocialMedia = document.querySelector(".contact-socialMedia");
  var form = document.querySelector("form");

  var MediaQueryAjust768 = window.matchMedia("(max-width: 768px) and (min-width: 320px)");
  var MediaQueryAjust1322 = window.matchMedia("(max-width: 1322px) and (min-width: 800px)");
  if (sectionSocialMedia)
    sectionSocialMedia.setAttribute("style", "display: none !important;");

  if (MediaQueryAjust768.matches === true) {
    ObjectsContainer.Hero.StyleAttributes(
      "height: 700px !important; visibility:hidden !important; overflow: hidden !important;"
    );
    //containerImgs.setAttribute("style", "height: 700px !important;");
    if (title === "parceiros" || title === "pitagoras-propaganda") {
      ObjectsContainer.Hero.StyleAttributes(
        "height: 1100px !important; visibility:hidden !important; overflow: hidden !important;"
      );
      ObjectsContainer.PopUpMsgContainer.StyleAttributes(
        "height: 1100px !important;"
      );
    }
  } else {
    ObjectsContainer.Hero.StyleAttributes(
      "height: 1100px !important; visibility:hidden !important; overflow: hidden !important;"
    );

    //containerImgs.setAttribute("style", "height: 1090px !important;");
    if (form !== null && sectionSocialMedia !== null) {
      sectionSocialMedia.setAttribute("style", "display: none !important;");
      form.setAttribute("style", "display: none !important;");
    }
  }

  if (closeMenuMobile === 1) {
    navButton.classList.remove("w--open");
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
    }, 300);
  }
  if (title === "revista") {
    popupCategory.style.backgroundColor = "black";
  }

  popupCategory.classList.add("display-none-content");
  containerImgs.style.backgroundColor = "white"
  containerImgs.classList.add('flex-d-column-center')
  /*if (title === 'parceiros' || title === 'pitagoras-propaganda') {
    ObjectsContainer.Hero.StyleAttributes('height: 1100px !important; visibility:hidden !important')
    ObjectsContainer.PopUpMsgContainer.StyleAttributes('height: 1100px !important;')
  } else {
    ObjectsContainer.Hero.StyleAttributes('height: fit-content !important; visibility:hidden !important')
  }*/

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
    case "workshops":
      popupCategory.style.backgroundColor = "black";
      containerImgs.innerHTML = `
                      <div class="imgs-cursos ${title}">
                        <img src="./media/eventos-menu/workshop1.jpg">
                        <div class="workshop-container">
                          <p>WORKSHOPS</p>
                          <p>
                          Palestra,
                          Workshop de passarela,
                          Make-Up e 
                          Fotos.
                          
                          Tudo em um só dia.
                          Ministrados na teoria e na prática.
                          
                          <b>QUEM PODE PARTICIPAR?</b> 
                          
                          Interessados que têm o sonho de ser:  Atores, Cantores, Companhia Circenses,  Covers,  Dançarinos, Influenciadores Digitais, Modelos, Músico e Sósias.
                          
                          Confira as cidades que terão os workshops.
                          
                          </p>
                        </div>
                        <div class="contact-watsapp">
                        
                        <select id="states-select" name="select-state" onchange="selectedState('workshop')">
                            <option>Selecione um estado...</option>
                            <!--<option value="ac">AC</option>-->
                            <!--<option value="al">AL</option>-->
                            <!--<option value="ap">AP</option>-->
                            <!--<option value="am">AM</option>-->
                            <!--<option value="ba">BA</option>-->
                            <!--<option value="ce">CE</option>-->
                            <!--<option value="df">DF</option>-->
                            <!--<option value="es">ES</option>-->
                            <!--<option value="go">GO</option>-->
                            <!--<option value="ma">MA</option>-->
                            <!--<option value="mt">MT</option>-->
                            <!--<option value="ms">MS</option>-->
                            <!--<option value="mg">MG</option>-->
                            <!--<option value="pa">PA</option>-->
                            <!--<option value="pb">PB</option>-->
                            <!--<option value="pr">PR</option>-->
                            <!--<option value="pe">PE</option>-->
                            <!--<option value="pi">PI</option>-->
                            <!--<option value="rj">RJ</option>-->
                            <!--<option value="rn">RN</option>-->
                            <!--<option value="rs">RS</option>-->
                            <!--<option value="ro">RO</option>-->
                            <!--<option value="rr">RR</option>-->
                            <!--<option value="sc">SC</option>-->
                            <!--<option value="sp">SP</option>-->
                            <!--<option value="se">SE</option>-->
                            <!--<option value="to">TO</option>-->
                        </select>
                        <div class="list-states workshop-state"></div>
                        </div>
                        <div class="contact-watsapp-icons">
                                <a href="https://api.whatsapp.com/send?phone=5531994530485"><img src="./media/IconSocial/IwatsappColor.png" style="width: 80px; height: auto;"></a>
                                <p style="margin-bottom: 50px !important;">Maiores informações e inscrições entre em contato</p>
                              </div>
                      </div>
                      
      `;
      window.scrollTo(0, 0);
      break;
    case "audicao":
      popupCategory.style.backgroundColor = "black";
      containerImgs.innerHTML = `
                      <div class="imgs-cursos ${title}">
                        <img src="./media/eventos-menu/audicao.jpg">
                        <p style="margin-bottom: 50px !important;">Somos uma agência de marketing musical com estratégias para lançamentos e divulgação de cantores, duplas e bandas do Brasil, especializada no  planejamento de produção, contratação e vendas de artistas  para realização de shows e eventos.</p>
                        <div class="contact-watsapp-icons">
                                <a href="https://api.whatsapp.com/send?phone=5531994530485"><img style="width: 70% !important" src="./media/IconSocial/IwatsappColor.png"></a>
                                <p style="margin-bottom: 50px !important;">Maiores informações e inscrições entre em contato</p>
                              </div>
                      </div>
                      
      `;
      window.scrollTo(0, 0);
      break;
    case "curso-passarela":
      countdown()
      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `<div class="container-course-description">
                                  <div class="image-course-container"><a href="./media/home/menu-cursos/imgs-cursos/curso-modeloManequim.png" target="_blank"><img src="./media/home/menu-cursos/imgs-cursos/curso-modeloManequim.png"></a></div>
                                  <div class="description-course"><p>O curso é totalmente on-line. Para obter o certificado, você deverá atingir a nota minima 6,0 na avaliação e completar a carga horária. Para a confecção e envio postal do certificado existe apenas uma taxa de R$ 79.90, que será enviado por e-mail e através dos correios. A solicitação do certificado é opcional e não impedirá você de estudar gratuitamente. </p></div> 
                                  <div class="details-course" onClick="DisplayDetail()"><a href="javascript:void(0)">Mostrar detalhes</a>
                                    
                                  </div>
                                  <div class="details-nv-2">
                                      <p>CURSO DE MODELO E MANEQUIM</P>
                                      <p>CONTEÚDO PROGRAMÁTICO</P>
                                      <p>* Mercado de Trabalho</p>
                                      <p>* Técnica em Passarela</p>
                                      <p>* Fotografia, Fotogenia e Filmagem</p>
                                      <p>* Interpretação</p>
                                      <p>* Video</p>
                                      <p>* Expressão Corporal e Facial</p>
                                      <p>* Etiqueta Social e Profissional</p>
                                      <p>* Comportamento</p>
                                      <p>* Legislação Trabalhista</p>
                                      <p>* Vestuário / Moda e Estilo</p>
                                      <p>* Nutrição, Higiene e Beleza</p>
                                      <p>* Marketing Pessoal</p>
                                      <p>* Gerenciamento de Carreira</p>
                                    </div>
                                    <div class="certifications-container">
                                      <div><a href="#">Alunos com certificação</a></div>
                                      <div><a href="#">Comentários</a></div>
                                      <div><a href="#">Fotos</a></div>
                                    </div>
                                  <div class="btn-aplly"><span class="apllyIcon"></span><p>CLIQUE AQUI PARA MATRICULAR AGORA</p></div>
                                  <span class="countdown">countdown</span> 
                                </div>
                      
      `;
      window.scrollTo(0, 0);
      break;
    case "curso-modeloFotografica":
      countdown()
      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `<div class="container-course-description">
                                  <div class="image-course-container"><a href="./media/home/menu-cursos/imgs-cursos/curso-modeloFotografica.png" target="_blank"><img src="./media/home/menu-cursos/imgs-cursos/curso-modeloFotografica.png"></a></div>
                                  <div class="description-course"><p>O curso é totalmente on-line. Para obter o certificado, você deverá atingir a nota minima 6,0 na avaliação e completar a carga horária. Para a confecção e envio postal do certificado existe apenas uma taxa de R$ 79.90, que será enviado por e-mail e através dos correios. A solicitação do certificado é opcional e não impedirá você de estudar gratuitamente.</p></div> 
                                  <div class="details-course" onClick="DisplayDetail()"><a href="javascript:void(0)">Mostrar detalhes</a>
                                  </div>
                                  <div class="details-nv-2">
                                      <p>CURSO DE MODELO FOTOGRÁFICO</P>
                                      <p>CONTEÚDO PROGRAMÁTICO</P>
                                      <p>* Expressão Corporal</p>
                                      <p>* Expressão Facial</p>
                                      <p>* Etiqueta Profissional</p>
                                      <p>* Orientação e Prática para Seleção de Modelagem</p>
                                      <p>* Postura Fotográfica</p>
                                      <p>* Compreensão da Postura</p>
                                    </div>
                                    <div class="certifications-container">
                                      <div><a href="#">Alunos com certificação</a></div>
                                      <div><a href="#">Comentários</a></div>
                                      <div><a href="#">Fotos</a></div>
                                    </div>
                                  <div class="btn-aplly"><span class="apllyIcon"></span><p>CLIQUE AQUI PARA MATRICULAR AGORA</p></div>
                                  <span class="countdown">countdown</span> 
                                </div>
                      
      `;
      window.scrollTo(0, 0);
      break;
    case "curso-maquiagem":
      countdown()
      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `<div class="container-course-description">
                                  <div class="image-course-container"><a href="./media/home/menu-cursos/imgs-cursos/curso-maquiagem.png" target="_blank"><img src="./media/home/menu-cursos/imgs-cursos/curso-maquiagem.png"></a></div>
                                  <div class="description-course"><p>O curso é totalmente on-line. Para obter o certificado, você deverá atingir a nota minima 6,0 na avaliação e completar a carga horária. Para a confecção e envio postal do certificado existe apenas uma taxa de R$ 39.90, que será enviado por e-mail e através dos correios. A solicitação do certificado é opcional e não impedirá você de estudar gratuitamente.</p></div> 
                                  <div class="details-course" onClick="DisplayDetail()"><a href="javascript:void(0)">Mostrar detalhes</a>
                                  </div>
                                  <div class="details-nv-2">
                                      <p>CURSO DE MAQUIAGEM PROFISSIONAL</P>
                                      <p>CONTEÚDO PROGRAMÁTICO</P>
                                      <p>* Preparação da Pele</p>
                                      <p>* Sobracelhas</p>
                                      <p>* Delineador</p>
                                      <p>* Maquiagem Masculina</p>
                                      <p>* Maquiagem Dourada</p>
                                      <p>* Cuidado com as Maquiagens</p>
                                      <p>* Maquiagem para o Dia / Noite / Desfiles</p>
                                      <p>* Maquiagem para Noivas</p>
                                    </div>
                                    <div class="certifications-container">
                                      <div><a href="#">Alunos com certificação</a></div>
                                      <div><a href="#">Comentários</a></div>
                                      <div><a href="#">Fotos</a></div>
                                    </div>
                                  <div class="btn-aplly"><span class="apllyIcon"></span><p>CLIQUE AQUI PARA MATRICULAR AGORA</p></div>
                                  <span class="countdown">countdown</span> 
                                </div>
                      
      `;
      window.scrollTo(0, 0);
      break;
    case "curso-teatro":
      countdown()
      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `<div class="container-course-description">
                                  <div class="image-course-container"><a href="./media/home/menu-cursos/imgs-cursos/curso-teatro.png" target="_blank"><img src="./media/home/menu-cursos/imgs-cursos/curso-teatro.png"></a></div>
                                  <div class="description-course"><p>O curso é totalmente on-line. Para obter o certificado, você deverá atingir a nota minima 6,0 na avaliação e completar a carga horária. Para a confecção e envio postal do certificado existe apenas uma taxa de R$ 79.90, que será enviado por e-mail e através dos correios. A solicitação do certificado é opcional e não impedirá você de estudar gratuitamente.</p></div> 
                                  <div class="details-course" onClick="DisplayDetail()"><a href="javascript:void(0)">Mostrar detalhes</a>
                                  </div>
                                  <div class="details-nv-2">
                                      <p>CURSO DE TEATRO</P>
                                      <p>CONTEÚDO PROGRAMÁTICO</P>
                                      <p>* Oficinas Teatrais</p>
                                      <p>* Conceito Èpico</p>
                                      <p>* Conceito de Teatro Épico</p>
                                      <p>* Conceito de Teatro</p>
                                      <p>* Evolução do Teatro</p>
                                      <p>* Metodologia</p>
                                    </div>
                                    <div class="certifications-container">
                                      <div><a href="#">Alunos com certificação</a></div>
                                      <div><a href="#">Comentários</a></div>
                                      <div><a href="#">Fotos</a></div>
                                    </div>
                                  <div class="btn-aplly"><span class="apllyIcon"></span><p>CLIQUE AQUI PARA MATRICULAR AGORA</p></div>
                                  <span class="countdown">countdown</span> 
                                </div>
                      
      `;
      window.scrollTo(0, 0);
      break;
    case "parceiros":
      if (MediaQueryAjust768.matches === true) {
        ObjectsContainer.Hero.StyleAttributes(
          "height: 3000px !important; visibility:hidden !important; overflow: hidden !important;"
        );
        ObjectsContainer.PopUpMsgContainer.StyleAttributes(
          "height: 3000px !important;"
        );
      }
      if (MediaQueryAjust1322.matches === true) {
        ObjectsContainer.Hero.StyleAttributes(
          "height: 1600px !important; visibility:hidden !important; overflow: hidden !important;"
        );

        ObjectsContainer.PopUpMsgContainer.StyleAttributes(
          "height: 1600px !important;"
        );
      }

      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `
                        <div class="container-parceiros">
                          <div class="texts-parceiros-main">
                            <p id="title-Pmain">CLUBE DE VANTAGENS BRAZIL MODEL AGENCY</p>
                            <p>Clica na logo de nossos parceiros e veja os descontos, ofertas e benefícios que cada um oferece para os alunos da Brazil Model e para os alunos da Faculdade Pitágoras. 
                            Vantagens exclusivas para os estudantes apresentando a carteirinha.<br>
                            Aproveita a grande variedade de promoções, incluindo descontos especiais em cursos de graduação e pós -graduação, artigos, estética, viagens, fest food, restaurantes, hotéis, entretenimento, lazer, diversões e muito mais.</p>
                          </div>
                          <div class="images-container-parceiros">
                            <a href="#" onClick="PopupMsg('pitagoras-propaganda', 'pitagoras-propaganda',1,1)"><img src="./media/parceiros/parceiro1.jpg" alt="parceiro"></a>
                            <a href="#" onClick="PopupMsg('constance-propaganda', 'constance-propaganda', 1, 1)"><img src="./media/parceiros/parceiro2.jpg" alt="parceiro"></a>
                            <a href="#" onClick="PopupMsg('fha-propaganda', 'fha-propaganda', 1, 1)"><img src="./media/parceiros/parceiro3.jpg" alt="parceiro"></a>
                            <a href="#" onClick="PopupMsg('subway-propaganda', 'subway-propaganda', 1, 1)"><img src="./media/parceiros/parceiro5.jpg" alt="parceiro"></a>
                            <img src="./media/parceiros/parceiro7.jpg" alt="parceiro">
                            <img src="./media/parceiros/parceiro8.jpg" alt="parceiro">
                            <a href="#" onClick="PopupMsg('only-propaganda', 'only-propaganda', 1, 1)"><img src="./media/parceiros/only/parceiro9.jpg" alt="parceiro"></a>
                            <img src="./media/parceiros/parceiro11.jpg" alt="parceiro">
                            <a href="#"  onClick="PopupMsg('odonto-propaganda', 'odonto-propaganda',1,1)"><img src="./media/parceiros/parceiro12.jpg" alt="parceiro"></a>
                            <a href="#"  onClick="PopupMsg('contabilidade-propaganda', 'contabilidade-propaganda',1,1)"><img src="./media/parceiros/parceiro13.jpg" alt="parceiro"></a>
                            <a href="#" onClick="PopupMsg('thermas-propaganda', 'thermas-propaganda',1,1)"><img src="./media/parceiros/parceiro14.jpg" alt="parceiro"></a>
                            <a href="#" onClick="PopupMsg('aflorar-propaganda', 'aflorar-propaganda',1,1)"><img src="./media/parceiros/parceiro15.jpg" alt="parceiro"></a>
                            <a href="#"><img src="./media/parceiros/parceiro21.jpg" alt="parceiro"></a>
                            
                            <a href="#" onClick="PopupMsg('hotdog-propaganda', 'hotdog-propaganda',1,1)"><img src="./media/parceiros/parceiro18.jpg" alt="parceiro"></a>
                            <a href="#" onClick="PopupMsg('michellekalil-propaganda', 'michellekalil-propaganda',1,1)"><img src="./media/parceiros/parceiro19.jpg" alt="parceiro"></a>
                            <a href="#"><img src="./media/parceiros/parceiro20.jpg" alt="parceiro"></a>
                            
                            
                          </div>
                        </div>
                      `;
      break;

    case "pitagoras-propaganda":
      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `
                      <div class="propaganda-nv-2">
                        <div class="back-parceiros-prop" onClick="PopupMsg('parceiros', 'parceiros',1,1)" data-link-on ><p>Voltar Parceiros</p></div>
                        <div class="container-propaganda">
                          <div><h3>Pitágoras</h3></div>
                          <div class="images-main">
                            <div class="slider-propaganda">
                              <img src="./media/parceiros/pitagoras/propaganda-pitagoras-1.png" class="imgp-slide show-img" alt="pitagoras">
                              <img src="./media/parceiros/pitagoras/propaganda-pitagoras-2.png" class="imgp-slide" alt="piragoras">
                              <img src="./media/parceiros/pitagoras/propaganda-pitagoras-3.png" class="imgp-slide" alt="pitagoras">
                            </div>
                          </div>
                          <div class="txts-propaganda">
                            <div class="container-text-propa">
                              <p>Faculdade Pitágoras em parceria com a Brazil Model Agency.</p>
                              <p>Gustavo Becari diretor da Brazil Model Agency, consultor de carreira, e promotor educacional, representante da marca Kroton, está      disponibilizando</p>
                              <p>Aos alunos da Brazil model,  e a todos que possuem um sonho de carreira profissional, descontos especiais nos cursos de graduação e pós-graduação nas Faculdades que pertencem ao grupo.</p>
                              <div class="container-logos">
                                <img src="./media/parceiros/pitagoras/faculdades-logos/1.jpg" alt="Faculdade">
                                <img src="./media/parceiros/pitagoras/faculdades-logos/2.jpg" alt="Faculdade">
                                <img src="./media/parceiros/pitagoras/faculdades-logos/3.jpg" alt="Faculdade">
                                <img src="./media/parceiros/pitagoras/faculdades-logos/4.jpg" alt="Faculdade">
                                <img src="./media/parceiros/pitagoras/faculdades-logos/5.jpg" alt="Faculdade">
                                <img src="./media/parceiros/pitagoras/faculdades-logos/6.jpg" alt="Faculdade">
                                <img src="./media/parceiros/pitagoras/faculdades-logos/7.jpg" alt="Faculdade">
                                <img src="./media/parceiros/pitagoras/faculdades-logos/8.jpg" alt="Faculdade"> 
                              </div>
                            
                            <div class="sub-prop-text"><p><b>ESCOLHA A FACULDADE MAIS PRÓXIMA DE VOCÊ</b></p>
                            <p>Não perca tempo, contacte a Brazil Model e matrícula -se já!</p></div><div>
                            
                            <div class="contact-watsapp">
                            <div class="contact-watsapp-icons" style="display: none;">
                                <a href="https://api.whatsapp.com/send?phone=5531994530485"><img src="./media/IconSocial/IwatsappColor.png"></a>
                                <p>Entre em contato com nosso consultor de carreira</p>
                                <p>Whatsapp</p>
                              </div>
                            <select id="states-select" name="select-state" onchange="selectedState('pitagoras')">
                              <option>Selecione um estado...</option>
                              <option value="ac">AC</option>
                              <option value="al">AL</option>
                              <!--<option value="ap">AP</option>-->
                              <!--<option value="am">AM</option>-->
                              <option value="ba">BA</option>
                              <option value="ce">CE</option>
                              <!--<option value="df">DF</option>-->
                              <option value="es">ES</option>
                              <option value="go">GO</option>
                              <option value="ma">MA</option>
                              <!--<option value="mt">MT</option>-->
                              <!--<option value="ms">MS</option>-->
                              <option value="mg">MG</option>
                              <option value="pa">PA</option>
                              <option value="pb">PB</option>
                              <option value="pr">PR</option>
                              <option value="pe">PE</option>
                              <!--<option value="pi">PI</option>-->
                              <!--<option value="rj">RJ</option>-->
                              <option value="rn">RN</option>
                              <!--<option value="rs">RS</option>-->
                              <!--<option value="ro">RO</option>-->
                              <!--<option value="rr">RR</option>-->
                              <!--<option value="sc">SC</option>-->
                              <!--<option value="sp">SP</option>-->
                              <!--<option value="se">SE</option>-->
                              <!--<option value="to">TO</option>-->
                            </select>
                              <div class="list-states"></div>
                            </div>
                          </div>

                        </div>
                        </div>
                      `;
      setTimeout(slideParceiros(), 500);
      break;
    case "constance-propaganda":
      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `
                      <div class="propaganda-nv-2">
                        <div class="back-parceiros-prop" onClick="PopupMsg('parceiros', 'parceiros',1,1)" data-link-on ><p>Voltar Parceiros</p></div>
                        <div class="container-propaganda">
                          <div class="images-main flex-d-column">
                            <a href="https://www.constance.com.br"> <img class="logo-cost" src='./media/parceiros/constance-logo-nova.png' ></a>
                           <iframe src="https://www.youtube.com/embed/s5sBoWJ41vM?autoplay=1&amp;mute=1&amp;controls=0&amp;loop=1&amp;rel=0&amp;version=3&amp;playlist=diGLn0kUPXk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                          </div>
                          <div class="txts-propaganda">
                            <div id="const-link"><a href="https://www.constance.com.br/"><b>www.constance.com.br</b></a></div>
                            <div class="container-text-propa"><p>Vá em uma loja constance com sua carteirinha de estudante Brazil Model Agency ou Faculdade Pitágoras e confira as vantagens que só você tem.</p><div>

                              </div>
                            </div>
                          </div>

                        </div>
                        </div>
                      `;

      break;
    case "fha-propaganda":

      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `
                       <div class="propaganda-nv-2">
                        <div class="back-parceiros-prop" onClick="PopupMsg('parceiros', 'parceiros',1,1)" data-link-on ><p>Voltar Parceiros</p></div>
                        <div class="container-propaganda" style="max-width: 100% !important;">
                           <div class="fha-prop-container">
                            <p>Fundação Helena Antipoff em parceria com a Brazil Model Agency, oferecem curso gratuito de Modelo e Manequim.</p>
                            <div class="container-img-fha">
                              <img src="./media/parceiros/fha/fha-propaganda-1.jpg" alt="propaganda-fha">
                              <img src="./media/parceiros/fha/fha-propaganda-2.jpg" alt="propaganda-fha">
                              <img src="./media/parceiros/fha/fha-propaganda-3.jpg" alt="propaganda-fha">
                              <img src="./media/parceiros/fha/fha-propaganda-4.jpg" alt="propaganda-fha">
                              <img src="./media/parceiros/fha/fha-propaganda-5.jpg" alt="propaganda-fha">
                              <img src="./media/parceiros/fha/fha-propaganda-6.jpg" alt="propaganda-fha">
                            </div>
                            <p id="fha-description-course">Curso de Modelo e Manequim com objetivo de trabalhar postura, técnica, desenvolvimento em passarela, noções de vestuário, noções de uma vida saudável e principalmente formar modelos e manequins, além de auxiliar o desenvolvimento pessoal em situações cotidianas.  Ao final do curso, o aluno estará capacitado, atualizado e alinhado no mundo da moda, beleza e publicidade. Podendo assim com o certificado de conclusão do curso de modelo em mãos, dar entrada ao seu registro para adquirir o DRT e se tornar um modelo profissional.</p>
                            <div class="contact-watsapp-icons">
                                <p>Para maiores informações: <a href="https://api.whatsapp.com/send?phone=5531994530485"><img src="./media/IconSocial/IwatsappColor.png"></a></p>
                              </div>
                            <p> Acesse: <a href="http://www.fha.mg.gov.br/">www.fha.mg.gov.br</a></p>
                           </div>

                        </div>
                        </div>
                      `;

      break;
    case "only-propaganda":
      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `
                      <div class="propaganda-nv-2">
                        <div class="back-parceiros-prop" onClick="PopupMsg('parceiros', 'parceiros',1,1)" data-link-on ><p>Voltar Parceiros</p></div>
                        <div class="container-propaganda images-main-only">
                          
                            <a href="https://www.instagram.com/oonlyexclusive_oficial/"> <img class="logo-cost" src='./media/parceiros/only/parceiro10.jpg' ></a>
                          

                        </div>
                        </div>
                      `;
      break;
    case "contabilidade-propaganda":
      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `
                      <div class="propaganda-container-2 propaganda-nv-2">
                        <div class="back-parceiros-prop" onClick="PopupMsg('parceiros', 'parceiros',1,1)" data-link-on ><p>Voltar Parceiros</p></div>
                        <div class="container-propaganda images-main-contabilidade">
                          
                            <a href="https://www.comaecontabilidade.com.br/"> <img class="logo-cost" src='./media/parceiros/propaganda-contabilidade.jpg' ></a>
                          

                        </div>
                        <div class="contabilidade-texts">
                          <p>Precisando abrir uma empresa? Não deixe de fazer um orçamento na COMAE CONTABILIDADE.</p>
                          <p>Alunos da Brazil Model Agency e da Faculdade Pitágoras indicando pessoas para abertura de empresas com a COMAE CONTABILIDADE  receberá 10% do valor contratado e os indicados terão  desconto de 10% sobre o valor do contrato.</p>
                          <p>Escritório de contabilidade de  confiança a 12 anos no mercado tomando conta  das melhores empresas de Belo Horizonte, Contagem e região com segurança e agilidade.</p>
                        </div>
                        </div>
                      `;
      break;
    case "thermas-propaganda":
      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `
                      <div class="propaganda-container-2 propaganda-nv-2">
                        <div class="back-parceiros-prop" onClick="PopupMsg('parceiros', 'parceiros',1,1)" data-link-on ><p>Voltar Parceiros</p></div>
                        <div class="images-main">
              
                          <iframe src="https://www.youtube.com/embed/s6fNWA5HtG0?autoplay=1&amp;mute=1&amp;controls=0&amp;loop=1&amp;rel=0&amp;version=3&amp;playlist="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

                        </div>
                        <div class="contabilidade-texts" style="margin: 20px 0 30px 0;">
                          <p style="text-align: center;"><b>Thermas dos Laranjais</b></p>
                          <p>Faça sua reserva e venha conhecer o melhor parque aquático do estado de São Paulo.</p>
                          <p>Park Thermas Resort.</p>
                          <p>Um clube  completo, descanso e Lazer para sua família e amigos.</p>
                          <p>Alunos da Brazil Model Agency e da Faculdade Pitágoras pagam meia entrada.</p>
                          </div>
                        </div>
                      `;
      break;
    case "aflorar-propaganda":
      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `
                      <div class="propaganda-nv-2">
                        <div class="back-parceiros-prop" onClick="PopupMsg('parceiros', 'parceiros',1,1)" data-link-on ><p>Voltar Parceiros</p></div>
                        <div class="container-propaganda images-main-only">
                          
                            <a href="https://www.instagram.com/oonlyexclusive_oficial/"> <img class="logo-cost" src='./media/parceiros/propaganda-aflorar.jpg' ></a>
                          

                        </div>
                        <div class="contabilidade-texts" style="margin: 20px 0 30px 0;">
                          <p>Aflorar Personalizados e Costura Criativa esta esperando por você.

                          Visite nossa página no instagran e conheçam nossos trabalhos.
                          
                          Desconto de 33% em qualquer produto personalizados com apresentação de sua carteirinha da Brazil Model Agency  e faculdade pitagoras.</p>
                          </div>
                        </div>
                        <div class="contact-watsapp-icons">
                                <p style="font-size: 18px; color: black;">Para maiores informações: <a href="https://api.whatsapp.com/send?phone=5531988971990"><img src="./media/IconSocial/IwatsappColor.png"></a></p>
                              </div>
                        </div>
                      `;
      break;
    case "subway-propaganda":
      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `
                      <div class="propaganda-nv-2">
                        <div class="back-parceiros-prop" onClick="PopupMsg('parceiros', 'parceiros',1,1)" data-link-on ><p>Voltar Parceiros</p></div>
                        <div class="container-propaganda">
                          <div><h3>SUBWAY</h3></div>
                          <div class="images-main">
                            
                              <img src="./media/parceiros/parceiro5.jpg" alt="subway">
                            
                          </div>
                          <div class="txts-propaganda">
                            <div class="container-text-propa">
                              <p>Vá em um Subway parceiro do Clube de vantagens Brazil Model e não esqueça de  levar a sua carteirinha de estudante da Brazil Model Agency, Faculdade  Pitágoras ou da Unopar.</p>
                              <p>Eles oferecem 10% de desconto para compras presencial, não vale para compras em delivery.</p>
                              <p>Só terá o desconto mediante a apresentação da carteirinha.</p>
                              <p>Lembre-se que sanduíches promocionais, como o Baratíssimo, Barato do dia e Pop Subway, e promoções que estiverem ocorrendo não fazem parte dos valores especiais, pois já estão com descontos e o desconto não é acumulativo.</p>
          
                            </div>
                            <div class="sub-prop-text"><p><b>Olha em baixo os endereços dos subway parceiros.</b></p>
                            </div><div>
                            
                            <div class="contact-watsapp">
                            
                            <select id="states-select" name="select-state" onchange="selectedState('subway')">
                              <option>Selecione um estado...</option>
                              <option value="mg">MG</option>
                              
                            </select>
                              <div class="list-states"></div>
                            </div>
                          </div>

                        </div>
                        </div>
                      `;
      break;
    case "odonto-propaganda":
      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `
                      <div class="propaganda-nv-2">
                        <div class="back-parceiros-prop" onClick="PopupMsg('parceiros', 'parceiros',1,1)" data-link-on ><p>Voltar Parceiros</p></div>
                        <div class="container-propaganda">
                          <div><h3>CLÍNICA ODONTOLÓGICA ODONTOCOMPANY</h3></div>
                          <div class="images-main">
                            
                              <img src="./media/parceiros/parceiro12.jpg" alt="odonto">
                            
                          </div>
                          <div class="txts-propaganda">
                            <div class="container-text-propa">
                              <p>A OdontoCompany é uma rede de franquias de Clínicas Odontológicas completa, atendendo diversas áreas da odontologia atual e moderna!</p>
                              <p>Somos conhecidos por nossos pacientes, principalmente pelos resultados obtidos por nossos dentistas no restabelecimento dos sorrisos, através das avançadas técnicas de dentística e implantodontia, utilizando a mais alta tecnologia, com segurança e conforto em todas as etapas do tratamento.</p>
                              <p>Só terá o desconto mediante a apresentação da carteirinha.</p>
                            </div>
                            <div class="sub-prop-text"><p><b>Escolha a clínica  de sua preferência  parceira com o clube de vantagens.</b></p>
                            </div><div>
                            
                            <div class="contact-watsapp">

                            <select id="states-select" name="select-state" onchange="selectedState('odonto')">
                              <option>Selecione um estado...</option>
                              <option value="mg">MG</option>
                            </select>
                              <div class="list-states"></div>
                            </div>
                          </div>

                        </div>
                        </div>
                      `;
      break;
    case "smartfit-propaganda":
      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `
                      <div class="propaganda-nv-2">
                        <div class="back-parceiros-prop" onClick="PopupMsg('parceiros', 'parceiros',1,1)" data-link-on ><p>Voltar Parceiros</p></div>
                        <div class="container-propaganda">
                          <div><h3>SMART FIT</h3></div>
                          <div class="images-main">
                            
                              <img src="./media/parceiros/parceiro16.jpg" alt="smartfit">
                            
                          </div>
                          <div class="txts-propaganda">
                            <div class="container-text-propa">
                              <p>A Smart Fit é a 5º maior rede de academias esportivas do mundo e a maior da América Latina, com mais de 800 unidades no Brasil e outros 10 países da região, além de ter mais de 1,5 milhões de clientes matriculados.</p>
                              <p>Alunos da Brazil Model ou da Rede Educacional da Kroton (Amplo, Anhanguera, Fama, Pitágoras, Uni, Uniderp, Unime e Unopar), tem descontos especiais.</p>
                              <p>Só terá o desconto mediante a apresentação da carteirinha.</p>
                            </div>
                            <div class="sub-prop-text"><p><b>Escolha a academia de sua preferência.</b></p>
                            </div><div>
                            
                            <div class="contact-watsapp">
                            <div class="contact-watsapp-icons" style="display: none;">
                                <a href="https://api.whatsapp.com/send?phone=5531994530485"><img src="./media/IconSocial/IwatsappColor.png"></a>
                                <p>Entre em contato com nosso consultor de carreira</p>
                                <p>Whatsapp</p>
                              </div>
                            <select id="states-select" name="select-state" onchange="selectedState('smartfit')">
                              <option>Selecione um estado...</option>
                              
                            </select>
                              <div class="list-states"></div>
                            </div>
                          </div>

                        </div>
                        </div>
                      `;
      break;
    case "hotdog-propaganda":
      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `
                        <div class="propaganda-nv-2">
                          <div class="back-parceiros-prop" onClick="PopupMsg('parceiros', 'parceiros',1,1)" data-link-on ><p>Voltar Parceiros</p></div>
                          <div class="container-propaganda">
                            <div><h3>HOT DOG</h3></div>
                            <div class="images-main">
                              
                                <img src="./media/parceiros/parceiro17.jpg" alt="hot dog">
                              
                            </div>
                            <div class="txts-propaganda">
                              <div class="container-text-propa">
                                <p></p>
                              </div>
                              <div class="sub-prop-text"><p></p>
                              </div><div>
                              
                              <div class="contact-watsapp">
                              <div class="contact-watsapp-icons" style="display: flex;">
                                  <a href="https://api.whatsapp.com/send?phone=5517988254897"><img src="./media/IconSocial/IwatsappColor.png"></a>
                                  <p>Entre em contato com a gente!</p>
                                  <p>Whatsapp</p>
                                </div>
                              <!--<select id="states-select" name="select-state" onchange="selectedState('smartfit')">
                                <option>Selecione um estado...</option>
                                
                              </select>-->
                                <div class="list-states"></div>
                              </div>
                            </div>
  
                          </div>
                          </div>
                        `;
      break;
    case "michellekalil-propaganda":
      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `
                          <div class="propaganda-nv-2">
                            <div class="back-parceiros-prop" onClick="PopupMsg('parceiros', 'parceiros',1,1)" data-link-on ><p>Voltar Parceiros</p></div>
                            <div class="container-propaganda">
                              <div><h3>MICHELLE KALIL</h3></div>
                              <div class="images-main">
                                
                                  <img src="./media/parceiros/parceiro19.jpg" alt="michelle kalil">
                                
                              </div>
                              <div class="txts-propaganda">
                                <div class="container-text-propa">
                                  <p>Venha comprar o perfume dos seus sonhos na Fragrância Michelle Kalil Oficial.
                                  Temos todos para oferece-lo</p>                                
                                  <p>Apresentando a carteirinha da Brazil Model ou Faculdade Pitagoras tem 5% de desconto.</p>
                                  <p><b>@fragranciamichellekaliloficial</b></p>
                                </div>
                                <div class="sub-prop-text"><p><b></b></p>
                                </div><div>
                                
                                <div class="contact-watsapp">
                                  <div class="contact-watsapp-icons" style="display: none;">
                                      <a href="https://api.whatsapp.com/send?phone=5531994530485"><img src="./media/IconSocial/IwatsappColor.png"></a>
                                      <p>Entre em contato com a gente</p>
                                      <p>Whatsapp</p>
                                    </div>
                                    <select id="states-select" name="select-state" onchange="selectedState('michellekalil')">
                                      <option>Selecione um estado...</option>
                                      <option value="mg">MG</option>
                                        
                                    </select>
                                    <div class="list-states"></div>
                                </div>
                              </div>
    
                            </div>
                            </div>
                          `;
      break;
    case "marcusvinicius-propaganda":
      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `
                            <div class="propaganda-nv-2">
                              <div class="back-parceiros-prop" onClick="PopupMsg('parceiros', 'parceiros',1,1)" data-link-on ><p>Voltar Parceiros</p></div>
                              <div class="container-propaganda">
                                <div><h3>SMART FIT</h3></div>
                                <div class="images-main">
                                  
                                    <img src="./media/parceiros/parceiro16.jpg" alt="smartfit">
                                  
                                </div>
                                <div class="txts-propaganda">
                                  <div class="container-text-propa">
                                    <p>A Smart Fit é a 5º maior rede de academias esportivas do mundo e a maior da América Latina, com mais de 800 unidades no Brasil e outros 10 países da região, além de ter mais de 1,5 milhões de clientes matriculados.</p>
                                    <p>Alunos da Brazil Model ou da Rede Educacional da Kroton (Amplo, Anhanguera, Fama, Pitágoras, Uni, Uniderp, Unime e Unopar), tem descontos especiais.</p>
                                    <p>Só terá o desconto mediante a apresentação da carteirinha.</p>
                                  </div>
                                  <div class="sub-prop-text"><p><b>Escolha a academia de sua preferência.</b></p>
                                  </div><div>
                                  
                                  <div class="contact-watsapp">
                                  <div class="contact-watsapp-icons" style="display: none;">
                                      <a href="https://api.whatsapp.com/send?phone=5531994530485"><img src="./media/IconSocial/IwatsappColor.png"></a>
                                      <p>Entre em contato com nosso consultor de carreira</p>
                                      <p>Whatsapp</p>
                                    </div>
                                  <select id="states-select" name="select-state" onchange="selectedState('smartfit')">
                                    <option>Selecione um estado...</option>
                                    
                                  </select>
                                    <div class="list-states"></div>
                                  </div>
                                </div>
      
                              </div>
                              </div>
                            `;
      break;
    case 'models':
      popupCategory.style.backgroundColor = "white";
      //put content in function showModelByCategory()
      containerImgs.innerHTML = "";

      break;
    default:
      break;
  }

  if (classCloseMenu) {
    CloseAllMenus()
  }
}

function CloseAllMenus() {
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

function DisplayDetail() {
  var Detailnv2 = document.querySelector('.details-nv-2')
  var contentDetail = document.querySelector('.details-nv-2 > p')
  if (Detailnv2 !== null) {
    if (Detailnv2.classList.contains('heightTransition')) {
      Detailnv2.classList.remove('heightTransition')

    }
    else {

      Detailnv2.classList.add('heightTransition')
    }

    //Detailnv2.setAttribute('style', 'transition:height 0;')
    //Detailnv2.classList.toggle('display-none-content')
  }
}

function selectedState(title) {
  let Selected = document.querySelector("#states-select");
  let divList = document.querySelector(".list-states");
  // let HeroContainer = document.querySelector(".hero");
  // let ContainerPopUp = document.querySelector(".container-popup-mgs");
  // let ContainerImgs = document.querySelector(".container-imgs");
  let SocialWhatsapp = document.querySelector(".contact-watsapp-icons");
  if (SocialWhatsapp) SocialWhatsapp.setAttribute("style", "display: flex");

  var ObjectsContainer = {
    Hero: {
      ref: document.querySelector(".hero"),
      StyleAttributes(height) {
        /*this.ref.setAttribute(
          "style",
          `height: ${height}px; visibility: hidden !important; `
        );*/
      },
    },
    PopUpMsgContainer: {
      ref: document.querySelector(".container-popup-mgs"),
      refImgs: document.querySelector(".container-imgs"),
      CopyContainer(copy) {
        //this.refImgs.setAttribute("style", `height: ${copy}px !important;`);
      },
      StyleAttributes(Style) {
        //this.ref.setAttribute("style", `height: ${Style}px !important;`);
        //this.CopyContainer(Style);
      },
    },
    AllContainerMsgPopUp: {
      SetHeight(height) {
        ObjectsContainer.Hero.StyleAttributes(height + 500);
        ObjectsContainer.PopUpMsgContainer.StyleAttributes(height + 600);
      },
    },
  };
  ObjectsContainer.AllContainerMsgPopUp.SetHeight(1500);
  divList.setAttribute("style", "overflow-y: hidden;");
  if (title === 'pitagoras') {
    switch (Selected.value) {
      case "ac":
        divList.innerHTML = `
        <li>
          <p><b>RIO BRANCO/AC</b></p>
          <p id="end-id">Estrada do São Francisco, S/N, Baixa da Colina, - Rio Branco - AC</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
                            `;
        break;
      case "al":
        divList.innerHTML = `
        <li>
          <p><b>ARAPIRACA/AL</b></p>
          <p id="end-id">Rua Domingos Correia, nº 1461, São Luiz, - Arapiraca - AL</p>
          <p>Presencial</p>
        </li>
        <li>
          <p><b>MACEIO/AL</b></p>
          <p id="end-id">AVENIDA MENINO MARCELO, 3800, CIDADE UNIVERSITÁRIA - MACEIÓ - AL</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
                            `;
        break;
      case "ap":
        ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
        divList.innerHTML = `
        
          <p id="not-found"><b>NÃO ENCONTRADO</b></p>
        
                            `;
        break;
      case "am":
        ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
        divList.innerHTML = `
        
          <p id="not-found"><b>NÃO ENCONTRADO</b></p>
        
                            `;
        break;
      case "ba":
        divList.setAttribute("style", "overflow-y: scroll;");
        divList.innerHTML = `
        <li>
          <p><b>ALAGOINHAS/BA</b></p>
          <p id="end-id">Rua Lauro de Freitas, nº 198, Centro, - Alagoinhas - BA</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
        <li>
          <p><b>BOM JESUS DA LAPA/BA</b></p>
          <p id="end-id">Av.: Manoel Novais, nº 1499 , Centro, - Bom Jesus da Lapa - BA</p>
          <p>Presencial</p>
        </li>
        <li>
          <p><b>BRUMADO/BA</b></p>
          <p id="end-id">RUA EUGENIA DANTAS DE ARAUJO, 55, BAIRRO DO HOSPITAL - BRUMADO - BA</p>
          <p>Presencial</p>
        </li>
        <li>
          <p><b>CAMAÇARI/BA</b></p>
          <p id="end-id">V PARAFUSO, S/N, INDUSTRIAL - CAMAÇARI - BA</p>
          <p>Semipresencial | A distância</p>
        </li>
        <li>
          <p><b>EUNAPOLIS/BA</b></p>
          <p id="end-id">Rua Edgar Trancoso, nº 21, Edgar Trancoso, - Eunápolis - BA</p>
          <p>Presencial</p>
      </li>
      <li>
        <p><b>FEIRA DE SANTANA/BA</b></p>
        <p id="end-id">AVENIDA JOSE FALCAO DA SILVA, 1283, QUEIMADINHA - FEIRA DE SANTANA - BA</p>
        <p>Semipresencial | A distância | Presencial</p>
     </li>
     <li>
      <p><b>GUANAMBI/BA</b></p>
      <p id="end-id">Avenida Pedro Braz dos Santos, nº 350, Belo Horizonte, - Guanambi - BA</p>
      <p>Presencial</p>
    </li>
    <li>
      <p><b>IRECE/BA</b></p>
      <p id="end-id">RUA MARIA DA CONCEICAO LORDELO NUNES, 87, CENTRO - IRECÊ - BA</p>
      <p>Semipresencial | A distância | Presencial</p>
    </li>
    <li>
      <p><b>JEQUIE/BA</b></p>
      <p id="end-id">AVENIDA GOVERNADOR LOMANTO JUNIOR, 1571, JOAQUIM ROMAO - JEQUIÉ - BA</p>
      <p>Semipresencial | A distância | Presencial</p>
    </li>
    <li>
      <p><b>LUIS EDUARDO MAGALHAES/BA</b></p>
      <p id="end-id">Avenida Kiichiro Murata, 343, Jardim Imperial, - Luís Eduardo Magalhães - BA</p>
      <p>Presencial</p>
    </li>
    <li>
      <p><b>SANTO ANTONIO DE JESUS/BA</b></p>
      <p id="end-id">PRACA FELIX GASPAR, 1, CENTRO - SANTO ANTÔNIO DE JESUS - BA</p>
      <p>Semipresencial | A distância | Presencial</p>
    </li>
    <li>
      <p><b>SERRINHA/BA</b></p>
      <p id="end-id">RUA AVENIDA GETULIO VARGAS, 1585, ESTACAO - SERRINHA - BA</p>
      <p>Semipresencial | A distância | Presencial</p>
    </li>
    <li>
      <p><b>TEIXEIRA DE FREITAS/BA</b></p>
      <p id="end-id">AVENIDA JUSCELINO KUBITSCHEK, 3000, MONTE CASTELO - TEIXEIRA DE FREITAS - BA</p>
      <p>Semipresencial | A distância | Presencial</p>
    </li>
    <li>
      <p><b>VITORIA DA CONQUISTA/BA</b></p>
      <p id="end-id">AVENIDA JURACY MAGALHAES, 3000, BOA VISTA - VITÓRIA DA CONQUISTA - BA</p>
      <p>Semipresencial | A distância | Presencial</p>
    </li>
                            `;
        break;
      case "ce":
        divList.innerHTML = `
        <li>
          <p><b>ARACATI/CE</b></p>
          <p id="end-id">Rodovia CE 040 - KM 138, S/N, Aeroporto, S/N - Aracati - CE</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
        <li>
          <p><b>FORTALEZA/CE - EDUFOR</b></p>
          <p id="end-id">Rua Carapinima, nº 1615, Benfica, - Fortaleza - CE</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
        <li>
          <p><b>FORTALEZA/CE - FATECI</b></p>
          <p id="end-id">Rua Barão de Aratanha, nº 51, Centro, - Fortaleza - CE</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
        <li>
          <p><b>JUAZEIRO DO NORTE/CE</b></p>
          <p id="end-id">AV. PADRE CICERO ESQ. C/ RUA FRANCISCO MARTINS DE SOUZA, S/N, SÃO JOSÉ - JUAZEIRO DO NORTE - CE</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
        <li>
          <p><b>SOBRAL/CE</b></p>
          <p id="end-id">AVENIDA MONSENHOR JOSE ALOISIO PINTO, 300, DOM EXPEDITO - SOBRAL - CE</p>
          <p>Semipresencial | A distância | Presencial</p>
      </li>
                            `;
        break;
      case "df":
        ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
        divList.innerHTML = `
        
        <p id="not-found"><b>NÃO ENCONTRADO</b></p>
      
                          `;
        break;
      case "es":
        divList.innerHTML = `
        <li>
          <p><b>CACHOEIRO DE ITAPEMIRIM/ES</b></p>
          <p id="end-id">AVENIDA JONES DOS SANTOS NEVES, 256, MARIA ORTIZ - CACHOEIRO DE ITAPEMIRIM - ES</p>
          <p>Semipresencial | A distância</p>
        </li>
        <li>
          <p><b>GUARAPARI/ES</b></p>
          <p id="end-id">Rodovia Jones dos Santos Neves, 1000, Lagoa Funda, - Guarapari - ES</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
        <li>
          <p><b>LINHARES/ES</b></p>
          <p id="end-id">Av. São Mateus, 1458, Araçá, - Linhares - ES</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
        <li>
          <p><b>SERRA/ES</b></p>
          <p id="end-id">Rua Nelcy Lopes Vieira, nº 199, Jardim Limoeiro, - Serra - ES</p>
          <p>Presencial</p>
        </li>
                            `;
        break;
      case "go":
        divList.innerHTML = `
        <li>
          <p><b>GOIANIA/GO</b></p>
          <p id="end-id">AVENIDA MUTIRAO, S/N, SETOR BUENO - GOIÂNIA - GO</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
                            `;
        break;
      case "ma":
        divList.innerHTML = `
        <li>
          <p><b>BACABAL/MA</b></p>
          <p id="end-id">RUA DOZE DE OUTUBRO, 377, CENTRO - BACABAL - MA</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
        <li>
          <p><b>IMPERATRIZ/MA - CAMPUS 1</b></p>
          <p id="end-id">Rua Godofredo Viana, 1271, São José do Egito, - Imperatriz - MA</p>
          <p>Presencial</p>
        </li>
        <li>
          <p><b>SAO LUIS/MA - COHAMA</b></p>
          <p id="end-id">Avenida São Luís Rei de França, 32, Turu, - São Luís - MA</p>
          <p>Presencial</p>
        </li>
        <li>
          <p><b>SAO LUIS/MA - TURU</b></p>
          <p id="end-id">Avenida São Luís Rei de França, 59, Turu, - São Luís - MA</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
                            `;
        break;
      case "mt":
        ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
        divList.innerHTML = `
        
        <p id="not-found"><b>NÃO ENCONTRADO</b></p>
      
                          `;
        break;
      case "ms":
        ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
        divList.innerHTML = `
        
        <p id="not-found"><b>NÃO ENCONTRADO</b></p>
      
                          `;
        break;
      case "mg":
        divList.setAttribute("style", "overflow-y: scroll;");
        divList.innerHTML = `
        <li>
          <p><b>BELO HORIZONTE/MG - AFONSO PENA</b></p>
          <p id="end-id">Av. Afonso Pena, 1901, Funcionários, - Belo Horizonte - MG</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
        <li>
          <p><b>BELO HORIZONTE/MG - ANTONIO CARLOS</b></p>
          <p id="end-id">AV. PRESIDENTE ANTONIO CARLOS, 4157, SÃO FRANCISCO - BELO HORIZONTE - MG</p>
          <p>Presencial</p>
        </li>
        <li>
          <p><b>BELO HORIZONTE/MG - BARREIRO</b></p>
          <p id="end-id">RUA CABO VALERIO SANTOS, 297, BARREIRO - BELO HORIZONTE - MG</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
        <li>
          <p><b>BELO HORIZONTE/MG - CIDADE ACADEMICA</b></p>
          <p id="end-id">RUA SANTA MADALENA SOFIA, 25, (VILA PARIS) CIDADE JARDIM - BELO HORIZONTE - MG</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
        <li>
          <p><b>BELO HORIZONTE/MG - GUAJAJARAS</b></p>
          <p id="end-id">RUA GUAJAJARAS, 591, CENTRO - BELO HORIZONTE - MG</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
        <li>
          <p><b>BELO HORIZONTE/MG - RAJA</b></p>
          <p id="end-id">Av. Raja Gabaglia, 1306, Gutierrez , - Belo Horizonte - MG</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
        <li>
          <p><b>BELO HORIZONTE/MG - TIMBIRAS</b></p>
          <p id="end-id">R. Timbiras, 1375, Funcionários, - Belo Horizonte - MG</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
        <li>
          <p><b>BELO HORIZONTE/MG - VENDA NOVA</b></p>
          <p id="end-id">R. Padre Pedro Pinto, 1315, Venda Nova, - Belo Horizonte - MG</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
        <li>
          <p><b>BETIM/MG</b></p>
          <p id="end-id">AVENIDA JUSCELINO KUBITSCHECK, 229, CENTRO - BETIM - MG</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
        <li>
          <p><b>CONTAGEM/MG</b></p>
          <p id="end-id">Avenida Babita Camargos, 1295, - Contagem - MG</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
        <li>
          <p><b>DIVINOPOLIS/MG</b></p>
          <p id="end-id">R. Santos Dumont, 1001, Bairro Do Carmo, - Divinópolis - MG</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
        <li>
          <p><b>GOVERNADOR VALADARES/MG</b></p>
          <p id="end-id">Av. Doutor Raimundo Monteiro de Rezende, 330, Centro, - Governador Valadares - MG</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
        <li>
          <p><b>IPATINGA/MG - CIDADE NOBRE</b></p>
          <p id="end-id">Av. Carlos Chagas, 789 , Cidade Nobre, - Ipatinga - MG</p>
          <p>Presencial</p>
        </li>
        <li>
          <p><b>IPATINGA/MG - HORTO</b></p>
          <p id="end-id">RUA JEQUITIBA, 401, HORTO - IPATINGA - MG</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
        <li>
          <p><b>ITABIRA/MG</b></p>
          <p id="end-id">RUA SANTANA, 235, PENHA - ITABIRA - MG</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
        <li>
          <p><b>JUIZ DE FORA/MG</b></p>
          <p id="end-id">AVENIDA BARAO DO RIO BRANCO, 2572, CENTRO - JUIZ DE FORA - MG</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
        <li>
          <p><b>POCOS DE CALDAS/MG</b></p>
          <p id="end-id">Av João Pinheiro, 1046, Centro, - Poços de Caldas - MG</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
        <li>
          <p><b>POUSO ALEGRE/MG</b></p>
          <p id="end-id">Praça Dom Otávio, nº 270, Centro, - Pouso Alegre - MG</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
        <li>
          <p><b>RIBEIRAO DAS NEVES/MG</b></p>
          <p id="end-id">Rua Ari Teixeira da Costa, nº 1500, Savassi, - Ribeirão das Neves - MG</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
        <li>
          <p><b>UBERLANDIA/MG</b></p>
          <p id="end-id">AVENIDA DOS VINHEDOS, 1200, MORADA DA COLINA - UBERLÂNDIA - MG</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
                            `;
        break;
      case "pa":
        divList.innerHTML = `
        <li>
          <p><b>ALTAMIRA/PA</b></p>
          <p id="end-id">Avenida Tancredo Neves, nº 3414, Premem, - Altamira - PA</p>
          <p>Presencial</p>
        </li>
        <li>
        <p><b>MARABA/PA - METROPOLITANA</b></p>
        <p id="end-id">ROD BR 230, KM 7, NOVA MARABÁ - MARABÁ - PA</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
      <p><b>PARAGOMINAS/PA</b></p>
      <p id="end-id">Rua Lameira Bittencourt, nº 523, Célio Miranda, - Paragominas - PA</p>
      <p>Presencial</p>
      </li>
      <li>
        <p><b>PARAGOMINAS/PA - METROPOLITANA</b></p>
        <p id="end-id">ROD PA 256 KM 05, S/ NÚMERO, ZONA RURAL - PARAGOMINAS - PA</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
      <p><b>PARAUAPEBAS/PA - METROPOLITANA</b></p>
      <p id="end-id">ROD PA 160 KM 10, S/ NÚMERO, ZONA RURAL - PARAUAPEBAS - PA</p>
      <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
      <p><b>SANTAREM/PA</b></p>
      <p id="end-id">Av. Engenheiro Fernando Guilhon, S/N, Santarenzinho, Rio Tapajós Shopping - Santarém - PA</p>
      <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
      <p><b>TUCURUI/PA</b></p>
      <p id="end-id">A, Jardim Paraíso, - Tucuruí - PA</p>
      <p>Semipresencial | A distância | Presencial</p>
      </li>
  
                            `;
        break;
      case "pb":
        divList.innerHTML = `
        <li>
          <p><b>CAMPINA GRANDE/PB</b></p>
          <p id="end-id">Rua Marquês do Herval, nº 39, Centro, - Campina Grande - PB</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
        <li>
        <p><b>JOAO PESSOA/PB</b></p>
        <p id="end-id">RUA ORLANDO SOARES DE OLIVEIRA, 36, MIRAMAR - JOÃO PESSOA - PB</p>
        <p>Semipresencial | A distância</p>
      </li>
                            `;
        break;
      case "pr":
        divList.innerHTML = `
        <li>
          <p><b>LONDRINA/PR - PITAGORAS</b></p>
          <p id="end-id">RUA EDWY TAQUES DE ARAUJO, 1100, GLEBA PALHANO - LONDRINA - PR</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
                            `;
        break;
      case "pe":
        divList.innerHTML = `
        <li>
          <p><b>BELO JARDIM/PE</b></p>
          <p id="end-id">Rua Doutor Henrique Nascimento, nº 41, São Pedro , - Belo Jardim - PE</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
        <li>
          <p><b>CARUARU/PE</b></p>
          <p id="end-id">AVENIDA CLETO CAMPELO, 36, MAURICIO DE NASSAU - CARUARU - PE</p>
          <p>Semipresencial | A distância</p>
        </li>
        <li>
          <p><b>JABOATAO DOS GUARARAPES/PE</b></p>
          <p id="end-id">RUA AURORA DINIZ CARNEIRO LEAO, 5281, CANDEIAS - JABOATÃO DOS GUARARAPES - PE</p>
          <p>Semipresencial | A distância | Presencial</p>
        </li>
                            `;
        break;
      case "pi":
        ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
        divList.innerHTML = `
        
          <p id="not-found"><b>NÃO ENCONTRADO</b></p>
        
                            `;
        break;
      case "rj":
        ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
        divList.innerHTML = `
        
        <p id="not-found"><b>NÃO ENCONTRADO</b></p>
      
                          `;
        break;
      case "rn":
        ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
        divList.innerHTML = `
        <li>
          <p><b>MOSSORO/RN</b></p>
          <p id="end-id">RUA DOUTOR JOAO MARCELINO, 1107, SANTO ANTONIO - MOSSORÓ - RN</p>
          <p>Semipresencial | A distância</p>
        </li>
                            `;
        break;
      case "rs":
        ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
        divList.innerHTML = `
        
          <p id="not-found"><b>NÃO ENCONTRADO</b></p>
        
                            `;
        break;
      case "ro":
        ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
        divList.innerHTML = `
        
          <p id="not-found"><b>NÃO ENCONTRADO</b></p>
        
                            `;
        break;
      case "rr":
        ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
        divList.innerHTML = `
        
        <p id="not-found"><b>NÃO ENCONTRADO</b></p>
      
                          `;
        break;
      case "sc":
        ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
        divList.innerHTML = `
        
          <p id="not-found"><b>NÃO ENCONTRADO</b></p>
        
                            `;
        break;
      case "sp":
        ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
        divList.innerHTML = `
        
          <p id="not-found"><b>NÃO ENCONTRADO</b></p>
        
                            `;
        break;
      case "se":
        ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
        divList.innerHTML = `
        
          <p id="not-found"><b>NÃO ENCONTRADO</b></p>
        
                            `;
        break;
      case "to":
        ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
        divList.innerHTML = `
        
        <p id="not-found"><b>NÃO ENCONTRADO</b></p>
      
                          `;
        break;
    }
  }
  else if (title === 'subway') {
    switch (Selected.value) {
      case "mg":
        divList.innerHTML = `
        <li>
          <p><b></b></p>
          <p id="end-id">Contagem/MG</p>
          <p id="end-id">Av.: João César de Oliveira - 2415  - Loja 06 - Eldorado.</p>
          <p id="end-id">(31) 9 8668-1579</p>
        </li>
        <li>
          <p><b></b></p>
          <p id="end-id">Contagem/MG</p>
          <p id="end-id">Carrefour Contagem/Betim.</p>
          <p id="end-id">Rod. BR 381 - N 3.000 - Riacho das Pedras - na praça de alimentação do Carrefour.</p>
          <p id="end-id">(31) 3396-3423</p>
        </li>
                            `;
        break;
    }

  }
  else if (title === 'odonto') {
    switch (Selected.value) {
      case "mg":
        divList.innerHTML = `
        <li>
          <p><b></b></p>
          <p id="end-id">Contagem/MG</p>
          <p id="end-id">Rua Haia, 251 Bairro Santa Cruz</p>
          <p id="end-id">(31) 3049-2525</p>
          <p id="end-id">(31) 7337-3475</p>
        </li>
                            `;
        break;
    }

  } else if (title === "michellekalil") {
    switch (Selected.value) {
      case "mg":
        divList.innerHTML = `
        <li>
          <p><b></b></p>
          <p id="end-id">Contagem/MG</p>
          <p id="end-id">Rua Pedro Olímpio da Fonseca 152</p>
          <p id="end-id">Bairro: Santa Cruz</p>
          <p id="end-id">(31) 3514-4903</p>
        </li>
                            `;
        break;
    }

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
      //divCategory.style.display = "block";
      divCategory.classList.add('model-category-open')
    } else {
      //divCategory.style.display = "none";
      divCategory.classList.remove('model-category-open')
    }
  });
}

function checkUploadFiles() {
  var referenceField = document.querySelectorAll(".inpt");
  let loader = document.querySelector('.div-loader');
  var buttonSub = document.querySelector(".w-button");
  var totalFilesUplodead = 0;
  var talentSelect = document.querySelector(".talent-select");
  buttonSub.addEventListener("click", (event) => {
    if (talentSelect.value === "modelo") {
      referenceField.forEach((input) => {
        if (input.value != "") totalFilesUplodead += 1;
      });
      if (totalFilesUplodead < 5) {
        event.preventDefault();
        alert("Favor selecionar as fotos para enviar...");
      }
      totalFilesUplodead = 0;
      loader.style.opacity = "0.8";
      loader.classList.remove('hidden-loader');
    }
  });
}



function checkLenghtMaxMin(id, lenghtFieldMax, lenghtFieldMin, referenceField, customMessage = null) {
  let MessageErrorMax = "Número muito grande. Coloque como no exemplo: 033 9999-9999"
  let MessageErrorMin = "Número muito curto. Coloque como no exemplo: 033 9999-9999"
  var Entervalue = referenceField.value;

  var spanError = document.createElement("p");
  if (customMessage === null)
    var erroNode1 = Entervalue.length > lenghtFieldMax ? document.createTextNode(MessageErrorMax) : Entervalue.length < lenghtFieldMin ? document.createTextNode(MessageErrorMin) : document.createTextNode("none");
  else
    var erroNode1 = document.createTextNode(customMessage)

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
  } else if (Entervalue.length < lenghtFieldMin) {
    referenceField.style.backgroundColor = "#ff9999";
    if (!errorMessageShow != "undefined") {
      spanError.appendChild(erroNode1);
      referenceField.parentNode.insertBefore(spanError, referenceField);

      var checkMessagesDuplicate = document.querySelectorAll("." + id);
      if (checkMessagesDuplicate.length > 1) {
        checkMessagesDuplicate[1].remove();
      }
    }
  }
  else {
    referenceField.style.backgroundColor = "white";
    if (!errorMessageShow != "undefined") {
      errorMessageShow.forEach((indexof) => {
        indexof.classList[1] === id
          ? indexof.remove()
          : "";
      });
    }
  }

  const FormatterNumber = (x) => {

    const allNumbers = x.split("");
    const newVal = x


    let inter = allNumbers.filter((num) => {
      if (Number.isInteger(parseInt(num))) {
        return true;
      }
      else {
        return false
      }
    })




    var ddd = inter.slice(0, 2).toString();
    var first = inter.slice(2, 6).toString()
    var last = inter.slice(6, 20).toString()


    if (first.length > 0 && last.length < 1 && ddd.length > 2) {

      referenceField.value = "(" + ddd.replace(",", "") + ")" + first.replaceAll(",", "");

    } else if (ddd.length < 4 && first.length < 1) {

      referenceField.value = ddd.replace(",", "")

    }
    else {

      referenceField.value = "(" + ddd.replace(",", "") + ")" + first.replaceAll(",", "") + "-" + last.replaceAll(",", "");

    }

  }

  FormatterNumber(Entervalue)
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

function buttonMenuEA() {
  var artistDoc = document.querySelector(".artist-btn");
  var spanIconArtist = document.querySelector(".artist-btn > span");
  var divArtista = document.querySelector(".subnav-artista");

  var cantoresBtn = document.querySelector(".contores-btn");
  var divCantores = document.querySelector(".sub-cantores-1");
  var mainLi = document.querySelectorAll(".MainMenu-1");
  var btnVoltarArtistas = document.querySelectorAll(".voltar-artistas");

  var cosplayBtn = document.querySelector('.cosplay-btn')
  var divCosplay = document.querySelector('.sub-cosplay-1')

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

  //Hide divs menu if others is open
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

  // Animation div show
  divCantores.style.animation = "opacity 1s";
  divCosplay.style.animation = "opacity 1s";

  //Events menus
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

  btnVoltarArtistas.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      mainLi.forEach((li) => {
        li.classList.remove("display-none-content");
      });
      divCantores.classList.add("display-none-content");
      divCosplay.classList.add("display-none-content");
    });
  })


  cantoresBtn.addEventListener("click", (event) => {
    if (divCantores.classList.contains("display-none-content")) {
      divCantores.classList.remove("display-none-content");
      mainLi.forEach((li) => {
        li.classList.add("display-none-content");
      });
    }
  });

  cosplayBtn.addEventListener("click", (event) => {
    if (divCosplay.classList.contains("display-none-content")) {
      divCosplay.classList.remove("display-none-content");
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
};

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
      case "FernandoFidel-fotos":
        divSelectd.classList.remove("display-none-content");
        divSelectd.innerHTML = `
          <div class="title-release"><p>Fernando e Fedel</p></div>
          <div class='photos-container'>
            <img src="./media/artistas/sertanejo/FernandoFidel/fotos/FernandoFidel1.jpg">
          </div>
          <div class="backbtn-artist" onClick="ArtistsMenus('artist-1')"><p>VOLTAR</p></div>
        `;

        break;
      case "FernandoFidel-musicas":
        playerMusic("FernandoFidel");

        break;
      case "FernandoFidel-videos":
        divSelectd.classList.remove("display-none-content");
        divSelectd.innerHTML = `
                                <div class="container-videos">
                                <iframe width="350" height="300" src="https://www.youtube.com/embed/-T76WtLCY1I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                
                                <iframe width="350" height="300" src="https://www.youtube.com/embed/QRxwX--Kyxk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="backbtn-artist" onClick="ArtistsMenus('artist-1')"><p>VOLTAR</p></div>
                                `;
        break;

      case "FernandoFidel-faClube":
        break;

      case "FernandoFidel-release":
        divSelectd.classList.remove("display-none-content");
        divSelectd.innerHTML = `<div class="title-release"><p>Fernando e Fidel</p></div>
                  <div><p>
                  Fernando Miguel de Almeida, 30 anos, nasceu em 16/03/1990, solteiro, mora com os pais na cidade de São José do Rio Preto, 1,73 de altura e 65 kg. Aprendeu a tocar violão sozinho e sempre muito divertido animando os amigos em festas e churrascos,  cantando os sucessos dos seus idolos 
                  Teodoro e Sampaio , Matogrosso e Mathias, Jads e jadson e Tiao Carreiro.<br><br>
                  
                 
                  Fidelcino Alves Costa Neto, 29 anos, nasceu em 31/07/1991, casado, mora na cidade de São José do Rio Preto, 1,90 de altura e 90 kg. Inspirado por seus idolos Tiao Carreiro, Almir Sater, João Carreiro, sempre cantando e  animando as festas com parentes e amigos.<br><br>
                  
                  
                  Fernando e Fidel.
                  Se conheceram  em uma festa de confraternização musical, cantaram algumas músicas juntos na festa, todos que ouviram gostaram e os dois  combinaram de  cantar algumas vezes e deram o início a dupla Fernando e Fidel com grandes projetos, ja  estão na estrada a 3 anos de muita parceria e uma amizade de irmão. </p></div>
                  <div class="backbtn-artist" onClick="ArtistsMenus('artist-1')"><p>VOLTAR</p></div>
                  `;
        break;

      //end Fernando Fidel

      case "ViniciusRocha-fotos":
        divSelectd.classList.remove("display-none-content");
        divSelectd.innerHTML = `
          <div class="title-release"><p>Vinicius Rocha</p></div>
          <div class='photos-container'>
            <img src="./media/artistas/sertanejo/viniciusRocha/fotos/viniciusRocha1.jpg">
            <img src="./media/artistas/sertanejo/viniciusRocha/fotos/viniciusRocha2.jpg">
            <img src="./media/artistas/sertanejo/viniciusRocha/fotos/viniciusRocha3.jpg">
          </div>
          <div class="backbtn-artist" onClick="ArtistsMenus('artist-2')"><p>VOLTAR</p></div>
        `;

        break;
      case "ViniciusRocha-musicas":
        playerMusic("ViniciusRocha");

        break;
      case "ViniciusRocha-videos":
        divSelectd.classList.remove("display-none-content");
        divSelectd.innerHTML = `
                                <div class="container-videos">
                                  <iframe width="350" height="300" src="https://www.youtube.com/embed/aF5s44CNO0o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                  <iframe width="350" height="300" src="https://www.youtube.com/embed/daWsdxBs15A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="backbtn-artist" onClick="ArtistsMenus('artist-2')"><p>VOLTAR</p></div>
                                `;
        break;

      case "ViniciusRocha-faClube":
        break;

      case "ViniciusRocha-release":
        divSelectd.classList.remove("display-none-content");
        divSelectd.innerHTML = `<div class="title-release"><p>Vinicius Rocha</p></div>
                  <div><p>Vinicius Cardoso Rocha Borges, nome artistico Vinicius Rocha,nascido em Divinopolis no ano de 1993, despertou o interesse pela musica aos 12 anos quando 
                  aprendeu a tocar a primeira musica no violao de seu irmão. Descendente de bisavó pianista, avó regente de orquestra e tia violoncelista na orquestra sinfônica da PM de Belo horizonte, teve de onde herdar o interesse pela musica.<br>
                  Em 2005 Vinicius Rocha juntamente com seus amigos decidem criar uma banda de estilo alternativo denominada 360. A 360 teve varias formações até que foi decidido que Vinicius Rocha seria o vocalista. A partir deste momento o cantor despertou ainda mais o interesse pela musica. Algum tempo depois Vinicius e Breno Carvalho decidem sair da banda 360 e criam uma nova banda, Diaax, onde conseguiram durante dois anos seguidos fazer apresentação no Festival de inverno de Itapecerica-MG.<br>
                  Algum tempo depois a rotina de vida dos integrantes foram aumentando e não tinham tempo para dedicar a banda. Então em 2013 Vinicius Rocha decide ingressar uma carreira solo na musica sertaneja, estilo que sempre pertenceu ao gosto musical desde pequeno.<br>
                  Vinicius então lança sua carreira solo como Vinicius Rocha na 43° Divinaexpo no palco novos talentos,ganhando até o seu primeiro Fã Clube.
                  Então lança sua primeira musica de trabalho "Te Querer Tanto Assim" que em menos de uma semana teve mais de mil visualizações no youtube.</p></div>
                  <div class="backbtn-artist" onClick="ArtistsMenus('artist-2')"><p>VOLTAR</p></div>
                  `;
        break;

      //End Vinicius Rocha

      case "RogerioSoares-fotos":
        divSelectd.classList.remove("display-none-content");
        divSelectd.innerHTML = `
          <div class="title-release"><p>Rogerio Soares</p></div>
          <div class='photos-container'>
            <img src="./media/artistas/sertanejo/RogerioSoares/fotos/RogerioSoares1.jpg">
            <img src="./media/artistas/sertanejo/RogerioSoares/fotos/RogerioSoares2.jpg">
          </div>
          <div class="backbtn-artist" onClick="ArtistsMenus('artist-3')"><p>VOLTAR</p></div>
        `;

        break;
      case "RogerioSoares-musicas":
        playerMusic("RogerioSoares");

        break;
      case "RogerioSoares-videos":
        divSelectd.classList.remove("display-none-content");
        divSelectd.innerHTML = `
                                <div class="container-videos">
                                <iframe width="350" height="300" src="https://www.youtube.com/embed/fkFmngqw9oo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe width="350" height="300" src="https://www.youtube.com/embed/e8pSa7ZARP8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="backbtn-artist" onClick="ArtistsMenus('artist-3')"><p>VOLTAR</p></div>
                                `;
        break;

      case "RogerioSoares-faClube":
        break;

      case "RogerioSoares-release":
        divSelectd.classList.remove("display-none-content");
        divSelectd.innerHTML = `<div class="title-release"><p>Rogerio Soares</p></div>
                  <div><p> Rogério Jorge Soares Campos, nome artístico Rogério Soares, 
                  nasceu no dia 06 de outubro de 1986, em Governador Valadares MG, filho de caminhoneiro e de dona de casa, desde criança sempre ouvindo músicas sertaneja junto com seus pais, principalmente sertanejo raizes, começou a ter o primeiro contato com o violão com 12 anos, quando seu irmão mais velho pegava o violão do vizinho emprestado que o seu irmão estava aprendendo a tocar e o Rogerio aprendendo junto com ele, seu irmão desistiu de aprender e parou de pegar o violão do vizinho, foi ai que o Rogerio insistiu com o seu pai até os 14 anos de idade, até que ele ganhou o seu primeiro violão do seu pai.<br>
                  Foi ai que começou  a aprender a tocar.<br>
                  Com 17 anos começou  a cantar, aos 19 anos entrou na  primeira banda em Governador Valadares, uma banda que cantava de tudo, (banda baile),  depois acabou  formando duplas duas vezes, a primeira Rogério e Fabrício, a  segunda era Tião Mineiro e Rogério, com 27 anos resolveu fazer carreira solo, Rogério Soares (cantor e compositor) tem uma bagagem musical muito grande de vários estilos. </p></div>
                  <div class="backbtn-artist" onClick="ArtistsMenus('artist-3')"><p>VOLTAR</p></div>
                  `;
        break;
    }
  }
}

function PhothosShow(element) {
  var photos = document.querySelectorAll("");
}

function ElementSelect(artistObject) {
  //var ElementSelected = element
  var getArtists = artistObject;
  //var getArtists = ObjectsArtists(`${ElementSelected.getAttribute('data-Artist')}`)
  var totalMusics = getArtists["musicas"]["totalMusics"];

  var playBtn = document.querySelector("#play-btn");
  var nextBtn = document.querySelector("#next-btn");
  var backBtn = document.querySelector("#back-btn-m");
  var audioPlayer = document.querySelectorAll("#audioFiles");
  var musicName = document.querySelector("#music-name");
  var musicBtn = document.querySelectorAll(".btn-music");
  var musicSelected = "";
  var progressbar = document.querySelector("#progress-track");
  var progressContainer = document.querySelector(".progress-bar-music");
  var volumeBtn = document.querySelector("#volume-btn");
  var volumeInput = document.querySelector("#volume-bar");
  var closeWindow = document.querySelector(".close-container-music a");
  var divPlayer = document.querySelector(".player-musics");
  var heroDiv = document.querySelector(".hero");
  musicName.innerHTML = "---------------";
  volumeBtn.addEventListener("click", () => {
    volumeInput.classList.contains("display-none-content")
      ? volumeInput.classList.remove("display-none-content")
      : volumeInput.classList.add("display-none-content");
  });


  musicBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      audioPlayer.forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
      });
      audioPlayer[parseInt(btn.getAttribute("data-value"))].play();
      musicSelected = parseInt(btn.getAttribute("data-value"));
      musicName.innerHTML = getArtists["musicas"][musicSelected + 1]["name"];
      playBtn.classList.add("pausebtn");
      getTimeMusic(audioPlayer[musicSelected]);
    });
  });

  volumeInput.addEventListener("change", () => {
    audioPlayer[musicSelected].volume = volumeInput.value / 100;
  });

  closeWindow.addEventListener("click", () => {
    audioPlayer.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
    divPlayer.classList.add("display-none-content");
    heroDiv.style.visibility = "visible";
  });

  playBtn.addEventListener("click", () => {
    if (musicSelected !== "") {
      if (audioPlayer[musicSelected].paused === true) {
        audioPlayer[musicSelected].play();
        playBtn.classList.add("pausebtn");
      } else {
        audioPlayer[musicSelected].pause();
        playBtn.classList.remove("pausebtn");
      }
    } else {
      musicSelected = 0;
      audioPlayer[musicSelected].play();
      playBtn.classList.add("pausebtn");
      musicName.innerHTML = getArtists["musicas"][musicSelected + 1]["name"];
      getTimeMusic(audioPlayer[musicSelected]);
    }
  });

  nextBtn.addEventListener("click", () => {
    audioPlayer.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
    if (musicSelected < totalMusics - 1) {
      audioPlayer[musicSelected + 1].play();
      musicSelected += 1;
      musicName.innerHTML = getArtists["musicas"][musicSelected + 1]["name"];
      getTimeMusic(audioPlayer[musicSelected]);
    } else {
      musicSelected = totalMusics - 1;
      musicName.innerHTML = getArtists["musicas"][musicSelected + 1]["name"];
      audioPlayer[musicSelected].play();
      getTimeMusic(audioPlayer[musicSelected]);
    }
  });

  backBtn.addEventListener("click", () => {
    audioPlayer.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
    if (musicSelected > 0) {
      musicSelected -= 1;
      audioPlayer[musicSelected].play();
      musicName.innerHTML = getArtists["musicas"][musicSelected + 1]["name"];
      getTimeMusic(audioPlayer[musicSelected]);
    } else {
      musicSelected = 0;
      musicName.innerHTML = getArtists["musicas"][1]["name"];
      audioPlayer[musicSelected].play();
      getTimeMusic(audioPlayer[musicSelected]);
    }
  });

  if (progressContainer) {
    progressContainer.addEventListener('click', function (e) {
      audioPlayer[musicSelected].currentTime = (e.offsetX / progressContainer.offsetWidth) * audioPlayer[musicSelected].duration

    })
  }

  function getTimeMusic(elementAudio) {
    highlight(musicSelected);
    elementAudio.addEventListener("timeupdate", () => {
      progressbar.style.width =
        (audioPlayer[musicSelected].currentTime /
          audioPlayer[musicSelected].duration) *
        100 +
        "%";
    });
  }
}

function highlight(currentMusic) {
  let allElementToClear = document.querySelectorAll('.btn-music');
  allElementToClear.forEach(ele => {
    ele.parentElement.style.backgroundColor = "";

  })

  let currentMusicName = document.querySelector(`[data-value="${currentMusic}"]`).parentElement
  currentMusicName.style.backgroundColor = "#4e4e4e"
}

function playerMusic(selectedArtist, musicSelected = 0) {
  var divPlayer = document.querySelector(".player-musics");

  divPlayer.classList.remove("display-none-content");
  var heroDiv = document.querySelector(".hero");
  heroDiv.style.visibility = "hidden";
  window.scrollTo(0, 0);

  var getArtists = ObjectsArtists([selectedArtist]);

  var totalMusics = getArtists["musicas"]["totalMusics"];

  var playList = setInterval(() => {
    var listMusics = document.querySelector(".list-musics-container");
    if (listMusics) {
      clearInterval(playList);
      for (var value = 1; value <= totalMusics; value++) {
        listMusics.innerHTML += `
          <div class="music-list" data-link-pointer>
          <div class="btn-music"  data-value="${value - 1}" data-Artist ="${getArtists[`selectName`]
          }"><p>${getArtists["musicas"][value]["name"]}</p></div>
          <p>${getArtists["musicas"][value]["length"]}</p>
        </div>
          `;
      }
    }
  }, 500);

  divPlayer.innerHTML = `
    <div class="container-music">
    <div class="close-container-music"><a href="#">X</a></div>
    <div class="container-Elements">
        <div id="playthis"></div>
        <div class="photo-container"><img id="artistPhoto" src="${getArtists[`tumbPhotoUrl`]
    }"
                alt=""></div>
        <div class="controls-music">
            <div class="titles-artist">
                <p id="music-name"></p>
                <p id="author-name">Autor: ${getArtists[`nameArtist`]}</p>
                <div class="contolers">
                    <div id="back-btn-m" data-link-pointer></div>
                    <div id="play-btn" data-link-pointer></div>
                    <div id="next-btn" data-link-pointer></div>
                    <div id="volume-controlers" >
                        <input id="volume-bar" type="range" min="0" max="100" class="display-none-content">
                        <div id="volume-btn" data-link-pointer></div>

                    </div>
                </div>
                <div class="progress-bar-music">
                    <div id="progress-track"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="list-musics-container">
        
    </div>
</div>
    
                            `;

  var htmlAudio = "";
  for (var a = 1; a < totalMusics + 1; a++) {
    htmlAudio += `
        <audio id="audioFiles" src="${getArtists["musicas"][a]["src"]}"></audio>
      `;
  }

  var divAudios = document.getElementById("playthis");
  divAudios.innerHTML = htmlAudio;

  setTimeout(() => {
    ElementSelect(getArtists);
  }, 700);
}

function ObjectsArtists(selectArtistName) {
  Artists = {
    ViniciusRocha: {
      selectName: "ViniciusRocha",
      nameArtist: "Vinicius Rocha",
      tumbPhotoUrl:
        "./media/artistas/sertanejo/viniciusRocha/fotos/viniciusRocha3.jpg",
      musicas: {
        totalMusics: 3,
        1: {
          name: "A Lua",
          src: "./media/artistas/sertanejo/viniciusRocha/musicas/A Lua.mp3",
          length: "03:49",
        },
        2: {
          name: "Tentar Te Ligar",
          src:
            "./media/artistas/sertanejo/viniciusRocha/musicas/Tentar Te Ligar.mp3",
          length: "03:40",
        },
        3: {
          name: "Para te convencer",
          src:
            "./media/artistas/sertanejo/viniciusRocha/musicas/Pra te Convencer.mp3",
          length: "03:47",
        },
      },
    },
    FernandoFidel: {
      selectName: "FernandoFidel",
      nameArtist: "Fernando e Fidel",
      tumbPhotoUrl:
        "./media/artistas/sertanejo/FernandoFidel/fotos/FernandoFidel1.jpg",
      musicas: {
        totalMusics: 5,
        1: {
          name: "Cachaceiro sem noção",
          src:
            "./media/artistas/sertanejo/FernandoFidel/musicas/Cachaceiro Sem Noção.mp3",
          length: "02:51",
        },
        2: {
          name: "Farra",
          src: "./media/artistas/sertanejo/FernandoFidel/musicas/Farra.mp3",
          length: "02:47",
        },
        3: {
          name: "La Pinga",
          src: "./media/artistas/sertanejo/FernandoFidel/musicas/La Pinga.mp3",
          length: "03:14",
        },
        4: {
          name: "Sera que foi saudades (Cover)",
          src:
            "./media/artistas/sertanejo/FernandoFidel/musicas/Sera que foi saudade (Cover).mp3",
          length: "03:41",
        },
        5: {
          name: "Você Sempre Será (Cover)",
          src:
            "./media/artistas/sertanejo/FernandoFidel/musicas/Você Sempre Será (Cover).mp3",
          length: "01:24",
        },
      },
    },
    RogerioSoares: {
      selectName: "RogerioSoares",
      nameArtist: "Rogerio Soares",
      tumbPhotoUrl:
        "./media/artistas/sertanejo/RogerioSoares/fotos/rogerioSoares1.jpg",
      musicas: {
        totalMusics: 8,
        1: {
          name: "Rosas",
          src: "./media/artistas/sertanejo/RogerioSoares/musicas/Rosas.mp3",
          length: "03:02",
        },
        2: {
          name: "Sorriso Amarelo",
          src:
            "./media/artistas/sertanejo/RogerioSoares/musicas/Sorriso Amarelo.mp3",
          length: "01:28",
        },
        3: {
          name: "Fica Amor (Cover)",
          src:
            "./media/artistas/sertanejo/RogerioSoares/musicas/Fica Amor (Cover).mp3",
          length: "02:24",
        },
        4: {
          name: "Inquilina (Cover)",
          src:
            "./media/artistas/sertanejo/RogerioSoares/musicas/Inquilina (Cover).mp3",
          length: "03:48",
        },
        5: {
          name: "Jogo do Amor (Cover)",
          src:
            "./media/artistas/sertanejo/RogerioSoares/musicas/Jogo do Amor (Cover).mp3",
          length: "02:13",
        },
        6: {
          name: "Não Deixo Não (Cover)",
          src:
            "./media/artistas/sertanejo/RogerioSoares/musicas/Não Deixo Não (Cover).mp3",
          length: "03:36",
        },
        7: {
          name: "Por te Amar Demais (Cover)",
          src:
            "./media/artistas/sertanejo/RogerioSoares/musicas/Por te Amar Demais (Cover).mp3",
          length: "02:53",
        },
        8: {
          name: "Vai Doer (Cover)",
          src:
            "./media/artistas/sertanejo/RogerioSoares/musicas/Vai Doer (Cover).mp3",
          length: "02:54",
        },
      },
    },
  }; //end object

  return Artists[selectArtistName];
}

function countdown() {
  var contDownDate = new Date("January 30, 2021 15:10:00").getTime();

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

    if (seconds < 10)
      seconds = '0' + seconds
    if (days < 10)
      days = '0' + days
    if (hours < 10)
      hours = '0' + hours
    if (minutes < 10)
      minutes = '0' + minutes

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
};




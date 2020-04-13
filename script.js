window.onload = function() {
  navBar()
  var pageName = location.pathname.split('/').pop()
  switch (pageName) {
    case "index.html":
      slideTitle();
      break;

    case "shows.html":
      AudioControls();
      break;
    default:
      break;
  }
}

function navBar() {
  var navButton = document.querySelector('.menu-button');
  var iconMenuClick = document.querySelector('.icon-2')
  var navMenu = document.querySelector('.nav-menu')
  var spanInset = document.querySelector('.w-nav-overlay')
  var navbarDiv = document.querySelector("[data-wf-ignore]")

  iconMenuClick.addEventListener('click', () => {

    if (navButton.classList[2] == 'w--open') {
      navButton.classList.remove('w--open')
      navMenu.innerHTML = `<a href="./index.html" class="nav-link-2 w-nav-link">HOME</a><a
        href="./composite.html" class="nav-link-3 w-nav-link">COMPOSITE</a><a href="./book.html"
        class="nav-link-4 w-nav-link">BOOK</a><a href="./parceiros.html" class="nav-link-5 w-nav-link">PARCEIROS</a><a
        href="./contato.html" class="nav-link-6 w-nav-link">CONTATO</a>`
      spanInset.innerHTML = '';
      navbarDiv.classList.remove('an-nav-bf')
      iconMenuClick.classList.remove('w-menu-open-nav')
    } else {
      navMenu.innerHTML = '';
      spanInset.innerHTML = `
        <nav role="navigation" class="nav-menu w-nav-menu mob-nav" style="transform: translateY(0px) translateX(0px); transition: transform 400ms ease 0s;" data-nav-menu-open="">
        <a href="./index.html" class="nav-link-2 w-nav-link w--nav-link-open" style="">HOME</a>
        <a href="./sobrenos.html" class="nav-link-3 w-nav-link w--nav-link-open" style="">SOBRE NÓS</a>
        <a href="#" class="nav-link-4 w-nav-link w--nav-link-open" style="" onClick = showCategoryModels("sub-category-models") >MODELOS</a>
        <div class="sub-category-models style-sub-category">
        <a class="nav-link-5 w-nav-link w--nav-link-open" onClick="ShowSubCategorys('sub-baby')">BABY</a>
        <div class="style-sub-category sub-baby subs-category-ref">
              <div class="sub-baby">
                <div class="sub-imgs">
                  <img href="" >
                  <img href="">
                </div>
                <div class="sub-texts">
                  <p>MAN</p>
                  <p>WOMAN</p>
                </div>
              </div>
         </div>
        <a class="nav-link-5 w-nav-link w--nav-link-open" onClick="ShowSubCategorys('sub-kids')" style="">KID'S</a>
        <div class="style-sub-category sub-kids subs-category-ref">
                      <div class="sub-baby">
                        <div class="sub-imgs">
                          <img href="" >
                          <img href="">
                        </div>
                        <div class="sub-texts">
                          <p>MAN</p>
                          <p>WOMAN</p>
                        </div>
                      </div>
                 </div>
        <a   class="nav-link-5 w-nav-link w--nav-link-open" style="">PRÉ-TEEN</a>
        <div class="style-sub-category sub-teens subs-category-ref">
                      <div class="sub-baby">
                        <div class="sub-imgs">
                          <img href="" >
                          <img href="">
                        </div>
                        <div class="sub-texts">
                          <p>MAN</p>
                          <p>WOMAN</p>
                        </div>
                      </div>
                 </div>
        <a   class="nav-link-5 w-nav-link w--nav-link-open" style="">MORE AGE</a>
        <div class="style-sub-category sub-moreage subs-category-ref">
                      <div class="sub-baby">
                        <div class="sub-imgs">
                          <img href="" >
                          <img href="">
                        </div>
                        <div class="sub-texts">
                          <p>MAN</p>
                          <p>WOMAN</p>
                        </div>
                      </div>
                 </div>
        <a   class="nav-link-5 w-nav-link w--nav-link-open" style="">PLUS SIZE</a>
        <div class="style-sub-category sub-plussize subs-category-ref">
                      <div class="sub-baby">
                        <div class="sub-imgs">
                          <img href="" >
                          <img href="">
                        </div>
                        <div class="sub-texts">
                          <p>MAN</p>
                          <p>WOMAN</p>
                        </div>
                      </div>
                 </div>
        <a   class="nav-link-5 w-nav-link w--nav-link-open" style="">COMERCIAL</a>
        <div class="style-sub-category sub-comercial subs-category-ref">
                      <div class="sub-baby">
                        <div class="sub-imgs">
                          <img href="" >
                          <img href="">
                        </div>
                        <div class="sub-texts">
                          <p>MAN</p>
                          <p>WOMAN</p>
                        </div>
                      </div>
                 </div>
        <a   class="nav-link-5 w-nav-link w--nav-link-open" style="">FASHION</a>
        <div class="style-sub-category sun-fashion subs-category-ref">
                      <div class="sub-baby">
                        <div class="sub-imgs">
                          <img href="" >
                          <img href="">
                        </div>
                        <div class="sub-texts">
                          <p>MAN</p>
                          <p>WOMAN</p>
                        </div>
                      </div>
                 </div>
        <a   class="nav-link-5 w-nav-link w--nav-link-open" style="">FITNESS</a>
        <div class="style-sub-category sun-fitness subs-category-ref">
                      <div class="sub-baby">
                        <div class="sub-imgs">
                          <img href="" >
                          <img href="">
                        </div>
                        <div class="sub-texts">
                          <p>MAN</p>
                          <p>WOMAN</p>
                        </div>
                      </div>
                 </div>
        <a   class="nav-link-5 w-nav-link w--nav-link-open" style="">ANDROGYNOUS</a>
        <div class="style-sub-category sub-androgynous subs-category-ref">
                      <div class="sub-baby">
                        <div class="sub-imgs">
                          <img href="" >
                          <img href="">
                        </div>
                        <div class="sub-texts">
                          <p>MAN</p>
                          <p>WOMAN</p>
                        </div>
                      </div>
                 </div>
        <a   class="nav-link-5 w-nav-link w--nav-link-open" style="">URBAN</a>
        <div class="style-sub-category sub-urban subs-category-ref">
                      <div class="sub-baby">
                        <div class="sub-imgs">
                          <img href="" >
                          <img href="">
                        </div>
                        <div class="sub-texts">
                          <p>MAN</p>
                          <p>WOMAN</p>
                        </div>
                      </div>
                 </div>
        </div>
        </a>
        <a   class="nav-link-5 w-nav-link w--nav-link-open" style="">CURSOS</a>
        <div class="style-sub-category subs-category-ref">
          <a   class="nav-link-5 w-nav-link w--nav-link-open" style="">EM BREVE</a>
         </div>
        <a href="./revista.html" class="nav-link-6 w-nav-link w--nav-link-open" style="">REVISTA</a>
         <div class="style-sub-category subs-category-ref">
           <a   class="nav-link-5 w-nav-link w--nav-link-open" style="">EM BREVE</a>
        </div>
        <a href="./eventos.html" class="nav-link-6 w-nav-link w--nav-link-open" style="">EVENTOS</a>
        <a href="./artista.html" class="nav-link-6 w-nav-link w--nav-link-open" style="">ARTISTAS</a>
        <div class="style-sub-category subs-category-ref">
                <a   class="nav-link-5 w-nav-link w--nav-link-open" style="">BABY</a>
                <a   class="nav-link-5 w-nav-link w--nav-link-open" style="">KID'S</a>
                <a   class="nav-link-5 w-nav-link w--nav-link-open" style="">PRÉ-TEEN</a>
                <a   class="nav-link-5 w-nav-link w--nav-link-open" style="">MORE AGE</a>
                <a   class="nav-link-5 w-nav-link w--nav-link-open" style="">PLUS SIZE</a>
                <a   class="nav-link-5 w-nav-link w--nav-link-open" style="">COMERCIAL</a>
                <a   class="nav-link-5 w-nav-link w--nav-link-open" style="">FASHION</a>
                <a   class="nav-link-5 w-nav-link w--nav-link-open" style="">FITNESS</a>
                <a   class="nav-link-5 w-nav-link w--nav-link-open" style="">ANDROGYNOUS</a>
                <a   class="nav-link-5 w-nav-link w--nav-link-open" style="">URBAN</a>
                </div>
        <a href="./parceiros.html" class="nav-link-2 w-nav-link w--nav-link-open" style="">PARCEIROS</a>
        <a href="./facaparte.html" class="nav-link-2 w-nav-link w--nav-link-open" style="">FAÇA PARTE</a>
        <a href="./contatos.html" class="nav-link-2 w-nav-link w--nav-link-open" style="">CONTATOS</a>
        </nav>
    </div>`;
      navButton.classList.add('w--open')
      navbarDiv.classList.add('an-nav-bf')
      iconMenuClick.classList.add('w-menu-open-nav')


    }

  })


  var navMenuLink = document.querySelectorAll('.w-nav-menu a');

  navMenuLink.forEach(element => {
    element.addEventListener('mouseenter', event => {
      event.target.style.backgroundColor = 'white';
      event.target.style.color = "black"
    })
    element.addEventListener('mouseout', event => {
      event.target.style.backgroundColor = '';
      event.target.style.color = "white"
    })
  })
}


function AudioControls() {
  var audio1 = document.querySelector('.audio1');
  var audio2 = document.querySelector('.audio2');
  var image1 = document.querySelector('.show1')
  var image2 = document.querySelector('.show2')
  var iconAudioControl1 = document.querySelector('.iconplay1')
  var iconAudioControl2 = document.querySelector('.iconplay2')
  var isplay1 = false;
  var isplay2 = false;

  audio1.src = "./media/shows/show1audio.mpeg";
  audio2.src = "./media/shows/show2audio.mpeg";


  function playAudio1() {
    audio1.play();
    iconAudioControl1.src = "./media/shows/pauseIcon.png"
    isplay1 = true;
  }

  function pauseAudio1() {
    audio1.pause();
    isplay1 = false;
    iconAudioControl1.src = "./media/shows/playIcon.png"
  }

  function playAudio2() {
    audio2.play();
    iconAudioControl2.src = "./media/shows/pauseIcon.png"
    isplay2 = true;
  }

  function pauseAudio2() {
    audio2.pause()
    isplay2 = false;
    iconAudioControl2.src = "./media/shows/playIcon.png"
  }

  iconAudioControl1.addEventListener('click', () => {

    if (!isplay1) {
      playAudio1();
      pauseAudio2();
    } else { pauseAudio1() }

  })

  iconAudioControl2.addEventListener('click', () => {
    if (!isplay2) {
      playAudio2()
      pauseAudio1()
    } else { pauseAudio2() }



  })
}

function slideTitle() {
  var index = 0;
  nextSlide()

  function nextSlide() {
    var divImgs = document.querySelectorAll('.w-slide');

    divImgs.forEach(element => element.style.display = "none")
    index++;
    if (index > divImgs.length) { index = 1 }
    divImgs[index - 1].style.display = "block";
    setTimeout(nextSlide, 7000)
  }




}

function showCategoryModels(selectedCategory) {
  var subCategoryModels = document.querySelector(`.${selectedCategory}`).classList.toggle('showContentBlock');
}

function ShowSubCategorys(category){
  var subCategorys = document.querySelectorAll('.subs-category-ref')
  subCategorys.forEach(element =>{
    
    element.classList[1] === category? element.classList.toggle('showContentBlock') : null;
  })
}

/*
function searchAndShowSlide() {
    slideTitle();
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
}
*/
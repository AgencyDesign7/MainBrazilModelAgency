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
    <div class="title-facaparte">
      <P>PROCURANDO NOVOS TALENTOS</P>
    </div>
    <div class="container-facaparte">
      <section class="conteiner-facaparte">
        <img class="image-fp1" src="./media/facaparte/facaparte-desktop.png" alt="">
      </section>
      <div class="div-block-12">
        <div class="form-block w-form">
          <form method="post" action="./handleFormRequest" id="email-form" name="email-form" data-name="Email Form"
            class="form" enctype="multipart/form-data">
            <label for="cadastro" class="center-marker-category">DADOS CADASTRAIS</label>

            <label for="Ffname" class="field-label">NOME COMPLETO*</label>
            <input type="text" class="text-field-2 w-input" minlength="5" maxlength="100" name="Nome" data-name="Ffname"
              placeholder="Digite seu nome completo" id="Ffname" required="" />

            <label for="Femail" class="field-label-7">EMAIL*</label>
            <input type="email" class="w-input" maxlength="100" name="Email" data-name="Femail"
              placeholder="Ex.: exemplo@exemplo.com.br" id="Femail" required="" />

            <label for="Fidade" class="field-label-2">IDADE*</label>
            <input type="text" class="text-field w-input" maxlength="2" name="Idade" data-name="Fidade"
              placeholder="Digite sua idade" id="Fidade" required=""
              onkeyup="checkLenghtMaxMin('er2',2,2,this, 'Mínimo 2 dígitos')" />

            <!-- <label for="Fnascimento" class="field-label-3">DATA NASCIMENTO*</label>
            <input type="date" class="text-field-3 w-input" maxlength="256" name="DataNascimento"
              data-name="Fnascimento" placeholder="Digite sua data de nascimento" id="Fnascimento" value="1992-01-01"
              required="" /> -->

            <label for="Fsexo" class="field-label-4">SEXO*</label>
            <select id="Fsexo" name="Sexo" data-name="Sexo" required="" class="select-field
                                w-select">
              <option value="">Selecionar...</option>
              <option value="masculino">MASCULINO</option>
              <option value="feminino">FEMININO</option>
            </select>

            <label for="Ftelefone" class="field-label-5">DDD + TELEFONE FIXO</label>
            <input type="tel" class="text-field-4 w-input" maxlength="13" minlength="13" name="TelefoneFixo"
              data-name="Ftelefone" placeholder="Ex.: (33)3333-3333" id="Ftelefone"
              onkeyup="checkLenghtMaxMin('er2',13,13,this)" />

            <label for="Fcelular" class="field-label-6">DDD + CELULAR*</label>
            <input type="tel" class="text-field-5 w-input" maxlength="14" minlength="14" name="TelefoneCelular"
              data-name="Fcelular" placeholder="Ex.: (33)9999-9999" id="Fcelular" required=""
              onkeyup="checkLenghtMaxMin('er3',14,14,this)" />

            <label for="Fendereco" class="field-label">ENDEREÇO*</label>
            <input type="text" class="text-field-2 w-input" maxlength="100" name="Endereco" data-name="Fendereco"
              placeholder="Digite seu endereço completo" id="Fendereco" required="" />

            <label for="Fnumero" class="field-label">NÚMERO*</label>
            <input type="text" class="text-field-2 w-input" maxlength="4" name="Numero" data-name="Fnumero"
              placeholder="Digite seu número" id="Fnumero" required="" />

            <label for="Fbairro" class="field-label">BAIRRO*</label>
            <input type="text" class="text-field-2 w-input" maxlength="100" name="Bairro" data-name="Fbairro"
              placeholder="Digite seu bairro" id="Fbairro" required="" />

            <label for="Fcep" class="field-label">CEP*</label>
            <input type="text" class="text-field-2 w-input" maxlength="100" name="Cep" data-name="Fcep"
              placeholder="Digite seu cep" id="Fcep" required="" />

            <label for="Fcidade" class="field-label">CIDADE*</label>
            <input type="text" class="text-field-2 w-input" maxlength="30" name="Cidade" data-name="Fcidade"
              placeholder="Digite sua cidade" id="Fcidade" required="" />

            <label for="Fuf" class="field-label-4">UF*</label>
            <select id="Fuf" name="UF" data-name="Fuf" required="" class="select-field
                                w-select">
              <option value="">Selecionar...</option>
              <option value="ac">AC</option>
              <option value="al">AL</option>
              <option value="ap">AP</option>
              <option value="am">AM</option>
              <option value="ba">BA</option>
              <option value="ce">CE</option>
              <option value="df">DF</option>
              <option value="es">ES</option>
              <option value="go">GO</option>
              <option value="ma">MA</option>
              <option value="mt">MT</option>
              <option value="ms">MS</option>
              <option value="mg">MG</option>
              <option value="pa">PA</option>
              <option value="pb">PB</option>
              <option value="pr">PR</option>
              <option value="pe">PE</option>
              <option value="pi">PI</option>
              <option value="rj">RJ</option>
              <option value="rn">RN</option>
              <option value="rs">RS</option>
              <option value="ro">RO</option>
              <option value="rr">RR</option>
              <option value="sc">SC</option>
              <option value="sp">SP</option>
              <option value="se">SE</option>
              <option value="to">TO</option>
            </select>

            <label for="Fpais" class="field-label">PAÍS*</label>
            <input type="text" class="text-field-2 w-input" maxlength="30" name="Pais" data-name="Fpais"
              placeholder="Digite seu país" id="Fpais" required="" />

            <label for="FondCh" class="field-label">ONDE CONHECEU A BRAZIL MODEL?*</label>
            <input type="text" class="text-field-2 w-input" maxlength="30" name="OndeConheceu" data-name="FondCh"
              placeholder="" id="FondCh" required="" />

            <label for="Ftalent" class="field-label-4">PRETENDE FAZER O TESTE PARA?*</label>
            <select id="ftalent" name="TestePara" data-name="ftalent" required=""
              class="select-field w-select talent-select">
              <option value="">Selecionar...</option>
              <option value="ator">ATOR</option>
              <option value="cantor">CANTOR</option>
              <option value="banda">BANDA</option>
              <option value="musico">MÚSICO</option>
              <option value="dancarino">DANÇARINO</option>
              <option value="cover">COVER</option>
              <option value="sosia">SÓSIA</option>
              <option value="campanhaCircense">CAMPANHA CIRCENSE</option>
              <option value="modelo">MODELO</option>
              <option value="standup">STAND UP</option>
              <option value="digitalInfluence">DIGITAL INFLUENCE</option>
            </select>
            <div class="model-category-select">
              <label for="medidas" class="center-marker-category">MEDIDAS</label>

              <label for="Faltura" class="field-label-2">ALTURA*</label>
              <input type="text" class="text-field w-input" maxlength="3" minlength="2" name="Altura"
                data-name="Faltura" placeholder="Digite sua altura" id="Faltura" />

              <label for="Fpeso" class="field-label-2">PESO*</label>
              <input type="text" class="text-field w-input" maxlength="3" minlength="2" name="Peso" data-name="Fpeso"
                placeholder="Digite seu peso" id="Fpeso" />

              <label for="Fmanequim" class="field-label-2">MANEQUIM*</label>
              <input type="text" class="text-field w-input" maxlength="3" minlength="2" name="Manequim"
                data-name="Fmanequim" placeholder="Digite seu manequim" id="Fmanequim" />

              <label for="Fsapato" class="field-label-2">SAPATO*</label>
              <input type="text" class="text-field w-input" maxlength="2" minlength="2" name="Sapato"
                data-name="Fsapato" placeholder="Digite seu sapato" id="Fsapato" />

              <label for="Fcintura" class="field-label-2">CINTURA*</label>
              <input type="text" class="text-field w-input" maxlength="3" minlength="2" name="Cintura"
                data-name="Fcintura" placeholder="Digite sua cintura" id="Fcintura" />

              <label for="Fquadril" class="field-label-2">QUADRIL*</label>
              <input type="text" class="text-field w-input" maxlength="3" minlength="2" name="Quadril"
                data-name="Fquadril" placeholder="Digite seu quadril" id="Fquadril" />

              <label for="Fbustotorax" class="field-label-2">BUSTO - TÓRAX*</label>
              <input type="text" class="text-field w-input" maxlength="3" minlength="2" name="BustoTorax"
                data-name="Fbustotorax" placeholder="Digite sua busto-tórax" id="Fbustotorax" />

              <label for="Folhos" class="field-label-4">OLHOS*</label>
              <select id="folhos" name="Olhos" data-name="folhos" class="select-field w-select">
                <option value="">Selecionar...</option>
                <option value="castanhos">CASTANHOS</option>
                <option value="pretos">PRETOS</option>
                <option value="azuis">AZUIS</option>
                <option value="verdes">VERDES</option>
              </select>

              <label for="Fcabelos" class="field-label-4">CABELOS*</label>
              <select id="fcabelos" name="Cabelos" data-name="fcabelos" class="select-field w-select">
                <option value="">Selecionar...</option>
                <option value="castanhos">CASTANHOS</option>
                <option value="pretos">PRETOS</option>
                <option value="azuis">LOIROS</option>
                <option value="verdes">RUIVOS</option>
              </select>

              <label for="fotos" class="center-marker-category">FOTOS</label>

              <label for="LcorpoIteiro" class="field-label-7">CORPO INTEIRO*</label>
              <input type="file" name="file[]" data-wait="Please wait..." class="w-input inpt"
                accept=".jpg,.jpeg,.png"/>

              <label for="Lrosto" class="field-label-7">PERFIL*</label>
              <input type="file" name="file[]" data-wait="Please wait..." class="w-input inpt"
                accept=".jpg,.jpeg,.png" />

              <label for="Lrosto" class="field-label-7">CLOSE*</label>
              <input type="file" name="file[]" data-wait="Please wait..." class="w-input inpt"
                accept=".jpg,.jpeg,.png" />

              <label for="Lrosto" class="field-label-7">SORRINDO*</label>
              <input type="file" name="file[]" data-wait="Please wait..." class="w-input inpt"
                accept=".jpg,.jpeg,.png" />

              <label for="Lrosto" class="field-label-7">CEBELO PRESO*</label>
              <input type="file" name="file[]" data-wait="Please wait..." class="w-input inpt"
                accept=".jpg,.jpeg,.png" />
            </div>

            <label for="Fmensage" class="field-label-8">MENSAGEM</label>
            <textarea name="Mensagem" maxlength="5000" id="Fmensage" placeholder="Digite sua mensagem aqui"
              data-name="Fmensage" class="w-input"></textarea>
            <input type="submit" value="ENVIAR" data-wait="Please wait..." class="w-button" />

          </form>
        </div>
      </div>
    </div>
  </header>
  </div>
  <section class="contact-socialMedia">
    <div class="media"><a href="https://api.whatsapp.com/send?phone=5531994530485"><img id="imgContact"
          src="./media/facaparte/socialMedia.png" alt=""></a></div>
  </section>
  <div class="footerContainer">
    <?php require('./resource/template/template.footer.html')?>
  </div>
  <script src="./script.js"></script>
</body>

</html>
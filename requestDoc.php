

  <?php
      
    require './vendor/autoload.php';
    use \Mailjet\Resources;
    $checkThisValue = 0;
    $fileArray = $_FILES['file']['size'];
    foreach ($fileArray as $key => $value) {
      if($fileArray[$key] == 0){
          $checkThisValue = 1;
      }
    }
  if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    include('./sucess.html');
    $fildsName = array('<b>Nome Completo</b>', '<b>Email</b>', '<b>Idade</b>','<b>Data de Nascimento</b>', '<b>Sexo</b>', '<b>Telefone Fixo</b>', '<b>Telefone Celular</b>', '<b>Endereço</b>', '<b>Número</b>', '<b>Bairro</b>', '<b>CEP</b>', '<b>Cidade</b>', '<b>UF</b>', '<b>Pais</b>', '<b>Onde conheceu a brazil Model</b>', '<b>Pretende fazer o teste para</b>','<b>Altura</b>', '<b>Peso</b>', '<b>Manequim</b>', '<b>Sapato</b>', '<b>Cintura</b>', '<b>Quadril</b>', '<b>Busto - Tórax</b>', '<b>Cor dos olhos</b>', '<b>Cor do cabelo</b>', '<b>Mensagem</b>');
    $countIndex = 0;
    foreach($_POST as $key => $value){
      $finalRequest[] = strtoupper(strval($fildsName[$countIndex])) . ": " . strtoupper(strval($value)) . "<br><br>";
      $countIndex+= 1;
    }
    //Email Requeste users Site facaParte.html
    $fromEmail = 'contato@brazilmodel.com.br';
    $nameFrom = 'Brazil Model Agency';
    $to = 'contato@brazilmodel.com.br';
    $toName = 'Brazil Model Agency Contato';
    $Subject = '@Request Faça parte';
    
    if($checkThisValue === 0){
        $arrayAllowedExtensions = array('jpg', 'jpeg', 'png');
        $maxSizeAllowed = (int)8155117;  //aprox.: 7.77mb
        $sequencePhotos = array('CORPO-INTEIRO', 'PERFIL', 'CLOSE', 'SORRINDO', 'CABELO-PRESO');

        foreach ($_FILES['file']['tmp_name'] as $key => $value) {
          $fileName = $_FILES['file']['name'][$key];
          $fileTmp_name = $_FILES['file']['tmp_name'][$key];
          $fileSize = (int)$_FILES['file']['size'][$key];
          $fileExtension = $_FILES['file']['type'][$key];
          $fileError = $_FILES['file']['error'][$key];
          $newFolderUser = "";
		  $dateNow = date('M') . date('Y');
          $RootFolderNameImages = "./ImagesFiles_Requests_BD_Public_RW/" . $dateNow;
          $nameRequestUser = strtoupper($_POST['Nome']);
          $getFolderIfExist = "";
          $messageError = "";
          $destinationBackupEmail = "./ImagesFiles_Requests_BD_Public_RW/" . $dateNow .'/'. $nameRequestUser;
          if($fileError === 0){
            if($fileSize - $maxSizeAllowed <= 0){
              $extensionRaw[] = explode('image/', $fileExtension);
              $extensionActual = strtolower(implode($extensionRaw[0]));
              if(in_array($extensionActual, $arrayAllowedExtensions)){
                
                $fileNewName = $sequencePhotos[$key] . uniqid('', true) . '.' . $extensionActual;
                $getFolderIfExist = './ImagesFiles_Requests_BD_Public_RW/' . $dateNow . '/' . $nameRequestUser . '/' . $fileNewName;
                if(!file_exists('./ImagesFiles_Requests_BD_Public_RW/' . $dateNow)){
                  $RootFolderNameImages = './ImagesFiles_Requests_BD_Public_RW/' . $dateNow;
                  mkdir($RootFolderNameImages, 0777, true);
                  
                }
                if(!file_exists($RootFolderNameImages . '/' . $nameRequestUser)){
                  $newFolderUser = $RootFolderNameImages . '/' . $nameRequestUser; 
                  mkdir($newFolderUser, 0777, true);
                  $getFolderIfExist = $newFolderUser .'/'. $fileNewName;
                }
      
                $FinalFolderDestination = $getFolderIfExist;
                move_uploaded_file($fileTmp_name, $FinalFolderDestination);

                

              }else{
                echo "<p><h4>Erro formato. É somente permitido imagens nos formatos: .jpg, .jpeg e .png. Tente novamente</h4></p>";
              }

            }else{
              echo '<p><h4>Imagem muito grande, o maximo de tamanho permitido é 7mb por imagem. Tente novamente</h4></p>';
            }

          }else{
            echo '<p><h4>Erro ao carregar imagem! Tente novamente</h4></p>';
          }
        }



        $Mensage = implode(" - ", $finalRequest);
        $directoreFolderPhotos = 'ftp://brazilmodel.com.br/' . $dateNow;
      $Messagelinks = '<br><h2><a href=' . $directoreFolderPhotos . '> Acessar fotos enviadas por ' . $nameRequestUser .'</a></h2><br>';
      $finalMessage = $Mensage . $Messagelinks;

      try{
        $fp = fopen($destinationBackupEmail . "/Email-Backup-" . $nameRequestUser . '.html',"wb");
        fwrite($fp, $finalMessage);
        fclose($fp);
        sendEmail($fromEmail, $nameFrom, $to, $toName, $Subject, "", $finalMessage);
      }
      catch(\Exception $e){

      }
      
      //Erro Message
      /*$fromEmail = 'contato@brazilmodel.com.br';
      $nameFrom = 'Brazil Model Agency';
      $to = 'adeniltonxavier14@gmail.com';
      $subject = '@ERROR Facaparte.html';
      $Messagelinks = '<a href=' . $newFolderUser . '> User images</a>';
      $finalMessage = $Mensage . $Messagelinks;*/
  

    }
   

    $Mensage = implode(" - ", $finalRequest);
    $fp = fopen($destinationBackupEmail . "/Email-Backup-" . $nameRequestUser . '.html',"wb");
      fwrite($fp, $Mensage);
      fclose($fp);
    sendEmail($fromEmail, $nameFrom, $to, $toName, $Subject, "", $Mensage);
      
  }   


  function sendEmail($FromEmail, $FromName, $ToEmail, $ToName, $Subject, $TextPart = "", $HtmlPart = "")
  {
      $mj = new \Mailjet\Client('df688e112155d22becae577b1bab378e','6227de54c3ae3ec74b69364836aefe74',true,['version' => 'v3.1']);
      $body = [
      'Messages' => [
        [
          'From' => [
            'Email' => $FromEmail,
            'Name' => $FromName
          ],
          'To' => [
            [
              'Email' => $ToEmail,
              'Name' => $ToName
            ]
          ],
          'Subject' => $Subject,
          'TextPart' => $TextPart,
          'HTMLPart' => $HtmlPart,
          'CustomID' => "AppGettingStartedTest"
        ]
      ]
    ];
    
    $response = $mj->post(Resources::$Email, ['body' => $body]);
    $response->success();

  }
  


    ?>
  </body>
</html>
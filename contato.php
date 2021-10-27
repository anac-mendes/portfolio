<?php
$msg = '';
//Don't run this unless we're handling a form submission
if (array_key_exists('email', $_POST)) {
    date_default_timezone_set('Etc/UTC');

 require("./phpmailer/src/PHPMailer.php");
require("./phpmailer/src/SMTP.php");

    //Create a new PHPMailer instance
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    $mail->IsSMTP();
    $mail->SMTPDebug = 0;
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'ssl';
    $mail->Host = "mail.anacmendes.com";
    $mail->Port = 465;
    $mail->IsHTML(true);
    $mail->Username = "contato@anacmendes.com";
    $mail->Password = "mosquito16";
    $mail->SetFrom("contato@anacmendes.com");
    //Send the message to yourself, or whoever should receive contact for submissions
    $mail->addAddress('contato@anacmendes.com', 'Ana');
    //Put the submitter's address in a reply-to header
    //This will fail if the address provided is invalid,
    //in which case we should ignore the whole request
    if ($mail->addReplyTo($_POST['email'], $_POST['name'])) {
        $mail->Subject = 'Contato - Ana Carolina Mendes';
        //Keep it simple - don't use HTML
        $mail->isHTML(false);
        //Build a simple message body
        $mail->Body = <<<EOT
Email: {$_POST['email']}
Name: {$_POST['name']}
Message: {$_POST['message']}
EOT;
        //Send the message, check for errors
        if (!$mail->send()) {
            //The reason for failing to send will be in $mail->ErrorInfo
            //but you shouldn't display errors to users - process the error, log it on your server.
            $msg = 'Desculpe, mas algo deu errado. A mensagem não foi enviada';
        } else {
            $msg = 'Mensagem enviada! Obrigada por entrar em contato.';
        }
    } else {
        $msg = 'E-mail inválido.';
    }
}
?>

<!doctype html>
<html lang="en">
  <head><meta http-equiv="Content-Type" content="text/html; charset=gb18030">
    <!-- Required meta tags -->
    
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- CSS DOS SCRIPTS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/animate.min.css">


 <!-- CSS DO SITE -->
    <link rel="stylesheet" href="css/template.css">

   <!-- HTML5 shim ae Respond.js para IE8 suportar HTML5 elements -->
  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
   <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>


<!-- TITULO DO SITE -->
    <title>Portfólio de Ana Carolina</title>

  </head>
  <body>
    <div class="page1"> 
      
    <nav>
    <ul>
        <li><a href="index.html"><img src="img/icone1.svg"  > <em></em></a></li>
        <li><a href="about.html"><img src="img/icone2.svg" > <em></em></a></li>
        <li><a href="portfolio.html"><img src="img/icone3.svg" > <em></em></a></li>
        <li><a href="contato.php"><img src="img/icone4.svg" > <em></em></a></li>
      </ul>
    </nav>
  

    
    <div class="fundo">
      <div class="conteudo">
        <div class="fundocontato">
          <h2>Contato</h2><br>
          
  <?php if (!empty($msg)) {
    echo "<h2>$msg</h2>";
} ?>
<form method="POST" id="contato">
    <label for="name">Nome: <input type="text" name="name" id="name"></label><br>
    <label for="email">E-mail: <input type="email" name="email" id="email"></label><br>
    <label for="message">Mensagem: <textarea name="message" id="message" rows="8" cols="20"></textarea></label><br>
    <input type="submit" value="ENVIAR">
</form>
    
          
      </div>
      </div>
      </div>
      </div>
 

     <!-- JAVASCRIPT LIBS -->
<script type="text/JavaScript" src="js/jquery-3.4.1.min.js"></script>
    <script type="text/JavaScript" src="js/bootstrap.min.js"></script>
   


  </body>
</html>
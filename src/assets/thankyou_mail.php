<?php

header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

$_POST = json_decode(file_get_contents('php://input'), true);


$option = $_POST['name'];

$data = [ 'name' => $_POST['name'], 'email' =>$_POST['email'], 'phone' =>$_POST['phone'] ,'service' =>$_POST['service'], 'message' =>$_POST['message']];

header('Content-type: application/json');
echo json_encode( $data );

    $to = 'sugumar@brandstory.in';
    $subject = "BSTY new lead General Enquiry | " . $_POST['name']. " | " . $_POST['company']."";
    $message = "
    <html>
    <head>
    </head>
    <body>
      You have received a new enquiry from ". $_POST['page']."
      <br><br>
    <table>
  <tr>
    <td>Name : </td>
    <td>". $_POST['name']."</td>
  </tr>
  <tr>
    <td>Email : </td>
    <td>". $_POST['email']."</td>
  </tr>
  <tr>
    <td>Phone : </td>
    <td>". $_POST['phone']."</td>
  </tr>
  <tr>
    <td>Company : </td>
    <td>". $_POST['company']."</td>
  </tr>
  <tr>
    <td>Service : </td>
    <td>". $_POST['service']."</td>
  </tr>
  <tr>
    <td>Message : </td>
    <td>". $_POST['message']."</td>
  </tr>
   <tr>
    <td>page : </td>
    <td>". $_POST['page']."</td>
  </tr>
</table>

    </body>
    </html>
    ";
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
    $headers .= 'From: <'. $_POST['email'].'>' . "\r\n";
    //$headers .= 'Cc: <leads@brandstory.in>,<akhil@brandstory.in>,<madhavi@brandstory.in>' . "\r\n";
    // $headers .= 'Cc: <leads@brandstory.in>,<akhil@brandstory.in>' . "\r\n";
    // $headers .= 'Bcc: <bala@brandstory.in>' . "\r\n";

    // SEND MAIL
    mail($to,$subject,$message,$headers);

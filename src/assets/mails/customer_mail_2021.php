<?php

header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

$_POST = json_decode(file_get_contents('php://input'), true);

if (isset($_POST['name']) || isset($_POST['email']) || isset($_POST['phone']) || isset($_POST['service']) || isset($_POST['message']), isset($_POST['linkedin']), isset($_POST['organisation']) || isset($_POST['budget']) || isset($_POST['website']) ){


$name = isset($_POST['name']) ? $_POST['name']:'';
$email = isset($_POST['email']) ? $_POST['email']:'';
$phone = isset($_POST['phone']) ? $_POST['phone']:'';
$service = isset($_POST['service']) ? $_POST['service']:'';
$message = isset($_POST['message']) ? $_POST['message']:'';
$linkedin = isset($_POST['linkedin']) ? $_POST['linkedin']:'';
$organisation = isset($_POST['organisation']) ? $_POST['organisation']:'';
$budget = isset($_POST['budget']) ? $_POST['budget']:'';
$website = isset($_POST['website']) ? $_POST['website']:'';

// $data = [ 'name' => $name, 'email' =>$email, 'phone' =>$phone ,'service' =>$service, 'message' =>$message,'linkedin' =>$linkedin, 'organisation' =>$organisation ,'budget' =>$budget, 'website' =>$website ];


header('Content-type: application/json');
// echo json_encode( $data );

    $to = $email;
    $subject = "BSTY new lead General Enquiry | " . $name. " | " . $service."";
    $message = "
    <html>
    <head>
    </head>
    <body>

      <img src='https://brandstory.in/assets/images/wp-content/uploads/2017/10/logo.png' alt='brandstory' >

      <br>

      <p>Hello ". $name.",</p>

      <p>Thank you for reaching out to Brandstory. </p>

      <p> Kindly click the below link to schedule a meeting with us at your convenience, </p>


      <a href='https://calendly.com/brandstorydigital/60min'  target='_blank'>https://calendly.com/brandstorydigital/60min</a>

      <br>
      <br>


      <p>Thanks,</p>

      <p>Client Success, BrandStory</p>

    </body>
    </html>
    ";
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
    $headers .= 'From: <info@brandstory.in>' . "\r\n";
    //$headers .= 'Cc: <leads@brandstory.in>,<akhil@brandstory.in>,<madhavi@brandstory.in>' . "\r\n";
    //$headers .= 'Cc: <leads@brandstory.in>,<akhil@brandstory.in>' . "\r\n";
    //$headers .= 'Bcc: <bala@brandstory.in>' . "\r\n";

    // SEND MAIL
    mail($to,$subject,$message,$headers);
}

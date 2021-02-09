<?php
$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'POST')
{

    // Method is POST for Insert
    doPost();

}
elseif ($method == 'GET')
{

    // Method is GET  for Select
    badRequest();

}
elseif ($method == 'PUT')
{

    // Method is PUT  for Updates
    badRequest();

}
elseif ($method == 'DELETE')
{

    // Method is DELETE
    badRequest();

}
else
{

    // Method unknown
    
}

/*********************** Create User *******************************/
/**
 * Post Request and Make Operations
 */

function doPost()
{
   
    
    // get id of product to be edited
    $data = json_decode(file_get_contents("php://input"));


    if (isset($data->name))
    {

        $dateTime = date("Y-m-d H:i:s");
        $name = $data->name;
        $mobile = $data->phone;
        $email = $data->email;
        $service = $data->service;
        $message = $data->message;

        $mail_body_content = "<table border='1' width='58%' style='width: 70%;border: 1px;   
        border-collapse: inherit;'><tr align='center' bgcolor='#00CCFF'>
        <td height='46' colspan='2' 'center'><strong>Enquiry Details</strong></td></tr>
        <tr><td><strong>Name:</strong></td><td> $name</td></tr>
        <tr><td><strong>Mobile:</strong></td><td> $mobile</td></tr>
        <tr><td><strong>Email:</strong></td> <td>$email</td></tr>
        <tr><td><strong>Service:</strong></td> <td>$service</td></tr>
        <tr><td><strong>Message:</strong></td> <td>$message</td></tr>
        <tr><td><strong>Date:</strong></td> <td>$dateTime</td></tr>
        </table>";

        $subject="New Enquiry From ( ".$name." ) - ".$dateTime;

        $data = array(
            "Host" => "mail.ttsbiriyani.in",
            "Username" => "info@ttsbiriyani.in",
            "Password" => "ue]FSxGHFn6q",

            "To" => "info@brandstory.in",
            "Cc" => "<leads@brandstory.in>,<akhil@brandstory.in>",
            "Bcc" => "<bala@brandstory.in>",

            "From" => $email,
            "Subject" => $subject,
            "Body" => $mail_body_content,
            "nocache" => 972721,
            "Action" => "Send"
        );
        $data_string = json_encode($data);

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, "https://smtpjs.com/v3/smtpjs.aspx?");

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/x-www-form-urlencoded',
            'DNT: 1'
        ));

        curl_setopt($ch, CURLOPT_POST, 1);
      
        // In real life you should use something like:
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);

        // Receive server response ...
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $server_output = curl_exec($ch);

        curl_close($ch);

//     var_dump($server_output);


        // Further processing ...
        if ($server_output == "OK")
        {

            http_response_code(200);
            echo json_encode(array(
                "status" => 200,
                "message" => "Email sent Successfully.",
            ));
            die();

        }
        else
        {

            // echo "failed";
            badRequest();

        }

    }
    else
    {

        badRequest();
    }

}

function badRequest()
{

    http_response_code(400);
    echo json_encode(array(
        "status" => 400,
        "message" => "Mail Send Failed!",
    ));
    die();

}

?>

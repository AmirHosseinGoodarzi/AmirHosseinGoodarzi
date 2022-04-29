<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require('telegram.php');
//https://api.telegram.org/bot2142005737:AAE7_yyXDyopPVEZT2d9dPUpyZYOyKdOUx0/setWebhook?url=https://neogamee.ir/resumeApiContactMeBot
$token = "2142005737:AAE7_yyXDyopPVEZT2d9dPUpyZYOyKdOUx0";
$chatId = "1262429671"; // myPv chatId with bot
$telegram = new Telegram($token);
if (isset($_GET["name"]) && isset($_GET["email"]) && isset($_GET["message"])) {
    $text = "👋🏻 Amir 👋🏻
    \nYou Have Messave from Your Porfolio 💪🏻 
    \n✍🏼 Sender's Name is :" . $_GET["name"] . " 
    \n✉️ Sender's Email is : " . $_GET["email"] . " 
    \n🧧 message : " . $_GET["message"];
    $telegram->sendMessageNormal($chatId, $text);
    http_response_code(200);
    echo json_encode(
        (object)[
            'ok' => true,
            'message' => "Message has been sent Successfully",
            'data'=>""
        ]
    );
} else {
    http_response_code(406);
    echo json_encode(
        (object)[
            'ok' => false,
            'message' => "Message Not sent",
            'data'=>""
        ]
    );
}

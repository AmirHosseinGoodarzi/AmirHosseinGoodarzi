<?php

class Telegram
{
    public $token;
    public function __construct($token)
    {
        $this->token = $token;
    }
    public function sendMessageNormal($userid, $text)
    {
        $url = 'https://api.telegram.org/bot' . $this->token . '/sendMessage';
        $post_fields =  array(
            'chat_id' => $userid,
            'text' => $text,
        );
        $this->executeCURL($url, $post_fields);
    }
    public function executeCURL($url, $post_fields)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            "Content-Type:multipart/form-data"
        ));
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post_fields);
        $output = curl_exec($ch);
        curl_close($ch);
        return $output;
    }
}

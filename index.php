<?php

	$endPoint = 'https://api.cloudflare.com/client/v4/';
	$method = 'zones';
	$apiKey = '63591d7026060b416f905718785e3446bc087';
	$email = 'aegrant@gmail.com';

	$params = array();
	$params['X-Auth-Email'] = $email;
	$params['X-Auth-Key'] = $apiKey;

	$header = array();
	$header['X-Auth-Email'] = $email;
	$header['X-Auth-Key'] = $apiKey;

	$urlParams = array();
	foreach($params as $key=>$value)
	{
		$urlParams[] = $key.'='.$value;
	}
	$urlParams = implode('&', $urlParams);
	$theUrl = $endPoint.$method.'?'.$urlParams;

	$headerValues = array();
	foreach($header as $key=>$value)
	{
		$headerValues[] = $key.':'.$value;
	}

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $theUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
    curl_setopt($ch, CURLOPT_HEADER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headerValues);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:18.0) Gecko/20100101 Firefox/18.0');
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_ENCODING, "");

    $data = curl_exec($ch);
    $error = curl_error($ch);
    curl_close();

    if($error)
    {
    	echo 'Error: '.$error;
    	die();
    }

    var_dump($data);
?>	
<?php
    require_once __DIR__ . '/vendor/autoload.php';

// configuration object
    $config = new EmsApi\Config([
        'apiUrl'    => 'https://mw.ultgg.io/api/index.php/',
        'apiKey'    => '3b1be39c33761bc77ee4fdedcad737bb4c425e8c',

        // components
        'components' => [
            'cache' => [
                'class'     => \EmsApi\Cache\File::class,
                'filesPath' => __DIR__ . '/data/cache', // make sure it is writable by webserver
            ]
        ],
    ]);

// now inject the configuration and we are ready to make api calls
    \EmsApi\Base::setConfig($config);

// start UTC
    date_default_timezone_set('UTC');

// Takes raw data from the request
    $json = file_get_contents('php://input');

// Converts it into a PHP object
    $data = json_decode($json, true);
    error_log("string: " . $json);
    error_log(print_r($data, true));

    $endpoint = new EmsApi\Endpoint\ListSubscribers();
// CREATE / UPDATE EXISTING SUBSCRIBER
    $response = $endpoint->createUpdate('ov9123zvrc048', [
        'EMAIL' => $data['EMAIL'],
        'FNAME' => $data['FNAME'] ?? '',
        'LNAME' => $data['LNAME'] ?? '',
        'PHONE_NUMBER' => $data['PHONE_NUMBER'] ?? '',
        'COUNTRY' => $data['COUNTRY'] ?? '',
    ]);

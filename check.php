<?php
$online = file_get_content('https://minecraft-api.com/api/query/online/{ip}/{port}');
$json = file_get_content('https://minecraft-api.com/api/query/online/{ip}/{port}/json');
echo $online;
echo $json;
?>
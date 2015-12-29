<?php

$receiver = "Molly Lester <molly.f.lester@gmail.com>";
$subject = "Test Mail";
$mssg = "Lorem ipsum sit dolor asdfa asaba nsda aeavasadshs sadfa";
$mssg = wordwrap($mssg, 70);
$from = "From: molly.f.lester@gmail.com";

var_dump(mail($receiver, $subject, $mssg, $from));

?>
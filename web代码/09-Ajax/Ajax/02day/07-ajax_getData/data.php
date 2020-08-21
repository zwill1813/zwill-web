<?php

$name=$_GET['name'];
$nameArr=array('jack','rose','robot','john');
 //   判断是否在数组中存在
  // 参数1 查询的内容
  // 参数2 去哪个数组查询
 $result= in_array($name,$nameArr);

 //   返回不同的内容给用户即可
 if($result==true){
     echo '很遗憾！用户名已被注册！';

 }else{
     echo '恭喜您，你已成功注册！';
 }


sleep(4);


?>
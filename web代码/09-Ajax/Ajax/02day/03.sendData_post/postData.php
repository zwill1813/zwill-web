<?php 

  // 设置中文编码
  header('content-type:text/html;charset=utf-8');

  // 直接返回
  // post提交 的数据
  // 使用 $_POST 这个超全局变量来 返回
  print_r($_POST);
  // include './data_fruit_list.php';
  // for ($i=0; $i <count($arr) ; $i++) { 
  //   echo '<h1>'.$arr[$i]['name'].'</h1>';
  //   echo '<h2>'.$arr[$i]['href'].'</h2>';
  // }
?>

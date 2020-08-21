

<?php
  // 设置中文编码
  header('content-type:text/html;charset=utf-8');

// php的引入页面
include 'data_fruit_list.php';

// $arr[0] = array('href' => 'detail/detail1.php?flag=banana','path' => 'img/banana1.jpg','name' => '香蕉');

// print_r($arr);
echo '<ul>';
for($i=0;$i<count($arr);$i++){
 echo '<li>';
 echo '<a href="'.$arr[$i]['href'].'">点击一下'.$arr[$i]['name'].'</a>';
 echo '<img src="'.$arr[$i]['path'].'" alt="">';
 echo '<span>'.$arr[$i]['name'].'</span>';
 echo '</li>';
}
echo '</ul>';


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .row .thumbnail img {
            width: 242px;
            height: 220px;
        }
        .container{
        background-color:pink;
        }
    </style>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <script src="bootstrap/js/jquery.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
</head>

            
<body>
    <div class="container">
        <div class="row">
        <?php
           include 'data_lol_list.php';
  for ($i=0; $i <count($heroArr) ; $i++) { 
    echo ' <div class="col-sm-6 col-md-4">
    <div class="thumbnail">
        <img src="'.$heroArr[$i]['champion_icon'].'" alt="...">
        <div class="caption">
            <h3>'.$heroArr[$i]['champion_name'].'</h3>

            <p><a href="#" class="btn btn-primary" role="button">购买</a> <a href="#" class="btn btn-default"
                    role="button">详情</a></p>
        </div>
    </div>
</div>';
  }
       
         
         ?> 
        </div>
    </div>
</body>

</html>
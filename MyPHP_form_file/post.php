<?php
$filePath = 'C:/inetpub/wwwroot/MyPHP_form_file/files';
$data = file_get_contents($filePath);
header('Content-type: image/jpg,image/png,image/gif');

$name = $_POST["name"];
$gender = $_POST["gender"];
$blood = $_POST["blood"];
$opinion = $_POST["opinion"];
$upload_file=$_FILES["upload_file"];

//↓指定されたファイルがHTTPPOSTを経由しアップロードされているかどうかを確認する
if (is_uploaded_file($_FILES["upload_file"]["tmp_name"])) {

//↓一時的に保存されている場所から、実際のディレクトリに移動させ、
//名前をtmp_nameからnameに変更する
 if (move_uploaded_file($_FILES["upload_file"]["tmp_name"], 
  "files/" . $_FILES["upload_file"]["name"]))
  //移動前のパス,
  //移動後のパス
  {
  chmod("files/" . $_FILES["upload_file"]["name"], 0644); 
  //移動できたら、パーミッション設定
  }
 //移動できない＝ファイルが無効 
  else {
  echo "ファイルをアップロードできません。";
  }
  } 

//ファイルがない  
else {
  echo "ファイルが選択されていません。";
  }
?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>入力内容確認</title>
</head>
<body>
  <h1>入力内容確認</h1>
  <p>お名前：<?=$name?></p>
  <p>性別：<?=$gender?></p>
  <p>血液型：<?=$blood?></p>
  <p>ご意見：<?=$opinion?></p>
  <p>添付ファイル：<?=$_FILES["upload_file"]["name"] ?></p>
  <p>
  <img src="<?php echo $data;?>"></p>

</body>
</html>


<!DOCTYPE HTML>  
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" href="css/aud.css">
    <script src="js/aud.js"></script>
</head>

<body>
    <?php
        $connection=mysqli_connect('localhost', 'root', '', 'everydjay');
        $data = $_POST['inviteID'];
        echo $data;
        $sql="SELECT * FROM djplaylist WHERE inviteID = '".$data."'";
        $records=mysqli_query($connection, $sql);
        if (mysqli_num_rows($records)>0){
            while ($eachrow=mysqli_fetch_array($records)){
                echo "<tr>";
                
                echo "<td>".$eachrow['inviteID']."</td>";
                echo "<td>".$eachrow['djID']."</td>";
                echo "<td>".$eachrow['songList']."</td>";
                echo "<td>".$eachrow['otherThings']."</td>";
                                
                echo "<tr>";
            }
        }else{
            echo "Not fectching anything from the database";
        }
    ?>

    <form method="post">
        <input type="text" name="inviteID" id="inviteID" placeholder="insert yout inviteID: "><br>
        <input type="submit" name="submit" value="submit">
    </form> 
</body>

</html>
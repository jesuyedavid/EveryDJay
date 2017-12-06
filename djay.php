<!DOCTYPE HTML>  
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" href="css/dj.css">
    <script src="js/dj.js"></script>

    <?php
        $connection=mysqli_connect('localhost', 'root', '', 'everydjay');
        $iDdata = $_POST['djID'];
        $uNdata=$_POST['djUsername'];
        $sql="SELECT * FROM alldjays WHERE djNo = '".$iDdata."'";
        $records=mysqli_query($connection, $sql);
    ?>

</head>

<body>
<?php
        if (mysqli_num_rows($records)>0){
            while ($eachrow=mysqli_fetch_array($records)){
                echo "<tr>";
                echo "<td>".$eachrow['djNo']."</td>";
                echo "<td>".$eachrow['firstName']."</td>";
                echo "<td>".$eachrow['lastName']."</td>";
                echo "<td>".$eachrow['userName']."</td>";             
                echo "<tr>";
            }
        }else{
            echo "Invalid Invite ID";
        }
    ?>
    <div id="djIDform">
        <form id="inviteID" action="" method="POST">
            DJ ID: <input type="text" name="djID"> <br>
            DJ Username: <input type="text" name="djUsername">
            <br><br>   
            <text id="demo"></text>
            <input type="submit" name="getdjID" id="getdjID" value="Enter">
        </form>
    <div>
    <div id="djSongs">
        <a>Spotify</a><br>
        <a>Youtube</a><br>
        <a>Google Music</a><br>
    </div>
</body>

</html>
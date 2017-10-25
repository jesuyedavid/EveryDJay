<?php
    $connection=mysqli_connect('localhost', 'root', '');
    mysqli_select_db($connection,'everydjay');
    $sql="SELECT * FROM djplaylist";
    $records=mysqli_query($connection, $sql);
?>

<!DOCTYPE HTML>  
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" href="css/aud.css">
    <script src="js/aud.js"></script>
</head>

<body>
    <div>
        <div id="inviteID">
            Invite ID: <input type="text" name="inviteID">
            <br><br>   
            <text id="demo"></text>
            <input type="submit" name="getInviteID" id="getInviteID" value="Enter">
        </div>

        <div id="djSongs">
            Here is your DJ's playlist:
            <table width="600" border="1" cellpaddin="1" cellspacing="">
            <tr>
                <th>inviteID</th>
                <th>djID</th>
                <th>songList</th>
                <th>otherThings</th>
            </tr>
            
            <?php
            while ($eachrow=mysqli_fetch_assoc($records)){
                echo "<tr>";
                
                echo "<td>".$eachrow['inviteID']."</td>";
                echo "<td>".$eachrow['djID']."</td>";
                echo "<td>".$eachrow['songList']."</td>";
                echo "<td>".$eachrow['otherThings']."</td>";
                                
                echo "<tr>";
            }?>
            
            </table>
        </div>
    </div>
</body>

</html>
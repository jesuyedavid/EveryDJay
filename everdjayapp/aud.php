<!DOCTYPE HTML>  
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" href="css/aud.css">
    <link rel="shortcut icon" href="pics/favicon.jpg">
    <script src="js/aud.js"></script>
</head>

<body>
    <?php
        $connection=mysqli_connect('db', 'user', 'test', 'myDb');
        $entryForm=False;
        if (isset($_POST['inviteID'])){
            $data=$_POST['inviteID'];
            $entryForm=True;
        };
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
            echo "Invalid Invite ID";
        }
    if($entryForm){
    ?>
        <div id="songIdeas">
            <div class="input_fields_wrap">
                <div><input type="text" name="mytext[]"></div>
                <button class="add_field_button">Add Another Song</button>
            </div>
            <button type="button" class="submit">Done</button>
        </div>
    <?php
    }
    ?>

    <form method="post" id="inviteIDForm">
        <input type="text" name="inviteID" id="inviteID" placeholder="insert an inviteID here"><br>
        <input type="submit" name="submit" value="submit" id="inviteIDSubmit">
    </form> 

</body>

</html>

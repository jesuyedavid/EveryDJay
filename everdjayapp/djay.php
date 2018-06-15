<!DOCTYPE HTML>  
<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <link rel="stylesheet" href="css/dj.css">
        <link rel="shortcut icon" href="pics/favicon.jpg">
        <script src="js/dj.js"></script>
    </head>

    <body>
        <div id="djIDform">
             <div id="inviteID" >
                 DJ ID: <input type="text" id="djID">
                 DJ password: <input type="text" id="djpas">
                 <input type="submit" id="getdjID" value="Login">
             </div>
             <a href="#" id="outdj" style="text-decoration: none; display:none">Logout</a>
             <a id="noinput3"></a>
        </div>

        <div>
            <button id="creadjID">Create ID</button>
            <div id="newuser" style="display:none">
                <input type="text" placeholder="enter username" id="enuser">
                <input type="password" placeholder="enter password" id="enpass">
                <input type="password" placeholder="confirm password" id="cnfpass">
                <a href="#" id="clreg"  style="text-decoration: none">Close</a><br>
                <button id="finreg" >Done!</button><a id="noinput2"></a> 
            </div>
        <div>
        
        <div id="createEvent">
            <button id="creaEveFunc" >Create Event</button>
            <div id="evelist" style="display:none">
                Name: <input id="djname" type="text" value=""><br><br><!--first  style="display:none" and last name of organizer-->
                Purpose: <input id="djpurpose" type="text" value=""><br><br><!--birthday, graduation, charity, funeral-->
                Date:<input id="djdate" type="date" value=""><br><br>
                Time:<input id="djtime" type="time" value="">
                <a href="#" id="clevelist"  style="text-decoration: none">Close</a><br><br>
                <button id="doneIn" >Done!</button><a id="noinput"></a>
            </div> 
        </div>
        
        <div id="answers">

        </div>
        <div id="djSongs">
            <a>Spotify</a><br>
            <a>Youtube</a><br>
            <a>Google Music</a><br>
        </div>
    </body>

</html>

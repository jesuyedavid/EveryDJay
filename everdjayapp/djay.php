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
             <form id="inviteID" action="" method="POST">
                 DJ ID: <input type="text" name="djID">
                 DJ Username: <input type="text" name="djUsername">
                 <br><br>   
                 <text id="demo"></text>
                 <input type="submit" name="getdjID" id="getdjID" value="Enter">
             </form>
        </div>
        <div id="createEvent">
            <button id="creaEveFunc" >Create Event</button>
            <div id="evelist" style="display:none">
                Name: <input id="djname" type="text" value=""><br><br><!--first  style="display:none" and last name of organizer-->
                Purpose: <input id="djpurpose" type="text" value=""><br><br><!--birthday, graduation, charity, funeral-->
                Date:<input id="djdate" type="date" value=""><br><br>
                Time:<input id="djtime" type="time" value=""><br><br>
                <button id="doneIn">Done!</button>
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

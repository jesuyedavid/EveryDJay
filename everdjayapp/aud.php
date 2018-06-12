<!DOCTYPE HTML>  
<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <link rel="stylesheet" href="css/aud.css">
        <link rel="shortcut icon" href="pics/favicon.jpg">
        <script src="js/aud.js"></script>
        <script src="js/dj.js"></script>
    </head>

    <body>
        <div id="inviteIDForm">
            <input type="text" name="inviteID" id="inviteID" placeholder="insert an inviteID here"><br>
            <input type="submit" name="submit" value="submit" id="inviteIDSubmit">
            <a id="noinput"></a>
            <br><br> 
        </div>

        <div id="curplaylist" style="display:none"><br></div>

        <div id="songIdeas" style="display:none">
            <div class="input_fields_wrap">Add Your Songs!</div>
            <div>
                <input type="text" name="mytext[]" placeholder="Type in a song">
                <a href="#">Remove</a><br>
                <button class="add_field_button">Add Another Song</button>
                <button type="button" class="submit">Done</button>
            </div><br><br>
        </div>
        
        <div id="createEvent">
            <button id="creaEveFunc" >Create Event</button>
            <div id="evelist" style="display:none">
                Name: <input id="djname" type="text" value=""><br><br><!--first  style="display:none" and last name of organizer-->
                Purpose: <input id="djpurpose" type="text" value=""><br><br><!--birthday, graduation, charity, funeral-->
                Date:<input id="djdate" type="date" value=""><br><br>
                Time:<input id="djtime" type="time" value="">
                <a href="#" id="clevelist"  style="text-decoration: none">Close</a><br><br>
                <button id="doneIn">Done!</button><a id="noinput"></a>
            </div> 
        </div>
    </body>
</html>

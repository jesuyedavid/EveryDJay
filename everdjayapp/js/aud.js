const renderResponseAud = (res) => {
    if(res.errors){
        document.getElementById('curplaylist').innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
    } else {  
        document.getElementById('curplaylist').innerHTML = `<p>The current playlist for this party is: </p><p> ${res[0]['playlist']} </p>`;
    }
}

const getCurPlay = async()=>{ 
    var inviteID=document.getElementById("inviteID").value;
    
    //check to make sure nothing is empty
    if(inviteID==""){
        document.getElementById('noinput').style.display="block";
        document.getElementById('noinput').innerHTML = "<p>Please enter an inviteID</p>";
        document.getElementById('curplaylist').style.display="none";
        return
    }
    
    //show and hide somethings
    document.getElementById('noinput').style.display="none";
    document.getElementById('curplaylist').style.display="block";
    document.getElementById('songIdeas').style.display="block";

    //api url
    const url='https://everydjay-a275.restdb.io/rest/eventplaylist';
    const endpoint=url;

    try{
      const response=await fetch(endpoint,{
        method:'GET',
        headers:{
                    'Content-type': 'application/json',
                    'apikey': "5b1e107f46624c7b24444db4"
                    //'apikey': "526376de89203f9f9644c5da4f07cbd3b847f"
                }
      });
      if(response.ok){
        const jsonResponse=await response.json();
        renderResponseAud(jsonResponse);
      }
    }
    catch(error){
      console.log(error);
    }
    //document.getElementById('evelist').style.display="none";
}



$(document).ready(function() {
    var max_fields      = 10; //maximum input boxes allowed
    var wrapper         = $(".input_fields_wrap"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID
    
    var x = 1; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div><input type="text" name="mytext[]" placeholder="Type in a song"><a href="#" class="remove_field">Remove</a></div>'); //add input box
        }
    });
    
    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })

    var getplaylist = document.getElementById("inviteIDSubmit");
    getplaylist.addEventListener('click', getCurPlay);

    document.getElementById("creaEveFunc").addEventListener('click', function(){creaEveFuncC("evelist")});
    document.getElementById("doneIn").addEventListener('click', accessDB);
    document.getElementById("clevelist").addEventListener('click', function(){closeEvenMenu("evelist")});
    
});
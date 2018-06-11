const renderResponse = (res) => {
    if(res.errors){
        document.getElementById('answers').innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
    } else {  
        document.getElementById('answers').innerHTML = `<p>DJays are: </p><p> ${res[0]['Location']} </p>`;
    }
}

  
const getSuggestions = async()=>{    
    const endpoint='https://everydjay-a275.restdb.io/rest/c-2-import-cal-event-sample';
    try{
      const response=await fetch(endpoint,{
        method:'GET',
        headers:{
                    'Content-type': 'application/json',
                    'apikey': "5b1b959146624c7b24444d69"
                }
      });
      if(response.ok){
        const jsonResponse=await response.json();
        renderResponse(jsonResponse);
      }
    }
    catch(error){
      console.log(error);
    }
}

creaEveFuncC=()=>{
    document.getElementById('evelist').style.display="block";
}

createDone=()=>{
    document.getElementById('evelist').style.display="none";
}

//to run our predefined functions

$(document).ready(function() {
    var el = document.getElementById("creaEveFunc");
    el.addEventListener('click', creaEveFuncC);

    var doneIn = document.getElementById("doneIn");
    doneIn.addEventListener('click', createDone);

    getSuggestions()
});

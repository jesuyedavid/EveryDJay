const renderResponse = (res) => {
    if(res.errors){
        document.getElementById('answers').innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
    } else {  
        document.getElementById('answers').innerHTML = `<p>DJays are: </p><p> ${res[0]['Location']} </p>`;
    }
}

const generateID=(djname, djpurpose, djdate, djtime)=>{
    return (djdate+djname+djpurpose+djtime).replace(/\W/g, '')
}
  
const accessDB = async()=>{ 
    var djname=document.getElementById("djname").value;
    var djpurpose=document.getElementById("djpurpose").value;
    var djdate=document.getElementById("djdate").value;
    var djtime=document.getElementById("djtime").value

    var data = JSON.stringify({
        "evenID": generateID(djname, djpurpose, djdate, djtime),
        "Name": djname,
        "Purpose":djpurpose,
        "Date":djdate,
        "Time":djtime
      });

    const endpoint='https://everydjay-a275.restdb.io/rest/eventfromdj';
    try{
      const response=await fetch(endpoint,{
        method:'POST',
        body: data,
        headers:{
                    'Content-type': 'application/json',
                    'apikey': "5b1e107f46624c7b24444db4"
                }
      });
      if(response.ok){
        const jsonResponse=await response.json();
        //console.log(jsonResponse);
      }
    }
    catch(error){
      console.log(error);
    }
    createDone();
}

creaEveFuncC=()=>{
    document.getElementById('evelist').style.display="block";
}

createDone=()=>{
    document.getElementById("djname").value="";
    document.getElementById("djpurpose").value="";
    document.getElementById("djdate").value="";
    document.getElementById("djtime").value="";    
    document.getElementById('evelist').style.display="none";
}

//to run our predefined functions
//after page has loaded
$(document).ready(function() {
    var el = document.getElementById("creaEveFunc");
    el.addEventListener('click', creaEveFuncC);

    var eventfromdj = document.getElementById("doneIn");
    eventfromdj.addEventListener('click', accessDB);

});

const renderResponse = (res) => {
    if(res.errors){
        document.getElementById('answers').innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
    } else {  
        document.getElementById('answers').innerHTML = `<p>DJays are: </p><p> ${res[0]['Location']} </p>`;
    }
}

const generateID=(djname, djpurpose, djdate, djtime)=>{
    return (djdate.slice(0,2)+djname.slice(0,2)+
    djpurpose.slice(0,2)+djtime.slice(0,2)).replace(/\W/g, '')
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
    
    //check to make sure nothing is empty
    if(djname==""||djdate==""||djpurpose==""||djtime==""){
        document.getElementById('noinput').innerHTML = "<p>Please fill all input</p>";
        return
    }

    const endpoint='https://everydjay-a275.restdb.io/rest/eventfromdj';
    try{
      const response=await fetch(endpoint,{
        method:'POST',
        body: data,
        headers:{
                    'Content-type': 'application/json',
                    //'apikey': "5b1e107f46624c7b24444db4"
                    'apikey': "526376de89203f9f9644c5da4f07cbd3b847f"
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

creaEveFuncC=(idtopen)=>{
    document.getElementById(idtopen).style.display="block";
}

const closeEvenMenu =(idtoclose)=>{
    document.getElementById(idtoclose).style.display="none";
}

const regNewUser=async()=>{
    var enuser=document.getElementById("enuser").value;
    var enpass=document.getElementById("enpass").value;
    if(enpass != document.getElementById("cnfpass").value){
        document.getElementById("noinput2").innerHTML = "<p>passwords do not match</p>";
        return;
    }else{
        
        var data = JSON.stringify({
            "djid": enuser,
            "djpassword":enpass,
          });
    
        const endpoint='https://everydjay-a275.restdb.io/rest/alldjsonfile';
        try{
          const response=await fetch(endpoint,{
            method:'POST',
            body: data,
            headers:{
                        'Content-type': 'application/json',
                        //'apikey': "5b1e107f46624c7b24444db4"
                        'apikey': "526376de89203f9f9644c5da4f07cbd3b847f"
                    }
          });
          if(response.ok){
            const jsonResponse=await response.json();
            console.log(jsonResponse);
          }
        }
        catch(error){
          console.log(error);
        }
    }

    
}

createDone=()=>{
    document.getElementById("djname").value="";
    document.getElementById("djpurpose").value="";
    document.getElementById("djdate").value="";
    document.getElementById("djtime").value="";    
    document.getElementById('evelist').style.display="none";
}

loginDJ=async()=>{
    var djID=document.getElementById("djID").value;
    var djpas=document.getElementById("djpas").value;


    
    var found=false;
    if(djID == "" || djpas==""){
        document.getElementById("noinput3").innerHTML = "<p>Please fill all inputs</p>";
        return;
    }else{
    
        const endpoint='https://everydjay-a275.restdb.io/rest/alldjsonfile';
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
            for (var i = 0; i < jsonResponse.length; i++) { 
                if(jsonResponse[i].djid==djID && jsonResponse[i].djpassword==djpas){
                    //persistence on page refresh
                    localStorage.setItem("djID", djID);
                    localStorage.setItem("djpass", djpas);
                    found=true;
                    document.getElementById("inviteID").style.display="none";
                    document.getElementById("noinput3").innerHTML = `<p>Welcome:
                     ${djID} </p>`
                    document.getElementById('outdj').style.display="block";
                    return;
                    //djs can now login and register
                }
            }
            if(!found){
                document.getElementById("noinput3").innerHTML = "<p>User not found in our records</p>";
                return;
            }

            
          }
        }
        catch(error){
          console.log(error);
        }
    }

}

logoutDJ=()=>{
    djID=null;
    localStorage.setItem("djID", djID);
    location.reload();//reload page
}

checkLoggedIn=()=>{
    if(localStorage.getItem("djID")!="null"){
        document.getElementById("inviteID").style.display="none";
        document.getElementById("noinput3").innerHTML = `<p>Welcome: ${localStorage.getItem("djID")} </p>`
        document.getElementById('outdj').style.display="block";
    }
}
//to run our predefined functions
//after page has loaded
$(document).ready(function() {

    checkLoggedIn();
    document.getElementById("creaEveFunc").addEventListener('click', function(){creaEveFuncC("evelist")});
    document.getElementById("creadjID").addEventListener('click', function(){creaEveFuncC("newuser")});
    document.getElementById("doneIn").addEventListener('click', accessDB);
    document.getElementById("clevelist").addEventListener('click', function(){closeEvenMenu("evelist")});
    document.getElementById("clreg").addEventListener('click', function(){closeEvenMenu("newuser")});
    document.getElementById("finreg").addEventListener('click', regNewUser);
    document.getElementById("getdjID").addEventListener('click', loginDJ);
    document.getElementById("outdj").addEventListener('click', logoutDJ);
});


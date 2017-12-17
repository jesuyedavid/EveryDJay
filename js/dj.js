$(document).ready(function(){
    $("form").submit(function(e){
        e.preventDefault();
        await sleep(7000);
        $(this).hide(1000);
    });
});
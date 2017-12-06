$(document).ready(function(){
    /*$("#inviteIDForm").click(function(){
        $("#inviteID").css("display", "none");
    });*/
    $("#inviteIDForm").live('click',function(){
        $(this).parents('form').find('input[type="text"]').val('');
   });
});
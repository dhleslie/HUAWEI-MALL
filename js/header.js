$(function(){
    $(".c-banner .c-b-btn").change(function(){
        $("#sel2").empty()
        var p=$("#sel1").val()
        for(var i=0;i<cities[p].length;i++)
        {
            $("#sel2").append("<option value="+i+">"+cities[p][i]+"</option>")
        }
    })
})


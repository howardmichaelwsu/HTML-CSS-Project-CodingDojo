$(document).ready(function(){ 
    $("#data").click(function(){
        $ .get("https://api.thecatapi.com/v1/breeds?api_key=f8ab?api_key=f8abdec4-dcea-4a42-b610-9d39571f4791", function(data) {
        for(var i = 0; i < data.length; i++) {
        var name = data[i].name;
        var origin = data[i].origin;
        var ls = data[i].life_span;
        var wiki = data[i].wikipedia_url;
        var htmlStr = "";
        htmlStr += `<li>The breed of cat is: ${name} </li>`;
        htmlStr += `<li>The country of origin: ${origin} </li>`;
        htmlStr += `<li>The life span of the breed: ${ls} </li>`;
        htmlStr += `<li id="new">${wiki} </li>`;
        htmlStr += `<hr />`
        $("#api").append(htmlStr);
    }})    
    });
    $("#btn2").click(function(){
        $.get("https://api.thecatapi.com/v1/breeds?api_key=f8ab?api_key=f8abdec4-dcea-4a42-b610-9d39571f4791", function(data) {
            for(var i = 0; i < data.length; i++){
                var breed = data[i].name;
                var smart = data[i].intelligence;
                var health = data[i].health_issues;
                var social = data[i].social_needs;
                var htmlStr = "";
                htmlStr += `<li>Breed: ${breed} </li>`
                htmlStr += `<li>Intelligence: ${smart} </li>`
                htmlStr += `<li>Healthy: ${health}</li>`
                htmlStr += `<li>Social needs: ${social}</li>`
                htmlStr += `<hr />`
                $("#second").append(htmlStr);
            }
        })
    })
    $(document).on("click", "#new", function(){
        $(this).append("Copy and paste link to learn more")
    })
    $("#donatebutton").hover(function(){
        $(this).hide()
        console.log("bye bye")
    })
    $(document).mouseleave(function(){
        console.log("out")
        alert("You are about to leave the page")
    })
})

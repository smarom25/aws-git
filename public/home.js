$("#aboutus").hover(function(){
    $(this).animate({width: '58%' , height: "210px", padding: "40px"}, { duration: 500, queue: false });
    $("#internetImg").animate({width: '7%'}, { duration: 500, queue: false });
}, function() {
     $(this).animate({width: '52%', height: "170px", padding: "20px"}, { duration: 500, queue: false });
    $("#internetImg").animate({width: '15%'}, { duration: 500, queue: false });
}); 

$("#contact").hover(function(){
    $(this).animate({ width: "57%", height: "290px", padding: "40px" }, { duration: 500, queue: false});
    $("#androidImg").animate({ width: "8%"}, { duration: 500, queue: false});
}, function() {
    $(this).animate({ width: "52%", height: "280px", padding: "20px" }, { duration: 500, queue: false});
    $("#androidImg").animate({ width: "15%"}, { duration: 500, queue: false});
});


$("#internetImg").hover(function(){
    $(this).animate({ width: "20%" }, { duration: 500, queue: false});
    $("#aboutus").animate({ width: "47%"}, { duration: 500, queue: false});
}, function() {
    $(this).animate({ width: "15%" }, { duration: 500, queue: false});
    $("#aboutus").animate({ width: "52%"}, { duration: 500, queue: false});
});

$("#mainTitle").hover(function(){
    $(this).animate({height: '150px' , "line-height": "150px"}, { duration: 500, queue: false });
}, function() {
     $(this).animate({height: '100px' , "line-height": "100px"}, { duration: 500, queue: false });
}); 

$("#androidImg").hover(function(){
    $(this).animate({ width: "20%" }, { duration: 500, queue: false});
    $("#contact").animate({ width: "47%", padding: "15px"}, { duration: 500, queue: false});
}, function() {
    $(this).animate({ width: "15%" }, { duration: 500, queue: false});
    $("#contact").animate({ width: "52%", padding: "20px"}, { duration: 500, queue: false});
});

 $( '#loc' ).click(function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position){
        var lat = position.coords.latitude , long =  position.coords.longitude; 
        var urlGet = "http://hey.marom-developers.com/process_get?first_dog=" + lat + "&last_dog=" + long;   
        send(urlGet, lat , long);    
        });
    } 
    else{
        alert("Geolocation is not supported by this browser.");
    } 
  }); 

    function send(url, lat, long){
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
            alert('long: ' + long + ' lat: ' + lat);   
            }
                        
        }
        xmlHttp.open("GET", url, true); // true for asynchronous 
        xmlHttp.send(null);
    }

$(document).ready(function () {
    var apikey = "a57185095cfc059e7e0a3d0a651217f2";


    $("#getWeather").on("click", function () {
        var search = $("#city-search").val();
        var queryurl = "https://api.openweathermap.org/data/2.5/weather?appid=" + apikey + "&q=" + search;

        $.ajax({

            url:queryurl,
            method:"GET"
        }).then(function(results){
        console.log(results);
        })

    })

})
// $(document).ready(function () {
//     var apikey = "a57185095cfc059e7e0a3d0a651217f2";


//     $("#getWeather").on("click", function () {
//         var search = $("#city-search").val();
//         var queryurl = "https://api.openweathermap.org/data/2.5/weather?appid=" + apikey + "&q=" + search;

//         $.ajax({

//             url:queryurl,
//             method:"GET"
//         }).then(function(results){
//         console.log(results);
//         })

//     })

// })

// JQuey 

$(document).ready(function () {
    // use school key inorder to get forecast data
    const apiKey = "a57185095cfc059e7e0a3d0a651217f2";
    let url = 'https://api.openweathermap.org/data/2.5/';
    let requestType = ""; 
    let query ="";
    //
  
    // pull current location
      $('#getWeather,#past-cities').on('click', function () {
    
      // get location from user input box
      let e = $(event.target)[0];
      console.log($(event.target));
      let location = "";
  
      if (e.id === "getWeather" ) {  
        location = $('#city-search').val().trim().toUpperCase();
        
      } 
      else if ( e.className === ("cityList") ) 
      {
        location = e.innerText;
      }
    });
  
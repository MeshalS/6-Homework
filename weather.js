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
  
      // should make this generic to use this on the area clicked
      // let location = $(this).val().trim().toUpperCase();
      if (location == "") return;
  
     });
    // it is for the date 
    function convertDate(D) {
        // function to convert unix epoch to local time
        // returns arr ["MM/DD/YYYY, HH:MM:SS AM", "MM/DD/YYYY", "HH:MM:SS AM"]
        let readable = [];
        let myDate = new Date(D * 1000);
    
        // local time
        // returns string "MM/DD/YYYY, HH:MM:SS AM"
        readable[0] = (myDate.toLocaleString());
        readable[1] = ((myDate.toLocaleString().split(", "))[0]);
        readable[2] = ((myDate.toLocaleString().split(", "))[1]);
    
        return readable;
      }
    })
      
    function getCurWeather(loc) {
        // function to get current weather
        // returns object of current weather data
    
    
        drawHistory();
        // clear search field
        $('#city-search').val("");
    
        if (typeof loc === "object") {
          city = `lat=${loc.latitude}&lon=${loc.longitude}`;
        } else {
          city = `q=${loc}`;
        }
  
        //     For temperature in Fahrenheit use units=imperial    
        // set queryURL based on type of query
        requestType = 'weather';
        query = `?${city}&units=imperial&appid=${apiKey}`;
        queryURL = `${url}${requestType}${query}`;
    
        // Create an AJAX call to retrieve data Log the data in console
        $.ajax({
          url: queryURL,
          method: 'GET'
        }).then(function (response) {
          
    
          weatherObj = {
            city: `${response.name}`,
            wind: response.wind.speed,
            humidity: response.main.humidity,
            temp: response.main.temp,
            date: (convertDate(response.dt))[1],
            icon: `http://openweathermap.org/img/w/${response.weather[0].icon}.png`,
            desc: response.weather[0].description
  
          }
    console.log(response);
          // calls function to draw results to page
          drawCurWeather(weatherObj);
          // creating funcation for GetUN
          getUvIndex(response);
        });
        
      };
    

  
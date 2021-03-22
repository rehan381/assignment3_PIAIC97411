
var matchFound = false;
var cleanestCities = ["PK", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];


var cityToCheck=prompt("Enter Your City");

for (var i = 0; i <= 4; i++)
 {
        if (cityToCheck === cleanestCities[i]) 
        {
            matchFound=true;
                 alert("It's one of the cleanest cities");
                 break;
                   }


                   if (matchFound===false)
                {
                    alert("It's No city");
                    break;
                }
                 }
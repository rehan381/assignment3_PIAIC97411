var arr1=[3,'a','a','a',2,3,'a',3,'a',2,4,9,3];


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
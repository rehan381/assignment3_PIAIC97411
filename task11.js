var Bak = ["cake", "apple pie", "cookie", "chips", "patties"];
var cheknum=prompt("Enter from this cake");
var numChars =Bak.length;
for (var i = 0; i < numChars; i++)
 {
        if (Bak.slice(i, i + 2) === cheknum)
         {
                  alert("Found");
                       break;
         }
         else
         {
            alert("  Not Found");
            break;
         }
}


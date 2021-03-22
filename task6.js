var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];

var o = ["th","st","nd","rd"];


 var out=[];

for (var i = 0; i < aCities.length; i++)
{

    for (var j = 0; j < o.length; j++)
    {

        out.push(aCities[i] + o[j]);
        break;
    }
}


document.write(out);

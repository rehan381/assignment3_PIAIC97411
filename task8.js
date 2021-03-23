var foo=[];

for (i=0;i<16;i++)
 {
    foo.push(i);

}
document.write('Couting:',foo);
document.write('</br>');

var revfoo=foo.reverse();
document.write('Reverse Counting:',revfoo);
document.write('</br>');

var eve=[];
var eve=foo.filter(num=>num%2==0);
var eve1=eve.reverse();
document.write('Even Counting:',eve1);

document.write('</br>');
var eve2=[];
var eve2=foo.filter(num=>num%2!==0);
var eve3=eve2.reverse();
document.write('ODD Counting:',eve3);

var ser=[];
ser=eve1*(1000);
document.write('</br>');
document.write('Servies is :',ser);


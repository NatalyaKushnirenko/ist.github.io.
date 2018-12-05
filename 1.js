function f()
{var mass=[3,8,12];
var t=0;
var t1=mass.length - t;
var x;
var k;
for (var i=0; i<=mass.length-1; i++)
{

k = mass[i];
if (document.form1.elements[k].checked) {t++;}}

document.form1.tx3.value = t;
document.form1.tx4.value = t1-t;
 if (t1-t>1) x="Вам необходимо доработать";
else if (t=3) x="Поздравляем ";
document.form1.area1.value = x;

}
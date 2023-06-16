var m=Math.ceil((Math.random()*100));
var c=0;
func=()=>
{
    var k=parseInt(document.getElementById("num").value);
    if(k>m)
    {
    document.getElementById("kar").textContent=("try with smaller number");
    c++;
     }
    else if(k<m)
    {
   document.getElementById("kar").textContent=("try with greater number");
  c++;
    }
    else
    {
   
   document.getElementById("kar").textContent=("congratualation!!!"+" "+c+" tries");
    }
}
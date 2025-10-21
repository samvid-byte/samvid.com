function s_function(){
var inbx_val=document.getElementById("txt").value;
var ltr_ra=inbx_val.includes("र");
var final_value;
var count_ltr=inbx_val.split('न').length-1;
if(ltr_ra==true){
if(count_ltr>1){
final_value="न";
}
else{
final_value="ण";
}
}
else{
final_value="न";
}
document.getElementById("pratipadika").innerHTML='<center><table align=center border=3 bordercolor=lightgreen><tr><th colspan=3 style=background-color:#009999 font-family:Lato,Sans-serif,Sahitya font-size:22px;>अकारान्तशब्दः</th><th style=background-color:red>'+inbx_val+'</th></tr><tr><th style=background-color:#9fdf9f>विभक्तिः</th><th style=background-color:pink>एकवचनम्&nbsp;</th><th style=background-color:pink>द्विवचनम्&nbsp;</th><th style=background-color:pink>बहुवचनम्&nbsp;</th></tr><tr><th style=background-color:#9fdf9f>प्रथमा</th><th>'+inbx_val+'&#x0903;&nbsp;'+'</th><th>'+inbx_val+'&#x094c;&nbsp;'+'</th><th>'+inbx_val+'&#x093e;&#x0903;&nbsp;'+'</th></tr><tr><th style=background-color:#9fdf9f>द्वितीया</th><th>'+inbx_val+'&#x092e;&#x094d;'+'</th><th>'+inbx_val+'&#x094c;'+'</th><th>'+inbx_val+'&#x093e;&#x0928;&#x094d;'+'</th></tr><tr><th style=background-color:#9fdf9f>तृतीया</th><th>'+inbx_val+'&#x0947;'+final_value+'</th><th>'+inbx_val+'&#x093e;&#x92d;&#x94d;&#x92f;&#x93e;&#x92e;&#x94d;'+'</th><th>'+inbx_val+'&#x0948;&#x0903;'+'</th></tr><tr><th style=background-color:#9fdf9f>चतुर्थी</th><th>'+inbx_val+'&#x093e;&#x092f;'+'</th><th>'+inbx_val+'&#x093e;&#x92d;&#x94d;&#x92f;&#x93e;&#x92e;&#x94d;'+'</th><th>'+inbx_val+'&#x0947;&#x92d;&#x94d;&#x92f;&#x0903;'+'</th></tr><tr><th style=background-color:#9fdf9f>पञ्चमी</th><th>'+inbx_val+'&#x093e;&#x0924;&#x094d;'+'</th><th>'+inbx_val+'&#x093e;&#x92d;&#x94d;&#x92f;&#x93e;&#x92e;&#x94d;'+'</th><th>'+inbx_val+'&#x0947;&#x92d;&#x94d;&#x92f;&#x0903;'+'</th></tr><tr><th style=background-color:#9fdf9f>षष्ठी</th><th>'+inbx_val+'&#x938;&#x94d;&#x92f;'+'</th><th>'+inbx_val+'&#x92f;&#x94b;&#x903;'+'</th><th>'+inbx_val+'&#x93e'+final_value+'&#x93e;&#x92e;&#x94d;'+'</th></tr><tr><th style=background-color:#9fdf9f>सप्तमी</th><th>'+inbx_val+'&#x947;'+'</th><th>'+inbx_val+'&#x92f;&#x94b;&#x903;'+'</th><th>'+inbx_val+'&#x947;&#x937;&#x941;'+'</th></tr><tr><th style=background-color:#9fdf9f>सम्बोधनम्&nbsp;</th><th>'+inbx_val+'</th><th>'+inbx_val+'&#x094c;'+'</th><th>'+inbx_val+'&#x093e;&#x0903;'+'</th></tr></table></center>';
};

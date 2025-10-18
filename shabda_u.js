function s_function(){
var inbx_val=document.getElementById("txt").value;
var slc_ltr=inbx_val.slice(0,-1);

var slc_ltr_=inbx_val[inbx_val.length -2];
if(slc_ltr_=='र'){
var slc_ltr_val="णा";
}
else{
slc_ltr_val="ना";}

document.getElementById("pratipadika").innerHTML='<center><table align=center border=3 bordercolor=lightgreen><tr><th colspan=3 style=background-color:#009999>उकारान्तशब्दः</th><th style=background-color:red>'+inbx_val+'</th></tr><tr><th style=background-color:#9fdf9f>विभक्तिः</th><th style=background-color:pink>एकवचनम्</th><th style=background-color:pink>द्विवचनम्</th><th style=background-color:pink>बहुवचनम्</th></tr><tr><th style=background-color:#9fdf9f>प्रथमा</th><th>'+inbx_val+'&#x0903;&nbsp;'+'</th><th>'+slc_ltr+'&#x0942;&nbsp;'+'</th><th>'+slc_ltr+'&#x935;&#x903;&nbsp;'+'</th></tr><tr><th style=background-color:#9fdf9f>द्वितीया</th><th>'+inbx_val+'&#x092e;&#x094d;'+'</th><th>'+slc_ltr+'&#x0942;'+'</th><th>'+slc_ltr+'&#x0942;&#x0928;&#x094d;'+'</th></tr><tr><th style=background-color:#9fdf9f>तृतीया</th><th>'+inbx_val+slc_ltr_val+'</th><th>'+inbx_val+'&#x92d;&#x94d;&#x92f;&#x93e;&#x92e;&#x94d;'+'</th><th>'+inbx_val+'&#x092d;&#x093f;&#x0903;'+'</th></tr><tr><th style=background-color:#9fdf9f>चतुर्थी</th><th>'+slc_ltr+'&#x0935;&#x0947;'+'</th><th>'+inbx_val+'&#x92d;&#x94d;&#x92f;&#x93e;&#x92e;&#x94d;'+'</th><th>'+inbx_val+'&#x92d;&#x94d;&#x92f;&#x0903;'+'</th></tr><tr><th style=background-color:#9fdf9f>पञ्चमी</th><th>'+slc_ltr+'&#x094b;&#x0903;'+'</th><th>'+inbx_val+'&#x92d;&#x94d;&#x92f;&#x93e;&#x92e;&#x94d;'+'</th><th>'+inbx_val+'&#x92d;&#x94d;&#x92f;&#x0903;'+'</th></tr><tr><th style=background-color:#9fdf9f>षष्ठी</th><th>'+slc_ltr+'&#x94b;&#x903;'+'</th><th>'+slc_ltr+'&#x94d;&#x935;&#x94b;&#x903;'+'</th><th>'+slc_ltr+'&#x942;'+slc_ltr_val+'&#x92e;&#x94d;'+'</th></tr><tr><th style=background-color:#9fdf9f>सप्तमी</th><th>'+slc_ltr+'&#x94c;'+'</th><th>'+slc_ltr+'&#x94d;&#x935;&#x94b;&#x903;'+'</th><th>'+inbx_val+'&#x937;&#x941;'+'</th></tr><tr><th style=background-color:#9fdf9f>सम्बोधनम्</th><th>'+slc_ltr+'&#x94b;'+'</th><th>'+slc_ltr+'&#x0942;&nbsp;'+'</th><th>'+slc_ltr+'&#x935;&#x903;'+'</th></tr></table></center>';
};
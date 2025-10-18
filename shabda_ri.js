function s_function(){
var inbx_val=document.getElementById("txt").value;
var slc_ltr=inbx_val.slice(0,-1);
var sans;
var x_def='<center><table align=center border=3 bordercolor=lightgreen><tr><th colspan=3 style=background-color:#009999>ऋकारान्तशब्दः</th><th style=background-color:red>'+inbx_val+'</th></tr><tr><th style=background-color:#9fdf9f>विभक्तिः</th><th style=background-color:pink>एकवचनम्</th><th style=background-color:pink>द्विवचनम्</th><th style=background-color:pink>बहुवचनम्</th></tr><tr><th style=background-color:#9fdf9f>प्रथमा</th><th>'+slc_ltr+'&#x93e;&nbsp;'+'</th><th>'+slc_ltr+'&#x93e;&#x930;&#x94c;&nbsp;'+'</th><th>'+slc_ltr+'&#x93e;&#x930;&#x903;&nbsp;'+'</th></tr><tr><th style=background-color:#9fdf9f>द्वितीया</th><th>'+slc_ltr+'&#x93e;&#x930;&#x092e;&#x094d;'+'</th><th>'+slc_ltr+'&#x93e;&#x930;&#x94c;'+'</th><th>'+slc_ltr+'&#x0944;&#x0928;&#x094d;'+'</th></tr><tr><th style=background-color:#9fdf9f>तृतीया</th><th>'+slc_ltr+'&#x94d;&#x930;&#x93e;'+'</th><th>'+inbx_val+'&#x92d;&#x94d;&#x92f;&#x93e;&#x92e;&#x94d;'+'</th><th>'+inbx_val+'&#x092d;&#x093f;&#x0903;'+'</th></tr><tr><th style=background-color:#9fdf9f>चतुर्थी</th><th>'+slc_ltr+'&#x94d;&#x930;&#x947;'+'</th><th>'+inbx_val+'&#x92d;&#x94d;&#x92f;&#x93e;&#x92e;&#x94d;'+'</th><th>'+inbx_val+'&#x92d;&#x94d;&#x92f;&#x0903;'+'</th></tr><tr><th style=background-color:#9fdf9f>पञ्चमी</th><th>'+slc_ltr+'&#x0941;&#x0903;'+'</th><th>'+inbx_val+'&#x92d;&#x94d;&#x92f;&#x93e;&#x92e;&#x94d;'+'</th><th>'+inbx_val+'&#x92d;&#x94d;&#x92f;&#x0903;'+'</th></tr><tr><th style=background-color:#9fdf9f>षष्ठी</th><th>'+slc_ltr+'&#x941;&#x903;'+'</th><th>'+slc_ltr+'&#x94d;&#x930;&#x94b;&#x903;'+'</th><th>'+slc_ltr+'&#x944;&#x923;&#x93e;&#x92e;&#x94d;'+'</th></tr><tr><th style=background-color:#9fdf9f>सप्तमी</th><th>'+slc_ltr+'&#x930;&#x93f'+'</th><th>'+slc_ltr+'&#x94d;&#x930;&#x94b;&#x903;'+'</th><th>'+inbx_val+'&#x937;&#x941;'+'</th></tr><tr><th style=background-color:#9fdf9f>सम्बोधनम्</th><th>'+slc_ltr+'&#x903;'+'</th><th>'+slc_ltr+'&#x93e;&#x930;&#x94c;&nbsp;'+'</th><th>'+slc_ltr+'&#x93e;&#x930;&#x903;&nbsp;'+'</th></tr></table></center>';
var y_def='<center><table align=center border=3 bordercolor=lightgreen><tr><th colspan=3 style=background-color:#009999>ऋकारान्तशब्दः</th><th style=background-color:red>'+inbx_val+'</th></tr><tr><th style=background-color:#9fdf9f>विभक्तिः</th><th style=background-color:pink>एकवचनम्</th><th style=background-color:pink>द्विवचनम्</th><th style=background-color:pink>बहुवचनम्</th></tr><tr><th style=background-color:#9fdf9f>प्रथमा</th><th>'+slc_ltr+'&#x93e;&nbsp;'+'</th><th>'+slc_ltr+'&#x930;&#x94c;&nbsp;'+'</th><th>'+slc_ltr+'&#x930;&#x903;&nbsp;'+'</th></tr><tr><th style=background-color:#9fdf9f>द्वितीया</th><th>'+slc_ltr+'&#x930;&#x092e;&#x094d;'+'</th><th>'+slc_ltr+'&#x930;&#x94c;'+'</th><th>'+slc_ltr+'&#x0944;&#x0928;&#x094d;'+'</th></tr><tr><th style=background-color:#9fdf9f>तृतीया</th><th>'+slc_ltr+'&#x94d;&#x930;&#x93e;'+'</th><th>'+inbx_val+'&#x92d;&#x94d;&#x92f;&#x93e;&#x92e;&#x94d;'+'</th><th>'+inbx_val+'&#x092d;&#x093f;&#x0903;'+'</th></tr><tr><th style=background-color:#9fdf9f>चतुर्थी</th><th>'+slc_ltr+'&#x94d;&#x930;&#x947;'+'</th><th>'+inbx_val+'&#x92d;&#x94d;&#x92f;&#x93e;&#x92e;&#x94d;'+'</th><th>'+inbx_val+'&#x92d;&#x94d;&#x92f;&#x0903;'+'</th></tr><tr><th style=background-color:#9fdf9f>पञ्चमी</th><th>'+slc_ltr+'&#x0941;&#x0903;'+'</th><th>'+inbx_val+'&#x92d;&#x94d;&#x92f;&#x93e;&#x92e;&#x94d;'+'</th><th>'+inbx_val+'&#x92d;&#x94d;&#x92f;&#x0903;'+'</th></tr><tr><th style=background-color:#9fdf9f>षष्ठी</th><th>'+slc_ltr+'&#x941;&#x903;'+'</th><th>'+slc_ltr+'&#x94d;&#x930;&#x94b;&#x903;'+'</th><th>'+slc_ltr+'&#x944;&#x923;&#x93e;&#x92e;&#x94d;'+'</th></tr><tr><th style=background-color:#9fdf9f>सप्तमी</th><th>'+slc_ltr+'&#x930;&#x93f'+'</th><th>'+slc_ltr+'&#x94d;&#x930;&#x94b;&#x903;'+'</th><th>'+inbx_val+'&#x937;&#x941;'+'</th></tr><tr><th style=background-color:#9fdf9f>सम्बोधनम्</th><th>'+slc_ltr+'&#x903;'+'</th><th>'+slc_ltr+'&#x930;&#x94c;&nbsp;'+'</th><th>'+slc_ltr+'&#x930;&#x903;&nbsp;'+'</th></tr></table></center>';
var z_def='<center><table align=center border=3 bordercolor=lightgreen><tr><th colspan=3 style=background-color:#009999>ऋकारान्तशब्दः</th><th style=background-color:red>'+inbx_val+'</th></tr><tr><th style=background-color:#9fdf9f>विभक्तिः</th><th style=background-color:pink>एकवचनम्</th><th style=background-color:pink>द्विवचनम्</th><th style=background-color:pink>बहुवचनम्</th></tr><tr><th style=background-color:#9fdf9f>प्रथमा</th><th>'+slc_ltr+'&#x93e;&nbsp;'+'</th><th>'+slc_ltr+'&#x930;&#x94c;&nbsp;'+'</th><th>'+slc_ltr+'&#x930;&#x903;&nbsp;'+'</th></tr><tr><th style=background-color:#9fdf9f>द्वितीया</th><th>'+slc_ltr+'&#x930;&#x092e;&#x094d;'+'</th><th>'+slc_ltr+'&#x930;&#x94c;'+'</th><th>'+slc_ltr+'&#x0944;&#x0903;'+'</th></tr><tr><th style=background-color:#9fdf9f>तृतीया</th><th>'+slc_ltr+'&#x94d;&#x930;&#x93e;'+'</th><th>'+inbx_val+'&#x92d;&#x94d;&#x92f;&#x93e;&#x92e;&#x94d;'+'</th><th>'+inbx_val+'&#x092d;&#x093f;&#x0903;'+'</th></tr><tr><th style=background-color:#9fdf9f>चतुर्थी</th><th>'+slc_ltr+'&#x94d;&#x930;&#x947;'+'</th><th>'+inbx_val+'&#x92d;&#x94d;&#x92f;&#x93e;&#x92e;&#x94d;'+'</th><th>'+inbx_val+'&#x92d;&#x94d;&#x92f;&#x0903;'+'</th></tr><tr><th style=background-color:#9fdf9f>पञ्चमी</th><th>'+slc_ltr+'&#x0941;&#x0903;'+'</th><th>'+inbx_val+'&#x92d;&#x94d;&#x92f;&#x93e;&#x92e;&#x94d;'+'</th><th>'+inbx_val+'&#x92d;&#x94d;&#x92f;&#x0903;'+'</th></tr><tr><th style=background-color:#9fdf9f>षष्ठी</th><th>'+slc_ltr+'&#x941;&#x903;'+'</th><th>'+slc_ltr+'&#x94d;&#x930;&#x94b;&#x903;'+'</th><th>'+slc_ltr+'&#x944;&#x923;&#x93e;&#x92e;&#x94d;'+'</th></tr><tr><th style=background-color:#9fdf9f>सप्तमी</th><th>'+slc_ltr+'&#x930;&#x93f'+'</th><th>'+slc_ltr+'&#x94d;&#x930;&#x94b;&#x903;'+'</th><th>'+inbx_val+'&#x937;&#x941;'+'</th></tr><tr><th style=background-color:#9fdf9f>सम्बोधनम्</th><th>'+slc_ltr+'&#x903;'+'</th><th>'+slc_ltr+'&#x930;&#x94c;&nbsp;'+'</th><th>'+slc_ltr+'&#x930;&#x903;&nbsp;'+'</th></tr></table></center>';

switch(inbx_val){
case "पितृ":
sans=y_def;
break;
case "जामातृ":
sans=y_def;;
break;
case "देवृ":
sans=y_def;;
break;
case "सव्येष्टृ":
sans=y_def;;
break;
case "नृ":
sans=y_def;;
break;
case "भ्रातृ":
sans=y_def;;
break;
case "मातृ":
sans=z_def;;
break;
case "दुहितृ":
sans=z_def;;
break;
case "ननान्दृ":
sans=z_def;;
break;
case "यातृ":
sans=z_def;;
break;
default:
sans=x_def;
}
document.getElementById("pratipadika").innerHTML=sans;
};
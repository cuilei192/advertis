function yuanjiao(obj){ //圆角JS
    for(var i=0;i<obj.length;i++){
        var r1 = document.createElement("div");
        r1.className = "r1"
        document.getElementById(obj[i]).appendChild(r1)
        var r2 = document.createElement("div");
        r2.className = "r2"
        document.getElementById(obj[i]).appendChild(r2)
        var r3 = document.createElement("div");
        r3.className = "r3"
        document.getElementById(obj[i]).appendChild(r3)
        var r4 = document.createElement("div");
        r4.className = "r4"
        document.getElementById(obj[i]).appendChild(r4)	;
    }
}

function ulselect(obj,f){if(f==0){obj.getElementsByTagName("ul")[0].style.height='auto'}else{obj.getElementsByTagName("ul")[0].style.height='22px'}}
function setTabs(name,cursel,n){  //切换卡JS
    for(i=1;i<=n;i++){
        var menu=document.getElementById(name+i);
        var con=document.getElementById("con_"+name+"_"+i);
        menu.className=i==cursel?"hover":"";
        con.style.display=i==cursel?"block":"none";
    }
}


function lrtt(){ //每次移动距离
    var DT = W.scrollTop;
    TT = Math.ceil((DT-WT)*0.2)+4;
    $('server').style.top=parseInt($('server').style.top)+TT+'px';
    WT += TT;
}

function lrtop(){
    WH = W.clientHeight;
    RH = Math.round((WH-$('server').offsetHeight)/2);
    $('server').style.top = RH+'px';
}
lrtop();
window.setInterval('lrtt()',80);
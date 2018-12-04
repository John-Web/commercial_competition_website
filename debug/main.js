$(document).ready(function() {
    $("#home").click(function () {
        $(".content").hide();
        $("#homecontent").show();
    });
    $("#produce").click(function () {
        $(".content").hide();
        $("#producecontent").show();
		inneroperation(1);
    });
    $("#trade").click(function () {
        $(".content").hide();
        $("#tradecontent").show();
        operation(2);
    });
    $("#loan").click(function () {
        $(".content").hide();
        $("#loancontent").show();
    });
    $("#other").click(function () {
        $(".content").hide();
        $("#othercontent").show();
    });
    $("#current").click(function () {
        $(".content").hide();
        $("#currentcontent").show();
    });
    $("#history").click(function () {
        $(".content").hide();
        $("#historycontent").show();
    });
    //生产部分
    $("#producenum").bind("change",function(){
        inneroperation(2);
    });
	$("#cleanproducenum").click(function () {
        $("#producenum").val("");
    });

    //贷款部分
    $("#cleanloannum").click(function () {
        $("#loannum").val("");
    });
    $("#cleanloanstart").click(function () {
        $("#loanstart").val("");
    });
    $("#cleanloaninterest").click(function () {
        $("#loaninterest").val("");
    });
    $("#cleanloantime").click(function () {
        $("#loantime").val("");
    });


    //其他部分
    $("#cleanother1").click(function() {
        $("#other1").val("");
    });
    $("#cleanother2").click(function() {
        $("#other2").val("12");
    });
    $("#cleanother3").click(function() {
        $("#other3").val("");
    });
	$("#taxSubmit").click(function(){
		alert("第1季度纳税成功！共纳税"+$("#other1").val()+"元。");
    });
	$("#techupSubmit").click(function(){
		alert("NO.1队：你们已通过审核，达到2级。");
    });
    //历史部分


    $('.ui.dropdown').dropdown();
    $("#home").click();
})

function inneroperation(val)
{
	//building ajax object
    var ajax = false;
    if(window.XMLHttpRequest) 
    {
        ajax = new XMLHttpRequest();
        if (ajax.overrideMimeType) 
            ajax.overrideMimeType("text/xml");
    }
    else if (window.ActiveXObject) 
    {
        try
		{
            ajax = new ActiveXObject("Msxml2.XMLHTTP");
		}
        catch (e) 
        {
            try
			{
                ajax = new ActiveXObject("Microsoft.XMLHTTP");
			}
            catch (e) {}
        }
    }
    if (!ajax) 
    {
        window.alert("不能创建XMLHttpRequest对象实例.");
        return false;
    }
	
	
	
	
	//main function
	switch(val)
	{
	case 1: //以下为例子
		
		var msg = document.getElementById("whattoproduce");
		var url = "getFieldToTrade.php";
		var postStr = "";
		break;
	case 2:
		document.getElementById("num_need").innerHTML="15";
		var pro_select=document.getElementById("whattoproduce");
	    var index=pro_select.selectedIndex;
	    document.getElementById("name_need").innerHTML=pro_select.options[index].text;\
        break;
	    case 3:
		//;
		//以下需要补充
	    
	}
	
	
	
    ajax.open("POST", url, true);
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    ajax.send(postStr);
    ajax.onreadystatechange = function() 
    {
		if (ajax.readyState == 4 && ajax.status == 200) 
            msg.innerHTML = ajax.responseText; 
    } 
}
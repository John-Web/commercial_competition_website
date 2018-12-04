$("#document").ready(function($) {
    "use strict";
    var $content=$(".content"),
        $home=$("#home");
    $home.on('click',function () {
        $content.hide();
        $("#homecontent").show();
    });
    $("#produce").on('click',function () {
        $content.hide();
        $("#producecontent").show();
		operation(1);
    });
    $("#trade").on('click',function () {
        $content.hide();
        $("#tradecontent").show();
    });
    $("#loan").on('click',function () {
        $content.hide();
        $("#loancontent").show();
    });
    $("#other").on('click',function () {
        $content.hide();
        $("#othercontent").show();
    });
    $("#current").on('click',function () {
        $content.hide();
        $("#currentcontent").show();
    });
    $("#history").on('click',function () {
        $content.hide();
        $("#historycontent").show();
    });
    $('.ui.dropdown').dropdown();
    $home.click();
    //生产部分
    $("#producenum").bind('change',function(){
        operation(2);
    });
	$("#cleanproducenum").on('click',function () {
        $("#producenum").val("");
    });
	$("#produceSubmit").on('click',function () {
        window.alert('提交成功，将在 10 点 30 分收获 5 个A2 .');
    });

    //贷款部分
    $("#cleanloannum").on('click',function () {
        $("#loannum").val("");
    });
    $("#cleanloanstart").on('click',function () {
        $("#loanstart").val("");
    });
    $("#cleanloaninterest").on('click',function () {
        $("#loaninterest").val("");
    });
    $("#cleanloantime").on('click',function () {
        $("#loantime").val("");
    });
	
	//交易部分
	$("#cleantrade1").on('click',function () {
        $("#moneyGiven").val("");
    });
	$("#cleantrade2").on('click',function () {
        $("#goodGiven").val("");
    });

    //其他部分
    $("#cleanother1").on('click',function() {
        $("#other1").val("");
    });
    $("#cleanother2").on('click',function() {
        $("#other2").val("");
    });
    $("#cleanother3").on('click',function() {
        $("#other3").val("");
    });
	$("#taxSubmit").on('click',function(){
		window.alert('第1季度纳税成功！共纳税'+$('#other1').val()+'元。');
    });
	$("#techupSubmit").on('click',function(){
		window.alert("NO.1队：你们已通过审核，达到2级。");
    });
    $("#bidSubmit").on('click',function(){
        window.alert("您的竞标申请已提交到后台,竞标价:"+$('#other3').val()+"元。审核通过后会通知您。");
    });
    //历史部分

});

function operation(val)
{
    "use strict";
	//building ajax object
    var ajax=null;
    if(window.XMLHttpRequest) 
    {
        ajax = new XMLHttpRequest();
        if (ajax.overrideMimeType) {
            ajax.overrideMimeType("text/xml");
        }
    }
    else if (window.ActiveXObject) 
    {
        try
		{
            ajax = new window.ActiveXObject("Msxml2.XMLHTTP");
		}
        catch (e) 
        {
            try
			{
                ajax = new window.ActiveXObject("Microsoft.XMLHTTP");
			}
            catch (e) {}
        }
    }
    if (!ajax) 
    {
        window.alert("不能创建XMLHttpRequest对象实例.");
        return false;
    }
	
	
    var msg,url,postStr;
	//main function
	switch(val)
	{
	case 1: //以下为例子
		msg = document.getElementById("whattoproduce");
		url = "getFieldToTrade.php";
		postStr = "";
		break;
	case 2:
		break;
	case 3:
		window.alert('提交成功，将在 10 点 30 分收获 5 个A2 .');
		break;
	
	}
	
	
	
    ajax.open("POST", url, true);
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    ajax.send(postStr);
    if (ajax.status===200) {
        msg.innerHTML = ajax.responseText;
    }
}
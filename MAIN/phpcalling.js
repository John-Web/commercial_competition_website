function operation(val)
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
		alert('123');
		/*var f = document.user_info;
		var userName = f.user_name.value;
		var userAge   = f.user_age.value;
		var userSex   = f.user_sex.value;
	    var postStr   = "user_name="+ userName +"&user_age="+ userAge +"&user_sex="+ userSex;
		
		var msg = document.getElementById(outputID);
		
		var url = "welcome.php";
		*/
		break;
	case 2:
	
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
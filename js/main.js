function clock(){
var hourId=document.getElementById("hour");
var minuteId=document.getElementById("minute");
var secondsId=document.getElementById("seconds");

    var hr=new Date().getHours();
	var min=new Date().getMinutes();
	var sec=new Date().getSeconds();
	
	hour.innerHTML=myfunction(hr);
	minute.innerHTML=myfunction(min);
	seconds.innerHTML=myfunction(sec);
	
}
var interval=setInterval(clock,1000);
function myfunction(num){
	if(num<10){
		return '0'+num;
	}else{
		return num;
    }
}

	

<!--------------------date--------------------->
var set=new Date();

var dateId=document.getElementById("date");
var monId=document.getElementById("mon");
var yearId=document.getElementById("year");

var day1Id=document.getElementById("day1");
var day2Id=document.getElementById("day2");
var day3Id=document.getElementById("day3");
var day4Id=document.getElementById("day4");
var day5Id=document.getElementById("day5");
var day6Id=document.getElementById("day6");
var day7Id=document.getElementById("day7");

var tm1Id=document.getElementById("tm1");
var tm2Id=document.getElementById("tm2");
function printDate(){
	
	var date=set.getDate();
	var month=set.getMonth()+1;
	var year=set.getFullYear();
	
	dateId.innerText=myfunction(date);
	monId.innerText=myfunction(month);
	yearId.innerText=year;
	
	var day=set.getDay();
		switch(day){
			case 0:
				day1Id.checked=true;
			   break;
			case 1:
				day2Id.checked=true;
				break;
			case 2:
				day3Id.checked=true;
				break;
			case 3:
				day4Id.checked=true;
				break;
			case 4:
				day5Id.checked=true;
				break;
			case 5:
				day6Id.checked=true;
				break;
			case 6:
				day7Id.checked=true;
				break;
}
if(12>13){
	tm1Id.checked=true;
}
else if(12<13){
     tm2Id.checked=true;
}
}
printDate();


	


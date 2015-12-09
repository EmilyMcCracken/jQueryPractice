$(document).ready(function() {


$("#month").change(function(){
	var month_length = $("#month").val().length;
	if(month_length > 2) {
		alert("please enter a valid month")
	}else {
		alert("valid")
	}
	})

$("#day").change(function(){
	var day_length = $("#day").val().length;
	if(day_length > 2) {
		alert("please enter a valid day")
	}else {
		alert("valid")
	}
	})

$("#year").change(function(){
	var year_length = $("#year").val().length;
	if(year_length > 4) {
		alert("please enter a valid year")
	}else {
		alert("valid")
	}
	})

$("#password").change(function(){
	if($("#password").val() == "12345"){
		alert("You are signed up!")
	}else {
		alert("please enter a different password")
}
})

// $("#birthday").change(function(){
// 	if($("#birthday").val() == 10){
// 		alert("please enter a valid birthday mm/dd/yyyy") } });



















});
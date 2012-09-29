<%@page import="org.webservice.countryInfo.CountryInfoResult"%>
<%@page import="org.webservice.countryInfo.CountryInfo"%>
<%@page import="java.io.PrintWriter"%>
<%@page import="com.google.gson.Gson"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
   
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<script type="text/javascript" src="js/js.js"></script>
	<link href="styles/style.css" type="text/css" rel="stylesheet">
	 <link href="images/icon.png" rel="shortcut icon" type="image/png">
	<title>Country Info</title>
</head>
<body>
	<h2>country info</h2>
	<p class="desc">select a country and a city to retrieve general information about them.</p>
	<br>
	<label>countries:</label>
	<select id="selCountries"></select>
	<label>cities: </label>
	<select id="selCity"></select>
	<div>
		<h3>country Info</h3>
		<div class="info_box" id="country_info">
		</div>
	</div>
	<div>
		<h3>city Info</h3>
		<div class="info_box" id="city_info">
		</div>
	</div>
	<script type="text/javascript">
	var sc=$('selCountries');
	var sct=$('selCity');
	var d_cinfo=$('city_info');
	var d_Cinfo=$('country_info');
 	var countries=null;
 	
 	sc.onchange=function(){
 		var countryCode=sc[sc.selectedIndex].value;
 		var countryName=sc[sc.selectedIndex].innerHTML;
 		loadCities(countryName);
 		getCountryInfo(countryCode,countryName);
 	};
 	
 	sct.onchange=function(){
 		var cityName=sct[sct.selectedIndex].value;
 		var countryName=sc[sc.selectedIndex].innerHTML;
 		var aj=new BLauLib.Ajax();
 		aj.addVar("countryName",countryName);
 		aj.addVar("cityName",cityName);
 		aj.onLoaded=function(){
 			var json=aj.getJSON();
 			var html=""
 			html+="<p><b>Country: </b>"+cityName+"</p>";
 			html+="<p><b>City: </b>"+cityName+"</p>";
 			for(var key in json){
 				if(BLauLib.isString(json[key]))
 					html+="<p><b>"+key+":</b> "+json[key]+"</p>";
 			}
 			d_cinfo.html(html);
 		};
 		aj.callPost("secure/getCityInfo");
 	};
 	
 	var loadCities=function(cn){
 		var aj=new BLauLib.Ajax();
 		aj.addVar("countryName",cn);
 		aj.onLoaded=function(){
 			sct.innerHTML="";
	 		var opaux;
	 		var city=aj.getJSON();
	 		for(var i=0;i<city.length;i++){
	 			opaux=$$('option');
	 			opaux.id="city_"+i;
	 			opaux.value=city[i];
	 			opaux.html(city[i]);
	 			sct.add(opaux);
	 		}
 		};
 		aj.callPost("secure/getCities");
 	};
 	
 	var getCountryInfo=function(cc,cn){
 		var aj=new BLauLib.Ajax();
 		aj.addVar("countryName",cn);
 		aj.addVar("countryCode",cc);
 		aj.onLoaded=function(){
 			var json=aj.getJSON();
 			var html="<p><b>Country: </b>"+cn+"</p>";
 			for(var key in json){
 				if(BLauLib.isString(json[key]))
 					html+="<p><b>"+key+":</b> "+json[key]+"</p>";
 			}
 			d_Cinfo.html(html);
 		}
 		aj.callPost("secure/getCountryInfo");
 	};
 	
	var loadCountries=function(){
	 	var aj=new BLauLib.Ajax();
	 	aj.onLoaded=function(){
	 		sc.innerHTML="";
	 		var opaux;
	 		countries=aj.getJSON();
	 		for(var i=0;i<countries.length;i++){
	 			opaux=$$('option');
	 			opaux.id="country_"+countries[i].countryISO2;
	 			opaux.value=countries[i].countryISO2;
	 			opaux.html(countries[i].countryName);
	 			sc.add(opaux);
	 		}
	 	};
	 	aj.callPost("secure/getCountries");
	};
	
	var getCityInfo=function(){
		
	};
	
	loadCountries();
	</script>
</body>
</html>
<%@page contentType="text/html;charset=UTF-8"%>
<% request.setCharacterEncoding("UTF-8"); %>
<HTML>
<HEAD>
<TITLE>Result</TITLE>
</HEAD>
<BODY>
<H1>Result</H1>

<jsp:useBean id="sampleGlobalWeatherSoapProxyid" scope="session" class="NET.webserviceX.www.GlobalWeatherSoapProxy" />
<%
if (request.getParameter("endpoint") != null && request.getParameter("endpoint").length() > 0)
sampleGlobalWeatherSoapProxyid.setEndpoint(request.getParameter("endpoint"));
%>

<%
String method = request.getParameter("method");
int methodID = 0;
if (method == null) methodID = -1;

if(methodID != -1) methodID = Integer.parseInt(method);
boolean gotMethod = false;

try {
switch (methodID){ 
case 2:
        gotMethod = true;
        java.lang.String getEndpoint2mtemp = sampleGlobalWeatherSoapProxyid.getEndpoint();
if(getEndpoint2mtemp == null){
%>
<%=getEndpoint2mtemp %>
<%
}else{
        String tempResultreturnp3 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(getEndpoint2mtemp));
        %>
        <%= tempResultreturnp3 %>
        <%
}
break;
case 5:
        gotMethod = true;
        String endpoint_0id=  request.getParameter("endpoint8");
            java.lang.String endpoint_0idTemp = null;
        if(!endpoint_0id.equals("")){
         endpoint_0idTemp  = endpoint_0id;
        }
        sampleGlobalWeatherSoapProxyid.setEndpoint(endpoint_0idTemp);
break;
case 10:
        gotMethod = true;
        NET.webserviceX.www.GlobalWeatherSoap getGlobalWeatherSoap10mtemp = sampleGlobalWeatherSoapProxyid.getGlobalWeatherSoap();
if(getGlobalWeatherSoap10mtemp == null){
%>
<%=getGlobalWeatherSoap10mtemp %>
<%
}else{
        if(getGlobalWeatherSoap10mtemp!= null){
        String tempreturnp11 = getGlobalWeatherSoap10mtemp.toString();
        %>
        <%=tempreturnp11%>
        <%
        }}
break;
case 13:
        gotMethod = true;
        String cityName_1id=  request.getParameter("cityName16");
            java.lang.String cityName_1idTemp = null;
        if(!cityName_1id.equals("")){
         cityName_1idTemp  = cityName_1id;
        }
        String countryName_2id=  request.getParameter("countryName18");
            java.lang.String countryName_2idTemp = null;
        if(!countryName_2id.equals("")){
         countryName_2idTemp  = countryName_2id;
        }
        java.lang.String getWeather13mtemp = sampleGlobalWeatherSoapProxyid.getWeather(cityName_1idTemp,countryName_2idTemp);
if(getWeather13mtemp == null){
%>
<%=getWeather13mtemp %>
<%
}else{
        String tempResultreturnp14 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(getWeather13mtemp));
        %>
        <%= tempResultreturnp14 %>
        <%
}
break;
case 20:
        gotMethod = true;
        String countryName_3id=  request.getParameter("countryName23");
            java.lang.String countryName_3idTemp = null;
        if(!countryName_3id.equals("")){
         countryName_3idTemp  = countryName_3id;
        }
        java.lang.String getCitiesByCountry20mtemp = sampleGlobalWeatherSoapProxyid.getCitiesByCountry(countryName_3idTemp);
if(getCitiesByCountry20mtemp == null){
%>
<%=getCitiesByCountry20mtemp %>
<%
}else{
        String tempResultreturnp21 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(getCitiesByCountry20mtemp));
        %>
        <%= tempResultreturnp21 %>
        <%
}
break;
}
} catch (Exception e) { 
%>
exception: <%= e %>
<%
return;
}
if(!gotMethod){
%>
result: N/A
<%
}
%>
</BODY>
</HTML>
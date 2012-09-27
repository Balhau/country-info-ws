<%@page contentType="text/html;charset=UTF-8"%>
<% request.setCharacterEncoding("UTF-8"); %>
<HTML>
<HEAD>
<TITLE>Result</TITLE>
</HEAD>
<BODY>
<H1>Result</H1>

<jsp:useBean id="sampleCountrySoapProxyid" scope="session" class="NET.webserviceX.www.CountrySoapProxy" />
<%
if (request.getParameter("endpoint") != null && request.getParameter("endpoint").length() > 0)
sampleCountrySoapProxyid.setEndpoint(request.getParameter("endpoint"));
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
        java.lang.String getEndpoint2mtemp = sampleCountrySoapProxyid.getEndpoint();
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
        sampleCountrySoapProxyid.setEndpoint(endpoint_0idTemp);
break;
case 10:
        gotMethod = true;
        NET.webserviceX.www.CountrySoap getCountrySoap10mtemp = sampleCountrySoapProxyid.getCountrySoap();
if(getCountrySoap10mtemp == null){
%>
<%=getCountrySoap10mtemp %>
<%
}else{
%>
<TABLE>
<TR>
<TD COLSPAN="3" ALIGN="LEFT">returnp:</TD>
</TABLE>
<%
}
break;
case 19:
        gotMethod = true;
        String countryCode_1id=  request.getParameter("countryCode22");
            java.lang.String countryCode_1idTemp = null;
        if(!countryCode_1id.equals("")){
         countryCode_1idTemp  = countryCode_1id;
        }
        java.lang.String getCountryByCountryCode19mtemp = sampleCountrySoapProxyid.getCountryByCountryCode(countryCode_1idTemp);
if(getCountryByCountryCode19mtemp == null){
%>
<%=getCountryByCountryCode19mtemp %>
<%
}else{
        String tempResultreturnp20 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(getCountryByCountryCode19mtemp));
        %>
        <%= tempResultreturnp20 %>
        <%
}
break;
case 24:
        gotMethod = true;
        String countryName_2id=  request.getParameter("countryName27");
            java.lang.String countryName_2idTemp = null;
        if(!countryName_2id.equals("")){
         countryName_2idTemp  = countryName_2id;
        }
        java.lang.String getISD24mtemp = sampleCountrySoapProxyid.getISD(countryName_2idTemp);
if(getISD24mtemp == null){
%>
<%=getISD24mtemp %>
<%
}else{
        String tempResultreturnp25 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(getISD24mtemp));
        %>
        <%= tempResultreturnp25 %>
        <%
}
break;
case 29:
        gotMethod = true;
        java.lang.String getCountries29mtemp = sampleCountrySoapProxyid.getCountries();
if(getCountries29mtemp == null){
%>
<%=getCountries29mtemp %>
<%
}else{
        String tempResultreturnp30 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(getCountries29mtemp));
        %>
        <%= tempResultreturnp30 %>
        <%
}
break;
case 32:
        gotMethod = true;
        String currencyName_3id=  request.getParameter("currencyName35");
            java.lang.String currencyName_3idTemp = null;
        if(!currencyName_3id.equals("")){
         currencyName_3idTemp  = currencyName_3id;
        }
        java.lang.String getCurrencyCodeByCurrencyName32mtemp = sampleCountrySoapProxyid.getCurrencyCodeByCurrencyName(currencyName_3idTemp);
if(getCurrencyCodeByCurrencyName32mtemp == null){
%>
<%=getCurrencyCodeByCurrencyName32mtemp %>
<%
}else{
        String tempResultreturnp33 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(getCurrencyCodeByCurrencyName32mtemp));
        %>
        <%= tempResultreturnp33 %>
        <%
}
break;
case 37:
        gotMethod = true;
        String countryName_4id=  request.getParameter("countryName40");
            java.lang.String countryName_4idTemp = null;
        if(!countryName_4id.equals("")){
         countryName_4idTemp  = countryName_4id;
        }
        java.lang.String getISOCountryCodeByCountyName37mtemp = sampleCountrySoapProxyid.getISOCountryCodeByCountyName(countryName_4idTemp);
if(getISOCountryCodeByCountyName37mtemp == null){
%>
<%=getISOCountryCodeByCountyName37mtemp %>
<%
}else{
        String tempResultreturnp38 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(getISOCountryCodeByCountyName37mtemp));
        %>
        <%= tempResultreturnp38 %>
        <%
}
break;
case 42:
        gotMethod = true;
        java.lang.String getCurrencyCode42mtemp = sampleCountrySoapProxyid.getCurrencyCode();
if(getCurrencyCode42mtemp == null){
%>
<%=getCurrencyCode42mtemp %>
<%
}else{
        String tempResultreturnp43 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(getCurrencyCode42mtemp));
        %>
        <%= tempResultreturnp43 %>
        <%
}
break;
case 45:
        gotMethod = true;
        String currencyCode_5id=  request.getParameter("currencyCode48");
            java.lang.String currencyCode_5idTemp = null;
        if(!currencyCode_5id.equals("")){
         currencyCode_5idTemp  = currencyCode_5id;
        }
        java.lang.String getCountryByCurrencyCode45mtemp = sampleCountrySoapProxyid.getCountryByCurrencyCode(currencyCode_5idTemp);
if(getCountryByCurrencyCode45mtemp == null){
%>
<%=getCountryByCurrencyCode45mtemp %>
<%
}else{
        String tempResultreturnp46 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(getCountryByCurrencyCode45mtemp));
        %>
        <%= tempResultreturnp46 %>
        <%
}
break;
case 50:
        gotMethod = true;
        java.lang.String getCurrencies50mtemp = sampleCountrySoapProxyid.getCurrencies();
if(getCurrencies50mtemp == null){
%>
<%=getCurrencies50mtemp %>
<%
}else{
        String tempResultreturnp51 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(getCurrencies50mtemp));
        %>
        <%= tempResultreturnp51 %>
        <%
}
break;
case 53:
        gotMethod = true;
        String countryName_6id=  request.getParameter("countryName56");
            java.lang.String countryName_6idTemp = null;
        if(!countryName_6id.equals("")){
         countryName_6idTemp  = countryName_6id;
        }
        java.lang.String getCurrencyByCountry53mtemp = sampleCountrySoapProxyid.getCurrencyByCountry(countryName_6idTemp);
if(getCurrencyByCountry53mtemp == null){
%>
<%=getCurrencyByCountry53mtemp %>
<%
}else{
        String tempResultreturnp54 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(getCurrencyByCountry53mtemp));
        %>
        <%= tempResultreturnp54 %>
        <%
}
break;
case 58:
        gotMethod = true;
        String countryName_7id=  request.getParameter("countryName61");
            java.lang.String countryName_7idTemp = null;
        if(!countryName_7id.equals("")){
         countryName_7idTemp  = countryName_7id;
        }
        java.lang.String getGMTbyCountry58mtemp = sampleCountrySoapProxyid.getGMTbyCountry(countryName_7idTemp);
if(getGMTbyCountry58mtemp == null){
%>
<%=getGMTbyCountry58mtemp %>
<%
}else{
        String tempResultreturnp59 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(getGMTbyCountry58mtemp));
        %>
        <%= tempResultreturnp59 %>
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
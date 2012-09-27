<%@page contentType="text/html;charset=UTF-8"%>
<% request.setCharacterEncoding("UTF-8"); %>
<HTML>
<HEAD>
<TITLE>Result</TITLE>
</HEAD>
<BODY>
<H1>Result</H1>

<jsp:useBean id="sampleCountryInformationServiceSoapProxyid" scope="session" class="com.ezzylearning.www.services.CountryInformationService_asmx.CountryInformationServiceSoapProxy" />
<%
if (request.getParameter("endpoint") != null && request.getParameter("endpoint").length() > 0)
sampleCountryInformationServiceSoapProxyid.setEndpoint(request.getParameter("endpoint"));
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
        java.lang.String getEndpoint2mtemp = sampleCountryInformationServiceSoapProxyid.getEndpoint();
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
        sampleCountryInformationServiceSoapProxyid.setEndpoint(endpoint_0idTemp);
break;
case 10:
        gotMethod = true;
        com.ezzylearning.www.services.CountryInformationService_asmx.CountryInformationServiceSoap getCountryInformationServiceSoap10mtemp = sampleCountryInformationServiceSoapProxyid.getCountryInformationServiceSoap();
if(getCountryInformationServiceSoap10mtemp == null){
%>
<%=getCountryInformationServiceSoap10mtemp %>
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
case 27:
        gotMethod = true;
        java.lang.String getServiceName27mtemp = sampleCountryInformationServiceSoapProxyid.getServiceName();
if(getServiceName27mtemp == null){
%>
<%=getServiceName27mtemp %>
<%
}else{
        String tempResultreturnp28 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(getServiceName27mtemp));
        %>
        <%= tempResultreturnp28 %>
        <%
}
break;
case 30:
        gotMethod = true;
        com.ezzylearning.www.services.CountryInformationService_asmx.GetCountriesResponseGetCountriesResult getCountries30mtemp = sampleCountryInformationServiceSoapProxyid.getCountries();
if(getCountries30mtemp == null){
%>
<%=getCountries30mtemp %>
<%
}else{
%>
<TABLE>
<TR>
<TD COLSPAN="3" ALIGN="LEFT">returnp:</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">_any:</TD>
<TD>
<%
if(getCountries30mtemp != null){
org.apache.axis.message.MessageElement[] type_any33 = getCountries30mtemp.get_any();
        String temp_any33 = null;
        if(type_any33 != null){
        java.util.List list_any33= java.util.Arrays.asList(type_any33);
        temp_any33 = list_any33.toString();
        }
        %>
        <%=temp_any33%>
        <%
}%>
</TD>
</TABLE>
<%
}
break;
case 35:
        gotMethod = true;
        String twoLetterISOCode_1id=  request.getParameter("twoLetterISOCode38");
            java.lang.String twoLetterISOCode_1idTemp = null;
        if(!twoLetterISOCode_1id.equals("")){
         twoLetterISOCode_1idTemp  = twoLetterISOCode_1id;
        }
        java.lang.String getCountryByTwoLetterISOCode35mtemp = sampleCountryInformationServiceSoapProxyid.getCountryByTwoLetterISOCode(twoLetterISOCode_1idTemp);
if(getCountryByTwoLetterISOCode35mtemp == null){
%>
<%=getCountryByTwoLetterISOCode35mtemp %>
<%
}else{
        String tempResultreturnp36 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(getCountryByTwoLetterISOCode35mtemp));
        %>
        <%= tempResultreturnp36 %>
        <%
}
break;
case 40:
        gotMethod = true;
        String countryName_2id=  request.getParameter("countryName43");
            java.lang.String countryName_2idTemp = null;
        if(!countryName_2id.equals("")){
         countryName_2idTemp  = countryName_2id;
        }
        java.lang.String getTwoLetterISOCodeByCountry40mtemp = sampleCountryInformationServiceSoapProxyid.getTwoLetterISOCodeByCountry(countryName_2idTemp);
if(getTwoLetterISOCodeByCountry40mtemp == null){
%>
<%=getTwoLetterISOCodeByCountry40mtemp %>
<%
}else{
        String tempResultreturnp41 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(getTwoLetterISOCodeByCountry40mtemp));
        %>
        <%= tempResultreturnp41 %>
        <%
}
break;
case 45:
        gotMethod = true;
        String threeLetterISOCode_3id=  request.getParameter("threeLetterISOCode48");
            java.lang.String threeLetterISOCode_3idTemp = null;
        if(!threeLetterISOCode_3id.equals("")){
         threeLetterISOCode_3idTemp  = threeLetterISOCode_3id;
        }
        java.lang.String getCountryByThreeLetterISOCode45mtemp = sampleCountryInformationServiceSoapProxyid.getCountryByThreeLetterISOCode(threeLetterISOCode_3idTemp);
if(getCountryByThreeLetterISOCode45mtemp == null){
%>
<%=getCountryByThreeLetterISOCode45mtemp %>
<%
}else{
        String tempResultreturnp46 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(getCountryByThreeLetterISOCode45mtemp));
        %>
        <%= tempResultreturnp46 %>
        <%
}
break;
case 50:
        gotMethod = true;
        String countryName_4id=  request.getParameter("countryName53");
            java.lang.String countryName_4idTemp = null;
        if(!countryName_4id.equals("")){
         countryName_4idTemp  = countryName_4id;
        }
        java.lang.String getThreeLetterISOCodeByCountry50mtemp = sampleCountryInformationServiceSoapProxyid.getThreeLetterISOCodeByCountry(countryName_4idTemp);
if(getThreeLetterISOCodeByCountry50mtemp == null){
%>
<%=getThreeLetterISOCodeByCountry50mtemp %>
<%
}else{
        String tempResultreturnp51 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(getThreeLetterISOCodeByCountry50mtemp));
        %>
        <%= tempResultreturnp51 %>
        <%
}
break;
case 55:
        gotMethod = true;
        String countryName_5id=  request.getParameter("countryName58");
            java.lang.String countryName_5idTemp = null;
        if(!countryName_5id.equals("")){
         countryName_5idTemp  = countryName_5id;
        }
        java.lang.String getCapitalByCountry55mtemp = sampleCountryInformationServiceSoapProxyid.getCapitalByCountry(countryName_5idTemp);
if(getCapitalByCountry55mtemp == null){
%>
<%=getCapitalByCountry55mtemp %>
<%
}else{
        String tempResultreturnp56 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(getCapitalByCountry55mtemp));
        %>
        <%= tempResultreturnp56 %>
        <%
}
break;
case 60:
        gotMethod = true;
        String countryName_6id=  request.getParameter("countryName63");
            java.lang.String countryName_6idTemp = null;
        if(!countryName_6id.equals("")){
         countryName_6idTemp  = countryName_6id;
        }
        java.lang.String getAreaInKMByCountry60mtemp = sampleCountryInformationServiceSoapProxyid.getAreaInKMByCountry(countryName_6idTemp);
if(getAreaInKMByCountry60mtemp == null){
%>
<%=getAreaInKMByCountry60mtemp %>
<%
}else{
        String tempResultreturnp61 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(getAreaInKMByCountry60mtemp));
        %>
        <%= tempResultreturnp61 %>
        <%
}
break;
case 65:
        gotMethod = true;
        String countryName_7id=  request.getParameter("countryName68");
            java.lang.String countryName_7idTemp = null;
        if(!countryName_7id.equals("")){
         countryName_7idTemp  = countryName_7id;
        }
        java.lang.String getPopulationByCountry65mtemp = sampleCountryInformationServiceSoapProxyid.getPopulationByCountry(countryName_7idTemp);
if(getPopulationByCountry65mtemp == null){
%>
<%=getPopulationByCountry65mtemp %>
<%
}else{
        String tempResultreturnp66 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(getPopulationByCountry65mtemp));
        %>
        <%= tempResultreturnp66 %>
        <%
}
break;
case 70:
        gotMethod = true;
        com.ezzylearning.www.services.CountryInformationService_asmx.GetContinentsResponseGetContinentsResult getContinents70mtemp = sampleCountryInformationServiceSoapProxyid.getContinents();
if(getContinents70mtemp == null){
%>
<%=getContinents70mtemp %>
<%
}else{
%>
<TABLE>
<TR>
<TD COLSPAN="3" ALIGN="LEFT">returnp:</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">_any:</TD>
<TD>
<%
if(getContinents70mtemp != null){
org.apache.axis.message.MessageElement[] type_any73 = getContinents70mtemp.get_any();
        String temp_any73 = null;
        if(type_any73 != null){
        java.util.List list_any73= java.util.Arrays.asList(type_any73);
        temp_any73 = list_any73.toString();
        }
        %>
        <%=temp_any73%>
        <%
}%>
</TD>
</TABLE>
<%
}
break;
case 75:
        gotMethod = true;
        String continentCode_8id=  request.getParameter("continentCode80");
            java.lang.String continentCode_8idTemp = null;
        if(!continentCode_8id.equals("")){
         continentCode_8idTemp  = continentCode_8id;
        }
        com.ezzylearning.www.services.CountryInformationService_asmx.GetCountriesByContinentResponseGetCountriesByContinentResult getCountriesByContinent75mtemp = sampleCountryInformationServiceSoapProxyid.getCountriesByContinent(continentCode_8idTemp);
if(getCountriesByContinent75mtemp == null){
%>
<%=getCountriesByContinent75mtemp %>
<%
}else{
%>
<TABLE>
<TR>
<TD COLSPAN="3" ALIGN="LEFT">returnp:</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">_any:</TD>
<TD>
<%
if(getCountriesByContinent75mtemp != null){
org.apache.axis.message.MessageElement[] type_any78 = getCountriesByContinent75mtemp.get_any();
        String temp_any78 = null;
        if(type_any78 != null){
        java.util.List list_any78= java.util.Arrays.asList(type_any78);
        temp_any78 = list_any78.toString();
        }
        %>
        <%=temp_any78%>
        <%
}%>
</TD>
</TABLE>
<%
}
break;
case 82:
        gotMethod = true;
        String currencyCode_9id=  request.getParameter("currencyCode85");
            java.lang.String currencyCode_9idTemp = null;
        if(!currencyCode_9id.equals("")){
         currencyCode_9idTemp  = currencyCode_9id;
        }
        java.lang.String getCountryByCurrencyCode82mtemp = sampleCountryInformationServiceSoapProxyid.getCountryByCurrencyCode(currencyCode_9idTemp);
if(getCountryByCurrencyCode82mtemp == null){
%>
<%=getCountryByCurrencyCode82mtemp %>
<%
}else{
        String tempResultreturnp83 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(getCountryByCurrencyCode82mtemp));
        %>
        <%= tempResultreturnp83 %>
        <%
}
break;
case 87:
        gotMethod = true;
        com.ezzylearning.www.services.CountryInformationService_asmx.GetCurrenciesResponseGetCurrenciesResult getCurrencies87mtemp = sampleCountryInformationServiceSoapProxyid.getCurrencies();
if(getCurrencies87mtemp == null){
%>
<%=getCurrencies87mtemp %>
<%
}else{
%>
<TABLE>
<TR>
<TD COLSPAN="3" ALIGN="LEFT">returnp:</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">_any:</TD>
<TD>
<%
if(getCurrencies87mtemp != null){
org.apache.axis.message.MessageElement[] type_any90 = getCurrencies87mtemp.get_any();
        String temp_any90 = null;
        if(type_any90 != null){
        java.util.List list_any90= java.util.Arrays.asList(type_any90);
        temp_any90 = list_any90.toString();
        }
        %>
        <%=temp_any90%>
        <%
}%>
</TD>
</TABLE>
<%
}
break;
case 92:
        gotMethod = true;
        String countryName_10id=  request.getParameter("countryName95");
            java.lang.String countryName_10idTemp = null;
        if(!countryName_10id.equals("")){
         countryName_10idTemp  = countryName_10id;
        }
        java.lang.String getCurrencyCodeByCountry92mtemp = sampleCountryInformationServiceSoapProxyid.getCurrencyCodeByCountry(countryName_10idTemp);
if(getCurrencyCodeByCountry92mtemp == null){
%>
<%=getCurrencyCodeByCountry92mtemp %>
<%
}else{
        String tempResultreturnp93 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(getCurrencyCodeByCountry92mtemp));
        %>
        <%= tempResultreturnp93 %>
        <%
}
break;
case 97:
        gotMethod = true;
        String countryName_11id=  request.getParameter("countryName100");
            java.lang.String countryName_11idTemp = null;
        if(!countryName_11id.equals("")){
         countryName_11idTemp  = countryName_11id;
        }
        java.lang.String getCurrencyNameByCountry97mtemp = sampleCountryInformationServiceSoapProxyid.getCurrencyNameByCountry(countryName_11idTemp);
if(getCurrencyNameByCountry97mtemp == null){
%>
<%=getCurrencyNameByCountry97mtemp %>
<%
}else{
        String tempResultreturnp98 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(getCurrencyNameByCountry97mtemp));
        %>
        <%= tempResultreturnp98 %>
        <%
}
break;
case 102:
        gotMethod = true;
        String currencyCode_12id=  request.getParameter("currencyCode105");
            java.lang.String currencyCode_12idTemp = null;
        if(!currencyCode_12id.equals("")){
         currencyCode_12idTemp  = currencyCode_12id;
        }
        java.lang.String getCurrencyByCurrencyCode102mtemp = sampleCountryInformationServiceSoapProxyid.getCurrencyByCurrencyCode(currencyCode_12idTemp);
if(getCurrencyByCurrencyCode102mtemp == null){
%>
<%=getCurrencyByCurrencyCode102mtemp %>
<%
}else{
        String tempResultreturnp103 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(getCurrencyByCurrencyCode102mtemp));
        %>
        <%= tempResultreturnp103 %>
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
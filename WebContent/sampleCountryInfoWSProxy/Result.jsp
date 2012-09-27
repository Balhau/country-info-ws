<%@page contentType="text/html;charset=UTF-8"%>
<% request.setCharacterEncoding("UTF-8"); %>
<HTML>
<HEAD>
<TITLE>Result</TITLE>
</HEAD>
<BODY>
<H1>Result</H1>

<jsp:useBean id="sampleCountryInfoWSProxyid" scope="session" class="org.webservice.countryInfo.CountryInfoWSProxy" />
<%
if (request.getParameter("endpoint") != null && request.getParameter("endpoint").length() > 0)
sampleCountryInfoWSProxyid.setEndpoint(request.getParameter("endpoint"));
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
        java.lang.String getEndpoint2mtemp = sampleCountryInfoWSProxyid.getEndpoint();
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
        sampleCountryInfoWSProxyid.setEndpoint(endpoint_0idTemp);
break;
case 10:
        gotMethod = true;
        org.webservice.countryInfo.CountryInfoWS getCountryInfoWS10mtemp = sampleCountryInfoWSProxyid.getCountryInfoWS();
if(getCountryInfoWS10mtemp == null){
%>
<%=getCountryInfoWS10mtemp %>
<%
}else{
        if(getCountryInfoWS10mtemp!= null){
        String tempreturnp11 = getCountryInfoWS10mtemp.toString();
        %>
        <%=tempreturnp11%>
        <%
        }}
break;
case 13:
        gotMethod = true;
        String countryCode_1id=  request.getParameter("countryCode36");
            java.lang.String countryCode_1idTemp = null;
        if(!countryCode_1id.equals("")){
         countryCode_1idTemp  = countryCode_1id;
        }
        org.webservice.countryInfo.CountryInfoResultWS getCountryInfo13mtemp = sampleCountryInfoWSProxyid.getCountryInfo(countryCode_1idTemp);
if(getCountryInfo13mtemp == null){
%>
<%=getCountryInfo13mtemp %>
<%
}else{
%>
<TABLE>
<TR>
<TD COLSPAN="3" ALIGN="LEFT">returnp:</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">area:</TD>
<TD>
<%
if(getCountryInfo13mtemp != null){
java.lang.String typearea16 = getCountryInfo13mtemp.getArea();
        String tempResultarea16 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(typearea16));
        %>
        <%= tempResultarea16 %>
        <%
}%>
</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">iCAO:</TD>
<TD>
<%
if(getCountryInfo13mtemp != null){
java.lang.String typeiCAO18 = getCountryInfo13mtemp.getICAO();
        String tempResultiCAO18 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(typeiCAO18));
        %>
        <%= tempResultiCAO18 %>
        <%
}%>
</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">capital:</TD>
<TD>
<%
if(getCountryInfo13mtemp != null){
java.lang.String typecapital20 = getCountryInfo13mtemp.getCapital();
        String tempResultcapital20 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(typecapital20));
        %>
        <%= tempResultcapital20 %>
        <%
}%>
</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">populacao:</TD>
<TD>
<%
if(getCountryInfo13mtemp != null){
java.lang.String typepopulacao22 = getCountryInfo13mtemp.getPopulacao();
        String tempResultpopulacao22 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(typepopulacao22));
        %>
        <%= tempResultpopulacao22 %>
        <%
}%>
</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">moeda:</TD>
<TD>
<%
if(getCountryInfo13mtemp != null){
java.lang.String typemoeda24 = getCountryInfo13mtemp.getMoeda();
        String tempResultmoeda24 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(typemoeda24));
        %>
        <%= tempResultmoeda24 %>
        <%
}%>
</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">randomCityWeather:</TD>
<TD>
<%
if(getCountryInfo13mtemp != null){
java.lang.String typerandomCityWeather26 = getCountryInfo13mtemp.getRandomCityWeather();
        String tempResultrandomCityWeather26 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(typerandomCityWeather26));
        %>
        <%= tempResultrandomCityWeather26 %>
        <%
}%>
</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">geoInfo:</TD>
<TD>
<%
if(getCountryInfo13mtemp != null){
java.lang.String typegeoInfo28 = getCountryInfo13mtemp.getGeoInfo();
        String tempResultgeoInfo28 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(typegeoInfo28));
        %>
        <%= tempResultgeoInfo28 %>
        <%
}%>
</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">lingua:</TD>
<TD>
<%
if(getCountryInfo13mtemp != null){
java.lang.String typelingua30 = getCountryInfo13mtemp.getLingua();
        String tempResultlingua30 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(typelingua30));
        %>
        <%= tempResultlingua30 %>
        <%
}%>
</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">gMT:</TD>
<TD>
<%
if(getCountryInfo13mtemp != null){
java.lang.String typegMT32 = getCountryInfo13mtemp.getGMT();
        String tempResultgMT32 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(typegMT32));
        %>
        <%= tempResultgMT32 %>
        <%
}%>
</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">iSD:</TD>
<TD>
<%
if(getCountryInfo13mtemp != null){
java.lang.String typeiSD34 = getCountryInfo13mtemp.getISD();
        String tempResultiSD34 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(typeiSD34));
        %>
        <%= tempResultiSD34 %>
        <%
}%>
</TD>
</TABLE>
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
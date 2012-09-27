<%@page contentType="text/html;charset=UTF-8"%>
<% request.setCharacterEncoding("UTF-8"); %>
<HTML>
<HEAD>
<TITLE>Result</TITLE>
</HEAD>
<BODY>
<H1>Result</H1>

<jsp:useBean id="samplePopulationWSSoapProxyid" scope="session" class="com.abundanttech.www.WebServices.Population.PopulationWSSoapProxy" />
<%
if (request.getParameter("endpoint") != null && request.getParameter("endpoint").length() > 0)
samplePopulationWSSoapProxyid.setEndpoint(request.getParameter("endpoint"));
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
        java.lang.String getEndpoint2mtemp = samplePopulationWSSoapProxyid.getEndpoint();
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
        samplePopulationWSSoapProxyid.setEndpoint(endpoint_0idTemp);
break;
case 10:
        gotMethod = true;
        com.abundanttech.www.WebServices.Population.PopulationWSSoap getPopulationWSSoap10mtemp = samplePopulationWSSoapProxyid.getPopulationWSSoap();
if(getPopulationWSSoap10mtemp == null){
%>
<%=getPopulationWSSoap10mtemp %>
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
case 17:
        gotMethod = true;
        java.lang.Object getWorldPopulation17mtemp = samplePopulationWSSoapProxyid.getWorldPopulation();
if(getWorldPopulation17mtemp == null){
%>
<%=getWorldPopulation17mtemp %>
<%
}else{
        String tempResultreturnp18 = org.eclipse.jst.ws.util.JspUtils.markup(getWorldPopulation17mtemp.toString());
        %>
        <%= tempResultreturnp18 %>
        <%
}
break;
case 20:
        gotMethod = true;
        String strCountry_1id=  request.getParameter("strCountry29");
            java.lang.String strCountry_1idTemp = null;
        if(!strCountry_1id.equals("")){
         strCountry_1idTemp  = strCountry_1id;
        }
        com.abundanttech.www.WebServices.Population.Population getPopulation20mtemp = samplePopulationWSSoapProxyid.getPopulation(strCountry_1idTemp);
if(getPopulation20mtemp == null){
%>
<%=getPopulation20mtemp %>
<%
}else{
%>
<TABLE>
<TR>
<TD COLSPAN="3" ALIGN="LEFT">returnp:</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">pop:</TD>
<TD>
<%
if(getPopulation20mtemp != null){
java.lang.String typepop23 = getPopulation20mtemp.getPop();
        String tempResultpop23 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(typepop23));
        %>
        <%= tempResultpop23 %>
        <%
}%>
</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">date:</TD>
<TD>
<%
if(getPopulation20mtemp != null){
java.lang.String typedate25 = getPopulation20mtemp.getDate();
        String tempResultdate25 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(typedate25));
        %>
        <%= tempResultdate25 %>
        <%
}%>
</TD>
<TR>
<TD WIDTH="5%"></TD>
<TD COLSPAN="2" ALIGN="LEFT">country:</TD>
<TD>
<%
if(getPopulation20mtemp != null){
java.lang.String typecountry27 = getPopulation20mtemp.getCountry();
        String tempResultcountry27 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(typecountry27));
        %>
        <%= tempResultcountry27 %>
        <%
}%>
</TD>
</TABLE>
<%
}
break;
case 31:
        gotMethod = true;
        java.lang.String[] getCountries31mtemp = samplePopulationWSSoapProxyid.getCountries();
if(getCountries31mtemp == null){
%>
<%=getCountries31mtemp %>
<%
}else{
        String tempreturnp32 = null;
        if(getCountries31mtemp != null){
        java.util.List listreturnp32= java.util.Arrays.asList(getCountries31mtemp);
        tempreturnp32 = listreturnp32.toString();
        }
        %>
        <%=tempreturnp32%>
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
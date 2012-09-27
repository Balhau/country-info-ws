<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
    String redirectURL = "http://www.google.com/";
	if(request.isSecure())
		response.sendRedirect(redirectURL);
	else
		response.getWriter().write("Ligação não segura!");
		//response.sendRedirect(redirectURL);
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Hello World</title>
</head>
<body>
	Olá mundo!
</body>
</html>
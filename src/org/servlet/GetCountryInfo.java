package org.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.webservice.countryInfo.CountryInfo;
import org.webservice.countryInfo.CountryInfoResult;

import com.google.gson.Gson;

/**
 * Servlet implementation class GetCountryInfo
 */
public class GetCountryInfo extends BaseServlet {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	/**
     * @see HttpServlet#HttpServlet()
     */
    public GetCountryInfo() {
        super();
        // TODO Auto-generated constructor stub
    }
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String ccode=request.getParameter("countryCode");
		CountryInfo ci=new CountryInfo();
		CountryInfoResult res=ci.getCountryInfo(ccode);
		PrintWriter pw=response.getWriter();
		Gson gs=new Gson();
		pw.write(gs.toJson(res));
	}

}

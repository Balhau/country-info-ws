package org.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.webservice.countryInfo.CountryInfo;

import com.google.gson.Gson;

/**
 * Servlet implementation class GetCities
 */
public class GetCities extends BaseServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetCities() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter pw=response.getWriter();
		Gson gs=new Gson();
		try{
			String cname=request.getParameter("countryName");
			String[] cities=CountryInfo.getCities(cname);
			pw.write(gs.toJson(cities));
		}catch(Exception e)
		{pw.write(gs.toJson("Erro: "+e.getMessage()));}
	}

}

package org.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.webservice.countryInfo.CountryInfo;
import org.webservice.countryInfo.CountryInfoKV;

import com.google.gson.Gson;

/**
 * Servlet implementation class GetCountries
 */
public class GetCountries extends BaseServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetCountries() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter pw=response.getWriter();
		CountryInfoKV[] countries=CountryInfo.getCountriesMap();
		Gson gs=new Gson();
		pw.write(gs.toJson(countries));
	}

}

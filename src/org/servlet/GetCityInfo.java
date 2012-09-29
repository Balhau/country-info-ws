package org.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.parsers.ParserConfigurationException;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import org.webservice.countryInfo.CountryInfo;
import org.webservice.countryInfo.CountryInfoKV;
import org.xml.sax.SAXException;

import NET.webserviceX.www.GlobalWeatherSoapProxy;

import com.google.gson.Gson;

/**
 * Servlet implementation class GetCityInfo
 */
public class GetCityInfo extends BaseServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetCityInfo() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String countryName=request.getParameter("countryName");
		String cityName=request.getParameter("cityName");
		CityWeatherInfo cwi=new CityWeatherInfo("Data Not Found");
		PrintWriter pw=response.getWriter();
		GlobalWeatherSoapProxy proxy=new GlobalWeatherSoapProxy();
		proxy.setEndpoint(proxy.getEndpoint());
		String xml=proxy.getWeather(cityName, countryName);
		Document dom=null;
		try {
			dom = CountryInfo.xml2dom(xml);
			cwi.Location=((Element)dom.getElementsByTagName("Location").item(0)).getFirstChild().getNodeValue();
			cwi.Time=((Element)dom.getElementsByTagName("Time").item(0)).getFirstChild().getNodeValue();
			cwi.Wind=((Element)dom.getElementsByTagName("Wind").item(0)).getFirstChild().getNodeValue();
			cwi.Visibility=((Element)dom.getElementsByTagName("Visibility").item(0)).getFirstChild().getNodeValue();
			cwi.SkyConditions=((Element)dom.getElementsByTagName("SkyConditions").item(0)).getFirstChild().getNodeValue();
			cwi.Temperature=((Element)dom.getElementsByTagName("Temperature").item(0)).getFirstChild().getNodeValue();
			cwi.Pressure=((Element)dom.getElementsByTagName("Pressure").item(0)).getFirstChild().getNodeValue();
			cwi.DewPoint=((Element)dom.getElementsByTagName("DewPoint").item(0)).getFirstChild().getNodeValue();
			cwi.RelativeHumidity=((Element)dom.getElementsByTagName("RelativeHumidity").item(0)).getFirstChild().getNodeValue();
		} catch (Exception e){
			Gson gs=new Gson();
			pw.write(gs.toJson(cwi));
			return;
		}
		NodeList els=dom.getElementsByTagName("Table");
		Gson gs=new Gson();
		pw.write(gs.toJson(cwi));
	}
	
	private class CityWeatherInfo{
		public String Location;
		public String Time;
		public String Wind;
		public String RelativeHumidity;
		public String Visibility;
		public String SkyConditions;
		public String Temperature;
		public String Pressure;
		public String DewPoint;
		
		public CityWeatherInfo(String dNfound){
			this.Location=dNfound;this.Time=dNfound;
			this.Wind=dNfound;this.Visibility=dNfound;
			this.SkyConditions=dNfound;this.Temperature=dNfound;
			this.Pressure=dNfound;this.DewPoint=dNfound;
			this.RelativeHumidity=dNfound;
		}
		
		public CityWeatherInfo(String Location,String Time,String Wind,
				String Visibility,String SkyConditions,String Temperature,
				String Pressure,String DewPoint,String RelativeHumidity 
				){
			this.Location=Location;this.Time=Time;
			this.Wind=Wind;this.Visibility=Visibility;
			this.SkyConditions=SkyConditions;this.Temperature=Temperature;
			this.Pressure=Pressure;this.DewPoint=DewPoint;
			this.RelativeHumidity=RelativeHumidity;
		}
	}
}

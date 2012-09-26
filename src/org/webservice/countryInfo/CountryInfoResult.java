package org.webservice.countryInfo;


public class CountryInfoResult {
	public String Lingua;
	public String Populacao;
	public String Moeda;
	public String Capital;
	public String ICAO;
	public String GeoInfo;
	public String CapWeather;
	
	public CountryInfoResult(){}
	
	public CountryInfoResult(String lingua,String pop,String moeda,String capital,
			String icao,String GeoInfo,String CapWeather){
		this.Lingua=lingua;
		this.Populacao=pop;
		this.Moeda=moeda;
		this.Capital=capital;
		this.ICAO=icao;
		this.GeoInfo=GeoInfo;
		this.CapWeather=CapWeather;
	}
}

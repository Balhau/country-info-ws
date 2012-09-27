package org.webservice.countryInfo;

/**
 * This class represents all the agregated data build upon the several web services
 * @author balhau
 *
 */
public class CountryInfoResult {
	public String Lingua;
	public String Populacao;
	public String Moeda;
	public String Capital;
	public String ICAO;
	public String GMT;
	public String GeoInfo;
	public String ISD;
	public String RandomCityWeather;
	public String Area;
	
	public CountryInfoResult(){}
	/**
	 * This constructor allow all the properties to pass into the object.
	 * In this class all properties are public because here encapsulation is really not
	 * needed. Not now not in the future. This is only structure like object
	 * @param lingua Info about the country language
	 * @param pop Number of citizens
	 * @param moeda Current currency
	 * @param capital Name of the capital 
	 * @param icao International Civil Aviation Organization code
	 * @param GeoInfo Geographic information
	 * @param RandomCityWeather Random city weather
	 * @param gmt Greenwich mean Time
	 * @param isd International Dealing code
	 * @param area Area in km^2 of the country
	 */
	public CountryInfoResult(
			String lingua,String pop,String moeda,String capital,
			String icao,String GeoInfo,String RandomCityWeather,
			String gmt,String isd,String area){
		this.Lingua=lingua;
		this.Populacao=pop;
		this.Moeda=moeda;
		this.Capital=capital;
		this.ICAO=icao;
		this.GMT=gmt;
		this.ISD=isd;
		this.GeoInfo=GeoInfo;
		this.RandomCityWeather=RandomCityWeather;
		this.Area=area;
	}
}

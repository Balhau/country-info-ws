package org.webservice.countryInfo;

public class CountryInfoKV {
	public String countryName;
	public String countryISO2;
	
	public CountryInfoKV(String countryName,String iso2){
		this.countryISO2=iso2;
		this.countryName=countryName;
	}
}

/**
 * CountryInformationServiceSoap.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.ezzylearning.www.services.CountryInformationService_asmx;

public interface CountryInformationServiceSoap extends java.rmi.Remote {
    public java.lang.String getServiceName() throws java.rmi.RemoteException;
    public com.ezzylearning.www.services.CountryInformationService_asmx.GetCountriesResponseGetCountriesResult getCountries() throws java.rmi.RemoteException;
    public java.lang.String getCountryByTwoLetterISOCode(java.lang.String twoLetterISOCode) throws java.rmi.RemoteException;
    public java.lang.String getTwoLetterISOCodeByCountry(java.lang.String countryName) throws java.rmi.RemoteException;
    public java.lang.String getCountryByThreeLetterISOCode(java.lang.String threeLetterISOCode) throws java.rmi.RemoteException;
    public java.lang.String getThreeLetterISOCodeByCountry(java.lang.String countryName) throws java.rmi.RemoteException;
    public java.lang.String getCapitalByCountry(java.lang.String countryName) throws java.rmi.RemoteException;
    public java.lang.String getAreaInKMByCountry(java.lang.String countryName) throws java.rmi.RemoteException;
    public java.lang.String getPopulationByCountry(java.lang.String countryName) throws java.rmi.RemoteException;
    public com.ezzylearning.www.services.CountryInformationService_asmx.GetContinentsResponseGetContinentsResult getContinents() throws java.rmi.RemoteException;
    public com.ezzylearning.www.services.CountryInformationService_asmx.GetCountriesByContinentResponseGetCountriesByContinentResult getCountriesByContinent(java.lang.String continentCode) throws java.rmi.RemoteException;
    public java.lang.String getCountryByCurrencyCode(java.lang.String currencyCode) throws java.rmi.RemoteException;
    public com.ezzylearning.www.services.CountryInformationService_asmx.GetCurrenciesResponseGetCurrenciesResult getCurrencies() throws java.rmi.RemoteException;
    public java.lang.String getCurrencyCodeByCountry(java.lang.String countryName) throws java.rmi.RemoteException;
    public java.lang.String getCurrencyNameByCountry(java.lang.String countryName) throws java.rmi.RemoteException;
    public java.lang.String getCurrencyByCurrencyCode(java.lang.String currencyCode) throws java.rmi.RemoteException;
}

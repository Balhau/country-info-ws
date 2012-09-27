package com.ezzylearning.www.services.CountryInformationService_asmx;

public class CountryInformationServiceSoapProxy implements com.ezzylearning.www.services.CountryInformationService_asmx.CountryInformationServiceSoap {
  private String _endpoint = null;
  private com.ezzylearning.www.services.CountryInformationService_asmx.CountryInformationServiceSoap countryInformationServiceSoap = null;
  
  public CountryInformationServiceSoapProxy() {
    _initCountryInformationServiceSoapProxy();
  }
  
  public CountryInformationServiceSoapProxy(String endpoint) {
    _endpoint = endpoint;
    _initCountryInformationServiceSoapProxy();
  }
  
  private void _initCountryInformationServiceSoapProxy() {
    try {
      countryInformationServiceSoap = (new com.ezzylearning.www.services.CountryInformationService_asmx.CountryInformationServiceLocator()).getCountryInformationServiceSoap();
      if (countryInformationServiceSoap != null) {
        if (_endpoint != null)
          ((javax.xml.rpc.Stub)countryInformationServiceSoap)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
        else
          _endpoint = (String)((javax.xml.rpc.Stub)countryInformationServiceSoap)._getProperty("javax.xml.rpc.service.endpoint.address");
      }
      
    }
    catch (javax.xml.rpc.ServiceException serviceException) {}
  }
  
  public String getEndpoint() {
    return _endpoint;
  }
  
  public void setEndpoint(String endpoint) {
    _endpoint = endpoint;
    if (countryInformationServiceSoap != null)
      ((javax.xml.rpc.Stub)countryInformationServiceSoap)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
    
  }
  
  public com.ezzylearning.www.services.CountryInformationService_asmx.CountryInformationServiceSoap getCountryInformationServiceSoap() {
    if (countryInformationServiceSoap == null)
      _initCountryInformationServiceSoapProxy();
    return countryInformationServiceSoap;
  }
  
  public java.lang.String getServiceName() throws java.rmi.RemoteException{
    if (countryInformationServiceSoap == null)
      _initCountryInformationServiceSoapProxy();
    return countryInformationServiceSoap.getServiceName();
  }
  
  public com.ezzylearning.www.services.CountryInformationService_asmx.GetCountriesResponseGetCountriesResult getCountries() throws java.rmi.RemoteException{
    if (countryInformationServiceSoap == null)
      _initCountryInformationServiceSoapProxy();
    return countryInformationServiceSoap.getCountries();
  }
  
  public java.lang.String getCountryByTwoLetterISOCode(java.lang.String twoLetterISOCode) throws java.rmi.RemoteException{
    if (countryInformationServiceSoap == null)
      _initCountryInformationServiceSoapProxy();
    return countryInformationServiceSoap.getCountryByTwoLetterISOCode(twoLetterISOCode);
  }
  
  public java.lang.String getTwoLetterISOCodeByCountry(java.lang.String countryName) throws java.rmi.RemoteException{
    if (countryInformationServiceSoap == null)
      _initCountryInformationServiceSoapProxy();
    return countryInformationServiceSoap.getTwoLetterISOCodeByCountry(countryName);
  }
  
  public java.lang.String getCountryByThreeLetterISOCode(java.lang.String threeLetterISOCode) throws java.rmi.RemoteException{
    if (countryInformationServiceSoap == null)
      _initCountryInformationServiceSoapProxy();
    return countryInformationServiceSoap.getCountryByThreeLetterISOCode(threeLetterISOCode);
  }
  
  public java.lang.String getThreeLetterISOCodeByCountry(java.lang.String countryName) throws java.rmi.RemoteException{
    if (countryInformationServiceSoap == null)
      _initCountryInformationServiceSoapProxy();
    return countryInformationServiceSoap.getThreeLetterISOCodeByCountry(countryName);
  }
  
  public java.lang.String getCapitalByCountry(java.lang.String countryName) throws java.rmi.RemoteException{
    if (countryInformationServiceSoap == null)
      _initCountryInformationServiceSoapProxy();
    return countryInformationServiceSoap.getCapitalByCountry(countryName);
  }
  
  public java.lang.String getAreaInKMByCountry(java.lang.String countryName) throws java.rmi.RemoteException{
    if (countryInformationServiceSoap == null)
      _initCountryInformationServiceSoapProxy();
    return countryInformationServiceSoap.getAreaInKMByCountry(countryName);
  }
  
  public java.lang.String getPopulationByCountry(java.lang.String countryName) throws java.rmi.RemoteException{
    if (countryInformationServiceSoap == null)
      _initCountryInformationServiceSoapProxy();
    return countryInformationServiceSoap.getPopulationByCountry(countryName);
  }
  
  public com.ezzylearning.www.services.CountryInformationService_asmx.GetContinentsResponseGetContinentsResult getContinents() throws java.rmi.RemoteException{
    if (countryInformationServiceSoap == null)
      _initCountryInformationServiceSoapProxy();
    return countryInformationServiceSoap.getContinents();
  }
  
  public com.ezzylearning.www.services.CountryInformationService_asmx.GetCountriesByContinentResponseGetCountriesByContinentResult getCountriesByContinent(java.lang.String continentCode) throws java.rmi.RemoteException{
    if (countryInformationServiceSoap == null)
      _initCountryInformationServiceSoapProxy();
    return countryInformationServiceSoap.getCountriesByContinent(continentCode);
  }
  
  public java.lang.String getCountryByCurrencyCode(java.lang.String currencyCode) throws java.rmi.RemoteException{
    if (countryInformationServiceSoap == null)
      _initCountryInformationServiceSoapProxy();
    return countryInformationServiceSoap.getCountryByCurrencyCode(currencyCode);
  }
  
  public com.ezzylearning.www.services.CountryInformationService_asmx.GetCurrenciesResponseGetCurrenciesResult getCurrencies() throws java.rmi.RemoteException{
    if (countryInformationServiceSoap == null)
      _initCountryInformationServiceSoapProxy();
    return countryInformationServiceSoap.getCurrencies();
  }
  
  public java.lang.String getCurrencyCodeByCountry(java.lang.String countryName) throws java.rmi.RemoteException{
    if (countryInformationServiceSoap == null)
      _initCountryInformationServiceSoapProxy();
    return countryInformationServiceSoap.getCurrencyCodeByCountry(countryName);
  }
  
  public java.lang.String getCurrencyNameByCountry(java.lang.String countryName) throws java.rmi.RemoteException{
    if (countryInformationServiceSoap == null)
      _initCountryInformationServiceSoapProxy();
    return countryInformationServiceSoap.getCurrencyNameByCountry(countryName);
  }
  
  public java.lang.String getCurrencyByCurrencyCode(java.lang.String currencyCode) throws java.rmi.RemoteException{
    if (countryInformationServiceSoap == null)
      _initCountryInformationServiceSoapProxy();
    return countryInformationServiceSoap.getCurrencyByCurrencyCode(currencyCode);
  }
  
  
}
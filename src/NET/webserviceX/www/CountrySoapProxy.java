package NET.webserviceX.www;

public class CountrySoapProxy implements NET.webserviceX.www.CountrySoap {
  private String _endpoint = null;
  private NET.webserviceX.www.CountrySoap countrySoap = null;
  
  public CountrySoapProxy() {
    _initCountrySoapProxy();
  }
  
  public CountrySoapProxy(String endpoint) {
    _endpoint = endpoint;
    _initCountrySoapProxy();
  }
  
  private void _initCountrySoapProxy() {
    try {
      countrySoap = (new NET.webserviceX.www.CountryLocator()).getcountrySoap();
      if (countrySoap != null) {
        if (_endpoint != null)
          ((javax.xml.rpc.Stub)countrySoap)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
        else
          _endpoint = (String)((javax.xml.rpc.Stub)countrySoap)._getProperty("javax.xml.rpc.service.endpoint.address");
      }
      
    }
    catch (javax.xml.rpc.ServiceException serviceException) {}
  }
  
  public String getEndpoint() {
    return _endpoint;
  }
  
  public void setEndpoint(String endpoint) {
    _endpoint = endpoint;
    if (countrySoap != null)
      ((javax.xml.rpc.Stub)countrySoap)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
    
  }
  
  public NET.webserviceX.www.CountrySoap getCountrySoap() {
    if (countrySoap == null)
      _initCountrySoapProxy();
    return countrySoap;
  }
  
  public java.lang.String getCountryByCountryCode(java.lang.String countryCode) throws java.rmi.RemoteException{
    if (countrySoap == null)
      _initCountrySoapProxy();
    return countrySoap.getCountryByCountryCode(countryCode);
  }
  
  public java.lang.String getISD(java.lang.String countryName) throws java.rmi.RemoteException{
    if (countrySoap == null)
      _initCountrySoapProxy();
    return countrySoap.getISD(countryName);
  }
  
  public java.lang.String getCountries() throws java.rmi.RemoteException{
    if (countrySoap == null)
      _initCountrySoapProxy();
    return countrySoap.getCountries();
  }
  
  public java.lang.String getCurrencyCodeByCurrencyName(java.lang.String currencyName) throws java.rmi.RemoteException{
    if (countrySoap == null)
      _initCountrySoapProxy();
    return countrySoap.getCurrencyCodeByCurrencyName(currencyName);
  }
  
  public java.lang.String getISOCountryCodeByCountyName(java.lang.String countryName) throws java.rmi.RemoteException{
    if (countrySoap == null)
      _initCountrySoapProxy();
    return countrySoap.getISOCountryCodeByCountyName(countryName);
  }
  
  public java.lang.String getCurrencyCode() throws java.rmi.RemoteException{
    if (countrySoap == null)
      _initCountrySoapProxy();
    return countrySoap.getCurrencyCode();
  }
  
  public java.lang.String getCountryByCurrencyCode(java.lang.String currencyCode) throws java.rmi.RemoteException{
    if (countrySoap == null)
      _initCountrySoapProxy();
    return countrySoap.getCountryByCurrencyCode(currencyCode);
  }
  
  public java.lang.String getCurrencies() throws java.rmi.RemoteException{
    if (countrySoap == null)
      _initCountrySoapProxy();
    return countrySoap.getCurrencies();
  }
  
  public java.lang.String getCurrencyByCountry(java.lang.String countryName) throws java.rmi.RemoteException{
    if (countrySoap == null)
      _initCountrySoapProxy();
    return countrySoap.getCurrencyByCountry(countryName);
  }
  
  public java.lang.String getGMTbyCountry(java.lang.String countryName) throws java.rmi.RemoteException{
    if (countrySoap == null)
      _initCountrySoapProxy();
    return countrySoap.getGMTbyCountry(countryName);
  }
  
  
}
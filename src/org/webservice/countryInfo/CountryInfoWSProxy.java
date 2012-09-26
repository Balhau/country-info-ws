package org.webservice.countryInfo;

public class CountryInfoWSProxy implements org.webservice.countryInfo.CountryInfoWS {
  private String _endpoint = null;
  private org.webservice.countryInfo.CountryInfoWS countryInfoWS = null;
  
  public CountryInfoWSProxy() {
    _initCountryInfoWSProxy();
  }
  
  public CountryInfoWSProxy(String endpoint) {
    _endpoint = endpoint;
    _initCountryInfoWSProxy();
  }
  
  private void _initCountryInfoWSProxy() {
    try {
      countryInfoWS = (new org.webservice.countryInfo.CountryInfoServiceLocator()).getCountryInfo();
      if (countryInfoWS != null) {
        if (_endpoint != null)
          ((javax.xml.rpc.Stub)countryInfoWS)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
        else
          _endpoint = (String)((javax.xml.rpc.Stub)countryInfoWS)._getProperty("javax.xml.rpc.service.endpoint.address");
      }
      
    }
    catch (javax.xml.rpc.ServiceException serviceException) {}
  }
  
  public String getEndpoint() {
    return _endpoint;
  }
  
  public void setEndpoint(String endpoint) {
    _endpoint = endpoint;
    if (countryInfoWS != null)
      ((javax.xml.rpc.Stub)countryInfoWS)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
    
  }
  
  public org.webservice.countryInfo.CountryInfoWS getCountryInfoWS() {
    if (countryInfoWS == null)
      _initCountryInfoWSProxy();
    return countryInfoWS;
  }
  
  public org.webservice.countryInfo.CountryInfoResultWS getCountryInfo(java.lang.String countryCode) throws java.rmi.RemoteException{
    if (countryInfoWS == null)
      _initCountryInfoWSProxy();
    return countryInfoWS.getCountryInfo(countryCode);
  }
  
  
}
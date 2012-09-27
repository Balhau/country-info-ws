package com.abundanttech.www.WebServices.Population;

public class PopulationWSSoapProxy implements com.abundanttech.www.WebServices.Population.PopulationWSSoap {
  private String _endpoint = null;
  private com.abundanttech.www.WebServices.Population.PopulationWSSoap populationWSSoap = null;
  
  public PopulationWSSoapProxy() {
    _initPopulationWSSoapProxy();
  }
  
  public PopulationWSSoapProxy(String endpoint) {
    _endpoint = endpoint;
    _initPopulationWSSoapProxy();
  }
  
  private void _initPopulationWSSoapProxy() {
    try {
      populationWSSoap = (new com.abundanttech.www.WebServices.Population.PopulationWSLocator()).getPopulationWSSoap();
      if (populationWSSoap != null) {
        if (_endpoint != null)
          ((javax.xml.rpc.Stub)populationWSSoap)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
        else
          _endpoint = (String)((javax.xml.rpc.Stub)populationWSSoap)._getProperty("javax.xml.rpc.service.endpoint.address");
      }
      
    }
    catch (javax.xml.rpc.ServiceException serviceException) {}
  }
  
  public String getEndpoint() {
    return _endpoint;
  }
  
  public void setEndpoint(String endpoint) {
    _endpoint = endpoint;
    if (populationWSSoap != null)
      ((javax.xml.rpc.Stub)populationWSSoap)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
    
  }
  
  public com.abundanttech.www.WebServices.Population.PopulationWSSoap getPopulationWSSoap() {
    if (populationWSSoap == null)
      _initPopulationWSSoapProxy();
    return populationWSSoap;
  }
  
  public java.lang.Object getWorldPopulation() throws java.rmi.RemoteException{
    if (populationWSSoap == null)
      _initPopulationWSSoapProxy();
    return populationWSSoap.getWorldPopulation();
  }
  
  public com.abundanttech.www.WebServices.Population.Population getPopulation(java.lang.String strCountry) throws java.rmi.RemoteException{
    if (populationWSSoap == null)
      _initPopulationWSSoapProxy();
    return populationWSSoap.getPopulation(strCountry);
  }
  
  public java.lang.String[] getCountries() throws java.rmi.RemoteException{
    if (populationWSSoap == null)
      _initPopulationWSSoapProxy();
    return populationWSSoap.getCountries();
  }
  
  
}
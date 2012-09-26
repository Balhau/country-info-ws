/**
 * CountryInfoServiceLocator.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package org.webservice.countryInfo;

public class CountryInfoServiceLocator extends org.apache.axis.client.Service implements org.webservice.countryInfo.CountryInfoService {

    public CountryInfoServiceLocator() {
    }


    public CountryInfoServiceLocator(org.apache.axis.EngineConfiguration config) {
        super(config);
    }

    public CountryInfoServiceLocator(java.lang.String wsdlLoc, javax.xml.namespace.QName sName) throws javax.xml.rpc.ServiceException {
        super(wsdlLoc, sName);
    }

    // Use to get a proxy class for CountryInfo
    private java.lang.String CountryInfo_address = "http://localhost:5289/countryInfo/services/CountryInfo";

    public java.lang.String getCountryInfoAddress() {
        return CountryInfo_address;
    }

    // The WSDD service name defaults to the port name.
    private java.lang.String CountryInfoWSDDServiceName = "CountryInfo";

    public java.lang.String getCountryInfoWSDDServiceName() {
        return CountryInfoWSDDServiceName;
    }

    public void setCountryInfoWSDDServiceName(java.lang.String name) {
        CountryInfoWSDDServiceName = name;
    }

    public org.webservice.countryInfo.CountryInfoWS getCountryInfo() throws javax.xml.rpc.ServiceException {
       java.net.URL endpoint;
        try {
            endpoint = new java.net.URL(CountryInfo_address);
        }
        catch (java.net.MalformedURLException e) {
            throw new javax.xml.rpc.ServiceException(e);
        }
        return getCountryInfo(endpoint);
    }

    public org.webservice.countryInfo.CountryInfoWS getCountryInfo(java.net.URL portAddress) throws javax.xml.rpc.ServiceException {
        try {
            org.webservice.countryInfo.CountryInfoSoapBindingStub _stub = new org.webservice.countryInfo.CountryInfoSoapBindingStub(portAddress, this);
            _stub.setPortName(getCountryInfoWSDDServiceName());
            return _stub;
        }
        catch (org.apache.axis.AxisFault e) {
            return null;
        }
    }

    public void setCountryInfoEndpointAddress(java.lang.String address) {
        CountryInfo_address = address;
    }

    /**
     * For the given interface, get the stub implementation.
     * If this service has no port for the given interface,
     * then ServiceException is thrown.
     */
    public java.rmi.Remote getPort(Class serviceEndpointInterface) throws javax.xml.rpc.ServiceException {
        try {
            if (org.webservice.countryInfo.CountryInfoWS.class.isAssignableFrom(serviceEndpointInterface)) {
                org.webservice.countryInfo.CountryInfoSoapBindingStub _stub = new org.webservice.countryInfo.CountryInfoSoapBindingStub(new java.net.URL(CountryInfo_address), this);
                _stub.setPortName(getCountryInfoWSDDServiceName());
                return _stub;
            }
        }
        catch (java.lang.Throwable t) {
            throw new javax.xml.rpc.ServiceException(t);
        }
        throw new javax.xml.rpc.ServiceException("There is no stub implementation for the interface:  " + (serviceEndpointInterface == null ? "null" : serviceEndpointInterface.getName()));
    }

    /**
     * For the given interface, get the stub implementation.
     * If this service has no port for the given interface,
     * then ServiceException is thrown.
     */
    public java.rmi.Remote getPort(javax.xml.namespace.QName portName, Class serviceEndpointInterface) throws javax.xml.rpc.ServiceException {
        if (portName == null) {
            return getPort(serviceEndpointInterface);
        }
        java.lang.String inputPortName = portName.getLocalPart();
        if ("CountryInfo".equals(inputPortName)) {
            return getCountryInfo();
        }
        else  {
            java.rmi.Remote _stub = getPort(serviceEndpointInterface);
            ((org.apache.axis.client.Stub) _stub).setPortName(portName);
            return _stub;
        }
    }

    public javax.xml.namespace.QName getServiceName() {
        return new javax.xml.namespace.QName("http://countryInfo.webservice.org", "CountryInfoService");
    }

    private java.util.HashSet ports = null;

    public java.util.Iterator getPorts() {
        if (ports == null) {
            ports = new java.util.HashSet();
            ports.add(new javax.xml.namespace.QName("http://countryInfo.webservice.org", "CountryInfo"));
        }
        return ports.iterator();
    }

    /**
    * Set the endpoint address for the specified port name.
    */
    public void setEndpointAddress(java.lang.String portName, java.lang.String address) throws javax.xml.rpc.ServiceException {
        
if ("CountryInfo".equals(portName)) {
            setCountryInfoEndpointAddress(address);
        }
        else 
{ // Unknown Port Name
            throw new javax.xml.rpc.ServiceException(" Cannot set Endpoint Address for Unknown Port" + portName);
        }
    }

    /**
    * Set the endpoint address for the specified port name.
    */
    public void setEndpointAddress(javax.xml.namespace.QName portName, java.lang.String address) throws javax.xml.rpc.ServiceException {
        setEndpointAddress(portName.getLocalPart(), address);
    }

}

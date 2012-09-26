/**
 * CountryInformationServiceLocator.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.ezzylearning.www.services.CountryInformationService_asmx;

public class CountryInformationServiceLocator extends org.apache.axis.client.Service implements com.ezzylearning.www.services.CountryInformationService_asmx.CountryInformationService {

    public CountryInformationServiceLocator() {
    }


    public CountryInformationServiceLocator(org.apache.axis.EngineConfiguration config) {
        super(config);
    }

    public CountryInformationServiceLocator(java.lang.String wsdlLoc, javax.xml.namespace.QName sName) throws javax.xml.rpc.ServiceException {
        super(wsdlLoc, sName);
    }

    // Use to get a proxy class for CountryInformationServiceSoap
    private java.lang.String CountryInformationServiceSoap_address = "http://www.ezzylearning.com/services/CountryInformationService.asmx";

    public java.lang.String getCountryInformationServiceSoapAddress() {
        return CountryInformationServiceSoap_address;
    }

    // The WSDD service name defaults to the port name.
    private java.lang.String CountryInformationServiceSoapWSDDServiceName = "CountryInformationServiceSoap";

    public java.lang.String getCountryInformationServiceSoapWSDDServiceName() {
        return CountryInformationServiceSoapWSDDServiceName;
    }

    public void setCountryInformationServiceSoapWSDDServiceName(java.lang.String name) {
        CountryInformationServiceSoapWSDDServiceName = name;
    }

    public com.ezzylearning.www.services.CountryInformationService_asmx.CountryInformationServiceSoap getCountryInformationServiceSoap() throws javax.xml.rpc.ServiceException {
       java.net.URL endpoint;
        try {
            endpoint = new java.net.URL(CountryInformationServiceSoap_address);
        }
        catch (java.net.MalformedURLException e) {
            throw new javax.xml.rpc.ServiceException(e);
        }
        return getCountryInformationServiceSoap(endpoint);
    }

    public com.ezzylearning.www.services.CountryInformationService_asmx.CountryInformationServiceSoap getCountryInformationServiceSoap(java.net.URL portAddress) throws javax.xml.rpc.ServiceException {
        try {
            com.ezzylearning.www.services.CountryInformationService_asmx.CountryInformationServiceSoapStub _stub = new com.ezzylearning.www.services.CountryInformationService_asmx.CountryInformationServiceSoapStub(portAddress, this);
            _stub.setPortName(getCountryInformationServiceSoapWSDDServiceName());
            return _stub;
        }
        catch (org.apache.axis.AxisFault e) {
            return null;
        }
    }

    public void setCountryInformationServiceSoapEndpointAddress(java.lang.String address) {
        CountryInformationServiceSoap_address = address;
    }

    /**
     * For the given interface, get the stub implementation.
     * If this service has no port for the given interface,
     * then ServiceException is thrown.
     */
    public java.rmi.Remote getPort(Class serviceEndpointInterface) throws javax.xml.rpc.ServiceException {
        try {
            if (com.ezzylearning.www.services.CountryInformationService_asmx.CountryInformationServiceSoap.class.isAssignableFrom(serviceEndpointInterface)) {
                com.ezzylearning.www.services.CountryInformationService_asmx.CountryInformationServiceSoapStub _stub = new com.ezzylearning.www.services.CountryInformationService_asmx.CountryInformationServiceSoapStub(new java.net.URL(CountryInformationServiceSoap_address), this);
                _stub.setPortName(getCountryInformationServiceSoapWSDDServiceName());
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
        if ("CountryInformationServiceSoap".equals(inputPortName)) {
            return getCountryInformationServiceSoap();
        }
        else  {
            java.rmi.Remote _stub = getPort(serviceEndpointInterface);
            ((org.apache.axis.client.Stub) _stub).setPortName(portName);
            return _stub;
        }
    }

    public javax.xml.namespace.QName getServiceName() {
        return new javax.xml.namespace.QName("http://www.ezzylearning.com/services/CountryInformationService.asmx", "CountryInformationService");
    }

    private java.util.HashSet ports = null;

    public java.util.Iterator getPorts() {
        if (ports == null) {
            ports = new java.util.HashSet();
            ports.add(new javax.xml.namespace.QName("http://www.ezzylearning.com/services/CountryInformationService.asmx", "CountryInformationServiceSoap"));
        }
        return ports.iterator();
    }

    /**
    * Set the endpoint address for the specified port name.
    */
    public void setEndpointAddress(java.lang.String portName, java.lang.String address) throws javax.xml.rpc.ServiceException {
        
if ("CountryInformationServiceSoap".equals(portName)) {
            setCountryInformationServiceSoapEndpointAddress(address);
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

/**
 * PopulationWSLocator.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.abundanttech.www.WebServices.Population;

public class PopulationWSLocator extends org.apache.axis.client.Service implements com.abundanttech.www.WebServices.Population.PopulationWS {

    public PopulationWSLocator() {
    }


    public PopulationWSLocator(org.apache.axis.EngineConfiguration config) {
        super(config);
    }

    public PopulationWSLocator(java.lang.String wsdlLoc, javax.xml.namespace.QName sName) throws javax.xml.rpc.ServiceException {
        super(wsdlLoc, sName);
    }

    // Use to get a proxy class for PopulationWSSoap
    private java.lang.String PopulationWSSoap_address = "http://www.abundanttech.com/webservices/population/population.asmx";

    public java.lang.String getPopulationWSSoapAddress() {
        return PopulationWSSoap_address;
    }

    // The WSDD service name defaults to the port name.
    private java.lang.String PopulationWSSoapWSDDServiceName = "PopulationWSSoap";

    public java.lang.String getPopulationWSSoapWSDDServiceName() {
        return PopulationWSSoapWSDDServiceName;
    }

    public void setPopulationWSSoapWSDDServiceName(java.lang.String name) {
        PopulationWSSoapWSDDServiceName = name;
    }

    public com.abundanttech.www.WebServices.Population.PopulationWSSoap getPopulationWSSoap() throws javax.xml.rpc.ServiceException {
       java.net.URL endpoint;
        try {
            endpoint = new java.net.URL(PopulationWSSoap_address);
        }
        catch (java.net.MalformedURLException e) {
            throw new javax.xml.rpc.ServiceException(e);
        }
        return getPopulationWSSoap(endpoint);
    }

    public com.abundanttech.www.WebServices.Population.PopulationWSSoap getPopulationWSSoap(java.net.URL portAddress) throws javax.xml.rpc.ServiceException {
        try {
            com.abundanttech.www.WebServices.Population.PopulationWSSoapStub _stub = new com.abundanttech.www.WebServices.Population.PopulationWSSoapStub(portAddress, this);
            _stub.setPortName(getPopulationWSSoapWSDDServiceName());
            return _stub;
        }
        catch (org.apache.axis.AxisFault e) {
            return null;
        }
    }

    public void setPopulationWSSoapEndpointAddress(java.lang.String address) {
        PopulationWSSoap_address = address;
    }

    /**
     * For the given interface, get the stub implementation.
     * If this service has no port for the given interface,
     * then ServiceException is thrown.
     */
    public java.rmi.Remote getPort(Class serviceEndpointInterface) throws javax.xml.rpc.ServiceException {
        try {
            if (com.abundanttech.www.WebServices.Population.PopulationWSSoap.class.isAssignableFrom(serviceEndpointInterface)) {
                com.abundanttech.www.WebServices.Population.PopulationWSSoapStub _stub = new com.abundanttech.www.WebServices.Population.PopulationWSSoapStub(new java.net.URL(PopulationWSSoap_address), this);
                _stub.setPortName(getPopulationWSSoapWSDDServiceName());
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
        if ("PopulationWSSoap".equals(inputPortName)) {
            return getPopulationWSSoap();
        }
        else  {
            java.rmi.Remote _stub = getPort(serviceEndpointInterface);
            ((org.apache.axis.client.Stub) _stub).setPortName(portName);
            return _stub;
        }
    }

    public javax.xml.namespace.QName getServiceName() {
        return new javax.xml.namespace.QName("http://www.abundanttech.com/WebServices/Population", "PopulationWS");
    }

    private java.util.HashSet ports = null;

    public java.util.Iterator getPorts() {
        if (ports == null) {
            ports = new java.util.HashSet();
            ports.add(new javax.xml.namespace.QName("http://www.abundanttech.com/WebServices/Population", "PopulationWSSoap"));
        }
        return ports.iterator();
    }

    /**
    * Set the endpoint address for the specified port name.
    */
    public void setEndpointAddress(java.lang.String portName, java.lang.String address) throws javax.xml.rpc.ServiceException {
        
if ("PopulationWSSoap".equals(portName)) {
            setPopulationWSSoapEndpointAddress(address);
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

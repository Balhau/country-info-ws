/**
 * CountryInfoSoapBindingSkeleton.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package org.webservice.countryInfo;

public class CountryInfoSoapBindingSkeleton implements org.webservice.countryInfo.CountryInfoWS, org.apache.axis.wsdl.Skeleton {
    private org.webservice.countryInfo.CountryInfoWS impl;
    private static java.util.Map _myOperations = new java.util.Hashtable();
    private static java.util.Collection _myOperationsList = new java.util.ArrayList();

    /**
    * Returns List of OperationDesc objects with this name
    */
    public static java.util.List getOperationDescByName(java.lang.String methodName) {
        return (java.util.List)_myOperations.get(methodName);
    }

    /**
    * Returns Collection of OperationDescs
    */
    public static java.util.Collection getOperationDescs() {
        return _myOperationsList;
    }

    static {
        org.apache.axis.description.OperationDesc _oper;
        org.apache.axis.description.FaultDesc _fault;
        org.apache.axis.description.ParameterDesc [] _params;
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("http://countryInfo.webservice.org", "countryCode"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"), java.lang.String.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("getCountryInfo", _params, new javax.xml.namespace.QName("http://countryInfo.webservice.org", "getCountryInfoReturn"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://countryInfo.webservice.org", "CountryInfoResultWS"));
        _oper.setElementQName(new javax.xml.namespace.QName("http://countryInfo.webservice.org", "getCountryInfo"));
        _oper.setSoapAction("");
        _myOperationsList.add(_oper);
        if (_myOperations.get("getCountryInfo") == null) {
            _myOperations.put("getCountryInfo", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("getCountryInfo")).add(_oper);
    }

    public CountryInfoSoapBindingSkeleton() {
        this.impl = new org.webservice.countryInfo.CountryInfoSoapBindingImpl();
    }

    public CountryInfoSoapBindingSkeleton(org.webservice.countryInfo.CountryInfoWS impl) {
        this.impl = impl;
    }
    public org.webservice.countryInfo.CountryInfoResultWS getCountryInfo(java.lang.String countryCode) throws java.rmi.RemoteException
    {
        org.webservice.countryInfo.CountryInfoResultWS ret = impl.getCountryInfo(countryCode);
        return ret;
    }

}

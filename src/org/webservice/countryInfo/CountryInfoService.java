/**
 * CountryInfoService.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package org.webservice.countryInfo;

public interface CountryInfoService extends javax.xml.rpc.Service {
    public java.lang.String getCountryInfoAddress();

    public org.webservice.countryInfo.CountryInfoWS getCountryInfo() throws javax.xml.rpc.ServiceException;

    public org.webservice.countryInfo.CountryInfoWS getCountryInfo(java.net.URL portAddress) throws javax.xml.rpc.ServiceException;
}

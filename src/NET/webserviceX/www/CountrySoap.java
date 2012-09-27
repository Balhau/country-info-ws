/**
 * CountrySoap.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package NET.webserviceX.www;

public interface CountrySoap extends java.rmi.Remote {

    /**
     * Get country name by country code
     */
    public java.lang.String getCountryByCountryCode(java.lang.String countryCode) throws java.rmi.RemoteException;

    /**
     * Get International Dialing Code by country name
     */
    public java.lang.String getISD(java.lang.String countryName) throws java.rmi.RemoteException;

    /**
     * Get all countries with ISO code
     */
    public java.lang.String getCountries() throws java.rmi.RemoteException;

    /**
     * Get currency by currency name
     */
    public java.lang.String getCurrencyCodeByCurrencyName(java.lang.String currencyName) throws java.rmi.RemoteException;

    /**
     * Get countries by country name
     */
    public java.lang.String getISOCountryCodeByCountyName(java.lang.String countryName) throws java.rmi.RemoteException;

    /**
     * Get all currencycode for each country
     */
    public java.lang.String getCurrencyCode() throws java.rmi.RemoteException;

    /**
     * Get country by currency code
     */
    public java.lang.String getCountryByCurrencyCode(java.lang.String currencyCode) throws java.rmi.RemoteException;

    /**
     * Get all currency,currency code for all countries
     */
    public java.lang.String getCurrencies() throws java.rmi.RemoteException;

    /**
     * Get currency by country name
     */
    public java.lang.String getCurrencyByCountry(java.lang.String countryName) throws java.rmi.RemoteException;

    /**
     * Get greenwich mean time(GMT) by country name
     */
    public java.lang.String getGMTbyCountry(java.lang.String countryName) throws java.rmi.RemoteException;
}

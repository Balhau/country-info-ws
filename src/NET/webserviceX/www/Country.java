/**
 * Country.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package NET.webserviceX.www;

public interface Country extends javax.xml.rpc.Service {
    public java.lang.String getcountrySoapAddress();

    public NET.webserviceX.www.CountrySoap getcountrySoap() throws javax.xml.rpc.ServiceException;

    public NET.webserviceX.www.CountrySoap getcountrySoap(java.net.URL portAddress) throws javax.xml.rpc.ServiceException;
}

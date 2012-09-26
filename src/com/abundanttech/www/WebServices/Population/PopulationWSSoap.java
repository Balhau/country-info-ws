/**
 * PopulationWSSoap.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.abundanttech.www.WebServices.Population;

public interface PopulationWSSoap extends java.rmi.Remote {
    public java.lang.Object getWorldPopulation() throws java.rmi.RemoteException;
    public com.abundanttech.www.WebServices.Population.Population getPopulation(java.lang.String strCountry) throws java.rmi.RemoteException;
    public java.lang.String[] getCountries() throws java.rmi.RemoteException;
}

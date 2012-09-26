/**
 * GetTwoLetterISOCodeByCountryResponse.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.ezzylearning.www.services.CountryInformationService_asmx;

public class GetTwoLetterISOCodeByCountryResponse  implements java.io.Serializable {
    private java.lang.String getTwoLetterISOCodeByCountryResult;

    public GetTwoLetterISOCodeByCountryResponse() {
    }

    public GetTwoLetterISOCodeByCountryResponse(
           java.lang.String getTwoLetterISOCodeByCountryResult) {
           this.getTwoLetterISOCodeByCountryResult = getTwoLetterISOCodeByCountryResult;
    }


    /**
     * Gets the getTwoLetterISOCodeByCountryResult value for this GetTwoLetterISOCodeByCountryResponse.
     * 
     * @return getTwoLetterISOCodeByCountryResult
     */
    public java.lang.String getGetTwoLetterISOCodeByCountryResult() {
        return getTwoLetterISOCodeByCountryResult;
    }


    /**
     * Sets the getTwoLetterISOCodeByCountryResult value for this GetTwoLetterISOCodeByCountryResponse.
     * 
     * @param getTwoLetterISOCodeByCountryResult
     */
    public void setGetTwoLetterISOCodeByCountryResult(java.lang.String getTwoLetterISOCodeByCountryResult) {
        this.getTwoLetterISOCodeByCountryResult = getTwoLetterISOCodeByCountryResult;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof GetTwoLetterISOCodeByCountryResponse)) return false;
        GetTwoLetterISOCodeByCountryResponse other = (GetTwoLetterISOCodeByCountryResponse) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.getTwoLetterISOCodeByCountryResult==null && other.getGetTwoLetterISOCodeByCountryResult()==null) || 
             (this.getTwoLetterISOCodeByCountryResult!=null &&
              this.getTwoLetterISOCodeByCountryResult.equals(other.getGetTwoLetterISOCodeByCountryResult())));
        __equalsCalc = null;
        return _equals;
    }

    private boolean __hashCodeCalc = false;
    public synchronized int hashCode() {
        if (__hashCodeCalc) {
            return 0;
        }
        __hashCodeCalc = true;
        int _hashCode = 1;
        if (getGetTwoLetterISOCodeByCountryResult() != null) {
            _hashCode += getGetTwoLetterISOCodeByCountryResult().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(GetTwoLetterISOCodeByCountryResponse.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ezzylearning.com/services/CountryInformationService.asmx", ">GetTwoLetterISOCodeByCountryResponse"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("getTwoLetterISOCodeByCountryResult");
        elemField.setXmlName(new javax.xml.namespace.QName("http://www.ezzylearning.com/services/CountryInformationService.asmx", "GetTwoLetterISOCodeByCountryResult"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
    }

    /**
     * Return type metadata object
     */
    public static org.apache.axis.description.TypeDesc getTypeDesc() {
        return typeDesc;
    }

    /**
     * Get Custom Serializer
     */
    public static org.apache.axis.encoding.Serializer getSerializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanSerializer(
            _javaType, _xmlType, typeDesc);
    }

    /**
     * Get Custom Deserializer
     */
    public static org.apache.axis.encoding.Deserializer getDeserializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanDeserializer(
            _javaType, _xmlType, typeDesc);
    }

}

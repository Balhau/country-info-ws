/**
 * GetThreeLetterISOCodeByCountryResponse.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.ezzylearning.www.services.CountryInformationService_asmx;

public class GetThreeLetterISOCodeByCountryResponse  implements java.io.Serializable {
    private java.lang.String getThreeLetterISOCodeByCountryResult;

    public GetThreeLetterISOCodeByCountryResponse() {
    }

    public GetThreeLetterISOCodeByCountryResponse(
           java.lang.String getThreeLetterISOCodeByCountryResult) {
           this.getThreeLetterISOCodeByCountryResult = getThreeLetterISOCodeByCountryResult;
    }


    /**
     * Gets the getThreeLetterISOCodeByCountryResult value for this GetThreeLetterISOCodeByCountryResponse.
     * 
     * @return getThreeLetterISOCodeByCountryResult
     */
    public java.lang.String getGetThreeLetterISOCodeByCountryResult() {
        return getThreeLetterISOCodeByCountryResult;
    }


    /**
     * Sets the getThreeLetterISOCodeByCountryResult value for this GetThreeLetterISOCodeByCountryResponse.
     * 
     * @param getThreeLetterISOCodeByCountryResult
     */
    public void setGetThreeLetterISOCodeByCountryResult(java.lang.String getThreeLetterISOCodeByCountryResult) {
        this.getThreeLetterISOCodeByCountryResult = getThreeLetterISOCodeByCountryResult;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof GetThreeLetterISOCodeByCountryResponse)) return false;
        GetThreeLetterISOCodeByCountryResponse other = (GetThreeLetterISOCodeByCountryResponse) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.getThreeLetterISOCodeByCountryResult==null && other.getGetThreeLetterISOCodeByCountryResult()==null) || 
             (this.getThreeLetterISOCodeByCountryResult!=null &&
              this.getThreeLetterISOCodeByCountryResult.equals(other.getGetThreeLetterISOCodeByCountryResult())));
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
        if (getGetThreeLetterISOCodeByCountryResult() != null) {
            _hashCode += getGetThreeLetterISOCodeByCountryResult().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(GetThreeLetterISOCodeByCountryResponse.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ezzylearning.com/services/CountryInformationService.asmx", ">GetThreeLetterISOCodeByCountryResponse"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("getThreeLetterISOCodeByCountryResult");
        elemField.setXmlName(new javax.xml.namespace.QName("http://www.ezzylearning.com/services/CountryInformationService.asmx", "GetThreeLetterISOCodeByCountryResult"));
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

/**
 * GetCountryByTwoLetterISOCodeResponse.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.ezzylearning.www.services.CountryInformationService_asmx;

public class GetCountryByTwoLetterISOCodeResponse  implements java.io.Serializable {
    private java.lang.String getCountryByTwoLetterISOCodeResult;

    public GetCountryByTwoLetterISOCodeResponse() {
    }

    public GetCountryByTwoLetterISOCodeResponse(
           java.lang.String getCountryByTwoLetterISOCodeResult) {
           this.getCountryByTwoLetterISOCodeResult = getCountryByTwoLetterISOCodeResult;
    }


    /**
     * Gets the getCountryByTwoLetterISOCodeResult value for this GetCountryByTwoLetterISOCodeResponse.
     * 
     * @return getCountryByTwoLetterISOCodeResult
     */
    public java.lang.String getGetCountryByTwoLetterISOCodeResult() {
        return getCountryByTwoLetterISOCodeResult;
    }


    /**
     * Sets the getCountryByTwoLetterISOCodeResult value for this GetCountryByTwoLetterISOCodeResponse.
     * 
     * @param getCountryByTwoLetterISOCodeResult
     */
    public void setGetCountryByTwoLetterISOCodeResult(java.lang.String getCountryByTwoLetterISOCodeResult) {
        this.getCountryByTwoLetterISOCodeResult = getCountryByTwoLetterISOCodeResult;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof GetCountryByTwoLetterISOCodeResponse)) return false;
        GetCountryByTwoLetterISOCodeResponse other = (GetCountryByTwoLetterISOCodeResponse) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.getCountryByTwoLetterISOCodeResult==null && other.getGetCountryByTwoLetterISOCodeResult()==null) || 
             (this.getCountryByTwoLetterISOCodeResult!=null &&
              this.getCountryByTwoLetterISOCodeResult.equals(other.getGetCountryByTwoLetterISOCodeResult())));
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
        if (getGetCountryByTwoLetterISOCodeResult() != null) {
            _hashCode += getGetCountryByTwoLetterISOCodeResult().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(GetCountryByTwoLetterISOCodeResponse.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ezzylearning.com/services/CountryInformationService.asmx", ">GetCountryByTwoLetterISOCodeResponse"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("getCountryByTwoLetterISOCodeResult");
        elemField.setXmlName(new javax.xml.namespace.QName("http://www.ezzylearning.com/services/CountryInformationService.asmx", "GetCountryByTwoLetterISOCodeResult"));
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

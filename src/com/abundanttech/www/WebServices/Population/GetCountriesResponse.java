/**
 * GetCountriesResponse.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.abundanttech.www.WebServices.Population;

public class GetCountriesResponse  implements java.io.Serializable {
    private java.lang.String[] getCountriesResult;

    public GetCountriesResponse() {
    }

    public GetCountriesResponse(
           java.lang.String[] getCountriesResult) {
           this.getCountriesResult = getCountriesResult;
    }


    /**
     * Gets the getCountriesResult value for this GetCountriesResponse.
     * 
     * @return getCountriesResult
     */
    public java.lang.String[] getGetCountriesResult() {
        return getCountriesResult;
    }


    /**
     * Sets the getCountriesResult value for this GetCountriesResponse.
     * 
     * @param getCountriesResult
     */
    public void setGetCountriesResult(java.lang.String[] getCountriesResult) {
        this.getCountriesResult = getCountriesResult;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof GetCountriesResponse)) return false;
        GetCountriesResponse other = (GetCountriesResponse) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.getCountriesResult==null && other.getGetCountriesResult()==null) || 
             (this.getCountriesResult!=null &&
              java.util.Arrays.equals(this.getCountriesResult, other.getGetCountriesResult())));
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
        if (getGetCountriesResult() != null) {
            for (int i=0;
                 i<java.lang.reflect.Array.getLength(getGetCountriesResult());
                 i++) {
                java.lang.Object obj = java.lang.reflect.Array.get(getGetCountriesResult(), i);
                if (obj != null &&
                    !obj.getClass().isArray()) {
                    _hashCode += obj.hashCode();
                }
            }
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(GetCountriesResponse.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.abundanttech.com/WebServices/Population", ">getCountriesResponse"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("getCountriesResult");
        elemField.setXmlName(new javax.xml.namespace.QName("http://www.abundanttech.com/WebServices/Population", "getCountriesResult"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        elemField.setItemQName(new javax.xml.namespace.QName("http://www.abundanttech.com/WebServices/Population", "string"));
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

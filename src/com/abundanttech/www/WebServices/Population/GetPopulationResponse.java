/**
 * GetPopulationResponse.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.abundanttech.www.WebServices.Population;

public class GetPopulationResponse  implements java.io.Serializable {
    private com.abundanttech.www.WebServices.Population.Population getPopulationResult;

    public GetPopulationResponse() {
    }

    public GetPopulationResponse(
           com.abundanttech.www.WebServices.Population.Population getPopulationResult) {
           this.getPopulationResult = getPopulationResult;
    }


    /**
     * Gets the getPopulationResult value for this GetPopulationResponse.
     * 
     * @return getPopulationResult
     */
    public com.abundanttech.www.WebServices.Population.Population getGetPopulationResult() {
        return getPopulationResult;
    }


    /**
     * Sets the getPopulationResult value for this GetPopulationResponse.
     * 
     * @param getPopulationResult
     */
    public void setGetPopulationResult(com.abundanttech.www.WebServices.Population.Population getPopulationResult) {
        this.getPopulationResult = getPopulationResult;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof GetPopulationResponse)) return false;
        GetPopulationResponse other = (GetPopulationResponse) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.getPopulationResult==null && other.getGetPopulationResult()==null) || 
             (this.getPopulationResult!=null &&
              this.getPopulationResult.equals(other.getGetPopulationResult())));
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
        if (getGetPopulationResult() != null) {
            _hashCode += getGetPopulationResult().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(GetPopulationResponse.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.abundanttech.com/WebServices/Population", ">getPopulationResponse"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("getPopulationResult");
        elemField.setXmlName(new javax.xml.namespace.QName("http://www.abundanttech.com/WebServices/Population", "getPopulationResult"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.abundanttech.com/WebServices/Population", "Population"));
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

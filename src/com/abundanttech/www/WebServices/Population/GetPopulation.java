/**
 * GetPopulation.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.abundanttech.www.WebServices.Population;

public class GetPopulation  implements java.io.Serializable {
    private java.lang.String strCountry;

    public GetPopulation() {
    }

    public GetPopulation(
           java.lang.String strCountry) {
           this.strCountry = strCountry;
    }


    /**
     * Gets the strCountry value for this GetPopulation.
     * 
     * @return strCountry
     */
    public java.lang.String getStrCountry() {
        return strCountry;
    }


    /**
     * Sets the strCountry value for this GetPopulation.
     * 
     * @param strCountry
     */
    public void setStrCountry(java.lang.String strCountry) {
        this.strCountry = strCountry;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof GetPopulation)) return false;
        GetPopulation other = (GetPopulation) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.strCountry==null && other.getStrCountry()==null) || 
             (this.strCountry!=null &&
              this.strCountry.equals(other.getStrCountry())));
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
        if (getStrCountry() != null) {
            _hashCode += getStrCountry().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(GetPopulation.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.abundanttech.com/WebServices/Population", ">getPopulation"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("strCountry");
        elemField.setXmlName(new javax.xml.namespace.QName("http://www.abundanttech.com/WebServices/Population", "strCountry"));
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

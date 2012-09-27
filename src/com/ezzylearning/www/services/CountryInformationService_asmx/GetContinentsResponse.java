/**
 * GetContinentsResponse.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.ezzylearning.www.services.CountryInformationService_asmx;

public class GetContinentsResponse  implements java.io.Serializable {
    private com.ezzylearning.www.services.CountryInformationService_asmx.GetContinentsResponseGetContinentsResult getContinentsResult;

    public GetContinentsResponse() {
    }

    public GetContinentsResponse(
           com.ezzylearning.www.services.CountryInformationService_asmx.GetContinentsResponseGetContinentsResult getContinentsResult) {
           this.getContinentsResult = getContinentsResult;
    }


    /**
     * Gets the getContinentsResult value for this GetContinentsResponse.
     * 
     * @return getContinentsResult
     */
    public com.ezzylearning.www.services.CountryInformationService_asmx.GetContinentsResponseGetContinentsResult getGetContinentsResult() {
        return getContinentsResult;
    }


    /**
     * Sets the getContinentsResult value for this GetContinentsResponse.
     * 
     * @param getContinentsResult
     */
    public void setGetContinentsResult(com.ezzylearning.www.services.CountryInformationService_asmx.GetContinentsResponseGetContinentsResult getContinentsResult) {
        this.getContinentsResult = getContinentsResult;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof GetContinentsResponse)) return false;
        GetContinentsResponse other = (GetContinentsResponse) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.getContinentsResult==null && other.getGetContinentsResult()==null) || 
             (this.getContinentsResult!=null &&
              this.getContinentsResult.equals(other.getGetContinentsResult())));
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
        if (getGetContinentsResult() != null) {
            _hashCode += getGetContinentsResult().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(GetContinentsResponse.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ezzylearning.com/services/CountryInformationService.asmx", ">GetContinentsResponse"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("getContinentsResult");
        elemField.setXmlName(new javax.xml.namespace.QName("http://www.ezzylearning.com/services/CountryInformationService.asmx", "GetContinentsResult"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ezzylearning.com/services/CountryInformationService.asmx", ">>GetContinentsResponse>GetContinentsResult"));
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

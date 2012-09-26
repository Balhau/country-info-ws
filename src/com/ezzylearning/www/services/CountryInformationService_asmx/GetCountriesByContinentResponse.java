/**
 * GetCountriesByContinentResponse.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.ezzylearning.www.services.CountryInformationService_asmx;

public class GetCountriesByContinentResponse  implements java.io.Serializable {
    private com.ezzylearning.www.services.CountryInformationService_asmx.GetCountriesByContinentResponseGetCountriesByContinentResult getCountriesByContinentResult;

    public GetCountriesByContinentResponse() {
    }

    public GetCountriesByContinentResponse(
           com.ezzylearning.www.services.CountryInformationService_asmx.GetCountriesByContinentResponseGetCountriesByContinentResult getCountriesByContinentResult) {
           this.getCountriesByContinentResult = getCountriesByContinentResult;
    }


    /**
     * Gets the getCountriesByContinentResult value for this GetCountriesByContinentResponse.
     * 
     * @return getCountriesByContinentResult
     */
    public com.ezzylearning.www.services.CountryInformationService_asmx.GetCountriesByContinentResponseGetCountriesByContinentResult getGetCountriesByContinentResult() {
        return getCountriesByContinentResult;
    }


    /**
     * Sets the getCountriesByContinentResult value for this GetCountriesByContinentResponse.
     * 
     * @param getCountriesByContinentResult
     */
    public void setGetCountriesByContinentResult(com.ezzylearning.www.services.CountryInformationService_asmx.GetCountriesByContinentResponseGetCountriesByContinentResult getCountriesByContinentResult) {
        this.getCountriesByContinentResult = getCountriesByContinentResult;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof GetCountriesByContinentResponse)) return false;
        GetCountriesByContinentResponse other = (GetCountriesByContinentResponse) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.getCountriesByContinentResult==null && other.getGetCountriesByContinentResult()==null) || 
             (this.getCountriesByContinentResult!=null &&
              this.getCountriesByContinentResult.equals(other.getGetCountriesByContinentResult())));
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
        if (getGetCountriesByContinentResult() != null) {
            _hashCode += getGetCountriesByContinentResult().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(GetCountriesByContinentResponse.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://www.ezzylearning.com/services/CountryInformationService.asmx", ">GetCountriesByContinentResponse"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("getCountriesByContinentResult");
        elemField.setXmlName(new javax.xml.namespace.QName("http://www.ezzylearning.com/services/CountryInformationService.asmx", "GetCountriesByContinentResult"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.ezzylearning.com/services/CountryInformationService.asmx", ">>GetCountriesByContinentResponse>GetCountriesByContinentResult"));
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

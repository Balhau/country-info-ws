/**
 * CountryInfoResultWS.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package org.webservice.countryInfo;

public class CountryInfoResultWS  implements java.io.Serializable {
    private java.lang.String lingua;

    private java.lang.String populacao;

    private java.lang.String moeda;

    private java.lang.String capital;

    private java.lang.String ICAO;

    private java.lang.String geoInfo;

    private java.lang.String capWeather;

    public CountryInfoResultWS() {
    }

    public CountryInfoResultWS(
           java.lang.String lingua,
           java.lang.String populacao,
           java.lang.String moeda,
           java.lang.String capital,
           java.lang.String ICAO,
           java.lang.String geoInfo,
           java.lang.String capWeather) {
           this.lingua = lingua;
           this.populacao = populacao;
           this.moeda = moeda;
           this.capital = capital;
           this.ICAO = ICAO;
           this.geoInfo = geoInfo;
           this.capWeather = capWeather;
    }


    /**
     * Gets the lingua value for this CountryInfoResultWS.
     * 
     * @return lingua
     */
    public java.lang.String getLingua() {
        return lingua;
    }


    /**
     * Sets the lingua value for this CountryInfoResultWS.
     * 
     * @param lingua
     */
    public void setLingua(java.lang.String lingua) {
        this.lingua = lingua;
    }


    /**
     * Gets the populacao value for this CountryInfoResultWS.
     * 
     * @return populacao
     */
    public java.lang.String getPopulacao() {
        return populacao;
    }


    /**
     * Sets the populacao value for this CountryInfoResultWS.
     * 
     * @param populacao
     */
    public void setPopulacao(java.lang.String populacao) {
        this.populacao = populacao;
    }


    /**
     * Gets the moeda value for this CountryInfoResultWS.
     * 
     * @return moeda
     */
    public java.lang.String getMoeda() {
        return moeda;
    }


    /**
     * Sets the moeda value for this CountryInfoResultWS.
     * 
     * @param moeda
     */
    public void setMoeda(java.lang.String moeda) {
        this.moeda = moeda;
    }


    /**
     * Gets the capital value for this CountryInfoResultWS.
     * 
     * @return capital
     */
    public java.lang.String getCapital() {
        return capital;
    }


    /**
     * Sets the capital value for this CountryInfoResultWS.
     * 
     * @param capital
     */
    public void setCapital(java.lang.String capital) {
        this.capital = capital;
    }


    /**
     * Gets the ICAO value for this CountryInfoResultWS.
     * 
     * @return ICAO
     */
    public java.lang.String getICAO() {
        return ICAO;
    }


    /**
     * Sets the ICAO value for this CountryInfoResultWS.
     * 
     * @param ICAO
     */
    public void setICAO(java.lang.String ICAO) {
        this.ICAO = ICAO;
    }


    /**
     * Gets the geoInfo value for this CountryInfoResultWS.
     * 
     * @return geoInfo
     */
    public java.lang.String getGeoInfo() {
        return geoInfo;
    }


    /**
     * Sets the geoInfo value for this CountryInfoResultWS.
     * 
     * @param geoInfo
     */
    public void setGeoInfo(java.lang.String geoInfo) {
        this.geoInfo = geoInfo;
    }


    /**
     * Gets the capWeather value for this CountryInfoResultWS.
     * 
     * @return capWeather
     */
    public java.lang.String getCapWeather() {
        return capWeather;
    }


    /**
     * Sets the capWeather value for this CountryInfoResultWS.
     * 
     * @param capWeather
     */
    public void setCapWeather(java.lang.String capWeather) {
        this.capWeather = capWeather;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof CountryInfoResultWS)) return false;
        CountryInfoResultWS other = (CountryInfoResultWS) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            ((this.lingua==null && other.getLingua()==null) || 
             (this.lingua!=null &&
              this.lingua.equals(other.getLingua()))) &&
            ((this.populacao==null && other.getPopulacao()==null) || 
             (this.populacao!=null &&
              this.populacao.equals(other.getPopulacao()))) &&
            ((this.moeda==null && other.getMoeda()==null) || 
             (this.moeda!=null &&
              this.moeda.equals(other.getMoeda()))) &&
            ((this.capital==null && other.getCapital()==null) || 
             (this.capital!=null &&
              this.capital.equals(other.getCapital()))) &&
            ((this.ICAO==null && other.getICAO()==null) || 
             (this.ICAO!=null &&
              this.ICAO.equals(other.getICAO()))) &&
            ((this.geoInfo==null && other.getGeoInfo()==null) || 
             (this.geoInfo!=null &&
              this.geoInfo.equals(other.getGeoInfo()))) &&
            ((this.capWeather==null && other.getCapWeather()==null) || 
             (this.capWeather!=null &&
              this.capWeather.equals(other.getCapWeather())));
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
        if (getLingua() != null) {
            _hashCode += getLingua().hashCode();
        }
        if (getPopulacao() != null) {
            _hashCode += getPopulacao().hashCode();
        }
        if (getMoeda() != null) {
            _hashCode += getMoeda().hashCode();
        }
        if (getCapital() != null) {
            _hashCode += getCapital().hashCode();
        }
        if (getICAO() != null) {
            _hashCode += getICAO().hashCode();
        }
        if (getGeoInfo() != null) {
            _hashCode += getGeoInfo().hashCode();
        }
        if (getCapWeather() != null) {
            _hashCode += getCapWeather().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(CountryInfoResultWS.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://countryInfo.webservice.org", "CountryInfoResultWS"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("lingua");
        elemField.setXmlName(new javax.xml.namespace.QName("http://countryInfo.webservice.org", "Lingua"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("populacao");
        elemField.setXmlName(new javax.xml.namespace.QName("http://countryInfo.webservice.org", "Populacao"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("moeda");
        elemField.setXmlName(new javax.xml.namespace.QName("http://countryInfo.webservice.org", "Moeda"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("capital");
        elemField.setXmlName(new javax.xml.namespace.QName("http://countryInfo.webservice.org", "Capital"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("ICAO");
        elemField.setXmlName(new javax.xml.namespace.QName("http://countryInfo.webservice.org", "ICAO"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("geoInfo");
        elemField.setXmlName(new javax.xml.namespace.QName("http://countryInfo.webservice.org", "GeoInfo"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(true);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("capWeather");
        elemField.setXmlName(new javax.xml.namespace.QName("http://countryInfo.webservice.org", "CapWeather"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setNillable(true);
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

/**
 * CountryInfo.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package org.webservice.countryInfo;

import java.rmi.RemoteException;

import org.apache.axis.message.MessageElement;
import org.w3c.dom.NodeList;

import com.ezzylearning.www.services.CountryInformationService_asmx.CountryInformationServiceSoapProxy;
import com.ezzylearning.www.services.CountryInformationService_asmx.GetCountriesResponseGetCountriesResult;

public class CountryInfo{
	private CountryInfoKV[] getCountriesMap(){
		CountryInfoKV[] cNInfo=null;
		GetCountriesResponseGetCountriesResult res=null;
		CountryInformationServiceSoapProxy proxy1=new CountryInformationServiceSoapProxy();
		proxy1.setEndpoint(proxy1.getEndpoint());
		try {
			res=proxy1.getCountries();
		} catch (RemoteException e) {
			return null;
		}
		MessageElement maux;
		NodeList nla1,nla2;
		int laux;
		MessageElement[] msg=null;
		msg=res.get_any();
		if(msg!=null){
			for(int i=0;i<msg.length;i++){
				NodeList lst=msg[i].getElementsByTagName("Countries");
				laux=lst.getLength();
				cNInfo=new CountryInfoKV[laux];
				for(int j=0;j<laux;j++){
					maux=(MessageElement)lst.item(j);
					nla1=maux.getElementsByTagName("Country");
					nla2=maux.getElementsByTagName("ISO2");
					cNInfo[j]=new CountryInfoKV(
							((MessageElement)nla1.item(0)).getValue(),
							((MessageElement)nla2.item(0)).getValue()
							);
				}
			}
		}
		return cNInfo;
	}
	public CountryInfoResult getCountryInfo(String countryCode){
		CountryInfoKV[] cmap=getCountriesMap();
		CountryInfoResult res=new CountryInfoResult("Portugal", 
				"1000", "Escudo", "Lisbon", "ASDAS","ADAF","limpo");
		return res;
		
	}
}

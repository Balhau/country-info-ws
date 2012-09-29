/*************************************************
 * BaLHau LIB
 * Esta biblioteca foi desenvolvida por VÃ­tor Hugo Fernandes, a.k.a BaLHau
 * @author Balhau
 */
/**
 * MÃ©todo que devolve os elementos que contÃ©m uma determinada className
 * 
 * @param cls
 *            {@link String} nome da class
 * @return {@link Array} contendo os elementos de uma determinada class
 */
var getByClassName = function(cls) {
	var el = document.getElementsByTagName('*');
	var out = [];
	for ( var i = 0; i < el.length; i++) {
		if (el[i].className == cls) {
			out[out.length] = el[i];
		}
	}
	return out;
};

/**
 * FunÃ§Ã£o que nos devolve o elemento a partir do seu identificador, ou entÃ£o os
 * elementos que verificam um determinado tipo de className, ou ainda o conjunto
 * de elementos pertencentes a um tipo de tag
 * 
 * @param {String}
 *            idel ID do elemento
 */
var $ = function(idel) {
	if (typeof (idel) == 'undefined' || idel == null)
		return null;
	if (typeof (idel) == "string") {
		if (idel.charAt(0) == '#') {
			if (document.getElementsByClassName) {
				return HElement.get(document.getElementsByClassName(idel
						.substr(1, idel.length)));
			} else {
				return HElement
						.get(getByClassName(idel.substr(1, idel.length)));
			}
		}
		if (idel.charAt(0) == '$') {
			return HElement.get(document.getElementsByTagName(idel.substr(1,
					idel.length)));
		}
	}
	return HElement.get(idel);
};

var $$ = function(tag, n) {
	if (BLauLib.isUndefined(n)) {
		if (tag.charAt(0) == '#') {
			return document.createAttribute(tag);
		} else {
			return HElement.get(document.createElement(tag));
		}
	}
	var out = [];
	for ( var i = 0; i < n; i++) {
		out[i] = $$(tag);
	}
	return out;
};

/**
 * Objecto que contÃ©m os scripts da aplicaÃ§Ã£o
 * 
 * @classDescription Objecto que representa a principal objecto da biblioteca.
 *                   Dentro deste objecto encontram-se um conjunto de outros
 *                   objectos com propÃ³sitos mais especÃ­ficos. Este consiste,
 *                   portanto, num contentor de bibliotecas. Poucos mÃ©todos sÃ£o
 *                   directamente implementados neste objecto e em versÃµes
 *                   futuras poderÃ£o mesmo ser reagrupados noutras estruturas
 * @author Balhau
 * @constructor Construtor da API
 */
var BLauLib = function() {
	this.versao = 0.1;
	this.author = "VÃ­Â­tor Fernandes, a.k.a Balhau";
};

/**
 * MÃƒÂ©todo que devolve uma string com as horas a partir do total de segundos
 * 
 * @param {Number}
 *            totseg
 */
BLauLib.segToHour = function(totseg) {
	var vmin = Math.floor((totseg / 60) % 60);
	var vhor = Math.floor((totseg / 3600) % 24);
	var min = vmin >= 10 ? vmin : "0" + vmin;
	var hora = vhor >= 10 ? vhor : "0" + vhor;
	var seg = (totseg % 60) >= 10 ? totseg % 60 : "0" + totseg % 60;
	var rt = "";
	rt = (hora > 0) ? hora + ":" : "";
	rt += min + ":" + seg;
	return rt;
};

/**
 * MÃ©todo que devolve os valores representados numa string URL no formato GET
 * 
 * @return {Object} Variaveis e seus respectivos valores
 */
String.prototype.getVarsFromUrl = function() {
	var aux = this.split("?");
	if (aux.length == 0)
		return {};
	var vars = aux[1].split("&");
	var out = {};
	var par = "";
	for ( var i = 0; i < vars.length; i++) {
		par = vars[i].split("=");
		out[par[0]] = par[1];
	}
	return out;
};

/**
 * Objecto com um conjunto de funÃ§Ãµes utilitÃ¡rias para manipulaÃ§Ã£o de cookies
 * 
 * @classDescription Objecto com um conjunto de funÃ§Ãµes utilitÃ¡rias para
 *                   manipulaÃ§Ã£o de cookies.
 */
BLauLib.COOKIES = function() {
	var vars = document.cookie.split(";");
	var aux;
	var assArray = {};
	for ( var i = 0; i < vars.length; i++) {
		aux = vars[i].split('=');
		assArray[aux[0].trim()] = aux[1];
	}
	return assArray;
};

/**
 * MÃ©todo que adiciona um novo cookie no browser
 * 
 * @param {String}
 *            name Nome do cookie
 * @param {String}
 *            value Valor do cookie
 * @param {String}
 *            time Validade do cookie
 * @param {String}
 *            path DomÃ­nio do cookie
 */
BLauLib.COOKIES.add = function(name, value, time, path) {
	var pth = null;
	if (!path)
		pth = "/";
	else
		pth = path;
	var dt = new Date();
	dt.setSeconds(dt.getSeconds() + time);
	document.cookie = name + '=' + value + '; expires=' + dt.toUTCString()
			+ '; path=' + pth;
};

/**
 * MÃ©todo que nos devolve o tempo restante de sessÃ£o, redireccinando no final
 * 
 * @param {String}
 *            divid Identificador do div que contem o tempo
 * @param {Number}
 *            totseg NÃºmero representando o total de segundos da hora.
 * @param {String}
 *            Link com o endereÃ§o da pÃ¡gina no final da sessÃƒÂ£o
 */
BLauLib.getTime = function(divid, totseg, redirect) {
	if (totseg > 0) {
		var dvel = $(divid);
		dvel.innerHTML = BLauLib.segToHour(totseg);
		totseg = totseg - 1;
		setTimeout("BLauLib.getTime('" + divid + "'," + totseg + ",'"
				+ redirect + "')", 1000);
	} else {
		window.location = redirect;
	}
};

/**
 * Libraria para invocaÃ§Ã£o de pÃ¡ginas atravÃ©s do protocolo XMLHttpRequest
 * 
 * @classDescription Classe que implementa um conjunto de funcionalidades para
 *                   comunicaÃ§Ã£o assÃ­ncrona com servidores
 * 
 */
BLauLib.Ajax = function() {
	this._init_();
};

/**
 * Objecto que representa o estado da ligaÃ§Ã£o
 * 
 * @classDescription Este objecto representa o estado da ligaÃ§Ã£o assÃ­ncrona
 *                   efectuada
 */
BLauLib.Ajax.Status = {};
/**
 * LigaÃ§Ã£o efectuada com sucesso
 */
BLauLib.Ajax.Status.OK = 200;
/**
 * PÃ¡gina nÃ£o encontrada
 */
BLauLib.Ajax.Status.NotFound = 404;

BLauLib.Meses = [ "Janeiro", "Fevereiro", "MarÃ§o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro",
		"Dezembro" ];

BLauLib.Ajax.prototype._init_ = function() {
	this.xmlHttp = false;
	this.text = "";
	this.html = "";
	this.onLoaded = null;
	this.onLoading = null;
	this.onError = null;
	this.postvars = [];
	this.onCompleted = null;
	try {
		// tentativa para criar o objecto ajax para versÃƒÂµes nÃƒÂ£o IE
		this.xmlHttp = new XMLHttpRequest();
	} catch (e) {
		// para IE6 ou mais recente
		var XmlHttpVersions = [ 'MSXML2.XMLHTTP.6.0', 'MSXML2.XMLHTTP.5.0',
				'MSXML2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP',
				'Microsoft.XMLHTTP' ];
		// tenta todas as versÃƒÆ’Ã‚Âµes
		for ( var i = 0; i < XmlHttpVersions.length && !xmlHttp; i++) {
			try {
				// tenta o objecto para as vÃƒÂ¡rias versÃƒÂµes do IE
				this.xmlHttp = new ActiveXObject(XmlHttpVersions[i]);
			}
			// ignora os erros
			catch (ex) {
			}
		}
	}
};
/**
 * Adiciona um novo par (variÃ¡vel,valor) para envio no pedido ajax
 * 
 * @param {String}
 *            name Nome da variÃ¡vel
 * @param {String}
 *            value Valor da variÃ¡vel
 * @return {void}
 */
BLauLib.Ajax.prototype.addVar = function(name, value) {
	this.postvars[this.postvars.length] = [ name, value ];
};

/**
 * MÃ©todo que devolve o objecto resposta do servidor enviado em formato JSON
 * 
 * @return {Object} Objecto
 */
BLauLib.Ajax.prototype.getJSON = function() {
	return BLauLib.FromJSON(this.text);
};
/**
 * Limpa as variÃ¡veis POST presentes no objecto
 * 
 * @return {void}
 */
BLauLib.Ajax.prototype.clearVars = function() {
	this.postvars = [];
};

BLauLib.mousePos = function(ev) {
	if (ev.pageX || ev.pageY) {
		return {
			x : ev.pageX,
			y : ev.pageY
		};
	}
	return {
		x : ev.clientX + document.body.scrollLeft - document.body.clientLeft,
		y : ev.clientY + document.body.scrollTop - document.body.clientTop
	};
};


/**
 * Este objecto leva como parametro um objecto com a seguinte estrutura
 * {
 * 	"id": "id_objecto",
 *  "label"   : "label button",
 *  "onload"  : "callback para evento onload",
 *  "onsubmit" : "callback para evento onsubmit"
 *  "action" : "action submit form"
 *  "vars" : [[var1,val1],[var2,val2]]
 * }
 * @classDescription Este objecto tem por objectivo efectuar o upload de ficheiros com recurso a iframes
 */
BLauLib.Ajax.Upload=function(objprop){
	this.id=BLauLib.isUndefined(objprop["id"])?Math.floor(Math.random()*10000000):objprop["id"];
	this.label=BLauLib.isUndefined(objprop["label"])?"Upload":objprop["label"];
	
	this.div=$$('div');
	this.div.id="container_"+this.id;
	
	this.frame=$$('iframe');
	this.frame.id="frame_"+this.id;
	this.frame.name=this.frame.id;
	this.frame.src="";
	this.frame.style.display="none";
	
	this.form=$$('form');
	this.form.id="form_"+this.id;
	var objthis=this;
	this.form.onsubmit=function(){
		if(!BLauLib.isUndefined(objprop["onsubmit"]))
			objprop["onsubmit"](objthis);
		objthis.frame.onload=function(){
			if(!BLauLib.isUndefined(objprop["onload"]))
					objprop["onload"](objthis);
		};
	};
	this.form.target=this.frame.name;
	this.form.action=BLauLib.isUndefined(objprop["action"])?"#":objprop["action"];
	this.form.method="POST";
	this.form.enctype.multipart;
	
	this.submit_button=$$('input');
	this.submit_button.id="submit_"+this.id;
	this.submit_button.value=this.label;
	this.submit_button.type="submit";
	
	this.file=$$('input');
	this.file.id="file_"+this.id;
	this.file.type="file";
	
	if(!BLauLib.isUndefined(objprop["vars"])){
		var o=objprop["vars"];
		var aux;
		for(var i=0;i<o.length;i++){
			aux=o[i];
			this.addVar(aux[0],aux[1]);
		}
	}
	
	this.form.add(this.file);
	this.form.add(this.submit_button);
	
	this.div.add(this.form);
	this.div.add(this.frame);
};

BLauLib.Ajax.Upload.prototype.addVar=function(name,value){
	var hidden=$$('input');
	hidden.type="hidden";
	hidden.id=name;
	hidden.name=name;
	hidden.value=value;
	this.form.add(hidden);
};

/**
 * Devolve o elemento div que contem o mecanismo de upload
 * @return HElement
 */
BLauLib.Ajax.Upload.prototype.getElement=function(){
	return this.div;
};

/**
 * MÃ©todo que codifica o array de variÃ¡veis post para uma string com a sua
 * representaÃ§Ã£o
 * 
 * @return{String} String com a representaÃ§Ã£o das variÃ¡veis
 */
BLauLib.Ajax.prototype.encPostVars = function() {
	var str = "";
	for ( var i = 0; i < this.postvars.length; i++) {
		if (i !== 0) {
			str += "&";
		}
		str += this.postvars[i][0] + "=" + this.postvars[i][1];
	}
	return str;

};

/**
 * MÃ©todo que efectua uma chamada AssÃ­ncrona pelo protocolo POST
 * 
 * @param {String}
 *            pag EndereÃ§o da pÃ¡gina
 */
BLauLib.Ajax.prototype.callPost = function(pag) {
	this.open("POST", pag);
	this.send(this.encPostVars());
};

/**
 * Objecto para manipulaÃ§Ã£o de chamadas assÃ­ncronas com recurso a iframes
 */
BLauLib.AIM = {};

/**
 * MÃ©todo que cria um frame para chamada assÃ­Â­ncrona
 * 
 * @param {Object}
 *            Object com as funÃ§Ãµes callback
 */
BLauLib.AIM.criaFrame = function(callbackobject) {
	var id = Math.floor(Math.random() * 10000);
	id = "frm_" + id;
	var dcont = $$('div');
	dcont.innerHTML = "<iframe style='display:none' src='about:blank' id='"
			+ id + "' name='" + id + "' onload=BLauLib.AIM.onLoaded('" + id
			+ "')></iframe>";
	document.body.appendChild(dcont);
	var frm = $(id);
	if (callbackobject) {
		if (typeof (callbackobject.onComplete) == "function")
			frm.onComplete = callbackobject.onComplete;
	}
	return id;
};

BLauLib.AIM.form = function(formE, name) {
	formE.setAttribute('target', name);
};

BLauLib.AIM.submit = function(formE, callbackobject) {
	BLauLib.AIM.form(formE, BLauLib.AIM.criaFrame(callbackobject));
	if (callbackobject) {
		if (typeof (callbackobject.onStart) == "function")
			return callbackobject.onStart();
		return true;
	} else {
		return true;
	}
};

BLauLib.AIM.onLoaded = function(id) {
	var el = $(id);
	if (el.contentDocument) {
		var doc = el.contentDocument;
	} else if (el.contentWindow) {
		var doc = el.contentWindow.document;
	} else {
		var doc = window.frames[id].document;
	}

	if (doc.location.href == "about:blank") {
		return;
	}
	if (typeof (el.onComplete) == 'function') {
		el.onComplete(doc.body.innerHTML);
	}
};
/**
 * MÃƒÂ©todo que efectua uma ligaÃ§Ã£o assÃ­ncrona ao servidor
 * 
 * @param {String}
 *            metodo Tipo de ligaÃ§Ã£o POST/GET
 * @param {String}
 *            urlAja EndereÃ§o da ligaÃ§Ã£o
 */
BLauLib.Ajax.prototype.open = function(metodo, urlAja) {
	// Copia das estruturas devido Ãƒ Ã‚ nÃƒÂ£o visibilidade do operador "this"
	// dentro do mÃƒÂ©todo "onreadystatechange"

	var onLoading = this.onLoading;
	var onLoaded = this.onLoaded;
	var onError = this.onError;
	var ajax = this.xmlHttp;
	var estado = this.xmlHttp.readyState;
	var pthis = this;
	var ready = function() {
		if (ajax.readyState == 4) {
			if (typeof (onLoaded) == "function") {
				pthis.text = ajax.responseText;
				pthis.html = ajax.responseXML;
				onLoaded();
			}
		}
		if (ajax.readyState == 2) {
			if (typeof (onLoading) == "function") {
				onLoading();
			}
		}
		if (ajax.readyState == 3) {
			if (typeof (onError) == "function") {
				onError();
			}
		}
	};
	this.xmlHttp.onreadystatechange = ready;
	this.xmlHttp.open(metodo, urlAja);
	if (metodo == "POST" || metodo == "post") {
		this.xmlHttp.setRequestHeader("Content-Type",
				"application/x-www-form-urlencoded;charset=UTF-8");
	}
};
/**
 * MÃ©todo que envia uma mensagem para o servidor
 * 
 * @param {String}
 *            conteÃºdo para o servidor
 */
BLauLib.Ajax.prototype.send = function(conteudo) {
	this.xmlHttp.send(conteudo);
};

/**
 * Devolve o dia da semana para um determinado mes de um determinado ano
 * 
 * @param mes
 *            Mes
 * @param ano
 *            Ano
 * @return Ãndice do dia da semana
 */
Date.getFirstDayMonth = function(mes, ano) {
	var d = new Date(ano, mes);
	d.setDate(1);
	return d.getDay();
};

Date.prototype.isHoje = function() {
	var hoje = new Date();
	return (this.getDate() == hoje.getDate()
			&& this.getMonth() == hoje.getMonth() && this.getFullYear() == hoje
			.getFullYear());
};

Date.DB_FORMAT=1;
/**
 * Devolve a data em vÃ¡rios formatos
 * @param f formato da hora 
 * @return String
 */
Date.prototype.format=function(f){
	var mes=this.getMonth()+1;
	mes=(mes<10)?("0"+mes):mes;
	var dia=(this.getDate()<10)?("0"+this.getDate()):this.getDate();
	var hora=(this.getHours()<10)?("0"+this.getHours()):this.getHours();
	var minuto=(this.getMinutes()<10)?("0"+this.getMinutes()):this.getMinutes();
	var seg=(this.getSeconds()<10)?("0"+this.getSeconds()):this.getSeconds();
	switch (f) {
	case Date.DBFORMAT:
		return this.getFullYear()+"-"+mes+"-"+dia+" "+hora+":"+minuto+":"+seg;
		break;
	default:
		return this.getFullYear()+"-"+mes+"-"+dia+" "+hora+":"+minuto+":"+seg;
		break;
	}
};

/**
 * MÃ©todo que devolve o nÃºmero de dias de um mÃªs
 * 
 * @param mes
 *            Mes que se pretende saber o numero de dias
 * @param ano
 *            Ano que se pretende saber o numero de dias
 * @return Dias 28-31 dias do mes
 */
Date.getNumDaysMonth = function(mes, ano) {
	return 32 - new Date(ano, mes, 32).getDate();
};

/**
 * Classe para embeber ficheiros swf no html
 * @classDescription Esta classe inclui ficheiros swf no html automatizando o processo
 * de construÃ§Ã£o do elemento <b>object</b>
 */
BLauLib.SWF=function(idobj,name,swfpath,dimx,dimy,bgcolor){
	this.name=name;
	this.id=idobj;
	this.quality="high";
	this.bgcolor=bgcolor;
	this.swf=swfpath;
	this.width=dimx;
	this.height=dimy;
	this.flashvars={};
	this.params=[];
	this.addParam("movie",this.swf);
	this.addParam("quality",this.quality);
	this.addParam("bgcolor",this.bgcolor);
};

BLauLib.SWF.prototype.addVar=function(_var,_value){
	this.flashvars[_var]=_value;
};

BLauLib.SWF.prototype.getFlashVars=function(){
	var keys=this.flashvars.getPropertiesKeys();
	var str="";
	for(var i=0;i<keys.length;i++){
		if(i!=0)
			str+="&";
		str+=keys[i]+"="+this.flashvars[keys[i]];
	}
	return str;
};


/**
 * Devolve o elemento de html <b>object</b> que aponta para o swf.
 * @return HElement com o html do objecto
 */
BLauLib.SWF.prototype.buildElement=function(){
	this.elobj=$$('object');
	this.elobj.setAttribute('classid','clsid:D27CDB6E-AE6D-11cf-96B8-444553540000');
	this.elobj.setAttribute('codebase','http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0');
	this.elobj.setAttribute('width',this.width);
	this.elobj.setAttribute('height',this.height);
	this.elobj.setAttribute('id',this.id);
	this.elobj.setAttribute('name',this.name);
	for(var i=0;i<this.params.length;i++){
		this.elobj.add(this.params[i]);
	}
	this.embed=$$('embed');
	this.embed.set({
		"src":this.swf,
		"quality":this.quality,
		"bgcolor":this.bgcolor,
		"width":this.width,
		"height":this.height,
		"name":this.name,
		"id":this.id+"_embed",
		"align":"",
		"flashvars":this.getFlashVars(),
		"type":"application/x-shockwave-flash",
		"pluginspace":"http://www.macromedia.com/go/getflashplayer"
	});
	this.elobj.add(this.embed);
	return this.elobj;
};

BLauLib.SWF.prototype.getEmbed=function(){
	return this.embed;
};

BLauLib.SWF.prototype.getElement=function(){
	return this.elobj;
};

BLauLib.SWF.prototype.addParam=function(name,value){
	var par=$$('param');
	par.setAttribute('name',name);
	par.setAttribute('value',value);
	this.params[this.params.length]=par;
};

/**
 * Modulo com mecanismos de interface
 * @classDescription
 */
BLauLib.UI = {};

/**
 * Este objecto cria um elemento div que vai escrevendo sequencialmente o texto fornecido como
 * parÃ¢metro.
 * @classDescription
 */
BLauLib.UI.WordWriter=function(id,text,time,endEvent){
	this.dv=$$("div");
	this.dv.id=id;
	this.str=text;
	this.strarr=this.str.split("\n");
	this.time=time;
	this.strpos=0;
	var obj=this;
	
	this.charEvent=function(){
		if(obj.arrpos<obj.strarr.length){
			if(obj.strpos<obj.strarr[obj.arrpos].length){
				obj.dv.innerHTML+=obj.strarr[obj.arrpos].charAt(obj.strpos);
				obj.strpos++;
			}else{
				obj.strpos=0;
				obj.dv.innerHTML+="<br/>";
				obj.arrpos++;
			}
		}
		else{
			obj.strpos=0;
			obj.arrpos=0;
			if(BLauLib.isFunction(endEvent))
				endEvent(obj);
			clearInterval(obj.timer);
		}
	}
	
	this.clickEvent=function(){
		clearInterval(obj.timer);
		obj.strpos=0;
		obj.arrpos=0;
		obj.dv.innerHTML=obj.str.split("\n").join("<br/>");
		if(BLauLib.isFunction(endEvent))
			endEvent(obj);
	}
	this.dv.onclick=this.clickEvent;
};

BLauLib.UI.WordWriter.prototype.getElement=function(){
	return this.dv;
};

BLauLib.UI.WordWriter.prototype.start=function(){
	this.dv.innerHTML="";
	this.strpos=0;
	this.arrpos=0;
	clearInterval(this.timer);
	this.timer=setInterval(this.charEvent,this.time);
};

BLauLib.UI.WordWriter.prototype.stop=function(){
	clearInterval(this.timer);
};

BLauLib.UI.PhotoSlider=function(id){
	this.srcphoto=[];
	this.id=id;
};

/**
 * Objecto que representa um objecto calendÃ¡rio
 * @classDescription Clase que implementa a funcionalidade de calendÃ¡rio
 */
BLauLib.UI.DatePicker = function(id) {
	this.id = id;
	this.contentor = $$('div');
	this.contentor.id = "dataContentor_" + id;
	this.dinput = $$('input');
	this.dinput.className = "right";
	this.dinput.readOnly = "readonly";
	this.dinput.size = 10;
	this.date = new Date();
	this.dbox = $$('div');
	this.dinput.id = "data_" + this.id;
	this.dinput.style.cursor = "pointer";
	this.dbox.id = "dataBox_" + this.id;
	this.dbox.add(this._createTableDate("tblDate_" + id));
	var obj = this;
	this.dinput.onclick = function() {
		obj.contentor.add(obj.dbox);
		obj.dbox.setPos(obj.dinput.getPos());
		obj.dbox.aparece(1, null);
	};
	this.dbox.setAlpha(0);
	this.dbox.setPos(obj.dinput.getPos());
	this.dbox.className = "widget";
	this.contentor.add(this.dinput);
};

BLauLib.UI.DatePicker.prototype.setDate=function(data){
	this.date=new Date(data);
	this.dinput.value=data;
}

BLauLib.UI.DatePicker.prototype.getUI = function() {
	return this.contentor;
};

BLauLib.UI.DatePicker.prototype.getValue = function() {
	return this.dinput.value;
};

/**
 * MÃ©todo que efectua a criaÃ§Ã£o da tabela contentora das datas
 * 
 * @param {obj}
 *            Elemento associado ao calendÃ¡rio
 */
BLauLib.UI.DatePicker.prototype._createTableDate = function(id) {
	var DS = 7;
	var id = id;
	var tbody = $$('table'); // CriaÃ§Ã£o do elemento table que servirÃ¡ de
	// contentor do calendÃ¡rio
	this.linhas = $$('tr', DS + 3); // Numero de linhas da tabela
	this.cells = $$('td', 56); // Numero de cÃ©lulas 49, inclui dias do mes,
	// semana, cabeÃ§alho e rodapÃ©
	tbody.className = "dpTB";
	tbody.id = "dpTB_" + id;
	// ConfiguraÃ§Ã£o do cabeÃ§alho
	this.batleft = $$('input');
	this.batright = $$('input');
	this.bmtleft = $$('input');
	this.bmtright = $$('input');

	this.anol = $$('div');
	this.anol.id = "dpHeaderA_" + id;
	this.mesl = $$('div');
	this.mesl.id = "dpHeaderM_" + id;

	var obj = this;
	var evLAno = function() {
		obj.date.setFullYear(obj.date.getFullYear() - 1);
		obj._updateData();
	};

	var evRAno = function() {
		obj.date.setFullYear(obj.date.getFullYear() + 1);
		obj._updateData();
	};

	var evLMes = function() {
		obj.date.setMonth(obj.date.getMonth() - 1);
		obj._updateData();
	};

	var evRMes = function() {
		obj.date.setMonth(obj.date.getMonth() + 1);
		obj._updateData();
	};

	this.batleft.type = "button";
	this.batleft.onclick = evLAno;
	this.batright.type = "button";
	this.batright.onclick = evRAno;
	this.batright.value = ">";
	this.batleft.value = "<";

	this.bmtleft.type = "button";
	this.bmtleft.onclick = evLMes;
	this.bmtright.type = "button";
	this.bmtright.onclick = evRMes;
	this.bmtright.value = ">";
	this.bmtleft.value = "<";

	this.cells[1].colSpan = DS - 2;
	this.cells[1].className = "dpTTD";

	this.cells[4].colSpan = DS - 2;
	this.cells[4].className = "dpTTD";

	// especificaÃ§Ã£o do cabeÃ§alho de ano
	this.cells[0].add(this.batleft);
	this.cells[1].add(this.anol);
	this.cells[2].add(this.batright);
	// especificaÃ§Ã£o do cabeÃ§alho de mes
	this.cells[3].add(this.bmtleft);
	this.cells[4].add(this.mesl);
	this.cells[5].add(this.bmtright);

	this.linhas[0].add(this.cells[0], this.cells[1], this.cells[2]);
	this.linhas[1].add(this.cells[3], this.cells[4], this.cells[5]);
	// ConfiguraÃ§Ã£o dos dias da semana

	var dsem = this.cells.select(6, 5 + DS);
	var dsm = [ "Do", "Se", "Te", "Qu", "Qu", "Se", "Sa" ];

	for ( var i = 0; i < DS; i++) {
		dsem[i].id = "dia_" + i;
		dsem[i].innerHTML = dsm[i];
	}
	this.linhas[2].add(dsem);
	var dias = this.cells.select(DS + 6, DS + 6 + 42);
	// ConfiguraÃ§Ã£o dos dias do mes
	for ( var i = 3; i < DS +2; i++) {
		this.linhas[i].add(dias.select(7 * (i - 3), 7 * (i - 2) - 1));
		
	}

	// ConfiguraÃ§Ã£o dos botÃµes de fundo

	var cancelEvent = function() {
		obj.dbox.desvanece(1, function() {
			obj.dbox.pai().remove(obj.dbox);
		});
	};
	this.cancel = $$('input');
	this.cancel.id = "btncancel_" + id;
	this.cancel.type = "button";
	this.cancel.value = "Cancel";
	this.cancel.onclick = cancelEvent;
	this.cells[54].colSpan = 7;
	this.cells[54].add(this.cancel);
	this.linhas[DS + 2].add(this.cells[54]);
	tbody.add(this.linhas);
	this._updateData();
	return tbody;
};
/**
 * Widget que representa uma interface para escolha de horas
 */
BLauLib.UI.HourPicker = function(id) {
	this.id = id;
	this.dinput = $$('input');
	this.hsel = $$('select');
	this.minsel = $$('select');
	this.segsel = $$('select');
	this.contentor = $$('div');
	this.divhidder = $$('div');
	this.btnhour = $$('input');
	var sps = $$('span', 2);
	sps[0].innerHTML = ":";
	sps[1].innerHTML = ":";
	this.btnhour.type = "button";
	this.btnhour.value = "Ok";
	this.dinput.className = "right";
	this.dinput.readOnly = "readonly";
	this.dinput.size = 10;
	this.dinput.style.cursor = "pointer";
	this.divhidder.className = "widget";
	var obj = this;

	var btev = function() {
		var hora = obj.hsel.getSelectedOption().value;
		var minuto = obj.minsel.getSelectedOption().value;
		var segundo = obj.segsel.getSelectedOption().value;
		obj.dinput.value = hora + ":" + minuto + ":" + segundo;
		obj.divhidder.desvanece(1, function() {
			var pai = obj.divhidder.pai();
			pai.remove(obj.divhidder);
		});
	};

	var inpev = function() {
		obj.divhidder.setPos(obj.divhidder.getPos());
		obj.contentor.add(obj.divhidder);
		var dt = new Date();
		var hora = dt.getHours();
		var min = dt.getMinutes();
		var seg = dt.getSeconds();
		obj.hsel.selectedIndex = hora;
		obj.minsel.selectedIndex = min;
		obj.segsel.selectedIndex = seg;
		obj.divhidder.aparece(1, null);
	};

	this.dinput.onclick = inpev;
	this.btnhour.onclick = btev;
	this.contentor.add(this.dinput);
	this.build();
	this.divhidder.add(this.hsel, sps[0], this.minsel, sps[1], this.segsel,
			this.btnhour);
	this.divhidder.setPos(this.divhidder.getPos());
	this.divhidder.setAlpha(0);
};

BLauLib.UI.HourPicker.prototype.build = function() {
	var auxa;
	var auxb;
	var v;
	var dt = new Date();
	var hora = dt.getHours();
	var min = dt.getMinutes();
	var seg = dt.getSeconds();
	for ( var i = 23; i >= 0; i--) { // ConstrÃ³i a interface das horas;
		auxa = $$('option');
		v = i < 10 ? "0" + i : i;
		auxa.value = v;
		this.hsel.addOption(v, v, "opth_" + this.id);
	}
	for ( var i = 59; i >= 0; i--) { // ConstrÃ³i a interface dos minutos e
										// segundos
		auxa = $$('option');
		auxb = $$('option');
		v = i < 10 ? "0" + i : i;
		auxa.value = v;
		auxb.value = v;
		this.minsel.addOption(v, v, "optm_" + this.id);
		this.segsel.addOption(v, v, "opts_" + this.id);
	}
};

BLauLib.UI.HourPicker.prototype.getUI = function() {
	return this.contentor;
};

BLauLib.UI.DatePicker.prototype.getValue = function() {
	return this.dinput.value;
};

BLauLib.UI.DatePicker.prototype.onChange=function(){};

/**
 * MÃ©todo privado ao objecto que pretende actualizar as cÃ©lulas dos dias em funÃ§Ã£o
 * do mes e do ano actual
 */
BLauLib.UI.DatePicker.prototype._updateData = function() {
	var DS = 7;
	var obj = this;
	var dias = this.cells.select(DS + 6, DS + 6 + 40);
	var cmp = dias.length;
	var fd = Date.getFirstDayMonth(this.date.getMonth(), this.date
			.getFullYear());
	var nd = Date
			.getNumDaysMonth(this.date.getMonth(), this.date.getFullYear());
	var ndma = Date.getNumDaysMonth(this.date.getMonth() - 1, this.date
			.getFullYear());
	var hoje = new Date();
	this.anol.innerHTML = this.date.getFullYear();
	this.mesl.innerHTML = BLauLib.Meses[this.date.getMonth()];
	for ( var i = 0; i < cmp; i++) {
		if (i < (nd + fd) && i >= fd) {
			dias[i].innerHTML = i - fd + 1;
			dias[i].dia = i - fd + 1;
			dias[i].mes = this.date.getMonth() + 1;
			dias[i].ano = this.date.getFullYear();
			dias[i].name="lol"+i;
			if (i-fd+2 == hoje.getDate() + 1 && dias[i].mes == hoje.getMonth()+1)
				dias[i].className = "dpcellhoje";
			else
				dias[i].className = "dpcell";
		} else if (i < fd) {
			dias[i].innerHTML = ndma - (fd - i - 1);
			dias[i].dia = ndma - (fd - i - 1);
			dias[i].mes = this.date.getMonth();
			dias[i].ano = this.date.getFullYear();
			dias[i].className = "dpcellma";
		} else if (i >= nd) {
			dias[i].innerHTML = (i - nd - fd) + 1;
			dias[i].dia=(i-nd-fd)+1;
			if(this.date.getMonth()+2>12){//Dias do ano seguinte
				dias[i].ano = this.date.getFullYear()+1;
				dias[i].mes = 1;
			}
			else{
				dias[i].ano = this.date.getFullYear();
				dias[i].mes = this.date.getMonth() + 2;
			}
			dias[i].className = "dpcellms";
		}
		dias[i].onclick = function(ev) {
			var ev = ev ? ev : window.event;
			t = ev.target;
			console.log(t.dia);
			console.log(t.mes);
			obj.dinput.value = t.ano + "-" + t.mes + "-" + t.dia;
			obj.dbox.desvanece(1, function() {
				obj.dbox.pai().remove(obj.dbox);
			});
			obj.onChange(obj);
		};
	}
};


/**
 * Este elemento UI constrÃ³i um conjunto de colunas com elementos do tipo floating div. A principal utilidade deste 
 * componente prende-se com o desenvolvimento de paineis compostos por pequenas mensagens.
 * 
 * @param {Number} NÃºmero de colunas a criar
 * @param {array} Array de objectos com os dados na sua representaÃ§Ã£o JSON. O array tem a seguinte estrutura
 * [<object>,<object>]. Onde por sua vez <object> adopta a seguinte forma
 * <object> -> {"title" : "titulo", "body": "data body", "footer" : "data footer"}, as tres strings representadas no objecto
 * representam o cÃ³digo em HTML do conteÃºdo a passar para as tráº½s secÃ§Ãµes.
 * @param {String} String que contem o valor do id para o contentor e respectivos sub elementos de HTML
 * @param {Object} Objecto na notaÃ§Ã£o json representado da seguinte forma
 * {"width":"val","colspace":"val","vspace":"val"}
 * onde width representa a largura do contentor, colspace o espaÃ§o entre colunas e vspace o espaÃ§o vertical entre entradas
 */
BLauLib.UI.Columns=function(ncolumns,data,id,objformat){
	this.units=BLauLib.Utils.dimToArrUnits(objformat.width)[1];
	this.rwidth=BLauLib.Utils.dimToArrUnits(objformat.width)[0];
	this.colspace=BLauLib.Utils.dimToArrUnits(objformat.colspace)[0];
	this.vspace=BLauLib.Utils.dimToArrUnits(objformat.vspace)[0];
	this.id=id;
	this.ncolumns=ncolumns;
	this.data=data;
	this.objformat=objformat;
};

/**
 * MÃ©todo privado que Ã© utilizado para efectuar a construÃ§Ã£o dos objectos
 */
BLauLib.UI.Columns.prototype.Build=function(){
	this.root=$$('div');
	this.root.id=this.id;
	this.root.set("class","entryboard");
	this.root.set("style","width: "+this.objformat.width+";");
	var colwidth=this.rwidth/this.ncolumns - this.colspace*this.ncolumns;
	this.columns=[];
	//ConstruÃ§Ã£o dos div das colunas
	for(var i=0;i<this.ncolumns;i++){
		this.columns[i]=$$('div');
		this.columns[i].id="column_"+this.id+"_"+i;
		this.columns[i].set("class","entrycolumn");
		this.columns[i].set("style","margin-left: "+this.objformat.colspace+"; width: "+colwidth+this.units+";");
		this.root.add(this.columns[i]);
	}
	//AdiÃ§Ã£o das entradas Ã s respectivas colunas
	for(var i=0;i<this.data.length;i++){
		this.columns[i%this.ncolumns].add(this._buildEntry(this.data[i],this.id,i));
	}
};

BLauLib.UI.Columns.prototype._buildEntry=function(objData,id,num){
	var divs=$$('div',4);
	
	divs[0].id="entry_"+id+"_"+num;
	divs[0].set("class","entry");
	
	divs[1].id="entry_title_"+id+"_"+num;
	divs[1].set("class","entrytitle");
	
	divs[2].id="entry_body_"+id+"_"+num;
	divs[2].set("class","entrybody");
	
	divs[3].id="entry_foot_"+id+"_"+num;
	divs[3].set("class","entryfoot");
	
	
	divs[1].html(objData.title);
	divs[2].html(objData.body);
	divs[3].html(objData.footer);
	divs[0].add(divs[1],divs[2],divs[3]);
	divs[0].set("style","margin-top: "+this.objformat.vspace);
	return divs[0];
};

/**
 * Devolve o elemento DOM com as vÃ¡rias colunas de dados
 */
BLauLib.UI.Columns.prototype.getUI=function(){
	return this.root;
}

/**
 * Painel que apresenta os dados no ecran sob a forma paginada
 * 
 * @param {String}
 *            Id do elemento contentor
 * @param {Array}
 *            Array com os cabeÃ§alhos
 * @param {Array}
 *            Array com os dados tabelados
 * @param {Number}
 *            Number com o nÃºmero de elementos por pÃ¡gina
 * @param {String}
 *            Identificador da css associada
 */
BLauLib.UI.NPaged = function(iddiv, aheaders, adata, nppag, css, callback,
		total) {
	this.headers = aheaders;
	this.assinc = false;
	this.callback = callback;
	this.numpagtotal = total;
	if (!BLauLib.isUndefined(callback) && BLauLib.isFunction(callback))
		this.assinc = true;
	this.data = adata;
	console.log(this.assinc);
	this.nppage = nppag;
	this.divp = $(iddiv);
	this.tblcon = null;
	this.idpr = this.divp.id;
	this.pagenumber = 1;
	if (BLauLib.isUndefined(css) || BLauLib.isNull(css))
		this.css = "npage";
	else
		this.css = css;
	this.build();
};

BLauLib.UI.NPaged.prototype.setTotalNpages = function(total) {
	this.numpagtotal = total;
};

/**
 * Devolve o nÃºmero de pÃ¡ginas necessÃ¡rias para a representaÃ§Ã£o dos dados
 */
BLauLib.UI.NPaged.prototype.getNPages = function() {
	if (!this.assinc)
		return this.data.length.ICDiv(this.nppage);
	return this.numpagtotal.ICDiv(this.nppage);
};

/**
 * MÃ©todo responsÃ¡vel por mudar o conteÃºdo de pÃ¡gina
 * 
 * @param npage
 *            Numero da pÃ¡gina
 * @return Nada
 */
BLauLib.UI.NPaged.prototype.displayPage = function(npage) {
	this.pagenumber = npage;
	this.tblcon.innerHTML = "";
	var posmin;
	var posmax;
	if (!this.assinc) {
		posmin = (npage - 1) * this.nppage;
		posmax = Math.min((npage) * this.nppage - 1, this.data.length);
	} else {
		posmin = 0;
		posmax = this.data.length;
	}
	var aux1 = null;
	var aux2 = null;
	// preenche headers
	aux2 = $$('tr');
	aux2.className = this.css + "_hd";
	for ( var i = 0; i < this.headers.length; i++) {
		aux1 = $$('td');
		aux1.className = this.css + "_td_";
		if ((j % 2) == 0)
			aux1.className += "par";
		else
			aux1.className += "impar";
		aux1.innerHTML = this.headers[i];
		aux2.add(aux1);
	}
	this.tblcon.add(aux2);
	// preenche corpo
	for ( var i = posmin; i < posmax; i++) {// itera sobre as linhas da matriz
											// de dados
		aux1 = $$('tr');
		if ((i % 2) == 0)// paridade da coluna
			aux1.className = this.css + "_tr_par";
		else
			aux1.className = this.css + "_tr_impar";
		for ( var j = 0; j < this.data[i].length; j++) {// itera sobre as
														// colunas da
			// matriz de dados
			aux2 = $$('td');
			aux2.innerHTML = this.data[i][j];
			aux2.className = this.css + "_td_";
			if ((j % 2) == 0)
				aux2.className += "par";
			else
				aux2.className += "impar";
			aux1.add(aux2);
		}
		this.tblcon.add(aux1);
	}
	this.setFooter(npage - 1);
};

/**
 * FunÃ§Ã£o que remove uma entrada no objecto NPaged
 * 
 * @param n
 *            Ãndice da entrada
 * @param callback
 *            FunÃ§Ã£o de callback
 * @return void
 */
BLauLib.UI.NPaged.prototype.removeEntry = function(n, callback, s) {
	var posmin = (this.pagenumber - 1) * this.nppage;
	var posmax = Math
			.min((this.pagenumber) * this.nppage - 1, this.data.length);
	if (n < 0 || n >= this.data.length) // caso o valor de n esteja fora do
		// intervalo de dados
		return;
	if (n >= posmin && n < posmax) {// caso o valor n pertenca Ã  pÃ¡gina que se
		// encontra seleccionada
		var linhas = this.tblcon.get('$tr');
		var linha = linhas[n - posmin + 1];
		var obj = this;
		var call = function() {
			if (typeof callback != "undefined" && callback != null)
				callback();
			if (!obj.assinc)
				obj.displayPage(obj.pagenumber);
			else
				obj.displayAssincPage(obj.pagenumber);
		};
		linha.del(s, call);
		this.data = this.data.remove(n);
	}
};

BLauLib.UI.NPaged.prototype.setFooter = function(n) {
	for ( var i = 0; i < this.dfoot.childNodes.length; i++) {
		if (i == n)
			this.dfoot.childNodes[i].className = this.css + "_bf_on";
		else
			this.dfoot.childNodes[i].className = this.css + "_bf";
	}
};

BLauLib.UI.NPaged.prototype.build = function() {
	var np;
	if (!this.assinc)
		np = this.getNPages();
	else
		np = this.numpagtotal;
	this.divp.innerHTML = "";// apaga o conteudo presente no contentor pai
	this.tblcon = $$('table');// tabela com os dados
	this.divtbc = $$('div');
	this.divtbc.className = this.css + "_table";
	this.tblcon.className = this.css + "_table";
	this.dfoot = $$('div');// divisor com os nÃƒÂºmeros
	var aux1;
	var aux2;
	var obj = this.displayPage;
	this.divtbc.add(this.tblcon);
	this.divp.add(this.divtbc);
	var obj = this;
	// preenche divisor
	var cls = function(a) {
		var ev = a ? a : window.event;
		var el = ev.currentTarget;
		var num = parseInt(el.id.split("_")[1]) + 1;
		if (!obj.assinc)
			obj.displayPage(num);
		else
			obj.callback(obj, num);
	};
	if (np > 1) {
		for ( var i = 0; i < np; i++) {
			aux1 = $$('div');
			aux1.innerHTML = i;
			aux1.id = "p_" + i;
			aux1.className = this.css + "_bf";
			aux1.onclick = cls;
			this.dfoot.add(aux1);
		}
		this.divp.add(this.dfoot);
	}
	// mostra a primeira pÃƒÂ¡gina
	if (!this.assinc)
		this.displayPage(this.pagenumber);
	else
		this.callback(this, this.pagenumber);
};
/**
 * Este objecto implementa uma interface para efectuar procuras
 */
BLauLib.UI.ISearch = function(id, parent, callback, height, txsize) {
	this.bheight = 300;
	if (!BLauLib.isUndefined(height) && !BLauLib.isNull(height))
		this.bheight = height;
	this.contentor = $(parent);
	this.callback = callback;
	this.datadiv = $$('div');
	this.datadiv.className = "scrolldata";
	this.idsearch = "search_" + id;

	this.intext = $$('input');
	this.intext.id = this.idsearch + "_input";
	this.intext.type = "text";
	this.intext.size = (typeof txsize == "undefined") ? 60 : txsize;
	this.table = $$('table');
	var obj = this;
	this.intext.onkeyup = function() {
		if (typeof obj.callback != "undefined" && obj.callback != null)
			obj.callback();
	}
	this.table.className = "isearcht";
	this.datadiv.style.maxHeight = this.bheight + "px;";
	this.build();
};

BLauLib.UI.ISearch.prototype.setText = function(val) {
	this.intext.value = val;
};

BLauLib.UI.ISearch.prototype.getText = function() {
	return this.intext.value;
};

BLauLib.UI.ISearch.prototype.clearData = function() {
	this.datadiv.innerHTML = "";
};

BLauLib.UI.ISearch.prototype.build = function() {
	var inputline = $$('tr');
	var inputcell = $$('td');

	var trdata = $$('tr');
	var tddata = $$('td');

	tddata.add(this.datadiv);
	trdata.add(tddata);
	inputcell.id = this.intext.id + "_td";
	inputcell.add(this.intext);
	inputline.add(inputcell);

	this.table.add(inputline);
	this.table.add(trdata);
	this.table.className = "isearcht";
	this.contentor.add(this.table);
};

/**
 * MÃ©todo que adiciona os dados ao objecto
 * @param dt InformaÃ§Ã£o com os dados de procura
 * @return
 */
BLauLib.UI.ISearch.prototype.displayData = function(dt) {
	this.clearData();
	var pdata = null;
	if (typeof dt == "undefined" || dt == null)
		return;
	for ( var i = 0; i < dt.length; i++) {
		pdata = $$('div');
		pdata.className = "data";
		pdata.innerHTML = dt[i];
		this.datadiv.add(pdata);
	}
};

/**
 * Extensoes as primitvas de JavaScript Criacao de um wrapper para o objecto
 * Element, HElement o objectivo consiste em extender os objectos Element sem
 * entrar em conflito com as extensoes de otras bibliotecas, tais como
 * Prototype, JQuery, etc
 * 
 * @author Vitor Fernandes (a.k.a balhau)
 */

/**
 * Metodo que efectua o resize de um array, devolve como parametro de saida o
 * array redimensionado
 * 
 * @author Vitor Fernandes (a.k.a: Balhau)
 */
var e$ = function(divel) {
	return document.getElementById(divel);
};

/**
 * Classe para efectuar a concatenaÃ§Ã£o de strings de uma forma eficiente,
 * substitui a operaÃ§Ã£o "+="
 * 
 * @param {String}
 *            str String String inicial
 * @author Balhau
 */
var StringBuilder = function(str) {
	this._arrstr = [];
	this._comp = str.length;
	for ( var i = 0; i < str.length; i++) {
		this._arrstr[i] = str.charAt(i);
	}
};
/**
 * MÃ©todo para concatenaÃ§Ã£o de strings
 * 
 * @param {String}
 *            str String que se pretende concatenar com a jÃ¡ existente
 *            representada sob a forma de array
 */
StringBuilder.prototype.append = function(str) {
	for ( var i = 0; i < str.length; i++) {
		this._arrstr[this._arrstr.length] = str.charAt(i);
	}
};

/**
 * MÃ©todo que devolve o objecto string representado
 * 
 * @return {String} String resultante da concatenaÃ§Ã£o
 */
StringBuilder.prototype.toString = function() {
	return this._arrstr.join('');
};

/**
 * Efectua um resize no array removendo os elementos "undefined"
 * 
 * @return {Array} Array onde foram removidos os elementos com valor "undefined"
 */
Array.prototype.resize = function() {
	var arr = [];
	var i;
	var k = 0;
	for (i = 0; i < this.length; i++) {
		if (typeof (this[i]) == "undefined") {
			continue;
		}
		arr[k] = this[i];
		k++;
	}
	return arr;
};

/**
 * Remove os elementos a partir do valor de endereÃ§o do objecto
 * 
 * @param {Object}
 *            obj Objecto a remover
 * @return {Array} Array
 */
Array.prototype.removeByObject = function(obj) {
	var out = [];
	for ( var i = 0; i < this.length; i++) {
		if (this[i] !== obj)
			out[out.length] = this[i];
	}
	return out;
};

/**
 * MÃ©todo que remove os elementos "undefined" e null de um array
 * 
 * @return {Array} Array resultante da remoÃ§Ã£o de elementos null e undefined
 */
Array.prototype.clean = function() {
	var out = []
	for ( var i = 0; i < this.length; i++) {
		if (this[i] != null && typeof this[i] != "undefined")
			out[out.length] = this[i];
	}
	return out;
};

/**
 * Efectua a remoÃ§Ã£o de caracteres vazios Ã  esquerda da string
 * 
 * @return {String} String sem espaÃ§os brancos Ã  esquerda
 */
String.prototype.ltrim = function() {
	var i = 0;
	var cmp = this.length;
	while (this.charAt(i) == ' ' && i < cmp) {
		i++;
	}
	return this.substring(i, this.length);
};

String.prototype.addEvent = function(event, value) {
	return "<a " + event + "=\"" + value + "\">" + this + "</a>";
};

/**
 * Efectua a remoÃ§Ã£o de caracteres vazios Ã  direita da string
 * 
 * @return {String} String sem espaÃ§os brancos Ã  direita
 */
String.prototype.rtrim = function() {
	var i = this.length - 1;
	while (i >= 0 && this.charAt(i) == ' ') {
		i--;
	}
	return this.substring(0, i + 1);
};

/**
 * Verifica se uma string Ã© vazia
 * 
 * @return {Boolean} Valor verdadeiro caso a string seja vazia, falso caso
 *         contrÃ¡rio
 */
String.prototype.empty = function() {
	return (this.trim() == '');
};

String.prototype.trim = function() {
	return this.ltrim().rtrim();
};

/**
 * MÃ©todo que devolve um array de elementos que devolvem valor true quando
 * passados para a funÃ§Ã£o callback
 * 
 * @param {Function}
 *            callback FunÃ§Ã£o callback que avalia o elemento
 * @return {Array} Array com os elementos que retornam valor true na avaliaÃ§Ã£o
 *         pela funÃ§Ã£o callback
 */
Array.prototype.where = function(callback) {
	var out = [];
	for ( var i = 0; i < this.length; i++) {
		if (callback(this[i])) {
			out[out.length] = this[i];
		}
	}
	return out;
};

Array.newMap=function(dim,f){
	if(!BLauLib.isFunction(f))
		return [];
	var out=[];
	for(var i=0;i<dim;i++){
		out[i]=f(i);
	}
	return out;
};

Array.prototype.select = function(ini, end) {
	if (typeof end == "undefined")
		end = this.length + 1;
	return this.slice(ini, end + 1);
};

/**
 * MÃ©todo que aplica uma funÃ§Ã£o a todos os elementos de um determinado array
 * 
 * @param callback
 *            FunÃ§Ã£o callback executada sobre os elementos
 * @return true ou false dependendo se o argumento da funÃ§Ã£o Ã© uma funÃ§Ã£o ou
 *         nÃ£o.
 */
Array.prototype.map = function(callback) {
	if (!BLauLib.isFunction(callback))
		return false;
	var cmp = this.length;
	for ( var i = 0; i < cmp; i++) {
		callback(this[i],i);
	}
	return true;
};

Array.prototype.AMap = function(callback) {
	if (!BLauLib.isFunction(callback))
		return this.clona();
	var cmp = this.length;
	var out = [];
	for ( var i = 0; i < cmp; i++) {
		out[i] = callback(this[i]);
	}
	return out;
};

Array.prototype.getObjectBy = function(paramname, value) {
	var prop = null;
	for ( var i = 0; i < this.length; i++) {
		prop = this[i];
		if (prop[paramname] == value)
			return prop;
	}
	return null;
};

// NodeList.prototype.where=function(callback){
// var out=[];
// for(var i=0;i<this.length;i++){
// if(callback(this[i])){
// out[out.length]=this[i];
// }
// }
// return out;
// }

/**
 * Devolve uma string com a representaÃ§Ã£o dos elementos contidos no Array
 * 
 * @return {String} String com a representaÃ§Ã£o dos elementos presentes no Array
 */
Array.prototype.toString = function() {
	var i;
	var str = "[";
	for (i = 0; i < this.length; i++) {
		if (i === 0) {
			str += this[i];
		} else {
			str += "," + this[i];
		}
	}
	str += "]";
	return str;
};

/**
 * MÃ©todo que efectua a remoÃ§Ã£o do Ãºltimo elemento do array
 * 
 * @return {Object} Elemento presente no array
 */
Array.prototype.pop = function() {
	var obj = this[this.length - 1];
	this.remove(this.length - 1);
	return obj;
};

/**
 * Devolve a posiÃ§Ã£o que um determinado objecto ocupa no array
 * 
 * @param {Object}
 *            valor Objecto do array
 * @return {Number} PosiÃ§Ã£o do elemento do array, -1 caso o elemento nÃ£o
 *         pertenÃ§a ao array
 */
Array.prototype.getIndex = function(valor) {
	for ( var i = 0; i < this.length; i++) {
		if (this[i] == valor) {
			return i;
		}
	}
	return -1;
};

/**
 * MÃ©todo que adiciona um elemento ao array
 * 
 * @param {Object}
 *            Objecto, ou lista de objectos a adicionar
 * @return {Array} devolve o prÃ³prio array para efeitos de chaining
 */
Array.prototype.add = function() {
	var args = arguments;
	var cmp = this.length;
	for ( var i = 0; i < args.length; i++) {
		this[cmp] = args[i];
		cmp++;
	}
	return this;
};

Array.prototype.clone = function(deep) {
	var deep=BLauLib.isUndefined(deep)?false:deep;
	var _c = [];
	for ( var k = 0; k < this.length; k++) {
		if(deep==true && BLauLib.isArray(this[k]))
			_c[k] = this[k].clone(deep);
		else
			_c[k]=this[k];
	}
	return _c;
};
/**
 * MÃ©todo que remove um elemento do array
 * 
 * @param {Number}
 *            indice PosiÃ§Ã£o do elemento a remover
 * @return {Array} devolve o array jÃ¡ sem o elemento
 */
Array.prototype.remove = function(indice) {
	var _a = this.clone();
	if (_a.length <= indice || indice < 0) {
		return [];
	}
	delete (_a[indice]);
	return _a.resize();
};

Number.prototype.tipo = function() {
	return "numero";
};

/**
 * Devolve a divisÃ£o inteira entre dois nÃºmeros arredondada por defeito
 * 
 * @return {Number} Valor da divisÃ£o
 */
Number.prototype.IFDiv = function(a) {
	if (a == 0)
		return NaN;
	return Math.floor(this / a);
};

/**
 * Devolve a divisÃ£o inteira entre dois nÃºmeros arredondada por excesso
 * 
 * @return {Number} Valor da divisÃ£o
 */
Number.prototype.ICDiv = function(a) {
	if (a == 0)
		return NaN;
	return Math.ceil(this / a);
};

/**
 * Devolve o valor do valor multiplicado por uma determinada percentagem
 * 
 * @param {Number}
 *            a Percentagem
 * @return {Number} Valor multiplicado pela percentagem a
 */
Number.prototype.percent = function(a) {
	return (this * a) / 100;
};

String.prototype.tipo = function() {
	return "string";
};
/**
 * Valida uma string a partir de uma expressÃƒÂ£o regular
 * 
 * @return {Boolean} Verdadeiro caso a string verifique a condiÃ§Ã£o dada pela
 *         expressÃ£o regular, falso caso contrÃ¡rio
 */
String.prototype.valida = function(exreg) {
	return this.match(exreg) === null ? false : true;
};

/**
 * MÃ©todo que extende a classe String, adicionando a possiblidade de reverter a
 * ordem dos caracteres
 * 
 * @return {@link String} String com os caracteres em ordem reversa
 */
String.prototype.reverse = function() {
	var stou = "";
	for ( var i = this.length - 1; i >= 0; i--) {
		stou += this.charAt(i);
	}
	return stou;
};

/**
 * MÃ©todo que transforma uma String num array com a sua codificaÃ§Ã£o UNicode
 * 
 * @param {String}
 *            car Caracter separador
 * @return {String} CodificaÃ§Ã£o Unicode separada atravÃ©s do caracter car
 */
String.prototype.toUnicodeArray = function(car) {
	var sb = new StringBuilder('');
	for ( var i = 0; i < this.length; i++) {
		if (i === 0) {
			sb.append(String(this.charCodeAt(i)));
		} else {
			sb.append(car + "" + this.charCodeAt(i));
		}
	}
	return sb.toString();
};

Array.prototype.tipo = function() {
	return "array";
};

/**
 * MÃ©todo que cria um array com valores aleatÃ³rios
 * 
 * @param {int}
 *            dim DimensÃ£o do array
 * @param {int}
 *            low Valor mÃ­nimo
 * @param {int}
 *            sup Valor mÃ¡ximo
 * @param {bool}
 *            intarray Valor booleano indicando se o array Ã© composto por
 *            valores inteiros ou valores decimais
 * @return {int} Array aleatÃ³rio com dim elementos compreendidos entre low e sup
 */
Array.random = function(dim, low, sup, intarray) {
	var arr = [];
	if (typeof (low) == 'undefined')
		low = 0;
	if (typeof (sup) == 'undefined')
		sup = 100;
	if (typeof (intarray) == 'undefined')
		intarray = true;
	for ( var i = 0; i < dim; i++) {
		if (intarray)
			arr[i] = Math.floor(Math.random() * (sup - low + 1) + low);
		else
			arr[i] = Math.random() * (sup - low) + low;
	}
	return arr;
};

/**
 * MÃ©todo que devolve um array bidimensional com valores aleatÃ³rios
 * 
 * @param {Number}
 *            col NÃºmero de colunas da matriz
 * @param {Number}
 *            lin NÃºmero de linhas da matriz
 * @param {Number}
 *            low MÃ­nimo possÃ­vel
 * @param {Number}
 *            sup MÃ¡ximo possivel
 * @param {Boolean}
 *            intarray True para valores inteiros, false para valores decimais
 */
Array.mrandom = function(col, lin, low, sup, intarray) {
	var out = [];
	for ( var i = 0; i < lin; i++)
		out[i] = Array.random(col, low, sup, intarray);
	return out;
};

var Elemento = {};

Elemento.setAttribute = function(elemento, nome, valor) {
	switch (nome) {
	case "class":
		if (typeof (ActiveXObject) != "undefined") {
			elemento.setAttribute("className", valor);
		} else {
			elemento.setAttribute("class", valor);
		}
		break;
	case "checked":
		elemento.defaultChecked = valor;
		break;
	default:
		elemento.setAttribute(nome, valor);
	}
};

Elemento.getAttribute = function(elemento, nome) {
	switch (nome) {
	case "class":
		if (typeof (ActiveXObject) != "undefined") {
			return elemento.getAttribute('className');
		} else {
			return elemento.getAttribute('class');
		}
		break;
	default:
		return elemento.getAttribute(nome);
	}
};
Elemento.criaRadioBox = function(id, nome, checked) {
	if (checked == "undefined") {
		checked = false;
	}
	var radioInput;
	try {
		var radioHtml = '<input type="radio" name="' + nome + '"';
		if (checked) {
			radioHtml += ' checked="checked"';
		}
		radioHtml += '/>';
		radioInput = document.createElement(radioHtml);
		radioInput.setAttribute('id', id);
	} catch (err) {
		radioInput = document.createElement('input');
		radioInput.setAttribute('type', 'radio');
		radioInput.setAttribute('name', name);
		radioInput.setAttribute('id', id);
		if (checked) {
			radioInput.setAttribute('checked', 'checked');
		}
	}
	return radioInput;
};

Elemento.createInput = function(tipo, nome, id) {
	var el;
	if (id === undefined) {
		id = nome;
	}
	switch (tipo) {
	case "radio":
		el = Elemento.criaRadioBox(id, nome, false);
		break;
	default:
		el = document.createElement('input');
		el.setAttribute('name', nome);
		el.setAttribute('id', id);
		el.setAttribute('type', tipo);
		break;
	}
	return el;
};

Elemento.FX = {};
/**
 * Objecto responsavel por extender funcionalidades ao objecto Element
 * 
 * @classDescription Em vez de se proceder a uma extensao natural do objecto
 *                   Element, baseado na adicao de novos metodos ao objecto em
 *                   questao, efectuou-se a criacao de um novo objecto chamado
 *                   HElement que copia todos os metodos e propriedades
 *                   existentes no objecto Element. A razao pela qual se decidiu
 *                   em criar este wrapper, vem pelo facto de evitar conflitos
 *                   com outras librarias de javascript, nomeadamente jquery e
 *                   prototype. Este elemento tem uma unica desvantagem. Tem um
 *                   overhead superior no inicalizar do objecto devido ao ciclo
 *                   que copia as funcionalidades prototipadas.
 * @author Balhau
 */
var HElement = function() {
	this.clones = 0;
	this.evnts = {
		"onmouseover" : [],
		"onmousedown" : [],
		"onmouseup" : [],
		"onmouseout" : []
	};
	this.ontransition = false;
	this.isdrag = false;
};

HElement.Event = {};

HElement.Event.ONMOUSEOVER = "onmouseover";

HElement.Event.ONMOUSEUP = "onmouseup";

HElement.Event.ONMOUSEDOWN = "onmousedown";

HElement.Event.ONMOUSEOUT = "onmouseout";

/**
 * Objecto reservado para implementaÃ§Ã£o de funÃ§Ãµes para animar objectos
 */
HElement.FX = {};

/**
 * @param {Object} obj Contem os detalhes sobre a animaÃ§Ã£o. O objecto deve ter a seguinte estrutura
 * {dom_el:helement,seg:nsegundos,callback:funcao_callback,_begin:{param_a:val_begin_a,param_b:val_begin_b},_end:{param_a:val_end_b,param_b:val_end_b}} 
 */
HElement.FX.animate=function(obj){
	var mili=obj.seg*1000;
	if(!BLauLib.isUndefOrNull(obj.delay)){
		delay=obj.delay;
		obj.delay=null;
		setTimeout(function(){HElement.FX.animate(obj);}, delay*1000);
		return;
	}
	var iparams=obj.begin.getPropertiesKeys();
	var eparams=obj.end.getPropertiesKeys();
	var spsec=30;
	var totsteps=Math.ceil(spsec*obj.seg);
	var step=0;
	var currval=null;
	var val=null;
	var inte=0;
	if(!Array.equals(iparams,eparams))
		return -1;
	var callAnim=function(){//metodo que efectua a animaÃ§Ã£o
		if(step>totsteps){
			if(!BLauLib.isUndefOrNull(obj.callback)){
				obj.callback(obj.dom_el);
				clearInterval(inte);
			}
		}else{
			for(var i=0;i<iparams.length;i++){
				currval=obj.begin[iparams[i]]+((obj.end[iparams[i]]-obj.begin[iparams[i]])*step/totsteps);
				val=BLauLib.Utils.CSS.valueToBrowser(BLauLib.Utils.parseStylePropValue(iparams[i],currval),iparams[i]);
				obj.dom_el.style[BLauLib.Utils.parseStyleProp(iparams[i])]=val;
			}
		}
		step++;
	};
	inte=setInterval(callAnim,spsec);
	return inte;
};
/**
 * MÃ©todo que especifica a transparÃªncia do objecto em HTML
 * 
 * @param {Object}
 *            val percentagem compreendida entre 0-100
 */
HElement.prototype.setAlpha = function(val) {
	// caso do IE
	if (BLauLib.Browser.isIE()) {
		this.style.zoom = 1;
		this.style.filter = "alpha(opacity=" + val + ")";
	}
	// caso firefox, etc
	else {
		if (val <= 0) {
			this.style.visibility = "hidden";
		} else {
			this.style.visibility = "visible";
		}
		val = val / 100;
		this.style.opacity = val;
	}
	this.alpha = val;
};

BLauLib.Utils={};
BLauLib.Utils.CSS={};
BLauLib.Utils.Browser={};

BLauLib.Utils.dimToArrUnits=function(str){
	var delimiters=["px","em","ex","in","cm","mm","pt","%","pc"];
	var aux;
	for(var i=0;i<delimiters.length;i++){
		if((aux=str.split(delimiters[i])).length==2)
			return [aux[0],delimiters[i]];
	}
	return [aux[0],""];
}

BLauLib.Utils.parseStylePropValue=function(prop,value){
	var prp=BLauLib.Utils.parseStyleProp(prop);
	switch (prp) {
	case "width":
	case "height":
		return value+"px";
	case "color":
	case "background-color":
		return "#"+value;
	case "alpha":
        return "";
	default:
		return value;
	}
	return value;
};

BLauLib.Utils.parseStyleProp=function(prop){
	switch (prop) {
	case "alpha":
		switch(true){
		case BLauLib.Browser.isIE():
			return "filter";
		default:
			return "opacity";
		}
	case "background-image":
		switch(true){
		case BLauLib.Browser.isFirefox():
			return "backgroundImage";
		default:
			return prop;
		}
	case "background-position":
		switch(true){
		case BLauLib.Browser.isFirefox():
			return "backgroundPosition";
		default:
			return prop;
		}
	case "background-color":
		switch(true){
		case BLauLib.Browser.isFirefox():
			return "backgroundColor";
		default:
			return prop;
		}
	default:
		return prop;
	}
	return prop;
};

BLauLib.Utils.CSS.valueToBrowser=function(value,prop){
	switch (prop) {
	case "alpha":
		switch(true){
		case BLauLib.Browser.isIE():
			return "opacity=("+value+")";
		default:
			return value/100;
		}
		break;

	default:
		return value;
	}
};

HElement.prototype.blink = function(seg, callback) {
	var obj = this;
	HElement.BLINKING = true;
	this.desvanece(seg, function() {
		if (HElement.BLINKING) {
			if (!BLauLib.isNull(callback))
				callback();
			obj.aparece(seg, function() {
				if (HElement.BLINKING) {
					if (!BLauLib.isNull(callback))
						callback();
					obj.blink(seg, callback);
				}
			});
		}
	});
};

HElement.BLINKING = false;

HElement.prototype.stopBlink = function() {
	HElement.BLINKING = false;
};

/**
 * MÃ©todo que devolve a posiÃ§Ã£o de um determinado elemento
 * 
 * @return {Object} Objecto.x, Objecto.y
 */
HElement.prototype.getPos = function() {
	var cX = this.offsetLeft;
	var cY = this.offsetTop;
	var pai = this;
	while (pai = pai.offsetParent) {
		cX += pai.offsetLeft;
		cY += pai.offsetTop;
	}
	return {
		x : cX,
		y : cY
	};
};

/**
 * MÃ©todo que atribui uma posiÃ§Ã£o a um elemento
 * 
 * @param {Number}
 *            x Valor de X
 * @param {Number}
 *            y Valor de Y
 */
HElement.prototype.setPos = function(x, y) {
	this.style.position = "absolute";
	this.style.top = y + "px";
	this.style.left = x + "px";
};

HElement.prototype.pai = function() {
	return HElement.get(this.parentNode);
};

/**
 * MÃ©todo que devolve a actual transparÃªncia aplicada ao objecto
 * 
 * @return Number Percentagem de transparÃªncia
 */
HElement.prototype.getAlpha = function() {
	var rg = new RegExp();
	// Caso IE;
	if (BLauLib.Browser.isIE()) {
		if (this.style.filter === "") {
			return 100;
		}
		var match = /opacity=(.*)\)/i.exec(this.style.filter);
		return parseInt(match[1] * 100);
	}
	// Caso nÃƒÆ’Ã‚Â£o IE
	if (this.style.opacity === "") {
		return 100;
	}
	return Number(this.style.opacity) * 100;
};

/**
 * MÃ©todo que remove um elemento do DOM
 * 
 * @return
 */
HElement.prototype.del = function(s, callback) {
	if (typeof s == "undefined" || s == null) {
		var pai = HElement.get(this.parentNode);
		var a = this;
		pai.remove(a);
		return;
	}
	var a = this;
	this.desvanece(s, function() {
		a.del();
		if (typeof callback != "undefined" && callback != null)
			callback();
	});
};

/**
 * Metodo que inicializa o mecanismo de drag sobre um objecto
 * 
 * @param x
 *            {@link Number} Coordenada em x
 * @param y
 *            {@link Number} Coordenada em y
 * @param callback
 *            {@link Function} Funcao callback executada a cada instancia do
 *            movimento
 * @return
 */
HElement.prototype.startDrag = function(x, y, callback) {
	var isto = this;
	if (x && y) {
		isto.mouseX = x;
		isto.mouseY = y;

	} else {
		isto.mouseX = 0;
		isto.mouseY = 0;
	}
	if (isNaN(parseInt(isto.style.left))) {
		isto.style.left = isto.getPos().x;
	}
	if (isNaN(parseInt(isto.style.top))) {
		isto.style.top = isto.getPos().y;
	}

	document.onmousemove = function(e) {
		var x = parseInt(isto.style.left);
		var y = parseInt(isto.style.top);

		e = e ? e : window.event;
		isto.style.left = x + (e.clientX - isto.mouseX) + "px";
		isto.style.top = y + (e.clientY - isto.mouseY) + "px";
		isto.mouseX = e.clientX;
		isto.mouseY = e.clientY;
		if (callback) {
			callback(x, y);
		}
	};
};

/**
 * MÃ©todo que adiciona valores quando estamos na presenÃ§a de um objecto do tipo
 * select. Este mÃ©todo foi concebido devido Ã s diferenÃ§as existentes entre os
 * vÃ¡rios browsers
 * 
 * @param {Object}
 *            value Valor da opÃ§Ã£o
 * @param {Object}
 *            capt Label associado ao item
 */
// MÃƒÆ’Ã‚Â©todo para adicionar valores a elementos
HElement.prototype.addOption = function(value, capt, id) {
	switch (this.nodeName) {
	case "SELECT":
		var noElem = HElement.createElement('option');
		var indice = 0;
		var lastElem = null;
		if (typeof (capt) == "undefined") {
			noElem.text = "undefined";
		} else {
			noElem.text = capt;
		}
		if (typeof (id) == "undefined") {
			noElem.id = "id_" + value;
		}
		noElem.value = value;
		if (this.selectedIndex != -1) {
			this.indice = this.selectedIndex;
			lastElem = this.options[indice];
		}
		try {
			this.add(noElem, lastElem); // standards compliant; doesn't work
			// in IE
		} catch (ex) {
			this.add(noElem, this.selectedIndex); // IE only
		}
	default:
	}
};

/**
 * MÃ©todo que devolve a opÃ§Ã£o actualmente seleccionada para um elemento do tipo
 * SELECT
 * 
 * @return {@link Option}
 */
HElement.prototype.getSelectedOption = function() {
	if (this.nodeName != "SELECT") {
		throw "Este mÃ©todo sÃ³ estÃ¡ disponÃ­vel para elementos do tipo SELECT";
	}
	return this.options[this.selectedIndex];
};

/**
 * MÃ©todo que aplica um efeito de desvanecimento a elementos de HTML
 * 
 * @param {Number}
 *            seg NÃºmero de segundos ate atingir a transparencia mÃ­nima
 * @see #getAlpha
 * @see #setAlpha
 * @see #aparece
 */
HElement.prototype.desvanece = function(seg, callback) {
	var alphaAct = this.getAlpha();
	if (alphaAct == 0) {
		if(BLauLib.isFunction(callback))
			callback();
		return;
	}
	this.transicaoAlpha(alphaAct, 0, seg, callback);
};

/**
 * Devolve o comprimento do elemento
 * 
 * @return {Number} Comprimento, em pixeis, do elemento
 */
HElement.prototype.getWidth = function() {
	return this.style.width === "" ? 0 : this.style.width.split("px")[0];
};

HElement.prototype.css=function(obj){
	if(obj==null)
		return;
	var props=obj.getPropertiesKeys();
	var prop=null;
	var val=null;
	for(var i=0;i<props.length;i++){
		prop=BLauLib.Utils.parseStyleProp(props[i]);
		val=BLauLib.Utils.parseStylePropValue(prop,obj[props[i]]);
		this.style[prop]=val;
		console.log("[CSS] Prop: "+prop+"<-->"+val);
		console.log("[CSS] NProp: "+props[i]+"<-->"+obj[props[i]]);
	}
	console.log("************************************************************");
};

/**
 * Atribui um comprimento ao elemento
 * 
 * @param {Number}
 *            vl Comprimento em pixeis
 */
HElement.prototype.setWidth = function(vl) {
	this.style.width = vl + "px";
};

/**
 * Atribui uma altura ao elemento
 * 
 * @param {Number}
 *            vl Altura em pixeis
 */
HElement.prototype.setHeight = function(vl) {
	this.style.height = vl + "px";
};

/**
 * Devolve o comprimento do elemento
 * 
 * @return {Number} Comprimento, em pixeis, do elemento
 */
HElement.prototype.getHeight = function() {
	return this.style.height === "" ? 0 : this.style.height.split("px")[0];
};

/**
 * MÃ©todo que aplica um efeito de reaparecimento a elementos de HTML
 * 
 * @param {Number}
 *            seg NÃºmero de segundos ate atingir a transparencia mÃ¡xima
 * @see #setAlpha
 * @see #setAlpha
 * @see #desvanece
 */
HElement.prototype.aparece = function(seg, callback) {
	var alphaAct = this.getAlpha();
	if (alphaAct == 100) {
		if(BLauLib.isFunction(callback))
			callback();
		return;
	}
	this.transicaoAlpha(alphaAct, 100, seg, callback);
};

Object.prototype.select = function(callback) {
	var out = [];
	if (this.length != undefined) {
		for ( var i = 0; i < this.length; i++) {
			if (callback(this[i])) {
				out[out.length] = this[i];
			}
		}
	}
	return out;
};

Object.prototype.getPropertiesKeys=function(){
	var arr=[];
	for(var name in this){
		if(!BLauLib.isFunction(this[name]))
			arr[arr.length]=name;
	}
	return arr;
};

Object.prototype.getFunctionKeys=function(){
	var arr=[];
	for(var name in this){
		if(BLauLib.isFunction(this[name]))
			arr[arr.length]=name;
	}
	return arr;
};

Object.prototype.getKeys=function(){
	var arr=[];
	for(var name in this){
			arr[arr.length]=name;
	}
	return arr;
};

Object.prototype.isNum = function() {
	return (this.constructor == Number) ? true : false;
};

Object.prototype.isString = function() {
	return (this.constructor == String) ? true : false;
};

/**
 * Metodo que detecta a intersecao entre o objecto instanciado e um outro
 * passado por parametro
 * 
 * @param {String}
 *            l Identificador do Elemento para o qual se pretende efectuar a
 *            comparacao de cplosap
 */
HElement.prototype.hitTest = function(l) {
	var l = document.getElementById(l);
	function getOffset(o) {
		for ( var r = {
			l : o.offsetLeft,
			t : o.offsetTop,
			r : o.offsetWidth,
			b : o.offsetHeight
		}; o = o.offsetParent; r.l += o.offsetLeft, r.t += o.offsetTop)
			;
		r.r += r.l;
		r.b += r.t;
		return r;
	}
	for ( var b, s, r = [], a = getOffset(this), j = isNaN(l.length), i = (j ? l = [ l ]
			: l).length; i; b = getOffset(l[--i]), (a.l == b.l || (a.l > b.l ? a.l <= b.r
			: b.l <= a.r))
			&& (a.t == b.t || (a.t > b.t ? a.t <= b.b : b.t <= a.b))
			&& (r[r.length] = l[i]))
		;
	return j ? !!r.length : r;
};

/**
 * MÃ©todo que efectua a duplicaÃ§Ã£o em profundidade de um determinado Elemento
 * HTML. Quando invocado este mÃ©todo cria um elemento idÃªntico ao elemento
 * instanciado assim como os Elementos filhos num processo recursivo. Os
 * identificadores sÃ£o diferentes de cÃ³pia para cÃ³pia para evitar colisÃµes em
 * posteriores invocaÃ§Ãµes de objectos a partir de javascript partindo do seu ID;
 * 
 * @param {Booleano}
 *            VariÃ¡vel boleana indicando o tipo de clonagem. Caso este parÃ£metro
 *            nÃ£o seja inserido ou seja verdadeiro a cÃ³pia Ã© feita em
 *            profundidade, caso o valor seja falso temos unicament a cÃ³pia do
 *            elemento sem efectuar profundidade.
 * @return {HElement} Devolve um objecto do tipo HElement que consiste no
 *         presente objecto duplicado
 */
HElement.prototype.clone = function(prof) {
	if (typeof (this.clones) == 'undefined' || this.clones == null)
		this.clones = 0;
	if (typeof (prof) == 'undefined') {
		prof = true;
	}
	var cln = document.createElement(this.tagName);
	for (i = 0; i < this.attributes.length; i++) {
		if (this.attributes[i].name == "id") {
			cln.setAttribute(this.attributes[i].name,
					this.attributes[i].nodeValue + "_clone_" + this.clones);
		} else {
			// cln.attributes[i]=document.createAttribute(el.attributes[i].name);
			cln.setAttribute(this.attributes[i].nodeName,
					this.attributes[i].nodeValue);
			if (typeof (this.innerText) != 'undefined')
				cln.innerText = this.innerText;
		}
	}
	if (prof) {
		var filhos = this.childNodes;
		for (i = 0; i < filhos.length; i++) {
			// Elementos do tipo TEXTO
			if (filhos[i].nodeType == 3) {
				cln.appendChild(filhos[i]);
			} else {
				elF = HElement.get(filhos[i]);
				cln.appendChild(HElement.get(elF.clone(prof)));
			}
		}
	} else
		cln.innerHTML = this.innerHTML;
	return cln;
};

/**
 * MÃ©todo que coloca um elemento no centro da janela
 */
HElement.prototype.putAtCenter = function() {
	var wd = BLauLib.Window.width();
	var he = BLauLib.Window.height();
	var sx = BLauLib.Window.scrX();
	var sy = BLauLib.Window.scrY();
	var x = wd / 2 + sx - this.offsetWidth / 2;
	var y = he / 2 + sy - this.offsetHeight / 2;
	this.style.position = "absolute";
	this.style.left = isNaN(x) ? (wd / 2 + "px") : (x + "px");
	this.style.top = isNaN(y) ? (he / 2 + "px") : (y + "px");
};

BLauLib.printNewWindow=function(cont){
		 top.consoleRef=window.open('','myconsole',
		  'width=350,height=250'
		   +',menubar=0'
		   +',toolbar=1'
		   +',status=0'
		   +',scrollbars=1'
		   +',resizable=1');
		 top.consoleRef.document.writeln(
		  cont);
		 top.consoleRef.document.close();
};

/**
 * MÃ©todo que aplica uma funÃ§Ã£o de callback aos elementos em profundidade
 * 
 * @param {Function}
 *            callback
 */
HElement.prototype.traverse = function(callback) {
	callback(this);
	for ( var i = 0; i < this.childNodes.length; i++) {
		HElement.get(this.childNodes[i]).traverse(callback);
	}
};

/**
 * MÃ©todo que efectua o resize de um objecto
 * 
 * @param {Event}
 *            mev Evento de rato
 * @param {Number}
 *            minx Comprimento minimo
 * @param {Number}
 *            miny Altura mÃ­nima
 * @deprecated MÃ©todo nÃ£o deve ser utilizado, efectuar o resize utilizando a
 *             especificaÃ§Ã£o CSS3
 */
HElement.prototype.resize = function(mev, minx, miny) {
	mev ? mev : window.event;
	if (!minx)
		minx = 0;
	if (!miny)
		miny = 0;
	var pos = this.getPos();
	var xdiff = mev.clientX - pos.x;
	var ydiff = mev.clientY - pos.y;
	if (xdiff > minx)
		this.style.width = xdiff + "px";
	if (ydiff > miny)
		this.style.height = ydiff + "px";
};

BLauLib.Browser = function() {
	this.dataOS = [ {
		string : navigator.platform,
		subString : "Win",
		identity : "Windows"
	}, {
		string : navigator.platform,
		subString : "Mac",
		identity : "Mac"
	}, {
		string : navigator.userAgent,
		subString : "iPhone",
		identity : "iPhone/iPod"
	}, {
		string : navigator.platform,
		subString : "Linux",
		identity : "Linux"
	} ];
	this.searchBrowser = function(data) {
		for ( var i = 0; i < data.length; i++) {
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch
					|| data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			} else if (dataProp)
				return data[i].identity;
		}
	};
	this.searchVersion = function(dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1)
			return;
		return parseFloat(dataString.substring(index
				+ this.versionSearchString.length + 1));
	};

	this.dataBrowser = [ {
		string : navigator.userAgent,
		subString : "Chrome",
		identity : "Chrome"
	}, {
		string : navigator.userAgent,
		subString : "OmniWeb",
		versionSearch : "OmniWeb/",
		identity : "OmniWeb"
	}, {
		string : navigator.vendor,
		subString : "Apple",
		identity : "Safari",
		versionSearch : "Version"
	}, {
		prop : window.opera,
		identity : "Opera"
	}, {
		string : navigator.vendor,
		subString : "iCab",
		identity : "iCab"
	}, {
		string : navigator.vendor,
		subString : "KDE",
		identity : "Konqueror"
	}, {
		string : navigator.userAgent,
		subString : "Firefox",
		identity : "Firefox"
	}, {
		string : navigator.vendor,
		subString : "Camino",
		identity : "Camino"
	}, {
		string : navigator.userAgent,
		subString : "Netscape",
		identity : "Netscape"
	}, {
		string : navigator.userAgent,
		subString : "MSIE",
		identity : "Explorer",
		versionSearch : "MSIE"
	}, {
		string : navigator.userAgent,
		subString : "Gecko",
		identity : "Mozilla",
		versionSearch : "rv"
	}, {
		string : navigator.userAgent,
		subString : "Mozilla",
		identity : "Netscape",
		versionSearch : "Mozilla"
	} ];
};
BLauLib.Browser.IE = 1;
BLauLib.Browser.Firefox = 2;
BLauLib.Browser.Chrome = 3;

BLauLib.Browser.getBrowserInfo = function() {
	var obj = new BLauLib.Browser();
	obj.browser = obj.searchBrowser(obj.dataBrowser) || "An unknown browser";
	obj.version = obj.searchVersion(navigator.userAgent)
			|| obj.searchVersion(navigator.appVersion) || "an unknown version";
	obj.OS = obj.searchBrowser(obj.dataOS) || "an unknown OS";
	return obj;
},

BLauLib.Browser.isIE = function() {
	return (BLauLib.Browser.getBrowserInfo().browser == "Explorer");
};

BLauLib.Browser.isOpera = function() {
	return (BLauLib.Browser.getBrowserInfo().browser == "Opera");
};

BLauLib.Browser.isChrome=function(){
	return (BLauLib.Browser.getBrowserInfo().browser=="Chrome");
};

BLauLib.Browser.isFirefox=function(){
	return (BLauLib.Browser.getBrowserInfo().browser=="Firefox");
};

/*******************************************************************************
 * Objecto que representa uma contentor janela
 * 
 * @classDescription Este objecto representa um contentor janela. O propÃ³sito
 *                   consiste em simular um ambiente desktop a partir de
 *                   construÃ§Ã£o de um conjunto de elementos e alguns mÃ©todos
 *                   associados
 * @param {String}
 *            nel Nome do elemento
 * @param {String}
 *            titulo Titulo da janela
 * @param {String}
 *            bdcontent Conteudo do contentor
 * @param {Number}
 *            dimx DimensÃ£o em X
 * @param {Number}
 *            dimy DimensÃ£o em Y
 */
BLauLib.Window = function(nel, titulo, bdcontent, dimx, dimy) {
	var nel = nel;
	this.dx = null;
	this.drag = false;
	this.dy = null;
	if (dimx && dimy) {
		dx = Math.max(dimx, BLauLib.Window.MIN_WIDTH);
		dy = Math.max(dimy, BLauLib.Window.MIN_HEIGHT);
	} else {
		dx = 300;
		dy = 100;
	}
	this.titulo = titulo;
	if (!nel) {
		nel = BLauLib.Window.COUNT;
		BLauLib.Window.COUNT++;
	}

	// contentor
	this.contentor = $$("div");

	// topbar
	this.tbbar = $$("div");
	imgclose = $$("img");
	// tabelatop
	var tbartable = $$("table");
	tbartable.className = "tbwindow";
	// tbartable.setWidth(dx);

	// titulo
	this.divT = $$("div");
	this.divT.innerHTML = this.titulo;
	this.divT.className = "titleheader";

	// divImgClose
	var divImgClose = $$("div");
	divImgClose.className = "imgclose";

	// corpo
	this.bd = $$("div");
	this.bd.className = "wcontent";

	this.contentor.className = "wmain";
	this.contentor.id = "wd_" + nel;
	this.contentor.setWidth(dx);
	var obj = this.contentor;
	var tbb = this.tbbar;
	// top bar
	this.tbbar.className = "wheader";
	this.tbbar.id = "tpbar_" + nel;
	// this.tbbar.setHeight(BLauLib.Window.TBAR_HEIGHT);

	imgclose.id = "imgclose_" + nel;
	imgclose.src = BLauLib.Window.IMGCLOSE;
	var evimgclose = function(ev) {
		var el = HElement.get(obj);
		var onimgclose = function() {
			el.parentNode.removeChild(el);
		};
		el.desvanece(0.2, onimgclose);
	};

	this.bd.className = "wcontent";
	this.bd.id = "bd_" + nel;
	this.bd.style.minHeight = dy + "px";
	this.bd.innerHTML = bdcontent;

	// adiciona os elementos ao top bar
	this.tbbar.appendChild(this.divT);
	divImgClose.appendChild(imgclose);
	this.tbbar.appendChild(divImgClose);

	// eventos
	var isto = this;
	this.tbbar.onmousedown = function(e) {
		e = e ? e : window.event;
		isto.drag = true;
		var elH = HElement.get(obj);
		var hD = HElement.get(tbb);
		var pnt = elH.startDrag(e.clientX, e.clientY, null);
	};

	this.tbbar.onmouseup = function() {
		document.onmousemove = null;
		isto.drag = false;
	};

	imgclose.onmouseup = evimgclose;
	this.contentor.appendChild(this.tbbar);
	this.contentor.appendChild(this.bd);
};

/**
 * MÃ©todo que devolve o div contentor da janela
 */
BLauLib.Window.prototype.getContentor = function() {
	return this.contentor;
};

/**
 * MÃ©todo que atribui uma determinada transparÃªncia Ã  janela
 * 
 * @param {Number}
 *            val TransparÃªncia, valor entre 0 e 100
 */
BLauLib.Window.prototype.setAlpha = function(val) {
	this.contentor.setAlpha(val);
};

/**
 * MÃ©todo que permite especificar o conteÃºdo do contentor da janela
 * 
 * @param {String}
 *            val String contendo o HTML que irÃ¡ ficar interno ao contentor da
 *            janela
 */
BLauLib.Window.prototype.setBodyContent = function(val) {
	this.bd.innerHTML = val;
};

/**
 * MÃ©todo que permite especificar o conteÃºdo da barra de tÃ­tulo da janela
 * 
 * @param {String}
 *            titulo HTML com o conteÃºdo a passar para a janela de tÃ­tulo
 */
BLauLib.Window.prototype.setTitle = function(titulo) {
	this.divT.innerHTML = titulo;
};
/**
 * Objecto Canvas que encapsular um conjunto de funcionalidades a operar sobre o
 * objecto canvas
 * 
 * @classDescription Neste objecto pretende-se encapsular um conjunto de
 *                   funcionalidades que irÃ£o operar sob a tag canvas. Este
 *                   objecto consiste numa pequena API para automatizar algumas
 *                   ferramentas e funcionalidades de computaÃ§Ã£o visual que se
 *                   pode efectuar recorrendo Ã  especificaÃ§Ã£o HTML5
 * @param {String}
 *            id identificador do objecto canvas
 */
BLauLib.Canvas = function(id) {
	this.canvas = $(id);
	if (this.canvas && this.canvas.getContext) {
		this.c = this.canvas.getContext("2d");
	} else
		throw "O browser nÃ£o suporta o objecto canvas";
};

BLauLib.Canvas.setPixel = function(imgdata, x, y, r, g, b, a) {
	base = (x + y * imgdata.width) * 4;
	imgdata.data[base + 0] = r;
	imgdata.data[base + 1] = g;
	imgdata.data[base + 2] = b;
	imgdata.data[base + 3] = a;
};
/**
 * @classDescription Este objecto representa uma classe vector que contem um conjunto de mÃ©todos
 * e propriedades para implementaÃ§Ã£o de calculo vectorial
 */
BLauLib.Vector2D = function(x, y) {
	this.x = x;
	this.y = y;
};

BLauLib.Vector2D.TRESHOLD = 15;

BLauLib.Vector2D.prototype.magnitude = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y);
};

BLauLib.Vector2D.prototype.simetrico = function() {
	return new BLauLib.Vector2D(-this.x, -this.y);
};

BLauLib.Vector2D.prototype.getAlpha = function() {
	var m = this.magnitude();
	var arc = this.x / m;
	if (this.x >= 0 && this.y >= 0) // 1 quadrante
		return Math.acos(arc);
	if (this.x < 0 && this.y >= 0) // 2 quadrante
		return Math.PI - Math.acos(-arc);
	if (this.x < 0 && this.y <= 0) // 3 quadrante
		return Math.PI + Math.acos(-arc);
	return 2 * Math.PI - Math.acos(arc);
};

BLauLib.Vector2D.prototype.toString = function() {
	return "{x:" + this.x + ",y:" + this.y + "}";
};

BLauLib.Math = {};
BLauLib.Math.DegToRad = function(deg) {
	return Math.PI / 180 * deg;
};

BLauLib.Vector2D.prototype.rotate = function(beta) {
	var angfinal = this.getAlpha() + beta;
	console.log("A:" + angfinal);
	var mg = this.magnitude();
	var xt = mg * Math.cos(angfinal);
	var yt = mg * Math.sin(angfinal);
	this.x = Number(xt.toFixed(BLauLib.Vector2D.TRESHOLD));
	this.y = Number(yt.toFixed(BLauLib.Vector2D.TRESHOLD));
};

BLauLib.Vector2D.prototype.MEscalar = function(escalar) {
	this.x = this.x * escalar;
	this.y = this.y * escalar;
};

BLauLib.Vector2D.prototype.normalizado = function() {
	var mag = this.magnitude();
	return new BLauLib.Vector2D(this.x / mag, this.y / mag);
}

/**
 * MÃ©todo que especifica a funÃ§Ã£o que serÃ¡ executada quando se efectua um
 * varrimento da imagem pixel por pixel. A funÃ§Ã£o enviada para o mÃ©todo serÃ¡
 * invocada para todos os valores de pixel.
 * 
 * @see #inverte
 * @see #noiseImage
 * @see #blackWhiteNoise
 * @see #Threshold
 * @param {Function}
 *            func FunÃ§Ã£o callback
 * @param {Object}
 *            args Argumentos adicionais para a funÃ§Ã£o callback
 */
BLauLib.Canvas.prototype._ppixelCallback = function(func, args) {
	var imgd = this.c.getImageData(0, 0, this.canvas.width, this.canvas.height);
	var pixs = imgd.data;
	var n = pixs.length;
	var sm = 0;
	for ( var i = 0; i < n; i += 4) {
		var arr = func(pixs[i], pixs[i + 1], pixs[i + 2], pixs[i + 3], args);
		pixs[i] = arr[0];
		pixs[i + 1] = arr[1];
		pixs[i + 2] = arr[2];
		pixs[i + 3] = arr[3];
	}
	this.c.putImageData(imgd, 0, 0);
};

/**
 * MÃ©todo que efectua uma inversÃ£o de cor
 */
BLauLib.Canvas.prototype.inverte = function() {
	this._ppixelCallback(function(r, g, b, a) {
		return [ 255 - r, 255 - g, 255 - b, a ];
	}, null);
};

/**
 * Converte uma string para uma string de representaÃ§Ã£o hexadecimal
 * 
 * @return {String} String com a representaÃ§Ã£o hexadecimal
 */
String.prototype.Hexify = function() {
	var strout = "";
	for ( var i = 0; i < this.length; i++) {
		strout += "\\x" + this.charCodeAt(i).DecToHex();
	}
	return strout;
};

/**
 * MÃ©todo que transforma uma string de codigos hexadecimais na sua representaÃ§Ã£o
 * de caracteres
 * 
 * @return {String} Devolve a string original
 */
String.prototype.DHexify = function() {
	var arrCods = this.split("\\x");
	var strout = "";
	for ( var i = 1; i <= this.length; i++) {
		strout += String.fromCharCode(parseInt(arrCods[i], 16));
	}
	return strout;
};

/**
 * Converte um nÃºmero Decimal para a sua representaÃ§Ã£o Hexadecimal
 * 
 * @return {Number} representaÃ§Ã£o hexadecimal
 */
Number.prototype.DecToHex = function() {
	return this.toString(16);
};

/**
 * Converte um nÃºmero Hexadecimal para a sua representaÃ§Ã£o Decimal
 * 
 * @return {Number} representaÃ§Ã£o Decimal
 */
Number.prototype.HexToDec = function() {
	return parseInt(this, 16);
};

/**
 * Preenche a imagem a ruido com cores
 * 
 * @param {Number}
 *            alpha parametro de transparÃªncia
 */
BLauLib.Canvas.prototype.noiseImage = function(alpha) {
	this._ppixelCallback(function() {
		if (!arguments[4])
			return [ Math.floor(Math.random() * 255),
					Math.floor(Math.random() * 255),
					Math.floor(Math.random() * 255),
					Math.floor(Math.random() * 100) ];
		return [ Math.floor(Math.random() * 255),
				Math.floor(Math.random() * 255),
				Math.floor(Math.random() * 255), arguments[4] ];
	}, alpha);
};

/**
 * Preenche a imagem a ruido a preto e branco
 */
BLauLib.Canvas.prototype.blackWhiteNoise = function() {
	this._ppixelCallback(function() {
		if (Math.random() > 0.5)
			return [ 255, 255, 255, 100 ];
		return [ 0, 0, 0, 100 ];
	}, null);
};

/*******************************************************************************
 * Aplica threshold na imagem
 * 
 * @param {Number}
 *            treshold Limite de threshold
 */
BLauLib.Canvas.prototype.Threshold = function(tresh) {
	this._ppixelCallback(function(px1, px2, px3, alpha, tr) {
		var arr = [];
		sm = (px1 + px2 + px3) / 3;
		if (sm < tr)
			arr[0] = arr[1] = arr[2] = 0;
		else
			arr[0] = arr[1] = arr[2] = 255;
		arr[3] = alpha;
		return arr;
	}, tresh);
};

/**
 * MÃ©todo que carrega uma imagem para o objecto canvas efectuando um
 * redimensionamento a partir do seu comprimento mÃ¡ximo
 * 
 * @param {String}
 *            src EndereÃ§o da imagem
 * @param {Number}
 *            xmax Comprimento mÃ¡ximo da imagem
 */
BLauLib.Canvas.prototype.loadScaledXImage = function(src, xmax) {
	var img = new Image();
	var sfac = 1;
	img.src = src;
	if (xmax && img.width > xmax) {
		sfac = xmax / img.width;
		img.width = img.width * sfac;
		img.height = img.height * sfac;
	}
	this.canvas.width = img.width;
	this.canvas.height = img.height;
	this.c.drawImage(img, 0, 0, img.width, img.height);
	this.c.scale(sfac, sfac);
};

/**
 * MÃ©todo que carrega uma imagem para o objecto canvas efectuando um
 * redimensionamento a partir da sua altura mÃ¡xima
 * 
 * @param {String}
 *            src EndereÃ§o da imagem
 * @param {Number}
 *            xmax Altura mÃ¡xima da imagem
 */
BLauLib.Canvas.prototype.loadScaledYImage = function(src, ymax) {
	var img = new Image();
	var sfac = 1;
	img.src = src;
	if (xmax && img.width > ymax) {
		try {
			sfac = ymax / img.height;
		} catch (e) {
		}
		;
		img.width = img.width * sfac;
		img.height = img.height * sfac;
	}
	this.canvas.width = img.width;
	this.canvas.height = img.height;
	this.c.drawImage(img, 0, 0, img.width, img.height);
	this.c.scale(sfac, sfac);
};

HOSTNAME="";
DIR_IMAGENS="";
BLauLib.Window.COUNT = 0;
BLauLib.Window.TBAR_HEIGHT = 25;
BLauLib.Window.BBAR_HEIGHT = 25;
BLauLib.Window.MIN_HEIGHT = 100;
BLauLib.Window.MIN_WIDTH = 100;
BLauLib.Window.IMGCLOSE = HOSTNAME + DIR_IMAGENS + "close16.png";
BLauLib.Window.IMGRESIZE = HOSTNAME + DIR_IMAGENS + "resze.png";

BLauLib.Window.width = function() {
	return $('$html')[0].clientWidth;
};

BLauLib.Window.height = function() {
	return $('$html')[0].clientHeight;
};
BLauLib.Window.scrX = function() {
	return $('$html')[0].scrollLeft;
};

BLauLib.Window.scrY = function() {
	return $('$html')[0].scrollTop;
};

BLauLib.MsgBox = function(tipoMsg, msg, titulo) {
	BLauLib.Window.apply(this,
			[ "msg" + BLauLib.Window.COUNT, titulo, 400, 100 ]);
	this.bd.innerHTML = msg;
	return this.contentor;
};
/**
 * MÃ©todo que efectua a transicao entre dois niveis de transparencia
 * 
 * @param {Number}
 *            alphaIni Percentagem de opacidade inicial
 * @param {Number}
 *            alphaFin Percentagem de opacidade final
 * @param {Number}
 *            seg Numero em segundos de duracao da transicao
 * @see #desvanece
 * @see #aparece
 * @see #getAlpha
 * @see #setAlpha
 */
HElement.prototype.transicaoAlpha = function(alphaIni, alphaFin, seg, callback) {
	if (!this.ontransition) {
		this.ontransition = true;
		var cresc = true;
		var transita = true;
		if (alphaIni > alphaFin)
			cresc = false;
		var passo = (alphaFin - alphaIni) / (seg * 24);
		var alphaAct = alphaIni;
		var obj = this;
		var act = function() {
			if ((cresc === true && alphaAct > alphaFin)
					|| (cresc === false && alphaAct < alphaFin)) {
				transita = false;
				if (alphaAct > 100) {
					obj.setAlpha(100);
				}
				if (alphaAct < 0) {
					obj.setAlpha(0);
				}
				obj.ontransition = false;
				clearInterval(i);
				if (callback != null) {
					callback();
				}
			} else {
				alphaAct += passo;
				obj.setAlpha(alphaAct);
			}
		};
		if (transita)
			var i = setInterval(act, 1000 / 60);
	}
};

/**
 * MÃ©todo que remove um elemento filho a partir do seu identificador
 * 
 * @param {String}
 *            id Identificador do elemento a remover
 */
HElement.prototype.removeChildById = function(id) {
	var cnt = this.childElementCount;
	var filho = null;
	for ( var i = 0; i < cnt; i++) {
		filho = this[i];
		if (filho.id === id) {
			this.removeChild(filho);
			cnt--;
		}
	}
	return this;
};

/**
 * MÃ©todo que devolve o atributo do elemento a partir do seu identificador
 * 
 * @param {String}
 *            attribute Identificador do atributo
 * @return {Attribute} Elemento do tipo atributo
 */
HElement.prototype.getAttribute = function(attribute) {
	if (attribute == "class")
		attribute = "className";
	if (attribute == "for")
		attribute = "htmlFor";
	return this[attribute];
};

/**
 * Mecanismo responsavel por efectuar a troca de dois elementos Este metodo esta
 * em fase de testes
 * 
 * @param {HElement}
 *            el1 Elemento A
 * @param {HElement}
 *            el2 Elemento B
 */
HElement.swap = function(el1, el2) {
	var p1 = el1.parentNode;
	var p2 = el2.parentNode;
	p1.insertBefore(el2.cloneNode(true), el1);
	p2.insertBefore(el1.cloneNode(true), el2);
	p1.removeChild(el1);
	p2.removeChild(el2);
};

/**
 * Metodo que especifica o valor para um dado atributo Metodo em
 * desenvolvimento. Sempre que hajam algumas incompatibilidades de browser
 * detectadas na especificacao de atributos deve-se alterar esta funcao para
 * encapsular as diferencas
 * 
 * @param {String}
 *            attribute Valor
 * @param {String}
 *            value Valor que se pretende associar ao atributo
 */
HElement.prototype.setAttribute = function(attribute, value) {
	if (attribute == "class")
		attribute = "className";
	if (attribute == "for")
		attribute = "htmlFor";
	this[attribute] = value;
};

/**
 * MÃ©todo que especifica valores a atributos
 * 
 * @param {String}
 *            atr Nome do atributo
 * @param {Object}
 *            val Valor do atributo
 */
HElement.prototype.set = function(atr, val) {
	if(arguments.length==2)
		this.setAttribute(atr, val);
	if(arguments.length==1){
		var arg=arguments[0];
		var argKeys=arg.getPropertiesKeys();
		for(var i=0;i<argKeys.length;i++){
			this.setAttribute(argKeys[i],arg[argKeys[i]]);
		}
	}
};

/**
 * MÃ©todo que adiciona um novo elemento filho ou um conjunto de elementos
 * 
 * @param {HElement}
 *            arg Elemento filho
 */
HElement.prototype.add = function() {
	if (arguments.length == 1 && BLauLib.isArray(arguments[0])) {
		var arg = arguments[0];
		for ( var i = 0; i < arg.length; i++) {
			this.appendChild(arg[i]);
		}
	} else {
		for ( var i = 0; i < arguments.length; i++)
			this.appendChild(arguments[i]);
	}
};

/**
 * MÃ©todo que efectua a conversao de um determinado elemento para a estrutura
 * HElement
 * 
 * @param {Element}
 *            ele Objecto do tipo Element a converter
 * @return {HElement} Objecto do tipo HElemento equivalente ao elemento
 *         fornecido.
 */
HElement.get = function(ele) {
	var el;
	if (typeof (ele) == 'undefined')
		return null;
	if (typeof (ele) == "NodeList") {
		var cnt = ele.length;
		var out = [];
		for ( var i = 0; i < cnt; i++) {
			out[i] = HElement.get(ele[i]);
		}
		return out;
	}
	if (typeof (ele) == "number") {
		return HElement.get(this.childNodes[ele]);
	}
	if (typeof (ele) == 'string')
		el = document.getElementById(ele);
	else
		el = ele;
	var interf = new HElement();
	for (metodo in interf) {
		// so assina se nÃƒÂ£o estiver definido
		if (el[metodo] == undefined)
			try {
				el[metodo] = interf[metodo];
			} catch (e) {
			}
	}
	return el;
};

/**
 * MÃ©todo que desabilita um elemento
 * 
 * @param {Boolean}
 *            val True para desabilitar, false para habilitar
 * @param {Boolean}
 *            recurs Recursivo ou nÃ£o recursivo
 */
HElement.prototype.disable = function(val, recurs) {
	try {
		this.disabled = val ? true : false;
	} catch (e) {
	}
	if (recurs) {
		var cmp = this.childNodes.length;
		var hel = null;
		for ( var i = 0; i < cmp; i++) {
			hel = HElement.get(this.childNodes[i]);
			if (hel.disable)
				hel.disable(val, recurs);
		}
	}
};

/**
 * MÃ©todo que especifica o valor do campo innerText (wrapper)
 * @param {String} Texto a passar para o objecto
 */
HElement.prototype.text=function(txt){
	this.innerText=txt;
}

/**
 * MÃ©todo que especifica o valor do campo innerHTML (wrapper)
 * @param {String} String com o codigo html a ser assinado
 */
HElement.prototype.html=function(htmlString){
	this.innerHTML=htmlString
}

/**
 * Devolve o nÃºmero de filhos de um HElement
 * 
 * @return {Number} NÃºmero de filhos de um HElement
 */
HElement.prototype.length = function() {
	return this.childNodes.length;
};

/**
 * Devolve um elemento presente num HElement
 * 
 * @param {Object}
 *            ele Objecto
 * @return {HElement}
 */
HElement.prototype.get = function(ele) {
	if (arguments.length == 0)
		return this.innerHTML;
	if (typeof (ele) == 'string')
		idel = ele;
	else
		idel = ele.id;
	if (idel.charAt(0) == '#') {
		if (this.getElementsByClassName) {
			return HElement.get(document.getElementsByClassName(idel.substr(1,
					idel.length)));
		} else {
			return HElement.get(getByClassName(idel.substr(1, idel.length)));
		}
	}
	if (idel.charAt(0) == '$') {
		return HElement.get(this.getElementsByTagName(idel.substr(1,
				idel.length)));
	}

	return HElement.get(document.getElementById(idel));
};

HElement.prototype.setStyle = function(prop, val) {
	var st = this.style;
	switch (prop) {
	case "float":
		if (!BLauLib.isUndefined(st["float"])) {// chrome
			st["float"] = val;
		}
		if (!BLauLib.isUndefined(st["styleFloat"])) {
			st["styleFloat"] = val;
		}
		if (!BLauLib.isUndefined(st["cssFloat"])) {
			st["cssFloat"] = val;
		}
	default:
		st[prop] = val;
	}
};

/**
 * Extende o metodo createElement para poder extender propriedades a elementos
 * do IE
 * 
 * @param {String}
 *            tagName Nome de tag do objecto a criar
 */

HElement.createElement = function(tagName) {
	var element = document.createElement(tagName);
	var interf = new HElement();
	for (methodo in interf)
		element[methodo] = interf[methodo];
	return element;
};
/**
 * MÃ©todo que remove elementos filhos a partir da sua posiÃ§Ã£o ou valor
 * 
 * @param {Number,Object}
 *            val
 */
HElement.prototype.clear = function(val) {
	if (arguments.length == 0) {
		var ln = this.childNodes.length;
		for ( var i = 0; i < ln; i++) {
			this.removeChild(this.childNodes[0]);
		}
	} else {
		if (typeof (val) == "number") {
			this.removeChild(this.childNodes[val]);
			return this;
		}
		this.removeChild(val);
	}
	return this;
};

HElement.prototype.remove = function(el) {
	this.removeChild(el);
};

HElement.dragElements = [];

/**
 * Nao esta definido porque entra em conflito com o jQuery
 * 
 * Object.prototype.tipo=function() { return "objecto"; }
 */
Boolean.prototype.tipo = function() {
	return "booleano";
};

var utils = function() {
	this.parseTipo = function(tipo, objName, val) {
		var s = "";
		if (tipo == "booleano")
			s += this.parseBool(val);
		else if (tipo == "numero")
			s += this.parseNumber(val);
		else if (tipo == "string")
			s += this.parseString(val);
		else if (tipo == "array")
			s += this.parseArray(val, "");
		else
			s += this.parseObj(val, "");
		return s;
	};

	this.parseObj = function(obj, str) {
		str += "{";
		var k = 0;
		var o = null;
		for (o in obj) {
			if (obj[o] == undefined) {
				if (k == 0)
					str += '"' + o + '":undefined';
				else {
					str += ',"' + o + '":undefined';
				}
				k++;
			} else if (obj[o] == null) {
				if (k == 0) {
					str += '"' + o + '":null';
				} else {
					str += '"' + o + '":null';
				}
			} else if (obj.propertyIsEnumerable(o)
					&& typeof (obj[o].tipo) != "undefined") {
				if (k == 0)
					str += '"' + o + '":'
							+ this.parseTipo(obj[o].tipo(), o, obj[o]);
				else {
					str += ',"' + o + '":'
							+ this.parseTipo(obj[o].tipo(), o, obj[o]);
				}
				k++;
			} else {
				if (obj.propertyIsEnumerable(o)) {
					if (k == 0)
						str += '"' + o + '":' + this.parseObj(obj[o], "");
					else
						str += ',"' + o + '":' + this.parseObj(obj[o], "");
					k++;
				}
			}
		}
		return str += "}";
	};
	this.parseArray = function(obj, str) {
		str += "[";
		var k = 0;
		var o = null;
		for (o in obj) {
			if (obj[o] == undefined) {
				if (k === 0)
					str += '"' + o + '":undefined';
				else {
					str += ',"' + '"' + o + '":undefined';
				}
				k++;
			} else if (obj[o] == null) {
				if (k == 0) {
					str += '"' + o + '":null';
				} else {
					str += '"' + o + '":null';
				}
			} else if (obj.propertyIsEnumerable(o)
					&& typeof (obj[o].tipo) != "undefined") {
				if (k == 0)
					str += this.parseTipo(obj[o].tipo(), o, obj[o]);
				else {
					str += "," + this.parseTipo(obj[o].tipo(), o, obj[o]);
				}
				k++;
			} else {
				if (obj.propertyIsEnumerable(o)) {
					if (k == 0)
						str += this.parseObj(obj[o], "");
					else
						str += "," + this.parseObj(obj[o], "");
					k++;
				}
			}
		}
		return str += "]";
	};
	this.parseNumber = function(objVal) {
		var s = objVal;
		return s;
	};
	this.parseString = function(objVal) {
		var s = '"' + objVal + '"';
		return s;
	};
};

utils.prototype.parseBool = function(val) {
	if (val)
		return "true";
	return "false";
};

HElement.getFlashMovie = function(movieName) {
	var isIE = navigator.appName.indexOf("Microsoft") != -1;
	return (isIE) ? window[movieName] : document[movieName];
};

/**
 * Objecto com um conjunto de funcionalidades para gestÃ£o de eventos
 * 
 * @classDescription Para evitar que os eventos de rato e teclado associados ao
 *                   elemento document sejam reassinados causando bugs nas
 *                   aplicaÃ§Ãµes foi criado este objecto para encapsular a
 *                   funcionalidades referidas. Aqui encontramos um mecanismo de
 *                   lista. Para cada evento existe uma lista com os mÃ©todos a
 *                   invocar quando este Ã© accionado. Desta forma pode-se ter
 *                   mais do que uma funÃ§Ã£o associada aos vÃ¡rios eventos
 *                   disponÃ­veis
 */
BLauLib.Events = {
	loadwindow : [],
	mousemovewindow : [],
	mousedownwindow : [],
	mousemovedocument : [],
	mousedowndocument : [],
	addEvent : function(funcao, evento) {
		var evList = this[evento];
		evList[evList.length] = funcao;
	},
	clearEvents : function(evento) {
		if (this[evento])
			this[evento] = [];
	},
	WindowLoad : "loadwindow",
	WindowMouseMove : "mousemovewindow",
	WindowMouseDown : "mousedownwindow",
	DocumentMouseMove : "mousemovedocument",
	DocumentMouseDown : "mousedowndocument"
};

/**
 * Reeescreve o evento window.onload para que este suporte mais do que um evento
 */
window.onload = function(ev) {
	for ( var i = 0; i < BLauLib.Events.loadwindow.length; i++) {
		BLauLib.Events.loadwindow[i](ev);
	}
};

/**
 * Reescreve o evento onmousemove para que este suporte mais do que um evento
 */
window.onmousemove = function(ev) {
	for ( var i = 0; i < BLauLib.Events.mousemovewindow.length; i++) {
		BLauLib.Events.mousemovewindow[i](ev);
	}
};

window.onmousedown = function(ev) {
	for ( var i = 0; i < BLauLib.Events.mousedownwindow.length; i++) {
		BLauLib.Events.mousedownwindow[i](ev);
	}
};

document.onmousemove = function(ev) {
	for ( var i = 0; i < BLauLib.Events.mousemovedocument.length; i++) {
		BLauLib.Events.mousemovedocument[i](ev);
	}
};

document.onmousedown = function(ev) {
	for ( var i = 0; i < BLauLib.Events.mousedowndocument.length; i++) {
		BLauLib.Events.mousedowndocument[i](ev);
	}
};

/**
 * Objecto que contem um conjunto de metodos de validaÃ§Ã£o de expressÃµes
 * regulares para as principais entradas de formulÃ¡rio
 */
BLauLib.Valida = {
	numerico : function(val) {
		return isFinite(val);
	},
	maxchar : function(val, maxchar) {
		return val.valida("^[a-zA-Z0-9]{0," + maxchar + "}$");
	},
	codPostalA : function(val) {
		return val.valida(/^[0-9]{4}$/);
	},
	codPostalB : function(val) {
		return val.valida(/^[0-9]{3}$/);
	},
	email : function(val) {
		return val.valida(/^[a-zA-Z0-9_.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
	},
	webpage : function(val) {
		return val.valida(/^(http:\/\/)?[a-zA-Z0-9.]+\.[a-zA-Z]{2,4}(.)+$/);
	},
	telefone : function(val) {
		return val.valida(/^([0-9]{0,3})?[0-9]{9}$/);
	}
};
/**
 * MÃ©todo que converte uma string json para o seu correspondente objecto
 */
BLauLib.FromJSON = function(a) {
	if (JSON.parse)
		return JSON.parse(a);
	return eval('(' + a + ')');
};

BLauLib.isFunction = function(obj) {
	return (typeof obj == "function");
};

BLauLib.isString = function(obj) {
	return (typeof obj == "string");
};

BLauLib.isUndefined = function(obj) {
	return (typeof obj == "undefined");
};

BLauLib.isUndefOrNull=function(obj){
	return (typeof obj=="undefined" || obj===null);
};

BLauLib.isNull = function(obj) {
	return (obj == null);
};

BLauLib.isArray = function(obj) {
	return BLauLib.isUndefined(obj) || BLauLib.isNull(obj) ? false
			: (obj.constructor == Array);
};

/**
 * MÃ©todo que converte um objecto para a sua representaÃ§Ã£o JSON
 * 
 * @return {String} RepresentaÃ§Ã£o JSON do objecto
 */
Object.prototype.toJSON = function() {
	var obj = this;
	var t = typeof (obj);
	if (t != "object" || obj === null) {
		// simple data type
		if (t == "string")
			obj = '"' + obj + '"';
		return String(obj);
	} else {
		// recurse array or object
		var n, v, json = [], arr = (obj && obj.constructor == Array);
		for (n in obj) {
			v = obj[n];
			t = typeof (v);
			if (t != "function") {
				if (t == "string")
					v = '"' + v + '"';
				else if (t == "object" && v !== null)
					v = v.toJSON();
				json.push((arr ? "" : '"' + n + '":') + String(v));
			}
		}
		return (arr ? "[" : "{") + json + (arr ? "]" : "}");
	}
};
/**
 * MÃ©todo que codifica uma string para uma outra que consiste na sequencia de
 * numeros representando o caracter sob a numeraÃ§Ã£o ascii separados por um
 * caracter especial
 * 
 * @param {Object}
 *            caracterseparador Caracter de separaÃ§Ã£o
 */
String.prototype.toUnicodeArray = function(caracterseparador) {
	var i = 0;
	var stB = new StringBuilder("");
	for (i = 0; i < this.length; i++) {
		if (i == 0)
			stB.append(String(this.charCodeAt(i)));
		else
			stB.append(caracterseparador + this.charCodeAt(i));
	}
	return stB.toString();
};
/**
 * Metodo que verifica se a string e um endereco de email
 * 
 * @return {@link Boolean} Verdadeiro caso a string seja um endereco de email,
 *         falso caso contrario
 */
String.prototype.isEmail = function() {
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return emailPattern.test(this);
};

/**
 * MÃ©todo que transforma uma string codificada contendo os codigos unicode da
 * string separados por um caracter separador. para o seu valor descodificado
 * 
 * @param {String}
 *            caracter separador
 * @return {String} String correspondente Ãƒ dada pela codificaÃ§Ã£o unicode
 */
String.prototype.fromUnicodeArray = function(caracterseparador) {
	var arrS = this.split(caracterseparador);
	var strOut = "";
	for (i = 0; i < arrS.length; i++) {
		strOut += String.fromCharCode(arrS[i]);
	}
	return strOut;
};

/**
 * MÃ©todo que codifica uma string em formato UTF-8
 * 
 * @return {String} String no formato UTF-8
 */
String.prototype.encodeUTF8 = function() {
	var string = this.replace(/\r\n/g, "\n");
	var utftext = "";

	for ( var n = 0; n < string.length; n++) {

		var c = string.charCodeAt(n);

		if (c < 128) {
			utftext += String.fromCharCode(c);
		} else if ((c > 127) && (c < 2048)) {
			utftext += String.fromCharCode((c >> 6) | 192);
			utftext += String.fromCharCode((c & 63) | 128);
		} else {
			utftext += String.fromCharCode((c >> 12) | 224);
			utftext += String.fromCharCode(((c >> 6) & 63) | 128);
			utftext += String.fromCharCode((c & 63) | 128);
		}
	}
	return utftext;
};

/**
 * MÃ©todo que descodifica uma string do formato UTF-8
 * 
 * @return {String} String descodificada
 */
String.prototype.decodeUTF8 = function() {
	var string = "";
	var i = 0;
	var c = c1 = c2 = 0;

	while (i < this.length) {

		c = this.charCodeAt(i);

		if (c < 128) {
			string += String.fromCharCode(c);
			i++;
		} else if ((c > 191) && (c < 224)) {
			c2 = this.charCodeAt(i + 1);
			string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
			i += 2;
		} else {
			c2 = this.charCodeAt(i + 1);
			c3 = this.charCodeAt(i + 2);
			string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6)
					| (c3 & 63));
			i += 3;
		}
	}
	return string;
};

var Priberam = function() {
	this.descricao = "";
	this.NDIV = 32;
	this.onLoaded = null;
};

var DragHandler = {

	// private property.
	_oElem : null,

	// public method. Attach drag handler to an element.
	attach : function(oElem, dgEl) {
		oElem.onmousedown = DragHandler._dragBegin;
		_dgEl = dgEl;
		// callbacks
		oElem.dragBegin = new Function();
		oElem.drag = new Function();
		oElem.dragEnd = new Function();
		return oElem;
	},

	// private method. Begin drag process.
	_dragBegin : function(e) {
		var oElem = DragHandler._oElem = this;

		if (isNaN(parseInt(oElem.style.left))) {
			oElem.style.left = '0px';
		}
		if (isNaN(parseInt(oElem.style.top))) {
			oElem.style.top = '0px';
		}

		var x = parseInt(oElem.style.left);
		var y = parseInt(oElem.style.top);

		e = e ? e : window.event;
		oElem.mouseX = e.clientX;
		oElem.mouseY = e.clientY;

		oElem.dragBegin(oElem, x, y);

		document.onmousemove = DragHandler._drag;
		document.onmouseup = DragHandler._dragEnd;
		return false;
	},

	// private method. Drag (move) element.
	_drag : function(e) {
		var oElem = DragHandler._oElem;

		var x = parseInt(oElem.style.left);
		var y = parseInt(oElem.style.top);

		e = e ? e : window.event;
		oElem.style.left = x + (e.clientX - oElem.mouseX) + 'px';
		oElem.style.top = y + (e.clientY - oElem.mouseY) + 'px';

		oElem.mouseX = e.clientX;
		oElem.mouseY = e.clientY;

		oElem.drag(oElem, x, y);

		return false;
	},

	// private method. Stop drag process.
	_dragEnd : function() {
		var oElem = DragHandler._oElem;

		var x = parseInt(oElem.style.left);
		var y = parseInt(oElem.style.top);

		oElem.dragEnd(oElem, x, y);

		document.onmousemove = null;
		document.onmouseup = null;
		DragHandler._oElem = null;
		alert("END");
	}
};

Priberam.prototype.get = function(pal) {
	var aj = new BLauLib.Ajax();
	var dc;
	var obj = this;
	aj.addVar("url", "http://www.priberam.pt/dlpo/default.aspx?pal="
			+ encodeURI(pal));
	aj.onLoaded = function() {
		var eltmp = document.createElement('hidden');
		eltmp.innerHTML = aj.text;
		var dvs = eltmp.getElementsByTagName("div");
		obj.descricao = dvs[obj.NDIV].innerHTML.decodeUTF8();
		obj.onLoaded();
	};
	aj.open("POST", "http://localhost/wbservices/wb_loadurl");
	aj.send(aj.encPostVars());
};

/**
 * MÃ©todo que contÃ©m um conjunto de funcionalidades para o processamento de
 * captchas
 * 
 * @classDescription Este objecto pretende fornecer um conjunto de
 *                   funcionalidades de manipulaÃ§Ã£o de imagens gerados pelo
 *                   sistema RECaptcha
 * @param {String}
 *            pubkey Chave pÃºblica
 * @param {String}
 *            privkey Chave privada
 * @author Balhau
 */
var RECaptcha = function(pubkey, privkey) {
	this.publickey = pubkey;
	this.privatekey = privkey;
	this.challenge = "";
	this.challengeURL = RECaptcha.ServerName + "challenge?k=" + this.publickey;
};

/**
 * MÃ©todo que utiliza um script de servidor para guardar imagens geradas pelo
 * serviÃ§o RECaptcha
 * 
 * @param {String}
 *            imgname Nome da imagem que pretendemos guardar
 */
RECaptcha.prototype.saveImage = function(imgname) {
	var aj = new BLauLib.Ajax();
	var obj = this;
	aj.onLoaded = function() {
		var resp = aj.text;
		resp = resp.split(";")[0];
		resp = resp.split(",");
		resp = resp[1].split(":");
		resp = resp[1].replace(/'/gi, "");
		obj.challenge = resp;
		var naj = new BLauLib.Ajax();
		var urlImg = RECaptcha.ServerName + "image?c=" + resp.trim();
		naj.addVar("url", urlImg);
		naj.addVar("imgname", imgname);
		naj.onLoaded = function() {
		};
		naj.callPost(RECaptcha.PHPCallbackFile);
	};
	aj.open("GET", RECaptcha.PHPRedirectFile + "?url=" + this.challengeURL);
	aj.send(null);
};

/**
 * Devolve um array com o valor percentual ocupado por cada valor na respectiva posiÃ§Ã£o
 */
Array.prototype.toPercentArray=function(){
	var soma=0;
	for(var i=0;i<this.length;i++){
		soma+=this[i];
	}
	var out=[];
	for(var i=0;i<this.length;i++){
		out[i]=this[i]/soma;
	}
	return out;
};

Array.equals=function(arr1,arr2){
	if(BLauLib.isUndefOrNull(arr1)||BLauLib.isUndefOrNull(arr2))
		return false;
	if(arr1.length!=arr2.length)
		return false;
	for(var i=0;i<arr1.length;i++){
		if(arr1[i]!==arr2[i])
			return false;
	}
	return true;
};

/**
 * Efectua a soma de um array
 * @return A soma dos elementos contidos no array
 */
Array.prototype.sum=function(){
	var soma=0;
	for(var i=0;i<this.length;i++){
		soma+=this[i];
	}
	return soma;
};

BLauLib.Cor=function(red,green,blue,alpha){
	this.c=[red,green,blue,alpha];
};

BLauLib.Cor.prototype.toString=function(){
	return "rgba("+this.c[0]+","+this.c[1]+","+this.c[2]+","+this.c[3]+")";
};

BLauLib.Cor.randomA=function(){
	return new BLauLib.Cor(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.random());
}; 

BLauLib.Cor.random=function(){
	return new BLauLib.Cor(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255),1);
};
/**
 * Nome do ficheiro que efectua o processamento das imagens geradas pelo
 * mecanismo RECaptcha
 */
RECaptcha.PHPCallbackFile = "save.php";

/**
 * Nome do ficheiro que funciona como proxy para endereÃ§os externos.
 */
RECaptcha.PHPRedirectFile = "redirect.php";

/**
 * EndereÃ§o do serviÃ§o RECaptcha
 */
RECaptcha.ServerName = "http://www.google.com/recaptcha/api/";

/**
 * MÃ©todo que efectua a heranÃ§a para um objecto
 * @param ExtObj Objecto a extender
 * @param BaseObject Objecto base
 * @return void
 */
Function.prototype.extende=function(BaseObject){
	var nobj=function(){};
	nobj.prototype=BaseObject.prototype;
	this.prototype=new nobj();
	this.prototype.constructor=this;
	this.prototype.uber=function(args){BaseObject.prototype.constructor(args);};//BaseObject.prototype.constructor;
}
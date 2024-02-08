if(typeof keyman === 'undefined') {console.log('Keyboard requires KeymanWeb 10.0 or later');if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");} else {KeymanWeb.KR(new Keyboard_romi());}function Keyboard_romi(){this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;this.KI="Keyboard_romi";this.KN="Romi";this.KMINVER="10.0";this.KV={F:' 1em "Arial"',K102:0};this.KV.KLS={"shift-alt": ["~","¢","€","¥","₹","₤","₺","°","₩","‹","›","_","+","","","","Q","W","Ē","Ṙ","Ṫ","Œ","ɣ","ɪ","Ø","ʊ","{","}","№","","","","ə","Š","Ḋ","Ð","Ġ","ʱ","Ž","ɨ","ʋ","≤","≥","","","","","","","Ž","ɛ","Č","V","Æ","Ṅ","ŋ","…","—","≠","","","","","",""],"shift": ["Ā","!","@","#","₨","%","^","&","*","(",")","Ê","X","","","","Ô","Ū","E","R","T","Ī","U","I","O","P","Y","V","̂","","","","A","S","D","F","G","H","J","K","L",":","\"","","","","","","","Z","Š","C","̌","B","N","M","<",">","?","","","","","",""],"alt": ["̃","™","؋","£","$","₹","•","¶","÷","±","∅","-","=","","","","q","w","ē","ṙ","ṫ","œ","̈","̂","ø","ẓ","[","]","|","","","","̄","š","ḋ","ð","ġ","ɦ","ž","ṣ","̵","_","+","","","","","","","ž","̧","č","v","æ","ṅ","̨","-","=","–","","","","","",""],"default": ["ā","1","2","3","4","5","6","7","8","9","0","ê","x","","","","ô","ū","e","r","t","ī","u","i","o","p","y","v","\\","","","","a","s","d","f","g","h","j","k","l",";","'","","","","","","","z","š","c","̇","b","n","m",",",".","/","","","","","",""]};this.KV.BK=(function(x){var e=Array.apply(null,Array(65)).map(String.prototype.valueOf,""),r=[],v,i,m=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];for(i=m.length-1;i>=0;i--)if((v=x[m[i]])||r.length)r=(v?v:e).slice().concat(r);return r})(this.KV.KLS);this.KDU=0;this.KH='';this.KM=0;this.KBVER="1.0";this.KMBM=0x0050;this.KVKL={"tablet":{"displayUnderlying":false,"layer":[{"id":"default","row":[{"id":"1","key":[{"id":"K_1","text":"1"},{"id":"K_2","text":"2"},{"id":"K_3","text":"3"},{"id":"K_4","text":"4"},{"id":"K_5","text":"5"},{"id":"K_6","text":"6"},{"id":"K_7","text":"7"},{"id":"K_8","text":"8"},{"id":"K_9","text":"9"},{"id":"K_0","text":"0"},{"id":"K_HYPHEN","text":"\u00EA"},{"id":"K_EQUAL","text":"x"},{"width":"100","id":"K_BKSP","sp":"1","text":"*BkSp*"}]},{"id":"2","key":[{"id":"K_Q","pad":"75","text":"\u00F4"},{"id":"K_W","text":"\u016B"},{"id":"K_E","text":"e"},{"id":"K_R","text":"r"},{"id":"K_T","text":"t"},{"id":"K_Y","text":"\u012B"},{"id":"K_U","text":"u"},{"id":"K_I","text":"i"},{"id":"K_O","text":"o"},{"id":"K_P","text":"p"},{"id":"K_LBRKT","text":"y"},{"id":"K_RBRKT","text":"v"},{"width":"10","sp":"10"}]},{"id":"3","key":[{"id":"K_BKQUOTE","text":"\u0101"},{"id":"K_A","text":"a"},{"id":"K_S","text":"s"},{"id":"K_D","text":"d"},{"id":"K_F","text":"f"},{"id":"K_G","text":"g"},{"id":"K_H","text":"h"},{"id":"K_J","text":"j"},{"id":"K_K","text":"k"},{"id":"K_L","text":"l"},{"id":"K_COLON","text":";"},{"id":"K_QUOTE","text":"'"},{"id":"K_BKSLASH","text":"\\"}]},{"id":"4","key":[{"width":"160","id":"K_SHIFT","sp":"1","text":"*Shift*"},{"id":"K_oE2"},{"id":"K_Z","text":"z"},{"id":"K_X","text":"\u0161"},{"id":"K_C","text":"c"},{"id":"K_V","text":"\u0307"},{"id":"K_B","text":"b"},{"id":"K_N","text":"n"},{"id":"K_M","text":"m"},{"id":"K_COMMA","text":","},{"id":"K_PERIOD","text":"."},{"id":"K_SLASH","text":"\/"},{"width":"10","sp":"10"}]},{"id":"5","key":[{"nextlayer":"alt","width":"130","id":"K_LCONTROL","sp":"1","text":"alt","sk":[{"nextlayer":"alt","id":"K_LCONTROL","sp":"1","text":"alt"},{"nextlayer":"shift-alt","id":"K_LCONTROL","sp":"1","text":"shift-alt"}]},{"width":"140","id":"K_LOPT","sp":"1","text":"*Menu*"},{"width":"930","id":"K_SPACE"},{"width":"145","id":"K_ENTER","sp":"1","text":"*Enter*"}]}]},{"id":"shift","row":[{"id":"1","key":[{"id":"K_1","text":"!"},{"id":"K_2","text":"@"},{"id":"K_3","text":"#"},{"id":"K_4","text":"\u20A8"},{"id":"K_5","text":"%"},{"id":"K_6","text":"^"},{"id":"K_7","text":"&"},{"id":"K_8","text":"*"},{"id":"K_9","text":"("},{"id":"K_0","text":")"},{"id":"K_HYPHEN","text":"\u00CA"},{"id":"K_EQUAL","text":"X"},{"width":"100","id":"K_BKSP","sp":"1","text":"*BkSp*"}]},{"id":"2","key":[{"id":"K_Q","pad":"75","text":"\u00D4"},{"id":"K_W","text":"\u016A"},{"id":"K_E","text":"E"},{"id":"K_R","text":"R"},{"id":"K_T","text":"T"},{"id":"K_Y","text":"\u012A"},{"id":"K_U","text":"U"},{"id":"K_I","text":"I"},{"id":"K_O","text":"O"},{"id":"K_P","text":"P"},{"id":"K_LBRKT","text":"Y"},{"id":"K_RBRKT","text":"V"},{"width":"10","sp":"10"}]},{"id":"3","key":[{"id":"K_BKQUOTE","text":"\u0100"},{"id":"K_A","text":"A"},{"id":"K_S","text":"S"},{"id":"K_D","text":"D"},{"id":"K_F","text":"F"},{"id":"K_G","text":"G"},{"id":"K_H","text":"H"},{"id":"K_J","text":"J"},{"id":"K_K","text":"K"},{"id":"K_L","text":"L"},{"id":"K_COLON","text":":"},{"id":"K_QUOTE","text":"\""},{"id":"K_BKSLASH","text":"\u0302"}]},{"id":"4","key":[{"width":"160","id":"K_SHIFT","sp":"1","text":"*Shift*"},{"id":"K_oE2"},{"id":"K_Z","text":"Z"},{"id":"K_X","text":"\u0160"},{"id":"K_C","text":"C"},{"id":"K_V","text":"\u030C"},{"id":"K_B","text":"B"},{"id":"K_N","text":"N"},{"id":"K_M","text":"M"},{"id":"K_COMMA","text":"<"},{"id":"K_PERIOD","text":">"},{"id":"K_SLASH","text":"?"},{"width":"10","sp":"10"}]},{"id":"5","key":[{"nextlayer":"alt","width":"130","id":"K_LCONTROL","sp":"1","text":"alt","sk":[{"nextlayer":"alt","id":"K_LCONTROL","sp":"1","text":"alt"},{"nextlayer":"shift-alt","id":"K_LCONTROL","sp":"1","text":"shift-alt"}]},{"width":"140","id":"K_LOPT","sp":"1","text":"*Menu*"},{"width":"930","id":"K_SPACE"},{"width":"145","id":"K_ENTER","sp":"1","text":"*Enter*"}]}]},{"id":"alt","row":[{"id":"1","key":[{"id":"K_1","text":"\u2122"},{"id":"K_2","text":"\u060B"},{"id":"K_3","text":"\u00A3"},{"id":"K_4","text":"$"},{"id":"K_5","text":"\u20B9"},{"id":"K_6","text":"\u2022"},{"id":"K_7","text":"\u00B6"},{"id":"K_8","text":"\u00F7"},{"id":"K_9","text":"\u00B1"},{"id":"K_0","text":"\u2205"},{"id":"K_HYPHEN","text":"-"},{"id":"K_EQUAL","text":"="},{"width":"100","id":"K_BKSP","sp":"1","text":"*BkSp*"}]},{"id":"2","key":[{"id":"K_Q","pad":"75","text":"q"},{"id":"K_W","text":"w"},{"id":"K_E","text":"\u0113"},{"id":"K_R","text":"\u1E59"},{"id":"K_T","text":"\u1E6B"},{"id":"K_Y","text":"\u0153"},{"id":"K_U","text":"\u0308"},{"id":"K_I","text":"\u0902"},{"id":"K_O","text":"\u00F8"},{"id":"K_P","text":"\u1E93"},{"id":"K_LBRKT","text":"["},{"id":"K_RBRKT","text":"]"},{"width":"10","sp":"10"}]},{"id":"3","key":[{"id":"K_BKQUOTE","text":"\u0303"},{"id":"K_A","text":"\u0304"},{"id":"K_S","text":"\u0161"},{"id":"K_D","text":"\u1E0B"},{"id":"K_F","text":"\u00F0"},{"id":"K_G","text":"\u0121"},{"id":"K_H","text":"\u0266"},{"id":"K_J","text":"\u017E"},{"id":"K_K","text":"\u1E63"},{"id":"K_L","text":"\u0335"},{"id":"K_COLON","text":"_"},{"id":"K_QUOTE","text":"+"},{"id":"K_BKSLASH","text":"|"}]},{"id":"4","key":[{"width":"160","id":"K_SHIFT","sp":"1","text":"*Shift*"},{"id":"K_oE2"},{"id":"K_Z","text":"\u017E"},{"id":"K_X","text":"\u0327"},{"id":"K_C","text":"\u010D"},{"id":"K_V","text":"v"},{"id":"K_B","text":"\u00E6"},{"id":"K_N","text":"\u1E45"},{"id":"K_M","text":"\u0328"},{"id":"K_COMMA","text":"-"},{"id":"K_PERIOD","text":"="},{"id":"K_SLASH","text":"\u2013"},{"width":"10","sp":"10"}]},{"id":"5","key":[{"nextlayer":"default","width":"130","id":"K_LCONTROL","sp":"1","text":"default","sk":[{"nextlayer":"shift-alt","id":"K_LCONTROL","sp":"1","text":"shift-alt"}]},{"width":"140","id":"K_LOPT","sp":"1","text":"*Menu*"},{"width":"930","id":"K_SPACE"},{"width":"145","id":"K_ENTER","sp":"1","text":"*Enter*"}]}]},{"id":"shift-alt","row":[{"id":"1","key":[{"id":"K_1","text":"\u00A2"},{"id":"K_2","text":"\u20AC"},{"id":"K_3","text":"\u00A5"},{"id":"K_4","text":"\u20B9"},{"id":"K_5","text":"\u20A4"},{"id":"K_6"},{"id":"K_7"},{"id":"K_8"},{"id":"K_9","text":"\u2039"},{"id":"K_0","text":"\u203A"},{"id":"K_HYPHEN","text":"_"},{"id":"K_EQUAL","text":"+"},{"width":"100","id":"K_BKSP","sp":"1","text":"*BkSp*"}]},{"id":"2","key":[{"id":"K_Q","pad":"75","text":"Q"},{"id":"K_W","text":"W"},{"id":"K_E","text":"\u0112"},{"id":"K_R","text":"\u1E58"},{"id":"K_T","text":"\u1E6A"},{"id":"K_Y","text":"\u0152"},{"id":"K_U","text":"\u0263"},{"id":"K_I","text":"\u026A"},{"id":"K_O","text":"\u00D8"},{"id":"K_P"},{"id":"K_LBRKT","text":"{"},{"id":"K_RBRKT","text":"}"},{"width":"10","sp":"10"}]},{"id":"3","key":[{"id":"K_BKQUOTE"},{"id":"K_A"},{"id":"K_S","text":"\u0160"},{"id":"K_D","text":"\u1E0A"},{"id":"K_F","text":"\u00D0"},{"id":"K_G","text":"\u0120"},{"id":"K_H","text":"\u02B1"},{"id":"K_J","text":"\u017D"},{"id":"K_K"},{"id":"K_L"},{"id":"K_COLON"},{"id":"K_QUOTE"},{"id":"K_BKSLASH"}]},{"id":"4","key":[{"width":"160","id":"K_SHIFT","sp":"1","text":"*Shift*"},{"id":"K_oE2"},{"id":"K_Z","text":"\u017D"},{"id":"K_X"},{"id":"K_C","text":"\u010C"},{"id":"K_V","text":"V"},{"id":"K_B","text":"\u00C6"},{"id":"K_N","text":"\u1E44"},{"id":"K_M"},{"id":"K_COMMA","text":"\u2026"},{"id":"K_PERIOD","text":"\u2014"},{"id":"K_SLASH"},{"width":"10","sp":"10"}]},{"id":"5","key":[{"nextlayer":"default","width":"130","id":"K_LCONTROL","sp":"1","text":"default","sk":[{"nextlayer":"alt","id":"K_LCONTROL","sp":"1","text":"alt"}]},{"width":"140","id":"K_LOPT","sp":"1","text":"*Menu*"},{"width":"930","id":"K_SPACE"},{"width":"145","id":"K_ENTER","sp":"1","text":"*Enter*"}]}]}]}};this.KVER="16.0.145.0";this.KVS=[];this.gs=function(t,e) {return this.g0(t,e);};this.gs=function(t,e) {return this.g0(t,e);};this.g0=function(t,e) {var k=KeymanWeb,r=0,m=0;if(k.KKM(e,16464,49)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"¢");}}else if(k.KKM(e,16400,49)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"!");}}else if(k.KKM(e,16464,222)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"≥");}}else if(k.KKM(e,16400,222)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"\"");}}else if(k.KKM(e,16400,51)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"#");}}else if(k.KKM(e,16464,51)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"¥");}}else if(k.KKM(e,16400,52)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"₨");}}else if(k.KKM(e,16464,52)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"₹");}}else if(k.KKM(e,16400,53)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"%");}}else if(k.KKM(e,16464,53)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"₤");}}else if(k.KKM(e,16464,55)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"°");}}else if(k.KKM(e,16400,55)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"&");}}else if(k.KKM(e,16448,222)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"+");}}else if(k.KKM(e,16384,222)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"'");}}else if(k.KKM(e,16464,57)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"‹");}}else if(k.KKM(e,16400,57)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"(");}}else if(k.KKM(e,16464,48)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"›");}}else if(k.KKM(e,16400,48)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,")");}}else if(k.KKM(e,16464,56)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"₩");}}else if(k.KKM(e,16400,56)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"*");}}else if(k.KKM(e,16464,187)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"+");}}else if(k.KKM(e,16400,187)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"X");}}else if(k.KKM(e,16448,188)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"-");}}else if(k.KKM(e,16384,188)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,",");}}else if(k.KKM(e,16448,189)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"-");}}else if(k.KKM(e,16384,189)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ê");}}else if(k.KKM(e,16448,190)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"=");}}else if(k.KKM(e,16384,190)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,".");}}else if(k.KKM(e,16448,191)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"–");}}else if(k.KKM(e,16384,191)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"/");}}else if(k.KKM(e,16448,48)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"∅");}}else if(k.KKM(e,16384,48)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"0");}}else if(k.KKM(e,16448,49)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"™");}}else if(k.KKM(e,16384,49)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"1");}}else if(k.KKM(e,16448,50)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"؋");}}else if(k.KKM(e,16384,50)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"2");}}else if(k.KKM(e,16448,51)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"£");}}else if(k.KKM(e,16384,51)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"3");}}else if(k.KKM(e,16448,52)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"$");}}else if(k.KKM(e,16384,52)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"4");}}else if(k.KKM(e,16448,53)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"₹");}}else if(k.KKM(e,16384,53)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"5");}}else if(k.KKM(e,16448,54)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"•");}}else if(k.KKM(e,16384,54)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"6");}}else if(k.KKM(e,16448,55)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"¶");}}else if(k.KKM(e,16384,55)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"7");}}else if(k.KKM(e,16448,56)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"÷");}}else if(k.KKM(e,16384,56)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"8");}}else if(k.KKM(e,16448,57)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"±");}}else if(k.KKM(e,16384,57)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"9");}}else if(k.KKM(e,16464,186)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"≤");}}else if(k.KKM(e,16400,186)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,":");}}else if(k.KKM(e,16448,186)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"_");}}else if(k.KKM(e,16384,186)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,";");}}else if(k.KKM(e,16464,188)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"…");}}else if(k.KKM(e,16400,188)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"<");}}else if(k.KKM(e,16448,187)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"=");}}else if(k.KKM(e,16384,187)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"x");}}else if(k.KKM(e,16464,190)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"—");}}else if(k.KKM(e,16400,190)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,">");}}else if(k.KKM(e,16464,191)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"≠");}}else if(k.KKM(e,16400,191)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"?");}}else if(k.KKM(e,16400,50)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"@");}}else if(k.KKM(e,16464,50)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"€");}}else if(k.KKM(e,16464,65)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ə");}}else if(k.KKM(e,16400,65)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"A");}}else if(k.KKM(e,16464,66)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Æ");}}else if(k.KKM(e,16400,66)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"B");}}else if(k.KKM(e,16400,67)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"C");}}else if(k.KKM(e,16464,67)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Č");}}else if(k.KKM(e,16464,68)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ḋ");}}else if(k.KKM(e,16400,68)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"D");}}else if(k.KKM(e,16464,69)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ē");}}else if(k.KKM(e,16400,69)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"E");}}else if(k.KKM(e,16464,70)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ð");}}else if(k.KKM(e,16400,70)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"F");}}else if(k.KKM(e,16464,71)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ġ");}}else if(k.KKM(e,16400,71)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"G");}}else if(k.KKM(e,16464,72)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ʱ");}}else if(k.KKM(e,16400,72)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"H");}}else if(k.KKM(e,16464,73)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ɪ");}}else if(k.KKM(e,16400,73)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"I");}}else if(k.KKM(e,16464,74)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ž");}}else if(k.KKM(e,16400,74)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"J");}}else if(k.KKM(e,16464,75)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ɨ");}}else if(k.KKM(e,16400,75)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"K");}}else if(k.KKM(e,16464,76)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ʋ");}}else if(k.KKM(e,16400,76)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"L");}}else if(k.KKM(e,16464,77)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ŋ");}}else if(k.KKM(e,16400,77)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"M");}}else if(k.KKM(e,16464,78)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ṅ");}}else if(k.KKM(e,16400,78)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"N");}}else if(k.KKM(e,16464,79)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ø");}}else if(k.KKM(e,16400,79)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"O");}}else if(k.KKM(e,16464,80)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ʊ");}}else if(k.KKM(e,16400,80)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"P");}}else if(k.KKM(e,16464,81)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Q");}}else if(k.KKM(e,16400,81)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ô");}}else if(k.KKM(e,16464,82)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ṙ");}}else if(k.KKM(e,16400,82)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"R");}}if(m) {}else if(k.KKM(e,16464,83)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Š");}}else if(k.KKM(e,16400,83)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"S");}}else if(k.KKM(e,16464,84)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ṫ");}}else if(k.KKM(e,16400,84)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"T");}}else if(k.KKM(e,16464,85)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ɣ");}}else if(k.KKM(e,16400,85)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"U");}}else if(k.KKM(e,16464,86)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"V");}}else if(k.KKM(e,16400,86)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"̌");}}else if(k.KKM(e,16464,87)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"W");}}else if(k.KKM(e,16400,87)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ū");}}else if(k.KKM(e,16464,88)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ɛ");}}else if(k.KKM(e,16400,88)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Š");}}else if(k.KKM(e,16464,89)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Œ");}}else if(k.KKM(e,16400,89)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ī");}}else if(k.KKM(e,16464,90)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ž");}}else if(k.KKM(e,16400,90)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Z");}}else if(k.KKM(e,16448,219)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"[");}}else if(k.KKM(e,16384,219)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"y");}}else if(k.KKM(e,16448,220)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"|");}}else if(k.KKM(e,16384,220)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"\\");}}else if(k.KKM(e,16448,221)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"]");}}else if(k.KKM(e,16384,221)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"v");}}else if(k.KKM(e,16464,54)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"₺");}}else if(k.KKM(e,16400,54)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"^");}}else if(k.KKM(e,16464,189)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"_");}}else if(k.KKM(e,16400,189)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ê");}}else if(k.KKM(e,16448,192)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"̃");}}else if(k.KKM(e,16384,192)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ā");}}else if(k.KKM(e,16448,65)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"̄");}}else if(k.KKM(e,16384,65)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"a");}}else if(k.KKM(e,16448,66)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"æ");}}else if(k.KKM(e,16384,66)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"b");}}else if(k.KKM(e,16448,67)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"č");}}else if(k.KKM(e,16384,67)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"c");}}else if(k.KKM(e,16448,68)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ḋ");}}else if(k.KKM(e,16384,68)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"d");}}else if(k.KKM(e,16448,69)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ē");}}else if(k.KKM(e,16384,69)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"e");}}else if(k.KKM(e,16448,70)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ð");}}else if(k.KKM(e,16384,70)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"f");}}else if(k.KKM(e,16448,71)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ġ");}}else if(k.KKM(e,16384,71)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"g");}}else if(k.KKM(e,16448,72)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ɦ");}}else if(k.KKM(e,16384,72)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"h");}}else if(k.KKM(e,16448,73)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"̂");}}else if(k.KKM(e,16384,73)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"i");}}else if(k.KKM(e,16448,74)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ž");}}else if(k.KKM(e,16384,74)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"j");}}else if(k.KKM(e,16448,75)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ṣ");}}else if(k.KKM(e,16384,75)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"k");}}else if(k.KKM(e,16448,76)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"̵");}}else if(k.KKM(e,16384,76)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"l");}}else if(k.KKM(e,16448,77)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"̨");}}else if(k.KKM(e,16384,77)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"m");}}else if(k.KKM(e,16448,78)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ṅ");}}else if(k.KKM(e,16384,78)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"n");}}else if(k.KKM(e,16448,79)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ø");}}else if(k.KKM(e,16384,79)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"o");}}else if(k.KKM(e,16448,80)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ẓ");}}else if(k.KKM(e,16384,80)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"p");}}else if(k.KKM(e,16448,81)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"q");}}else if(k.KKM(e,16384,81)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ô");}}else if(k.KKM(e,16448,82)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ṙ");}}else if(k.KKM(e,16384,82)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"r");}}else if(k.KKM(e,16448,83)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"š");}}else if(k.KKM(e,16384,83)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"s");}}else if(k.KKM(e,16448,84)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ṫ");}}else if(k.KKM(e,16384,84)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"t");}}else if(k.KKM(e,16448,85)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"̈");}}else if(k.KKM(e,16384,85)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"u");}}else if(k.KKM(e,16448,86)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"v");}}else if(k.KKM(e,16384,86)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"̇");}}else if(k.KKM(e,16448,87)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"w");}}else if(k.KKM(e,16384,87)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ū");}}else if(k.KKM(e,16448,88)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"̧");}}else if(k.KKM(e,16384,88)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"š");}}else if(k.KKM(e,16448,89)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"œ");}}else if(k.KKM(e,16384,89)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ī");}}else if(k.KKM(e,16448,90)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ž");}}else if(k.KKM(e,16384,90)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"z");}}else if(k.KKM(e,16464,219)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"{");}}else if(k.KKM(e,16400,219)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Y");}}else if(k.KKM(e,16464,220)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"№");}}else if(k.KKM(e,16400,220)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"̂");}}else if(k.KKM(e,16464,221)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"}");}}else if(k.KKM(e,16400,221)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"V");}}else if(k.KKM(e,16464,192)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"~");}}else if(k.KKM(e,16400,192)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ā");}}return r;};}
# dcc:linkedReport

Im Element *dcc:linkedReport* sind die eindeutigen Identifizierer einer rekursiven 
Kette von vorherigen Kalibrierzertifikaten zu finden. Es kann rekursiv beliebig oft 
aufgerufen werden.

## Baumstruktur

Die Baumstruktur des Elements *dcc:linkedReport* ergibt sich über den Elementtyp
*dcc:hash*. Er hat folgendes Aussehen:

<img src="../../images/hash.png" alt="hash" width="512" />

[Diagrammsoftware](../XSD_diagramviewer.md)

## Struktur im XML-Schema
```xml
<xs:complexType name="hash">
	<xs:sequence>
		<xs:element name="reference" type="dcc:textBlock"/>
		<xs:element name="referenceID" type="xs:string"/>
		<xs:element name="procedure" type="xs:string"/>
		<xs:element name="value" type="xs:string"/>
		<xs:element name="linkedReport" type="dcc:hash" minOccurs="0"/>
	</xs:sequence>
	<xs:attribute name="id" type="xs:ID" use="optional"/>
</xs:complexType>
```

## Ausfüllanweisungen

Weitere Informationen zu den Ausfüllanweisungen sind in dem Unterabschnitt Elemente
zu finden.

### Mindestangaben

Das Element previousReport selbst ist optional. Wenn es ausgefüllt wird, so sind 
im Folgenden werden die Elemente, die auszufüllen sind, in der Überschrift mit einem 
"[R]" (steht für Required) gekennzeichnet. Optional auszufüllende Elemente 
werden mit einem "[O]" gekennzeichnet. 

Es gibt Elemente, die sind in dem einen Anwendungsfall Pflichtfelder und in dem anderen 
Anwendungsfall nicht zwingend auszufüllen. Diese Elemente werden mit [O|R] gekennzeichnet.

### Elemente

#### dcc:reference [R]
Hier erfolgen die Angaben und Beschreibungen zum vorherigen Kalibrierzertifikat, 
idealerweise bereits eines DCC. 

Datentyp: [dcc:textBlock](../auxElements/textBlock.md)

#### dcc:referenceID [R]
Der Identifier (die Kalibrierscheinnummer) des vorherigen Kalibrierzertifikates 
wird hier eingegeben.

Datentyp: [xs:string](https://www.w3.org/TR/xmlschema-2/#string)

#### dcc:procedure [R]
Das Vorgänger-Kalibrierzertifikat wird mit einem Hashwertalgorithmus eindeutig 
identifiziert. Beim DCC erfolgt dies automatisch mit der Anbringung einer digitalen 
Signatur. In dieses Feld wird der Algorithmus genannt, mit dem der Hashwert, dem im 
Element *value* abgelegt ist, berechnet wurde.

Datentyp: [xs:string](https://www.w3.org/TR/xmlschema-2/#string)

#### dcc:value [R]
In diesem Element wird der Hashwert abgelegt. Er wurde mit dem im Element *dcc:procedure* 
genannten Hashwertalgorithmus durch Anwendung auf das Kalibierzertifikat gewonnen.

Datentyp: [xs:string](https://www.w3.org/TR/xmlschema-2/#string)

#### [dcc:linkedReport [O]](linkedReport.md)

Das Element  *dcc:linkedReport* gibt die Möglichkeit, auf das Vor-Vorgängerkalibrierzertifikat 
zu verweisen, die durch diesen DCC ersetzt wurde. Es kann eine Kette von 
Kalibrierzertifikaten angeggeben werden. 

Der Aufbau vom Element *dcc:linkedReport* ist identisch mit dem vom Element *dcc:previousReport*.

### Attribute

#### xs:ID
Dieser Standard dataType von XML wird zur Darstellung einer eindeutigen ID verwendet. Er 
dient der eindeutigen Kennzeichnung des Objektes im DCC. Es wird hier bewusst der Datentyp 
xs:ID verwendet, da hiermit eine Validierung ohne irgendwelche AddOns in verschiedenen 
Tools ermöglicht wird.

Datentyp: [xs:ID](https://www.w3.org/TR/xmlschema-2/#ID)

## Beispiele

### Beispiel 1
Das Vorgänger-Kalibrierzertifikat mit der Kalibrierscheinnummer *4914246* ist ein DCC. 
Es wurde mit dem Hashwertalgorithmus *SHA256* gehasht. Der Hashwert lautet 
*e14f080fcc4a8b2ut879add657d9e66f7896a*.

```xml
<previousReport>
  <reference>
   <content>Das Vorgänger-Kalibrierzertifikat ist ein DCC.</content>
  </reference>
  <referenceID>
    <content>4914246</content>
  </referenceID>
  <procedure>SHA256</procedure>
  <value>e14f080fcc4a8b2ut879add657d9e66f7896a</value>
</previousReport>
```
### Beispiel 2
Wie Beispiel 1, zusätzlich noch mit dem Vor-Vorgänger-Kalibrierzertifikat. Das 
Vor-Vorgänger-Kalibrierzertifikat mit der Kalibrierscheinnummer *5678* ist noch analog 
gewesen. Es wurde mit dem Hashwertalgorithmus *MD5* gehasht. Der Hashwert lautet 
*a8b4568c3ff*.
```xml
<previousReport>
  <reference>
   <content>Das Vorgänger-Kalibrierzertifikat ist ein DCC.</content>
  </reference>
  <referenceID>
    <content>4914246</content>
  </referenceID>
  <procedure>SHA256</procedure>
  <value>e14f080fcc4a8b2ut879add657d9e66f7896a</value>
  <linkedReport>
    <reference>
     <content>Das Vor-Vorgänger-Kalibrierzertifikat ist ein analoges Kalibrierzertifikat.</content>
    </reference>
    <referenceID>
      <content>5678</content>
    </referenceID>
    <procedure>MD5</procedure>
    <value>a8b4568c3ff</value>
  </linkedReport>
</previousReport>
```

----
[^1]: DIN EN ISO/IEC 17025:2018-03 General requirements for the competence of testing 
and calibration laboratories 
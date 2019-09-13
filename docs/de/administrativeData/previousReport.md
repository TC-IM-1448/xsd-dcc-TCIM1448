# dcc:previousReport

Im Element *dcc:previousReport* sind die eindeutigen Identifizierer des vorherigen 
Kalibrierzertifikats zu finden.

## Baumstruktur

Die Baumstruktur des Elements *dcc:previousReport* ergibt sich über den Elementtyp
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

Das Element *dcc:previousReport* ist optional. Wenn es ausgefüllt wird,enthält es Pflichtfelder die wie folgt gekennzeichnet sind.

|[R] <br> Required|[O] <br> Optional|[R\|O]<br>Required \| Optional|
|-|-|-|
|Es handelt sich um ein Pflichtfeld. | Es handelt sich um ein optionales Feld.|Dieses Feld kann je nach Anwendungsfall ein Pflichtfeld sein.|


### Elemente


|Element||Bemerkung|
|-|:---:|-|
|dcc:reference<br>[dcc:textBlock](../auxElements/textBlock.md)|[R]|Hier erfolgen die Angaben und Beschreibungen zum vorherigen Kalibrierzertifikat, idealerweise bereits eines DCC.| 
|dcc:referenceID<br>[xs:string](https://www.w3.org/TR/xmlschema-2/#string)|[R]|Der Identifier (die Kalibrierscheinnummer) des vorherigen Kalibrierzertifikates wird hier eingegeben.|
|dcc:procedure<br>[xs:string](https://www.w3.org/TR/xmlschema-2/#string)|[R]|Das Vorgänger-Kalibrierzertifikat wird mit einem Hashwertalgorithmus eindeutig identifiziert. Beim DCC erfolgt dies automatisch mit der Anbringung einer digitalen Signatur. In dieses Feld wird der Algorithmus genannt, mit dem der Hashwert, dem im Element *dcc:value* abgelegt ist, berechnet wurde.|
|dcc:value<br>[xs:string](https://www.w3.org/TR/xmlschema-2/#string)|[R]|In diesem Element wird der Hashwert abgelegt. Er wurde mit dem im Element *dcc:procedure* genannten Hashwertalgorithmus durch Anwendung auf das Kalibierzertifikat gewonnen.|
|dcc:linkedReport<br>[dcc:linkedReport](../auxElements/linkedReport.md)|[O]|Das Element  *dcc:linkedReport* gibt die Möglichkeit, auf das Vor-Vorgängerkalibrierzertifikat zu verweisen, die durch diesen DCC ersetzt wurde. Es kann eine Kette von Kalibrierzertifikaten angeggeben werden.<br><br>Der Aufbau vom Element *dcc:linkedReport* ist identisch mit dem vom Element *dcc:previousReport*.|

### Attribute

|Attribut|Bemerkung|
|-|-|
|xs:ID<br>[xs:ID](https://www.w3.org/TR/xmlschema-2/#ID)|Dieser Standard dataType von XML wird zur Darstellung einer eindeutigen ID verwendet. Er dient der eindeutigen Kennzeichnung des Objektes im DCC. Es wird hier bewusst der Datentyp xs:ID verwendet, da hiermit eine Validierung ohne irgendwelche AddOns in verschiedenen Tools ermöglicht wird.|


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
		 <content>Das Vor-Vorgänger-Kalibrierzertifikat ist ein analoges 
		 Kalibrierzertifikat.</content>
		</reference>
		<referenceID>
			<content>5678</content>
		</referenceID>
		<procedure>MD5</procedure>
		<value>a8b4568c3ff</value>
	</linkedReport>
</previousReport>
```

[^1]: DIN EN ISO/IEC 17025:2018-03 General requirements for the competence of testing 
and calibration laboratories 
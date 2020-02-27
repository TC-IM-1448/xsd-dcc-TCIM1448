# dcc:contactNotStrict

Der Elementtyp *dcc:contactNotStrict* dient zur Eingabe von Kontaktdaten. Es wird meist aus anderen Elementen heraus aufgerufen. 

## Baumstruktur

Die grobe Baumstruktur des Elementtyps *dcc:contactNotStrict* hat folgendes Aussehen:

<img src="../../images/contactNotStrict_raw.png" alt="contactNotStrict_raw" width="375" />

[Diagrammsoftware](../XSD_diagramviewer.md)

## Grobstruktur des Elementtyps *dcc:contactNotStrict* 
```xml
<xs:complexType name="contactNotStrict">
	<xs:sequence>
		<xs:element name="name" type="dcc:textBlock"/>
		<xs:element name="eMail" type="xs:string" minOccurs="0"/>
		<xs:element name="phone" type="xs:string" minOccurs="0"/>
		<xs:element name="fax" type="xs:string" minOccurs="0"/>
		<xs:element name="location" type="dcc:location" minOccurs="0"/>
		<xs:element name="descriptionData" type="dcc:byteDataBlock" minOccurs="0"/>
	</xs:sequence>
	<xs:attribute name="id" type="xs:ID" use="optional"/>
</xs:complexType>
```

## Ausfüllanweisungen

### Mindestangaben

Wenn ein Element vom Type *dcc:contactNotStrict* verwendet wird, enthält dieses Pflichtfelder die wie folgt gekennzeichnet sind.
|[R] <br> Required|[O] <br> Optional|[R\|O]<br>Required \| Optional|
|-|-|-|
|Es handelt sich um ein Pflichtfeld. | Es handelt sich um ein optionales Feld.|Dieses Feld kann je nach Anwendungsfall ein Pflichtfeld sein.|

|<img src="../../images/flagDE.png" alt="DE" height="30" /> <img src="../../images/flagPTB_DE.jpg" alt="PTB" height="30" />|
|-|
|Für den Sitz in Deutschland gilt:<br>Bei juristischen Personen sind die Angaben aus dem Handelsregister und bei natürlichen Personen der Erstwohnsitz anzugeben.<br>Bei Behörden sind die Angaben aus dem Impressum des Webauftritts anzugeben.

### Elemente
|Element||Bemerkung|
|-|-|-|
|dcc:name<br>[dcc:textBlock](../auxElements/textBlock.md)|[R]|Angabe des Namens der juristischen oder natürlichen Person.|
|dcc:eMail<br>[xs:string](https://www.w3.org/TR/xmlschema-2/#string)|[O]|Angabe der E-Mail-Adresse der juristischen oder natürlichen Person.|
|dcc:phone<br>[xs:string](https://www.w3.org/TR/xmlschema-2/#string)|[O]|Angabe der Telefonnummer der juristischen oder natürlichen Person.|
|dcc:fax<br>[xs:string](https://www.w3.org/TR/xmlschema-2/#string)|[O]|Angabe der Telefaxnummer der juristischen oder natürlichen Person.|
|dcc:location<br>[dcc:location](../auxElements/location.md)|[O]|Angaben zur Adresse der juristischen oder natürlichen Person.|
|dcc:descriptionData<br>[dcc:byteDataBlock](../auxElements/byteDataBlock.md)|[O]|Zusätzliche Angaben der juristischen oder natürlichen Person.|

### Attribute

|Attribut|Bemerkung|
|-|-|
|xs:ID<br>[xs:ID](https://www.w3.org/TR/xmlschema-2/#ID)|Dieser Standard dataType von XML wird zur Darstellung einer eindeutigen ID verwendet. Er dient der eindeutigen Kennzeichnung des Objektes im DCC. Es wird hier bewusst der Datentyp xs:ID verwendet, da hiermit eine Validierung ohne irgendwelche AddOns in verschiedenen Tools ermöglicht wird.|

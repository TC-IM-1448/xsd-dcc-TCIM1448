# dcc:contact

Das Elementtyp *dcc:contact* dient zur Eingabe von Kontaktdaten. Es wird meist aus anderen 
Elementen heraus aufgerufen. 

## Baumstruktur

Die grobe Baumstruktur des Elementtyps *dcc:contact* hat folgendes Aussehen:

<img src="../../images/contact_raw.png" alt="contact_raw" width="375" />

[Diagrammsoftware](../XSD_diagramviewer.md)

## Grobstruktur des Datentyps *dcc:contact* 
```xml
<xs:complexType name="contact">
	<xs:sequence>
		<xs:element name="name" type="dcc:textBlock"/>
		<xs:element name="eMail" type="xs:string"/>
		<xs:element name="phone" type="xs:string" minOccurs="0"/>
		<xs:element name="fax" type="xs:string" minOccurs="0"/>
		<xs:element name="location" type="dcc:location"/>
		<xs:element name="descriptionData" type="dcc:byteDataBlock" minOccurs="0"/>
	</xs:sequence>
	<xs:attribute name="id" type="xs:ID" use="optional"/>
</xs:complexType>
```

## Ausfüllanweisungen

Der Elementtyp *dcc:contact* wird teilweise angewendet. Wenn er angewendet 
wird, so sind im Folgenden werden die Elemente, die auszufüllen sind, in der Überschrift 
mit einem "[R]" (steht für Required) gekennzeichnet. Optional auszufüllende Elemente
werden mit einem "[O]" gekennzeichnet.

### Mindestangaben

im Folgenden werden die Elemente, die auszufüllen sind, in der Überschrift mit einem 
"[R]" (steht für Required) gekennzeichnet. Optional auszufüllende Elemente 
werden mit einem "[O]" gekennzeichnet. 

Es gibt Elemente, die sind in dem einen Anwendungsfall Pflichtfelder und in dem anderen 
Anwendungsfall nicht zwingend auszufüllen. Diese Elemente werden mit [O|R] gekennzeichnet.

#### <img src="../../images/flagDE.png" alt="DE" width="50" /> <img src="../../images/flagPTB_DE.jpg" alt="PTB" width="55" />

Für den Sitz in Deutschland gilt:

Bei juristischen Personen sind die Angaben aus dem Handelsregister und bei
natürlichen Personen der Erstwohnsitz anzugeben. Bei Behörden sind die Angaben 
aus dem Impressum des Webauftritts anzugeben.

### Elemente

#### dcc:name [R]

Angabe des Namens der juristischen oder natürlichen Person.

Datentyp: [dcc:textBlock](../auxElements/textBlock.md)

#### dcc:eMail [R]

Angabe der E-Mail-Adresse der juristischen oder natürlichen Person.

Datentyp: [xs:string](https://www.w3.org/TR/xmlschema-2/#string)

#### dcc:phone [O]

Angabe der Telefonnummer der juristischen oder natürlichen Person.

Datentyp: [xs:string](https://www.w3.org/TR/xmlschema-2/#string)

#### dcc:fax [O]

Angabe der Telefaxnummer der juristischen oder natürlichen Person.

Datentyp: [xs:string](https://www.w3.org/TR/xmlschema-2/#string)

#### dcc:location [R]

Angaben zur Adresse der juristischen oder natürlichen Person.

Datentyp: [dcc:location](../auxElements/location.md)

#### dcc:descriptionData [O]

Zusätzliche Angaben der juristischen oder natürlichen Person.

Datentyp: [dcc:byteDataBlock](../auxElements/byteDataBlock.md)

### Attribute

#### xs:ID
Dieser Standard dataType von XML wird zur Darstellung einer eindeutigen ID verwendet. Er 
dient der eindeutigen Kennzeichnung des Objektes im DCC. Es wird hier bewusst der Datentyp 
xs:ID verwendet, da hiermit eine Validierung ohne irgendwelche AddOns in verschiedenen 
Tools ermöglicht wird.

Datentyp: [xs:ID](https://www.w3.org/TR/xmlschema-2/#ID)

## Beispiele

### Beispiel 1

Ein Kalibrierlabor in der PTB in Braunschweig mit der folgenden (erfundenen) Adresse:

    Physikalisch-Technische Bundesanstalt
    z. H. Herrn Mustermann
    Arbeitsgruppe 12.24 Mustermessung
    Musterbau
    Bundesallee 100
    38116 Braunschweig

hat in der XML-Datei das folgende Aussehen:

```xml
<dcc:calibrationLaboratory>
	<dcc:contact>
		<dcc:name>
			<dcc:content>Physikalisch-Technische Bundesanstalt (PTB)</dcc:content>
		</dcc:name>
		<dcc:eMail>info@ptb.de</dcc:eMail>
		<dcc:location>
			<dcc:further>
				<dcc:content>z. H. Herrn Mustermann</dcc:content>
				<dcc:content>Arbeitsgruppe 12.24 Mustermessung</dcc:content>
				<dcc:content>Musterbau</dcc:content>
			</dcc:further>
			<dcc:street>Bundesallee</dcc:street>
			<dcc:streetNo>100</dcc:streetNo>
			<dcc:postCode>38116</dcc:postCode>
			<dcc:city>Braunschweig</dcc:city>
			<dcc:countryCode>DE</dcc:countryCode>
		</dcc:location>
	</dcc:contact>
</dcc:calibrationLaboratory>
```

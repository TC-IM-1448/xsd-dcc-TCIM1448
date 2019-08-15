# location

Der Elementtyp *dcc:location* dient zur Eingabe der Adresse.

## Baumstruktur

Die grobe Baumstruktur des Elementtyps *dcc:location* hat folgendes Aussehen:

<img src="../../images/location.png" alt="location" width="400" />

[Diagrammsoftware](../XSD_diagramviewer.md)

## Grobstruktur des Datentyps *dcc:location* 
```xml
<xs:complexType name="location">
	<xs:choice maxOccurs="unbounded">
		<xs:element name="city" type="xs:string"/>
		<xs:element name="countryCode" type="dcc:elementStringISO3166"/>
		<xs:element name="postCode" type="xs:string"/>
		<xs:element name="postOfficeBox" type="xs:string"/>
		<xs:element name="state" type="xs:string"/>
		<xs:element name="street" type="xs:string"/>
		<xs:element name="streetNo" type="xs:string"/>
		<xs:element name="further" type="dcc:textBlock"/>
	</xs:choice>
</xs:complexType>
```

## Ausfüllanweisungen

Der Elementtyp *dcc:location* ist je nach Anwendung ein Pflichtfeld oder optional. 

### Mindestangaben

im Folgenden werden die Elemente, die auszufüllen sind, in der Überschrift mit einem 
"[R]" (steht für Required) gekennzeichnet. Optional auszufüllende Elemente 
werden mit einem "[O]" gekennzeichnet. 

Es gibt Elemente, die sind in dem einen Anwendungsfall Pflichtfelder und in dem anderen 
Anwendungsfall nicht zwingend auszufüllen. Diese Elemente werden mit [O|R] gekennzeichnet.

### Bemerkungen

Die Kindelemente des Elements *location* können in beliebiger Reiehenfolge beliebig 
oft eingegeben werden. Die Motivation dafür liegt in der Unterschiedlichkeit der 
Angabe von Adressen in den Staaten. 

Die Überprüfung auf logische Rictigkeit kann nicht durch das XML-Schema erfolgen.

### Elemente

#### city [O|R]

Der Name der Stadt.

Datentyp: [xs:string](https://www.w3.org/TR/xmlschema-2/#string)

#### countryCode [O|R]

Der Ländercode, bestehend aus zwei Großbuchstaben.

Datentyp: [dcc:elementStringISO3166](../auxElements/elementStringISO3166.md)

#### postCode [O|R]

Die Postleitzahl.

Datentyp: [xs:string](https://www.w3.org/TR/xmlschema-2/#string)

#### postOfficeBox [O|R]

Das Postfach.

Datentyp: [xs:string](https://www.w3.org/TR/xmlschema-2/#string)

#### state [O|R]

Das Bundesland.

Datentyp: [xs:string](https://www.w3.org/TR/xmlschema-2/#string)

#### street [O|R]

Der Straßenname.

Datentyp: [xs:string](https://www.w3.org/TR/xmlschema-2/#string)

#### streetNo [O|R]

Die Hausnummer.

Datentyp: [xs:string](https://www.w3.org/TR/xmlschema-2/#string)

#### further [O|R]

Angabe von zusätzlichen Informationen, die für eine genaue Postanschrift dienlich sind.

Datentyp: [dcc:textBlock](../auxElements/textBlock.md)


# complexType Location

## Der Aufbau
```xml
	<xs:complexType name="location">
		<xs:choice maxOccurs="unbounded">
			<xs:element name="further" type="dcc:textBlock"/>
			<xs:element name="street" type="xs:string"/>
			<xs:element name="streetNo" type="xs:string"/>
			<xs:element name="postOfficeBox" type="xs:string"/>
			<xs:element name="postCode" type="xs:string"/>
			<xs:element name="city" type="xs:string"/>
			<xs:element name="state" type="xs:string"/>
			<xs:element name="countryCode" type="dcc:elementStringISO3166"/>
			<xs:element name="descriptionData" type="dcc:byteDataBlock"/>
		</xs:choice>
	</xs:complexType>
```

## Hinweise
1. Die Verwendung von <choice maxOccurs="unbounded"> ist bewusst gewählt. Dadurch können alle Einträge mehrfach und in beliebiger Reihenfolge verwendet werden.

## Elemente
### [further](wiki/de/complexTypes/textBlock.md)
Das Element mit den meisten Möglichkeiten. Hier kann alles eingetragen werden - mit Mehrsprachigkeit - was in kein anderes Feld passt.
Datentyp: [dcc:textBlock](wiki/de/complexTypes/textBlock.md)

### street
Angabe der Straße
Datentyp: xs:String

### streetNo
Angabe der Hausnummer
Datentyp: xs:String

### postOfficeBox
Angabe des Postfachs
Datentyp: xs:String

### postCode
Angabe der PostLeitZahl
Datentyp: xs:String

### city
Angabe der Stadt
Datentyp: xs:String

### state
Angabe des Bundeslandes
Datentyp: xs:String

### [countryCode](wiki/de/complexTypes/elementStringISO3166.md)
Angabe des Landes
Datentyp: [dcc:elementStringISO3166](wiki/de/complexTypes/elementStringISO3166.md)

### [descriptionData](wiki/de/complexTypes/byteDataBlock.md)
Angabe einer Datei
Datentyp: [dcc:descriptionData](wiki/de/complexTypes/byteDataBlock.md)

## Attribute
--keine--

## Beispiele
Die Beispiele werden der Übersichtlichkeit halber ohne [Namespace](wiki/de/namespace.md) dargestellt.


### Einfaches Beispiel einer Adresse, ohne Name (o.ä.)
```xml
<dcc:location>
    <dcc:street>Herstellerstraße</dcc:street>
    <dcc:streetNo>42</dcc:streetNo>
    <dcc:postCode>12345</dcc:postCode>
    <dcc:city>Herstellerort</dcc:city>
    <dcc:countryCode>DE</dcc:countryCode>
</dcc:location>
```            

### Einfaches Beispiel einer Adresse, ohne Name (o.ä.) - Reihenfolge ist egal!
```xml
<dcc:location>
    <dcc:countryCode>DE</dcc:countryCode>
    <dcc:streetNo>42</dcc:streetNo>
    <dcc:postCode>12345</dcc:postCode>
    <dcc:city>Herstellerort</dcc:city>
    <dcc:street>Herstellerstraße</dcc:street>
</dcc:location>
```            

### Einfaches Beispiel einer Adresse, mit Name
```xml                 
<dcc:location>
    <dcc:further id="zusatz">
        <dcc:content lang="de">Abteilung 1 Mechanik und Akustik</dcc:content>
        <dcc:content lang="en">Division 1 Mechanics and Acoustics</dcc:content>
    </dcc:further>
    <dcc:street>Bundesallee</dcc:street>
    <dcc:streetNo>100</dcc:streetNo>
    <dcc:postCode>38116</dcc:postCode>
    <dcc:city>Braunschweig</dcc:city>
    <dcc:countryCode>DE</dcc:countryCode>
</dcc:location>
```                

### Einfaches Beispiel, nur mit Further
```xml          
<dcc:location><!--91330-->
    <dcc:further>
        <dcc:content lang="de">Abteilung 1 Mechanik und Akustik</dcc:content><!--91110-->
        <dcc:content lang="en">Division 1 Mechanics and Acoustics</dcc:content><!--91110-->
    </dcc:further>
    <dcc:further>
        <dcc:content lang="de">Fachbereich 1.1 Masse – Weitergabe der Einheit</dcc:content><!--91110-->
        <dcc:content lang="en">Department 1.1 Mass - Dissemination of the Unit</dcc:content><!--91110-->
    </dcc:further>
    <dcc:further>
        <dcc:content lang="de">Arbeitsgruppe 1.15 Metrologie in der Wägetechnik</dcc:content><!--91110-->
        <dcc:content lang="en">Working Group 1.15 Metrology in Weighing Technology</dcc:content><!--91110-->
    </dcc:further>
    <dcc:further>
        <dcc:content lang="de">Vorname5 Name5 o. V. i. A.</dcc:content><!--91110-->
        <dcc:content lang="en">Vorname5 Name5 or representative in office</dcc:content><!--91110-->
    </dcc:further>
</dcc:location>
```


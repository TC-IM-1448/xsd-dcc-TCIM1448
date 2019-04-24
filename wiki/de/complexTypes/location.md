# complexType Location

Dieser complexType kann zur Darstellung einer Adresse (weltweit) verwendet werden. Durch die flexible Verwendung der Felder (Reihenfolge und Anzahl ist beliebig) kann jede Adresse die es Weltweit gibt abgebildet werden. Im Element further ist die Mehrsprachigkeit enthalten.

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
1. Die Verwendung von `<choice maxOccurs="unbounded">` ist bewusst gewählt. Dadurch können alle Einträge mehrfach und in beliebiger Reihenfolge verwendet werden.

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


### Einfaches Beispiel einer Adresse, ohne Name (o. ä.)
```xml
<location>
    <street>Herstellerstraße</street>
    <streetNo>42</streetNo>
    <postCode>12345</postCode>
    <city>Herstellerort</city>
    <countryCode>DE</countryCode>
</location>
```            

### Einfaches Beispiel einer Adresse, ohne Name (o.ä.) - Reihenfolge ist egal!
```xml
<location>
    <countryCode>DE</countryCode>
    <streetNo>42</streetNo>
    <postCode>12345</postCode>
    <city>Herstellerort</city>
    <street>Herstellerstraße</street>
</location>
```            

### Einfaches Beispiel einer Adresse, mit Name
```xml                 
<location>
    <further id="zusatz">
        <content lang="de">Abteilung 1 Mechanik und Akustik</content>
        <content lang="en">Division 1 Mechanics and Acoustics</content>
    </further>
    <street>Bundesallee</street>
    <streetNo>100</streetNo>
    <postCode>38116</postCode>
    <city>Braunschweig</city>
    <countryCode>DE</countryCode>
</location>
```                

### Einfaches Beispiel, nur mit Further
```xml          
<location><!--91330-->
    <further>
        <content lang="de">Abteilung 1 Mechanik und Akustik</content><!--91110-->
        <content lang="en">Division 1 Mechanics and Acoustics</content><!--91110-->
    </further>
    <further>
        <content lang="de">Fachbereich 1.1 Masse - Weitergabe der Einheit</content><!--91110-->
        <content lang="en">Department 1.1 Mass - Dissemination of the Unit</content><!--91110-->
    </further>
    <further>
        <content lang="de">Arbeitsgruppe 1.15 Metrologie in der Wägetechnik</content><!--91110-->
        <content lang="en">Working Group 1.15 Metrology in Weighing Technology</content><!--91110-->
    </further>
    <further>
        <content lang="de">Vorname5 Name5 o. V. i. A.</content><!--91110-->
        <content lang="en">Vorname5 Name5 or representative in office</content><!--91110-->
    </further>
</location>
```


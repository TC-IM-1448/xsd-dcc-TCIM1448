# dcc:elementStringWithLang

Dieser Elementtyp wird zur Darstellung von Text verwendet. Über das Attribut "lang" 
wird die Amtssprache angegeben, die in diesem Text benutzt wird, siehe weiter unten.

## Struktur im XML-Schema
```xml
<xs:complexType name="elementStringWithLang">
	<xs:simpleContent>
		<xs:extension base="xs:string">
			<xs:attribute name="lang" type="dcc:elementStringISO639" use="optional"/>
			<xs:attribute name="id" type="xs:ID" use="optional"/>
		</xs:extension>
	</xs:simpleContent>
</xs:complexType>
```

## Datentypen

### [xs:string](https://www.w3.org/TR/xmlschema-2/#string)

### [dcc:elementStringISO639](elementStringISO639.md)

## Attribute

|Attribut|Bemerkung|
|-|-|
|xs:ID<br>[xs:ID](https://www.w3.org/TR/xmlschema-2/#ID)|Dieser Standard dataType von XML wird zur Darstellung einer eindeutigen ID verwendet. Er dient der eindeutigen Kennzeichnung des Objektes im DCC. Es wird hier bewusst der Datentyp xs:ID verwendet, da hiermit eine Validierung ohne irgendwelche AddOns in verschiedenen Tools ermöglicht wird.|
|dcc:lang|Über dieses Attribut wird die Amtssprache festgelegt, die in dem Element *elementStringWithLang* abgespeichert wird. Die möglichen Sprachen werden über das Element *dcc:elementStringISO0639* gesteuert.


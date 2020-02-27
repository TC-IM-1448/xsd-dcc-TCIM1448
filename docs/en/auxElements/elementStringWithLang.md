# dcc:elementStringWithLang

This element type is used to display text. The attribute "long" indicates the official language used in this text, see below.

## Structure in the XML Schema
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

## Data type

### [xs:string](https://www.w3.org/TR/xmlschema-2/#string)

### [dcc:elementStringISO639](elementStringISO639.md)


### Attributes

|Attribut|Comment|
|-|-|
|xs:ID<br>[xs:ID](https://www.w3.org/TR/xmlschema-2/#ID)| This standard dataType of XML is used to represent a unique ID. It is used to uniquely identify the object in the DCC. The data type xs:ID is deliberately used here, as this enables validation without any add-ons in different tools.|
|dcc:lang|This attribute determines the official language that is stored in the element *elementStringWithLang*. The possible languages are controlled by the element *dcc:elementStringISO0639*.|


# location

The element type *dcc:location* is used to enter the address.

## Tree structure

The tree structure of the element type *dcc:location* has the following layout:

<img src="../../images/location.png" alt="location" width="400" />

[chart software](../XSD_diagramviewer.md)

## Rough structure of element type *dcc:location* 
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

## Completion instructions

For more information on the completion instructions, see the Elements subsection.

### Minimum requirements

The element *dcc:location* is optional. If it is filled in, it contains mandatory fields marked as follows.

|[R] <br> Required|[O] <br> Optional|[R\|O]<br>Required \| Optional|
|-|-|-|
|This is a mandatory field. | This is an optional field.|This field may be mandatory, depending on the application.|



### Note

The child elements of the element *location* can be entered any number of times in any sequence. The motivation for this lies in the different ways in which addresses are specified in the states. 

The check for logical correctness cannot be performed by the XML schema.

### Elements

|Element||Note|
|-|:-:|-|
|city<br>[xs:string](https://www.w3.org/TR/xmlschema-2/#string)| [O\|R]|The name of the town.|
|countryCode<br>[dcc:elementStringISO3166](../auxElements/elementStringISO3166.md)|[O\|R]|The country code, consisting of two capital letters.|
|postCode<br>[xs:string](https://www.w3.org/TR/xmlschema-2/#string)| [O\|R]|The postal code.|
|postOfficeBox<br>[xs:string](https://www.w3.org/TR/xmlschema-2/#string)| [O\|R]|The mailbox.|
|state <br>[xs:string](https://www.w3.org/TR/xmlschema-2/#string)| [O\|R]|The federal state.|
|street<br>[xs:string](https://www.w3.org/TR/xmlschema-2/#string)| [O\|R]|The street name.|
|streetNo<br>[xs:string](https://www.w3.org/TR/xmlschema-2/#string)| [O\|R]|The house number.|
|further<br>[dcc:textBlock](../auxElements/textBlock.md) |[O\|R]|Indication of additional information useful for an exact postal address.|

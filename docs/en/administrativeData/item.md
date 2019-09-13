# dcc:item 

The element *dcc:item* contains all necessary information to identify and describe a single calibration object. The element with its child elements can represent a complex composition. Therefore the rough structure of the element is shown in this part of the Wiki. For a more detailed subdivision, please refer to the links. 

## Tree structure

The tree structure of the element *dcc:item*  has the following layout:

<img src="../../images/item_raw.png" alt="item_raw" width="415" />

[chart software](../XSD_diagramviewer.md)



## Structure in the XML Schema

```xml
<xs:element name="item" maxOccurs="unbounded">
	<xs:complexType>
		<xs:sequence>
			<xs:element name="name" type="dcc:textBlock" />
			<xs:element name="description" type="dcc:textBlock" maxOccurs="unbounded"/>
			<xs:element name="descriptionData" type="dcc:byteDataBlock" minOccurs="0" 
			maxOccurs="unbounded"/>
			<xs:element name="manufacturer" type="dcc:contactNotStrict"/>
			<xs:element name="model" type="xs:string" minOccurs="0"/>
			<xs:element name="identifications"  type="dcc:identificationsParameter" />
		</xs:sequence>
		<xs:attribute name="id" type="xs:ID" use="optional"/>
	</xs:complexType>
</xs:element>
```

### Elements
|Element||Note|
|-|:-:|-|
|dcc:name <br>[dcc:textBlock](../auxElements/textBlock.md)|[R]|This element contains the name of the item to be calibrated.|
|dcc:description <br>[dcc:textBlock](../auxElements/textBlock.md)|[R]|Other information that is not specified in the elements *dcc:name* is specified here to describe the item to be calibrated.|
|dcc:descriptionData <br>[dcc:byteDataBlock](../auxElements/byteDataBlock.md)|[O]|Other information available as a file ( for example a product description) can be entered here.|
|dcc:manufacturer <br>[dcc:contactNotStrict](../auxElements/contactNotStrict.md)|[R]|The data of the manufacturer of the material to be calibrated are entered here. Since it is possible that the information on the manufacturer's address is no longer possible, the data type *dcc:contactNotStrict* is used here, which contains few mandatory fields.|
|dcc:model <br> [xs:string](https://www.w3.org/TR/xmlschema-2/#string)|[O]|Other information that does not include a statement about the model or variant of the calibration object used in the elements listed above.|
|dcc:identifications <br>[dcc:identifications](identifications.md)|[R]|In addition to the contents listed above, each item to be calibrated is uniquely identified by one or more Identifier IDs. The element *dcc:identifications* is the place where this information is stored.|

### Attributes

|Attribut|Comment|
|-|-|
|xs:ID<br>[xs:ID](https://www.w3.org/TR/xmlschema-2/#ID)| This standard dataType of XML is used to represent a unique ID. It is used to uniquely identify the object in the DCC. The data type xs:ID is deliberately used here, as this enables validation without any add-ons in different tools.|


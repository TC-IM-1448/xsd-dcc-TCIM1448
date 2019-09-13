# dcc:linkedReport

The element *dcc:linkedReport* contains the unique identifiers of a recursive chain of previous calibration certificates. It can be called recursively any number of times.

## Tree structure

The tree structure of the element *dcc:linkedReport* results from the element type *dcc:hash*. It has the following layout:

<img src="../../images/hash.png" alt="hash" width="512" />

[chart software](../XSD_diagramviewer.md)

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

## Completion instructions

For more information on the completion instructions, see the Elements subsection.

### Minimum requirements

The element *dcc:hash* is optional. If it is filled in, it contains mandatory fields marked as follows.
|[R] <br> Required|[O] <br> Optional|[R\|O]<br>Required \| Optional|
|-|-|-|
|This is a mandatory field. | This is an optional field.|This field may be mandatory, depending on the application.|

### Elements

|Element||Note|
|-|:---:|-|
|dcc:reference<br>[dcc:textBlock](../auxElements/textBlock.md)|[R]|Here are the details and descriptions of the previous calibration certificate, ideally already a DCC.| 
|dcc:referenceID<br>[xs:string](https://www.w3.org/TR/xmlschema-2/#string)|[R]|The identifier (calibration certificate number) of the previous calibration certificate is entered here.|
|dcc:procedure<br>[xs:string](https://www.w3.org/TR/xmlschema-2/#string)|[R]|The predecessor calibration certificate is uniquely identified with a hash value algorithm. With the DCC, this is done automatically with the application of a digital signature. The algorithm used to calculate the hash value stored in the element *dcc:value* is named in this field.|
|dcc:value<br>[xs:string](https://www.w3.org/TR/xmlschema-2/#string)|[R]|The hash value is stored in this element. It was obtained by applying the hash value algorithm specified in the *dcc:procedure* element to the calibration certificate.|
|dcc:linkedReport<br>[dcc:linkedReport](../auxElements/linkedReport.md)|[O]|The *dcc:linkedReport* element allows you to refer to the previous calibration certificate replaced by this DCC. A chain of calibration certificates can be specified.<br><br>The structure of the *dcc:linkedReport* element is identical to that of the *dcc:previousReport* element.|

### Attributes

|Attribut|Comment|
|-|-|
|xs:ID<br>[xs:ID](https://www.w3.org/TR/xmlschema-2/#ID)| This standard dataType of XML is used to represent a unique ID. It is used to uniquely identify the object in the DCC. The data type xs:ID is deliberately used here, as this enables validation without any add-ons in different tools.|

## Examples

### Example 1
The predecessor calibration certificate with the calibration certificate number *4914246* is a DCC. It was hashed with the Hashwertal algorithm *SHA256*. The hash value is 

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
### Example 2
As example 1, additionally with the predecessor calibration certificate. The predecessor calibration certificate with the calibration certificate number *5678* was still analogous. It was hashed with the Hashwertal algorithm *MD5*. The hash value is <br>
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
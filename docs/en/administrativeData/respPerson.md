# dcc:respPersonParameter

The element type *dcc:respPersonParameter* is required for the person responsible for releasing the report.

## Tree structure

The tree structure of the element *dcc:respPerson* results from the element type *dcc:respPersonParameter*. It has the following layout:


<img src="../../images/respPersonParameter.png" alt="respPersonParameter" width="665" />

[chart software](../XSD_diagramviewer.md)


## Rough structure of element type  *dcc:respPersonParameter* of element *respPersons*
```xml
<xs:complexType name="respPersonParameter">
	<xs:sequence>
		<xs:element name="respPerson" maxOccurs="unbounded">
			<xs:complexType>
				<xs:sequence>
					<xs:element name="person" type="dcc:contactNotStrict"/>
					<xs:element name="description" type="dcc:textBlock" minOccurs="0"/>
					<xs:element name="mainSigner" type="xs:boolean" minOccurs="0"/>
					<xs:element name="cryptElectronicSeal" type="xs:boolean" minOccurs="0"/>
					<xs:element name="cryptElectronicSignature" type="xs:boolean" minOccurs="0"/>
					<xs:element name="cryptElectronicTimeStamp" type="xs:boolean" minOccurs="0"/>
				</xs:sequence>
				<xs:attribute name="id" type="xs:ID" use="optional"/>
			</xs:complexType>
		</xs:element>
	</xs:sequence>
</xs:complexType>
```


## Completion instructions

For more information on the completion instructions, see the Elements subsection.

### Minimum requirements

|[R] <br> Required|[O] <br> Optional|[R\|O]<br>Required \| Optional|
|-|-|-|
|This is a mandatory field. | This is an optional field.|This field may be mandatory, depending on the application.|


### Elements
|Element||Note|
|-|:-:|-|
|dcc:person <br>[dcc:contactNotStrict](../auxElements/contactNotStrict.md)|[R]|Name of the person and their contact details.| 
|dcc:description<br>[dcc:textBlock](../auxElements/textBlock.md)| [O]|Further description of the person, as far as it could not take place in the element *person*. |
|dcc:mainSigner <br>[xs:boolean](https://www.w3.org/TR/xmlschema-2/#boolean)|[R\|O]|One person is to assume overall responsibility for the DCC. Therefore, the value for the child element *mainSigner* should have the value "TRUE" for exactly one element of *respPerson*.| 
|dcc:cryptElectronicSeal <br>[xs:boolean](https://www.w3.org/TR/xmlschema-2/#boolean)|[O]|Is the person responsible for affixing the cryptographic electronic seal? In this case, the ELement *cryptElectronicSeal* should have the value "TRUE".| 
|dcc:cryptElectronicSignature <br>[xs:boolean](https://www.w3.org/TR/xmlschema-2/#boolean)|[O]|Is the person responsible for affixing the cryptographic electronic signature? In this case, the element *cryptElectronicSignature* should have the value "TRUE".| 
|dcc:cryptElectronicTimeStamp <br>[xs:boolean](https://www.w3.org/TR/xmlschema-2/#boolean)|[O]|Is the person responsible for affixing the cryptographic electronic timestamp? In this case, the ELement *cryptElectronicTimeStamp* should have the value "TRUE". |


### Attributes

|Attribut|Comment|
|-|-|
|xs:ID<br>[xs:ID](https://www.w3.org/TR/xmlschema-2/#ID)| This standard dataType of XML is used to represent a unique ID. It is used to uniquely identify the object in the DCC. The data type xs:ID is deliberately used here, as this enables validation without any add-ons in different tools.|
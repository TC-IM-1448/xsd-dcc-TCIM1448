# dcc:identifications

In addition to the contents listed above, each item to be calibrated is uniquely identified in the elements by one or more identifiers. The element *dcc:identifications* is the place where this information is stored.

#### Note

In very rare cases it may happen that no identifiers are present on the material to be calibrated. Therefore the input is not mandatory. It is recommended that the calibration laboratory remedies this deficiency.

## Tree structure
The tree structure of the element *dcc:identifications* results from the element type *dcc:identificationsParameter*. It has the following layout:

<img src="../../images/identifications.png" alt="identifications" width="725" />

[chart software](../XSD_diagramviewer.md)

## Struktur im XML-Schema

```xml
<xs:element name="identificationsParameter" minOccurs="0">
	<xs:complexType>
		<xs:sequence>
			<xs:element name="identification" maxOccurs="unbounded">
				<xs:complexType>
					<xs:sequence>
						<xs:element name="issuer">
							<xs:simpleType>
								<xs:restriction base="xs:string">
									<xs:enumeration value="manufacturer"/>
									<xs:enumeration value="calibrationLaboratory"/>
									<xs:enumeration value="customer"/>
									<xs:enumeration value="owner"/>
									<xs:enumeration value="other"/>
								</xs:restriction>
							</xs:simpleType>
						</xs:element>
						<xs:element name="value" type="xs:string"/>
						<xs:element name="description" type="dcc:textBlock" minOccurs="0"/>
					</xs:sequence>
					<xs:attribute name="id" type="xs:ID" use="optional"/>
				</xs:complexType>
			</xs:element>
		</xs:sequence>
	</xs:complexType>
</xs:element>
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
|dcc:identifications|[R]|The element is the root element for entering the identifiers. It contains the child element *identification*, in which the respective identifier is to be entered.|
|dcc:identification |[R]|At least one element of *dcc:identification* must be completed.|
| dcc:issuer |[R]|Only one of the following words can be entered in the *issuer* element.<br>- manufacturer<br>- calibrationLaboratory<br>- customer<br>- owner<br>- other<br>If the element is filled with a different content, an error occurs during the check against the XML schema. |
|dcc:value <br>[xs:string](https://www.w3.org/TR/xmlschema-2/#string)|[R]|The identifier is entered here.| 
|dcc:description <br>[dcc:textBlock](../auxElements/textBlock.md)|[O]|Other information about the identifier.|


## Examples

### Example 1

The manufacturer has indicated the identification number 1040917:

```xml
<dcc:identifications>
	<dcc:identification>
		<dcc:issuer>manufacturer</dcc:issuer>
		<dcc:value>1040917</dcc:value>
	</dcc:identification>
</dcc:identifications>
```

### Example 2

The manufacturer has indicated the identification number 1040917, the batch A3/19 and has also clearly distinguished between the identification number and the batch:

```xml
<dcc:identifications>
	<dcc:identification>
		<dcc:issuer>manufacturer</dcc:issuer>
		<dcc:value>1040917</dcc:value>
	</dcc:identification>
		<dcc:description>
			<dcc:content lang="de">Kennnummer</dcc:content>
			<dcc:content lang="en">Serial No.</dcc:content>
		</dcc:description>
	<dcc:identification>
		<dcc:issuer>manufacturer</dcc:issuer>
		<dcc:value>A3/19</dcc:value>
	</dcc:identification>
		<dcc:description>
			<dcc:content lang="de">Charge</dcc:content>
			<dcc:content lang="en">Charge</dcc:content>
		</dcc:description>
</dcc:identifications>
```

### Example 3

The manufacturer, calibration laboratory and customer have each indicated an identification number:

```xml
<dcc:identifications>
	<dcc:identification>
		<dcc:issuer>manufacturer</dcc:issuer>
		<dcc:value>1040917</dcc:value>
		<dcc:description>
			<dcc:content lang="de">Kennnummer</dcc:content>
			<dcc:content lang="en">Serial No.</dcc:content>
		</dcc:description>
	</dcc:identification>
	<dcc:identification>
		<dcc:issuer>calibrationLaboratory</dcc:issuer>
		<dcc:value>PTB4711</dcc:value>
		<dcc:description>
			<dcc:content lang="de">Kennnummer</dcc:content>
			<dcc:content lang="en">Serial No.</dcc:content>
		</dcc:description>
	</dcc:identification>
	<dcc:identification>
		<dcc:issuer>customer</dcc:issuer>
		<dcc:value>0815</dcc:value>
		<dcc:descriptio>
			<dcc:content lang="de">Kennnummer</dcc:content>
			<dcc:content lang="en">Serial No.</dcc:content>
		</dcc:description>
	</dcc:identification>
</dcc:identifications>
```


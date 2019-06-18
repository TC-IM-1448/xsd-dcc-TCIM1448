# administrativeData
This area (ring) contains all data necessary for the administrative processing of the order.
It is the ring 1.

## Construction
```xml
<xs:element name="administrativeData">
	<xs:complexType>
		<xs:all>
			<xs:element name="dccSoftware" type="dcc:softwareParameter" />
			<xs:element name="coreData" type="dcc:coreDataParameter"/>
			<xs:element name="items" type="dcc:itemParameter"/>
			<xs:element name="calibrationLaboratory" type="dcc:calibrationLaboratoryParameter"/>
			<xs:element name="respPersons" type="dcc:respPersonParameter"/>
			<xs:element name="customer" type="dcc:contact"/>
			<xs:element name="statements" type="dcc:statementParameter" minOccurs="0"/>
		</xs:all>
	</xs:complexType>
</xs:element>
```

## Hints
--none--

## Elements

### [dccSoftware](dccSoftware.md)
Essential information on the identification of the software used to create and edit the DCC is stored here.

Which software (with version information) was used for the creation. From this conclusions can be drawn, with incorrect XML. This information is z. B. for troubleshooting immensely important.

### [coreData](coreData.md)
Essential information for the identification of the calibration material as well as the global classification of the calibration certificate.
 
### [items](items.md)
Clear identification, description and, if necessary, status of the calibration item (or the material from which the samples were taken).

### [calibrationLaboratory](calibrationLaboratory.md)
Essential information for identifying the calibration laboratory.

### [respPersons](respPerson.md)
Designation of the person (s) responsible for releasing the report.

### [customer](customer.md)
Identification of the client of the calibration.

### [statements](statements.md)
Element for entering various statements.

## Attributes
--none--

## Examples
For the sake of clarity, the examples are shown without [namespace] (namespace.md).








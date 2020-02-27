# dcc:administrativeData

The element *dcc:administrativeData* contains all essential administrative information for calibration. The entries in this area are basically the same and regulated in all DCCs.

## Tree structure

The tree structure of the element *dcc:administrativeData* has the following layout:

<img src="../../images/administrativeData.png" alt="administrativeData" width="508" />

[chart software](../XSD_diagramviewer.md)

## Extract from the XML Schema
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
## Completion instructions

For more information on the completion instructions, see the Elements subsection.

### Minimum requirements

|[R] <br> Required|[O] <br> Optional|[R\|O]<br>Required \| Optional|
|-|-|-|
|This is a mandatory field. | This is an optional field.|This field may be mandatory, depending on the application.|


### Elements


| Element|| Note  |
|---|:-:|-----|
| [dcc:dccSoftware ](dccSoftware.md) |[R]  | Essential information for identifying the software used to create and edit the DCC is stored here. |
| [dcc:coreData ](coreData.md) | [R] | Essential information for the identification of the material to be calibrated as well as the global classification of the calibration certificate. |
| [dcc:items ](items.md)|[R] | Unique identification, description and, if applicable, condition of the calibration object. |
| [dcc:calibrationLaboratory ](calibrationLaboratory.md) |[R]| Essential information for the identification of the calibration laboratory. |
| [dcc:respPersons ](respPersons.md)  |[R] | Identification of the person(s) responsible for releasing the report.  |
| [dcc:customer ](customer.md)  |[R] | Identification of the calibration client.|
| [dcc:statements ](statements.md) |[O] | Element for entering various statements.|
# measurementResult (in development, don't translate)

The element *dcc:measurementResults* contains all results of the measurements, evaluations and information for calibration. The entries in this area are always such that a value is always linked to a unit. SI units should always be used. 

## Tree structure

The tree structure of the element *dcc:measurementResult* has the following layout:

<img src="../../images/measurementResult.png" alt="measurementResult" width="350" />

[chart software](../XSD_diagramviewer.md)

## Extract from the XML Schema
```xml
<xs:element name="measurementResults">
	<xs:complexType>
		<xs:sequence>
			<xs:element name="measurementResult" maxOccurs="unbounded">
				<xs:complexType>
					<xs:sequence>
						<xs:element name="usedMethods" type="dcc:usedMethodParameter" minOccurs="0"/>
						<xs:element name="usedSoftware" type="dcc:softwareParameter" minOccurs="0"/>
						<xs:element name="measuringEquipments" type="dcc:measuringEquipmentParameter" minOccurs="0"/>
						<xs:element name="influenceConditions" type="dcc:influenceConditionParameter"/>
						<xs:element name="results" type="dcc:resultParameter"/>
					</xs:sequence>
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


| Element|| Note  |
|---|:-:|-----|
| | |


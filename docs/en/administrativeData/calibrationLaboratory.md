# dcc:calibrationLaboratory

The element type *dcc:calibrationLaboratory* contains essential information on the 
calibration laboratory.

## Tree structure

The tree structure of the element *dcc:calibrationLaboratory* results from the element type *calibrationLaboratoryParameter*. It has the following layout:

<img src="../../images/calibrationLaboratoryParameter.png" alt="calibrationLaboratoryParameter" width="500" />

[chart software](../XSD_diagramviewer.md)

## Rough structure of data type *dcc:calibrationLaboratoryParameter* of element *calibrationLaboratory*
```xml
<xs:complexType name="calibrationLaboratoryParameter">
    <xs:sequence>
        <xs:element name="calibrationLaboratoryCode" type="xs:string" minOccurs="0"/>
        <xs:element name="contact" type="dcc:contact" maxOccurs="unbounded"/>
    </xs:sequence>
</xs:complexType>
```

## Completion instructions

For more information on the completion instructions, see the Elements subsection.

### Minimum requirements

|[R] <br> Required|[O] <br> Optional|[R\|O]<br>Required \| Optional|
|-|-|-|
|This is a mandatory field. | This is an optional field.|This field may be mandatory, depending on the application.|



|<img src="../../images/flagPTB_DE.jpg" alt="PTB" height="30" />| <img src="../../images/flagDAkkS_DE.png" alt="DAkkS" height="30" />|
|-|-|
|PTB-specific entries are identified by the PTB logo.|DAkkS-specific entries are identified by the PTB logo.|

### Elements

| Element        || Note  |
|---|:-:|---|
| dcc:calibrationLaboratoryCode <br> [xs:string](https://www.w3.org/TR/xmlschema-2/#string) |[O\|R]| If the calibration laboratory has an identifier assigned to it, it must be entered here. <br><br> <img src="../../images/flagPTB_DE.jpg" alt="PTB" height="30" /> <br> The PTB has no assigned identifier. Therefore, this element remains empty.<br>   <br> <img src="../../images/flagDAkkS_DE.png" alt="DAkkS" height="30" /> <br> The calibration laboratories accredited by the Deutsche Akkreditierungsstelle GmbH (DAkkS) have been assigned an identifier. This must be entered here.|
| dcc:contact <br> [dcc:contact](../auxElements/contact.md)| [R]| The element *dcc:contact* contains all necessary information to uniquely identify the calibration laboratory. |
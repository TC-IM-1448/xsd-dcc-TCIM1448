# dcc:statementMetaDataParameter

In dem Elementtyp *dcc:statementMetaDataParameter* werden Aussagen zur Kalibrierung hinterlegt, 
die für den gesamten Kalibrierprozess gelten. 

## Baumstruktur

Die Baumstruktur des Elements *dcc:statementMetaDataParameter* hat folgendes Aussehen:

<img src="../../images/statementMetaDataParameter.png" alt="statementMetaDataParameter" width="550" />

[Diagrammsoftware](../XSD_diagramviewer.md)


## Aufbau
```xml
<xs:complexType name="statementParameter">
    <xs:sequence>
        <xs:element name="statement" type="dcc:statementMetaDataParameter" maxOccurs="unbounded"/>
    </xs:sequence>
</xs:complexType>
```

# dcc:statements

## Baumstruktur

Die Baumstruktur des Elements *dcc:statementParameter* hat folgendes Aussehen:

<img src="../../images/statementParameter.png" alt="statementParameter" width="830" />

[Diagrammsoftware](../XSD_diagramviewer.md)


## Aufbau
```xml
<xs:complexType name="statementParameter">
    <xs:sequence>
        <xs:element name="statement" type="dcc:statementMetaDataParameter" maxOccurs="unbounded"/>
    </xs:sequence>
</xs:complexType>
```

# dcc:statements

## Baumstruktur

Die Baumstruktur des Elements *dcc:statment* ergibt sich über den Elementtyp
*dcc:statementParameter*. Er hat folgendes Aussehen:

<img src="../../images/statementParameter.png" alt="statementParameter" width="830" />

[Diagrammsoftware](../XSD_diagramviewer.md)


## Struktur im XML-Schema
```xml
<xs:complexType name="statementParameter">
    <xs:sequence>
        <xs:element name="statement" type="dcc:statementMetaDataParameter" maxOccurs="unbounded"/>
    </xs:sequence>
</xs:complexType>
```

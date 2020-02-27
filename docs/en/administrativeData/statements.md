# dcc:statements

## Tree structure

The tree structure of the element *dcc:statment* results from the element type *dcc:statementParameter*. It has the following layout:

<img src="../../images/statementParameter.png" alt="statementParameter" width="830" />

[chart software](../XSD_diagramviewer.md)


## Structure in the XML Schema
```xml
<xs:complexType name="statementParameter">
    <xs:sequence>
        <xs:element name="statement" type="dcc:statementMetaDataParameter" maxOccurs="unbounded"/>
    </xs:sequence>
</xs:complexType>
```

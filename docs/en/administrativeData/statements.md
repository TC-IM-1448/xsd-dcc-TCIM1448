# Element statements


## Construction
```xml
<xs:complexType name="statementParameter">
    <xs:sequence>
        <xs:element name="statement" type="dcc:statementMetaDataParameter" maxOccurs="unbounded"/>
    </xs:sequence>
</xs:complexType>
```

## Hints
--none--

## Elements

### [statement](../complexTypes/statementMetaDataParameter.md)
Individual statements are recorded. The complexType "statementMetaDataParameter" is used here.

Data type: [dcc:statementMetaDataParameter](../complexTypes/statementMetaDataParameter.md)

## Attributes
--none--

## Examples
For the sake of clarity, the examples are shown without [namespace] (namespace.md).

### Simple Example
```xml
<statements>
    <statement>
        <norm>EN45501</norm>
    </statement>
</statements>
```            

# Element statements


## Aufbau
```xml
<xs:complexType name="statementParameter">
    <xs:sequence>
        <xs:element name="statement" type="dcc:statementMetaDataParameter" maxOccurs="unbounded"/>
    </xs:sequence>
</xs:complexType>
```

## Hinweise
--keine--

## Elemente

### [statement](../complexTypes/statementMetaDataParameter.md)
Es werden einzelne Statements erfasst. Der complexType "statementMetaDataParameter" wird hier verwendet. 

Datentyp: [dcc:statementMetaDataParameter](../complexTypes/statementMetaDataParameter.md)

## Attribute
--keine--

## Beispiele
Die Beispiele werden der Übersichtlichkeit halber ohne [Namespace](../namespace.md) dargestellt.


### Einfaches Beispiel
```xml
<statements>
    <statement>
        <norm>EN45501</norm>
    </statement>
</statements>
```

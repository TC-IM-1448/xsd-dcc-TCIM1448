# complexType calibrationLaboratoryParameter


## Construction
```xml
<xs:complexType name="calibrationLaboratoryParameter">
    <xs:sequence>
        <xs:element name="calibrationLaboratoryCode" type="xs:string" minOccurs="0"/>
        <xs:element name="contact" type="dcc:contact" maxOccurs="unbounded"/>
    </xs:sequence>
</xs:complexType>
```

## Hints
--none--

## Elements
### calibrationLaboratoryCode
The clear identification of the laboratory.

### [contact](../complexTypes/contact.md)
The contact for the laboratory. This element can be used more than one time.

Datatype: [dcc:contact](../complexTypes/contact.md)

## Attributes
--none--

## Examples
For the sake of clarity, the examples are shown without [namespace] (namespace.md).


### Simple example
```xml
<calibrationLaboratory>
    <calibrationLaboratoryCode>xyz123abc</calibrationLaboratoryCode>
    <contact>
        <name>Hr. Muster</name>
        <eMail>email.muster@ptb.de</eMail>
        <location>
            <street>Herstellerstraße</street>
            <streetNo>42</streetNo>
            <postCode>12345</postCode>
            <city>Herstellerort</city>
            <countryCode>DE</countryCode>
        </location>
    </contact>
</calibrationLaboratory>
```            

### Simple example with ID
```xml
<calibrationLaboratory>
    <calibrationLaboratoryCode>xyz123abc</calibrationLaboratoryCode>
    <contact id="abc1">
        <name>Hr. Muster</name>
        <eMail>email.muster@ptb.de</eMail>
        <location id="abc2">
            <street>Herstellerstraße</street>
            <streetNo>42</streetNo>
            <postCode>12345</postCode>
            <city>Herstellerort</city>
            <countryCode>DE</countryCode>
        </location>
    </contact>
</calibrationLaboratory>
```            

### Example with ID and more than one contact
```xml
<calibrationLaboratory>
    <calibrationLaboratoryCode>xyz123abc</calibrationLaboratoryCode>
    <contact id="abc1">
        <name>Hr. Muster</name>
        <eMail>email.muster@ptb.de</eMail>
        <location id="abc2">
            <street>Herstellerstraße</street>
            <streetNo>42</streetNo>
            <postCode>12345</postCode>
            <city>Herstellerort</city>
            <countryCode>DE</countryCode>
        </location>
    </contact>
    <contact id="abc3">
        <name>Hr. Nobody</name>
        <eMail>email.nobody@ptb.de</eMail>
        <location id="abc4">
            <street>Herstellerstraße</street>
            <streetNo>42</streetNo>
            <postCode>12345</postCode>
            <city>Herstellerort</city>
            <countryCode>DE</countryCode>
        </location>
    </contact>
</calibrationLaboratory>
```            

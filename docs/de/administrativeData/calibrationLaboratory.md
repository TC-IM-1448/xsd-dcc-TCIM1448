# complexType calibrationLaboratoryParameter


## Aufbau
```xml
<xs:complexType name="calibrationLaboratoryParameter">
    <xs:sequence>
        <xs:element name="calibrationLaboratoryCode" type="xs:string" minOccurs="0"/>
        <xs:element name="contact" type="dcc:contact" maxOccurs="unbounded"/>
    </xs:sequence>
</xs:complexType>
```

## Hinweise
--keine--

## Elemente
### calibrationLaboratoryCode
Die eindeutige Kennzeichnung des Labors.

### [contact](../complexTypes/contact.md)
Der Ansprechpartner für das Labor. Dieses Element kann mehrmals verwendet werden.

Datentyp: [dcc:contact](../complexTypes/contact.md)

## Attribute
--keine--

## Beispiele
Die Beispiele werden der Übersichtlichkeit halber ohne [Namespace](../namespace.md) dargestellt.


### Einfaches Beispiel
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

### Einfaches Beispiel mit ID
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

### Beispiel mit ID und mehreren contact`s
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

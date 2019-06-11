# ComplexType respPersonParameter


## Aufbau
```xml
<xs:complexType name="respPersonParameter">
    <xs:sequence>
        <xs:element name="respPerson" maxOccurs="unbounded">
            <xs:complexType>
                <xs:sequence>
                    <xs:element name="person" type="xs:string"/>
                    <xs:element name="mainSigner" type="xs:boolean" minOccurs="0"/>
                    <xs:element name="cryptElectronicSeal" type="xs:boolean" minOccurs="0"/>
                    <xs:element name="cryptElectronicSignature" type="xs:boolean" minOccurs="0"/>
                    <xs:element name="cryptElectronicTimeStamp" type="xs:boolean" minOccurs="0"/>
                    <xs:element name="eMailPerson" type="xs:string" minOccurs="0"/>
                    <xs:element name="furtherInfoPerson" type="dcc:textBlock" minOccurs="0" maxOccurs="unbounded"/>
                    <xs:element name="location" type="dcc:location" minOccurs="0"/>
                </xs:sequence>
                <xs:attribute name="id" type="xs:ID" use="optional"/>
            </xs:complexType>
        </xs:element>
    </xs:sequence>
</xs:complexType>
```

## Hinweise
--keine--

## Elemente

### respPerson
Dieses Element enthält alle weiteren Elemente. 

#### person
Der Name der Person. Einfacher Text.

#### mainSigner
Ist diese Person der Hauptunterzeichner? Ja/Nein

#### cryptElectronicSeal
...

#### cryptElectronicSignature
...

#### cryptElectronicTimeStamp
...

#### eMailPerson
Die Emailadresse der Person.

#### [furtherInfoPerson](../complexTypes/textBlock.md)
Das Element ist ein Textblock, welcher beliebig viele mit Mehrsprachigkeit

Data type: [dcc:textBlock](../complexTypes/textBlock.md)

#### [location](../complexTypes/location.md)
Darstellung einer Adresse.

Data type: [dcc:location](../complexTypes/location.md)

## Attribute
Die eindeutige Kennzeichnung des Objektes im DCC. Es wird hier bewusst der Datentyp xs:ID verwendet, da hiermit eine Validierung ohne irgendwelche AddOns in verschiedenen Tools ermöglicht wird. 

Datentyp: [xs:ID](../xsd/xs-ID.md)

## Beispiele
Die Beispiele werden der Übersichtlichkeit halber ohne [Namespace](../namespace.md) dargestellt.


### Einfaches Beispiel
```xml
<respPersons>
    <respPerson>
        <person>Vorname Nachname</person>
        <mainSigner>true</mainSigner>
        <cryptElectronicSeal>false</cryptElectronicSeal>
        <cryptElectronicSignature>false</cryptElectronicSignature>
        <cryptElectronicTimeStamp>false</cryptElectronicTimeStamp>
        <eMailPerson>vorname.nachname@ptb.de</eMailPerson>
        <furtherInfoPerson>
            <content>further information</content>
            <content>further information</content>
        </furtherInfoPerson>
        <location>
            <further>hier kann eine genaze Adresse stehen siehe complexType loction<further>
        </location>
    </respPerson>
</respPersons>
```

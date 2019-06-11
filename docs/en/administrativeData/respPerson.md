# ComplexType respPersonParameter


## Construction
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

## Hints
--none--

## Elements

### respPerson
This element contains all other elements.

#### person
The name of the person. Simple text.

#### mainSigner
Is this person the main signatory? Yes/No

#### cryptElectronicSeal
...Yes/No

#### cryptElectronicSignature
...Yes/No

#### cryptElectronicTimeStamp
...Yes/No

#### eMailPerson
The email address of the person.

#### [furtherInfoPerson](../complexTypes/textBlock.md)
The element is a text block, which any number with multilingualism

Data type: [dcc:textBlock](../complexTypes/textBlock.md)

#### [location](../complexTypes/location.md)
Presentation of an address.

Data type: [dcc:location](../complexTypes/location.md)

## Attributes
The unique identification of the object in the DCC. It deliberately uses the xs: ID data type because it allows for validation without any add-ons in different tools.

Data type: [xs:ID](../xsd/xs-ID.md)

## Examples
For the sake of clarity, the examples are shown without [namespace] (namespace.md).

### Simple example
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

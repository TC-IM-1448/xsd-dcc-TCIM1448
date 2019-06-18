# Element dccSoftware


## Construction
```xml
<xs:complexType name="softwareParameter">
    <xs:sequence>
        <xs:element name="software" maxOccurs="unbounded">
            <xs:complexType>
                <xs:sequence>
                    <xs:element name="name" type="dcc:textBlock"/>
                    <xs:element name="release" type="xs:string"/>
                    <xs:element name="description" type="dcc:textBlock" minOccurs="0" maxOccurs="unbounded" />
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

### software (complexType)
This element may occur multiple times. Each entry represents a software. Described about the following elements.

#### [name](../complexTypes/textBlock.md)
Represents the name of the software. It can be multilingual.

Data type: [dcc:textBlock](../complexTypes/textBlock.md)

#### release
The release of the software. Possible information: release, version, etc. For unambiguous identification of the software in connection with the name.

Data type: [dcc:textBlock](../complexTypes/textBlock.md)

#### [description](../complexTypes/textBlock.md)
Any information that is not in name or release comes in here. The element can not occur at all, once or several times. The data type textBlock also provides multilingualism here.

Data type: [dcc:textBlock](../complexTypes/textBlock.md)

## Attribute

### ID
The unique identification of the object in the DCC. It deliberately uses the xs: ID data type because it allows for validation without any add-ons in different tools.

Data type: [xs:ID](../xsd/xs-ID.md)

## Examples
For the sake of clarity, the examples are shown without [namespace] (namespace.md).

### Simple example of a software
```xml
<dcc:dccSoftware>

    <dcc:software>
        <dcc:name>
            <dcc:content>Notepad++ (32-bit)</dcc:content>
        </dcc:name>
        <dcc:release>v7.5.8</dcc:release>
    </dcc:software>

</dcc:dccSoftware>
```

### Example of a software
```xml
<dcc:dccSoftware>

    <dcc:software>
        <dcc:name>
            <dcc:content>Notepad++ (32-bit)</dcc:content>
        </dcc:name>
        <dcc:release>v7.5.8</dcc:release>
        <dcc:description>
            <dcc:content>Hier steht Text.</dcc:content>
        </dcc:description>
        <dcc:description>
            <dcc:content>Hier steht Text.</dcc:content>
        </dcc:description>
    </dcc:software>

</dcc:dccSoftware>
```

### Example of a software, including multilingualism
```xml
<dcc:dccSoftware>

    <dcc:software>
        <dcc:name>
            <dcc:content>Notepad++ (32-bit)</dcc:content>
        </dcc:name>
        <dcc:release>v7.5.8</dcc:release>
        <dcc:description>
            <dcc:content lang="de">Hier steht Text.</dcc:content>
            <dcc:content lang="en">This is Text.</dcc:content>
        </dcc:description>
        <dcc:description>
            <dcc:content lang="de">Hier steht Text.</dcc:content>
            <dcc:content lang="en">This is Text.</dcc:content>
        </dcc:description>
    </dcc:software>

</dcc:dccSoftware>
```

### Example with 2 entries, including IDs and multilingualism
```xml
<dcc:dccSoftware>

    <dcc:software id="Notepad_plusplus">
        <dcc:name>
            <dcc:content>Notepad++ (32-bit)</dcc:content>
        </dcc:name>
        <dcc:release>v7.5.8</dcc:release>
        <dcc:description id="dcc44-1">
            <dcc:content lang="de">Hier steht Text.</dcc:content>
            <dcc:content lang="en">This is Text.</dcc:content>
        </dcc:description>
        <dcc:description id="dcc44-2">
            <dcc:content lang="de">Hier steht Text.</dcc:content>
            <dcc:content lang="en">This is Text.</dcc:content>
        </dcc:description>
    </dcc:software>

    <dcc:software id="Altova_XML">
        <dcc:name>
            <dcc:content>Altova XMLSpy</dcc:content>
        </dcc:name>
        <dcc:release>2018 SP 1 (x64) Enterprise Edition</dcc:release>
    </dcc:software>

</dcc:dccSoftware>
```



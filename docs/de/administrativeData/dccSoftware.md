# Element dccSoftware


## Aufbau
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

## Hinweise

## Elemente

### software (complexType)
Dieses Element darf mehrfach vorkommen. Jeder Eintrag stellt eine Software dar. Beschrieben über die folgenden Elemente.

#### [name](../complexTypes/textBlock.md)
Stellt den Namen der Software dar. Er kann Mehrsprachig angegeben werden.

Datentyp: [dcc:textBlock](../complexTypes/textBlock.md)

#### release
Das Release der Software. Mögliche Angaben: Release, Version, etc. Zur eindeutigen Identifizierung der Software im Zusammenhang mit dem Namen. 

Datentyp: [dcc:textBlock](../complexTypes/textBlock.md)

#### [description](../complexTypes/textBlock.md)
Jegliche Information die nicht in Name oder Release steht kommt hier hinein. Das Element kann garnicht, einmal oder mehrfach auftreten. Durch den Datentyp textBlock ist hier auch die Mehrsprachigkeit gegeben.

Datentyp: [dcc:textBlock](../complexTypes/textBlock.md)

## Attribute

### ID
Die eindeutige Kennzeichnung des Objektes im DCC. Es wird hier bewusst der Datentyp xs:ID verwendet, da hiermit eine Validierung ohne irgendwelche AddOns in verschiedenen Tools ermöglicht wird. 

Datentyp: [xs:ID](../xsd/xs-ID.md)

## Beispiele
Die Beispiele werden der Übersichtlichkeit halber ohne [Namespace](../namespace.md) dargestellt.


### Einfaches Beispiel einer Software
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

### Beispiel einer Software
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

### Beispiel einer Software, inkl. Mehrsprachigkeit
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

### Beispiel mit 2 Einträgen, inkl. IDs und Mehrsprachigkeit
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



# Element document


## Aufbau
```xml
<xs:element name="document" type="dcc:byteDataBlock" minOccurs="0"/>
```

## Hinweise
Das menschenlesbare Dokument.

## Elemente
Das Element "document" hat den Datentyp byteDataBlock.
Datentyp: [dcc:byteDataBlock](complexTypes/byteDataBlock.md)

## Attribute
--keine--

## Beispiele
Die Beispiele werden der Übersichtlichkeit halber ohne [Namespace](namespace.md) dargestellt.

### Einfaches Beispiel 
```xml
<document>
    <name>
        <content>The humanreadable Document</content>
    </name>
    <description>
        <content>A simple Description</content>
    </description>
    <fileName>noOne.txt</fileName>
    <mimeType>plain/text</mimeType>
    <data>UGh5c2lrYWxpc2NoIFRlY2huaXNjaGUgQnVuZGVzYW5zdGFsdCwgQnJhdW5zY2h3ZWlnLCBEZXV0c2NobGFuZCwgYWxleGFuZGVyLnNjaGVpYm5lckBwdGIuZGU=</data>
</document>
```            

### Einfaches Beispiel mit ID 
```xml
<document id="xyz">
    <name>
        <content>The humanreadable Document</content>
    </name>
    <description>
        <content>A simple Description</content>
    </description>
    <fileName>noOne.txt</fileName>
    <mimeType>plain/text</mimeType>
    <data>UGh5c2lrYWxpc2NoIFRlY2huaXNjaGUgQnVuZGVzYW5zdGFsdCwgQnJhdW5zY2h3ZWlnLCBEZXV0c2NobGFuZCwgYWxleGFuZGVyLnNjaGVpYm5lckBwdGIuZGU=</data>
</document>
```            


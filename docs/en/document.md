# Element document


## Construction
```xml
<xs:element name="document" type="dcc:byteDataBlock" minOccurs="0"/>
```

## Hints
The human readable document.

## Elements
The element "document" has the data type byteDataBlock.
Data type: [dcc:byteDataBlock](complexTypes/byteDataBlock.md)

## Attributes
--none--

## Examples
For the sake of clarity, the examples are shown without [namespace] (namespace.md).

### Simple example
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

### Simple example with ID 
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


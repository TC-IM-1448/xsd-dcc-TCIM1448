# dcc:dccSoftware

Essential information for identifying the software used to create and edit the DCC is stored here. 

Which software (with version information) was used for the creation. Conclusions can be drawn from this if the XML is incorrect. This information is immensely important for troubleshooting, for example.

## Tree structure

The tree structure of the element *dcc:dccSoftware* results from the element type *dcc:SoftwareParameter*. It has the following layout:

<img src="../../images/softwareParameter.png" alt="softwareParameter" width="560" />

[chart software](../XSD_diagramviewer.md)

## Rough structure of data type *dcc:softwareParameter* of element *dcc:software*

```xml
<xs:complexType name="softwareParameter">
    <xs:sequence>
        <xs:element name="software" maxOccurs="unbounded">
            <xs:complexType>
                <xs:sequence>
                    <xs:element name="name" type="dcc:textBlock"/>
                    <xs:element name="release" type="xs:string"/>
                    <xs:element name="description" type="dcc:textBlock" minOccurs="0" 
                    maxOccurs="unbounded" />
                </xs:sequence>
                <xs:attribute name="id" type="xs:ID" use="optional"/>
            </xs:complexType>
        </xs:element>
    </xs:sequence>
</xs:complexType>
```

## Completion instructions

The DCC XML file is created with software. The use of this software (one or more) must be documented. Further information on the completion instructions can be found in the Elements subsection.

### Minimum requirements

|[R] <br> Required|[O] <br> Optional|[R\|O]<br>Required \| Optional|
|-|-|-|
|This is a mandatory field. | This is an optional field.|This field may be mandatory, depending on the application.|


### Elements

| Element  || Note |
|----|:-:|----|
| dcc:software <!--SoftwareParameter fehlt als Link--> |[R]| The element *dcc:software* may occur multiple times. Each entry represents exactly one software that was used to create the XML file. |
| dcc:name <br> [dcc:textBlock](../auxElements/textBlock.md) | [R]| The name of the software is entered in this element. It can be specified in several languages.|
|dcc:release<br> [xs:string](https://www.w3.org/TR/xmlschema-2/#string)|[R]|The release of the software. Possible specifications: Release, version, etc. This serves to uniquely identify the software in connection with the name. |
|dcc:description<br>[dcc:textBlock](../auxElements/textBlock.md)|[O]|Other information not specified in the *dcc:name* or *dcc:release* elements can be specified here. The element can occur not at all, once or multiple times. Due to the data type textBlock, multilingualism is also given here.|

### Attributes

|Attribut|Comment|
|-|-|
|xs:ID<br>[xs:ID](https://www.w3.org/TR/xmlschema-2/#ID)| This standard dataType of XML is used to represent a unique ID. It is used to uniquely identify the object in the DCC. The data type xs:ID is deliberately used here, as this enables validation without any add-ons in different tools.|

## Examples
The examples are excerpts from DCC's.

### Example 1
In this example a software (Notepad++) is used for the creation of the DCC. Only the mandatory fields are filled in. Here is the result:
```xml
<dcc:dccSoftware>
    <dcc:software>
        <dcc:name>
            <dcc:content>Notepad++ (32-bit)</dcc:content>
        </dcc:name>
        <dcc:release>v7.7.1</dcc:release>
    </dcc:software>
</dcc:dccSoftware>
```

### Example 2
On the basis of example 1 further information is given:

```xml
<dcc:dccSoftware>
    <dcc:software>
        <dcc:name>
            <dcc:content>Notepad++ (32-bit)</dcc:content>
        </dcc:name>
        <dcc:release>v7.7.1</dcc:release>
        <dcc:description>
            <dcc:content>Erweiterung: XML Tools Plugin version 2.3.2 unicode beta4 r908
            </dcc:content>
        </dcc:description>
        <dcc:description>
            <dcc:content>Installation aus dem Softwarecenter</dcc:content>
        </dcc:description>
    </dcc:software>
</dcc:dccSoftware>
```

### Example 3
Like example 2, but in German and English:

```xml
<dcc:dccSoftware>
    <dcc:software>
        <dcc:name>
            <dcc:content>Notepad++ (32-bit)</dcc:content>
        </dcc:name>
        <dcc:release>v7.7.1</dcc:release>
        <dcc:description>
            <dcc:content lang="de">Erweiterung: XML Tools Plugin version 2.3.2 unicode beta4 r908
            </dcc:content>
            <dcc:content lang="en">Extension: XML Tools Plugin version 2.3.2 unicode beta4 r908
            </dcc:content>
        </dcc:description>
        <dcc:description>
            <dcc:content lang="de">Installation aus dem Softwarecenter</dcc:content>
            <dcc:content lang="en">Installation from the Software Cente</dcc:content>
        </dcc:description>
    </dcc:software>
</dcc:dccSoftware>
```

### Example 4
As example 3, additionally with ID's:

```xml
<dcc:dccSoftware>
    <dcc:software id="Notepad_plusplus">
        <dcc:name>
            <dcc:content>Notepad++ (32-bit)</dcc:content>
        </dcc:name>
        <dcc:release>v7.7.1</dcc:release>
        <dcc:descriptionn id="dcc44-1">
            <dcc:content lang="de">Erweiterung: XML Tools Plugin version 2.3.2 unicode beta4 r908
            </dcc:content>
            <dcc:content lang="en">Extension: XML Tools Plugin version 2.3.2 unicode beta4 r908
            </dcc:content>
        </dcc:description>
        <dcc:descriptionn id="dcc44-2">
            <dcc:content lang="de">Installation aus dem Softwarecenter</dcc:content>
            <dcc:content lang="en">Installation from the Software Cente</dcc:content>
        </dcc:description>
    </dcc:software>
</dcc:dccSoftware>
```
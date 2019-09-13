# dcc:items

The element *dcc:items* contains all necessary information to identify and describe a set of calibration items or a single calibration item. The element with its child elements can represent a complex composition. Therefore the rough structure of the element is shown in this part of the Wiki. For a more detailed subdivision, please refer to the links. In this part of the wiki we refer to the closer examination of the element item on a further wiki. 

## Tree structure

The tree structure of the element *dcc:items* results from the element type *dcc:itemParameter*. It has the following layout:

<img src="../../images/itemParameter_raw.png" alt="itemParameter_raw" width="425" />

[chart software](../XSD_diagramviewer.md)

## Structure in the XML Schema

#### Note
For reasons of illustration, the sub-elements of the subordinate element are not displayed here. The following XML line is used as placeholders. 

```xml
<xs:element name="item" maxOccurs="unbounded"></xs:element>
```

The Wiki for the element *dcc.item* can be found here:
[dcc:item](item.md)

### Rough structure of element type *dcc:itemParameter* of element *dcc:items*

```xml
<xs:complexType name="itemParameter">
	<xs:sequence>
		<xs:element name="name" type="dcc:textBlock" minOccurs="0"/>
		<xs:element name="description" type="dcc:textBlock" minOccurs="0"/>
		<xs:element name="owner" type="dcc:contact" minOccurs="0"/>
		<xs:element name="item" maxOccurs="unbounded"></xs:element>
	</xs:sequence>
</xs:complexType>

```

## Completion instructions

For more information on the completion instructions, see the Elements subsection.

### Minimum requirements

|[R] <br> Required|[O] <br> Optional|[R\|O]<br>Required \| Optional|
|-|-|-|
|This is a mandatory field. | This is an optional field.|This field may be mandatory, depending on the application.|


### Elements
|Element||Note|
|-|:-:|-|
|dcc:name <br>[dcc:textBlock](../auxElements/textBlock.md)|[O]|This element contains the name of the material to be calibrated or the ensemble to be calibrated.|
|dcc:description <br>[dcc:textBlock](../auxElements/textBlock.md)|[O]|Other information not specified in the *dcc:name* or *dcc:equipmentClass* elements can be specified here.|
|dcc:owner <br>[dcc:contact](../auxElements/contact.md)|[O]|The element *dcc:owner* contains all necessary information to uniquely identify the owner of the calibration object(s).|
|dcc:item [R]<br>[dcc:item](item.md)|[R]|The element *dcc:item* contains all necessary information for each individual calibration object to uniquely identify it. |


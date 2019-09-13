# dcc:textBlock

This complexType can be used to display any text. The element content contains multilingualism.

## Structure in the XML Schema
```xml
<xs:complexType name="textBlock">
	<xs:sequence>
		<xs:element name="content" type="dcc:elementStringWithLang" maxOccurs="unbounded"/>
	</xs:sequence>
	<xs:attribute name="id" type="xs:ID" use="optional"/>
</xs:complexType>
```

## Elements

|Elements||Note
|-|:-:|-|
|dcc:content<br>[dcc:elementStringWithLang](elementStringWithLang.md)||The element is used to enter any text. The data type implements the attribute "lang" for multilingualism.

### Attributes

|Attribut|Comment|
|-|-|
|xs:ID<br>[xs:ID](https://www.w3.org/TR/xmlschema-2/#ID)| This standard dataType of XML is used to represent a unique ID. It is used to uniquely identify the object in the DCC. The data type xs:ID is deliberately used here, as this enables validation without any add-ons in different tools.|

## Examples
The examples are extracts from DCC's.


### Example 1
Here is a simple example without multilingualism:
```xml
<textBlock>
    <content>Das ist ein Beispiel für das Element textBlock.</content>
</textBlock>
```            

### Example 2
Example 1 in the multilingual variant:
```xml
<textBlock>
    <content lang="de">Das ist ein Beispiel für das Element textBlock.</content>
    <content lang="en">This is an example of the textBlock element.</content>
</textBlock>
```            

### Example 3
As example 2, additionally with an ID:
```xml
<textBlock id="Bsp3">
    <content lang="de">Das ist ein Beispiel für das Element textBlock.</content>
    <content lang="en">This is an example of the textBlock element.</content>
</textBlock>
```            

## Note
The multilingualism of text entries is not controlled in this element but in the child element *content*.


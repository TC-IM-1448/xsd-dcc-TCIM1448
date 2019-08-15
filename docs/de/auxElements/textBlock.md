# dcc:textBlock

Dieser complexType kann zur Darstellung von beliebigem Text verwendet werden. Im 
Element content ist die Mehrsprachigkeit enthalten.

## Struktur im XML-Schema
```xml
<xs:complexType name="textBlock">
	<xs:sequence>
		<xs:element name="content" type="dcc:elementStringWithLang" maxOccurs="unbounded"/>
	</xs:sequence>
	<xs:attribute name="id" type="xs:ID" use="optional"/>
</xs:complexType>
```

## Elemente
### dcc:content
Das Element wird zum Eintragen von jeglichem Text verwendet. Über den Datentyp 
wird das Attribut "lang" für die Mehrsprachigkeit implementiert.

Datentyp: [dcc:elementStringWithLang](elementStringWithLang.md)


## Attribute

#### xs:ID
Dieser Standard dataType von XML wird zur Darstellung einer eindeutigen ID verwendet. Er 
dient der eindeutigen Kennzeichnung des Objektes im DCC. Es wird hier bewusst der Datentyp 
xs:ID verwendet, da hiermit eine Validierung ohne irgendwelche AddOns in verschiedenen 
Tools ermöglicht wird.

Datentyp: [xs:ID](https://www.w3.org/TR/xmlschema-2/#ID)

## Beispiele
Die Beispiele sind Auszüge aus DCC's.


### Beispiel 1
Hier ein einfaches Beispiel ohne Mehrsprachigkeit:
```xml
<textBlock>
    <content>Das ist ein Beispiel für das Element textBlock.</content>
</textBlock>
```            

### Beispiel 2
Beispiel 1 in der mehrsprachigen Variante:
```xml
<textBlock>
    <content lang="de">Das ist ein Beispiel für das Element textBlock.</content>
    <content lang="en">This is an example of the textBlock element.</content>
</textBlock>
```            

### Beispiel 3
Wie Beispiel 2, zusätzlich mit einer ID:
```xml
<textBlock id="Bsp3">
    <content lang="de">Das ist ein Beispiel für das Element textBlock.</content>
    <content lang="en">This is an example of the textBlock element.</content>
</textBlock>
```            

## Hinweis
Die Mehrsprachigkeit von Texteingaben wird nicht in diesem Element sondern im Kindelement 
*content* gesteuert.

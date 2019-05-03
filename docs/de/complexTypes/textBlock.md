# complexType textBlock

Dieser complexType kann zur Darstellung von beliebigem Text verwendet werden. Im Element content ist die Mehrsprachigkeit enthalten.

## Aufbau
```xml
<xs:complexType name="textBlock">
	<xs:sequence>
		<xs:element name="content" type="dcc:elementStringWithLang" maxOccurs="unbounded"/>
	</xs:sequence>
	<xs:attribute name="id" type="xs:ID" use="optional"/>
</xs:complexType>
```

## Hinweise
Das Attribut "lang" ist bewusst nicht mehr am Element "textBlock" enthalten. Dadurch kann eine einheitliche Darstellung der Mehrsprachigkeit am Element "content" erreicht werden. 

## Elemente
### [elementStringWithLang](elementStringWithLang.md)
Das Element wird zum Eintragen von jeglichem Text verwendet. Über den Datentyp wird das Attribut "lang" für die Mehrsprachigkeit implementiert.

Datentyp: [dcc:elementStringWithLang](elementStringWithLang.md)


## Attribute

### ID
Die eindeutige Kennzeichnung des Objektes im DCC. Es wird hier bewusst der Datentyp xs:ID verwendet, da hiermit eine Validierung ohne irgendwelche AddOns in verschiedenen Tools ermöglicht wird. 

Datentyp: [xs:ID](../xsd/xs-ID.md)

## Beispiele
Die Beispiele werden der Übersichtlichkeit halber ohne [Namespace](../namespace.md) dargestellt.


### Einfaches Beispiel ohne Mehrsprachigkeit
```xml
<textBlock>
    <content>Hier steht ein Text.</content>
</textBlock>
```            

### Einfaches Beispiel mit Mehrsprachigkeit
```xml
<textBlock>
    <content lang="de">Hier steht ein Text.</content>
    <content lang="en">This is an text.</content>
</textBlock>
```            

### Einfaches Beispiel mit Mehrsprachigkeit und ID
```xml
<textBlock id="abc123">
    <content lang="de">Hier steht ein Text.</content>
    <content lang="en">This is an text.</content>
</textBlock>
```            


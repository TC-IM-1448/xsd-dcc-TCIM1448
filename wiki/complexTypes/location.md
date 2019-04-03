# complexType Location

## Der Aufbau
```xml
<xs:complexType name="location"><!--91100-->
  <xs:choice maxOccurs="unbounded">
    <xs:element name="further" type="dcc:elementStringWithLang"/><!--91110-->
    <xs:element name="street" type="dcc:elementStringWithLang"/><!--91120-->
    <xs:element name="streetNo" type="dcc:elementStringWithLang"/><!--91130-->
    <xs:element name="postOfficeBox" type="dcc:elementStringWithLang"/><!--91140-->
    <xs:element name="postCode" type="dcc:elementStringWithLang"/><!--91150-->
    <xs:element name="city" type="dcc:elementStringWithLang"/><!--91160-->
    <xs:element name="state" type="dcc:elementStringWithLang"/><!--91170-->
    <xs:element name="countryCode" type="dcc:elementStringISO3166"/><!--91180-->
    <xs:element name="descriptionData" type="dcc:byteDataBlock"/><!--91190-->
  </xs:choice>
  <xs:attribute name="lang" type="xs:string" use="optional"/><!--91100_A_L-->
</xs:complexType>
```

## Hinweise
1. Die Verwendung von <choice maxOccurs="unbounded"> ist bewusst gewählt. Dadurch können alle Einträge mehrfach und inbelibiger Reihenfolge verwendet werden.

## Elemente

## Attribute

## Beispiele
Die Beispiele werden der Übersichtlichkeit halber ohne [Namespace](Namespace) dargestellt.






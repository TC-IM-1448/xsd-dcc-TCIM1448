# dcc:elementStringISO3166
In dieses Element wird das Kürzel eines Staates eingegeben. Basis ist die ISO 3166-1 
für die Zuordnung von zwei Großbuchstaben[^1] zu einem Staat.

## Struktur im XML-Schema
```xml
<xs:simpleType name="elementStringISO3166">
	<xs:restriction base="xs:string">
		<xs:pattern value="[A-Z]{2}"/>
	</xs:restriction>
</xs:simpleType>
```

## Datentypen

### [xs:string](https://www.w3.org/TR/xmlschema-2/#string)


## Hinweis

### Erlaubte Werte
Das Element elementStringISO3166 ist so konfiguriert, dass es genau zwei Großbuchstaben 
aufnehmen kann. 

[^1]: https://www.iso.org/obp/ui/#search/code
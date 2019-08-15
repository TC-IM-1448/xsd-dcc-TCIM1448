# dcc:elementStringISO639
In dieses Element wird das Kürzel der Amtssprache eingegeben. Basis ist die ISO 639-1 
für die Sprachenkennung mit zwei Kleinbuchstaben[^1].

## Struktur im XML-Schema
```xml
<xs:simpleType name="elementStringISO639">
	<xs:restriction base="xs:string">
		<xs:pattern value="[a-z]{2}"/>
	</xs:restriction>
</xs:simpleType>
```

## Datentypen

### [xs:string](https://www.w3.org/TR/xmlschema-2/#string)


## Hinweis

### Erlaubte Werte
Das Element elementStringISO639 ist so konfiguriert, dass es genau zwei Kleinbuchstaben 
aufnehmen kann. 

----

[^1]: https://www.bib-bvb.de/web/kkb-online/rda-sprachencode-nach-iso-639
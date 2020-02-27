# dcc:elementStringISO639
The abbreviation of the official language is entered in this element. The basis is ISO 639-1 for the language identifier with two lowercase letters[^1].

## Structure in the XML Schema
```xml
<xs:simpleType name="elementStringISO639">
	<xs:restriction base="xs:string">
		<xs:pattern value="[a-z]{2}"/>
	</xs:restriction>
</xs:simpleType>
```

## Data type

### [xs:string](https://www.w3.org/TR/xmlschema-2/#string)


## Note

### Allowed values
The element elementStringISO639 is configured to accept exactly two lowercase letters. 

[^1]: https://www.bib-bvb.de/web/kkb-online/rda-sprachencode-nach-iso-639
# dcc:elementStringISO3166
The abbreviation of a state is entered in this element. The basis is ISO 3166-1 for the assignment of two capital letters[^1] to a state.

## Structure in XML-Schema
```xml
<xs:simpleType name="elementStringISO3166">
	<xs:restriction base="xs:string">
		<xs:pattern value="[A-Z]{2}"/>
	</xs:restriction>
</xs:simpleType>
```

## Data Type

### [xs:string](https://www.w3.org/TR/xmlschema-2/#string)


## Note

### Allowed values
The element elementStringISO3166 is configured to accept exactly two uppercase letters. 

[^1]: https://www.iso.org/obp/ui/#search/code
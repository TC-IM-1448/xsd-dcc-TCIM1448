# complexType elementStringWithLang

Dieser complexType wird zur Darstellung von Text mit einer Angabe der Sprache (lang) und einer ID verwendet.

## Aufbau
```xml
<xs:complexType name="elementStringWithLang">
	<xs:simpleContent>
		<xs:extension base="xs:string">
			<xs:attribute name="lang" type="dcc:elementStringISO639" use="optional"/>
			<xs:attribute name="id" type="xs:ID" use="optional"/>
		</xs:extension>
	</xs:simpleContent>
</xs:complexType>
```
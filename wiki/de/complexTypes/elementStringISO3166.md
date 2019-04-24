# complexType elementStringISO3166

Dieser complexType wird zur Darstellung von L�nderK�rzeln nach ISO 3166 verwendet.

## Der Aufbau
```xml
<xs:simpleType name="elementStringISO3166">
	<xs:restriction base="xs:string">
		<xs:pattern value="[A-Z]{2}"/>
	</xs:restriction>
</xs:simpleType>
```
# complexType byteDataBlock

Dieser complexType wird zur Darstellung einer Binärdatei (PDF, DOCX, XLSX, etc.) verwendet.

## Der Aufbau
```xml
<xs:complexType name="byteDataBlock">
	<xs:sequence>
		<xs:element name="fileName" type="xs:string"/>
		<xs:element name="mimeType" type="xs:string"/>
		<xs:element name="data" type="xs:base64Binary"/>
	</xs:sequence>
	<xs:attribute name="id" type="xs:ID" use="optional"/>
</xs:complexType>
```




## Attribute

### ID
Die eindeutige Kennzeichnung des Objektes im DCC. Es wird hier bewusst der Datentyp xs:ID verwendet, da hiermit eine Validierung ohne irgendwelche AddOns in verschiedenen Tools ermöglicht wird. 

Datentyp: [xs:ID](wiki/de/xsd/xs-ID.md)



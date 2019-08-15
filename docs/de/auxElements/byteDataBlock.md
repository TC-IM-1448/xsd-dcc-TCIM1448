# dcc:byteDataBlock
Der Elementtyp *dcc:byteDataBlock* dient zur Eingabe beliebigen Informationen, die als 
elektronische Daten vorliegen. 

## Baumstruktur

Die grobe Baumstruktur des Elementtyps *byteDataBlock* hat folgendes Aussehen:

<img src="../../images/byteDataBlock.png" alt="byteDataBlock" width="405" />

[Diagrammsoftware](../XSD_diagramviewer.md)

## Grobstruktur des Datentyps *dcc:byteDataBlock* 
```xml
<xs:complexType name="byteDataBlock">
	<xs:sequence>
		<xs:element name="name" type="dcc:textBlock"/>
		<xs:element name="description" type="dcc:textBlock"/>
		<xs:element name="fileName" type="xs:string"/>
		<xs:element name="mimeType" type="xs:string"/>
		<xs:element name="data" type="xs:base64Binary"/>
	</xs:sequence>
	<xs:attribute name="id" type="xs:ID" use="optional"/><!--92200_A_I-->
</xs:complexType>
```

## Ausfüllanweisungen

Der Elementtyp *dcc:byteDataBlock* wird manchmal aufgerufen. Wenn er aufgerufen wird, 
so sind im Folgenden werden die Elemente, die auszufüllen sind, in der Überschrift 
mit einem "[R]" (steht für Required) gekennzeichnet. Optional auszufüllende Elemente 
werden mit einem "[O]" gekennzeichnet.

### Elemente

#### dcc:name [R]

Angabe des Themas zu der Datei, die beigefügt ist.

Datentyp: [dcc:textBlock](../auxElements/textBlock.md)

#### dcc:description [R]

Angabe des Inhalts der beigefügten Datei.

Datentyp: [dcc:textBlock](../auxElements/textBlock.md)

#### dcc:fileName [R]

Name der beigefügten Datei.

Datentyp: [xs:string](https://www.w3.org/TR/xmlschema-2/#string)

#### dcc:mimeType [R]

Angabe des MIME-Typs der beigefügten Datei.

Datentyp: [xs:string](https://www.w3.org/TR/xmlschema-2/#string)

#### dcc:data [R]

In diesem Element werden die Daten abgelegt, nachdem sie nach dem Base64-Verfahren [^1]
codiert wurden.

Datentyp: [xs:base64Binary](https://www.w3.org/TR/xmlschema-2/#base64Binary)

##### Bemerkungen:

Der byteDataBlock definiert einen Typ, der es erlaubt, binär kodierte Dateien 
hinzuzufügen. Es ist eine bewährte Vorgehensweise, den Base64 Data Encodings Standard 
zu verwenden, RFC 4648 [^1].

Beispiele für den Inhalt sind Bilddateien oder ZIP-Archive. Das Element fileName gibt 
den Namen der Originaldatei an. Das Element mimeType ist der zugrunde liegende Dateityp 
(z.B. zip, jpeg, png). Elementdaten enthalten die base64Binary kodierte Datei.

### Attribute

#### xs:ID
Dieser Standard dataType von XML wird zur Darstellung einer eindeutigen ID verwendet. Er 
dient der eindeutigen Kennzeichnung des Objektes im DCC. Es wird hier bewusst der Datentyp 
xs:ID verwendet, da hiermit eine Validierung ohne irgendwelche AddOns in verschiedenen 
Tools ermöglicht wird.

Datentyp: [xs:ID](https://www.w3.org/TR/xmlschema-2/#ID)

----
[^1]: Base64 Data Encodings standard, siehe RFC 4648: https://tools.ietf.org/html/rfc4648

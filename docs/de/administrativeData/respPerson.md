# dcc:respPersonParameter

Der Elementtyp *dcc:respPersonParameter* wird die für die Freigabe des Berichts verantwortliche 
Person benötigt.

## Baumstruktur 

Die Baumstruktur des Elementtyps *dcc:respPersonParameter* hat folgendes Aussehen:

<img src="../../images/respPersonParameter.png" alt="respPersonParameter" width="665" />

[Diagrammsoftware](../XSD_diagramviewer.md)


## Grobstruktur des Datentyps *dcc:respPersonParameter* vom Element *respPersons*
```xml
<xs:complexType name="respPersonParameter">
	<xs:sequence>
		<xs:element name="respPerson" maxOccurs="unbounded">
			<xs:complexType>
				<xs:sequence>
					<xs:element name="person" type="dcc:contactNotStrict"/>
					<xs:element name="description" type="dcc:textBlock" minOccurs="0"/>
					<xs:element name="mainSigner" type="xs:boolean" minOccurs="0"/>
					<xs:element name="cryptElectronicSeal" type="xs:boolean" minOccurs="0"/>
					<xs:element name="cryptElectronicSignature" type="xs:boolean" minOccurs="0"/>
					<xs:element name="cryptElectronicTimeStamp" type="xs:boolean" minOccurs="0"/>
				</xs:sequence>
				<xs:attribute name="id" type="xs:ID" use="optional"/>
			</xs:complexType>
		</xs:element>
	</xs:sequence>
</xs:complexType>
```


## Ausfüllanweisungen

Weitere Informationen zu den Ausfüllanweisungen sind in dem Unterabschnitt Elemente
zu finden.

### Mindestangaben

im Folgenden werden die Elemente, die auszufüllen sind, in der Überschrift mit einem 
"[R]" (steht für Required) gekennzeichnet. Optional auszufüllende Elemente 
werden mit einem "[O]" gekennzeichnet. 

Es gibt Elemente, die sind in dem einen Anwendungsfall Pflichtfelder und in dem anderen 
Anwendungsfall nicht zwingend auszufüllen. Diese Elemente werden mit [O|R] gekennzeichnet.

### Elemente

#### dcc:person [R]
Name der Person und die Kontaktdaten. 

Datentyp: [dcc:contactNotStrict](../auxElements/contactNotStrict.md)

#### dcc:description [O]
Weitergehende Beschreibung zur Person, soweit sie nicht im Element *person* 
erfolgen konnte. 

Datentyp: [dcc:textBlock](../auxElements/textBlock.md)

#### dcc:mainSigner [R|O]
Eine Person soll die Gesamtverantwortung für den DCC übernehmen. Daher soll 
der Wert für das Kindelement *mainSigner* bei genau einem Element von *respPerson* 
den Wert "WAHR" haben. 

Datentyp: [xs:boolean](https://www.w3.org/TR/xmlschema-2/#boolean)

#### dcc:cryptElectronicSeal [O]
Ist die Person für die Anbringung des kryptographischen elektronischen Siegels 
verantwortlich? In diesem Fall soll das ELement *cryptElectronicSeal* 
den Wert "WAHR" haben. 

Datentyp: [xs:boolean](https://www.w3.org/TR/xmlschema-2/#boolean)

#### dcc:cryptElectronicSignature [O]
Ist die Person für die Anbringung der kryptographischen elektronischen Signatur 
verantwortlich? In diesem Fall soll das ELement *cryptElectronicSignature* 
den Wert "WAHR" haben. 

Datentyp: [xs:boolean](https://www.w3.org/TR/xmlschema-2/#boolean)

#### dcc:cryptElectronicTimeStamp [O]
Ist die Person für die Anbringung des kryptographischen elektronischen Zeitstempels 
verantwortlich? In diesem Fall soll das ELement *cryptElectronicTimeStamp* 
den Wert "WAHR" haben. 

Datentyp: [xs:boolean](https://www.w3.org/TR/xmlschema-2/#boolean)

### Attribute

#### xs:ID
Dieser Standard dataType von XML wird zur Darstellung einer eindeutigen ID verwendet. Er 
dient der eindeutigen Kennzeichnung des Objektes im DCC. Es wird hier bewusst der Datentyp 
xs:ID verwendet, da hiermit eine Validierung ohne irgendwelche AddOns in verschiedenen 
Tools ermöglicht wird.

Datentyp: [xs:ID](https://www.w3.org/TR/xmlschema-2/#ID)

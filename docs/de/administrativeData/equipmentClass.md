# equipmentClass

Das Element *equipmentClass* enthält alle notwendigen Informationen, um einen Satz von 
Kalibriergegenständen bzw. einen einzelnen Kalibriergegenstand anhand eines Klassifikationsschemas 
eindeutig zu erkennen.

## Baumstruktur

Die Baumstruktur des Elements *equipmentClass* ergibt sich über den Elementtyp 
*dcc:equipmentClassParameter*. Er hat folgendes Aussehen:

<!---<img src="../../images/equipmentClass.png" alt="equipmentClass" width="300" /> -->

[Diagrammsoftware](../XSD_diagramviewer.md)

## Struktur im XML-Schema

## Ausfüllanweisungen

Das Element *equipmentClass* ist optional. Wenn es ausgefüllt wird, so sind
im Folgenden werden die Elemente, die auszufüllen sind, in der Überschrift mit einem
"[R]" (steht für Required) gekennzeichnet. Optional auszufüllende Elemente
werden mit einem "[O]" gekennzeichnet.

### Mindestangaben

|[R] <br> Required|[O] <br> Optional|[R\|O]<br>Required \| Optional|
|-|-|-|
|Es handelt sich um ein Pflichtfeld. | Es handelt sich um ein optionales Feld.|Dieses Feld kann je nach Anwendungsfall ein Pflichtfeld sein.|


### Grobstruktur des Datentyps *dcc:equipmentClassParameter* vom Element *equipmentClass*

```xml
<xs:complexType name="equipmentClassParameter">
	<xs:sequence>
		<xs:element name="reference" type="xs:string"/>
		<xs:element name="classID" type="xs:string" maxOccurs="unbounded"/>
	</xs:sequence>
	<xs:attribute name="id" type="xs:ID" use="optional"/>
</xs:complexType>
```
### Elemente

|Element||Bemerkung|
|-|:-:|-|
|reference <br>[xs:string](https://www.w3.org/TR/xmlschema-2/#string)|[R]|Hier ist die Norm bzw. sind die Normen einzutragen, nach denen die Klassifikation der Kalibriergüter erfolgt.| 
|classID |[O]|Hier erfolgt die Eintragung der Klassifikation der Kalibriergüter.|

### Attribute

|Attribut|Bemerkung|
|-|-|
|xs:ID<br>[xs:ID](https://www.w3.org/TR/xmlschema-2/#ID)|Dieser Standard dataType von XML wird zur Darstellung einer eindeutigen ID verwendet. Er dient der eindeutigen Kennzeichnung des Objektes im DCC. Es wird hier bewusst der Datentyp xs:ID verwendet, da hiermit eine Validierung ohne irgendwelche AddOns in verschiedenen Tools ermöglicht wird.|


## Beispiele

### Beispiel 1
In der Norm "Normenname:Jahr" ist für ein Kalibriergut der folgende Nummernsatz angegeben:

- Nummernsatz 1: 1
- Nummernsatz 2: 101
- Nummernsatz 3: 78

Dann folgt für die XML-Datei:

```xml
<dcc:equipmentClass>
	<dcc:reference>Normenname:Jahr</dcc:reference>
	<dcc:classID>1</dcc:classID>
	<dcc:classID>101</dcc:classID>
	<dcc:classID>78</dcc:classID>
</dcc:equipmentClass>
```
### Beispiel 2
In der Norm "Normnumber:jear" ist für ein Kalibriergut der folgende Nummernsatz angegeben:

- Nummernsatz 1: A001
- Nummernsatz 2: B101
- Nummernsatz 3: C078

Weiterhin werden noch ID's verwendet.

Dann folgt für die XML-Datei:

```xml
<dcc:equipmentClass>
	<dcc:reference>Normnumber:jear</dcc:reference>
	<dcc:classID>A001</dcc:classID>
	<dcc:classID>B101</dcc:classID>
	<dcc:classID>C078</dcc:classID>
</dcc:equipmentClass>
```

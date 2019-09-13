# dcc:administrativeData

Das Element *dcc:administrativeData* enthält alle wesentlichen administrativen Informationen
zur Kalibrierung. Die Eintragungen in diesem Bereich sind in allen DCC prinzipiell
gleich und reglementiert.

## Baumstruktur

Die Baumstruktur des Elements *dcc:administrativeData* hat folgendes Aussehen:

<img src="../../images/administrativeData.png" alt="administrativeData" width="508" />

[Diagrammsoftware](../XSD_diagramviewer.md)

## Ausschnitt aus dem XML-Schema
```xml
<xs:element name="administrativeData">
	<xs:complexType>
		<xs:all>
			<xs:element name="dccSoftware" type="dcc:softwareParameter" />
			<xs:element name="coreData" type="dcc:coreDataParameter"/>
			<xs:element name="items" type="dcc:itemParameter"/>
			<xs:element name="calibrationLaboratory" type="dcc:calibrationLaboratoryParameter"/>
			<xs:element name="respPersons" type="dcc:respPersonParameter"/>
			<xs:element name="customer" type="dcc:contact"/>
			<xs:element name="statements" type="dcc:statementParameter" minOccurs="0"/>
		</xs:all>
	</xs:complexType>
</xs:element>
```
## Ausfüllanweisungen

Weitere Informationen zu den Ausfüllanweisungen sind in dem Unterabschnitt Elemente zu finden.

### Mindestangaben
|[R] <br> Required|[O] <br> Optional|[R\|O]<br>Required \| Optional|
|-|-|-|
|Es handelt sich um ein Pflichtfeld. | Es handelt sich um ein optionales Feld.|Dieses Feld kann je nach Anwendungsfall ein Pflichtfeld sein.|


### Elemente


| Element|| Bemerkung  |
|---|:-:|-----|
| [dcc:dccSoftware ](dccSoftware.md) |[R]  | Wesentlichen Informationen zur Identifizierung der eingesetzten Software zur Erstellung und Bearbeitung des DCC sind hier hinterlegt. |
| [dcc:coreData ](coreData.md) | [R] | Wesentliche Informationen zur Identifizierung des Kalibriergutes sowie der globalen Einordnung des Kalibrierscheins. |
| [dcc:items ](items.md)|[R] | Eindeutige Identifizierung, Beschreibung und ggf. Zustand des Kalibriergegenstands. |
| [dcc:calibrationLaboratory ](calibrationLaboratory.md) |[R]| Wesentlichen Informationen zur Identifizierung des Kalibrierlaboratoriums. |
| [dcc:respPersons ](respPersons.md)  |[R] | Benennung der für die Freigabe des Berichts verantwortlichen Person(en).  |
| [dcc:customer ](customer.md)  |[R] | Identifizierung des Auftraggebers der Kalibrierung.|
| [dcc:statements ](statements.md) |[O] | Element für die Eingabe diverser Statements. |
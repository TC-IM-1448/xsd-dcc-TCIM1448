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

Weitere Informationen zu den Ausfüllanweisungen sind in dem Unterabschnitt Elemente
zu finden.

### Mindestangaben

im Folgenden werden die Elemente, die auszufüllen sind, in der Überschrift mit einem 
"[R]" (steht für Required) gekennzeichnet. Optional auszufüllende Elemente 
werden mit einem "[O]" gekennzeichnet. 

Es gibt Elemente, die sind in dem einen Anwendungsfall Pflichtfelder und in dem anderen 
Anwendungsfall nicht zwingend auszufüllen. Diese Elemente werden mit [O|R] gekennzeichnet.


### Elemente

#### [dcc:dccSoftware [R]](dccSoftware.md)
Wesentlichen Informationen zur Identifizierung der eingesetzten Software zur Erstellung 
und Bearbeitung des DCC sind hier hinterlegt. 

#### [dcc:coreData [R]](coreData.md)
Wesentliche Informationen zur Identifizierung des Kalibriergutes sowie der globalen 
Einordnung des Kalibrierscheins.
 
#### [dcc:items [R]](items.md)
Eindeutige Identifizierung, Beschreibung und ggf. Zustand des Kalibriergegenstands.

#### [dcc:calibrationLaboratory [R]](calibrationLaboratory.md)
Wesentlichen Informationen zur Identifizierung des Kalibrierlaboratoriums.

#### [dcc:respPersons [R]](respPersons.md)
Benennung der für die Freigabe des Berichts verantwortlichen Person(en).

#### [dcc:customer [R]](customer.md)
Identifizierung des Auftraggebers der Kalibrierung.

#### [dcc:statements [O]](statements.md)
Element für die Eingabe diverser Statements.

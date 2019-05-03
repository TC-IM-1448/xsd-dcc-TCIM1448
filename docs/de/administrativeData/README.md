# administrativeData
Dieser Bereich (Ring) enthält alle Daten die für die verwaltungstechnische Verarbeitung des Auftrags von nöten sind.
Es ist der Ring 1.

## Aufbau
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

## Hinweise
--keine--

## Elemente

### [dccSoftware](dccSoftware.md)
Wesentlichen Informationen zur Identifizierung der eingesetzten Software zur Erstellung und Bearbeitung des DCC sind hier hinterlegt. 

Welche Software (mit Versionsangabe) wurde für die Erstellung verwendet. Hieraus können Rückschlüsse gezogen werden, bei fehlerhaftem XML. Diese Angabe ist z. B. für die Fehlersuche immens wichtig.

### [coreData](coreData.md)
Wesentliche Informationen zur Identifizierung des Kalibriergutes sowie der globalen Einordnung des Kalibrierscheins.
 
### [items](items.md)
Eindeutige Identifizierung, Beschreibung und ggf. Zustand des Kalibriergegenstands (oder des Materials, von dem die Proben genommen wurden).

### [calibrationLaboratory](calibrationLaboratory.md)
Wesentlichen Informationen zur Identifizierung des Kalibrierlaboratoriums.

### [respPersons](respPerson.md)
Benennung der für die Freigabe des Berichts verantwortlichen Person(en).

### [customer](customer.md)
Identifizierung des Auftraggebers der Kalibrierung.

### [statements](statements.md)
Element für die Eingabe diverser Statements.

## Attribute
--keine--

## Beispiele
Die Beispiele werden der Übersichtlichkeit halber ohne [Namespace](../namespace.md) dargestellt.








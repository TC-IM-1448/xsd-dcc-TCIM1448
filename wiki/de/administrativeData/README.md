# administrativeData
Dieser Bereich (Ring) enthält alle Daten die für die verwaltungstechnische Verarbeitung des Auftrags von nöten sind.
Es ist der Ring 1.

## Der Aufbau
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

### [dccSoftware](wiki/de/administrativeData/dccSoftware.md)
Wesentlichen Informationen zur Identifizierung der eingesetzten Software zur Erstellung und Bearbeitung des DCC sind hier hinterlegt. 

Welche Software (mit Versionsangabe) wurde für die Erstellung verwendet. Hieraus können Rückschlüsse gezogen werden, bei fehlerhaftem XML. Diese Angabe ist z. B. für die Fehlersuche imens wichtig.

### [coreData](wiki/de/administrativeData/coreData.md)
Wesentliche Informationen zur Identifizierung des Kalibriergutes sowie der globalen Einordnung des Kalibrierscheins.
 
### [items](wiki/de/administrativeData/items.md)
Eindeutige Identifizierung, Beschreibung und ggf. Zustand des Kalibriergegenstands (oder des Materials, von dem die Proben genommen wurden).

### [calibrationLaboratory](wiki/de/administrativeData/calibrationLaboratory.md)
Wesentlichen Informationen zur Identifizierung des Kalibrierlaboratoriums.

### [respPersons](wiki/de/administrativeData/respPersons.md)
Benennung der für die Freigabe des Berichts verantwortlichen Person(en).

### [customer](wiki/de/administrativeData/customer.md)
Identifizierung des Auftraggebers der Kalibrierung.

### [statements](administrativeData/statements.md)
Element für die Eingabe diverser Statements.

## Attribute
--keine--

## Beispiele
Die Beispiele werden der Übersichtlichkeit halber ohne [Namespace](wiki/de/namespace.md) dargestellt.








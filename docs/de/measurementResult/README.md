# dcc:measurementResults
(In der Entwicklung)

Das Element *dcc:measurementResults* enthält alle Ergebnisse der Messungen, Auswertungen und Informationen zur Kalibrierung. Die Eintragungen in diesem Bereich sind immer so, dass ein Wert immer mit einer Einheit verknüpft ist. Es sollten immer SI-Einheiten verwendet werden. 

## Baumstruktur

Die Baumstruktur des Elements *dcc:measurementResults* hat folgendes Aussehen:

<img src="../../images/measurementResults.png" alt="measurementResults" width="450" />

[Diagrammsoftware](../XSD_diagramviewer.md)

## Ausfüllanweisungen

Weitere Informationen zu den Ausfüllanweisungen sind in dem Unterabschnitt Elemente zu finden.

### Mindestangaben
|[R] <br> Required|[O] <br> Optional|[R\|O]<br>Required \| Optional|
|-|-|-|
|Es handelt sich um ein Pflichtfeld. | Es handelt sich um ein optionales Feld.|Dieses Feld kann je nach Anwendungsfall ein Pflichtfeld sein.|


### Elemente

Das Element *dcc:measurementResults* hat nur das Kindelemenent *dcc:measurementResult*.

| Element|| Bemerkung  |
|---|:-:|-----|
| dcc:measurementResult |[R]  | Das Element *dcc:measurementResult* kann beliebeig oft aufgerufen werden. |

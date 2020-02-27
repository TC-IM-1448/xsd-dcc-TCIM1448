# Das Root-Element und seine Elemente
Das Root-Element oder auch Wurzelelement *dcc:digitalCalibrationCertificate* hat vier Elemente:

<img src="../images/root_with_rings.png" alt="digitalCalibrationCertificate" width="700" />


[Diagrammsoftware](XSD_diagramviewer.md)


## Grobe Beschreibung der Funktion der vier Elemente

### [dcc:administrativeData](administrativeData/README.md) (Ring 1)
Das Element *administrativeData* enthält alle wesentlichen administrativen Informationen zur Kalibrierung. Die Eintragungen in diesem Bereich sind in allen DCC prinzipiell 
gleich und reglementiert.

### [dcc:measurementResult](measurementResult/README.md) (Ring 2)
Im Element *measurementResult* werden alle Informationen zum Ergebnis der Messung 
hinterlegt. Die Mess- und Ergebnisdaten müssen einen Wert und eine Einheit haben. 
Die Einheit ist idealerweise eine SI-Einheit. 

Aufgrund der unterschiedlichen Anforderungen in den einzelnen Bereichen an die 
Kalibrierung unterscheiden sich die DCC entsprechend. So ist es logisch, dass 
sich DCC's aus dem Bereich der Akustik von denen aus dem Bereich der Zyklotronstrahlung 
unterscheiden.

### [dcc:comments](comments/README.md) (Ring 3)

In dieses Element können alle weiteren Informationen und Dateien eingefügt werden, 
die zwischen Auftraggeber und Kalibrierlaboratorium vereinbart wurden. Dateien 
unterschiedlichster Art (z. B. Ergebnisse aus Tabellenkalkulationsprogrammen) werden 
dazu mithilfe des Base64-Verfahrens [^1] so umgewandelt, dass sie in der XML-Struktur 
gespeichert werden können. Aus der XML-Struktur können sie dann wieder entnommen 
werde und mit dem Base64-Verfahren fehlerfrei wieder zurückgewandelt werden. 

[^1]: https://tools.ietf.org/html/rfc4648

### [dcc:document](document/README.md) (Ring 4)

Das Element *document* enthält die menschenlesbare Variante des DCC. 



# dcc:document

Das Element document enthält die menschenlesbare Variante des DCC.

In dieses Element können alle weiteren Informationen und Dateien eingefügt werden, 
die zwischen Auftraggeber und Kalibrierlaboratorium vereinbart wurden. Dateien 
unterschiedlichster Art (z. B. Ergebnisse aus Tabellenkalkulationsprogrammen) werden 
dazu mithilfe des Base64-Verfahrens [^1] so umgewandelt, dass sie in der XML-Struktur 
gespeichert werden können. Aus der XML-Struktur können sie dann wieder entnommen 
werde und mit dem Base64-Verfahren fehlerfrei wieder zurückgewandelt werden. 


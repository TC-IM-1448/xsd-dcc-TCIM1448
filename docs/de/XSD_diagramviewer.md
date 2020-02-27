# XSD Diagram Viewer

## Quelle

Für die Darstellung der Struktur des DCC-Schemas nutzen wir zwei verschiendene Softwaretools. Bei einfachen Strukturen wird die Software *XSD Diagram* [^1] verwendet. Wenn es wichtig ist, mehr Informationen darzustellen,wie z. B, den verwendeten Datentyp eines Elements oder seine Attribute, dann nutzen wir die Software *Altova XMLSpy 2018* [^2]. Diese Darstellugnen sind mit dem Softwarehinweis versehen.

[^1]: *XSD Diagram is a free xml schema definition diagram viewer (http://regis.cosnier.free.fr).
Version 1.2 Copyright (c) 2006-2018 Regis Cosnier, All Rights Reserved.
This program is free software and may be distributed
according to the terms of the GNU General Public License (GPL).*

[^2]: XMLSpy Verion 2018 des Herstellers Altova GmbH, Rudolfsplatz 13a/9, A-1010 Wien 
https://www.altova.com/de/xmlspy-xml-editor

## Nomenklatur

### Häufigkeit der Elemente

XML-Elemente können unterschiedlich oft auftreten. Dazu verwendet *XSD Diagram* die folgende Nomenklatur:

||||
|-|-|-|
| 1-mal: | <img src="../XSD_diagram_SW/Element_genau_einmal.png" alt="Genau einmal" width="200" /> ||
| 1- bis unbegrenzt-mal: | <img src="../XSD_diagram_SW/1_unbegrenzt_Mal.png" alt="1_unbegrenzt" width="200" /> | Auch andere Eingaben sind möglich,<br>z. B. 0 - unbegrenzt-mal oder 3  - 7-mal.|
| 0- oder 1-mal: | <img src="../XSD_diagram_SW/0_1_Mal.png" alt="0_1" width="135" /> ||


### Kindelelemente

Wenn ein Element Kindelemente hat, dann ist auf der rechten Seite ein aufklappbarer Link mit einem "+" vermerkt. Klickt man darauf, so sieht man die Elemente der nächsten Ebene.

| | |
|---|---|
| zugeklappt: | <img src="../XSD_diagram_SW/measurementResults.png" alt="Kindelement_zu" width="200" />  |
| aufgeklappt: | <img src="../XSD_diagram_SW/aufgeklappt.png" alt="Kindelement_zu" width="450" />|
|Element ohne Kindelement:| <img src="../XSD_diagram_SW/content.png" alt="Kindelement_ohne" width="115" />|



### Anordnung und Auswahl der Kindelemente eines Elements

| | |
|---|---|
|Die Kindelemente können in **belibieger Reihenfolge** angeordnet werden.|<img src="../XSD_diagram_SW/all.png" alt="xs_all" width="70" />|
|Die Kindelemente müssen in **vorgegebener Reihenfolge** angeordnet werden.|<img src="../XSD_diagram_SW/sequence.png" alt="xs_sequence" width="70" />|
|Genau **ein** Kindelement muss ausgewählt werden.|<img src="../XSD_diagram_SW/choice.png" alt="xs_choice" width="70" />|
|Rekursiv aufgerufene Elemente<br>hier als Beispiel das Element *dcc:hash* - werden wiefolgt dargestellt:|<img src="../XSD_diagram_SW/recursive.jpg" alt="recursive" width="400" />


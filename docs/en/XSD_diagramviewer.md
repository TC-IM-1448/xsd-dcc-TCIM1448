# XSD Diagram Viewer

## Source

For the representation of the structure of the DCC schema we use two different software tools. For simple structures the software *XSD Diagram* [^1] is used. If it is important to display more information, such as the type of data used for an element or its attributes, we use *Altova XMLSpy 2018* [^2] software. These representations are marked with the software hint.

[^1]: *XSD Diagram is a free xml schema definition diagram viewer (http://regis.cosnier.free.fr).
Version 1.2 Copyright (c) 2006-2018 Regis Cosnier, All Rights Reserved.
This program is free software and may be distributed
according to the terms of the GNU General Public License (GPL).*

[^2]: XMLSpy Verion 2018 des Herstellers Altova GmbH, Rudolfsplatz 13a/9, A-1010 Wien 
https://www.altova.com/de/xmlspy-xml-editor

## Nomenclature

### Frequency of elements

XML elements can occur different times. To do this, XSD Diagram uses the option the following nomenclature:

||||
|-|-|-|
| exactly 1: | <img src="../XSD_diagram_SW/Element_genau_einmal.png" alt="Genau einmal" width="200" /> ||
| 1 to unbounded: | <img src="../XSD_diagram_SW/1_unbegrenzt_Mal.png" alt="1_unbegrenzt" width="200" /> | Other entries are also possible, e.g. 0 - unbounded times or 3 to 7 times.|
|0 or 1: | <img src="../XSD_diagram_SW/0_1_Mal.png" alt="0_1" width="135" /> ||


### Child elements

If an element has child elements, there is a link on the right side with a "+". If you click on it, you will see the elements of the next level.

| | |
|---|---|
| collapsed: | <img src="../XSD_diagram_SW/measurementResults.png" alt="Kindelement_zu" width="200" />  |
| opened: | <img src="../XSD_diagram_SW/aufgeklappt.png" alt="Kindelement_zu" width="450" />|
|Element without Child:| <img src="../XSD_diagram_SW/content.png" alt="Kindelement_ohne" width="115" />|



### Arrangement and selection of child elements

| | |
|---|---|
|The child elements can be arranged in **any order**.|<img src="../XSD_diagram_SW/all.png" alt="xs_all" width="70" />|
|The child elements must be arranged in the **current order**.|<img src="../XSD_diagram_SW/sequence.png" alt="xs_sequence" width="70" />|
|Exactly **one** child element must be selected.|<img src="../XSD_diagram_SW/choice.png" alt="xs_choice" width="70" />|
|Recursively called elements,<br>here as an example the element *dcc:hash* - are displayed as follows:|<img src="../XSD_diagram_SW/recursive.jpg" alt="recursive" width="400" />


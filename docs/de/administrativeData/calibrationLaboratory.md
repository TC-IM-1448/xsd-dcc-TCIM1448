# dcc:calibrationLaboratory

Im Elementtyp *dcc:calibrationLaboratory* sind wesentliche Informationen zum 
Kalibrierlaboratorium hinterlegt.

## Baumstruktur

Die Baumstruktur des Elements *dcc:calibrationLaboratory* ergibt sich über den Elementtyp 
*dcc:calibrationLaboratoryParameter*. Er hat folgendes Aussehen:

<img src="../../images/calibrationLaboratoryParameter.png" alt="calibrationLaboratoryParameter" width="500" />

[Diagrammsoftware](../XSD_diagramviewer.md)

## Grobstruktur des Datentyps *dcc:calibrationLaboratoryParameter* vom Element *dcc:calibrationLaboratory*
```xml
<xs:complexType name="calibrationLaboratoryParameter">
    <xs:sequence>
        <xs:element name="calibrationLaboratoryCode" type="xs:string" minOccurs="0"/>
        <xs:element name="contact" type="dcc:contact" maxOccurs="unbounded"/>
    </xs:sequence>
</xs:complexType>
```

## Ausfüllanweisungen

Weitere Informationen zu den Ausfüllanweisungen sind in dem Unterabschnitt Elemente
zu finden.

### Mindestangaben

|[R] <br> Required|[O] <br> Optional|[R\|O]<br>Required \| Optional|
|-|-|-|
|Es handelt sich um ein Pflichtfeld. | Es handelt sich um ein optionales Feld.|Dieses Feld kann je nach Anwendungsfall ein Pflichtfeld sein.|



|<img src="../../images/flagPTB_DE.jpg" alt="PTB" height="30" />| <img src="../../images/flagDAkkS_DE.png" alt="DAkkS" height="30" />|
|-|-|
|PTB-spezifische Eingaben sind durch das Logo der PTB gekennzeichnet.|DAkkS-spezifische Eingaben sind durch das Logo der DAkkS gekennzeichnet.|

### Elemente

| Element        || Bemerkung  |
|---|:-:|---|
| dcc:calibrationLaboratoryCode <br> [xs:string](https://www.w3.org/TR/xmlschema-2/#string) |[O\|R]| Hat das Kalibrierlaboratorium eine ihm zugewiesene Kennung, so ist sie an dieser Stelle einzutragen. <br><br> <img src="../../images/flagPTB_DE.jpg" alt="PTB" height="30" /> <br> Die PTB hat keine zugewiesene Kennung. Daher bleibt dieses Element leer.<br>   <br> <img src="../../images/flagDAkkS_DE.png" alt="DAkkS" height="30" /> <br> Die von der Deutschen Akkreditierungsstelle GmbH (DAkkS) akkreditierten Kalibrierlaboratorien haben eine Kennung zugewiesen bekommen. Diese ist hier einzutragen.               |
| dcc:contact <br> [dcc:contact](../auxElements/contact.md)| [R]| Das Element *contact* enthält alle notwendigen Informationen, um das Kalibrierlaboratorium eindeutig zu identifizieren. |
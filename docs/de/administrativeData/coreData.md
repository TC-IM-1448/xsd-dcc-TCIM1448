# dcc:coreData

Im Element *dcc:coreData* sind wesentliche Informationen zur globalen Einordnung der 
Kalibrierung zu finden.

## Baumstruktur

Die Baumstruktur des Elements *dcc:coreData* ergibt sich über den Elementtyp 
*dcc:coreDataParameter*. Er hat folgendes Aussehen:

<img src="../../images/coreDataParameter.png" alt="coreDataParameter" width="475" />

[Diagrammsoftware](../XSD_diagramviewer.md)

## Grobstruktur des Elementtyp *dcc:coreDataParameter* vom Element *coreData*
```xml
<xs:complexType name="coreDataParameter">
    <xs:sequence>
        <xs:element name="countryCodeISO3166_1" type="dcc:elementStringISO3166"/>
        <xs:element name="usedLangCodeISO639_1" type="dcc:elementStringISO639" 
        maxOccurs="unbounded"/>
        <xs:element name="mandatoryLangCodeISO639_1" type="dcc:elementStringISO639" 
        maxOccurs="unbounded"/>
        <xs:element name="uniqueIdentifier" type="xs:string"/>
        <xs:element name="receiptDate" type="xs:date" minOccurs="0"/>
        <xs:element name="beginPerformanceDate" type="xs:date" />
        <xs:element name="endPerformanceDate" type="xs:date"/>
        <xs:element name="previousReport" type="dcc:hash" minOccurs="0"/>
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

|<img src="../../images/flagPTB_DE.jpg" alt="PTB" height="30" />|
|-|
|PTB-spezifische Eingaben sind durch das<br> Logo der PTB gekennzeichnet.|

### Elemente

| Element || Bemerkung |
|----|:-:|-|
| dcc:countryCodeISO3166_1 <br> [dcc:elementStringISO3166](../auxElements/elementStringISO3166.md) |[R]| In welchem Land wurde die Kalibrierung durchgeführt? Die Angabe erfolgt in dem in der ISO 3166 festgelegten Ländercode (zwei Großbuchstaben). Nähere Angaben dazu finden Sie in der Beschreibung des Datentyps. <br> <br> <img src="../../images/flagDE.png" alt="DE" height="30" /> <img src="../../images/flagPTB_DE.jpg" alt="PTB" height="30" />`<countryCodeISO3166_1>DE</countryCodeISO3166_1>`|
|dcc:langCodeISO639_1<br>[dcc:elementStringISO639_1](../auxElements/elementStringISO639.md) |[R]|Angabe der Amtssprache(n), in denen der DCC erstellt wurde. Die Angabe erfolgt in dem in der ISO 639 festgelegten Code für die Amtssprachen (zwei Kleinbuchstaben). Nähere Angaben dazu finden Sie in der Beschreibung des Datentyps.<br> <br> <img src="../../images/flagDE.png" alt="DE" height="30" /> <img src="../../images/flagPTB_DE.jpg" alt="PTB" height="30" /><br>In Deutschland und in der PTB werden sehr oft DCC's in Deutsch (de) und Englisch (en) ausgestellt:`<langCodeISO639_1>de</langCodeISO639_1>`<br>`<langCodeISO639_1>en</langCodeISO639_1>`|
|dcc:mandatoryLangISO639_1<br> [dcc:elementStringISO639](../auxElements/elementStringISO639.md) |[R]|Festlegung der Amtssprache(n), die im Zweifelsfall gültig ist. Die Angabe erfolgt in dem in der ISO 639 festgelegten Code für die Amtssprachen (zwei Kleinbuchstaben). Nähere Angaben dazu finden Sie in der Beschreibung des Datentyps.<br> <br> <img src="../../images/flagDE.png" alt="DE" height="30" /> <img src="../../images/flagPTB_DE.jpg" alt="PTB" height="30" /><br>In Deutschland und in der PTB wird sehr oft Deutsch (de) angegeben:<br> `<mandatoryLangISO639_1>de</mandatoryLangISO639_1>`|
| dcc:uniqueIdentifier<br>[xs:string](https://www.w3.org/TR/xmlschema-2/#string) |[R]|Ein weltweit eindeutiger Identifizierer für den DCC (Kalibrierscheinnummer) ist hier anzugeben. Notwendige Bedingung dafür ist, dass der Identifizierer in der Organisation, in der das Kalibrierlaboratorium beheimatet ist, eindeutig ist. <br>Auf das Issue #62 sei verwiesen.
|dcc:receiptDate<br>[xs:date](https://www.w3.org/TR/xmlschema-2/#date)|[O\|R]|Datum des Eingangs des Kalibriergegenstands. Das Datum ist anzugeben, wenn es einen zeitlichen Einfluss auf das Kalibrierergebnis hat.|
|dcc:beginPerformanceDate<br>[xs:date](https://www.w3.org/TR/xmlschema-2/#date)|[R]|Datum bei Beginn der Durchführung der Labortätigkeit.<br>In der DIN EN ISO/IEC 17025:2018-03 [^1] ist festgelegt, dass das Datum bzw. der Zeitraum der Kalibrierung ein wesentlicher Bestandteil eines Kalibrierzertifikats ist. Daher sind die Elemente beginPerformanceDate und endPerformanceDate auszufüllen. Für den Fall, dass die Kalibrierung an einem Tag durchgeführt wird, ist demnach in beiden Elementen dasselbe Datum einzutragen.
|dcc:endPerformanceDate<br>[xs:date](https://www.w3.org/TR/xmlschema-2/#date) |[R]|Datum bei Ende der Durchführung der Labortätigkeit.<br>In der DIN EN ISO/IEC 17025:2018-03 [^1] ist festgelegt, dass das Datum bzw. der Zeitraum der Kalibrierung ein wesentlicher Bestandteil eines Kalibrierzertifikats ist. Daher sind die Elemente beginPerformanceDate und endPerformanceDate auszufüllen. Für den Fall, dass die Kalibrierung an einem Tag durchgeführt wird, ist demnach in beiden Elementen dasselbe Datum einzutragen.|
|[dcc:previousReport ](previousReport.md)<br>dcc:hash |[O]|Das Element  *dcc:previousReport* gibt die Möglichkeit, auf das Vorgängerkalibrierzertifikat zu verweisen, die durch diesen DCC ersetzt wurde. Es kann eine Kette von Kalibrierzertifikaten angeggeben werden.






## Beispiele
Die folgenden Beispiele verwenden das Element *dcc:previousReport* nicht. Diese 
Beispiele sind im Wiki zu *previousReport* zu finden.

### Beispiel 1

Der DCC wurde in der Schweiz ausgestellt. Die verwendete Sprache 
und damit logischerweise auch die Sprache, die im Zweifelsfall gilt, ist Deutsch. 
Die eindeutige Identifikationsnummer (die Kalibrierscheinnummer) ist "1234" und die
Kalibrierung wurde am 2002-09-25 durchgeführt.

```xml
<coreData>
	<countryCodeISO3166_1>CH</countryCodeISO3166_1>
	<langCodeISO639_1>de</langCodeISO639_1>
	<mandatoryLangISO639_1>de</mandatoryLangISO639_1>
	<uniqueIdentifier>1234</uniqueIdentifier>
	<beginPerformanceDate>2002-09-25</beginPerformanceDate>
	<endPerformanceDate>2002-09-25</endPerformanceDate>
</coreData>
```

### Beispiel 2

Der DCC wurde in Belgien ausgestellt. Die verwendete Sprachen sind Französisch, 
Niederländisch und Deutsch. Die im Zweifel gültige Sprache sind Französisch und 
Niederländisch. Die eindeutige Identifikationsnummer (die Kalibrierscheinnummer) 
ist "5678" und mit der Kalibrierung wurde am 2002-07-25 begonnen und sie endete am
2002-07-27.


```xml
<coreData>
	<countryCodeISO3166_1>BE</countryCodeISO3166_1>
	<langCodeISO639_1>fr</langCodeISO639_1>
	<langCodeISO639_1>nl</langCodeISO639_1>
	<langCodeISO639_1>de</langCodeISO639_1>
	<mandatoryLangISO639_1>fr</mandatoryLangISO639_1>
	<mandatoryLangISO639_1>nl</mandatoryLangISO639_1>
	<uniqueIdentifier>5678</uniqueIdentifier>
	<receiptDate>2002-09-10</receiptDate>
	<beginPerformanceDate>2002-07-25</beginPerformanceDate>
	<endPerformanceDate>2002-07-27</endPerformanceDate>
</coreData>
```

[^1]: DIN EN ISO/IEC 17025:2018-03 General requirements for the competence of testing 
and calibration laboratories 
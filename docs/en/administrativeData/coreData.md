# dcc:coreData

The element *dcc:coreData* contains essential information on the global classification of the calibration.

## Tree structure

The tree structure of the element *dcc:coreData* results from the element type *dcc:coreDataParameter*. It has the following layout:

<img src="../../images/coreDataParameter.png" alt="coreDataParameter" width="475" />

[chart software](../XSD_diagramviewer.md)

## Rough structure of element type *dcc:coreDataParameter* of element *coreData*
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

## Completion instructions

For more information on the completion instructions, see the Elements subsection.

### Minimum requirements

|[R] <br> Required|[O] <br> Optional|[R\|O]<br>Required \| Optional|
|-|-|-|
|This is a mandatory field. | This is an optional field.|This field may be mandatory, depending on the application.|



|<img src="../../images/flagPTB_DE.jpg" alt="PTB" height="30" />|
|-|
|PTB-specific entries are identified<br>by the PTB logo.|

### Elemente

| Element || Note |
|----|:-:|-|
| dcc:countryCodeISO3166_1 <br> [dcc:elementStringISO3166](../auxElements/elementStringISO3166.md) |[R]| In which country was the calibration carried out? The information is given in the country code defined in ISO 3166 (two capital letters). You will find more detailed information in the description of the data type. <br> <br> <img src="../../images/flagDE.png" alt="DE" height="30" /> <img src="../../images/flagPTB_DE.jpg" alt="PTB" height="30" />`<countryCodeISO3166_1>DE</countryCodeISO3166_1>`|
|dcc:langCodeISO639_1<br>[dcc:elementStringISO639_1](../auxElements/elementStringISO639.md) |[R]|Indication of the official language(s) in which the DCC was drawn up. The code for the official languages as defined in ISO 639 (two lower-case letters). You will find more detailed information in the description of the data type.<br> <br> <img src="../../images/flagDE.png" alt="DE" height="30" /> <img src="../../images/flagPTB_DE.jpg" alt="PTB" height="30" /><br>In Germany and at PTB, DCC's are very often issued in German (de) and English (en): `<langCodeISO639_1>de</langCodeISO639_1>`<br>`<langCodeISO639_1>en</langCodeISO639_1>`|
|dcc:mandatoryLangISO639_1<br> [dcc:elementStringISO639](../auxElements/elementStringISO639.md) |[R]|Determination of the official language(s) to be used in case of doubt. The information is given in the code for the official languages (two lower-case letters) laid down in ISO 639. You will find more detailed information in the description of the data type.<br> <br> <img src="../../images/flagDE.png" alt="DE" height="30" /> <img src="../../images/flagPTB_DE.jpg" alt="PTB" height="30" /><br>In Germany and at the PTB, German (de) is very often given:<br> `<mandatoryLangISO639_1>de</mandatoryLangISO639_1>`|
| dcc:uniqueIdentifier<br>[xs:string](https://www.w3.org/TR/xmlschema-2/#string) |[R]|A globally unique identifier for the DCC (calibration certificate number) must be specified here. The necessary condition for this is that the identifier is unique in the organisation in which the calibration laboratory is located. <br>Reference is made to Issue #62.
|dcc:receiptDate<br>[xs:date](https://www.w3.org/TR/xmlschema-2/#date)|[O\|R]|Date of receipt of the calibration object. The date shall be indicated if it has a temporal influence on the calibration result.|
|dcc:beginPerformanceDate<br>[xs:date](https://www.w3.org/TR/xmlschema-2/#date)|[R]|Date at the start of the laboratory activity.<br>DIN EN ISO/IEC 17025:2018-03 [^1] specifies that the date or period of calibration is an essential part of a calibration certificate. Therefore the elements beginPerformanceDate and endPerformanceDate have to be filled in. If the calibration is performed on one day, the same date must be entered in both elements.
|dcc:endPerformanceDate<br>[xs:date](https://www.w3.org/TR/xmlschema-2/#date) |[R]|Date at the end of the laboratory activity.<br>DIN EN ISO/IEC 17025:2018-03 [^1] specifies that the date or period of calibration is an essential part of a calibration certificate. Therefore the elements beginPerformanceDate and endPerformanceDate have to be filled in. If the calibration is performed on one day, the same date must be entered in both elements.|
|[dcc:previousReport ](previousReport.md)<br>dcc:hash |[O]|The *dcc:previousReport* element allows you to refer to the previous calibration certificate replaced by this DCC.<br> A chain of calibration certificates can be specified.






## Examples
The following examples do not use the *dcc:previousReport* element. This 
Examples can be found in the wiki of *previousReport*. <!--set Link previousReport-->

### Example 1

The DCC was exhibited in Switzerland. The language used, and thus logically the language that applies in case of doubt, is German. The unique identification number (the calibration certificate number) is "1234" and the calibration was carried out on 2002-09-25.

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

### Example 2

The DCC was exhibited in Belgium. The languages used are French, Dutch and German. French and Dutch are valid languages in case of doubt. The unique identification number (the calibration certificate number) is "5678" and calibration started on 2002-07-25 and ended on 2002-07-27.


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

[^1]: DIN EN ISO/IEC 17025:2018-03 General requirements for the competence of testing and calibration laboratories 
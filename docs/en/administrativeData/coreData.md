# coreData

Essential information for the identification of the calibration material as well as the global classification of the calibration certificate.

## Construction
```xml
<xs:complexType name="coreDataParameter">
    <xs:sequence>
        <xs:element name="countryCodeISO3166_1" type="dcc:elementStringISO3166"/>
        <xs:element name="usedLangCodeISO639_1" type="dcc:elementStringISO639" maxOccurs="unbounded"/>
        <xs:element name="mandatoryLangCodeISO639_1" type="dcc:elementStringISO639" maxOccurs="unbounded"/>
        <xs:element name="uniqueIdentifier" type="xs:string"/>
        <xs:element name="receiptDate" type="xs:date" minOccurs="0"/>
        
        <xs:element name="beginPerformanceDate" type="xs:date" />
        <xs:element name="endPerformanceDate" type="xs:date"/>
        
        <xs:element name="previousReport" type="dcc:hash" minOccurs="0"/>
    </xs:sequence>
</xs:complexType>
```

## Hints

### 1. Hint
We consciously go beyond DIN ISO 17025 by defining the elements "endPerformanceDate" and "beginPerformanceDate" as mandatory. The 17025 says: Both details can be omitted if justified. But, these two details must be maintained by the performer of the calibration.

If there is only one value, both fields must be filled with an identical value!


## Elements

### [countryCodeISO3166_1](../complexTypes/elementStringISO3166.md)
In which country was the calibration performed?

Datatype: [dcc:textBlock](../complexTypes/elementStringISO3166.md)

### [langCodeISO639_1](../complexTypes/elementStringISO639.md)
Official languages in which the DCC was created.

Datatype: [dcc:textBlock](../complexTypes/elementStringISO639.md)

### [mandatoryLangISO639_1](../complexTypes/elementStringISO639.md)
Determination of the official language, which is valid in case of doubt.

Datatype: [dcc:textBlock](../complexTypes/elementStringISO639.md)

### uniqueIdentifier
Worldwide unique identifier for the DCC (calibration certificate number).
Central identifier in the human-readable part of the DCC.

### receiptDate
Date of receipt of the calibration item.

### beginPerformanceDate
Date (the data) at the start of the laboratory work.

### endPerformanceDate
Date (the data) at the end of the laboratory work.

### [previousReport](../complexTypes/hash.md)
Reference to the old calibration certificate, which this DCC replaces.

Datatype: [dcc:textBlock](../complexTypes/hash.md)

## Attributes
--none--

## Examples
For the sake of clarity, the examples are shown without [namespace] (namespace.md).

### simple, minimum information
```xml
<coreData>

  <countryCodeISO3166_1>DE</countryCodeISO3166_1>
  <langCodeISO639_1>de</langCodeISO639_1>
  <mandatoryLangISO639_1>de</mandatoryLangISO639_1>
  <uniqueIdentifier>4711-0815</uniqueIdentifier>
  <beginPerformanceDate>2002-09-24</beginPerformanceDate>
  <endPerformanceDate>2002-09-25</endPerformanceDate>

</coreData>
```

### simple, all information
```xml
<coreData>

  <countryCodeISO3166_1>DE</countryCodeISO3166_1>
  <langCodeISO639_1>de</langCodeISO639_1>
  <mandatoryLangISO639_1>de</mandatoryLangISO639_1>
  <uniqueIdentifier>4711-0815</uniqueIdentifier>
  <receiptDate>2002-09-10</receiptDate>
  <samplingDate>2002-09-09</samplingDate>
  <beginPerformanceDate>2002-09-24</beginPerformanceDate>
  <endPerformanceDate>2002-09-25</endPerformanceDate>
  <previousReport id="42">
    <reference>
      <content>DCC</content>
    </reference>
    <referenceID>
      <content>4711-0816</content>
    </referenceID>
    <procedure>MD5</procedure>
    <value>a8b4568c3ff</value>
  </previousReport>

</coreData>
```

### more complex, all information
```xml
<coreData>

  <countryCodeISO3166_1>DE</countryCodeISO3166_1>
  <langCodeISO639_1>de</langCodeISO639_1>
  <langCodeISO639_1>en</langCodeISO639_1>
  <langCodeISO639_1>cn</langCodeISO639_1>
  <mandatoryLangISO639_1>de</mandatoryLangISO639_1>
  <mandatoryLangISO639_1>en</mandatoryLangISO639_1>
  <uniqueIdentifier>4711-0815</uniqueIdentifier>
  <receiptDate>2002-09-10</receiptDate>
  <samplingDate>2002-09-09</samplingDate>
  <beginPerformanceDate>2002-09-24</beginPerformanceDate>
  <endPerformanceDate>2002-09-25</endPerformanceDate>
  <previousReport id="42">
    <reference>
      <content>DCC</content>
    </reference>
    <referenceID>
      <content>4711-0816</content>
    </referenceID>
    <procedure>MD5</procedure>
    <value>a8b4568c3ff</value>
  </previousReport>

</coreData>
```

### more complex, including calibration chain
```xml
<coreData>

  <countryCodeISO3166_1>DE</countryCodeISO3166_1>
  <langCodeISO639_1>cn</langCodeISO639_1>
  <mandatoryLangISO639_1>en</mandatoryLangISO639_1>
  <uniqueIdentifier>4711-0815</uniqueIdentifier>
  <receiptDate>2002-09-10</receiptDate>
  <beginPerformanceDate>2002-09-24</beginPerformanceDate>
  <endPerformanceDate>2002-09-25</endPerformanceDate>
  <previousReport id="42">
    <reference>
      <content>DCC</content>
    </reference>
    <referenceID>
      <content>4711-0816</content>
    </referenceID>
    <procedure>MD5</procedure>
    <value>a8b4568c3ff</value>
    <linkedReports id="43">

      <reference>
        <content>DCC 2</content>
      </reference>
      <referenceID>
        <content>4711-0817</content>
      </referenceID>
      <procedure>MD5</procedure>
      <value>a8b4544ddff</value>
      <linkedReports id="44">

        <reference>
          <content>DCC 3</content>
        </reference>
        <referenceID>
          <content>4711-0817</content>
        </referenceID>
        <procedure>MD5</procedure>
        <value>aabdc68c3ff</value>
      </linkedReports>
    </linkedReports>
  </previousReport>

</coreData>
```


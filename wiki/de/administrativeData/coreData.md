# coreData

Wesentliche Informationen zur Identifizierung des Kalibriergutes sowie der globalen Einordnung des Kalibrierscheins.

## Aufbau
```xml
<xs:complexType name="coreDataParameter">
    <xs:sequence>
        <xs:element name="countryCodeISO3166_1" type="dcc:elementStringISO3166"/>
        <xs:element name="usedLangCodeISO639_1" type="dcc:elementStringISO639" maxOccurs="unbounded"/>
        <xs:element name="mandatoryLangCodeISO639_1" type="dcc:elementStringISO639" maxOccurs="unbounded"/>
        <xs:element name="uniqueIdentifier" type="xs:string"/>
        <xs:element name="receiptDate" type="xs:date" minOccurs="0"/>
        
        <!-- Wir setzen uns bewusst über die DIN ISO 17025 hinweg, 
        indem wir die Elemente "endPerformanceDate" und 
        "beginPerformanceDate" als Mandatory definieren. 
        In der 17025 steht drin: 
        Beide Angaben können weggelassen werden, 
        wenn es begründet wird. 
        Aber, es müssen diese beiden Angaben 
        beim Ausführenden der Kalibrierung vorgehalten werden.
        
        Wenn es nur einen Wert gibt, 
        müssen beide Felder mit einem identischen Wert gefüllt werden! -->
        
        <xs:element name="beginPerformanceDate" type="xs:date" />
        <xs:element name="endPerformanceDate" type="xs:date"/>
        
        <xs:element name="previousReport" type="dcc:hash" minOccurs="0"/>
    </xs:sequence>
</xs:complexType>
```

## Hinweise

### 1
Wir setzen uns bewusst über die DIN ISO 17025 hinweg, indem wir die Elemente "endPerformanceDate" und "beginPerformanceDate" als Mandatory definieren. In der 17025 steht drin: Beide Angaben können weggelassen werden, wenn es begründet wird. Aber, es müssen diese beiden Angaben beim Ausführenden der Kalibrierung vorgehalten werden. 

Wenn es nur einen Wert gibt, müssen beide Felder mit einem identischen Wert gefüllt werden!


## Elemente

### [countryCodeISO3166_1](../complexTypes/elementStringISO3166.md)
In welchem Land wurde die Kalibrierung durchgeführt?

Datentyp: [dcc:textBlock](../complexTypes/elementStringISO3166.md)

### [langCodeISO639_1](../complexTypes/elementStringISO639.md)
Amtssprachen, in denen der DCC erstellt wurde.

Datentyp: [dcc:textBlock](../complexTypes/elementStringISO639.md)

### [mandatoryLangISO639_1](../complexTypes/elementStringISO639.md)
Festlegung der Amtssprache, die im Zweifelsfall gültig ist.

Datentyp: [dcc:textBlock](../complexTypes/elementStringISO639.md)

### uniqueIdentifier
Weltweit eindeutiger Identifizierer für den DCC (Kalibrierscheinnummer).
Zentrales Erkennungsmerkmal im menschenlesbaren Teil des DCC.

### receiptDate
Datum des Eingangs des Kalibriergegenstands.

### beginPerformanceDate
Datum (die Daten) bei Beginn der Durchführung der Labortätigkeit.

### endPerformanceDate
Datum (die Daten) bei Ende der Durchführung der Labortätigkeit.

### [previousReport](../complexTypes/hash.md)
Verweis auf den alten Kalibrierschein, den dieser DCC ersetzt.

Datentyp: [dcc:textBlock](../complexTypes/hash.md)

## Attribute
--keine--

## Beispiele
Die Beispiele werden der Übersichtlichkeit halber ohne [Namespace](../namespace.md) dargestellt.

### einfach, Mindestangaben
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

### einfach, alle Angaben
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

### komplexer, alle Angaben
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

### komplexer, inklusive Kalibrierkette
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


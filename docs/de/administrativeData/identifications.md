# dcc:identifications

Jedes Kalibriergut wird neben seiner in den weiter oben aufgeführten Inhalte in den Elementen noch durch einen oder mehrere Identifier eindeutig gekennzeichnet. Das Element *dcc:identifications* ist der Ort, wo diese Informationen abgespeichert werden.

#### Bemerkung

In sehr seltenen Fällen kann es vorkommen, dass keine Identifier an dem Kalibiergut 
vorhanden sind. Daher ist die Eingabe nicht zwingend vorgeschrieben. Es wird empfohlen, 
dass das Kalibrierlaboratorium diesen Mangel abstellt.

## Baumstruktur

Die Baumstruktur des Elements *dcc:identifications* ergibt sich über den Elementtyp 
*dcc:identificationsParameter*. Er hat folgendes Aussehen:


<img src="../../images/identifications.png" alt="identifications" width="725" />

[Diagrammsoftware](../XSD_diagramviewer.md)

## Struktur im XML-Schema

```xml
<xs:element name="identificationsParameter" minOccurs="0">
	<xs:complexType>
		<xs:sequence>
			<xs:element name="identification" maxOccurs="unbounded">
				<xs:complexType>
					<xs:sequence>
						<xs:element name="issuer">
							<xs:simpleType>
								<xs:restriction base="xs:string">
									<xs:enumeration value="manufacturer"/>
									<xs:enumeration value="calibrationLaboratory"/>
									<xs:enumeration value="customer"/>
									<xs:enumeration value="owner"/>
									<xs:enumeration value="other"/>
								</xs:restriction>
							</xs:simpleType>
						</xs:element>
						<xs:element name="value" type="xs:string"/>
						<xs:element name="description" type="dcc:textBlock" minOccurs="0"/>
					</xs:sequence>
					<xs:attribute name="id" type="xs:ID" use="optional"/>
				</xs:complexType>
			</xs:element>
		</xs:sequence>
	</xs:complexType>
</xs:element>
```

## Ausfüllanweisungen

Weitere Informationen zu den Ausfüllanweisungen sind in dem Unterabschnitt Elemente
zu finden.

### Mindestangaben

|[R] <br> Required|[O] <br> Optional|[R\|O]<br>Required \| Optional|
|-|-|-|
|Es handelt sich um ein Pflichtfeld. | Es handelt sich um ein optionales Feld.|Dieses Feld kann je nach Anwendungsfall ein Pflichtfeld sein.|


### Elemente

|Element||Bemerkung|
|-|:-:|-|
|dcc:identifications|[R]|Das Element ist das Wurzelelement für die Eingabe der Identifier. Es beinhaltet die Kindelement *identification*, in welchem dann der jeweilige Identifier einzutragen ist.|
|dcc:identification |[R]|Mindestens ein Element von *dcc:identification* muss ausgefüllt werden.|
| dcc:issuer |[R]|In das Element *issuer* kann nur eines der folgenden Worte eingetragen werden.<br>- manufacturer<br>- calibrationLaboratory<br>- customer<br>- owner<br>- other<br>Wird das Element mit einem anderen Inhalt gefüllt, so entsteht bei der Prüfung gegenüber dem XML-Schema ein Fehler. |
|dcc:value <br>[xs:string](https://www.w3.org/TR/xmlschema-2/#string)|[R]|Hier wird der Identifier eingetragen.| 
|dcc:description <br>[dcc:textBlock](../auxElements/textBlock.md)|[O]|Sonstige Informationen zum Identifier.|


## Beispiele

### Beispiel 1

Der Hersteller hat die Kennnummer 1040917 angegeben:

```xml
<dcc:identifications>
	<dcc:identification>
		<dcc:issuer>manufacturer</dcc:issuer>
		<dcc:value>1040917</dcc:value>
	</dcc:identification>
</dcc:identifications>
```

### Beispiel 2

Der Hersteller hat die Kennnummer 1040917 Sowie die Charge A3/19 angegeben und auch
zwischen der Kennnummer und der Charge eindeutig unterschieden:

```xml
<dcc:identifications>
	<dcc:identification>
		<dcc:issuer>manufacturer</dcc:issuer>
		<dcc:value>1040917</dcc:value>
	</dcc:identification>
		<dcc:description>
			<dcc:content lang="de">Kennnummer</dcc:content>
			<dcc:content lang="en">Serial No.</dcc:content>
		</dcc:description>
	<dcc:identification>
		<dcc:issuer>manufacturer</dcc:issuer>
		<dcc:value>A3/19</dcc:value>
	</dcc:identification>
		<dcc:description>
			<dcc:content lang="de">Charge</dcc:content>
			<dcc:content lang="en">Charge</dcc:content>
		</dcc:description>
</dcc:identifications>
```

### Beispiel 3

Hersteller, Kalibrierlaboratorium und Kunde haben jeweils eine Kennnummer angegeben:

```xml
<dcc:identifications>
	<dcc:identification>
		<dcc:issuer>manufacturer</dcc:issuer>
		<dcc:value>1040917</dcc:value>
		<dcc:description>
			<dcc:content lang="de">Kennnummer</dcc:content>
			<dcc:content lang="en">Serial No.</dcc:content>
		</dcc:description>
	</dcc:identification>
	<dcc:identification>
		<dcc:issuer>calibrationLaboratory</dcc:issuer>
		<dcc:value>PTB4711</dcc:value>
		<dcc:description>
			<dcc:content lang="de">Kennnummer</dcc:content>
			<dcc:content lang="en">Serial No.</dcc:content>
		</dcc:description>
	</dcc:identification>
	<dcc:identification>
		<dcc:issuer>customer</dcc:issuer>
		<dcc:value>0815</dcc:value>
		<dcc:descriptio>
			<dcc:content lang="de">Kennnummer</dcc:content>
			<dcc:content lang="en">Serial No.</dcc:content>
		</dcc:description>
	</dcc:identification>
</dcc:identifications>
```


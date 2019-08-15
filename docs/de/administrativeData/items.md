# dcc:items

Das Element *dcc:items* enthält alle notwendigen Informationen, um einen Satz von 
Kalibriergegenständen bzw. einen einzelnen Kalibriergegenstand zu identifizieren 
und zu beschreiben. Dabei kann das Element mit seinen Kindelementen eine komplexe 
Zusammensetzung abbilden. Daher wird in diesem Teil des Wiki zunächst die grobe 
Struktur des Elements dargestellt. Für die feinere Untergliederung sei auf die 
Verlinkungen verwiesen. In diesem Teil des Wiki wird auf die nähere Betrachtung des 
Elementes item auf einen weiterführenden Wiki verwiesen. 

## Baumstruktur

Die grobe Baumstruktur des Elements *dcc:items* ergibt sich über den Elementtyp
*dcc:itemParameter*. Er hat folgendes Aussehen:

<img src="../../images/itemParameter_raw.png" alt="itemParameter_raw" width="425" />

[Diagrammsoftware](../XSD_diagramviewer.md)

## Struktur im XML-Schema

### Bemerkung
Auf die Darstellung der Unterelemente des Kindelementes item wird hier aus 
Anschauungsgründen verzichtet. In der nun folgenden XML-Darstellung wird dafür 

```xml
<xs:element name="item" maxOccurs="unbounded"></xs:element>
```

als Platzhalter verwendet. Der Wiki zum Element *item* ist hier zu finden:
[dcc:item](item.md)

### Grobstruktur des Datentyps *dcc:itemParameter* vom Element *items*

```xml
<xs:complexType name="itemParameter">
	<xs:sequence>
		<xs:element name="name" type="dcc:textBlock" minOccurs="0"/>
		<xs:element name="description" type="dcc:textBlock" minOccurs="0"/>
		<xs:element name="owner" type="dcc:contact" minOccurs="0"/>
		<xs:element name="item" maxOccurs="unbounded"></xs:element>
	</xs:sequence>
</xs:complexType>

```

## Ausfüllanweisungen

Weitere Informationen zu den Ausfüllanweisungen sind in dem Unterabschnitt Elemente
zu finden.

### Mindestangaben

im Folgenden werden die Elemente, die auszufüllen sind, in der Überschrift mit einem 
"[R]" (steht für Required) gekennzeichnet. Optional auszufüllende Elemente 
werden mit einem "[O]" gekennzeichnet. 

Es gibt Elemente, die sind in dem einen Anwendungsfall Pflichtfelder und in dem anderen 
Anwendungsfall nicht zwingend auszufüllen. Diese Elemente werden mit [O|R] gekennzeichnet.

### Elemente

#### dcc:name [O]

In dieses Element wird der Name des des Kalibrierguts bzw. des zu kalibrierenden 
Ensembles angegeben.

Datentyp: [dcc:textBlock](../auxElements/textBlock.md)

#### dcc:description [O]

Sonstige Informationen, die nicht in den Elementen *dcc:name* oder *dcc:equipmentClass* 
angegeben sind, können hier angegeben werden.

Datentyp: [dcc:textBlock](../auxElements/textBlock.md)

#### dcc:owner [O]

Das Element *dcc:owner* enthält alle notwendigen Informationen, um den Eigentümer 
des Kalibriergegenstandes bzw. der Kalibriergegenstände eindeutig zu identifizieren.

Datentyp: [dcc:contact](../auxElements/contact.md)

#### [dcc:item [R]](item.md)

Das Element *dcc:item* enthält alle notwendigen Informationen jedes einzelnen  
Kalibriergegenstandes, um ihn eindeutig zu identifizieren. 

Datentyp: [dcc:item](item.md)

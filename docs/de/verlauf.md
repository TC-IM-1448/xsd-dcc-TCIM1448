# Der Verlauf der Entscheidungen


## nächste Besprechung

* usedMethods in influenceCondition: sollte eigentlich in sigular ausgeführt werden. Wird aber in measurementResult im plural verwendet. An beiden Stellen besser gleich verwenden? oder doch unterschiedliche Implementierungen verwenden?
* usedSoftware in influenceCondition: selbes Problem in zusammenhang mit dccSoftware (selber Datentyp)
* calibrationLocations in influenceCondition: wäre dann (sofern die beiden obigen Punkte als liste bleiben) als einziges keine Liste = schlechtes Design.
* Frage zur Entscheidung: "Entscheidung: usedMethods hat die globale Positionierung im Messergebnisteil und zusätzlich die lokale Position unter dcc:quantity und dcc:list wie die influenceConditions." Da die influenceCondition in quantity und dccList enthalten sind, ABER auch in measurementResult(!) ist die angabe der usedMethod osmit an drei (3) stellen möglich! Ist das gewollt?
* influenceConditions --> usedSoftware ist eine Pflichtangabe! wäre hier eine optionale Verwendung nicht besser?
* influenceCondition --> conditionBlock: state ist Pflicht. Muss das nicht optional sein?






## DCC Besprechung und Designentscheidungen vom30.04.2019

Beteiligte
T. Bruns, S. Hackel, F. Härtig, D. Hutzschenreuter, A. Scheibner, J. Loewe, Ch. Schlegel


**Thema**

Diskussion measurementResults Teil

#### Übersicht von Aspekten und Angabe zu denen es Diskussionen gab (ja) oder nicht (nein)
*	dataBlock                       ja	
*	Typ der “condition“ Elemente    ja
*	usedSoftware                    ja
*	usedMethods                     ja
*	metrologicallyTraceability      ja


#### Übersicht der getroffenen Entscheidungen

##### Diskussion outcomeBlock
* **Entscheidung:** Das Unterelement dataBlock in outcomeBlock wird durch dcc:quantity und dcc:list ersetzt (Vereinfachung).
* **Entscheidung:** Der Typ outcomeBlock wird in dataBlock umbenannt.

##### Diskussion results
* **Entscheidung:** Element outcome wird in data umbenannt und bekommt den Typ dataBlock.

##### Diskussion finale Struktur influenceConditions
* **Entscheidung:** Element outcome wird in data umbenannt und bekommt den Typ dataBlock.
* **Entscheidung:** Die Unterelemente condition und descriptionData werden entfernt.
* **Hinweis:** Die Informationen aus dem Element descriptionData können weiterhin im Unterelement data gegeben werden (Baukastenprinzip).
* **Entscheidung:** Das Element description wird optional und nur einmal angebar gesetzt.
* **Entscheidung:** Das Attribut "lang" für die Mehrsprachigkeit wird entfernt.

##### Diskussion usedSoftware
* **Entscheidung:** Element usedSoftware wie dccSoftware im administrativen Teil definiert.
* **Entscheidung:** Element usedSoftware wird nach influenceCondition verschoben. Dort steht es auf der gleichen Ebene wie influenceCondition.

##### Diskussion usedmethod
* **Entscheidung:** Unterelemente name, description und norm beibehalten.
* **Entscheidung:** Element descriptionData entfernt. 
* **Entscheidung:** Element usedMethods kapselt die einzelnen usedMethod Elemente.
* **Entscheidung:** usedMethods hat die globale Positionierung im Messergebnisteil und zusätzlich die lokale Position unter dcc:quantity und dcc:list wie die influenceConditions.


##### Diskussion metrologicallyTraceable
* **Entscheidung:** Zunächst wird metrologicallyTraceability auskommentiert (für Workshop 2019).
* **Entscheidung:** Die auskommentierte struktur wird überarbeitet. hinzu kommen die Komponenten name (Typ dcc:textBlock), description (dcc:textBlock) und identifier (dcc:hash). Entfernt werden alle alten Komponenten und die boolschen Flags.





## DCC Besprechung und Designentscheidungen vom 29.04.2019

Beteiligte
T. Bruns, S. Hackel, F. Härtig, D. Hutzschenreuter, A. Scheibner, J. Loewe, Ch. Schlegel


Thema 
Diskussion measurementResults Teil

### Übersicht von Aspekten und Angabe zu denen es Diskussionen gab (ja) oder nicht (nein)
*	dataBlock				ja
*	 „Flag System“				ja
*	Typ der “condition“ Elemente		ja 
*	usedSoftware				nein
*	usedMethods				nein
*	sampledMaterial und samlingDate	ja
*	calibrationLocations			ja
*	externals				ja
*	metrologicallyTraceability		nein


###Übersicht der getroffenen Entscheidungen

Diskussion items im administrativen Teil
*	Entscheidung: globale Angabe name, description und owner sind optional. Bei dem einzelnen item muss immer der name angegeben werden.

Diskussion influenceCondition
*	Entscheidung: Einführung einer Enumeration mit dem calibration state (beforeRepair, afterAdjustment,…) im Typ der condition. Die Komponente heißt dcc:state. Die genaue Integration in influenceCondition wurde noch nicht festgelegt, da influenceCondition noch diskutiert wird.
*	Hinweis: Das state Feld ist optional. Wenn es nicht angegeben wird, handelt es sich um eine influenceCondition während einer Standardkalibrierung ohne Adjustement und Repair.

Diskussion Typ von outcome
*	Entscheidung: Unterelemente image und chart werden mit byteData vereint zum Element byteData.

Diskussion weitere Struktur measurementResults Teil
*	Entscheidung: Element condition, dass aus dem administrativen Teil von item zu den Messergebnissen verschoben wurde wird gelöscht.
*	Entscheidung: Elemente sampledMaterial und samplingDate bleiben auskommentiert und werden in der Workshop Juni 2019 Version noch nicht behandelt.
*	Entscheidung: Element externals bleibt auskommentiert und wird in der Workshop Juni 2019 Version noch nicht behandelt.
*	Entscheidung: Element calibrationLocations bleibt auskommentiert und wird in der Workshop Juni 2019 Version noch nicht behandelt.



## DCC Besprechung und Designentscheidungen vom 25.04.2019

Beteiligte
T. Bruns, S. Hackel, F. Härtig, D. Hutzschenreuter, J. Loewe


Thema 
Diskussion Tabellen und measurementResults Teile

### Übersicht von Aspekten und Angabe zu denen es Diskussionen gab (ja) oder nicht (nein)
*	dataBlock				nein
*	 „Flag System“				nein
*	Typ der “condition“ Elemente		ja 
*   usedSoftware				nein
*	usedMethods				nein
*	sampledMaterial und samlingDate	nein
*	calibrationLocations			nein
*	externals				nein
*	metrologicallyTraceability		nein
*	Konzepte Darstellung von Tabellen	ja


Übersicht der getroffenen Entscheidungen

Diskussion Darstellung Listen
•	Entscheidung: Element dcc:list entweder nur mit unterelementen dcc:list oder nur mit Untereelementen vom Typ dcc:quantity
•	Entscheidung: Bei dcc:quantity die Auswahl der Unterelemente um Element dcc:noQuantity vom Typ dcc:textBlock erweitern für Lücken in Tabellen.

Struktur measurementResultsTeil
•	Entscheidung: Elemente influenceConditions, beforeRepairConditions, afterRepairConditions, before AdjustmentConditions, afterAdjustmentConditions auf eine gemeinsame Komponente influenceConditions zusammenführen.
•	Entscheidung: Die Komponente influcenceConditions muss mindestens ein Unterelement vom Typ influenceCondition haben.
•	Entscheidung: Der Typ influenceConditions ersetzt die Komponente ambientConditions bei der dcc:quantity und bei dcc:list.




## DCC Besprechung und Designentscheidungen vom 24.04.2019

Beteiligte
T. Bruns, S. Hackel, F. Härtig, D. Hutzschenreuter, J. Loewe, A. Scheibner, T. Wiedenhöfer


Thema 
Letzte Änderungen bei administrativen Daten und Beginn Diskussion Tabellen

Übersicht von Aspekten und Angabe zu denen es Diskussionen gab (ja) oder nicht (nein)
•	dataBlock				nein
•	Listen im DCC				ja
•	„Flag System“				nein
•	Typ der “condition“ Elemente		nein 
•	usedSoftware				nein
•	usedMethods				nein
•	sampledMaterial und samlingDate	nein
•	calibrationLocations			nein
•	externals				nein
•	metrologicallyTraceability		nein
•	Lücken in Tabellen			ja
•	Konzepte Darstellung von Tabellen	nein


Übersicht der getroffenen Entscheidungen

Diskussion letzte Änderungen im administrativen Teil
•	Entscheidung: Das Element owner wird von den item Elementen an eine globale Stelle in der items Liste verschoben.
•	Entscheidung: Alle name Elemente werden durchgängig vom Typ textBlock sein.
•	Entscheidung: Das Element referenceID in hash bekommt den Typ xs:string.
•	Entscheidung: Das Element linkedReports wird in den Singular linkedReport umbenannt (auch in Element hash).

Diskussion Tabellen für den measurementResults Teil
•	Entscheidung: Es gibt die Umbenennung von dcc:dccList zu dcc:list.
•	Entscheidung: Die dcc:list wird für den Sommerworkshop als Baumstruktur weiter entwickelt. 
•	Entscheidung: In der dcc:list wird das neue Element noQuantity mit Typ textBlock eingeführt, um Lücken in Listen und Tabellen abzubilden.








## DCC Besprechung und Designentscheidungen vom 02.04.2019

Beteiligte
S. Hackel, F. Härtig, W. Heeren, D. Hutzschenreuter, J. Jagieniak, J. Loewe, A. Scheibner, M. Spoors, T. Wiedenhöfer


Thema 
Aufräumen im Bereich „administrativeData“ Teil 2 („finale Entscheidungen“)


Übersicht der getroffenen Entscheidungen

Diskussion calibrationLocation(s)
•	Entscheidung: Die Liste der calibrationLocations wird nach measurementResults verschoben.
•	Hinweis: Die Definition der Elemente in calibrationLocations wird später im Rahmen von measurementResults verfeinert. 

Diskussion Mehrsprachigkeit
•	Entscheidung: Mehrsprachige Textbeschreibungen werden mit dem textBlock Typ realisiert (liste von content Elementen mit je einem Attribut für die Language).

Diskussion countryCodeISO3166_1
•	Entscheidung: Das Element wird mit der Bezeichnung countryCodeISO3166_1 in coreData und in statement benutzt.

Diskussion languageCodeISO3166_1
•	Entscheidung: In coreData wird das Element languageCodeISO639_1 in usedLanguageCodeISO639_1 umbenannt.
•	Entscheidung: In coreData wird das Element mandatoryLanguageISO639_1 in mandatoryLanguageCodeIso639_1 umbenannt.

Diskussion item
•	Entscheidung: Das Unterelement manufacturer bekommt den neuen Typ contactNotStrict in dem die Angabe der E-Mail und der Adresse optional sind. Damit ist auch der Fall eines unbekannten Herstellers erfasst.
•	Entscheidung: Informationen zum Sampling werden nach measurementResults verschoben (betrifft auch sampledMaterial und SamplingDate).

Diskussion externals
•	Entscheidung: externals werden nach measurementResults verschoben. 
•	Hinweis: Die innere Struktur von externals wurde nicht diskutiert.

Diskussion metrologicalTraceability
•	Entscheidung: Behandlung von Aussagen zur Traceability allgemein im Rahmen von den bereits existierenden statement Elementen im administrativen Teil. 
•	Hinweis: Die innere Struktur von statement wurde angepasst (siehe unten).
•	Entscheidung: Die Struktur der metrologicalTraceability Elemente wird erhalten und nach measurementResults verschoben.
•	Hinweis: MetrologicalTraceability Elemente im measurementResults Teil sollen der Referenz auf genutzte kalibrierte Gegenstände dienen.
Diskussion previousReport
•	Entscheidung: Das Element previousReport ist optional in coreData und kann mehrfach auftreten. Es ist vom Typ dccHash.
•	Hinweis: previousReport dient zur Abbildung der Historie von vorangegangenen (dgitalen) Kalibrierscheinen. 

Diskussion Erweiterung statement
•	Entscheidung: Umbenennung von value in declaration.
•	Entscheidung: Umbenennung von valueBool in valid
•	Entscheidung: Umbenennung von valueID in refId
•	Entscheidung: Neues optionales Element traceable vom Typ boolean eingeführt.
•	Hinweis: Best Practise Beispiele für die Angabe verschiedenster Statements werden gebraucht.







## DCC Besprechung und Designentscheidungen vom 29.03.2019

Beteiligte
T. Bruns, S. Hackel, F. Härtig, W. Heeren, D. Hutzschenreuter, J. Jagieniak, J. Loewe, A. Scheibner, M. Spoors, T. Wiedenhöfer


Thema 
Aufräumen im Bereich „administrativeData“

Übersicht von Aspekten und Angabe zu denen es Diskussionen gab (ja) oder nicht (nein)
•	item und items				ja
•	Angabe Mehrsprachigkeit		nein
•	Wo externals aufführen?		nein
•	dccSoftware in administrativeData	ja
•	andere usedSoftware	  		nein
•	locations				nein
•	traceability				nein
•	statements				ja
•	sampledMaterial			ja


Übersicht der getroffenen Entscheidungen

Diskussion Angabe von Software (dccSoftware)
•	Entscheidung: Typ dccSoftwareParameter mit reduzierter Information angenommen.
•	Entscheidung: Im Admin Teil Angabe dccSoftware Pflicht + Liste von Software mit mindestens einem Element (minOccurs = 1)

Diskussion von coreData
•	Entscheidung: Elemente beginPerformanceDate und endPerformanceDate Pflichtangaben
•	Good Practise: Wenn nur ein Kalibrierdatum vorhanden, dieses sowohl in beginPerformanceDate als auch endPerformanceDate eintragen (mögliche Auswahl für GEMIMEG Tool)
•	Entscheidung: recieptDate optional
•	Entscheidung: übrige Elemente in coreData so angenommen

Diskussion statements
•	Entscheidung: Es gibt das Element „statements“ im Admin Teil
•	Entscheidung: Es gibt auch Statements in den Metadaten zu quantity und Listen im DCC
•	Entscheidung: Umbenennung von conventionDate und conventionPeriod in allgemeinere Angaben date und period. Diese beiden Elemente sind im statement Element optionale Angaben.
•	Entscheidung: Folgende weitere Elemente sind in statement als optionale Angaben definiert:
o	countryCodeISO3166_1
o	convention
o	reference
o	norm
o	value
o	valueBool
o	valueID

Diskussion items und item Darstellung
•	Entscheidung: Im Bereich „administrativeData“ gibt es eine Liste von 1 bis n Items
(<xs:element name="item" maxOccurs="unbounded">)
•	Entscheidung: Jedes item in der Liste muss mindestens eine Information zur Identifikation liefern (Seriennummer oder ähnlich)
•	Entscheidung: Die Liste der Item hat globale Informationen für die Gesamtbezeichnung und Beschreibung (wie „Gewichtssatz“ oder „Messkette xyz“)
•	Entscheidung: Jedes item hat die optionalen Angaben
o	descriptionData (optional)
o	model (optional)
•	Entscheidung: Jedes item hat die Pflichtangaben
o	name
o	description (mindestens ein Element)
o	manufacturer (minOccurs=1); auch wenn der Hersteller nicht mehr bekannt ist, muss das Feld ausgefüllt werden (Good Practise: „Unknown“)
o	Liste identifications mit mindestens einem Element identification (minOccurs = 1)
•	Entscheidung: Für die Liste mit den Identifikationen des item werden die Bezeichner identifications und identification benutzt.
•	Entscheidung: Das Element einer identification beinhaltet die Pflichtangaben
o	issuer (wie „manufactuer“ oder „calibrationLaboratory“)
o	value (zuvor number genannt)
o	description
•	Entscheidung: Die zuvor als condition bezeichnete Komponente unter item wird zu description, falls es sich um eine textuelle Beschreibung gehandelt hat
•	Entscheidung: Die zuvor als condition bezeichnete Komponente unter item wird unter der measurementResults Schale behandelt, falls es sich um technische Informationen handelt (wie Parameter Messgeräteeinstellung etc.).
•	Entscheidung: Sampling und sampledMaterial erst einmal nicht unter item behandeln.
•	Entscheidung: Herr Hackel bereitet nähere Informationen zur weiteren Diskussion des Sampling vor (genannt war ein Austausch mit der BAM & UBA)
•	Entscheidung: Die bisherige Definition von Sampling, samplingDate etc. wird zunächst formal nach measurementResults verschoben.
•	Entscheidung: Annahme des Typs byteDataBlock zur Darstellung des Elementes für die descriptionData bei item.


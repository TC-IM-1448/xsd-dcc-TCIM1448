# The course of the decisions



## DCC meeting and design decisions from 08.05.2019

Involved
T. Bruns, S. Hackel, D. Hutzschenreuter, A. Scheibner, J. Loewe, J. Jagieniak, T. Wiedenhöfer


**Thema**

Talk measurementResults part

#### Overview of the decisions taken
##### Discussion Main structure in the measurementResults part
* ** Decision: ** The element usedSoftware should be on the same level as the element influenceConditions. That is, it is directly available as a main element under measurementResults and optionally it can also be in the dcc: quantity and the dcc: list.
* ** Decision: ** The element usedMethods should be on the same level as the element influenceConditions. That is, it is directly available as a main element under measurementResults and optionally it can also be in the dcc: quantity and the dcc: list.
* ** Decision: ** The element calibrationLocations and its defining type are commented out for the workshop June 2019. However, they remain legible in the DCC schema.

##### discussion results part
* ** Decision: ** The new type resultBlock is introduced for the result elements.
* ** Decision: ** The type resultblock has all elements as the conditionBlock type except for the element state. The resultBlock has no element state.
* ** Note: ** Assigning the results to the status such as *** befor repair ***, *** after repair ***, *** before adjustment *** or *** after adjustment *** is done indirectly by the state element at associated influenceConditions.

##### Further discussion
* ** Note: ** If in a textBlock element <content> is specified without the attribute *** lang ***, the text in <content> applies to all languages ​​assigned to the DCC.
* ** Note: ** Under influenceConditon elements no additional InfluenceCondition elements may be used recursively. This feature is expected to be audited in the future by a TraCIM test, since the representation via the XML schema is too costly.
* ** Note: ** The elements usedSoftware and usedMethods are not mandatory in the measurementResults part.


## DCC meeting and design decisions from 30.04.2019

Involved
T. Bruns, S. Hackel, F. Härtig, D. Hutzschenreuter, A. Scheibner, J. Loewe, Ch. Schlegel


**Thema**

Talk measurementResults part

#### Overview of aspects and information about which there were discussions (yes) or not (no)
* dataBlock yes
* Type of "condition" elements yes
* used software yes
* usedMethods yes
* metrologically Traceability yes


#### Overview of the decisions taken

##### Discussion outcomeBlock
* ** Decision: ** The subelement dataBlock in outcomeBlock is replaced by dcc: quantity and dcc: list (simplification).
* ** Decision: ** The type outcomeBlock is renamed to dataBlock.

##### discussion results
* ** Decision: ** Element outcome is renamed to data and gets the type dataBlock.

##### discussion final structure influenceConditions
* ** Decision: ** Element outcome is renamed to data and gets the type dataBlock.
* ** Decision: ** The subelements condition and descriptionData are removed.
* ** Note: ** The information from the descriptionData element can still be given in the subelement data (modular principle).
* ** Decision: ** The description element is optional and only once used.
* ** Decision: ** The "lang" attribute for multilingualism is removed.

##### discussion usedSoftware
* ** Decision: ** Element usedSoftware like dccSoftware defined in the administrative part.
* ** Decision: ** Item usedSoftware will be moved to influenceCondition. There it is on the same level as influenceCondition.

##### discussion usedmethod
* ** Decision: ** Sub-elements name, description and norm maintained.
* ** Decision: ** Element descriptionData removed.
* ** Decision: ** Element usedMethods encapsulates the individual usedMethod elements.
* ** Decision: ** usedMethods has the global positioning in the measurement result part and additionally the local position under dcc: quantity and dcc: list like the influenceConditions.

##### Discussion metrologicallyTraceable
* ** Decision: ** First comment out metrologicallyTraceability (for Workshop 2019).
* ** Decision: ** The commented-out structure will be revised. Added to this are the components name (type dcc: textBlock), description (dcc: textBlock) and identifier (dcc: hash). Removes all old components and the boolean flags.



## DCC meeting and design decisions from 29.04.2019

Involved
T. Bruns, S. Hackel, F. Härtig, D. Hutzschenreuter, A. Scheibner, J. Loewe, Ch. Schlegel


**Theme** 
Talk measurementResults part

### Overview of aspects and information on which there were discussions (yes) or not (no)
* DataBlock yes
* "Flag System" yes
* Type of "condition" elements yes
* Used software No
* Used methods no
* sampledMaterial and samlingDate yes
* Calibration locations yes
* Externals yes
* No metrologicallyTraceability


### Overview of the decisions taken

Discussion items in the administrative part
* ** Decision: ** Global Specification name, description and owner are optional. For the individual item, the name must always be specified.

Discussion influenceCondition
* ** Decision: ** Introduce an enumeration with the calibration state (beforeRepair, afterAdjustment, ...) in the type of the condition. The component is called dcc: state. The exact integration into influenceCondition has not yet been determined, because influenceCondition is still under discussion.
* ** Note: ** The state field is optional. If not specified, it is an influenceCondition during a standard calibration without Adjustment and Repair.

Discussion type of outcome
* ** Decision: ** Subelements image and chart are combined with byteData to the element byteData.

Discussion more structure measurementResults part
* ** Decision: ** Item condition that has been moved from the administrative part of item to the measurement results will be deleted.
* ** Decision: ** Elements sampledMaterial and samplingDate remain commented out and will not be discussed in the workshop June 2019 version.
* ** Decision: ** Element externals remains commented out and will not be discussed in the workshop June 2019 version.
* ** Decision: ** Element calibrationLocations remains commented out and will not be covered in the workshop June 2019 version.



## DCC meeting and design decisions from 25.04.2019

Involved
T. Bruns, S. Hackel, F. Härtig, D. Hutzschenreuter, J. Loewe

**Theme** 
Discussion tables and measurementResults parts

### Overview of aspects and information on which there were discussions (yes) or not (no)
* No data block
* "Flag System" no
* Type of "condition" elements yes
* usedSoftware no
* Used methods no
* sampledMaterial and samlingDate no
* No calibration locations
* No externals
* No metrologicallyTraceability
* Concepts presentation of tables yes


### Overview of the decisions taken

#### discussion presentation lists
* ** Decision: ** Element dcc: list either only with subelements dcc: list or only with subelements of type dcc: quantity
* ** Decision: ** For dcc: quantity, expand the selection of subelements by element dcc: noQuantity of type dcc: textBlock for gaps in tables.


#### Structure measurementResultsPart
* ** Decision: ** Merge elements of influenceConditions, beforeRepairConditions, afterRepairConditions, before AdjustmentConditions, afterAdjustmentConditions to a common component of influenceConditions.
* ** Decision: ** The component influcenceConditions must have at least one influenceCondition subelement.
* ** Decision: ** The influenceConditions type replaces the ambientConditions component with dcc: quantity and with dcc: list.




## DCC meeting and design decisions from 24.04.2019

Involved
T. Bruns, S. Hackel, F. Härtig, D. Hutzschenreuter, J. Loewe, A. Scheibner, T. Wiedenhöfer


### Theme
Recent changes to administrative data and start discussion tables

### Overview of aspects and information on which there were discussions (yes) or not (no)
* No data block
* Lists in the DCC yes
* "Flag System" no
* Type of "condition" elements no
* Used software No
* Used methods no
* sampledMaterial and samlingDate no
* No calibration locations
* No externals
* No metrologicallyTraceability
* Gaps in tables yes
* Concepts Representation of tables no


### Overview of the decisions taken

#### Discussion last changes in the administrative part
* ** Decision: ** The item owner is moved from the item items to a global location in the items list.
* ** Decision: ** All name elements will be of type textBlock.
* ** Decision: ** The element referenceID in hash gets the type xs: string.
* ** Decision: ** The element linkedReports is renamed to the singular linkedReport (also in element hash).

#### Discussion tables for the measurementResults part
* ** Decision: ** There is the renaming of dcc: dccList to dcc: list.
* ** Decision: ** The dcc: list will be further developed as a tree structure for the summer workshop.
* ** Decision: ** The new element noQuantity with type textBlock is introduced in the dcc: list to map gaps in lists and tables.








## DCC meeting and design decisions from 02.04.2019

Involved
S. Hackel, F. Härtig, W. Heeren, D. Hutzschenreuter, J. Jagieniak, J. Loewe, A. Scheibner, M. Spoors, T. Wiedenhöfer


theme
Clean up in the "administrativeData" area Part 2 ("Final Decisions")


Overview of the decisions taken

Discussion calibrationLocation (s)
• Decision: The list of calibrationLocations is moved to measurementResults.
• Note: The definition of elements in calibrationLocations will be refined later as part of measurementResults.

Discussion multilingualism
• Decision: Multilingual text descriptions are realized with the textBlock type (list of content elements with one attribute each for the language).

Discussion countryCodeISO3166_1
• Decision: The element is used with the name countryCodeISO3166_1 in coreData and in statement.

Discussion languageCodeISO3166_1
• Decision: In coreData, the element languageCodeISO639_1 is renamed to usedLanguageCodeISO639_1.
• Decision: In coreData, the element mandatoryLanguageISO639_1 is renamed to mandatoryLanguageCodeIso639_1.

Discussion item
• Decision: The subelement manufacturer gets the new type contactNotStrict in which the specification of the e-mail and the address are optional. This also includes the case of an unknown manufacturer.
• Decision: Sampling information is moved to measurementResults (also applies to sampledMaterial and SamplingDate).

Discussion externals
• Decision: externals are moved to measurementResults.
• Note: The internal structure of externals was not discussed.

Talk about metrological traceability
• Decision: treatment of statements about traceability in general in the context of already existing statement elements in the administrative part.
• Note: The inner structure of statement has been adjusted (see below).
• Decision: The structure of the metrological traceability elements is obtained and moved to measurementResults.
• Note: Metrological Traceability elements in the measurementResults part are for reference to used calibrated items.
Discussion previous Report
• Decision: The element previousReport is optional in coreData and can occur multiple times. It is of type dccHash.
• Note: previousReport is used to display the history of previous (digital) calibration certificates.

Discussion extension statement
• Decision: renaming of value in declaration.
• Decision: rename valueBool to valid
• Decision: rename valueID to refId
• Decision: Introduced new optional element traceable of type boolean.
• Note: Best practice examples are needed to give a variety of statements.







## DCC meeting and design decisions from 29.03.2019

Involved
T. Bruns, S. Hackel, F. Härtig, W. Heeren, D. Hutzschenreuter, J. Jagieniak, J. Loewe, A. Scheibner, M. Spoors, T. Wiedenhöfer


theme
Clean up in the "administrativeData" area

Overview of aspects and information about which there were discussions (yes) or not (no)
• item and items yes
• Specification multilingualism no
• Where to list externals? No
• dccSoftware in administrativeData yes
• other used software no
• No locations
• no traceability
• statements yes
• sampledMaterial yes


Overview of the decisions taken

Discussion Specification of software (dccSoftware)
• Decision: Type dccSoftwareParameter assumed with reduced information.
• Decision: In Admin part Specification dccSoftware Required + List of software with at least one element (minOccurs = 1)

Discussion of coreData
• Decision: elements beginPerformanceDate and endPerformanceDate Mandatory
• Good Practice: If there is only one calibration date, enter it into both beginPerformanceDate and endPerformanceDate (possible choices for GEMIMEG tool)
• Decision: recieptDate optional
• Decision: leftover elements in coreData adopted

Discussion statements
• Decision: There is the element "statements" in the admin section
• Decision: There are also statements in the quantity and list metadata in the DCC
• Decision: Renaming of conventionDate and conventionPeriod into more general data date and period. These two elements are optional in the statement element.
• Decision: The following additional elements are defined in statement as optional information:
o countryCodeISO3166_1
o convention
o reference
o norm
o value
o valueBool
o valueID

Talk items and item presentation
• Decision: In the section "administrativeData" there is a list of 1 to n items
(<xs: element name = "item" maxOccurs = "unbounded">)
• Decision: Each item in the list must provide at least one identification information (serial number or similar)
• Decision: The list of items has global information for the overall description and description (such as "weight set" or "chain xyz")
• Decision: Each item has the optional information
o descriptionData (optional)
o model (optional)
• Decision: Each item has the required information
o name
o description (at least one element)
o manufacturer (minOccurs = 1); even if the manufacturer is no longer known, the field must be completed (Good Practice: "Unknown")
o list identifications with at least one element identification (minOccurs = 1)
• Decision: For the list with the identifications of the item, the identifier identifications and identification are used.
• Decision: The element of an identification contains the mandatory information
o issuer (such as "manufactuer" or "calibrationLaboratory")
o value (previously called number)
o description
• Decision: The previously named condition under item becomes description, if it was a textual description
• Decision: The component under item, previously referred to as condition, will be treated under the measurementResults shell, if it concerns technical information (such as the instrument setup parameter, etc.).
• Decision: Do not treat sampling and sampledMaterial under item.
• Decision: Mr. Hackel prepares further information for the further discussion of the sampling (an exchange with the BAM & UBA was mentioned)
• Decision: The previous definition of sampling, samplingDate etc. is first formally shifted to measurementResults.
• Decision: Accept the type byteDataBlock to represent the element for the descriptionData in item.
# ComplexType itemParameter


## Construction
```xml
<xs:complexType name="itemParameter">
    <xs:sequence>
        <xs:element name="name" type="dcc:textBlock" minOccurs="0" />
        <xs:element name="description" type="dcc:textBlock" minOccurs="0" />
        <xs:element name="owner" type="dcc:contact" minOccurs="0" />
        
        <xs:element name="item" maxOccurs="unbounded">
            <xs:complexType>
                <xs:sequence>
                    <xs:element name="name" type="dcc:textBlock" />
                    
                    <xs:element name="description" type="dcc:textBlock" maxOccurs="unbounded"/>
                    
                    <xs:element name="descriptionData" type="dcc:byteDataBlock" minOccurs="0" maxOccurs="unbounded"/>
                    
                    <xs:element name="manufacturer" type="dcc:contactNotStrict" />
                    <xs:element name="model" type="xs:string" minOccurs="0"/>
                    
                    <xs:element name="identifications" >
                        <xs:complexType>
                            <xs:sequence>
                                <xs:element name="identification" maxOccurs="unbounded">
                                    <xs:complexType>
                                        <xs:sequence>
                                            <xs:element name="issuer">
                                                <xs:simpleType>
                                                    <xs:restriction base="xs:string">
                                                        <xs:enumeration value="manufacturer" />
                                                        <xs:enumeration value="calibrationLaboratory" />
                                                        <xs:enumeration value="customer" />
                                                        <xs:enumeration value="owner" />
                                                        <xs:enumeration value="other" />
                                                    </xs:restriction>
                                                </xs:simpleType>
                                            </xs:element>
                                            <xs:element name="value" type="xs:string" />
                                            <xs:element name="description" type="dcc:textBlock" minOccurs="0" />
                                        </xs:sequence>
                                        <xs:attribute name="id" type="xs:ID" use="optional"/>
                                    </xs:complexType>
                                </xs:element>
                            </xs:sequence>
                        </xs:complexType>
                    </xs:element>
                </xs:sequence>
                <xs:attribute name="id" type="xs:ID" use="optional"/>
            </xs:complexType>
        </xs:element>
    </xs:sequence>
</xs:complexType>
```

## Hints
The items item is not further subdivided in the schema (dcc.xsd). It looks extremely complex, which in principle is not.

## Elements

### [items --> name](../complexTypes/textBlock.md)
Name of the calibration object, if it consists of several item elements (eg weight set).

Data type: [dcc:textBlock](../complexTypes/textBlock.md)

### [items --> description](../complexTypes/textBlock.md)
Description of the calibration object.

Data type: [dcc:textBlock](../complexTypes/textBlock.md)

### [items --> owner](../complexTypes/contact.md)

Data type: [dcc:textBlock](../complexTypes/contact.md)

### items --> item


### [items --> item --> Name](../complexTypes/textBlock.md)
Name of the calibration object.

Data type: [dcc:textBlock](../complexTypes/textBlock.md)

### [items --> item --> description](../complexTypes/textBlock.md)
Description of the calibration object.

Data type: [dcc:textBlock](../complexTypes/textBlock.md)

### [items --> item --> descriptionData](../complexTypes/byteDataBlock.md)
A file (Base64-encoded), the z. B. may contain a photo or a drawing or a map.

Data type: [dcc:textBlock](../complexTypes/byteDataBlock.md)

### [items --> item --> manufacturer](../complexTypes/contactNotStrict.md)
Address of the manufacturer.

Data type: [dcc:textBlock](../complexTypes/contactNotStrict.md)

### items --> item --> model


### items --> item --> identifications
List of unique identifiers.

### items --> item --> identifications --> identification
A unique identifier.

### items --> item --> identifications --> identification --> issuer
The Exhibitor of the Identification. Only one set of values is allowed here:
- manufacturer
- calibration Laboratory
- customer
- owner
- other

### items --> item --> identifications --> identification --> value
The unique identification feature.

### [items --> item --> identifications --> identification --> description](../complexTypes/textBlock.md)
A more detailed description of this identification. Multilingualism is given here.

Data type: [dcc:textBlock](../complexTypes/textBlock.md)

## Attributes
The unique identification of the object in the DCC. It deliberately uses the xs: ID data type because it allows for validation without any add-ons in different tools.

Data type: [xs:ID](../xsd/xs-ID.md)

## Examples
For the sake of clarity, the examples are shown without [namespace] (namespace.md).


### Simple example
```xml
<dcc:items>

    <dcc:item>

        <dcc:name>
            <dcc:content>1 Gewichtstück zu 10 g</dcc:content>
        </dcc:name>

        <dcc:description >
            <dcc:content>Aufbewahrung</dcc:content>
            <dcc:content>Die Gewichtstücke befinden sich in einem Kasten aus lackiertem Holz; das Kalibrierzeichen ist auf dem Kasten aufgebracht.</dcc:content>
        </dcc:description>

        <dcc:manufacturer>
            <dcc:name>
                <dcc:content>HerstellerName</dcc:content>
            </dcc:name>
        </dcc:manufacturer>

        <dcc:identifications>

            <dcc:identification>
                <dcc:issuer>manufacturer</dcc:issuer>
                <dcc:value>1040917</dcc:value>
                <dcc:description>
                    <dcc:content>Kennnummer</dcc:content>
                </dcc:description>
            </dcc:identification>

        </dcc:identifications>
    </dcc:item>
</dcc:items>
```            

### Simple example with multilingualism
```xml
<dcc:items>

    <dcc:item>

        <dcc:name>
            <dcc:content>1 Gewichtstück zu 10 g</dcc:content>
        </dcc:name>

        <dcc:description >
            <dcc:content lang="de">Aufbewahrung</dcc:content>
            <dcc:content lang="en">Case</dcc:content>
            <dcc:content lang="de">Die Gewichtstücke befinden sich in einem Kasten aus lackiertem Holz; das Kalibrierzeichen ist auf dem Kasten aufgebracht.</dcc:content>
            <dcc:content lang="en">The weights are accommodated in a box of varnished wood; the calibration mark is applied to the box.</dcc:content>
        </dcc:description>

        <dcc:manufacturer>
            <dcc:name>
                <dcc:content>HerstellerName</dcc:content>
            </dcc:name>
        </dcc:manufacturer>

        <dcc:identifications>

            <dcc:identification>
                <dcc:issuer>manufacturer</dcc:issuer>
                <dcc:value>1040917</dcc:value>
                <dcc:description>
                    <dcc:content lang="de">Kennnummer</dcc:content>
                    <dcc:content lang="en">Serial No.</dcc:content>
                </dcc:description>
            </dcc:identification>

        </dcc:identifications>
    </dcc:item>
</dcc:items>
```            



### Example, 2 item elements
```xml
<dcc:items>

    <dcc:name>
        <dcc:content>Gewichtssatz</dcc:content>
    </dcc:name>
    
    <dcc:description>
        <dcc:content>Messaufbau</dcc:content>
        <dcc:content>weitere Beschreibung</dcc:content>
    </dcc:description>

    <dcc:item>

        <dcc:name>
            <dcc:content>1 Gewichtstück zu 10 g</dcc:content>
        </dcc:name>

        <dcc:description>
            <dcc:content>Aufbewahrung</dcc:content>
        </dcc:description>

        <dcc:description>
            <dcc:content>Die Gewichtstücke befinden sich in einem Kasten aus lackiertem Holz; das Kalibrierzeichen ist auf dem Kasten aufgebracht.</dcc:content>
        </dcc:description>

        <dcc:manufacturer>
            <dcc:name>
                <dcc:content>Hersteller</dcc:content>
            </dcc:name>
            <dcc:eMail>info@hersteller.de</dcc:eMail>
            <dcc:location>
                <dcc:street>Herstellerstraße</dcc:street>
                <dcc:streetNo>42</dcc:streetNo>
                <dcc:postCode>12345</dcc:postCode>
                <dcc:city>Herstellerort</dcc:city>
                <dcc:countryCode>DE</dcc:countryCode>
            </dcc:location>
        </dcc:manufacturer>

        <dcc:identifications>

            <dcc:identification>
                <dcc:issuer>customer</dcc:issuer>
                <dcc:value>0816</dcc:value>
                <dcc:description>
                    <dcc:content>Kennnummer</dcc:content>
                </dcc:description>
            </dcc:identification>

        </dcc:identifications>

    </dcc:item>

    <dcc:item>

        <dcc:name>
            <dcc:content>1 Gewichtstück zu 100 g</dcc:content>
        </dcc:name>

        <dcc:description>
            <dcc:content>1 Gewichtstück zu 100 g</dcc:content>
            <dcc:content>Aufbewahrung</dcc:content>
        </dcc:description>

        <dcc:description>
            <dcc:content>Die Gewichtstücke befinden sich in einem Kasten aus lackiertem Holz; das Kalibrierzeichen ist auf dem Kasten aufgebracht.</dcc:content>
        </dcc:description>

        <dcc:manufacturer>
            <dcc:name>
                <dcc:content>kein Hersteller bekannt</dcc:content>
            </dcc:name>
        </dcc:manufacturer>

        <dcc:identifications>

            <dcc:identification>
                <dcc:issuer>customer</dcc:issuer>
                <dcc:value>0815</dcc:value>
                <dcc:description>
                    <dcc:content>Kennnummer</dcc:content>
                </dcc:description>
            </dcc:identification>

        </dcc:identifications>

    </dcc:item>

</dcc:items>
```            


### Example, 2 item elements with IDs and multilingualism
```xml
<dcc:items>

    <dcc:name>
        <dcc:content lang="de">Gewichtssatz</dcc:content>
    </dcc:name>
    <dcc:description>
        <dcc:content lang="de">Messaufbau</dcc:content>
        <dcc:content lang="de">weitere Beschreibung</dcc:content>
    </dcc:description>

    <dcc:item id="dcc10g"><!--1300M-->

        <dcc:name>
            <dcc:content lang="de">1 Gewichtstück zu 10 g</dcc:content>
        </dcc:name><!--13010-->

        <dcc:description id="Gewicht-10g-Description0"><!--13020-->
            <dcc:content lang="de">1 Gewichtstück zu 10 g</dcc:content><!--92110-->
        </dcc:description>

        <dcc:description id="Gewicht-10g-Description1"><!--13020-->
            <dcc:content lang="de">Aufbewahrung</dcc:content><!--92110-->
            <dcc:content lang="en">Case</dcc:content><!--92110-->
        </dcc:description>

        <dcc:description id="Gewicht-10g-Description2"><!--13020-->
            <dcc:content lang="de">Die Gewichtstücke befinden sich in einem Kasten aus lackiertem Holz; das
                Kalibrierzeichen ist auf dem Kasten aufgebracht.
            </dcc:content><!--92110-->
            <dcc:content lang="en">The weights are accommodated in a box of varnished wood; the calibration mark
                is applied to the box.
            </dcc:content><!--92110-->
        </dcc:description>

        <dcc:manufacturer><!--13050-->
            <dcc:name>
                <dcc:content>Hersteller</dcc:content>
            </dcc:name><!--91310-->
            <dcc:eMail>info@hersteller.de</dcc:eMail><!--91320-->
            <dcc:location><!--91330-->
                <dcc:street>Herstellerstraße</dcc:street><!--91120-->
                <dcc:streetNo>42</dcc:streetNo><!--91130-->
                <dcc:postCode>12345</dcc:postCode><!--91150-->
                <dcc:city>Herstellerort</dcc:city><!--91160-->
                <dcc:countryCode>DE</dcc:countryCode><!--91180-->
            </dcc:location>
        </dcc:manufacturer>

        <dcc:identifications><!--13060-->

            <dcc:identification id="dcc52">
                <dcc:issuer>manufacturer</dcc:issuer>
                <dcc:value>1040917</dcc:value><!--12061-->
                <dcc:description id="dcc53">
                    <dcc:content lang="de">Kennnummer</dcc:content>
                    <dcc:content lang="en">Serial No.</dcc:content>
                </dcc:description>
            </dcc:identification>

            <dcc:identification id="dcc54">
                <dcc:issuer>other</dcc:issuer>
                <dcc:value>PTB4711</dcc:value><!--12061-->
                <dcc:description id="dcc55">
                    <dcc:content lang="de">Kennnummer</dcc:content>
                    <dcc:content lang="en">Serial No.</dcc:content>
                </dcc:description>
            </dcc:identification>

            <dcc:identification id="dcc56">
                <dcc:issuer>customer</dcc:issuer>
                <dcc:value>0815</dcc:value><!--12061-->
                <dcc:description id="dcc57">
                    <dcc:content lang="de">Kennnummer</dcc:content>
                    <dcc:content lang="en">Serial No.</dcc:content>
                </dcc:description>
            </dcc:identification>

        </dcc:identifications><!--13060-->

    </dcc:item>

    <dcc:item id="dcc100g"><!--1300M-->

        <dcc:name>
            <dcc:content lang="de">1 Gewichtstück zu 100 g</dcc:content>
        </dcc:name><!--13010-->

        <dcc:description id="Gewicht-100g-Description0"><!--13020-->
            <dcc:content lang="de">1 Gewichtstück zu 100 g</dcc:content><!--92110-->
        </dcc:description>

        <dcc:description id="Gewicht-100g-Description1"><!--13020-->
            <dcc:content lang="de">Aufbewahrung</dcc:content><!--92110-->
            <dcc:content lang="en">Case</dcc:content><!--92110-->
        </dcc:description>

        <dcc:description id="Gewicht-100g-Description2"><!--13020-->
            <dcc:content lang="de">Die Gewichtstücke befinden sich in einem Kasten aus lackiertem Holz; das
                Kalibrierzeichen ist auf dem Kasten aufgebracht.
            </dcc:content><!--92110-->
            <dcc:content lang="en">The weights are accommodated in a box of varnished wood; the calibration mark
                is applied to the box.
            </dcc:content><!--92110-->
        </dcc:description>

        <dcc:manufacturer><!--13050-->
            <dcc:name>
                <dcc:content>kein Hersteller bekannt</dcc:content>
            </dcc:name><!--91310-->
        </dcc:manufacturer>

        <dcc:identifications><!--13060-->

            <dcc:identification id="dcc42">
                <dcc:issuer>manufacturer</dcc:issuer>
                <dcc:value>1040917</dcc:value><!--12061-->
                <dcc:description id="dcc43">
                    <dcc:content lang="de">Kennnummer</dcc:content>
                    <dcc:content lang="en">Serial No.</dcc:content>
                </dcc:description>
            </dcc:identification>

            <dcc:identification id="dcc44">
                <dcc:issuer>other</dcc:issuer>
                <dcc:value>PTB4711</dcc:value><!--12061-->
                <dcc:description id="dcc45">
                    <dcc:content lang="de">Kennnummer</dcc:content>
                    <dcc:content lang="en">Serial No.</dcc:content>
                </dcc:description>
            </dcc:identification>

            <dcc:identification id="dcc46">
                <dcc:issuer>customer</dcc:issuer>
                <dcc:value>0815</dcc:value><!--12061-->
                <dcc:description id="dcc47">
                    <dcc:content lang="de">Kennnummer</dcc:content>
                    <dcc:content lang="en">Serial No.</dcc:content>
                </dcc:description>
            </dcc:identification>

        </dcc:identifications><!--13060-->

    </dcc:item>

</dcc:items>
```            

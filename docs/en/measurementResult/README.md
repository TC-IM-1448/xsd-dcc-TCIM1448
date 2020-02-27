# dcc:measurementResults

(in development)

The element *dcc:measurementResults* contains all results of the measurements, evaluations and information for calibration. The entries in this area are always such that a value is always linked to a unit. SI units should always be used.  

## Tree structure

The tree structure of the element *dcc:measurementResults* has the following layout:

<img src="../../images/measurementResults.png" alt="measurementResults" width="450" />

[chart software](../XSD_diagramviewer.md)

## Completion instructions

For more information on the completion instructions, see the Elements subsection.

### Minimum requirements

|[R] <br> Required|[O] <br> Optional|[R\|O]<br>Required \| Optional|
|-|-|-|
|This is a mandatory field. | This is an optional field.|This field may be mandatory, depending on the application.|


### Elements

The element *dcc:measurementResults* has only the child element *dcc:measurementResult*.

| Element|| Note  |
|---|:-:|-----|
| dcc:measurementResult|[R]  | The element *dcc:measurementResult* can be called any number of times. |

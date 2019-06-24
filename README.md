<div align="center">
  <a href="https://ptb.de/dcc" traget="_blank"><img src="docs/images/logo.png" alt="" width="600"/></a>
  <br />
  <h1>xsd-dcc</h1>
  <p>This repository contains the XSD, a documentation and examples for the DCC (Digital Calibration Certificate).</p>
</div>
<br />

## Access to the Docs

You can find the Docs at [https://ptb.de/dcc/v2.1.1/](https://ptb.de/dcc/v2.1.1/).

Or here in this Repository at [docs/README.md](docs/README.md).

## Access to the Schema

### Specific Version

To use the Schema use the URL with a specific version below.
This is the recommended way.

```bash
https://ptb.de/dcc/v2.1.1/dcc.xsd
```

```xml
<dcc:digitalCalibrationCertificate
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="https://ptb.de/dcc https://ptb.de/dcc/v2.1.1/dcc.xsd"
        xmlns:dcc="https://ptb.de/dcc"
        xmlns:si="https://ptb.de/si/smartcom/d-si/v1_0_1">
        <!--
        ...
        -->
</dcc:digitalCalibrationCertificate>
```

### Latest Version
You can access the latest version of the Schema at the URL below.

**:warning: Warning :warning:**

The usage of this URL in **NOT** recommended.
Using this URL could break your Software! The Version of this Schema is changing continuously.

```bash
https://ptb.de/dcc/dcc.xsd
```
 
## Development

The master branch contains latest stable version. All development is done in the develop branch.

This Project uses [semantic versioning](https://semver.org/).

### Setup

```bash
# Clone this repository
git clone https://gitlab1.ptb.de/d-ptb/dcc/xsd-dcc.git

# Go into the repository
cd xsd-dcc
```

## Team

<table>
  <tr>
    <th><a href="https://gitlab1.ptb.de/hackel03" target="_blank"><img width="200" src="https://gitlab1.ptb.de/uploads/-/system/user/avatar/31/avatar.png?width=90"/></a></th>
    <th><a href="https://gitlab1.ptb.de/AScheibner" target="_blank"><img width="200" src="docs/images/unknown-user.png"/></a></th>
    <th><a href="https://gitlab1.ptb.de/jloewe" target="_blank"><img width="200" src="https://gitlab1.ptb.de/uploads/-/system/user/avatar/38/avatar.png"/></a></th>
    <th><a href="https://gitlab1.ptb.de/DHutzschenreuter" target="_blank"><img width="200" src="docs/images/unknown-user.png"/></a></th>
  </tr>
  <tr>
    <td align="center"><a href="https://gitlab1.ptb.de/hackel03" target="_blank">Siegfried Hackel</a></td>
    <td align="center"><a href="https://gitlab1.ptb.de/AScheibner" target="_blank">Alexander Scheibner</a></td>
    <td align="center"><a href="https://gitlab1.ptb.de/jloewe" target="_blank">Jan Henry Loewe</a></td>
    <td align="center"><a href="https://gitlab1.ptb.de/DHutzschenreuter" target="_blank">Daniel Hutzschenreuter</a></td>
  </tr>
  <tr>
      <td align="center"><a href="mailto:siegfried.hackel@ptb.de">siegfried.hackel@ptb.de</a></td>
      <td align="center"><a href="mailto:alexander.scheibner@ptb.de">alexander.scheibner@ptb.de</a></td>
      <td align="center"><a href="mailto:jan.loewe@ptb.de">jan.loewe@ptb.de</a></td>
      <td align="center"><a href="mailto:daniel.hutzschenreuter@ptb.de">daniel.hutzschenreuter@ptb.de</a></td>
  </tr>
</table>


<table>
  <tr>
    <th><a href="https://gitlab1.ptb.de/jjagieniak" target="_blank"><img width="200" src="docs/images/unknown-user.png"/></a></th>
    <th><a href="https://gitlab1.ptb.de/LDoering" target="_blank"><img width="200" src="docs/images/unknown-user.png"/></a></th>
    <th><a href="https://gitlab1.ptb.de/bgloger" target="_blank"><img width="200" src="docs/images/unknown-user.png"/></a></th>
  </tr>
  <tr>
    <td align="center"><a href="https://gitlab1.ptb.de/jjagieniak" target="_blank">Justin Jagieniak</a></td>
    <td align="center"><a href="https://gitlab1.ptb.de/LDoering" target="_blank">Lutz Doering</a></td>
    <td align="center"><a href="https://gitlab1.ptb.de/jloewe" target="_blank">Benjamin Gloger</a></td>
  </tr>
  <tr>
      <td align="center"><a href="mailto:justin.jagieniak@ptb.de">justin.jagieniak@ptb.de</a></td>
      <td align="center"><a href="mailto:lutz.doering@ptb.de">lutz.doering@ptb.de</a></td>
      <td align="center"><a href="mailto:benjamin.gloger@ptb.de">benjamin.gloger@ptb.de</a></td>
  </tr>
</table>
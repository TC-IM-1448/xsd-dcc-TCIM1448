<div align="center">
  <a href="https://ptb.de/dcc" traget="_blank"><img src="docs/images/logo.png" alt="DCC Logo" width="400"/></a>
  <br />
  <h1>xsd-dcc</h1>
  <p>This repository contains the XSD, a documentation and examples for the DCC (Digital Calibration Certificate).</p>
</div>
<br />

## Access to the Docs

You can find the Docs at [https://ptb.de/dcc/v2.2.0/](https://ptb.de/dcc/v2.2.0/).

Or here in this Repository at [docs/README.md](docs/README.md).

## Access to the Schema

### Specific Version

To use the Schema use the URL with a specific version below.
This is the recommended way.

```
https://ptb.de/dcc/v2.2.0/dcc.xsd
```

```xml
<dcc:digitalCalibrationCertificate
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="https://ptb.de/dcc https://ptb.de/dcc/v2.2.0/dcc.xsd"
        xmlns:dcc="https://ptb.de/dcc"
        xmlns:si="https://ptb.de/si">
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

```
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

Contact person: Siegfried Hackel

Alexander Scheibner, Benjamin Gloger, Daniel Hutzschenreuter, Frank Härtig, Jan Henry Loewe, Justin Jagieniak, Lutz Doering, Shanna Schönhals, Siegfried Hackel, Wiebke Heeren


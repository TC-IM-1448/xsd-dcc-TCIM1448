#!/bin/bash

# get directory of this script
DIR="$(cd "$(dirname "$0")" && pwd)"

# check if xjparse jar exists
if [ -f xjparse-app-3.0.0.jar ]; then
  echo "xjparse found. Continuing..."
else
  echo "xjparse not found. Downloading it..."

  # xjparse release jar url
  XJPARSE_URL=https://github.com/ndw/xjparse/releases/download/3.0.0/xjparse-app-3.0.0.jar

  # check if curl is installed
  if hash curl 2>/dev/null; then
    echo "Downloading with curl."
    curl -L "$XJPARSE_URL" -o xjparse-app-3.0.0.jar
  else
    # check if wget is installed
    if hash wget 2>/dev/null; then
      echo "Downloading with wget."
      wget -q --show-progress "$XJPARSE_URL"
    else
      echo "Please install curl or wget."
      exit 1
    fi
  fi
fi

# get absolute examples folder
EXAMPLES_FOLDER=$(cd "$DIR/../examples/"; pwd)

# all xml files in the example folder
FILES="$EXAMPLES_FOLDER/*.xml"

# loop through all examples
for f in $FILES; do
  echo "------------------------------"
  echo "Validating $f..."

  # validate file with xjparse
  java -jar xjparse-app-3.0.0.jar -f -S dcc.xsd "$f"
done

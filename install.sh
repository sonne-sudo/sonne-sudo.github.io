#!/bin/bash

install_args=(
  "npm install @mui/material @emotion/react @emotion/styled"
  "npm install @mui/material @mui/styled-engine-sc styled-components"
  "npm install @fontsource/roboto"
  "npm install @mui/icons-material"
)

for arg in "${install_args[@]}"; do
  eval "$arg" || {
    echo "Failed to execute: $arg"
    exit 1
  }
  echo "Successfully executed: $arg"
done

npm audit fix --force
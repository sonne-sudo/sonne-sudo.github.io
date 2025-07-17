#!/bin/bash

# Install NPM & Node if not present
if ! command -v npm &> /dev/null; then
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
  . "$HOME/.nvm/nvm.sh"
  nvm install node
fi


install_args=(
  "npm install @mui/material @emotion/react @emotion/styled"
  "npm install @mui/material @mui/styled-engine-sc styled-components"
  "npm install @fontsource/roboto"
  "npm install @mui/icons-material"
)

for arg in "${install_args[@]}"; do
  eval "$arg" && clear || {
    echo "Failed to execute: $arg"
    exit 1
  }
  echo "Successfully executed: $arg"
done

npm audit fix --force
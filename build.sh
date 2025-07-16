#!/bin/bash
DIR="$HOME/personal/portfolio"

# 
while [[ $# -gt 0 ]]; do
  case "$1" in

    --start)
      START=true
      shift
      npm start
      ;;
    --test)
      TEST=true
      cd "$DIR"
      npm test
      shift
      ;;
    --build)
      BUILD=true
      cd "$DIR"
      npm run build
      shift
      ;;
    --help)
      echo "Usage: $0 [--test] [--help]"
      exit 0
      ;;
    *)
      echo "Unknown option: $1"
      exit 1
      ;;
  esac
  shift
done
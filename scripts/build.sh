#!/bin/bash

npm ci
npm run build
npm run build -- --emptyOutDir=false --mode=development
./scripts/deploy-to-azure.sh
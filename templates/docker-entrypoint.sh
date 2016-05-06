#!/bin/bash
set -e

echo "docker-entrypoint (NODE_ENV=$NODE_ENV)"

if [ $NODE_ENV = "development" ]; then
    node-inspector --preload=false & npm run dev
else
    npm run production
fi

#!/bin/sh

echo "Checking connectivity with other containers before start" && \
#sh -c '/setup/wait-for.sh mongodb:20017 --timeout=120 -- echo "Mongodb is connected"' && \

echo "Starting" && \
npm run dev
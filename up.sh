#!/bin/sh

./create_mongo_init.sh
docker-compose up -d
rm mongo-init.js # Delete initialization script to avoid credentials leakage.
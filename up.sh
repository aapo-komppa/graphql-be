#!/bin/sh

./create_mongo_init.sh
docker-compose up
rm mongo-init.js # Delete initialization script to avoid credentials leakage.
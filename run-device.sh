#!/usr/bin/env bash

export MONGO_URL=mongodb://localhost:3001/meteor
export MONGO_OPLOG_URL=mongodb://localhost:3001/local

meteor run ios-device --port 3050 --mobile-server http://192.168.2.21:3050
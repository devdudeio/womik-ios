#!/usr/bin/env bash

export MONGO_URL=mongodb://localhost:3001/meteor
export MONGO_OPLOG_URL=mongodb://localhost:3001/local

meteor run ios --port 3050
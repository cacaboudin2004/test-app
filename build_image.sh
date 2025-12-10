#!/bin/bash

echo "===== STOP containers ====="
docker compose down

echo "===== REMOVE old images ====="
docker rmi -f todo-app-frontend todo-app-backend 2>/dev/null

echo "===== BUILD images ====="
docker compose build

echo "===== START containers ====="
docker compose up -d

echo "⏳ Attente 5 secondes pour que le backend/front soient prêts..."
sleep 5

echo "✅ Build et démarrage terminés"


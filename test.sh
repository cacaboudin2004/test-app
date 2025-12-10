#!/bin/bash

# Test Backend
BACKEND_URL="http://localhost:5000/tasks"
echo "===== TEST BACKEND ====="
curl -s -o /dev/null -w "Code HTTP backend : %{http_code}\n" $BACKEND_URL

# Test Frontend
FRONTEND_URL="http://localhost:3000"
echo "===== TEST FRONTEND ====="
curl -s -o /dev/null -w "Code HTTP frontend : %{http_code}\n" $FRONTEND_URL

echo "🎉 Tests terminés !"


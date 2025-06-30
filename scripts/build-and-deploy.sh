#!/bin/bash

set -e

# Move to project root directory
cd "$(dirname "$0")"

# Use Minikube's Docker daemon
eval "$(minikube docker-env)"

# Build Docker images
docker build -t flask-service:latest ./flask-service
docker build -t express-service:latest ./express-service

# Apply all Kubernetes manifests
kubectl apply -f k8s-manifests/

echo "All images built and manifests applied."
# Kubernetes Microservices Demo

This project demonstrates a simple microservices architecture deployed on Kubernetes using two services: an **Express** service and a **Flask** service. The Express service calls the Flask service internally and combines responses.



## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Minikube](https://minikube.sigs.k8s.io/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)


## Features

- **Express Service**: Node.js app exposing `/` and `/combo-greet` endpoints.
- **Flask Service**: Python app exposing `/` and `/greet` endpoints.
- Inter-service communication inside Kubernetes using service DNS.
- Deployment manifests for Kubernetes including ConfigMap for Flask environment.
- Shell scripts to automate Docker image builds and Kubernetes deployments.
- Minikube integration for local Kubernetes testing.



## Setup and Deployment

 1. **Clone the repository:**
    ```
    git clone https://github.com/MiqdadProjects/microstack-lab.git

    cd microstack-lab
    ```

2. **Start Minikube:**
    ```
    minikube start
    ```

 
3.  **Build Docker images for both services:**

    ```bash
    chmod +x scripts/*.sh # Grant execute permissions to scripts
    
    ./scripts/build-and-deploy.sh
    ```


4. **Access Express service:**

   ```bash
    ./scripts/open-express-service.sh
    
    ```

 
This opens the Express service URL in your browser.

5. **Test endpoints:**

- Root: `/` — should display welcome messages.
- Combo greet: `/combo-greet` — Express calls Flask and returns combined greeting.

## Important Notes

- The Express app uses environment variables `FLASK_SERVICE_HOST` and `FLASK_SERVICE_PORT` to locate the Flask service inside the cluster.
- Flask app binds to `0.0.0.0` to accept connections from other pods.
- Kubernetes services use ClusterIP for internal communication and NodePort for external access.
- ConfigMap is used to inject environment variables into the Flask pod.

## Troubleshooting

- If `/combo-greet` returns errors, verify that:
- Both services are running and healthy (`kubectl get pods`).
- Flask service endpoints are available (`kubectl get endpoints flask-service`).
- Express pod can reach Flask service (`kubectl exec` + `curl` test).
- Environment variables are correctly set in Express deployment.

## Contributing

Feel free to open issues or pull requests for improvements or bug fixes.



---

*Developed as a Kubernetes microservices demo project to learn DevOps practices.*

        
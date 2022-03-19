# Github Container Registry

## Create PAT (personal access token)
Setting > Developer settings > personal access token


## Gve necessary permissions



## Sage PAT
export CR_PAT=pat

## Auth with pat

```
echo $CR_PAT | docker login ghcr.io -u CorneilleEdi --password-stdin
```

## Build container with appropriate tag
```
ghcr.io/OWNER/IMAGE_NAME:version
```



# Github action


```
name: Create and publish a Docker image

on:
  push:
    branches: ['main']

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  build-and-push-image:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Log in to the Container registry
        uses: docker/login-action@v1
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}


      - name: Build and push Docker image
        uses: docker/build-push-action@v2
        with:
          context: ./expresso
          push: true
          file: ./expresso/Dockerfile.multistage
          tags: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:latest
```


## Pull

```
docker pull ghcr.io/corneilleedi/container-meet:latest
```

## Run

```
docker run -p 3000:3000 --env VERSION=1.1.1 --name expresso-stages ghcr.io/corneilleedi/container-meet:latest
```

## Test

```
http://localhost:3000/
```

```
http://localhost:3000/5
```

## Build

1- Create cloudbuild config file

```
steps:
- name: 'gcr.io/cloud-builders/docker'
  args: [ 'build', '-t', 'gcr.io/PROJECT_ID/IMAGE_NAME', '-f', 'DOCKERFILE_PATH', '.' ]

```

```
steps:
- name: 'gcr.io/cloud-builders/docker'
  args: [ 'build', '-t', 'gcr.io/loopbin/container-meet', '-f', './expresso/Dockerfile.multistage', './expresso' ]
```

> Ignore file with .gcloudignore

2 - submit

```
gcloud builds submit --config CONFIG_FILE_PATH SOURCE_DIRECTORY
```

```
gcloud builds submit --config ./cloudbuild.yaml .
```

3 -push

```
- name: 'gcr.io/cloud-builders/docker'
  args: ['push', 'gcr.io/PROJECT_ID/IMAGE_NAME']

```

```
- name: 'gcr.io/cloud-builders/docker'
  args: ['push', 'eu.gcr.io/loopbin/container-meet']
```

## Pull

```
docker pull eu.gcr.io/loopbin/container-meet:latest
```

## Run

```
docker run -p 3000:3000 --env VERSION=1.1.1 --name expresso-stages eu.gcr.io/loopbin/container-meet:latest
```

## Test

```
http://localhost:3000/
```

```
http://localhost:3000/5
```

## Deploy to cloud run

#### From container registry

```
- name: 'gcr.io/google.com/cloudsdktool/cloud-sdk'
  entrypoint: gcloud
  args: ['run', 'deploy', 'SERVICE-NAME', '--image', 'gcr.io/PROJECT_ID/IMAGE', '--region', 'REGION']
```

```
- name: 'gcr.io/google.com/cloudsdktool/cloud-sdk'
  entrypoint: gcloud
  args: ['run',
    'deploy', 'container-meet',
    '--image', 'eu.gcr.io/loopbin/container-meet:latest',
    '--region', 'europe-west1',
    '--port', '3000',
    '--cpu', '1',
    '--max-instances','1',
    '--min-instances','0',
    '--memory','512Mi',
    '--concurrency','1000',
    '--allow-unauthenticated',
    ]
```

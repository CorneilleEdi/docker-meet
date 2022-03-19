## Run expresso

install packages
```
yarn install
```

Run in dev mode
```
yarn start:dev
```

Get user
```
http :3000

curl localhost:3000 | jq

curl localhost:3000
```

Get users
```
http :3000/4

curl localhost:3000/5 | jq

curl localhost:3000/5
```

## build

Build simple 
```
docker build -t expresso:1.0.0 -f Dockerfile .
```
Run simple

```
docker run -p 3000:3000 --env VERSION=1.1.1 --name expresso expresso:1.0.0
```



Multi stage  
```
docker build -t expresso-stages:1.0.0 -f Dockerfile.multistage .
```

Run multi stage

```
docker run -p 3000:3000 --env VERSION=1.1.1 --name expresso-stages expresso-stages:1.0.0
```
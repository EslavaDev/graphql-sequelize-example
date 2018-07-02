# Instalacion


## Dependencias

```
se debe ejecutar el comando:
    npm install

luego se debe lanzar el comando para correr el servidor (se debe hacer primero lo de base de datos antes de ejecutar el servidor):

    npm run dev

```

## Base de DAtos
```
ejecutar el comando:
npm run setup
```



# Query and Mutation Initiales

## URL
```
una vez ejecutado el servidor entrar a la siguiente url:
http://localhost:3000/graphiql
```

## Querys
```
mutation createuser{
  	user1: createUser(email:"daniel", password:"1321312",
    	name:"daniel", lastname: "eslava", phone:"123123",
  		identification:"13123123123", direction:"fasfasasfa"){
    	id
  	},
    user2: createUser(email:"teest", password:"tes",
    	name:"qwesas", lastname: "test", phone:"asdasd",
  		identification:"41342134", direction:"ahfdbad"){
    	id
  	}
}

mutation post{
  createPost(
    post: {description: "hola", direction: "calle"},
  	temp:{user:1}
  ){
    id
  }
}

mutation post1{
  workerPost(
    post: {id: 1, description: "hola", direction: "calle"},
  	temp:{worker:1,user:1}
  ){
    direction
    id
    userId
    client{
      name 
      lastname
    }
    workerId
    worker{
      name
      lastname
    }
  }
}

query gettalluser{
	getAllUser{
    id
    name
    identification
    email
  }
}

query getOneUser{
    getOneUser(id:1){
		id
    name
    email
    password
  }
}

query getpost{
  getPost(id:1){
		id
		createdAt
    client{
      name
      id
    }
    workerId
    worker{
      id
      name
    }
  }
}
```


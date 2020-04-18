import {Server, Model} from 'miragejs';
import { v4 as uuidv4 } from 'uuid';

const server = () => {
    const config = new Server({
        models: {
            todo : Model,
        },

        seeds(server) {
            server.create("todo", {id: uuidv4(), title: "Grab Some Apple Juice", done: false})
            server.create("todo", {id: uuidv4(), title: "Grab Some Toilet Paper", done: true})
            server.create("todo", {id: uuidv4(), title: "Wash My hands", done:false})
        },

        routes(){
            this.namespace = 'api';
      
            this.get('/todos', (schema) => {
                return schema.todos.all();
            });

            this.put('/todos/changeStatus/:id',(schema, request) => {
                let todo = schema.todos.find(request.params.id);
                todo.update({done : !todo.done});
            });

            this.post('/todos',(schema ,request) => {
                let newTodo = schema.todos.create({id: uuidv4(), title: JSON.parse(request.requestBody).title, done: false });
                return newTodo;
            });
        }
      });
    return config;
} 
    

export default server;
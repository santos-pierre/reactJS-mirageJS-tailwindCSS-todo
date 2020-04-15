import {Server} from 'miragejs';

const server = () => {
    const config = new Server({
        routes(){
            this.namespace = 'api';
      
            this.get('/todos', () => {
                return {
                    todos : [
                      {title: "Grab Some Apple Juice", done: false},
                      {title: "Grab Some Toilet Paper", done: true},
                      {title: "Wash My hands", done:false},
                    ]
                };
            });
        }
      });
    return config;
} 
    

export default server;
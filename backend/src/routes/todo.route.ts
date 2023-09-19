import * as express from "express";
import { TodoController } from "../controller/TodoController";

// Create a router object
export const router = express.Router();

// Create an instance of the TodoController
const todoController = new TodoController();

// Create routes from the todoController functions
router.get("/todos/", todoController.getAllTodos);
router.post("/todos/", (req, res) => {
    /*  #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Add a todo',
            schema: { 
                $taskName: 'COMP 251 A1',
                $completed: false,
            }
    } */
    todoController.addTodo(req, res);
});
router.put("/todo/:id", (req, res) => {
    /*  #swagger.parameters['id'] = {
            type: "string"
        }
        #swagger.parameters['obj'] = {
            in: 'body',
            schema: {
                completed: true,
            }
        }
    } */
    todoController.updateTodo(req, res);
});
router.delete("/todo/:id", (req, res) => {
    /*  #swagger.parameters['id'] = {
            type: "string"
        }
    } */
    todoController.deleteTodo(req, res);
});
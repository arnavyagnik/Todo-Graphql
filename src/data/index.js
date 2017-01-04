// onst {getTodoById,getTodos,createTodo,toggleTodoById,removeTodoById} = require('./src/data')

const todoA = {
  id : "1",
  title:'How you Doin??',
  completed : true
}

const todoB = {
  id : "2",
  title:'Lets Do this',
  completed : true
}

const todoC = {
  id : "3",
  title:'Have I learnt This?',
  completed : false
}
const todos = [todoA,todoB,todoC]

const getTodos = () => new Promise((resolve) => resolve(todos))

const getTodoById = (id) =>  new Promise((resolve)=>{
  const [todo] = todos.filter((todo) => todo.id === id )
  resolve(todo)
})

const createTodo = ({title, completed}) => {
  const todo = {
    id : todos.length + 1,
    title,
    completed
  }
  todos.push(todo)
  return todo
}

const toggleTodoById = (id) => {
  const todo = todos.filter((todo) => todo.id === id )
    todo[0].completed = !todo[0].completed
  return todo[0]
}

const removeTodoById = (id) => {
  var i = todos.length
   while(i--){
      if(todos[i] && todos[i].id === id  ){
          todos.splice(i,1);
      }
   }
   return todos
}

exports.removeTodoById = removeTodoById;
exports.getTodoById = getTodoById;
exports.toggleTodoById = toggleTodoById;
exports.getTodos = getTodos;
exports.createTodo = createTodo;

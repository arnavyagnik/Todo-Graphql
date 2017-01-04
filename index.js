const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLInputObjectType
} = require('graphql')

const express = require('express')
const graphqlHTTP = require('express-graphql')

const {getTodoById,getTodos,createTodo,toggleTodoById,removeTodoById} = require('./src/data')

const PORT = process.env.PORT || 3000
const server = express();

const todo = new GraphQLObjectType({
  name : 'TODO',
  description :  'a todo',
  fields : {
    id : {
        type : new GraphQLNonNull(GraphQLID),
        description : 'id of the todo'
    },
    title : {
      type : GraphQLString,
      description : 'title of the todo'
    },
    completed : {
      type : GraphQLBoolean,
      description : 'whether a todo is completed'
    }
  },
})
module.exports.todo = todo

const todoInputType = new GraphQLInputObjectType({
  name : 'TodoInput',
  fields : {
    title : {
      type : new GraphQLNonNull(GraphQLString),
      description : 'title of the todo'
    },
    completed : {
      type : new GraphQLNonNull(GraphQLBoolean),
      description : 'whether a todo is completed'
    }
  }
})

const mutationType = new GraphQLObjectType({
  name : 'mutation',
  description : 'The root Mutation type',
  fields :{
    createTodo : {
      type : todo,
      args : {
        todo : {
          type : new GraphQLNonNull(todoInputType),
        }
      },
      resolve : (_ , args) => {
        createTodo(args.todo)
      }
    },
    toggleTodo : {
      type : todo,
      args : {
        id : {
          type : new GraphQLNonNull(GraphQLID)
        }
      },
      resolve : (_ , args) => toggleTodoById(args.id)
    },
    removeTodo : {
      type : new GraphQLList(todo),
      args : {
        id : {
          type : new GraphQLNonNull(GraphQLID)
        }
      },
      resolve : (_ , args) => removeTodoById(args.id)
    }
  }
})
const queryType = new GraphQLObjectType({
  name : 'QueryType',
  description : 'The root query type.',
  fields : {
    todos : {
      type : new GraphQLList(todo),
      resolve : () => getTodos()
    },
    todo : {
      type : todo,
      args : {
         id : {
           type : GraphQLID,
           description : 'The id of the todo'
         }
      },
      resolve : (_ , args) => getTodoById(args.id)
    }
  }
})
const schema = new GraphQLSchema({
  query : queryType,
  mutation : mutationType
})


server.use('/',graphqlHTTP({
  schema,
  graphiql : true,
}))


server.listen(PORT , ()=> {
  console.log(`listening on http://localhost:${PORT}`)
})

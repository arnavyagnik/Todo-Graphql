/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _require = __webpack_require__(2),\n    GraphQLSchema = _require.GraphQLSchema,\n    GraphQLObjectType = _require.GraphQLObjectType,\n    GraphQLInt = _require.GraphQLInt,\n    GraphQLBoolean = _require.GraphQLBoolean,\n    GraphQLID = _require.GraphQLID,\n    GraphQLNonNull = _require.GraphQLNonNull,\n    GraphQLString = _require.GraphQLString,\n    GraphQLList = _require.GraphQLList,\n    GraphQLInputObjectType = _require.GraphQLInputObjectType;\n\nvar express = __webpack_require__(3);\nvar graphqlHTTP = __webpack_require__(4);\n\nvar _require2 = __webpack_require__(5),\n    getTodoById = _require2.getTodoById,\n    getTodos = _require2.getTodos,\n    createTodo = _require2.createTodo,\n    toggleTodoById = _require2.toggleTodoById,\n    removeTodoById = _require2.removeTodoById;\n\nvar PORT = process.env.PORT || 3000;\nvar server = express();\n\nvar todo = new GraphQLObjectType({\n  name: 'TODO',\n  description: 'a todo',\n  fields: {\n    id: {\n      type: new GraphQLNonNull(GraphQLID),\n      description: 'id of the todo'\n    },\n    title: {\n      type: GraphQLString,\n      description: 'title of the todo'\n    },\n    completed: {\n      type: GraphQLBoolean,\n      description: 'whether a todo is completed'\n    }\n  }\n});\nmodule.exports.todo = todo;\n\nvar todoInputType = new GraphQLInputObjectType({\n  name: 'TodoInput',\n  fields: {\n    title: {\n      type: new GraphQLNonNull(GraphQLString),\n      description: 'title of the todo'\n    },\n    completed: {\n      type: new GraphQLNonNull(GraphQLBoolean),\n      description: 'whether a todo is completed'\n    }\n  }\n});\n\nvar mutationType = new GraphQLObjectType({\n  name: 'mutation',\n  description: 'The root Mutation type',\n  fields: {\n    createTodo: {\n      type: todo,\n      args: {\n        todo: {\n          type: new GraphQLNonNull(todoInputType)\n        }\n      },\n      resolve: function resolve(_, args) {\n        createTodo(args.todo);\n      }\n    },\n    toggleTodo: {\n      type: todo,\n      args: {\n        id: {\n          type: new GraphQLNonNull(GraphQLID)\n        }\n      },\n      resolve: function resolve(_, args) {\n        return toggleTodoById(args.id);\n      }\n    },\n    removeTodo: {\n      type: new GraphQLList(todo),\n      args: {\n        id: {\n          type: new GraphQLNonNull(GraphQLID)\n        }\n      },\n      resolve: function resolve(_, args) {\n        return removeTodoById(args.id);\n      }\n    }\n  }\n});\nvar queryType = new GraphQLObjectType({\n  name: 'QueryType',\n  description: 'The root query type.',\n  fields: {\n    todos: {\n      type: new GraphQLList(todo),\n      resolve: function resolve() {\n        return getTodos();\n      }\n    },\n    todo: {\n      type: todo,\n      args: {\n        id: {\n          type: GraphQLID,\n          description: 'The id of the todo'\n        }\n      },\n      resolve: function resolve(_, args) {\n        return getTodoById(args.id);\n      }\n    }\n  }\n});\nvar schema = new GraphQLSchema({\n  query: queryType,\n  mutation: mutationType\n});\n\nserver.use('/', graphqlHTTP({\n  schema: schema,\n  graphiql: true\n}));\n\nserver.listen(PORT, function () {\n  console.log('listening on http://localhost:' + PORT);\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8yNjQ1Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJHcmFwaFFMU2NoZW1hIiwiR3JhcGhRTE9iamVjdFR5cGUiLCJHcmFwaFFMSW50IiwiR3JhcGhRTEJvb2xlYW4iLCJHcmFwaFFMSUQiLCJHcmFwaFFMTm9uTnVsbCIsIkdyYXBoUUxTdHJpbmciLCJHcmFwaFFMTGlzdCIsIkdyYXBoUUxJbnB1dE9iamVjdFR5cGUiLCJleHByZXNzIiwiZ3JhcGhxbEhUVFAiLCJnZXRUb2RvQnlJZCIsImdldFRvZG9zIiwiY3JlYXRlVG9kbyIsInRvZ2dsZVRvZG9CeUlkIiwicmVtb3ZlVG9kb0J5SWQiLCJQT1JUIiwicHJvY2VzcyIsImVudiIsInNlcnZlciIsInRvZG8iLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJmaWVsZHMiLCJpZCIsInR5cGUiLCJ0aXRsZSIsImNvbXBsZXRlZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJ0b2RvSW5wdXRUeXBlIiwibXV0YXRpb25UeXBlIiwiYXJncyIsInJlc29sdmUiLCJfIiwidG9nZ2xlVG9kbyIsInJlbW92ZVRvZG8iLCJxdWVyeVR5cGUiLCJ0b2RvcyIsInNjaGVtYSIsInF1ZXJ5IiwibXV0YXRpb24iLCJ1c2UiLCJncmFwaGlxbCIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O2VBVUksbUJBQUFBLENBQVEsQ0FBUixDO0lBVEZDLGEsWUFBQUEsYTtJQUNBQyxpQixZQUFBQSxpQjtJQUNBQyxVLFlBQUFBLFU7SUFDQUMsYyxZQUFBQSxjO0lBQ0FDLFMsWUFBQUEsUztJQUNBQyxjLFlBQUFBLGM7SUFDQUMsYSxZQUFBQSxhO0lBQ0FDLFcsWUFBQUEsVztJQUNBQyxzQixZQUFBQSxzQjs7QUFHRixJQUFNQyxVQUFVLG1CQUFBVixDQUFRLENBQVIsQ0FBaEI7QUFDQSxJQUFNVyxjQUFjLG1CQUFBWCxDQUFRLENBQVIsQ0FBcEI7O2dCQUV3RSxtQkFBQUEsQ0FBUSxDQUFSLEM7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ZSxTQUFTLElBQUl2QyxhQUFKLENBQWtCO0FBQy9Cd0MsU0FBUUgsU0FEdUI7QUFFL0JJLFlBQVdWO0FBRm9CLENBQWxCLENBQWY7O0FBTUFaLE9BQU91QixHQUFQLENBQVcsR0FBWCxFQUFlaEMsWUFBWTtBQUN6QjZCLGdCQUR5QjtBQUV6QkksWUFBVztBQUZjLENBQVosQ0FBZjs7QUFNQXhCLE9BQU95QixNQUFQLENBQWM1QixJQUFkLEVBQXFCLFlBQUs7QUFDeEI2QixVQUFRQyxHQUFSLG9DQUE2QzlCLElBQTdDO0FBQ0QsQ0FGRCIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge1xuICBHcmFwaFFMU2NoZW1hLFxuICBHcmFwaFFMT2JqZWN0VHlwZSxcbiAgR3JhcGhRTEludCxcbiAgR3JhcGhRTEJvb2xlYW4sXG4gIEdyYXBoUUxJRCxcbiAgR3JhcGhRTE5vbk51bGwsXG4gIEdyYXBoUUxTdHJpbmcsXG4gIEdyYXBoUUxMaXN0LFxuICBHcmFwaFFMSW5wdXRPYmplY3RUeXBlXG59ID0gcmVxdWlyZSgnZ3JhcGhxbCcpXG5cbmNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJylcbmNvbnN0IGdyYXBocWxIVFRQID0gcmVxdWlyZSgnZXhwcmVzcy1ncmFwaHFsJylcblxuY29uc3Qge2dldFRvZG9CeUlkLGdldFRvZG9zLGNyZWF0ZVRvZG8sdG9nZ2xlVG9kb0J5SWQscmVtb3ZlVG9kb0J5SWR9ID0gcmVxdWlyZSgnLi9zcmMvZGF0YScpXG5cbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDBcbmNvbnN0IHNlcnZlciA9IGV4cHJlc3MoKTtcblxuY29uc3QgdG9kbyA9IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gIG5hbWUgOiAnVE9ETycsXG4gIGRlc2NyaXB0aW9uIDogICdhIHRvZG8nLFxuICBmaWVsZHMgOiB7XG4gICAgaWQgOiB7XG4gICAgICAgIHR5cGUgOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTElEKSxcbiAgICAgICAgZGVzY3JpcHRpb24gOiAnaWQgb2YgdGhlIHRvZG8nXG4gICAgfSxcbiAgICB0aXRsZSA6IHtcbiAgICAgIHR5cGUgOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgZGVzY3JpcHRpb24gOiAndGl0bGUgb2YgdGhlIHRvZG8nXG4gICAgfSxcbiAgICBjb21wbGV0ZWQgOiB7XG4gICAgICB0eXBlIDogR3JhcGhRTEJvb2xlYW4sXG4gICAgICBkZXNjcmlwdGlvbiA6ICd3aGV0aGVyIGEgdG9kbyBpcyBjb21wbGV0ZWQnXG4gICAgfVxuICB9LFxufSlcbm1vZHVsZS5leHBvcnRzLnRvZG8gPSB0b2RvXG5cbmNvbnN0IHRvZG9JbnB1dFR5cGUgPSBuZXcgR3JhcGhRTElucHV0T2JqZWN0VHlwZSh7XG4gIG5hbWUgOiAnVG9kb0lucHV0JyxcbiAgZmllbGRzIDoge1xuICAgIHRpdGxlIDoge1xuICAgICAgdHlwZSA6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMU3RyaW5nKSxcbiAgICAgIGRlc2NyaXB0aW9uIDogJ3RpdGxlIG9mIHRoZSB0b2RvJ1xuICAgIH0sXG4gICAgY29tcGxldGVkIDoge1xuICAgICAgdHlwZSA6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMQm9vbGVhbiksXG4gICAgICBkZXNjcmlwdGlvbiA6ICd3aGV0aGVyIGEgdG9kbyBpcyBjb21wbGV0ZWQnXG4gICAgfVxuICB9XG59KVxuXG5jb25zdCBtdXRhdGlvblR5cGUgPSBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICBuYW1lIDogJ211dGF0aW9uJyxcbiAgZGVzY3JpcHRpb24gOiAnVGhlIHJvb3QgTXV0YXRpb24gdHlwZScsXG4gIGZpZWxkcyA6e1xuICAgIGNyZWF0ZVRvZG8gOiB7XG4gICAgICB0eXBlIDogdG9kbyxcbiAgICAgIGFyZ3MgOiB7XG4gICAgICAgIHRvZG8gOiB7XG4gICAgICAgICAgdHlwZSA6IG5ldyBHcmFwaFFMTm9uTnVsbCh0b2RvSW5wdXRUeXBlKSxcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJlc29sdmUgOiAoXyAsIGFyZ3MpID0+IHtcbiAgICAgICAgY3JlYXRlVG9kbyhhcmdzLnRvZG8pXG4gICAgICB9XG4gICAgfSxcbiAgICB0b2dnbGVUb2RvIDoge1xuICAgICAgdHlwZSA6IHRvZG8sXG4gICAgICBhcmdzIDoge1xuICAgICAgICBpZCA6IHtcbiAgICAgICAgICB0eXBlIDogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxJRClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJlc29sdmUgOiAoXyAsIGFyZ3MpID0+IHRvZ2dsZVRvZG9CeUlkKGFyZ3MuaWQpXG4gICAgfSxcbiAgICByZW1vdmVUb2RvIDoge1xuICAgICAgdHlwZSA6IG5ldyBHcmFwaFFMTGlzdCh0b2RvKSxcbiAgICAgIGFyZ3MgOiB7XG4gICAgICAgIGlkIDoge1xuICAgICAgICAgIHR5cGUgOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTElEKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmVzb2x2ZSA6IChfICwgYXJncykgPT4gcmVtb3ZlVG9kb0J5SWQoYXJncy5pZClcbiAgICB9XG4gIH1cbn0pXG5jb25zdCBxdWVyeVR5cGUgPSBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICBuYW1lIDogJ1F1ZXJ5VHlwZScsXG4gIGRlc2NyaXB0aW9uIDogJ1RoZSByb290IHF1ZXJ5IHR5cGUuJyxcbiAgZmllbGRzIDoge1xuICAgIHRvZG9zIDoge1xuICAgICAgdHlwZSA6IG5ldyBHcmFwaFFMTGlzdCh0b2RvKSxcbiAgICAgIHJlc29sdmUgOiAoKSA9PiBnZXRUb2RvcygpXG4gICAgfSxcbiAgICB0b2RvIDoge1xuICAgICAgdHlwZSA6IHRvZG8sXG4gICAgICBhcmdzIDoge1xuICAgICAgICAgaWQgOiB7XG4gICAgICAgICAgIHR5cGUgOiBHcmFwaFFMSUQsXG4gICAgICAgICAgIGRlc2NyaXB0aW9uIDogJ1RoZSBpZCBvZiB0aGUgdG9kbydcbiAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByZXNvbHZlIDogKF8gLCBhcmdzKSA9PiBnZXRUb2RvQnlJZChhcmdzLmlkKVxuICAgIH1cbiAgfVxufSlcbmNvbnN0IHNjaGVtYSA9IG5ldyBHcmFwaFFMU2NoZW1hKHtcbiAgcXVlcnkgOiBxdWVyeVR5cGUsXG4gIG11dGF0aW9uIDogbXV0YXRpb25UeXBlXG59KVxuXG5cbnNlcnZlci51c2UoJy8nLGdyYXBocWxIVFRQKHtcbiAgc2NoZW1hLFxuICBncmFwaGlxbCA6IHRydWUsXG59KSlcblxuXG5zZXJ2ZXIubGlzdGVuKFBPUlQgLCAoKT0+IHtcbiAgY29uc29sZS5sb2coYGxpc3RlbmluZyBvbiBodHRwOi8vbG9jYWxob3N0OiR7UE9SVH1gKVxufSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaW5kZXguanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("module.exports = require(\"graphql\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsXCI/OWEyYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiZ3JhcGhxbFwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("module.exports = require(\"express\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCI/ZDJkMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 4 */
/***/ function(module, exports) {

	eval("module.exports = require(\"express-graphql\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLWdyYXBocWxcIj9iZGZmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLWdyYXBocWxcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImV4cHJlc3MtZ3JhcGhxbFwiXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 5 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\n// onst {getTodoById,getTodos,createTodo,toggleTodoById,removeTodoById} = require('./src/data')\n\nvar todoA = {\n  id: \"1\",\n  title: 'How you Doin??',\n  completed: true\n};\n\nvar todoB = {\n  id: \"2\",\n  title: 'Lets Do this',\n  completed: true\n};\n\nvar todoC = {\n  id: \"3\",\n  title: 'Have I learnt This?',\n  completed: false\n};\nvar todos = [todoA, todoB, todoC];\n\nvar getTodos = function getTodos() {\n  return new Promise(function (resolve) {\n    return resolve(todos);\n  });\n};\n\nvar getTodoById = function getTodoById(id) {\n  return new Promise(function (resolve) {\n    var _todos$filter = todos.filter(function (todo) {\n      return todo.id === id;\n    }),\n        _todos$filter2 = _slicedToArray(_todos$filter, 1),\n        todo = _todos$filter2[0];\n\n    resolve(todo);\n  });\n};\n\nvar createTodo = function createTodo(_ref) {\n  var title = _ref.title,\n      completed = _ref.completed;\n\n  var todo = {\n    id: todos.length + 1,\n    title: title,\n    completed: completed\n  };\n  todos.push(todo);\n  return todo;\n};\n\nvar toggleTodoById = function toggleTodoById(id) {\n  var todo = todos.filter(function (todo) {\n    return todo.id === id;\n  });\n  todo[0].completed = !todo[0].completed;\n  return todo[0];\n};\n\nvar removeTodoById = function removeTodoById(id) {\n  var i = todos.length;\n  while (i--) {\n    if (todos[i] && todos[i].id === id) {\n      todos.splice(i, 1);\n    }\n  }\n  return todos;\n};\n\nexports.removeTodoById = removeTodoById;\nexports.getTodoById = getTodoById;\nexports.toggleTodoById = toggleTodoById;\nexports.getTodos = getTodos;\nexports.createTodo = createTodo;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbmRleC5qcz8zOWE3Il0sIm5hbWVzIjpbInRvZG9BIiwiaWQiLCJ0aXRsZSIsImNvbXBsZXRlZCIsInRvZG9CIiwidG9kb0MiLCJ0b2RvcyIsImdldFRvZG9zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJnZXRUb2RvQnlJZCIsImZpbHRlciIsInRvZG8iLCJjcmVhdGVUb2RvIiwibGVuZ3RoIiwicHVzaCIsInRvZ2dsZVRvZG9CeUlkIiwicmVtb3ZlVG9kb0J5SWQiLCJpIiwic3BsaWNlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBLElBQU1BLFFBQVE7QUFDWkMsTUFBSyxHQURPO0FBRVpDLFNBQU0sZ0JBRk07QUFHWkMsYUFBWTtBQUhBLENBQWQ7O0FBTUEsSUFBTUMsUUFBUTtBQUNaSCxNQUFLLEdBRE87QUFFWkMsU0FBTSxjQUZNO0FBR1pDLGFBQVk7QUFIQSxDQUFkOztBQU1BLElBQU1FLFFBQVE7QUFDWkosTUFBSyxHQURPO0FBRVpDLFNBQU0scUJBRk07QUFHWkMsYUFBWTtBQUhBLENBQWQ7QUFLQSxJQUFNRyxRQUFRLENBQUNOLEtBQUQsRUFBT0ksS0FBUCxFQUFhQyxLQUFiLENBQWQ7O0FBRUEsSUFBTUUsV0FBVyxTQUFYQSxRQUFXO0FBQUEsU0FBTSxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRDtBQUFBLFdBQWFBLFFBQVFILEtBQVIsQ0FBYjtBQUFBLEdBQVosQ0FBTjtBQUFBLENBQWpCOztBQUVBLElBQU1JLGNBQWMsU0FBZEEsV0FBYyxDQUFDVCxFQUFEO0FBQUEsU0FBUyxJQUFJTyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFXO0FBQUEsd0JBQ25DSCxNQUFNSyxNQUFOLENBQWEsVUFBQ0MsSUFBRDtBQUFBLGFBQVVBLEtBQUtYLEVBQUwsS0FBWUEsRUFBdEI7QUFBQSxLQUFiLENBRG1DO0FBQUE7QUFBQSxRQUMzQ1csSUFEMkM7O0FBRWxESCxZQUFRRyxJQUFSO0FBQ0QsR0FINEIsQ0FBVDtBQUFBLENBQXBCOztBQUtBLElBQU1DLGFBQWEsU0FBYkEsVUFBYSxPQUF3QjtBQUFBLE1BQXRCWCxLQUFzQixRQUF0QkEsS0FBc0I7QUFBQSxNQUFmQyxTQUFlLFFBQWZBLFNBQWU7O0FBQ3pDLE1BQU1TLE9BQU87QUFDWFgsUUFBS0ssTUFBTVEsTUFBTixHQUFlLENBRFQ7QUFFWFosZ0JBRlc7QUFHWEM7QUFIVyxHQUFiO0FBS0FHLFFBQU1TLElBQU4sQ0FBV0gsSUFBWDtBQUNBLFNBQU9BLElBQVA7QUFDRCxDQVJEOztBQVVBLElBQU1JLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ2YsRUFBRCxFQUFRO0FBQzdCLE1BQU1XLE9BQU9OLE1BQU1LLE1BQU4sQ0FBYSxVQUFDQyxJQUFEO0FBQUEsV0FBVUEsS0FBS1gsRUFBTCxLQUFZQSxFQUF0QjtBQUFBLEdBQWIsQ0FBYjtBQUNFVyxPQUFLLENBQUwsRUFBUVQsU0FBUixHQUFvQixDQUFDUyxLQUFLLENBQUwsRUFBUVQsU0FBN0I7QUFDRixTQUFPUyxLQUFLLENBQUwsQ0FBUDtBQUNELENBSkQ7O0FBTUEsSUFBTUssaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDaEIsRUFBRCxFQUFRO0FBQzdCLE1BQUlpQixJQUFJWixNQUFNUSxNQUFkO0FBQ0MsU0FBTUksR0FBTixFQUFVO0FBQ1AsUUFBR1osTUFBTVksQ0FBTixLQUFZWixNQUFNWSxDQUFOLEVBQVNqQixFQUFULEtBQWdCQSxFQUEvQixFQUFvQztBQUNoQ0ssWUFBTWEsTUFBTixDQUFhRCxDQUFiLEVBQWUsQ0FBZjtBQUNIO0FBQ0g7QUFDRCxTQUFPWixLQUFQO0FBQ0YsQ0FSRDs7QUFVQWMsUUFBUUgsY0FBUixHQUF5QkEsY0FBekI7QUFDQUcsUUFBUVYsV0FBUixHQUFzQkEsV0FBdEI7QUFDQVUsUUFBUUosY0FBUixHQUF5QkEsY0FBekI7QUFDQUksUUFBUWIsUUFBUixHQUFtQkEsUUFBbkI7QUFDQWEsUUFBUVAsVUFBUixHQUFxQkEsVUFBckIiLCJmaWxlIjoiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG9uc3Qge2dldFRvZG9CeUlkLGdldFRvZG9zLGNyZWF0ZVRvZG8sdG9nZ2xlVG9kb0J5SWQscmVtb3ZlVG9kb0J5SWR9ID0gcmVxdWlyZSgnLi9zcmMvZGF0YScpXG5cbmNvbnN0IHRvZG9BID0ge1xuICBpZCA6IFwiMVwiLFxuICB0aXRsZTonSG93IHlvdSBEb2luPz8nLFxuICBjb21wbGV0ZWQgOiB0cnVlXG59XG5cbmNvbnN0IHRvZG9CID0ge1xuICBpZCA6IFwiMlwiLFxuICB0aXRsZTonTGV0cyBEbyB0aGlzJyxcbiAgY29tcGxldGVkIDogdHJ1ZVxufVxuXG5jb25zdCB0b2RvQyA9IHtcbiAgaWQgOiBcIjNcIixcbiAgdGl0bGU6J0hhdmUgSSBsZWFybnQgVGhpcz8nLFxuICBjb21wbGV0ZWQgOiBmYWxzZVxufVxuY29uc3QgdG9kb3MgPSBbdG9kb0EsdG9kb0IsdG9kb0NdXG5cbmNvbnN0IGdldFRvZG9zID0gKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmUodG9kb3MpKVxuXG5jb25zdCBnZXRUb2RvQnlJZCA9IChpZCkgPT4gIG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICBjb25zdCBbdG9kb10gPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uaWQgPT09IGlkIClcbiAgcmVzb2x2ZSh0b2RvKVxufSlcblxuY29uc3QgY3JlYXRlVG9kbyA9ICh7dGl0bGUsIGNvbXBsZXRlZH0pID0+IHtcbiAgY29uc3QgdG9kbyA9IHtcbiAgICBpZCA6IHRvZG9zLmxlbmd0aCArIDEsXG4gICAgdGl0bGUsXG4gICAgY29tcGxldGVkXG4gIH1cbiAgdG9kb3MucHVzaCh0b2RvKVxuICByZXR1cm4gdG9kb1xufVxuXG5jb25zdCB0b2dnbGVUb2RvQnlJZCA9IChpZCkgPT4ge1xuICBjb25zdCB0b2RvID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmlkID09PSBpZCApXG4gICAgdG9kb1swXS5jb21wbGV0ZWQgPSAhdG9kb1swXS5jb21wbGV0ZWRcbiAgcmV0dXJuIHRvZG9bMF1cbn1cblxuY29uc3QgcmVtb3ZlVG9kb0J5SWQgPSAoaWQpID0+IHtcbiAgdmFyIGkgPSB0b2Rvcy5sZW5ndGhcbiAgIHdoaWxlKGktLSl7XG4gICAgICBpZih0b2Rvc1tpXSAmJiB0b2Rvc1tpXS5pZCA9PT0gaWQgICl7XG4gICAgICAgICAgdG9kb3Muc3BsaWNlKGksMSk7XG4gICAgICB9XG4gICB9XG4gICByZXR1cm4gdG9kb3Ncbn1cblxuZXhwb3J0cy5yZW1vdmVUb2RvQnlJZCA9IHJlbW92ZVRvZG9CeUlkO1xuZXhwb3J0cy5nZXRUb2RvQnlJZCA9IGdldFRvZG9CeUlkO1xuZXhwb3J0cy50b2dnbGVUb2RvQnlJZCA9IHRvZ2dsZVRvZG9CeUlkO1xuZXhwb3J0cy5nZXRUb2RvcyA9IGdldFRvZG9zO1xuZXhwb3J0cy5jcmVhdGVUb2RvID0gY3JlYXRlVG9kbztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2RhdGEvaW5kZXguanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);
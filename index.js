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

const {getVideoById,getVideos,createVideo} = require('./src/data')
const {nodeInterface,nodeField} = require('./src/node')
const {globalIdField} = require('graphql-relay')

const PORT = process.env.PORT || 3000
const server = express();

// const instructorType = new GraphQLObjectType({
//   fields : {
//     id : {
//       type : new GraphQLNonNull(GraphQLID),
//       description : 'id of the video.',
//     },
//
//   },
//   interfaces : [nodeInterface]
// })
const videoType = new GraphQLObjectType({
  name : 'Video',
  description :  'a video on Friends',
  fields : {
    id : globalIdField(),
    title : {
      type : GraphQLString,
      description : 'title of the video'
    },
    duration :{
      type : GraphQLInt,
      description : 'Duration of the video.'
    },
    watched : {
      type : GraphQLBoolean,
      description : 'whether a viewer watched the video'
    }
  },
  interfaces : [nodeInterface],
})
module.exports.videoType = videoType

const videoInputType = new GraphQLInputObjectType({
  name : 'VideoInput',
  fields : {
    title : {
      type : new GraphQLNonNull(GraphQLString),
      description : 'title of the video'
    },
    duration :{
      type : new GraphQLNonNull(GraphQLInt),
      description : 'Duration of the video.'
    },
    watched : {
      type : new GraphQLNonNull(GraphQLBoolean),
      description : 'whether a viewer watched the video'
    }
  }
})

const mutationType = new GraphQLObjectType({
  name : 'mutation',
  description : 'The root Mutation type',
  fields :{
    createVideo : {
      type : videoType,
      args : {
        video : {
          type : new GraphQLNonNull(videoInputType),
        }
      },
      resolve : (_ , args) => {
        createVideo(args.video)
      }
    }
  }
})
const queryType = new GraphQLObjectType({
  name : 'QueryType',
  description : 'The root query type.',
  fields : {
    node : nodeField,
    videos : {
      type : new GraphQLList(videoType),
      resolve : () => getVideos()
    },
    video : {
      type : videoType,
      args : {
         id : {
           type : GraphQLID,
           description : 'The id of the video'
         }
      },
      resolve : (_ , args) => getVideoById(args.id)
    }
  }
})
const schema = new GraphQLSchema({
  query : queryType,
  mutation : mutationType
})

// const schema = buildSchema(
//   `
//     type Video {
//       id : ID,
//       title : String,
//       duration : Int,
//       watched : Boolean
//     }
//     type Query {
//       video : Video
//       videos : [Video]
//     }
//
//     type Schema {
//       query : Query
//     }
//   `
// )

// const resolvers = {
//   video : () => ({
//     id : '1',
//     title : 'bar',
//     duration : 180,
//     watched : false
//   }),
//   videos : () => videos,
// }

// const query = `
//   query myFirstQuery {
//     videos {
//       id,
//       title,
//       duration,
//       watched
//     }
//   }
// `
// ;

server.use('/graphql',graphqlHTTP({
  schema,
  graphiql : true,
}))


server.listen(PORT , ()=> {
  console.log(`listening on http://localhost:${PORT}`)
})
// graphql(schema , query , resolvers)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))

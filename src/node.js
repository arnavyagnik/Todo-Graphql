'use strict'

const {
  GraphQLInterfaceType,
  GraphQLNonNull,
  GraphQLID
} = require('graphql');

const {
  nodeDefinitions,
  fromGlobalId
} = require('graphql-relay');

const {getObjectById} = require('./data')


const {nodeInterface , nodeField} = nodeDefinitions(
  (globalId) => {
    const {type , id} = fromGlobalId(globalId)
    console.log(type,id);
    return getObjectById(type.toLowerCase() , id)
  },
  (object) => {
    const {videoType} = require('../')
    console.log(object , videoType);
    if (object.title) {
      return videoType
    }
    else {
      return null
    }
  }
)

// const nodeInterface = new GraphQLInterfaceType({
//   name : 'Node',
//   fields : {
//     id : {
//       type : new GraphQLNonNull(GraphQLID)
//     }
//   },
//   resolveType : (obj) =>{
//     if(obj.title){
//       return videoType
//     }
//     else {
//       return null
//     }
//   }
// })


module.exports.nodeInterface = nodeInterface;
module.exports.nodeField = nodeField;

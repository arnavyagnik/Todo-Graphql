
const videoA = {
  id : '2',
  title:'How you Doin??',
  duration:240,
  watched : true
}

const videoB = {
  id : '3',
  title:'Lets Do this',
  duration:240,
  watched : true
}

const videoC = {
  id : '4',
  title:'Have I learnt This?',
  duration:1000,
  watched : false
}
const videos = [videoA,videoB,videoC]

const getVideos = () => new Promise((resolve) => resolve(videos))

const getVideoById = (id) =>  new Promise((resolve)=>{
  const [video] = videos.filter((video) => video.id === id )
  resolve(video)
})

const createVideo = ({title , duration , watched}) => {
  const video = {
    id : videos.length + 1,
    title,
    duration,
    watched
  }
  videos.push(video)
  return video
}

const getObjectById = (type ,id ) => {
  const types = {
    video : getVideoById,
  }
  return types[type](id)
}

exports.getVideoById = getVideoById;
exports.getVideos = getVideos;
exports.createVideo = createVideo;
exports.getObjectById = getObjectById;

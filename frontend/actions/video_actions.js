export const RECEIVE_VIDEO = "RECEIVE_VIDEO"
export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS"
import {getVideo, getVideos} from '../util/video_util';

const receiveVideo = video => {
    return {
        type: RECEIVE_VIDEO, 
        video
    }
}

const receiveVideos = videos => {
    return {
        type: RECEIVE_ALL_VIDEOS,
        videos 
    }
}

export const fetchVideos = () => dispatch => {
    return getVideos()
        .then( videos => dispatch(receiveVideos(videos)));
}

export const fetchVideo = videoId => dispatch => {
    return getVideo(videoId)
        .then( video => dispatch(receiveVideo(video)));
}
export const getVideos = () => {
    return $.ajax({
        method: "GET",
        url: "/api/videos"
    })
}

export const getVideo = videoId => {
    return $.ajax({
        method: "GET",
        url: `/api/videos/${videoId}`
    })
}
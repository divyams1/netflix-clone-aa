export const getVideoProfiles = () => {
    return $.ajax({
        method: "GET",
        url: "/api/video_profiles"
    })
}

export const makeVideoProfile = videoProfile => {
    return $.ajax({
        method: "POST", 
        url: "/api/video_profiles",
        data: { videoProfile: videoProfile }
    })
}
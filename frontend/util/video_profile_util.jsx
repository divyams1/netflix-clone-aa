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
        data: { video_profile: videoProfile }
    })
}

export const deleteVideoProfile = videoProfileId => {
    return $.ajax({
        method: "DELETE",
        url: `/api/video_profiles/${videoProfileId}`,
    })
}
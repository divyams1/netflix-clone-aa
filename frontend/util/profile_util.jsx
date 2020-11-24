
export const getProfiles = () => {
    return $.ajax({
        method: "GET",
        url: "/api/profiles"
    })
}

export const makeProfile = profile => {
    return $.ajax({
        method: "POST",
        url: "/api/profiles",
        data: { profile: profile }
    })
}

export const getProfile = profileId => {
    return $.ajax({
        method: "GET",
        url: `/api/profiles/${profileId}`
    })
}

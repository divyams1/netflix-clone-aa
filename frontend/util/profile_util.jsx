
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


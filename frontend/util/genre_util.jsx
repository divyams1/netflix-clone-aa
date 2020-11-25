export const getGenre = (genreId) => {
    return $.ajax({
        method: "GET",
        url: `/api/genres/${genreId}`
    })
}

export const getGenres = () => {
     return $.ajax({
        method: "GET",
        url: "/api/genres"
    })
}
const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    console.dir(form)
    console.log(form[0].form.elements[0].value)
    for (var i = document.images.length; i-->0;)
    document.images[i].parentNode.removeChild(document.images[i]);
    const searchInput = form[0].form.elements[0].value
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchInput}`)
    console.log(response.data)
    makeImages(response.data)
})

const makeImages = (tvShows) => {
    for (let show of tvShows) {
        if (show.show.image) {
            console.log(show)
            const img = document.createElement('IMG')
            img.src = show.show.image.medium
            document.body.append(img)
        }
    }
}
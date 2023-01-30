const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const divs = document.querySelectorAll('.shows');
    divs.forEach(box => {
    box.remove();
});
    const searchInput = form[0].form.elements[0].value
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchInput}`)
    makeImages(response.data)
    console.dir(response.data)

})

const makeImages = (tvShows) => {
    for (let show of tvShows) {
        if (show.show.image) {
            const div = document.createElement('DIV')
            const img = document.createElement('IMG')
            const name = document.createElement('h4')
            const link = document.createElement('A')
            const container = document.querySelector('.showsPlace')
            name.innerText = show.show.name
            img.src = show.show.image.medium
            container.append(link)
            div.append(img)
            div.append(name)
            link.append(div)
            link.href = `/r/${show.show.name}/id=${show.show.id}`
            div.classList.add('shows')
        }
    }
}

const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    //for (var i = document.images.length; i-->0;)
    //document.images[i].parentNode.removeChild(document.images[i]);
    const divs = document.querySelectorAll('.shows');
    divs.forEach(box => {
    box.remove();
});
    const searchInput = form[0].form.elements[0].value
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchInput}`)
    makeImages(response.data)
})

const makeImages = (tvShows) => {
    for (let show of tvShows) {
        if (show.show.image) {
            const div = document.createElement('DIV')
            const img = document.createElement('IMG')
            const name = document.createElement('h4')
            name.innerText = show.show.name
            img.src = show.show.image.medium
            document.body.append(div)
            div.append(img)
            div.append(name)
            div.classList.add('shows')
        }
    }
}
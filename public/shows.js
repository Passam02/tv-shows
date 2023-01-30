const addInfo = async () => {
const response = await axios.get(`https://api.tvmaze.com/shows/${id}`)
makeInformation(response.data)
console.log(response.data)
}

addInfo()

const makeInformation = (info) => {
    const imgBox = document.querySelector('.image')
    const infoBox = document.querySelector('.info')
    const name = document.createElement('h1')
    name.innerText = info.name
    infoBox.append(name)
    const summary = document.createElement('h5')
    summary.innerHTML = info.summary
    infoBox.append(summary)
    const img = document.createElement('IMG')
    img.src = info.image.original
    imgBox.append(img)
    const genres = document.createElement('h5')
    genres.innerText = `Genres : ${info.genres}`
    infoBox.append(genres)
    const premiere = document.createElement('h5')
    premiere.innerText = `Premiere : ${info.premiered}`
    infoBox.append(premiere)
    const status = document.createElement('h5')
    status.innerText = `Status : ${info.status}`
    infoBox.append(status)
    const studio = document.createElement('h5')
    studio.innerText = `Studio : ${info.webChannel.name}`
    infoBox.append(studio)
}

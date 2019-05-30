setTimeout(() => {
    console.log('Two seconds!')
}, 2000)

const names = ['Lucas', 'Zé', 'gustavo']

const shotNames = names.filter((name) => {
    return name.length <= 4
})

const geocode = (addres, callback) => {
    setTimeout(() => {

        const data = {
            latitude: 0,
            longitude: 0
        }

        callback(data)
    }, 2000)

}

geocode('Philadelphia', (data) =>{
    console.log(data)

})
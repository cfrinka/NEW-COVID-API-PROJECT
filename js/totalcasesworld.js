async function getWorldData(){
    try{
        const result = await axios.get('https://api.covid19api.com/summary')
        const data = result.data
        const confirmed = data.Global.TotalConfirmed

        const showTotalWorld = document.getElementById('world-number')

        showTotalWorld.innerHTML = confirmed
    }

    catch (error) {
        console.log(error)
    }
}
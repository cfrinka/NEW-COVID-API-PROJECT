async function getWorldData(){
    try{
        const result = await axios.get('https://api.covid19api.com/summary')
        const data = result.data
        const {Global:{TotalConfirmed}} = data

        const showTotalWorld = document.getElementById('world-number')

        showTotalWorld.innerHTML = TotalConfirmed
        $('.money').mask('000,000,000,000,000,000', {reverse: true});
    }

    catch (error) {
        console.log(error)
    }
}

getWorldData()
async function getCountryList() {
    try{
        const result = await axios.get('https://api.covid19api.com/countries')
        const data = result.data
        const x = document.getElementById('country-list')
        

        const countryOrdered = data.sort(function(a, b){
            let nameA=a.Country.toLowerCase();
            let nameB=b.Country.toLowerCase()
            if (nameA < nameB) 
                return -1 
            if (nameA > nameB)
                return 1
            return 0 
        })
        countryOrdered.forEach(element => {
            const option = document.createElement('option')
            option.text = element.Country
            option.value = element.Slug
            x.add(option)           
        });

        
        
    } catch (error) {
        console.log(error)
    }
}
getCountryList()

/* async function getWorldData(){
    try {
        const res = await axios.get()
    }
} */


async function showData() {
    const country = document.getElementById("country-list").value

    try{ 
    const res =  await axios.get(`https://api.covid19api.com/country/${country}`)
    
    
        const data = res.data
        const latestData = data[data.length - 1]
        console.log(latestData)
        
        
        

        const dateRecieved = latestData.Date
        const [year,month,day] = dateRecieved.split('-')
        const [resolvedDay] = day.split('T')
        

        const dateFormated = `${resolvedDay}/${month}/${year}`




        const pais = document.getElementById('country-name')
        const code = document.getElementById('country-code')
        const cases = document.getElementById('country-cases')
        const lastUpdate = document.getElementById('country-update')
        const infected = document.getElementById('infected-panel')
        const dead = document.getElementById('dead-panel')
        const cured = document.getElementById('cured-panel')



        /* const pais = document.getElementById('data-country')
        const code = document.getElementById('data-code')
        const cases = document.getElementById('data-cases')
        const lastUpdate = document.getElementById('data-last-update')
        const infected = document.getElementById('infected-panels')
        const dead = document.getElementById('dead-panels')
        const cured = document.getElementById('cured-panels') */

        pais.innerHTML = latestData.Country
        code.innerHTML = latestData.CountryCode
        cases.innerHTML = latestData.Confirmed
        lastUpdate.innerHTML = dateFormated
        infected.innerHTML = latestData.Active
        $('.money').mask('000,000,000,000,000,000', {reverse: true});
        dead.innerHTML = latestData.Deaths
        $('.money').mask('000,000,000,000,000,000', {reverse: true});
        cured.innerHTML = latestData.Recovered
        $('.money').mask('000,000,000,000,000,000', {reverse: true});
        
    } catch (error)  {
        console.log('deu ruim', error) 
    }   
}



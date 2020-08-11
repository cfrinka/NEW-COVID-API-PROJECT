async function getStates() {
    try{
    const {data:{data}} = await axios.get("https://covid19-brazil-api.now.sh/api/report/v1")
    const x = document.getElementById('state-list')
        

        const countryOrdered = data.sort(function(a, b){
            let nameA=a.state.toLowerCase();
            let nameB=b.state.toLowerCase()
            if (nameA < nameB) 
                return -1 
            if (nameA > nameB)
                return 1
            return 0 
        })
        countryOrdered.forEach(element => {
            const option = document.createElement('option')
            option.text = element.state
            option.value = element.uf
            x.add(option)           
        });

    }
    catch(error){
        console.log(error)
        
    }
}

getStates()



async function getBrazilTotal(){
    try{
    const res = await axios.get('https://api.covid19api.com/country/brazil')
    const data = res.data
    const latestData = data[data.length - 1]

    const casesBrazil = document.getElementById('brazil-number')

    casesBrazil.innerHTML = latestData.Confirmed
    $('.money').mask('000,000,000,000,000,000', {reverse: true});

    } catch(error) {
        console.log(error)
    }
}

getBrazilTotal()





async function showStateData() {
    const stateCode = document.getElementById("state-list").value
    
    try{ 
        const data=  await axios.get(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${stateCode}`)
              
            
        const dateRecieved = data.data.datetime
        const [year,month,day] = dateRecieved.split('-')
        const [resolvedDay] = day.split('T')
        

        const dateFormated = `${resolvedDay}/${month}/${year}`




        const state = document.getElementById('state-name')
        const uf = document.getElementById('state-code')
        const cases = document.getElementById('state-cases')
        const lastUpdate = document.getElementById('state-update')
        const infected = document.getElementById('infected-panel')
        const dead = document.getElementById('dead-panel')
        const cured = document.getElementById('cured-panel')




        state.innerHTML = data.data.state
        uf.innerHTML = data.data.uf
        cases.innerHTML = data.data.cases
        lastUpdate.innerHTML = dateFormated
        infected.innerHTML = data.data.cases
        dead.innerHTML = data.data.deaths
        cured.innerHTML = data.data.refuses
        
    } catch (error)  {
        console.log('deu ruim', error) 
    }   
}

showStateData()
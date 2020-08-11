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

async function showStateData() {
    const country = document.getElementById("state-list").value

    try{ 
        const {data:{data}}=  await axios.get(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`)
              
            
        const dateRecieved = data.datetime
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



        /* const pais = document.getElementById('data-country')
        const code = document.getElementById('data-code')
        const cases = document.getElementById('data-cases')
        const lastUpdate = document.getElementById('data-last-update')
        const infected = document.getElementById('infected-panels')
        const dead = document.getElementById('dead-panels')
        const cured = document.getElementById('cured-panels') */

        pais.innerHTML = data.state
        code.innerHTML = data.uf
        cases.innerHTML = data.cases
        lastUpdate.innerHTML = dateFormated
        infected.innerHTML = data.cases
        dead.innerHTML = data.deaths
        cured.innerHTML = data.refuses
        
    } catch (error)  {
        console.log('deu ruim', error) 
    }   
}

showStateData()
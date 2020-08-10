async function getStateList() {
    try{
        const result = await axios.get('https://covid19-brazil-api.now.sh/api/report/v1')
        const {data} = result.data
        const x = document.getElementById('state-list')
        

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
            option.text = element.uf
            option.value = element.state
            x.add(option)           
        });

        
        
    } catch (error) {
        console.log(error)
    }
}
getStateList()
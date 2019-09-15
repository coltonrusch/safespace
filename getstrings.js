export async function getString (concept, whatlist){
    return fetch('https://api.wordassociations.net/associations/v1.0/json/search?apikey=e331c1c1-4b37-4ca1-9571-af3da6c09716&text=' + concept + '&lang=en')
    .then( (response) => response.json() )
    .then( (responseJson) => {
      var test = [];
      if (whatlist == "words") {
        let wordlist = responseJson.response.dataSource[0].items.map((val, key) => {
          return val.item
        });
      }
      
      else if (whatlist == "weights") {
        let weightlist = responseJson.response.dataSource[0].items.map((val, key) => {
          return val.weight
        });
      }
    })

    .catch((error) => {
      console.log(error)
    });
}
export async function getString (concept, whatlist){
 fetch('https://api.wordassociations.net/associations/v1.0/json/search?apikey=e331c1c1-4b37-4ca1-9571-af3da6c09716&text=' + concept + '&lang=en')
    .then( (response) => response.json() )
    .then( (responseJson) => {
      console.warn("response" + responseJson)
      var list = [];
      if (whatlist == "words") {
        list = responseJson.response[0].items.map((val, key) => {
          return val.item
        });
      }
      
      else if (whatlist == "weights") {
        list = responseJson.response[0].items.map((val, key) => {
          return val.weight
        });
      }

      return list;
    }
    
    )

    .catch((error) => {
      console.error(error)
    });
}
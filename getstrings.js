export async function getString (concept, whatlist){

    let response =  await fetch('https://api.wordassociations.net/associations/v1.0/json/search?apikey=e331c1c1-4b37-4ca1-9571-af3da6c09716&text=' + concept + '&lang=en')
    .then(response => {
      console.log("Wordassociations.net response received!");
      return response;
    })
    .catch(error => {
      console.error(e);
    });

    let responseJson = await response.json();

      let list = [];
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
      return (list);
}

export async function getJSON(concept) {
  let response =
 fetch()
  .then(response => response.json())
  .catch(e => console.error(e))
}
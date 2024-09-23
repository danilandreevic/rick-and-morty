export const fetchEpisode = async () => {
   return fetch ('https://rickandmortyapi.com/api/episode')
       .then (response => response.json ())
       .then (data => data.results);
}

export const fetchCharacter = async (ids) => {
   await sleep(1000)
   return fetch (`https://rickandmortyapi.com/api/character/${ids.join(',')}`)
       .then (response => response.json ())
}

export const fetchLocation = async () => {
   await sleep(1000)
   return fetch (`https://rickandmortyapi.com/api/location/`)
       .then (response => response.json ())
       .then (data => data.results);
}

const sleep = (ms) => new Promise ((resolve) => setTimeout (resolve, ms));
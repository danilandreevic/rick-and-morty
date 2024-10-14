export const fetchEpisode = async () => {
   try {
      const response = await fetch('https://rickandmortyapi.com/api/episode');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return data.results;
   } catch (error) {
      console.error('Fetch episode failed:', error);
      throw error;
   }
};

export const fetchCharacter = async (ids = []) => {
   try {
      const idsString = ids.join(',');
      const response = await fetch(`https://rickandmortyapi.com/api/character/${idsString}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return Array.isArray(data) ? data : [data];
   } catch (error) {
      console.error('Fetch character failed:', error);
      throw error;
   }
};

export const fetchLocation = async () => {
   try {
      const response = await fetch('https://rickandmortyapi.com/api/location/');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return data.results;
   } catch (error) {
      console.error('Fetch location failed:', error);
      throw error;
   }
};
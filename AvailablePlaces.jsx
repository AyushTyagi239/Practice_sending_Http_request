import Places from './Places.jsx';
import { useState, useEffect } from 'react';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      const response = await fetch('https://localhost:3000/places');
      const resData = await response.json();
      setAvailablePlaces(resData.places);
      setIsFetching(false);
    }

    fetchPlaces();
  }, []); 

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching Place Data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}

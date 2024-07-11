import React, { useState, useEffect } from 'react';

const defaultCenter = {
  lat: -1.2921,
  lng: 36.8219
};

const GoogleMaps = ({ apiKey }) => {
  const [currentPosition, setCurrentPosition] = useState(defaultCenter);
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setCurrentPosition(pos);
      },
      (error) => {
        console.error('Error getting geolocation:', error);
      }
    );
  }, []);

  useEffect(() => {
    const loadPlacesService = () => {
      if (!window.google || !window.google.maps || !window.google.maps.places) {
        console.error('Google Maps JavaScript API is not fully loaded.');
        return;
      }

      const service = new window.google.maps.places.PlacesService(document.createElement('div'));

      const request = {
        location: currentPosition,
        radius: '10000', // Increase the search radius to 10 km
        type: ['hospital']
      };

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          const hospitalsWithDistances = results.map(hospital => {
            const distance = window.google.maps.geometry.spherical.computeDistanceBetween(
              new window.google.maps.LatLng(currentPosition.lat, currentPosition.lng),
              hospital.geometry.location
            );
            return {
              ...hospital,
              distance: (distance / 1000).toFixed(2) // distance in kilometers
            };
          });
          setHospitals(hospitalsWithDistances);
        } else {
          console.error('PlacesService failed:', status);
        }
      });
    };

    if (currentPosition) {
      loadPlacesService();
    }
  }, [currentPosition]);

  return (
    <div>
      <h2>Nearby Hospitals</h2>
      <ul>
        {hospitals.length > 0 ? (
          hospitals.map((hospital, idx) => (
            <li key={idx}>
              {hospital.name} - {hospital.distance} kilometers away
            </li>
          ))
        ) : (
          <li>No nearby hospitals found</li>
        )}
      </ul>
    </div>
  );
};

export default GoogleMaps;

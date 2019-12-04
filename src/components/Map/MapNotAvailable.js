import React from 'react';
import { StyledUnavailableMap } from './styles';

const MapNotAvailable = () => (
  <StyledUnavailableMap>
    {/* <StreetView className={styles.streetView} /> */}
    <p>Localização não encontrada =(</p>
  </StyledUnavailableMap>
);

export default MapNotAvailable;

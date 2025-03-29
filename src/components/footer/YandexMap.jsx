import React, { useCallback } from 'react';
import {
  YMap, YMapComponentsProvider,
  YMapDefaultFeaturesLayer,
  YMapDefaultMarker,
  YMapDefaultSchemeLayer,
  YMapFeature,
  YMapHint
} from 'ymap3-components';
import { features, location, MARKER_PROPS } from '../../constants/helpersYmap.js';
import HintWindow from './HintWindow.jsx';

const YandexMap = () => {
  const getHint = useCallback((object) => object?.properties?.hint, []);

  return (
    <YMapComponentsProvider
      apiKey={import.meta.env.VITE_APY_KEY}
      lang='ru_RU'
    >
      <YMap location={location} mode='auto'>
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />
        <YMapFeature
          geometry={features.geometry}
          style={features.style}
        />
        <YMapHint hint={getHint}>
          <HintWindow />
        </YMapHint>
        <YMapDefaultMarker
          {...MARKER_PROPS}
        ></YMapDefaultMarker>
      </YMap>
    </YMapComponentsProvider>
  );
};
export default YandexMap;

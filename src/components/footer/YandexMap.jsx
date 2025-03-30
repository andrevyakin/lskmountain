import React, { useCallback } from 'react';
import {
  YMap,
  YMapComponentsProvider,
  YMapDefaultFeaturesLayer,
  YMapDefaultMarker,
  YMapDefaultSchemeLayer,
  YMapFeature,
  YMapHint,
  YMapMarker,
} from 'ymap3-components';
import {
  features,
  location,
  MARKER_PROPS,
} from '../../constants/helpersYmap.js';
import HintWindow from './HintWindow.jsx';
import { HiLocationMarker } from 'react-icons/hi';
import { GiPositionMarker } from 'react-icons/gi';
import { GiStoneAxe } from "react-icons/gi";

const YandexMap = () => {
  const getHint = useCallback((object) => object?.properties?.hint, []);

  return (
    <YMapComponentsProvider apiKey={import.meta.env.VITE_APY_KEY} lang='ru_RU'>
      <YMap location={location} mode='auto'>
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />
        <YMapFeature geometry={features.geometry} style={features.style} />
        <YMapHint hint={getHint}>
          <HintWindow />
        </YMapHint>
        {/* <YMapDefaultMarker
          {...MARKER_PROPS}

        >
        </YMapDefaultMarker>*/}
        <YMapMarker {...MARKER_PROPS}>
          {/*<HiLocationMarker className='text-6xl text-[#e63d2e] relative -top-14 -left-7 opacity-90' />*/}
          {/*<GiPositionMarker className='text-6xl text-[#e63d2e] relative -top-14 -left-7 opacity-90' />*/}
          <GiStoneAxe className='text-6xl text-[#e63d2e] relative -top-14 -left-7 opacity-90' />
        </YMapMarker>
      </YMap>
    </YMapComponentsProvider>
  );
};
export default YandexMap;

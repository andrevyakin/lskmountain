import { features } from './helpersYmap.js';
import { YMapHintContext } from 'ymap3-components';

const HintWindow = () => {
  /* const hintContext = useContext(YMapHintContext) as {
     hint: {
       title: string;
       text: string;
     };
   };*/
  // Use dangerouslySetInnerHTML because the hint message has <b> and <br> tags
  return (
          <div className='hint_window'>
        <div className='hint_window__title'>
          {features.properties.hint.title}
        </div>
        <div className='hint_window__text'>{features.properties.hint.text}</div>
      </div>
  );
};
export default HintWindow;

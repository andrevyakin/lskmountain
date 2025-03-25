import { useContext } from 'react';
import { YMapHintContext } from 'ymap3-components';

const HintWindow = () => {
   const hintContext = useContext(YMapHintContext)

  return (
    hintContext && (
      <div className="translate-x-8 -translate-y-1/2 absolute p-2 bg-emerald-100 w-40 rounded-2xl shadow-2xs gap-2">
        <div className="font-prata font-medium text-xl text-[#242424] mb-2">{hintContext.hint.title}</div>
        <div className="font-prata font-normal text-sm text-[#242424]">{hintContext.hint.text}</div>
      </div>
    )
  );
};
export default HintWindow;

const Skill = ({ image, alt, text }) => {
  return (
    <div className='flex flex-col items-center'>
      <img src={image} alt={alt} className='h-[100px] sm:h-[200px] aspect-square' />
      <p className='px-3 mt-4 text-wrap normal-case tracking-normal whitespace-pre text-lg 2xl:text-xl'>
        {text}
      </p>
    </div>
  );
};
export default Skill;

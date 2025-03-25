const Skill = ({ image, alt, text }) => {
  return (
    <div className='justify-items-center'>
      <img src={image} alt={alt} className='h-[150px] w-[150px]' />
      <p className='px-3 text-wrap normal-case tracking-normal whitespace-pre text-lg 2xl:text-xl'>
        {text}
      </p>
    </div>
  );
};
export default Skill;

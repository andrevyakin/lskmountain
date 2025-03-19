const Skill = ({ image, alt, text }) => {
  return (
    <div className='basis-1/3 justify-items-center bg-red-600'>
      <img src={image} alt={alt} className='bg-green-500' />
      <p className='px-3 text-wrap normal-case tracking-normal whitespace-pre text-xl 2xl:text-2xl bg-blue-800'>
        {text}
      </p>
    </div>
  );
};
export default Skill;

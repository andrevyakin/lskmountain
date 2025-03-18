const Skill = ({ image, alt, text }) => {
  return (
    <div className='basis-1/3 justify-items-center'>
      <img src={image} alt={alt} />
      <p className='px-3 text-wrap normal-case tracking-normal whitespace-pre text-2xl'>
        {text}
      </p>
    </div>
  );
};
export default Skill;

import PageFooter from '../components/PageFooter.jsx';

const ContactHistory = () => {
  return (
    <>
      <div className='bg-[url(/bg_products.png)] bg-no-repeat bg-cover bg-[#242424] opacity-70 contrast-125 brightness-110'>
        <div className='mx-16 pt-8 pb-8 border-x border-[#242424]'>
          <section id='about' className='h-dvh'>
            <div className='flex'>
              <div className='basis-[44%] bg-amber-200'>01</div>
              <div className='basis-[56%] bg-emerald-600'>02</div>
            </div>
          </section>
          <section id='contacts' className='h-dvh'>
            Contacts
          </section>
        </div>
        <PageFooter color={'border-[#242424]'} />
      </div>
    </>
  );
};
export default ContactHistory;

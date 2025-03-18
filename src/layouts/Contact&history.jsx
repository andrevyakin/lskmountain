import PageFooter from '../components/PageFooter.jsx';
import Carousel from '../pages/Carousel.jsx';

const ContactHistory = () => {
  return (
    <>
      <div className='bg-[url(/bg_products.png)] bg-no-repeat bg-cover bg-[#242424] opacity-70 contrast-125 brightness-110'>
        <div className='mx-16 pt-8 pb-8 border-x border-[#242424]'>
          <section id='about' className='h-dvh'>
            <div className='flex'>
              <div className='basis-[44%]'>
                <Carousel />
              </div>
              <div className='basis-[56%] text-2xl p-12'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci aliquid asperiores at blanditiis consectetur cum
                dignissimos distinctio, dolore dolorum enim, et facere incidunt
                iste laboriosam laudantium molestiae nulla officiis perspiciatis
                quaerat, quo reiciendis rem sed similique suscipit ut vitae
                voluptate voluptatibus. Adipisci aliquid animi assumenda debitis
                eligendi eum, hic illum labore modi natus non provident, quae
                ratione reiciendis rem repellendus veritatis! Accusantium
                architecto consequuntur distinctio earum, fugiat nobis quibusdam
                ratione sint velit? Accusantium error laboriosam molestiae nam
                pariatur. Consectetur cum, cumque debitis esse fugiat, id
                maiores nemo possimus, qui reprehenderit tempore unde velit
                voluptatem? Mollitia, perspiciatis possimus recusandae sint
                suscipit voluptatem! Fugiat libero provident voluptatem! Harum
                incidunt ipsam nihil quas. Ad adipisci alias animi fugit maxime,
                molestias numquam saepe voluptatibus. A amet aspernatur
                assumenda corporis deleniti eaque eos explicabo illo in ipsam
                laboriosam, laudantium, maiores nam neque nostrum obcaecati
                perferendis provident quas qui quia repudiandae sit tenetur
                vitae! Aperiam error, et iure labore mollitia natus neque
                placeat recusandae vitae? Accusantium aliquid, architecto atque
                commodi corporis, dolorum enim eum magni mollitia, nihil
                officiis pariatur praesentium quibusdam quidem quod repellat
                similique sit tenetur veritatis voluptatibus! A alias blanditiis
                dolore doloribus, facere illum inventore ipsum iusto magnam
                maxime nihil officiis placeat quis soluta voluptates! Accusamus
                adipisci aliquid atque autem, consequuntur cum dolorum, eius
                inventore magnam molestias necessitatibus nostrum omnis quasi
                rem repudiandae tempore voluptatibus voluptatum. Doloremque ea
                esse excepturi expedita labore neque nulla perferendis soluta.
                Aliquam mollitia placeat ratione voluptas voluptate. Alias at
                delectus et perferendis rerum sit totam veritatis. Ad architecto
                assumenda at aut cum cupiditate dolores doloribus ducimus ea
                eaque earum eligendi enim facere fuga, id illum impedit in iure
                maiores maxime, minus natus neque nesciunt nihil odio quidem,
                quisquam quos repellat sit tempore. Aut cum ea eligendi expedita
                itaque modi nostrum, quam, quas quibusdam rerum saepe, tempora
                tenetur voluptate voluptatum!
              </div>
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

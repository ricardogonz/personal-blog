import { SectionTitle } from '../atoms';
import { AboutMe } from '../molecules';

export function About(): JSX.Element {
  return (
    <>
      <SectionTitle />
      <div className='flex flex-col md:flex-row items-center'>
        <div className='flex flex-col items-center basis-1/2'>
          <AboutMe
            name='John Doe'
            jobTitle='Professor of Atmospheric Science Stanford University'
          />
        </div>

        <div className='text-lg basis-1/2'>
          <p className='mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum non libero ex velit ipsum
            minima asperiores voluptatum, minus atque, vero dolore aperiam ipsam nulla accusamus
            illo odio a laudantium expedita? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Perferendis, neque. Similique commodi amet hic veritatis aut corporis adipisci
            porro reiciendis voluptate ratione. Sed incidunt ut blanditiis nesciunt, maxime facere
            quae!
          </p>
          <p className='mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, mollitia. Quisquam
            tempora qui nam dicta quia repellat facilis recusandae, quidem impedit laborum atque a
            iusto voluptates exercitationem vitae quaerat sed! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Maiores, ex quas ab voluptatibus tempore architecto
            voluptatum doloremque sapiente dignissimos eligendi, totam eaque ad natus,
            exercitationem minima velit iste consequuntur nihil.
          </p>
          <p className='mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, molestias
            voluptate? Iste est deserunt veniam tempore beatae maiores assumenda. Maxime doloribus
            quidem blanditiis similique, aut neque impedit tempora voluptas exercitationem!
          </p>
        </div>
      </div>
    </>
  );
}

import React from "react";
import SectionHeaders from "./SectionHeaders";
import Footer from "./Footer";

const AboutSection = () => {
  return (
    <>
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About Us"} />
        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4">
          <p className=" ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            maxime laborum tempora molestiae vero reprehenderit nobis modi,
            fugiat ipsum assumenda ex, molestias atque dolore unde qui aperiam
            libero obcaecati sequi? Reiciendis itaque corrupti consequatur,
            numquam sit obcaecati enim ratione eos quos excepturi omnis quae
            sequi voluptate nihil nesciunt veniam illo architecto repellat
            veritatis modi tenetur? Voluptas earum cumque ex voluptatibus? Nam
            asperiores perferendis voluptatum expedita voluptatem molestiae
            pariatur unde dolorum ea dicta ut eius atque deserunt enim, tempora
            obcaecati saepe quas adipisci inventore, ipsa non!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt
            adipisci maiores optio ea tempora nisi recusandae at repellat
            distinctio, laborum, libero quisquam! Numquam ipsa expedita,
            inventore eveniet dolorem optio. Nesciunt, temporibus! Qui ratione
            alias maxime ad laudantium reiciendis, vel aut rerum blanditiis
            sapiente iste, nihil soluta similique itaque, provident inventore a
            quidem. Placeat, cumque architecto ad pariatur dolorem fuga.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
            recusandae impedit voluptates deleniti inventore odit
            exercitationem, beatae delectus iusto. Eum vero eveniet fuga non
            laborum voluptatem. Tempore, a distinctio? Reiciendis.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Dont Hesisitate to contact us!"}
          mainHeader={"Contact Us!"}
        />
        <div className="mt-8 underline text-gray-500">
          <a href="tel:+918732948200" className="text-4xl">
            +91 8732948200
          </a>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default AboutSection;

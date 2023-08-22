import React, { useState } from "react";
import Modal from "../components/Modal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctiovero
        facere necessitatibus ipsum, veritatis autem natus eius, fugiat
        hiceligendi dignissimos voluptatum. Recusandae corrupti dolorem
        consectetursequi excepturi inventore facilis! Consequatur non ullam
        magni fugiatnatus expedita saepe voluptatem impedit est odio! Sint
        consequatur autmaiores illum. Libero eos sapiente adipisci aliquid nisi
        magnam ad quiminus voluptate, id et? Unde eum ea excepturi expedita ipsa
        debitiscorrupti? Ex voluptatem assumenda velit consectetur! Rerum,
        remlaudantium accusantium vitae vero ipsa delectus corporis
        quibusdamnihil, explicabo aliquam necessitatib dignissimos sint labore.
        Optioitaque quo earum iusto, ipsum eius culpa consequatur, nihil,
        temporeinventore a dolor eos deserunt vitae sit aliquam? Molestiae
        quiainventore omnis pariatur consectetur sit sed, labore mollitia
        quis!Voluptatem consequatur sit corporis itaque, repudiandae temporibus
        i sint similique qui? Odio minus nam quia dignissimos fuga
        consecteturcommodi minima adipisci nulla eius optio sunt explicabo
        quidem, verotenetur voluptatibus? Ex possimus iste necessitatibus vero
        commodi natusiure tempore dicta neque laudantium, libero ullam odit
        quibusdam nobis voluptate molestiae. Mollitia facere iusto maiores eius
        quisquam ab
      </p>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Home;

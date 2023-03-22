import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const onClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={onClose}>
        I accept.
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={onClose} actionBar={actionBar}>
      <p> Here is an important agreement for you to accept.</p>
    </Modal>
  );
  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor
        dolor nec commodo tempus. Morbi consequat condimentum augue, vel feugiat
        nibh varius nec. Curabitur convallis ipsum est, sit amet molestie sapien
        malesuada at. Phasellus imperdiet ante et velit interdum, a cursus justo
        cursus. Donec urna metus, aliquam non convallis nec, sollicitudin a
        mauris. Sed dictum, ligula a hendrerit sodales, lorem tortor finibus
        est, in aliquet mauris nisl vel neque. Nullam sagittis interdum enim,
        nec bibendum purus hendrerit ut. Quisque non orci at ante vehicula
        cursus. Fusce imperdiet eu tortor sed auctor. Mauris bibendum placerat
        suscipit. Morbi lorem diam, maximus at nulla ut, pharetra rutrum ligula.
        Quisque laoreet porttitor nisl, quis aliquam risus elementum vitae.
        Aliquam iaculis dictum lorem quis sagittis. Phasellus nec mauris
        ultricies, pellentesque nisl ac, maximus felis. Aliquam ac hendrerit
        quam, a elementum justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor
        dolor nec commodo tempus. Morbi consequat condimentum augue, vel feugiat
        nibh varius nec. Curabitur convallis ipsum est, sit amet molestie sapien
        malesuada at. Phasellus imperdiet ante et velit interdum, a cursus justo
        cursus. Donec urna metus, aliquam non convallis nec, sollicitudin a
        mauris. Sed dictum, ligula a hendrerit sodales, lorem tortor finibus
        est, in aliquet mauris nisl vel neque. Nullam sagittis interdum enim,
        nec bibendum purus hendrerit ut. Quisque non orci at ante vehicula
        cursus. Fusce imperdiet eu tortor sed auctor. Mauris bibendum placerat
        suscipit. Morbi lorem diam, maximus at nulla ut, pharetra rutrum ligula.
        Quisque laoreet porttitor nisl, quis aliquam risus elementum vitae.
        Aliquam iaculis dictum lorem quis sagittis. Phasellus nec mauris
        ultricies, pellentesque nisl ac, maximus felis. Aliquam ac hendrerit
        quam, a elementum justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor
        dolor nec commodo tempus. Morbi consequat condimentum augue, vel feugiat
        nibh varius nec. Curabitur convallis ipsum est, sit amet molestie sapien
        malesuada at. Phasellus imperdiet ante et velit interdum, a cursus justo
        cursus. Donec urna metus, aliquam non convallis nec, sollicitudin a
        mauris. Sed dictum, ligula a hendrerit sodales, lorem tortor finibus
        est, in aliquet mauris nisl vel neque. Nullam sagittis interdum enim,
        nec bibendum purus hendrerit ut. Quisque non orci at ante vehicula
        cursus. Fusce imperdiet eu tortor sed auctor. Mauris bibendum placerat
        suscipit. Morbi lorem diam, maximus at nulla ut, pharetra rutrum ligula.
        Quisque laoreet porttitor nisl, quis aliquam risus elementum vitae.
        Aliquam iaculis dictum lorem quis sagittis. Phasellus nec mauris
        ultricies, pellentesque nisl ac, maximus felis. Aliquam ac hendrerit
        quam, a elementum justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor
        dolor nec commodo tempus. Morbi consequat condimentum augue, vel feugiat
        nibh varius nec. Curabitur convallis ipsum est, sit amet molestie sapien
        malesuada at. Phasellus imperdiet ante et velit interdum, a cursus justo
        cursus. Donec urna metus, aliquam non convallis nec, sollicitudin a
        mauris. Sed dictum, ligula a hendrerit sodales, lorem tortor finibus
        est, in aliquet mauris nisl vel neque. Nullam sagittis interdum enim,
        nec bibendum purus hendrerit ut. Quisque non orci at ante vehicula
        cursus. Fusce imperdiet eu tortor sed auctor. Mauris bibendum placerat
        suscipit. Morbi lorem diam, maximus at nulla ut, pharetra rutrum ligula.
        Quisque laoreet porttitor nisl, quis aliquam risus elementum vitae.
        Aliquam iaculis dictum lorem quis sagittis. Phasellus nec mauris
        ultricies, pellentesque nisl ac, maximus felis. Aliquam ac hendrerit
        quam, a elementum justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor
        dolor nec commodo tempus. Morbi consequat condimentum augue, vel feugiat
        nibh varius nec. Curabitur convallis ipsum est, sit amet molestie sapien
        malesuada at. Phasellus imperdiet ante et velit interdum, a cursus justo
        cursus. Donec urna metus, aliquam non convallis nec, sollicitudin a
        mauris. Sed dictum, ligula a hendrerit sodales, lorem tortor finibus
        est, in aliquet mauris nisl vel neque. Nullam sagittis interdum enim,
        nec bibendum purus hendrerit ut. Quisque non orci at ante vehicula
        cursus. Fusce imperdiet eu tortor sed auctor. Mauris bibendum placerat
        suscipit. Morbi lorem diam, maximus at nulla ut, pharetra rutrum ligula.
        Quisque laoreet porttitor nisl, quis aliquam risus elementum vitae.
        Aliquam iaculis dictum lorem quis sagittis. Phasellus nec mauris
        ultricies, pellentesque nisl ac, maximus felis. Aliquam ac hendrerit
        quam, a elementum justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor
        dolor nec commodo tempus. Morbi consequat condimentum augue, vel feugiat
        nibh varius nec. Curabitur convallis ipsum est, sit amet molestie sapien
        malesuada at. Phasellus imperdiet ante et velit interdum, a cursus justo
        cursus. Donec urna metus, aliquam non convallis nec, sollicitudin a
        mauris. Sed dictum, ligula a hendrerit sodales, lorem tortor finibus
        est, in aliquet mauris nisl vel neque. Nullam sagittis interdum enim,
        nec bibendum purus hendrerit ut. Quisque non orci at ante vehicula
        cursus. Fusce imperdiet eu tortor sed auctor. Mauris bibendum placerat
        suscipit. Morbi lorem diam, maximus at nulla ut, pharetra rutrum ligula.
        Quisque laoreet porttitor nisl, quis aliquam risus elementum vitae.
        Aliquam iaculis dictum lorem quis sagittis. Phasellus nec mauris
        ultricies, pellentesque nisl ac, maximus felis. Aliquam ac hendrerit
        quam, a elementum justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor
        dolor nec commodo tempus. Morbi consequat condimentum augue, vel feugiat
        nibh varius nec. Curabitur convallis ipsum est, sit amet molestie sapien
        malesuada at. Phasellus imperdiet ante et velit interdum, a cursus justo
        cursus. Donec urna metus, aliquam non convallis nec, sollicitudin a
        mauris. Sed dictum, ligula a hendrerit sodales, lorem tortor finibus
        est, in aliquet mauris nisl vel neque. Nullam sagittis interdum enim,
        nec bibendum purus hendrerit ut. Quisque non orci at ante vehicula
        cursus. Fusce imperdiet eu tortor sed auctor. Mauris bibendum placerat
        suscipit. Morbi lorem diam, maximus at nulla ut, pharetra rutrum ligula.
        Quisque laoreet porttitor nisl, quis aliquam risus elementum vitae.
        Aliquam iaculis dictum lorem quis sagittis. Phasellus nec mauris
        ultricies, pellentesque nisl ac, maximus felis. Aliquam ac hendrerit
        quam, a elementum justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor
        dolor nec commodo tempus. Morbi consequat condimentum augue, vel feugiat
        nibh varius nec. Curabitur convallis ipsum est, sit amet molestie sapien
        malesuada at. Phasellus imperdiet ante et velit interdum, a cursus justo
        cursus. Donec urna metus, aliquam non convallis nec, sollicitudin a
        mauris. Sed dictum, ligula a hendrerit sodales, lorem tortor finibus
        est, in aliquet mauris nisl vel neque. Nullam sagittis interdum enim,
        nec bibendum purus hendrerit ut. Quisque non orci at ante vehicula
        cursus. Fusce imperdiet eu tortor sed auctor. Mauris bibendum placerat
        suscipit. Morbi lorem diam, maximus at nulla ut, pharetra rutrum ligula.
        Quisque laoreet porttitor nisl, quis aliquam risus elementum vitae.
        Aliquam iaculis dictum lorem quis sagittis. Phasellus nec mauris
        ultricies, pellentesque nisl ac, maximus felis. Aliquam ac hendrerit
        quam, a elementum justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor
        dolor nec commodo tempus. Morbi consequat condimentum augue, vel feugiat
        nibh varius nec. Curabitur convallis ipsum est, sit amet molestie sapien
        malesuada at. Phasellus imperdiet ante et velit interdum, a cursus justo
        cursus. Donec urna metus, aliquam non convallis nec, sollicitudin a
        mauris. Sed dictum, ligula a hendrerit sodales, lorem tortor finibus
        est, in aliquet mauris nisl vel neque. Nullam sagittis interdum enim,
        nec bibendum purus hendrerit ut. Quisque non orci at ante vehicula
        cursus. Fusce imperdiet eu tortor sed auctor. Mauris bibendum placerat
        suscipit. Morbi lorem diam, maximus at nulla ut, pharetra rutrum ligula.
        Quisque laoreet porttitor nisl, quis aliquam risus elementum vitae.
        Aliquam iaculis dictum lorem quis sagittis. Phasellus nec mauris
        ultricies, pellentesque nisl ac, maximus felis. Aliquam ac hendrerit
        quam, a elementum justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor
        dolor nec commodo tempus. Morbi consequat condimentum augue, vel feugiat
        nibh varius nec. Curabitur convallis ipsum est, sit amet molestie sapien
        malesuada at. Phasellus imperdiet ante et velit interdum, a cursus justo
        cursus. Donec urna metus, aliquam non convallis nec, sollicitudin a
        mauris. Sed dictum, ligula a hendrerit sodales, lorem tortor finibus
        est, in aliquet mauris nisl vel neque. Nullam sagittis interdum enim,
        nec bibendum purus hendrerit ut. Quisque non orci at ante vehicula
        cursus. Fusce imperdiet eu tortor sed auctor. Mauris bibendum placerat
        suscipit. Morbi lorem diam, maximus at nulla ut, pharetra rutrum ligula.
        Quisque laoreet porttitor nisl, quis aliquam risus elementum vitae.
        Aliquam iaculis dictum lorem quis sagittis. Phasellus nec mauris
        ultricies, pellentesque nisl ac, maximus felis. Aliquam ac hendrerit
        quam, a elementum justo.
      </p>
    </div>
  );
}

export default ModalPage;

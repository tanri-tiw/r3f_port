import { Button, Modal } from "flowbite-react";
import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import info from "../utility/info";

export default function Component({ openModal, setOpenModal, p }) {
  const [hidden, setHidden] = useState(false);

  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{info[p].name}</Modal.Header>
        <Modal.Body>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slide={false}>
              {info[p].content.map((e, i) => (
                <div key={i}>
                  {(e.desc || e.write) && (
                    <h1
                      className="font-semibold text-xl text-center text-gray-900 h-full bg-slate-300 p-10 rounded-md"
                      hidden={e.write ? false : !hidden}
                      onClick={() => {
                        if (e.img) {
                          setHidden(!hidden);
                        }
                      }}
                    >
                      {e.desc || e.write}
                    </h1>
                  )}
                  {e.img && (
                    <img
                      hidden={hidden}
                      onClick={() => {
                        setHidden(!hidden);
                      }}
                      src={e.img}
                      alt="..."
                    />
                  )}
                </div>
              ))}
            </Carousel>
          </div>
          <p>Tip: click on an image to know more!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

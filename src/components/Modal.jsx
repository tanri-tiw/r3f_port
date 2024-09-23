import {
  Button,
  Carousel,
  DarkThemeToggle,
  Flowbite,
  Modal,
} from "flowbite-react";
import { useEffect, useState } from "react";
import info from "../utility/info";

export default function Component({ openModal, setOpenModal, p }) {
  const [hidden, setHidden] = useState(false);

  return (
    <Flowbite>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          {info[p].name} <DarkThemeToggle />
        </Modal.Header>
        <Modal.Body>
          <div className="h-80">
            <Carousel slide={false}>
              {info[p].content.map((e, i) => (
                <div
                  key={i}
                  className=" flex items-center justify-center w-full"
                >
                  {(e.desc || e.write) && (
                    <h1
                      className="font-semibold text-md text-center text-gray-900 overflow-y-auto h-80  bg-slate-300 rounded-md p-10 dark:text-white dark:bg-transparent"
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
          <p className="dark:text-white">
            Tip: click on an image to know more!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Flowbite>
  );
}

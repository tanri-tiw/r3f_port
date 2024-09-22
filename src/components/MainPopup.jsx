import { Button } from "flowbite-react";
function MainPopup({ handleCam, vp }) {
  return (
    <Button.Group className="pt-3 pl-3 pb-1 w-full overflow-y-auto md:flex md:justify-center md:items-center">
      <Button
        color="dark"
        onClick={() => {
          handleCam(0, 1, 6, 0, 0, 0, 0);
        }}
      >
        Home
      </Button>
      <Button
        color="dark"
        onClick={() => {
          vp.width > 600
            ? handleCam(1.5, 2, 2, 1.3, 1.5, -0.5, 1)
            : handleCam(1.5, 1.5, 1.5, 0.7, 0.7, -0.3, 1);
          // setCamPos([0.5, 3, 1.8]);
          // setCamTar([1, 2, -1]);
        }}
      >
        Skills
      </Button>
      <Button
        color="dark"
        onClick={() => {
          vp.width > 600
            ? handleCam(-1.6, 0.5, 3, -2.4, 0.2, 1, 2)
            : handleCam(-1, 0.5, 3, -1.2, 0.2, 0.4, 2);
          // setCamPos([-2, 1, 3]);
          // setCamTar([-2, 0, 0]);
        }}
      >
        Projects
      </Button>

      <Button
        color="dark"
        onClick={() => {
          vp.width > 600
            ? handleCam(-1, 2.3, 2.3, -1.2, 1.5, 0, 3)
            : handleCam(-1, 2, 2.1, -0.6, 0.8, -0.2, 3);
        }}
      >
        About Me
      </Button>
      <Button
        color="dark"
        onClick={() => {
          vp.width > 600
            ? handleCam(2.4, 1.2, 3.5, 2.4, 0.2, 1, 4)
            : handleCam(1.5, 1, 2, 1.3, 0.1, 0.4, 4);
        }}
      >
        Certificates
      </Button>
      <Button
        color="dark"
        onClick={() => {
          vp.width > 600
            ? handleCam(1, 0, 4.5, 1, -1, 0, 5)
            : handleCam(0, 0, 3, 1, -1, 0, 5);
        }}
        className=""
      >
        Connect
      </Button>
      <Button
        color="dark"
        onClick={() => {
          handleCam(0, 1, 8.5, 0, 0, 0, 0, 0);
        }}
      >
        Full View
      </Button>
    </Button.Group>
  );
}

export default MainPopup;

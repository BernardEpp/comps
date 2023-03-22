import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    // console.log("Click!");
  };

  return (
    <div>
      <div>
        <Button primary rounded className="mb-5" onClick={handleClick}>
          <GoBell />
          Click me!
        </Button>
      </div>
      <div>
        <Button secondary outlined onMouseEnter={handleClick}>
          <GoCloudDownload />
          Buy now
        </Button>
      </div>
      <div>
        <Button success onMouseLeave={handleClick}>
          <GoDatabase />
          See deal
        </Button>
      </div>
      <div>
        <Button warning>Hide adds.</Button>
      </div>
      <div>
        <Button danger rounded outlined>
          Something
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;

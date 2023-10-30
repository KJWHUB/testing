import Image from "next/image";
import "./computer.scss";

const tImg = "/images/computer/tums.png";

const ComputerSample = () => {
  return (
    <div id="computer-graphic-wrap">
      <p>컴퓸터 화면</p>

      <Image src={tImg} alt="co" width={300} height={300} className="conputer-img" />
    </div>
  );
};

export default ComputerSample;

import HtmlPng from "../assets/html.png";
import CssPng from "../assets/css.png";
import ReactPng from "../assets/react.png";
import JsPng from "../assets/javascript.png";
import TailwindPng from "../assets/tailwind.png";
import GithubPng from "../assets/github.png";

const data = [
  {
    id: 1,
    image: HtmlPng,
  },
  {
    id: 2,
    image: CssPng,
  },
  {
    id: 3,
    image: JsPng,
  },
  {
    id: 4,
    image: TailwindPng,
  },
  {
    id: 5,
    image: ReactPng,
  },
  {
    id: 6,
    image: GithubPng,
  },
];

function Skills() {
  return (
    <div className="w-full h-screen">
      <ul>
        <li className="w-[70%]">
          <img src={JsPng} alt="" />
        </li>

        {data.map((item) => (
          <img key={item.id} className="w-40" src={item.image} alt="SkillImg" />
        ))}
      </ul>
    </div>
  );
}

export default Skills;

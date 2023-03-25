import "../css/StoryReel.css";
import Story from "./Story";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        profileSrc="../../images/ashneer.png"
        title="Ashneer"
        image="../../images/ab.png"
      />
      <Story
        profileSrc="../../images/elon musk.png"
        title="Elon"
        image="../../images/emb.png"
      />
      <Story
        profileSrc="../../images/ssk.png"
        title="SSK"
        image="../../images/sb.png"
      />
      <Story
        profileSrc="../../images/mark zuckerburg.png"
        title="Mark"
        image="../../images/mzb.png"
      />
      <Story
        profileSrc="../../images/Jeff Bezos.png"
        title="Jeff"
        image="../../images/jbb.png"
      />
    </div>
  );
};

export default StoryReel;

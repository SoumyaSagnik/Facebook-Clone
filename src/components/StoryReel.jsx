import "../css/StoryReel.css";
import Story from "./Story";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        profileSrc="https://raw.githubusercontent.com/SoumyaSagnik/Facebook-Clone/main/images/ashneer.png"
        title="Ashneer"
        image="https://raw.githubusercontent.com/SoumyaSagnik/Facebook-Clone/main/images/ab.png"
      />
      <Story
        profileSrc="https://raw.githubusercontent.com/SoumyaSagnik/Facebook-Clone/main/images/elon%20musk.png"
        title="Elon"
        image="https://raw.githubusercontent.com/SoumyaSagnik/Facebook-Clone/main/images/emb.png"
      />
      <Story
        profileSrc="https://raw.githubusercontent.com/SoumyaSagnik/Facebook-Clone/main/images/ssk.png"
        title="SSK"
        image="https://raw.githubusercontent.com/SoumyaSagnik/Facebook-Clone/main/images/sb.png"
      />
      <Story
        profileSrc="https://raw.githubusercontent.com/SoumyaSagnik/Facebook-Clone/main/images/mark%20zuckerburg.png"
        title="Mark"
        image="https://raw.githubusercontent.com/SoumyaSagnik/Facebook-Clone/main/images/mzb.png"
      />
      <Story
        profileSrc="https://raw.githubusercontent.com/SoumyaSagnik/Facebook-Clone/main/images/Jeff%20Bezos.png"
        title="Jeff"
        image="https://raw.githubusercontent.com/SoumyaSagnik/Facebook-Clone/main/images/jbb.png"
      />
    </div>
  );
};

export default StoryReel;

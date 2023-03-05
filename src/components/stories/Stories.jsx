import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Jeo Root",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfAFpCfrE8PpNvAit-WW42rqRrxPHWUFH0rtZmX1dxOkvmX5sZGYT9mUeQ4GDVQPcShes&usqp=CAU",
    },
    {
      id: 2,
      name: "Smith",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "Virat Kohli",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpiPj-8foAraCJD-wBHWtXx_qZbcpJx-qiCA&usqp=CAU",
    },
    {
      id: 4,
      name: "Rohit Sharma",
      img: "https://lh3.googleusercontent.com/ytWZKEfkZpozAjmNW1r_Kmul8DU67BAl9UZPwCEr8g5_Is8cJLHcYLP71QTxuq_A8WLBDjbn40gmHvpanw5sw_38=w640-h400-e365-rj-sc0x00ffffff",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;

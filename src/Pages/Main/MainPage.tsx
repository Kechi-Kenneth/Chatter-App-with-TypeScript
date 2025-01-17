import NavBar from "../../Components/NavBar/NavBar";
import './MainPage.css';
import UserProfile from "../../Components/UserProfile/UserProfile";
import MyFeed from "../../Components/MyFeed/MyFeed";
import RightFeatures from "../../Components/RightFeatures/RightFeatures";
import WelcomeFooter from "../Welcome/WelcomeFooter/WelcomeFooter";

const MainPage = () => {
  const NavBarItems: Array<{
    type: "text" | "icon" | "search";
    item: string;
    icon?: string;
    className?: string;
  }> = [
    { type: "text", item: "My feed", className: "my-feed" },
    { type: "text", item: "Discussions", className: "discussions" },
    { type: "text", item: " More>", className: "more" },
    { type: "search", item: "Search", className: "searchbar" },
    {
      type: "icon",
      item: "Make a Post",
      icon: "icons8-create-post-64.png",
      className: "create-post",
    },
    {
      type: "icon",
      item: "Notification",
      icon: "icons8-notification-bell-24.png",
      className: "notification",
    },
    {
      type: "icon",
      item: "Darkmode",
      icon: "icons8-moon-symbol-48.png",
      className: "dark-mode",
    },
    {
      type: "icon",
      item: "User Profile",
      icon: "icons8-account-64.png",
      className: "my-account",
    },
  ];
  return (
    <div>
      <NavBar
        title="ChaTTer"
        icon="icons8-favorite-chat-message-100.png"
        items={NavBarItems}
      />

      <div className="body">
        <div className="left-section">
         <UserProfile />
        </div>
        <div className="middle-section">
          <MyFeed />
        </div>
        <div className="right-section">
           <RightFeatures />
        </div>
      </div>
      <WelcomeFooter/>
    </div>
  );
};

export default MainPage;

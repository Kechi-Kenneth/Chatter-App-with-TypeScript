import { Link } from "react-router-dom";
import WelcomePageNavBar from "./WelcomePageNavBar";

const WelcomePage = () => {
  const NavBarItems: Array<{
    type: "text" | "icon";
    item: string;
    icon?: string;
    className?: string;
  }> = [
    { type: "text", item: "Features", className: "features" },
    { type: "text", item: "Membership", className: "memberships" },
    { type: "text", item: "Sign In", className: "sign-in" },
    { type: "text", item: " More>", className: "more" },
    {
      type: "icon",
      item: "Write",
      icon: "icons8-create-post-64.png",
      className: "dark-mode",
    },
  ];

  return (
    <div>
      <WelcomePageNavBar
        title="ChaTTer"
        icon="icons8-favorite-chat-message-100.png"
        items={NavBarItems}
      />
    
    </div>
  );
};

export default WelcomePage;

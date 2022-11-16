import "../../App.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer = () => {
  return (
    <>
      <div className="copyrighText">
        <p>
          © Copyright 2019 <a href="">QuickDelivery</a>.All right reserved.
        </p>
        <div style={{ cursor: "pointer" }}>
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <WhatsAppIcon />
        </div>
      </div>
    </>
  );
};
export default Footer;

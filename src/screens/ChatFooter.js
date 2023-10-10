import React from "react";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArticleIcon from '@mui/icons-material/Article';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CollectionsIcon from '@mui/icons-material/Collections';
import RedoIcon from '@mui/icons-material/Redo';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const ChatFooter = () => {
  return (
    <>
      <div style={{ display: "flex" ,justifyContent:"space-around",background:"white",boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px", padding:"10px", margin:"10px",borderRadius:"8px"}}>
        <div>
          <PermIdentityIcon />
          <p style={{fontSize:"12px"}}>Profile</p>
        </div>
        <div style={{borderRight:"2px solid grey", paddingRight:"5px"}}>
          <ContactPageIcon />
          <p style={{fontSize:"12px"}}>Contact</p>
        </div>
        <div>
          <LocationOnIcon />
          <p style={{fontSize:"12px"}}>Location</p>
        </div>
        <div style={{borderRight:"2px solid grey", paddingRight:"5px"}}>
          <ArticleIcon />
          <p style={{fontSize:"12px"}}>Document</p>
        </div>
        <div>
          <CameraAltIcon />
          <p style={{fontSize:"12px"}}>Camera</p>
        </div>
        <div style={{borderRight:"2px solid grey", paddingRight:"5px"}}>
          <CollectionsIcon />
          <p style={{fontSize:"12px"}}>Gallery</p>
        </div>
      </div>
     <div style={{backgroundColor:"white"}}>
     <span className="py-3 px-3 " style={{backgroundColor:"#e3e1e1",borderRadius:"12px", margin:"15px"}}>
     <EmojiEmotionsIcon/>  <input type="text" placeholder="Text here..." style={{border:"0", margin:"15px",marginRight:"0",backgroundColor:"#e3e1e1"}} className="w-50 p-2"/><span className="p-1"><CameraAltIcon/></span><span className="p-1"><AddCircleIcon/></span>
     </span>
     <span className="p-2 bg-warning rounded"><RedoIcon/></span>
     </div>
    </>
  );
};

export default ChatFooter;

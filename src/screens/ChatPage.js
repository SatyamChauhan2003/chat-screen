import { Avatar, Box, Paper, Typography } from "@mui/material";
import React from "react";
import "../styles/ChatLanding.css";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import "./../styles/ChatPage.css";
import ChatFooter from "./ChatFooter";
import Modal from "@mui/material/Modal";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ReplyIcon from "@mui/icons-material/Reply";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import RedoIcon from "@mui/icons-material/Redo";
import ForumIcon from "@mui/icons-material/Forum";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import DeleteIcon from "@mui/icons-material/Delete";

const style = {
  position: "absolute",
  top: "50%",
  left: "10%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "1px solid white",
  boxShadow: 24,
  borderRadius:"10px",
  p: 2,
};

export default function ChatPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const paper = {
    padding: "0rem",
    minHeight: "100vh",
    maxWidth: "27rem",
    backgroundImage: 'url("whatsapp.jpg")',
  };

  const data = [
    {
      date: "Yesterday",

      messages: [
        {
          senderId: 1,
          msgType: "text",
          name: "Poornima Raj",
          msgText: "Hi Aisha! I’m Poornima",
          timeStamp: "10:30 AM",
        },
        {
          senderId: 1,
          msgType: "text",
          msgText: "I am travelling to Chennai and wanted to connect with you!",
          timeStamp: "10:30 AM",
        },
        {
          senderId: 0,
          msgType: "text",
          msgText: "Hi Poornima!",
          timeStamp: "10:30 AM",
        },
      ],
    },
    {
      date: "Today",
      messages: [
        {
          senderId: 1,
          msgType: "photo",
          name: "Tarun chawla",
          imageUrl:
            "https://vietnam.travel/sites/default/files/inline-images/Wallpaper_Ha%20Giang_Vietnam%20Tourism_0.jpg",
          profileUrl:
            "https://i.insider.com/5aeb7d1919ee864c008b489d?width=1136&format=jpeg",
          timeAbout: "12 days ago",
          touristPlace: "Rishikesh",
          timeStamp: "10:30 AM",
        },
      ],
    },
  ];

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Paper sx={{ flexGrow: 1 }} elevation={10} style={paper}>
        {data?.map((item, index) => (
          <React.Fragment key={index}>
            <Box className="date-box-parent">
              <Box className="date-box">
                <Typography className="ind-chat-date">{item.date}</Typography>
              </Box>
            </Box>
            {item.messages?.map((msg, index) => (
              <React.Fragment>
                {msg.msgType === "text" && (
                  <Box
                    key={index}
                    sx={
                      msg.senderId === 0
                        ? {
                            paddingLeft: "1rem",
                            paddingRight: "1rem",
                            textAlign: "right",
                            marginBottom: "6px",
                            color: "white",
                          }
                        : {
                            paddingLeft: "1rem",
                            paddingRight: "1rem",
                            textAlign: "left",
                            marginBottom: "6px",
                          }
                    }
                  >
                    <Box
                      className="text-msg-box"
                      sx={
                        msg.senderId === 0
                          ? { backgroundColor: "#056B6B" }
                          : { backgroundColor: "#FFF388" }
                      }
                    >
                      <div style={{ marginBottom: "8px", fontWeight: "bold" }}>
                        {msg.name}
                      </div>
                      <span onClick={handleOpen}>{msg.msgText}</span>

                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                          >
                            <div className="d-flex justify-content-between">
                              <div>star</div>
                              <div>
                                <StarBorderIcon />
                              </div>
                            </div>
                            <hr/>
                          </Typography>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                          >
                            <div className="d-flex justify-content-between">
                              <div>Reply</div>
                              <div>
                                <ReplyIcon />
                              </div>
                            </div>
                            <hr/>
                          </Typography>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                          >
                            <div className="d-flex justify-content-between">
                              <div>Copy</div>
                              <div>
                                <ContentCopyIcon />
                              </div>
                            </div>
                            <hr/>
                          </Typography>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                          >
                            <div className="d-flex justify-content-between">
                              <div>Forward</div>
                              <div>
                                <RedoIcon />
                              </div>
                            </div>
                            <hr/>
                          </Typography>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                          >
                            <div className="d-flex justify-content-between">
                              <div>Reply Privately</div>
                              <div>
                                <ForumIcon />
                              </div>
                            </div>
                            <hr/>
                          </Typography>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                          >
                            <div className="d-flex justify-content-between">
                              <div>Report</div>
                              <div>
                                <ReportProblemIcon />
                              </div>
                            </div>
                            <hr/>
                          </Typography>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                          >
                            <div className="d-flex justify-content-between">
                              <div>Delete</div>
                              <div>
                                <DeleteIcon />
                              </div>
                            </div>
                            <hr/>
                          </Typography>
                        </Box>
                      </Modal>

                      <Box className="text-msg-timing-parent">
                        <Typography className="text-msg-timing">
                          {msg.timeStamp}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                )}

                {msg.msgType === "photo" && (
                  <Box className="photo-msg-parent" s>
                    <Box
                      className="photo-msg-img-box"
                      style={{ backgroundImage: `url(${msg.imageUrl})` }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <Box
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <Avatar
                            alt="Remy Sharp"
                            sx={{ height: 25, width: 25 }}
                            src={msg.profileUrl}
                          />
                          <Box className="photo-img-texts-aligns">
                            <Typography
                              className="userName"
                              fontWeight="fontWeightBold"
                              sx={{
                                color: "white",
                                fontSize: "12px",
                                paddingLeft: "0.6rem",
                                lineHeight: 1.3,
                              }}
                            >
                              {msg.name}
                            </Typography>
                            <Typography
                              className="userName"
                              fontWeight="fontWeightNormal"
                              sx={{
                                color: "white",
                                fontSize: "10px",
                                lineHeight: 1.3,
                              }}
                            >
                              {msg.touristPlace}
                            </Typography>
                            <Typography
                              className="userName"
                              fontWeight="fontWeightNormal"
                              sx={{
                                color: "white",
                                fontSize: "10px",
                                lineHeight: 1.3,
                              }}
                            >
                              {msg.timeAbout}
                            </Typography>
                          </Box>
                        </Box>
                        <Box className="photo-img-icon">
                          <PhotoOutlinedIcon fontSize="20" />
                        </Box>
                      </Box>
                    </Box>
                    <Box className="photo-msg-view-post-btn">
                      <Typography className="view-post-text">
                        View Post
                      </Typography>
                      <EastOutlinedIcon
                        sx={{
                          fontSize: "14px",
                          paddingLeft: "0.24rem",
                          color: "#056B6B",
                          marginTop: "-2px",
                        }}
                      />
                    </Box>
                    <Box className="text-msg-timing-parent">
                      <Typography className="text-msg-timing">
                        {msg.timeStamp}
                      </Typography>
                    </Box>
                  </Box>
                )}

                {msg.msgType === "video" && (
                  <Box
                    key={index}
                    sx={
                      msg.senderId === 0
                        ? {
                            paddingLeft: "1rem",
                            paddingRight: "1rem",
                            textAlign: "right",
                            marginBottom: "6px",
                            color: "white",
                          }
                        : {
                            paddingLeft: "1rem",
                            paddingRight: "1rem",
                            textAlign: "left",
                            marginBottom: "6px",
                          }
                    }
                  >
                    <Box
                      className="video-msg-box"
                      sx={
                        msg.senderId === 0
                          ? { backgroundColor: "#056B6B" }
                          : { backgroundColor: "#FFF388" }
                      }
                    >
                      {msg.msgText}
                      <Box
                        className="video-box"
                        style={{
                          backgroundImage: `url(${msg.videoThumbnail})`,
                        }}
                      ></Box>
                      <Box className="text-msg-timing-parent">
                        <Typography className="text-msg-timing">
                          {msg.timeStamp}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                )}
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
        <ChatFooter />
      </Paper>
    </Box>
  );
}

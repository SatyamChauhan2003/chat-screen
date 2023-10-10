import { Avatar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "../styles/Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const data = [
  {
    id: 1,
    name: "Poornima Raj",
  },
  {
    id: 2,
    name: "Poornima Raj",
  },
  {
    id: 3,
    name: "Poornima Raj",
  },
  {
    id: 4,
    name: "Poornima Raj",
  },
];

export default function Navbar() {
  // const [checked, setchecked] = useState(false);

  return (
    <>
      <Toolbar className="appBar">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <KeyboardBackspaceIcon />
          <Avatar
            alt="Remy Sharp"
            sx={{ height: 33, width: 33, marginLeft: "8px" }}
            src="https://i.insider.com/5aeb7d1919ee864c008b489d?width=1136&format=jpeg"
          />
          <Box>
            <Typography
              className="userName"
              fontWeight="fontWeightBold"
              sx={{ fontSize: "14px", paddingLeft: "1.2rem", lineHeight: 1.3 }}
            >
              Trip 1
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
              s
            >
              <Typography
                sx={{
                  paddingLeft: "0.9rem",
                  fontSize: "11px",
                  display: "flex",
                }}
              >
                {data?.map((val) => {
                  return (
                    <div key={val.id} style={{ paddingRight: "7px" }}>
                      {val.name},
                    </div>
                  );
                })}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <SearchIcon sx={{ paddingRight: "0.4rem" }} />
          <MoreVertIcon />
        </Box>
      </Toolbar>
    </>
  );
}

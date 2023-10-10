import { Avatar, Box, Paper, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import ArrowOutwardSharpIcon from '@mui/icons-material/ArrowOutwardSharp';
import "../styles/ChatLanding.css"
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

export default function ChatLanding() {
    const paper = {
        padding: "0rem",
        minHeight: "100vh",
        maxWidth: '27rem'
    };

    const data = [
        {
            name: 'Poornima Raj',
            desc: 'Lovely to hear that you’ve...',
            time: '10:30 AM',
            showMediaIcon: true,
            showBellIcon: true,
            msgCount: 4
        },
        {
            name: 'Poornima Raj',
            desc: 'photo',
            time: '08:00 AM',
            showMediaIcon: false,
            showBellIcon: false,
            msgCount: 8
        },
        {
            name: 'Poornima Raj',
            desc: 'Lovely to hear that you’ve...',
            time: 'yeasterday',
            showMediaIcon: false,
            showBellIcon: false,
            msgCount: 0
        },
        {
            name: 'Travel Buddies Channel',
            desc: 'Kiran : Hi Asha! Lovely...',
            time: '10:30 AM',
            showMediaIcon: false,
            showBellIcon: false,
            msgCount: 2
        },
        {
            name: 'Goa Road Trip',
            desc: 'poornima liked a message',
            time: '10:30 AM',
            showMediaIcon: false,
            showBellIcon: false,
            msgCount: 4
        },
        {
            name: 'Travel Diaries Of Delhi',
            desc: 'Deepak : photo',
            time: 'Apr 1',
            showMediaIcon: false,
            showBellIcon: true,
            msgCount: 0
        },
        {
            name: 'Poornima Raj',
            desc: 'Liked a message',
            time: 'March 31',
            showMediaIcon: false,
            showBellIcon: false,
            msgCount: 4
        },
        {
            name: 'Poornima Raj',
            desc: 'Liked a message',
            time: 'March 31',
            showMediaIcon: false,
            showBellIcon: false,
            msgCount: 4
        },
        {
            name: 'Poornima Raj',
            desc: 'Lovely to hear that you’ve...',
            time: '10:30 AM',
            showMediaIcon: false,
            showBellIcon: false,
            msgCount: 4
        },
        {
            name: 'Poornima Raj',
            desc: 'Lovely to hear that you’ve...',
            time: '10:30 AM',
            showMediaIcon: false,
            showBellIcon: false,
            msgCount: 4
        },
        {
            name: 'Poornima Raj',
            desc: 'Lovely to hear that you’ve...',
            time: '10:30 AM',
            showMediaIcon: false,
            showBellIcon: false,
            msgCount: 4
        },
    ]

    return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Paper sx={{ flexGrow: 1 }} elevation={10} style={paper}>
            <Navbar
                title={"Merchant Runner"}
                backButtonPath={"/merchant/merchant-app"}
            />
            {/* position: 'fixed', width: "100%", maxWidth: '26rem', zIndex: 10 */}
            <Box sx={{ backgroundColor: "#FDFBE7", padding: "8px", display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: "flex", alignItems: 'center', padding: '6px' }}>
                    <Avatar sx={{ backgroundColor: '#FDE723' }}>
                        <QuestionAnswerOutlinedIcon />
                    </Avatar>
                    <Typography sx={{ paddingLeft: '1.2rem', fontWeight: 'bold' }}>Start a New Chat</Typography>
                </Box>
                <ArrowOutwardSharpIcon />
            </Box>

            {
                data?.map((item, index) => <Box key={index} sx={{ padding: "8px", paddingTop: "15px", display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: "flex", alignItems: 'center', padding: '6px' }}>
                        <Avatar alt="Remy Sharp" src="https://i.insider.com/5aeb7d1919ee864c008b489d?width=1136&format=jpeg" />
                        <Box>
                            <Typography className='userName' fontWeight="fontWeightBold" sx={{ paddingLeft: '1.2rem' }}>{item.name}</Typography>
                            <Typography sx={{ paddingLeft: '1.2rem', fontSize: '15px' }}>
                                {item.desc}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ textAlign: 'right' }} >
                        <Box className="timeStamp">
                            {item.time}
                        </Box>
                        <Box sx={{ textAlign: 'right', display: "flex", alignItems: 'center', justifyContent: 'flex-end' }}>
                            {item.showMediaIcon && <InsertLinkOutlinedIcon className='chat-icon' />}
                            {item.showBellIcon && <NotificationsActiveOutlinedIcon className='chat-icon' />}
                            {item.msgCount > 0 && <Box className="badgeIcon chat-icon" >
                                <Typography fontSize={15}>
                                    {item.msgCount}
                                </Typography>
                            </Box>}
                        </Box>

                    </Box>
                </Box>)
            }

            {/* <h1>Chat Landing</h1> */}
        </Paper >
    </Box >
}

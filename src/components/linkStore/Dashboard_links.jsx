import React from 'react';
import {FiHome} from 'react-icons/fi';
import {AiOutlineCompass} from "react-icons/ai";
import {BsFillPeopleFill} from "react-icons/bs";
import {LuAlarmClock} from "react-icons/lu";
import {AiOutlineClockCircle} from "react-icons/ai";
import {BsFillBookmarkCheckFill} from "react-icons/bs";
import {AiOutlineStar} from "react-icons/ai";
import {PiDownloadSimpleBold} from "react-icons/pi";
import {AiOutlineSetting} from "react-icons/ai";
import {BiHelpCircle} from "react-icons/bi";
import {IoLogOutOutline} from "react-icons/io5";
import {BiSearch} from "react-icons/bi";
import {GiSettingsKnobs} from "react-icons/gi";
// import {HiSignal} from "react-icons/hi";
import {AiOutlineMessage} from "react-icons/ai";
import {IoMdNotificationsOutline} from "react-icons/io";

const Routes = [
    [
        {   
            id: 0,
            path: "/",
            name: "Home",
            icon: <FiHome />,
        },
        {
            id: 1,
            path: "/discovery",
            name: "Discovery",
            icon: <AiOutlineCompass />,
        },
        {
            id: 2,
            path: "/community",
            name: "Community",
            icon: <BsFillPeopleFill />,
        },
        {
            id: 3,
            path: "/comingsoon",
            name: "ComingSoon",
            icon: <LuAlarmClock />,
        }
    ],
    [
        {
            id: 4,
            path: "/recent",
            name: "Recent",
            icon: <AiOutlineClockCircle />,
        },
        {
            id: 5,
            path: "/bookmarked",
            name: "Bookmarked",
            icon: <BsFillBookmarkCheckFill />,
        },
        {
            id: 6,
            path: "/toprated",
            name: "TopRated",
            icon: <AiOutlineStar />,
        },
        {
            id: 7,
            path: "/downloads",
            name: "Downloads",
            icon: <PiDownloadSimpleBold />,
        }
    ],
    [
        {
            id: 8,
            path: "/settings",
            name: "Settings",
            icon: <AiOutlineSetting />,
        },
        {
            id: 9,
            path: "/help",
            name: "Help",
            icon: <BiHelpCircle />,
        }
    ],
    [
        {
            id: 10,
            path: "/logout",
            name: "Logout",
            icon: <IoLogOutOutline />,
        }
    ],
    [
        {
            id: 11,
            path:"/search",
            name: "Search",
            icon: <BiSearch />,
        },
        {
            id: 12,
            path:"/settingknob",
            name: "Settingknob",
            icon: <GiSettingsKnobs />,
        }
    ],
    [
        {
            id: 13,
            path:"/message",
            name: "Message",
            icon: <AiOutlineMessage />,
        },
        {
            id: 14,
            path:"/notification",
            name: "Notification",  
            icon: <IoMdNotificationsOutline />,
        }
    ]
]

export default Routes;

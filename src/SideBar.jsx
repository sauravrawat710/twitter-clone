import React from "react";
import "./SideBar.css";
import SideBarOption from "./SideBarOption";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

const SideBar = () => {
  return (
    <div className="sideBar">
      <TwitterIcon className="sideBar__twitterIcon" />

      <SideBarOption active Icon={HomeIcon} label="Home" />
      <SideBarOption Icon={SearchIcon} label="Explore" />
      <SideBarOption Icon={NotificationsNoneIcon} label="Notifications" />
      <SideBarOption Icon={MailOutlineIcon} label="Messages" />
      <SideBarOption Icon={BookmarkBorderIcon} label="Bookmarks" />
      <SideBarOption Icon={ListAltIcon} label="Lists" />
      <SideBarOption Icon={PermIdentityIcon} label="Profile" />
      <SideBarOption Icon={MoreHorizIcon} label="More" />

      <Button variant="outlined" className="sideBar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default SideBar;

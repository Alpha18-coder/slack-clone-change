import MessageIcon from '@material-ui/icons/Message';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts'
import PeopleIcon from '@material-ui/icons/People';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import AppsIcon from '@material-ui/icons/Apps';

export const sidebarItemsData = [
    {
        icon: <MessageIcon />,
        text: "Thread"
    },
    {
        icon: <InboxIcon />,
        text: "All DMs"
    },
    {
        icon: <DraftsIcon />,
        text: "Mentions & Reactions"
    },
    {
        icon: <BookmarkBorderIcon />,
        text: "Save items"
    },
    {
        icon: <PeopleIcon />,
        text: "Peoples & Groups"
    },
    {
        icon: <AppsIcon />,
        text: "More"
    }
]
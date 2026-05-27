import { Menu } from "react-admin"
import EventIcon from "@mui/icons-material/Event"
import PeopleIcon from "@mui/icons-material/People"
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom"
import ScheduleIcon from "@mui/icons-material/Schedule"

export const MyMenu = () => (
  <Menu>
    <Menu.DashboardItem />
    <Menu.Item
      to="/events"
      primaryText="Événements"
      leftIcon={<EventIcon />}
    />
    <Menu.Item
      to="/sessions"
      primaryText="Sessions"
      leftIcon={<ScheduleIcon />}
    />
    <Menu.Item
      to="/speakers"
      primaryText="Intervenants"
      leftIcon={<PeopleIcon />}
    />
    <Menu.Item
      to="/rooms"
      primaryText="Salles"
      leftIcon={<MeetingRoomIcon />}
    />
  </Menu>
)

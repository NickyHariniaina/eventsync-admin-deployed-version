import { Admin, Resource, fetchUtils } from "react-admin"
import simpleRestProvider from "ra-data-simple-rest"
import { authProvider } from "./authoProvider"
import { EventList, EventEdit, EventCreate } from "./resources/events"
import { RoomList, RoomEdit, RoomCreate } from "./resources/rooms"
import { SessionList, SessionEdit, SessionCreate } from "./resources/sessions"
import { SpeakerList, SpeakerEdit, SpeakerCreate } from "./resources/speakers"
import { lightTheme, darkTheme } from "./theme"
import { ThemeProvider, useTheme } from "./ThemeContext"
import { MyLayout } from "./Layout"
import { Dashboard } from "./Dashboard"
import LoginPage from "./LoginPage"
import EventIcon from "@mui/icons-material/Event"
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom"
import ScheduleIcon from "@mui/icons-material/Schedule"
import PeopleIcon from "@mui/icons-material/People"
import "./App.css"

const httpClient = (url: string, options: fetchUtils.Options = {}) => {
  return fetchUtils.fetchJson(url, { ...options, credentials: "include" })
}

const dataProvider = simpleRestProvider("http://localhost:3000/api", httpClient)

function AdminApp() {
  const { isDark } = useTheme()

  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      theme={isDark ? darkTheme : lightTheme}
      layout={MyLayout}
      loginPage={LoginPage}
      dashboard={Dashboard}
    >
      <Resource
        name="events"
        list={EventList}
        edit={EventEdit}
        create={EventCreate}
        icon={EventIcon}
        options={{ label: "Evenements" }}
      />
      <Resource
        name="rooms"
        list={RoomList}
        edit={RoomEdit}
        create={RoomCreate}
        icon={MeetingRoomIcon}
        options={{ label: "Salles" }}
      />
      <Resource
        name="sessions"
        list={SessionList}
        edit={SessionEdit}
        create={SessionCreate}
        icon={ScheduleIcon}
        options={{ label: "Sessions" }}
      />
      <Resource
        name="speakers"
        list={SpeakerList}
        edit={SpeakerEdit}
        create={SpeakerCreate}
        icon={PeopleIcon}
        options={{ label: "Intervenants" }}
      />
    </Admin>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AdminApp />
    </ThemeProvider>
  )
}

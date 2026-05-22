import { Admin, Resource } from "react-admin"
import simpleRestProvider from "ra-data-simple-rest"
import { authProvider } from "./authoProvider"
import { EventList, EventEdit, EventCreate } from "./resources/events"
import { theme } from "./theme"
import { MyLayout } from "./Layout"
import LoginPage from "./LoginPage"
import "./App.css"

const dataProvider = simpleRestProvider("http://localhost:3000/api")

export default function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      theme={theme}
      layout={MyLayout}
      loginPage={LoginPage}
    >
      <Resource
        name="events"
        list={EventList}
        edit={EventEdit}
        create={EventCreate}
        options={{ label: "Événements" }}
      />
    </Admin>
  )
}
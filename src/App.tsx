import { Admin, Resource } from "react-admin"
import simpleRestProvider from "ra-data-simple-rest"
import { authProvider } from "./authoProvider"
import { EventList, EventEdit, EventCreate } from "./resources/events"


const dataProvider = simpleRestProvider("http://localhost:3000/api")

export default function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
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
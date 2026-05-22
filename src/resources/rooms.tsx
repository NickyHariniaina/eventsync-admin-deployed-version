import { List, Datagrid, TextField } from "react-admin"

export const RoomList = () => (
  <List>
    <Datagrid>
      <TextField source="name" label="Nom" />
    </Datagrid>
  </List>
)

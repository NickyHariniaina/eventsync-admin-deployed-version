import { List, Datagrid, TextField, Edit, SimpleForm, TextInput, Create } from "react-admin"

export const RoomList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="name" label="Nom" />
    </Datagrid>
  </List>
)

export const RoomEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" label="Nom" required />
    </SimpleForm>
  </Edit>
)

export const RoomCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" label="Nom" required />
    </SimpleForm>
  </Create>
)

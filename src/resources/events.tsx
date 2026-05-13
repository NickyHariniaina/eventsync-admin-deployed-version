import {
  List,
  Datagrid,
  TextField,
  DateField,
  Edit,
  SimpleForm,
  TextInput,
  DateTimeInput,
  Create,
} from "react-admin"

export const EventList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="title" label="Titre" />
      <TextField source="location" label="Lieu" />
      <DateField source="startDate" label="Début" showTime />
      <DateField source="endDate" label="Fin" showTime />
    </Datagrid>
  </List>
)

export const EventEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" label="Titre" required />
      <TextInput source="description" label="Description" multiline />
      <TextInput source="location" label="Lieu" />
      <DateTimeInput source="startDate" label="Date de début" required />
      <DateTimeInput source="endDate" label="Date de fin" required />
    </SimpleForm>
  </Edit>
)

export const EventCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" label="Titre" required />
      <TextInput source="description" label="Description" multiline />
      <TextInput source="location" label="Lieu" />
      <DateTimeInput source="startDate" label="Date de début" required />
      <DateTimeInput source="endDate" label="Date de fin" required />
    </SimpleForm>
  </Create>
)
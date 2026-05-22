import {
  List,
  Datagrid,
  TextField,
  DateField,
  Edit,
  SimpleForm,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  Create,
} from "react-admin"

export const SessionList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="title" label="Titre" />
      <TextField source="roomName" label="Salle" />
      <DateField source="startTime" label="Début" showTime />
      <DateField source="endTime" label="Fin" showTime />
      <TextField source="capacity" label="Capacité" />
    </Datagrid>
  </List>
)

export const SessionEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" label="Titre" required />
      <TextInput source="description" label="Description" multiline />
      <DateTimeInput source="startTime" label="Date de début" required />
      <DateTimeInput source="endTime" label="Date de fin" required />
      <NumberInput source="capacity" label="Capacité" />
      <ReferenceInput source="eventId" reference="events" label="Événement">
        <SelectInput optionText="title" />
      </ReferenceInput>
      <ReferenceInput source="roomId" reference="rooms" label="Salle">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
)

export const SessionCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" label="Titre" required />
      <TextInput source="description" label="Description" multiline />
      <DateTimeInput source="startTime" label="Date de début" required />
      <DateTimeInput source="endTime" label="Date de fin" required />
      <NumberInput source="capacity" label="Capacité" />
      <ReferenceInput source="eventId" reference="events" label="Événement">
        <SelectInput optionText="title" />
      </ReferenceInput>
      <ReferenceInput source="roomId" reference="rooms" label="Salle">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
)

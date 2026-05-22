import {
  List,
  Datagrid,
  TextField,
  ImageField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
} from "react-admin"

export const SpeakerList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="name" label="Nom" />
      <ImageField source="photo" label="Photo" sx={{ "& img": { width: 40, height: 40, borderRadius: "50%", objectFit: "cover" } }} />
      <TextField source="bio" label="Bio" />
    </Datagrid>
  </List>
)

export const SpeakerEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" label="Nom" required />
      <TextInput source="photo" label="URL de la photo" />
      <TextInput source="bio" label="Biographie" multiline />
    </SimpleForm>
  </Edit>
)

export const SpeakerCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" label="Nom" required />
      <TextInput source="photo" label="URL de la photo" />
      <TextInput source="bio" label="Biographie" multiline />
    </SimpleForm>
  </Create>
)

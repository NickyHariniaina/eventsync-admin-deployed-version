import {
  List,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TabbedForm,
  FormTab,
  useListContext,
  useRedirect,
} from "react-admin"
import { Card, Typography, Box, Skeleton } from "@mui/material"

function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  })
}

function SessionCards() {
  const { data, isLoading } = useListContext()
  const redirect = useRedirect()

  if (isLoading)
    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} sx={{ p: 2 }}>
            <Skeleton width="60%" />
            <Skeleton width="40%" />
            <Skeleton width="30%" />
          </Card>
        ))}
      </Box>
    )

  if (!data?.length)
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="body1" color="text.secondary">
          Aucune session pour le moment.
        </Typography>
      </Box>
    )

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
      {data.map((record) => (
        <Card
          key={record.id}
          onClick={() => redirect("edit", "sessions", record.id)}
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            gap: 2,
            cursor: "pointer",
            transition: "all 0.2s",
            "&:hover": { transform: "translateY(-2px)" },
          }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: "10px",
              bgcolor: "secondary.main",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Typography variant="caption" fontWeight={600} sx={{ opacity: 0.9 }}>
              {formatTime(record.startTime)}
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.7 }}>
              {formatTime(record.endTime)}
            </Typography>
          </Box>
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography variant="subtitle1" fontWeight={600} noWrap>
              {record.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {record.roomName ? `Salle: ${record.roomName}` : ""}
              {record.roomName && record.capacity ? " · " : ""}
              {record.capacity ? `${record.capacity} places` : ""}
            </Typography>
            {record.description && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mt: 0.5,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {record.description}
              </Typography>
            )}
          </Box>
        </Card>
      ))}
    </Box>
  )
}

export const SessionList = () => (
  <List>
    <SessionCards />
  </List>
)

const transformEdit = (data: Record<string, any>) => ({
  ...data,
  speakerIds: data.speakers?.map((s: any) => s.id) ?? [],
})

export const SessionEdit = () => (
  <Edit transform={transformEdit}>
    <TabbedForm>
      <FormTab label="Informations">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 1,
          }}
        >
          <TextInput source="title" label="Titre" required fullWidth />
          <NumberInput source="capacity" label="Capacite" fullWidth />
        </Box>
        <TextInput source="description" label="Description" multiline fullWidth />
      </FormTab>
      <FormTab label="Planning">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 1,
          }}
        >
          <DateTimeInput source="startTime" label="Date de debut" required />
          <DateTimeInput source="endTime" label="Date de fin" required />
        </Box>
      </FormTab>
      <FormTab label="Affectations">
        <ReferenceInput source="eventId" reference="events" label="Evenement" fullWidth>
          <SelectInput optionText="title" />
        </ReferenceInput>
        <ReferenceInput source="roomId" reference="rooms" label="Salle" fullWidth>
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceArrayInput
          source="speakerIds"
          reference="speakers"
          label="Intervenants"
        >
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
      </FormTab>
    </TabbedForm>
  </Edit>
)

const SessionForm = () => (
  <>
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
        gap: 1,
      }}
    >
      <TextInput source="title" label="Titre" required fullWidth />
      <NumberInput source="capacity" label="Capacite" fullWidth />
    </Box>
    <TextInput source="description" label="Description" multiline fullWidth />
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
        gap: 1,
      }}
    >
      <DateTimeInput source="startTime" label="Date de debut" required />
      <DateTimeInput source="endTime" label="Date de fin" required />
    </Box>
    <ReferenceInput source="eventId" reference="events" label="Evenement" fullWidth>
      <SelectInput optionText="title" />
    </ReferenceInput>
    <ReferenceInput source="roomId" reference="rooms" label="Salle" fullWidth>
      <SelectInput optionText="name" />
    </ReferenceInput>
    <ReferenceArrayInput
      source="speakerIds"
      reference="speakers"
      label="Intervenants"
    >
      <SelectArrayInput optionText="name" />
    </ReferenceArrayInput>
  </>
)

export const SessionCreate = () => (
  <Create>
    <SimpleForm>
      <SessionForm />
    </SimpleForm>
  </Create>
)

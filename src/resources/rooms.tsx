import {
  List,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  useListContext,
  useRedirect,
} from "react-admin"
import { Card, Typography, Box, Skeleton } from "@mui/material"
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom"

function RoomCards() {
  const { data, isLoading } = useListContext()
  const redirect = useRedirect()

  if (isLoading)
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 2,
          p: 2,
        }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} sx={{ p: 3 }}>
            <Skeleton variant="rounded" width="60%" height={24} />
          </Card>
        ))}
      </Box>
    )

  if (!data?.length)
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="body1" color="text.secondary">
          Aucune salle pour le moment.
        </Typography>
      </Box>
    )

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: 2,
        p: 2,
      }}
    >
      {data.map((record) => (
        <Card
          key={record.id}
          onClick={() => redirect("edit", "rooms", record.id)}
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1.5,
            cursor: "pointer",
            transition: "all 0.2s",
            "&:hover": { transform: "translateY(-2px)" },
          }}
        >
          <MeetingRoomIcon
            sx={{ fontSize: 40, color: "primary.main", opacity: 0.7 }}
          />
          <Typography variant="h6" fontWeight={600} align="center">
            {record.name}
          </Typography>
        </Card>
      ))}
    </Box>
  )
}

export const RoomList = () => (
  <List>
    <RoomCards />
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

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

function SpeakerCards() {
  const { data, isLoading } = useListContext()
  const redirect = useRedirect()

  if (isLoading)
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 2,
          p: 2,
        }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} sx={{ p: 2, display: "flex", gap: 2, alignItems: "center" }}>
            <Skeleton variant="circular" width={56} height={56} />
            <Box sx={{ flex: 1 }}>
              <Skeleton width="80%" />
              <Skeleton width="60%" />
            </Box>
          </Card>
        ))}
      </Box>
    )

  if (!data?.length)
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="body1" color="text.secondary">
          Aucun intervenant pour le moment.
        </Typography>
      </Box>
    )

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: 2,
        p: 2,
      }}
    >
      {data.map((record) => (
        <Card
          key={record.id}
          onClick={() => redirect("edit", "speakers", record.id)}
          sx={{
            p: 2,
            display: "flex",
            gap: 2,
            alignItems: "center",
            cursor: "pointer",
            transition: "all 0.2s",
            "&:hover": { transform: "translateY(-2px)" },
          }}
        >
          {record.photo ? (
            <Box
              component="img"
              src={record.photo}
              sx={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
          ) : (
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                bgcolor: "primary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: 20,
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              {record.name?.[0]?.toUpperCase()}
            </Box>
          )}
          <Box sx={{ minWidth: 0 }}>
            <Typography variant="subtitle1" fontWeight={600} noWrap>
              {record.name}
            </Typography>
            {record.bio && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {record.bio}
              </Typography>
            )}
          </Box>
        </Card>
      ))}
    </Box>
  )
}

export const SpeakerList = () => (
  <List>
    <SpeakerCards />
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

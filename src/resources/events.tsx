import {
  List,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  DateTimeInput,
  useListContext,
  useRedirect,
} from "react-admin"
import { Card, Typography, Box, Divider, Skeleton } from "@mui/material"

function toFrDate(date: Date) {
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

function toFrShortMonth(date: Date) {
  return date.toLocaleDateString("fr-FR", { month: "short" }).replace(".", "")
}

function EventCards() {
  const { data, isLoading } = useListContext()
  const redirect = useRedirect()

  if (isLoading)
    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} sx={{ display: "flex", gap: 2 }}>
            <Skeleton variant="rounded" width={100} height={120} />
            <Box sx={{ flex: 1, p: 2 }}>
              <Skeleton width="60%" />
              <Skeleton width="40%" />
              <Skeleton width="30%" />
            </Box>
          </Card>
        ))}
      </Box>
    )

  if (!data?.length)
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="body1" color="text.secondary">
          Aucun evenement pour le moment.
        </Typography>
      </Box>
    )

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
      {data.map((record) => {
        const start = new Date(record.startDate)
        const end = new Date(record.endDate)
        return (
          <Card
            key={record.id}
            onClick={() => redirect("edit", "events", record.id)}
            sx={{
              display: "flex",
              gap: 0,
              cursor: "pointer",
              transition: "all 0.2s",
              overflow: "hidden",
              "&:hover": { transform: "translateY(-2px)" },
            }}
          >
            <Box
              sx={{
                width: 100,
                minHeight: 120,
                bgcolor: "primary.main",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                p: 1,
                textAlign: "center",
              }}
            >
              <Typography variant="h4" fontWeight={700} lineHeight={1.1}>
                {start.getDate()}
              </Typography>
              <Typography
                variant="caption"
                textTransform="uppercase"
                fontWeight={600}
                sx={{ opacity: 0.9 }}
              >
                {toFrShortMonth(start)}
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.7, mt: 0.5 }}>
                {start.getFullYear()}
              </Typography>
            </Box>
            <Box sx={{ p: 2, flex: 1, minWidth: 0 }}>
              <Typography variant="h6" fontWeight={600}>
                {record.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 0.5 }}
              >
                {record.location || "Lieu non defini"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {toFrDate(start)} → {toFrDate(end)}
              </Typography>
              {record.description && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mt: 1,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {record.description}
                </Typography>
              )}
            </Box>
          </Card>
        )
      })}
    </Box>
  )
}

export const EventList = () => (
  <List>
    <EventCards />
  </List>
)

function SectionHeader({ label }: { label: string }) {
  return (
    <Box sx={{ mb: 1, mt: 1 }}>
      <Typography
        variant="subtitle2"
        fontWeight={600}
        sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: 0.5, fontSize: "0.75rem" }}
      >
        {label}
      </Typography>
      <Divider sx={{ mt: 0.5 }} />
    </Box>
  )
}

const EventForm = () => (
  <>
    <SectionHeader label="Informations" />
    <TextInput source="title" label="Titre" required fullWidth />
    <TextInput source="description" label="Description" multiline fullWidth />
    <TextInput source="location" label="Lieu" fullWidth />
    <SectionHeader label="Dates" />
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
        gap: 1,
      }}
    >
      <DateTimeInput source="startDate" label="Date de debut" required />
      <DateTimeInput source="endDate" label="Date de fin" required />
    </Box>
  </>
)

export const EventEdit = () => (
  <Edit>
    <SimpleForm>
      <EventForm />
    </SimpleForm>
  </Edit>
)

export const EventCreate = () => (
  <Create>
    <SimpleForm>
      <EventForm />
    </SimpleForm>
  </Create>
)

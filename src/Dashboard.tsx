import { useGetList } from "react-admin"
import { Card, Typography, Box } from "@mui/material"
import EventIcon from "@mui/icons-material/Event"
import PeopleIcon from "@mui/icons-material/People"
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom"
import ScheduleIcon from "@mui/icons-material/Schedule"

function StatCard({
  label,
  icon: Icon,
  total,
  color,
}: {
  label: string
  icon: React.ElementType
  total?: number
  color: string
}) {
  return (
    <Card
      sx={{
        p: 3,
        display: "flex",
        alignItems: "center",
        gap: 2,
        border: `1px solid ${color}20`,
        background: `linear-gradient(135deg, ${color}08 0%, transparent 100%)`,
      }}
    >
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: `${color}15`,
          color,
        }}
      >
        <Icon />
      </Box>
      <Box>
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{ color: "text.primary", lineHeight: 1.2 }}
        >
          {total ?? "—"}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", mt: 0.25 }}
        >
          {label}
        </Typography>
      </Box>
    </Card>
  )
}

export const Dashboard = () => {
  const { total: events } = useGetList("events", {
    pagination: { page: 1, perPage: 1 },
    sort: { field: "id", order: "ASC" },
  })
  const { total: sessions } = useGetList("sessions", {
    pagination: { page: 1, perPage: 1 },
    sort: { field: "id", order: "ASC" },
  })
  const { total: speakers } = useGetList("speakers", {
    pagination: { page: 1, perPage: 1 },
    sort: { field: "id", order: "ASC" },
  })
  const { total: rooms } = useGetList("rooms", {
    pagination: { page: 1, perPage: 1 },
    sort: { field: "id", order: "ASC" },
  })

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 3 }}>
        Tableau de bord
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 3,
        }}
      >
        <StatCard
          label="Événements"
          icon={EventIcon}
          total={events}
          color="#a33b20"
        />
        <StatCard
          label="Sessions"
          icon={ScheduleIcon}
          total={sessions}
          color="#c2532a"
        />
        <StatCard
          label="Intervenants"
          icon={PeopleIcon}
          total={speakers}
          color="#d4764a"
        />
        <StatCard
          label="Salles"
          icon={MeetingRoomIcon}
          total={rooms}
          color="#a47963"
        />
      </Box>
    </Box>
  )
}

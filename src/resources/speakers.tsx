import { useRef, useState } from "react"
import {
  List,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  FormDataConsumer,
  useInput,
  useListContext,
  useRedirect,
} from "react-admin"
import { Card, Typography, Box, Skeleton, Button } from "@mui/material"
import CloudUploadIcon from "@mui/icons-material/CloudUpload"
import DeleteIcon from "@mui/icons-material/Delete"
import { FormToolbar } from "../FormToolbar"

const API_URL = "http://localhost:3000"

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

function PhotoPreview() {
  return (
    <FormDataConsumer>
      {({ formData }) =>
        formData?.photo ? (
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <Box
              component="img"
              src={formData.photo}
              sx={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid",
                borderColor: "primary.main",
              }}
              onError={(e) => {
                ;(e.target as HTMLImageElement).style.display = "none"
              }}
            />
          </Box>
        ) : null
      }
    </FormDataConsumer>
  )
}

function PhotoUploadInput() {
  const { field } = useInput({ source: "photo" })
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 5 * 1024 * 1024) {
      setError("L'image ne doit pas dépasser 5 Mo")
      return
    }

    setError(null)
    setUploading(true)

    try {
      const formData = new FormData()
      formData.append("file", file)

      const res = await fetch(`${API_URL}/api/upload`, {
        method: "POST",
        body: formData,
        credentials: "include",
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Upload failed")
      }

      const data = await res.json()
      field.onChange(data.url)
    } catch {
      setError("Erreur lors de l'upload")
    } finally {
      setUploading(false)
    }
  }

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="body2" fontWeight={500} sx={{ mb: 1 }}>
        Photo
      </Typography>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        hidden
      />

      <FormDataConsumer>
        {({ formData }) =>
          formData?.photo ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                component="img"
                src={formData.photo}
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid",
                  borderColor: "divider",
                }}
              />
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Changer
                </Button>
                <Button
                  size="small"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={() => field.onChange("")}
                >
                  Supprimer
                </Button>
              </Box>
            </Box>
          ) : (
            <Button
              variant="outlined"
              startIcon={uploading ? undefined : <CloudUploadIcon />}
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              sx={{
                borderStyle: "dashed",
                borderWidth: 2,
                py: 3,
                width: "100%",
                color: "text.secondary",
              }}
            >
              {uploading ? "Chargement..." : "Cliquez pour ajouter une photo"}
            </Button>
          )
        }
      </FormDataConsumer>

      {error && (
        <Typography variant="caption" color="error" sx={{ mt: 0.5, display: "block" }}>
          {error}
        </Typography>
      )}
    </Box>
  )
}

const SpeakerForm = () => (
  <>
    <PhotoPreview />
    <PhotoUploadInput />
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
        gap: 1,
      }}
    >
      <TextInput source="name" label="Nom" required fullWidth />
    </Box>
    <TextInput
      source="bio"
      label="Biographie"
      multiline
      fullWidth
      helperText="Courte biographie publique"
    />
  </>
)

export const SpeakerEdit = () => (
  <Edit>
    <SimpleForm toolbar={<FormToolbar />}>
      <SpeakerForm />
    </SimpleForm>
  </Edit>
)

export const SpeakerCreate = () => (
  <Create>
    <SimpleForm toolbar={<FormToolbar />}>
      <SpeakerForm />
    </SimpleForm>
  </Create>
)

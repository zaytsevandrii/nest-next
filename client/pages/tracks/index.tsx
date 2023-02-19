import React from "react"
import MainLayout from "../../layouts/MainLayout"
import { Box, Button, Card, Grid } from "@material-ui/core"
import { useRouter } from "next/router"
import { ITrack } from "../../types/tracks"
const index = () => {
  const router = useRouter()
  const tracks:ITrack[]=[
    {_id: '1', name: 'Трек 1', artist:'Испольнитель 1',text:"какой-то текст",listens:5,}
  ]
    return (
        <MainLayout>
            <Grid container justifyContent='center'>
            <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>Список треков</h1>
                            <Button onClick={() => router.push('/tracks/create')}>
                                Загрузить
                            </Button>
                        </Grid>
                    </Box>
                </Card>
            </Grid>
        </MainLayout>
    )
}

export default index

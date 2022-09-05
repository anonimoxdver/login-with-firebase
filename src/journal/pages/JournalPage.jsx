
import { Grid } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { ChatProfile, ChatView } from '../views/';




export const JournalPage = () => {


  return (
    <JournalLayout>
      
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid
                  sx={{
                    width: '60%'
                  }}
        >
         <ChatView/>
        </Grid>
        <Grid
          sx={{
            width: 1/3
          }}
        >
          <ChatProfile/>
        </Grid>
        
        
      </Grid>
   

    </JournalLayout>
  )
}

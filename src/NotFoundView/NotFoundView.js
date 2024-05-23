import { Box, Container, Alert, AlertTitle } from '@mui/material';
import style from './notfound.module.css';

function NotFoundView() {
    return (
        <Container maxWidth="md">
            <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            className={style.error_anim}
            px={2}
            mt={4}>
                <Alert variant="filled" severity="error">
                    <AlertTitle>Page Not Found!</AlertTitle>
                    Page you are looking for does not exist.
                </Alert>
            </Box>
        </Container>
    );
}

export default NotFoundView;
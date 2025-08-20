import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  alpha,
  styled
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';

// Imagen de ejemplo (en un proyecto real, importarías una imagen)
const placeholderImage = "src/assets/imagen principal.jpg";

// Componente estilizado para la imagen
const ResponsiveImage = styled('img')(({ theme }) => ({
    width: '100%',
    height: 'auto',
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[10],
    transition: 'transform 0.5s ease',
    objectFit: 'cover',
    maxHeight: 500,
    [theme.breakpoints.down('md')]: {
      maxWidth: '80%',
      maxHeight: 400,
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      maxHeight: 300,
    },
    '&:hover': {
      transform: 'scale(1.02)'
    }
  }));
  
  // Contenedor flex personalizado
  const FlexContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: theme.spacing(6)
    }
  }));
  
  // Contenedor de texto (60%)
  const TextContainer = styled('div')(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '60%',
      flex: '0 0 60%'
    }
  }));
  
  // Contenedor de imagen (40%)
  const ImageContainer = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      width: '40%',
      flex: '0 0 40%',
      justifyContent: 'flex-end'
    }
  }));
  
  export function WelcomeSection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
    return (
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          px: 2,
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0.1)} 0%, ${alpha(theme.palette.secondary.light, 0.1)} 100%)`,
          borderRadius: 2,
          mb: 4,
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <FlexContainer>
            <TextContainer>
              <Typography
                component="h1"
                variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
                gutterBottom
                sx={{
                  fontWeight: 700,
                  color: theme.palette.primary.dark,
                  lineHeight: 1.2,
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Equipos y recursos para nutricionistas
              </Typography>
              
              <Typography
                variant={isMobile ? "body1" : "h6"}
                color="text.secondary"
                paragraph
                sx={{ 
                  mb: 3, 
                  fontWeight: 400,
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Todo lo que necesitas para tu práctica profesional: equipos de medición, 
                cursos ISAK, plantillas, libros especializados y más.
              </Typography>
              
              <Box 
                sx={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: 2,
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<ShoppingCartIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 600,
                    boxShadow: theme.shadows[4],
                    '&:hover': {
                      boxShadow: theme.shadows[8],
                      transform: 'translateY(-2px)',
                      transition: 'all 0.3s ease'
                    }
                  }}
                >
                  Ver catálogo
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<LoginIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 600,
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                      transform: 'translateY(-2px)',
                      transition: 'all 0.3s ease'
                    }
                  }}
                >
                  Iniciar sesión
                </Button>
              </Box>
            </TextContainer>
            
            <ImageContainer>
              <ResponsiveImage
                src={placeholderImage}
                alt="Equipos para nutricionistas"
              />
            </ImageContainer>
          </FlexContainer>
        </Container>
      </Box>
    );
  }

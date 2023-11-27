import React from "react";
import {
  Container,
  CssBaseline,
  Typography,
  Paper,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Toolbar,
  AppBar,
  IconButton,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import PharmacyLogo from "./manga1.png";
import "@fontsource/open-sans/300.css";
import "@fontsource/dancing-script/700.css";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
function PharmacyWebsite() {
  const products = [
    { id: 1, name: 'Aspirin', price: '$5.99', description: 'Relieves pain and reduces inflammation.', imageUrl: 'https://media2.s-nbcnews.com/i/MSNBC/Components/Video/201809/nn_jto_aspirin_heart_disease_180916_1920x1080.jpg' },
    { id: 2, name: 'Cough Syrup', price: '$8.99', description: 'Effective for relieving cough symptoms.', imageUrl: 'https://www.netmeds.com/images/product-v1/600x600/991497/isp_cough_syrup_100ml_432294_3_0.jpg' },
    { id: 3, name: 'Pain Reliever', price: '$6.49', description: 'Fast-acting pain relief for headaches and body aches.', imageUrl: 'https://familydoctor.org/wp-content/uploads/2005/09/52565278_l.jpg' },
    { id: 4, name: 'Allergy Medicine', price: '$12.99', description: 'Relieves allergy symptoms and nasal congestion.', imageUrl: 'https://images-cdn.ubuy.co.in/633ab8f478b8be09ff4c4186-kirkland-signature-allergy-medicine.jpg' },
    { 
      id: 5, 
      name: 'Antibiotic Ointment', 
      price: '$7.99', 
      description: 'Promotes healing and prevents infection for minor cuts and wounds.', 
      imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/9/FT/WY/TJ/107908758/single-antibiotic-ointment.jpg' 
    },
    { 
      id: 6, 
      name: 'Vitamin C Tablets', 
      price: '$10.49', 
      description: 'Boosts the immune system and provides essential vitamins.', 
      imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/11/EH/JE/NW/122957552/vitamin-c-chewable-limcee-tablet-500mg.jpg' 
    },
    { 
      id: 7, 
      name: 'Inhaler', 
      price: '$15.99', 
      description: 'Relieves symptoms of asthma and other respiratory conditions.', 
      imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/11/LJ/VK/SC/93762891/asthalin-salbutamol-inhaler.png' 
    },
    
  ];

  return (
    <div style={{
      backgroundImage: 'url("")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      position: 'relative',
    }}>
      <CssBaseline />
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <img src={PharmacyLogo} alt="Pharmacy Logo" style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }} />
          <Typography variant="h6" fontFamily="Dancing Script, cursive" sx={{ flexGrow: 1, color: "#333" }}>
  PHARMACY SHOP
</Typography>

          <Button color="inherit">Home</Button>
          <Button color="inherit">Products</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit"><Link to='/login'>Login</Link></Button>
          <Button color="inherit"><Link to='/reg'>SignIn</Link></Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <Paper elevation={3} sx={{ padding: 3, backgroundColor: "#f8f8f8", borderRadius: 8 }}>
          <form style={{ marginTop: 20 }}>
            <TextField label="Search for Medicines" id="search" name="search" fullWidth required margin="normal" variant="outlined" />
            <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
              <SearchIcon sx={{ marginRight: 1 }} />
              Search
            </Button>
          </form>
        </Paper>
        <hr />
        <Grid container spacing={3} sx={{ marginTop: 3 }}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card elevation={3} sx={{ height: "100%" }}>
                <CardContent>
                  <img src={product.imageUrl} alt={product.name} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: 8 }} />
                  <Typography variant="h6" sx={{ marginTop: 2 }}>{product.name}</Typography>
                  <Typography variant="subtitle1">Price: {product.price}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <hr />
      <footer style={{ marginTop: "auto", padding: "20px", backgroundColor: "#f8f8f8" }}>
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" fontFamily="Dancing Script, cursive" sx={{ color: "#333" }}>
                Connect with Us
              </Typography>
              <IconButton color="primary" aria-label="Facebook" component="a" href="https://www.facebook.com/">
                <Facebook />
              </IconButton>
              <IconButton color="primary" aria-label="Twitter" component="a" href="https://twitter.com/">
                <Twitter />
              </IconButton>
              <IconButton color="primary" aria-label="Instagram" component="a" href="https://www.instagram.com/">
                <Instagram />
              </IconButton>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" fontFamily="Dancing Script, cursive" sx={{ color: "#333" }}>
                Quick Links
              </Typography>
              <Link color="inherit" href="#">
                Home
              </Link>
              <Link color="inherit" href="#">
                Products
              </Link>
              <Link color="inherit" href="#">
                Contact
              </Link>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  );
}

export default PharmacyWebsite;
    

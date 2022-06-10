import "./App.css";
import ResponsiveAppBar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import IconButton from "@mui/material/IconButton";
import DirectionsIcon from "@mui/icons-material/Directions";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import CardMedia from "@mui/material/CardMedia";
import MankindLogo from "./components/mankind.jpg";
import Abbott from "./components/abbott.jpg";
import Micro from "./components/microlabs.png";
import Sun from "./components/sun.png";
import Usv from "./components/usv.png";
import Lupin from "./components/lupin.png";
import Cipla from "./components/cipla.png";
import Zydus from "./components/zydus.png";
import IndianImm from "./components/indianimmu.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ListItemText } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const Name = "Wholesaler of Monopoly & Critical Care Injectable Products";
const Title = "";
const Contact = "tel:+918077835822";
const Location = "https://goo.gl/maps/X47kCtxLbFeNnRYu7";
const WALink = "https://wa.me/+918077835822";
const Email = "mailto:shkrishent@gmail.com";
const saltCardHead = "Monopoly Injectable Available";
const enqCardHead = "Product Enquiry";

const salts = [
  "Anti - Rabies Vaccine",
  "Erythroprotein 2K/4K/10K PFS",
  "Meropenum 1g",
  "Pipercilin + Tazobactum 4.5g/2.25g",
  "Ceftrixzone 1g + Sulbactum 500mg",
  "Amoxycillin + Clauvulanic Acid 1.2g",
  "Esomeprazole inj",
  "N - Acetylcysteine 2/5 mL",
  "Citicoline 2/4 mL inj",
  "Amikacin 500mg",
  "Doxycycline inj",
  "Enoxaparin 40/60mg PFS",
  "Glutathione 600mg",
  "Iron Sucrose inj",
  "Labetalol 5mg",
  "L - ornithine-laspartate infusion",
  "Methylcobalamine 1500/2500",
  "Methylprednisolone 40/125/500mg/1g",
  "Nandrolone 50mg",
  "Noradrenaline 4mg/2mL",
  "Nimodipine infusion 10mg/50mL",
  "Piracetam 60mL/15mL",
  "Thiamine 200mg",
  "Tranexamic inj 500mg/5mL",
  "Vitamin K inj",
  "Clindamycin inj",
  "Paracetamol infusion",
  "Ofloxacin infusion",
  "Levofloxacin infusion",
  "Tigecycline 50mg",
  "Moxifloxacin infusion",
  "Human Albumin",
  "Amino Acid",
  "Hydroxyprogesterone 250/500mg",
  "Ondesetron inj",
  "Drotavarine inj",
  "Diclofenac inj",
  "Levosulpiride inj"
];

const cardSalt = (
  <React.Fragment>
    <CardContent>
        <Typography variant="h5" component="div">
          {saltCardHead}
        </Typography>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <List>
        {
            salts.map((salt) => {
              return (
                <ListItem>
                  <ListItemText primary={salt} />
                </ListItem>
              );
            })
        }
      </List>
    </Box>
    </CardContent>
  </React.Fragment>
);

const cardAbout = (
  <React.Fragment>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <CardContent>
        <Typography variant="h4" component="div">
          {Name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {Title}
        </Typography>
        <Typography variant="body1">
          <ul>
            <li>Deals in all kinds of medicines and pharmaceuticals. </li>

            <li>All the medicines are available at competitive rates.</li>

            <li>All major pharmaceutical companies are available here.</li>
            <ul>
              <li>Indian Immunologicals Limited</li>
              <li>Cipla</li>
              <li>Sun Pharma</li>
              <li>Abbott</li>
              <li>Mankind</li>
              <li>Alkem</li>
              <li>Lupin</li>
              <li>Zydus Cadila</li>
              <li>Torrent Pharma</li>
              <li>USV</li>
              <li>Dr. Reddy</li>
            </ul>
          </ul>
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="call" href={Contact}>
          <LocalPhoneIcon />
        </IconButton>
        <IconButton aria-label="directions" href={Location}>
          <DirectionsIcon />
        </IconButton>
        <IconButton aria-label="whatsapp" href={WALink}>
          <WhatsAppIcon />
        </IconButton>
        <IconButton aria-label="email" href={Email}>
          <EmailIcon />
        </IconButton>
      </CardActions>
    </Box>
  </React.Fragment>
);

const cardBrands = (
  <React.Fragment>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          Brands
        </Typography>

        <CardMedia
          component="img"
          image={IndianImm}
          alt="Indian Immunologicals Limited"
        ></CardMedia>

        <CardMedia
          component="img"
          image={MankindLogo}
          alt="mankind pharma"
        ></CardMedia>

        <CardMedia
          component="img"
          image={Abbott}
          alt="abbott pharma"
        ></CardMedia>
        <CardMedia component="img" image={Micro} alt="micro labs"></CardMedia>
        <CardMedia component="img" image={Sun} alt="sun pharma"></CardMedia>
        <CardMedia component="img" image={Usv} alt="usv pharma"></CardMedia>
        <CardMedia component="img" image={Lupin} alt="lupin pharma"></CardMedia>
        <CardMedia component="img" image={Cipla} alt="cipla pharma"></CardMedia>
        <CardMedia
          component="img"
          image={Zydus}
          alt="Zydus Cadila pharma"
        ></CardMedia>
      </CardContent>
    </Box>
  </React.Fragment>
);
const cardBank = (
  <React.Fragment>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          Bank Details
        </Typography>
        <br />
        <Typography variant="body1">
          Bank Name: <b>Canara Bank</b>
          <br />
          Account Number: <b>87251010002727</b>
          <br />
          IFSC Code: <b>CNRB0018725</b>
          <br />
          UPI ID: <b>8077835822@upi</b>
        </Typography>
      </CardContent>
    </Box>
  </React.Fragment>
);
const cardEnq = (
  <React.Fragment>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {enqCardHead}
        </Typography>
        <br />
        <Typography variant="body1">
          <form
            name="enquiry"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="enquiry" />
            <p>
              <TextField
                required
                id="outlined-required"
                label="Name"
                name="name"
                margin="normal"
              />
            </p>
            <p>
              <TextField
                required
                id="outlined-required"
                label="Phone Number"
                type="number"
                name="phone"
                margin="normal"
              />
            </p>
            <p>
              <TextField
                id="outlined"
                label="Email"
                name="email"
                type="email"
                margin="normal"
              />
            </p>
            <p>
              <TextField
                required
                id="outlined-textarea-required"
                label="Message"
                name="message"
                rows={4}
                multiline
                margin="normal"
              />
            </p>
            <p>
              <Button variant="contained" type="submit" margin="normal">
                Send
              </Button>
            </p>
          </form>
        </Typography>
      </CardContent>
    </Box>
  </React.Fragment>
);
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ResponsiveAppBar></ResponsiveAppBar>
        </header>
        <div className="App-body">
          <div id="about">
            <Box sx={{ minWidth: 275, margin: 5 }}>
              <Card variant="outlined">{cardAbout}</Card>
            </Box>
          </div>
          <div id="salts">
            <Box sx={{ minWidth: 275, margin: 5 }}>
              <Card variant="outlined">{cardSalt}</Card>
            </Box>
          </div>
          <div id="brands">
            <Box sx={{ minWidth: 275, margin: 5 }}>
              <Card variant="outlined">{cardBrands}</Card>
            </Box>
          </div>
          <div id="bank">
            <Box sx={{ minWidth: 275, margin: 5 }}>
              <Card variant="outlined">{cardBank}</Card>
            </Box>
          </div>
          <div id="enq">
            <Box sx={{ minWidth: 275, margin: 5 }}>
              <Card variant="outlined">{cardEnq}</Card>
            </Box>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

import { Autocomplete, Button, Card, CardActions, CardContent, CardMedia, Chip, Container, Grid, InputAdornment, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Paper, Stack, TextField, Typography } from "@mui/material"
import React from "react";
import Car from "../../assets/car/car_01.svg";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { Link } from "react-router-dom";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
const top100Films = [
  {
    "label": "The Shawshank Redemption",
    "year": 1994
  },
  {
    "label": "The Godfather",
    "year": 1972
  },
  {
    "label": "The Godfather: Part II",
    "year": 1974
  },
  {
    "label": "The Dark Knight",
    "year": 2008
  },
  {
    "label": "12 Angry Men",
    "year": 1957
  },
  {
    "label": "Schindler's List",
    "year": 1993
  },
  {
    "label": "Pulp Fiction",
    "year": 1994
  },
  {
    "label": "The Lord of the Rings: The Return of the King",
    "year": 2003
  },
  {
    "label": "The Good, the Bad and the Ugly",
    "year": 1966
  },
  {
    "label": "Fight Club",
    "year": 1999
  },
  {
    "label": "The Lord of the Rings: The Fellowship of the Ring",
    "year": 2001
  },
  {
    "label": "Star Wars: Episode V - The Empire Strikes Back",
    "year": 1980
  },
  {
    "label": "Forrest Gump",
    "year": 1994
  },
  {
    "label": "Inception",
    "year": 2010
  },
  {
    "label": "The Lord of the Rings: The Two Towers",
    "year": 2002
  },
  {
    "label": "One Flew Over the Cuckoo's Nest",
    "year": 1975
  },
  {
    "label": "Goodfellas",
    "year": 1990
  },
  {
    "label": "The Matrix",
    "year": 1999
  },
  {
    "label": "Seven Samurai",
    "year": 1954
  },
  {
    "label": "Star Wars: Episode IV - A New Hope",
    "year": 1977
  },
  {
    "label": "City of God",
    "year": 2002
  },
  {
    "label": "Se7en",
    "year": 1995
  },
  {
    "label": "The Silence of the Lambs",
    "year": 1991
  },
  {
    "label": "It's a Wonderful Life",
    "year": 1946
  },
  {
    "label": "Life Is Beautiful",
    "year": 1997
  },
  {
    "label": "The Usual Suspects",
    "year": 1995
  },
  {
    "label": "Léon: The Professional",
    "year": 1994
  },
  {
    "label": "Spirited Away",
    "year": 2001
  },
  {
    "label": "Saving Private Ryan",
    "year": 1998
  },
  {
    "label": "Once Upon a Time in the West",
    "year": 1968
  },
  {
    "label": "American History X",
    "year": 1998
  },
  {
    "label": "Interstellar",
    "year": 2014
  },
  {
    "label": "Casablanca",
    "year": 1942
  },
  {
    "label": "City Lights",
    "year": 1931
  },
  {
    "label": "Psycho",
    "year": 1960
  },
  {
    "label": "The Green Mile",
    "year": 1999
  },
  {
    "label": "The Intouchables",
    "year": 2011
  },
  {
    "label": "Modern Times",
    "year": 1936
  },
  {
    "label": "Raiders of the Lost Ark",
    "year": 1981
  },
  {
    "label": "Rear Window",
    "year": 1954
  },
  {
    "label": "The Pianist",
    "year": 2002
  },
  {
    "label": "The Departed",
    "year": 2006
  },
  {
    "label": "Terminator 2: Judgment Day",
    "year": 1991
  },
  {
    "label": "Back to the Future",
    "year": 1985
  },
  {
    "label": "Whiplash",
    "year": 2014
  },
  {
    "label": "Gladiator",
    "year": 2000
  },
  {
    "label": "Memento",
    "year": 2000
  },
  {
    "label": "The Prestige",
    "year": 2006
  },
  {
    "label": "The Lion King",
    "year": 1994
  },
  {
    "label": "Apocalypse Now",
    "year": 1979
  },
  {
    "label": "Alien",
    "year": 1979
  },
  {
    "label": "Sunset Boulevard",
    "year": 1950
  },
  {
    "label": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    "year": 1964
  },
  {
    "label": "The Great Dictator",
    "year": 1940
  },
  {
    "label": "Cinema Paradiso",
    "year": 1988
  },
  {
    "label": "The Lives of Others",
    "year": 2006
  },
  {
    "label": "Grave of the Fireflies",
    "year": 1988
  },
  {
    "label": "Paths of Glory",
    "year": 1957
  },
  {
    "label": "Django Unchained",
    "year": 2012
  },
  {
    "label": "The Shining",
    "year": 1980
  },
  {
    "label": "WALL·E",
    "year": 2008
  },
  {
    "label": "American Beauty",
    "year": 1999
  },
  {
    "label": "The Dark Knight Rises",
    "year": 2012
  },
  {
    "label": "Princess Mononoke",
    "year": 1997
  },
  {
    "label": "Aliens",
    "year": 1986
  },
  {
    "label": "Oldboy",
    "year": 2003
  },
  {
    "label": "Once Upon a Time in America",
    "year": 1984
  },
  {
    "label": "Witness for the Prosecution",
    "year": 1957
  },
  {
    "label": "Das Boot",
    "year": 1981
  },
  {
    "label": "Citizen Kane",
    "year": 1941
  },
  {
    "label": "North by Northwest",
    "year": 1959
  },
  {
    "label": "Vertigo",
    "year": 1958
  },
  {
    "label": "Star Wars: Episode VI - Return of the Jedi",
    "year": 1983
  },
  {
    "label": "Reservoir Dogs",
    "year": 1992
  },
  {
    "label": "Braveheart",
    "year": 1995
  },
  {
    "label": "M",
    "year": 1931
  },
  {
    "label": "Requiem for a Dream",
    "year": 2000
  },
  {
    "label": "Amélie",
    "year": 2001
  },
  {
    "label": "A Clockwork Orange",
    "year": 1971
  },
  {
    "label": "Like Stars on Earth",
    "year": 2007
  },
  {
    "label": "Taxi Driver",
    "year": 1976
  },
  {
    "label": "Lawrence of Arabia",
    "year": 1962
  },
  {
    "label": "Double Indemnity",
    "year": 1944
  },
  {
    "label": "Eternal Sunshine of the Spotless Mind",
    "year": 2004
  },
  {
    "label": "Amadeus",
    "year": 1984
  },
  {
    "label": "To Kill a Mockingbird",
    "year": 1962
  },
  {
    "label": "Toy Story 3",
    "year": 2010
  },
  {
    "label": "Logan",
    "year": 2017
  },
  {
    "label": "Full Metal Jacket",
    "year": 1987
  },
  {
    "label": "Dangal",
    "year": 2016
  },
  {
    "label": "The Sting",
    "year": 1973
  },
  {
    "label": "2001: A Space Odyssey",
    "year": 1968
  },
  {
    "label": "Singin' in the Rain",
    "year": 1952
  },
  {
    "label": "Toy Story",
    "year": 1995
  },
  {
    "label": "Bicycle Thieves",
    "year": 1948
  },
  {
    "label": "The Kid",
    "year": 1921
  },
  {
    "label": "Inglourious Basterds",
    "year": 2009
  },
  {
    "label": "Snatch",
    "year": 2000
  },
  {
    "label": "3 Idiots",
    "year": 2009
  },
  {
    "label": "Monty Python and the Holy Grail",
    "year": 1975
  }
]
const VehicleHome = () => {
  return (
    <Container>
      <Grid container>

        <Grid item xs={6}>
          <CardMedia
            component="img"
            width={194}
            image={Car}
            alt="Paella dish"
          />
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
          {/* <Card sx={{ maxWidth: 500, py: 3 }}>
            <CardContent>
              <Stack sx={{ mb: 3 }}>
                <Typography align='center' gutterBottom variant="h5">Save up to 85%* on car insurance</Typography>
                <Typography align="center" variant="subtitle2">renew in just 2 minutes! </Typography>
              </Stack>
              <TextField fullWidth placeholder="Enter car number" />
            </CardContent>
            <CardActions>
              <Stack sx={{ width: '100%', rowGap: 2 }}>
                <Button variant="contained" fullWidth size="large" endIcon={<ArrowForwardRoundedIcon />}>View Prices</Button>
                <Typography align="center">New car ? <Link to="#">Click here</Link></Typography>
              </Stack>
            </CardActions>
          </Card> */}
          {/* <Card sx={{ width: 500 }}>
            <CardContent>
              <Stack sx={{ mb: 3 }}>
                <ListItem dense disableGutters disablePadding>
                  <ListItemIcon><ArrowBackRoundedIcon /></ListItemIcon>
                  <ListItemText secondary={''} primary={'Select city and RTO'}></ListItemText>
                </ListItem>

              </Stack>



              <Autocomplete

                disablePortal
                options={top100Films}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Search City/RTO"  // Set the placeholder here
                    fullWidth
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchRoundedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              <Stack></Stack>


              <List

                subheader={
                  <ListSubheader>
                    Popular
                  </ListSubheader>
                }
              >
                <ListItemButton>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <ListItemText primary="Haryana" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Delhi" />
                </ListItemButton>
                <ListItemButton >
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Hyderabad" />
                </ListItemButton>
              </List>
            </CardContent>
          </Card> */}
          {/* <Card sx={{ width: 500 }}>
            <CardContent>
              <Stack sx={{ mb: 3 }}>
                <ListItem dense disableGutters disablePadding>
                  <ListItemIcon><ArrowBackRoundedIcon /></ListItemIcon>
                  <ListItemText secondary={''} primary={'Select Car Brand'}></ListItemText>
                </ListItem>

              </Stack>



              <Autocomplete

                disablePortal
                options={top100Films}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Select Car Make"  // Set the placeholder here
                    fullWidth
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchRoundedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              <Stack></Stack>


              <List

                subheader={
                  <ListSubheader>
                    Popular car brands
                  </ListSubheader>
                }
              >
                <ListItemButton>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <ListItemText primary="Maruthi" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Hundai" />
                </ListItemButton>
                <ListItemButton >
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Swift" />
                </ListItemButton>
              </List>
            </CardContent>
          </Card> */}
          {/* <Card sx={{ width: 500 }}>
            <CardContent>
              <Stack sx={{ mb: 3 }}>
                <ListItem dense disableGutters disablePadding>
                  <ListItemIcon><ArrowBackRoundedIcon /></ListItemIcon>
                  <ListItemText secondary={''} primary={'Select Car Brand'}></ListItemText>
                </ListItem>

              </Stack>



              <Autocomplete

                disablePortal
                options={top100Films}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Select Car Model"  // Set the placeholder here
                    fullWidth
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchRoundedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              <Stack></Stack>


              <List

                subheader={
                  <ListSubheader>
                    Popular models
                  </ListSubheader>
                }
              >
                <ListItemButton>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <ListItemText primary="ALTO 900" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary="BALENO" />
                </ListItemButton>
                <ListItemButton >
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="ALTO 800" />
                </ListItemButton>
              </List>
            </CardContent>
          </Card> */}


          <Card sx={{ width: 500 }}>
            <CardContent>
              <Stack sx={{ mb: 3 }}>
                <ListItem dense disableGutters disablePadding>
                  <ListItemIcon><ArrowBackRoundedIcon /></ListItemIcon>
                  <ListItemText secondary={''} primary={'Select Car Variant'}></ListItemText>
                </ListItem>

              </Stack>



              <Autocomplete

                disablePortal
                options={top100Films}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Select Car Variant"  // Set the placeholder here
                    fullWidth
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchRoundedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              <Stack direction='row' spacing={2} sx={{ my: 2 }}>
                <Chip clickable label="All" />
                <Chip clickable label="Automatic" />
                <Chip clickable label="Manual" />
              </Stack>


              <List

                subheader={
                  <ListSubheader>
                    Popular models
                  </ListSubheader>
                }
              >
                <ListItemButton>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <ListItemText primary="ALTO 900" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary="BALENO" />
                </ListItemButton>
                <ListItemButton >
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="ALTO 800" />
                </ListItemButton>
              </List>
            </CardContent>
          </Card>

          {/* <Card sx={{ width: 500 }}>
            <CardContent>
              <Stack sx={{ mb: 3 }}>
                <ListItem dense disableGutters disablePadding>
                  <ListItemIcon><ArrowBackRoundedIcon /></ListItemIcon>
                  <ListItemText secondary={''} primary={'Select Fuel Type'}></ListItemText>
                </ListItem>

              </Stack>





              <List
              >
                <ListItemButton>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <ListItemText primary="DIESEL" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary="PETROL" />
                </ListItemButton>
                <ListItemButton >
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="CNG" />
                </ListItemButton>
              </List>
            </CardContent>
          </Card> */}
        </Grid>
      </Grid>
    </Container>
  )
}

export default VehicleHome
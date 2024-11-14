import { Box, Button, Grid, List, ListItem, ListItemText, ListSubheader, MenuItem, Stack, TextField, Typography } from "@mui/material"
import React from "react"
import { useTheme } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
const RegisterClaims = () => {
  const theme = useTheme();
  const { control, formState: { errors }, handleSubmit,reset } = useForm();
  
  const onSubmitHandle = (data) => {
    console.log(data);
    reset();

  }

  return (
    <Box mt={3} component='form' onSubmit={handleSubmit(onSubmitHandle)}>
      <ListItem
        disableGutters
        secondaryAction={
          <Stack direction='row' gap={1}>
            <Button size='small' variant='outlined' startIcon={<DownloadRoundedIcon />}>Download</Button>
            <Button size='small' variant='outlined' startIcon={<RemoveRedEyeRoundedIcon />}>Preview</Button>
          </Stack>
        }
      >
        <ListItemText
          primary={<Typography gutterBottom variant='h4'>Register</Typography>}
        />
      </ListItem>

      {/* Personal Details Section */}
      <List sx={{ width: '100%' }} subheader={<ListSubheader>Personal Details</ListSubheader>}>
        <Grid container spacing={2}>
          <Grid item xs={12} mt={2}>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="First Name"
                  error={!!errors.firstName}
                  helperText={errors.firstName ? errors.firstName.message : ''}
                />
              )}
              rules={{ required: "First Name is required" }} // Validation rule
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Last Name"
                  error={!!errors.lastName}
                  helperText={errors.lastName ? errors.lastName.message : ''}
                />
              )}
              rules={{ required: "Last Name is required" }}
            />
          </Grid>

          <Grid item xs={6}>
            <Controller
              name="dob"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  InputLabelProps={{ shrink: true }}
                  type="date"
                  fullWidth
                  label="Date of Birth"
                  error={!!errors.dob}
                  helperText={errors.dob ? errors.dob.message : ''}
                />
              )}
              rules={{ required: "Date of Birth is required" }}
            />
          </Grid>

          <Grid item xs={6}>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  fullWidth
                  label="Gender"
                  error={!!errors.gender}
                  helperText={errors.gender ? errors.gender.message : ''}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </TextField>
              )}
              rules={{ required: "Gender is required" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  inputMode="numeric"
                  fullWidth
                  label="Phone"
                  error={!!errors.phone}
                  helperText={errors.phone ? errors.phone.message : ''}
                />
              )}
              rules={{ required: "Phone number is required" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Email"
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ''}
                />
              )}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                  message: "Invalid email address"
                }
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Controller
              name="streetAddress"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Street Address"
                  error={!!errors.streetAddress}
                  helperText={errors.streetAddress ? errors.streetAddress.message : ''}
                />
              )}
              rules={{ required: "Street Address is required" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="City"
                  error={!!errors.city}
                  helperText={errors.city ? errors.city.message : ''}
                />
              )}
              rules={{ required: "City is required" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="State"
                  error={!!errors.state}
                  helperText={errors.state ? errors.state.message : ''}
                />
              )}
              rules={{ required: "State is required" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Controller
              name="pincode"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Pincode"
                  error={!!errors.pincode}
                  helperText={errors.pincode ? errors.pincode.message : ''}
                />
              )}
              rules={{ required: "Pincode is required" }}
            />
          </Grid>
        </Grid>
      </List>

      {/* Policy Details Section */}
      <List sx={{ width: '100%' }} subheader={<ListSubheader>Policy Details</ListSubheader>}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name="policyNumber"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Policy Number"
                  error={!!errors.policyNumber}
                  helperText={errors.policyNumber ? errors.policyNumber.message : ''}
                />
              )}
              rules={{ required: "Policy Number is required" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Controller
              name="policyType"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  fullWidth
                  label="Policy Type"
                  error={!!errors.policyType}
                  helperText={errors.policyType ? errors.policyType.message : ''}
                >
                  <MenuItem value="Life Insurance">Life Insurance</MenuItem>
                  <MenuItem value="Health Insurance">Health Insurance</MenuItem>
                  <MenuItem value="Property Insurance">Property Insurance</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>
              )}
              rules={{ required: "Policy Type is required" }}
            />
          </Grid>

          <Grid item xs={6}>
            <Controller
              name="policyDate"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  InputLabelProps={{ shrink: true }}
                  type="date"
                  fullWidth
                  label="Date of Policy Issuance"
                  error={!!errors.policyDate}
                  helperText={errors.policyDate ? errors.policyDate.message : ''}
                />
              )}
              rules={{ required: "Policy Date is required" }}
            />
          </Grid>
        </Grid>
      </List>

      {/* Claim Details Section */}
      <List sx={{ width: '100%' }} subheader={<ListSubheader>Claim Details</ListSubheader>}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name="claimNature"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  fullWidth
                  label="Nature of Claim"
                  error={!!errors.claimNature}
                  helperText={errors.claimNature ? errors.claimNature.message : ''}
                >
                  <MenuItem value="Accident">Accident</MenuItem>
                  <MenuItem value="Illness">Illness</MenuItem>
                  <MenuItem value="Property Damage">Property Damage</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>
              )}
              rules={{ required: "Nature of Claim is required" }}
            />
          </Grid>

          <Grid item xs={6}>
            <Controller
              name="incidentDate"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  InputLabelProps={{ shrink: true }}
                  type="date"
                  fullWidth
                  label="Date of Incident"
                  error={!!errors.incidentDate}
                  helperText={errors.incidentDate ? errors.incidentDate.message : ''}
                />
              )}
              rules={{ required: "Date of Incident is required" }}
            />
          </Grid>

          <Grid item xs={6}>
            <Controller
              name="supportDocs"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  InputLabelProps={{ shrink: true }}
                  type="file"
                  fullWidth
                  label="Support Documents"
                  error={!!errors.supportDocs}
                  helperText={errors.supportDocs ? errors.supportDocs.message : ''}
                />
              )}
              rules={{ required: "Support Documents are required" }}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="incidentDescription"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Brief Description of the Incident"
                  error={!!errors.incidentDescription}
                  helperText={errors.incidentDescription ? errors.incidentDescription.message : ''}
                />
              )}
              rules={{ required: "Description of the Incident is required" }}
            />
          </Grid>
        </Grid>
      </List>

      {/* Additional Information Section */}
      <List sx={{ width: '100%' }} subheader={<ListSubheader>Additional Information</ListSubheader>}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name="additionalInfo"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  rows={4}
                  fullWidth
                  multiline
                  label="Additional Information"
                  error={!!errors.additionalInfo}
                  helperText={errors.additionalInfo ? errors.additionalInfo.message : ''}
                />
              )}
            />
          </Grid>
        </Grid>
      </List>

      <Button fullWidth variant="contained" type="submit">Register</Button>
    </Box>
  );
}

export default RegisterClaims;

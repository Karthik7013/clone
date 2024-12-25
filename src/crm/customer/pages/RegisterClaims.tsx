import { Box, Button, CircularProgress, Grid, List, ListItem, ListItemText, ListSubheader, MenuItem, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import { useDispatch, useSelector } from "react-redux";
import AlertBox from "../../../Framework/components/AlertBox";
import { AppDispatch, RootState } from "../../../redux/store";
import { closeAlert } from "../../../redux/slice/dashboardSlice";
import { registerCustomerPolicies } from "../../../redux/slice/dashboardSlice";

const RegisterClaims = () => {
  const loading = useSelector((state: RootState) => state.dashboard.registerClaim.loading)
  const { control, formState: { errors }, handleSubmit, reset } = useForm();
  const dispatch: AppDispatch = useDispatch();
  const closeAlertHandle = () => dispatch(closeAlert());
  const onSubmitHandle = (data) => {
    console.log(data)
    dispatch(registerCustomerPolicies(data))
    reset();
  }
  const alert = useSelector((state: RootState) => state.dashboard.registerClaim.alert)

  return (
    <Box mt={3} component='form' onSubmit={handleSubmit(onSubmitHandle)}>
      <AlertBox alert={alert} onClose={closeAlertHandle} />
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
          <Grid item xs={12} md={6}>
            <Controller
              defaultValue=""
              name="first_name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="First Name"
                  error={!!errors.first_name}
                />
              )}
              rules={{ required: "First Name is required" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Controller
              name="last_name"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Last Name"
                  error={!!errors.last_name}
                />
              )}
              rules={{ required: "Last Name is required" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Controller
              defaultValue=""
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
                />
              )}
              rules={{ required: "Date of Birth is required" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Controller
              defaultValue=""
              name="gender"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  fullWidth
                  label="Gender"
                  error={!!errors.gender}
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
              defaultValue=""
              name="phone"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  inputMode="numeric"
                  fullWidth
                  label="Phone"
                  error={!!errors.phone}
                />
              )}
              rules={{ required: "Phone number is required", pattern: { value: /^[0-9]{10}$/, message: "Invalid phone number" } }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Controller
              defaultValue=""
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Email"
                  error={!!errors.email}
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
              defaultValue=""
              name="address"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Street Address"
                  error={!!errors.address}
                />
              )}
              rules={{ required: "Street Address is required" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Controller
              defaultValue=""
              name="city"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="City"
                  error={!!errors.city}
                />
              )}
              rules={{ required: "City is required" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Controller
              defaultValue=""
              name="state"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="State"
                  error={!!errors.state}
                />
              )}
              rules={{ required: "State is required" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Controller
              defaultValue=""
              name="pincode"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Pincode"
                  error={!!errors.pincode}
                />
              )}
              rules={{ required: "Pincode is required", pattern: { value: /^[0-9]{6}$/, message: "Invalid Pincode" } }}
            />
          </Grid>
        </Grid>
      </List>

      {/* Policy Details Section */}
      <List sx={{ width: '100%' }} subheader={<ListSubheader>Policy Details</ListSubheader>}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              defaultValue=""
              name="policy_number"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Policy Number"
                  error={!!errors.policy_number}
                />
              )}
              rules={{ required: "Policy Number is required" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Controller
              defaultValue=""
              name="policy_type"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  fullWidth
                  label="Policy Type"
                  error={!!errors.policy_type}
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
              defaultValue=""
              name="policy_issue_date"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  InputLabelProps={{ shrink: true }}
                  type="date"
                  fullWidth
                  label="Date of Policy Issuance"
                  error={!!errors.policy_issue_date}
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
              defaultValue=""
              name="claim_nature"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  fullWidth
                  label="Nature of Claim"
                  error={!!errors.claim_nature}
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
              defaultValue=""
              name="incident_date"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  InputLabelProps={{ shrink: true }}
                  type="date"
                  fullWidth
                  label="Date of Incident"
                  error={!!errors.incident_date}
                />
              )}
              rules={{ required: "Date of Incident is required" }}
            />
          </Grid>

          <Grid item xs={6}>
            <Controller
              defaultValue=""
              name="support_docs"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  InputLabelProps={{ shrink: true }}
                  type="file"
                  fullWidth
                  label="Support Documents"
                  error={!!errors.support_docs}
                />
              )}
              rules={{ required: "Support Documents are required" }}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              defaultValue=""
              name="description"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Brief Description of the Incident"
                  error={!!errors.description}
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
              defaultValue=""
              name="additional_description"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  rows={4}
                  fullWidth
                  multiline
                  label="Additional Information"
                  error={!!errors.additional_description}
                />
              )}
            />
          </Grid>
        </Grid>
      </List>

      <Button disabled={loading} fullWidth variant="contained" type="submit">{loading ? <CircularProgress color="primary" size={24} /> : "Register"}</Button>

    </Box>
  );
}

export default RegisterClaims;

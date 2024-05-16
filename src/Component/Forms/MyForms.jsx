import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Alert, Box, Button, IconButton, InputAdornment, MenuItem, Snackbar, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Slide from "@mui/material/Slide";
const MyForms = ({ open, screenWidth }) => {
    const [snapOpen, setsnapOpen] = useState(false);

    const handleClick = () => {
      setsnapOpen(true);
    };

    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }

      setsnapOpen(false);
    };
  // =========================================
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () =>{
    console.log("jhusdfnsdfsdd")
    handleClick();
  };
    const currencies = [
      {
        label: "Admin",
        value: "Admin",
      },
      {
        label: "Manager",
        value: "Manager",
      },
      {
        label: "User",
        value: "User",
      },
    ];
// ===============================
const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/; 
  
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
// ================================================================
   const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: 645,
        maxWidth: `${
          screenWidth < 600
            ? "95%"
            : open
            ? "calc(100% - 50px)"
            : `calc(100% - 125px)`
        }`,
        margin: "auto",
        mr: `${screenWidth < 600 ? "auto" : !open ? "30px" : "auto"}`,
      }}
    >
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        autoComplete="false"
      >
        <Stack direction={"row"} sx={{ gap: 2 }}>
          <TextField
            error={errors.FirstName}
            helperText={
              errors.FirstName
                ? `This field is required , min 3 and max 20.`
                : null
            }
            {...register("FirstName", {
              required: true,
              minLength: 3,
              maxLength: 20,
            })}
            sx={{ flex: 1 }}
            label="First Name"
            variant="filled"
          />
          <TextField
            error={errors.LastName}
            helperText={
              errors.LastName
                ? `This field is required , min 3 and max 20.`
                : null
            }
            {...register("LastName", {
              required: true,
              minLength: 3,
              maxLength: 20,
            })}
            sx={{ flex: 1 }}
            label="Last Name"
            variant="filled"
          />
        </Stack>
        <TextField
          error={errors.Email}
          helperText={
            errors.Email ? `Please enter a valid email address.` : null
          }
          {...register("Email", {
            required: true,
            pattern: regEmail,
          })}
          label="Email"
          variant="filled"
        />
        <TextField
          error={errors.phone}
          helperText={
            errors.phone ? `Please enter a valid mobile number.` : null
          }
          {...register("phone", {
            required: true,
            pattern: phoneRegExp,
          })}
          label="Contact Number"
          variant="filled"
        />
        <TextField
          type={showPassword ? "text" : "password"}
          error={errors.pass}
          helperText={
            errors.pass
              ? errors.pass.type === "required"
                ? "This field is required."
                : errors.pass.type === "pattern"
                ? "Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters."
                : null
              : null
          }
          {...register("pass", {
            required: true,
            pattern: regPassword,
          })}
          label="Password"
          variant="filled"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField label="Address 1" variant="filled" />
        <TextField label="Address 2" variant="filled" />
        <TextField
          id="outlined-select-currency"
          select
          label="select role"
          defaultValue="User"
          variant="filled"
        >
          {currencies.map((item) => {
            return (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            );
          })}
        </TextField>

        <Box sx={{ textAlign: "right" }}>
          <Button type="submit" variant="contained">
            Create New User
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={snapOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent={(props) => <Slide {...props} direction="left" />}
      >
        <Alert
          onClose={handleClose}
          severity="info"
          variant="filled"
          sx={{ width: "100%" }}
        >
          This is a success Alert inside a Snackbar!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default MyForms;

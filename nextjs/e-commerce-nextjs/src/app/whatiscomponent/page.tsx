"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import ButtonUsage from "@/components/mui/button/button";
import BasicTextFields from "@/components/mui/textfield/textinput-basic";
import ValidationTextFields from "@/components/mui/textfield/textinput-validation";
import SelectTextFields from "@/components/mui/textfield/select-textfield";
import TemporaryDrawer from "@/components/mui/drawer/drawer";
import ResponsiveAppBar from "@/components/mui/appBar/appbar";
import BasicCard from "@/components/mui/card/basic-card-nopic";
import OutlinedCard from "@/components/mui/card/outline-card-nopic";
import MediaCard from "@/components/mui/card/media-card";
import AlertDialog from "@/components/mui/dialog/dialog";
import CustomSnackbar from "@/components/mui/snackbar/snackbar";
import CustomPaginationTable from "@/components/mui/table/table-pagination";
import CustomBreadcrumb from "@/components/mui/breadcrumb/basic-breadcrumb";

export default function WhatiscomponentPage() {
  const [text, setText] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [validationError, setValidationError] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");

  const handleValidationChange = (value: string) => {
    if (!/^\d+$/.test(value)) {
      setValidationError("Only numbers are allowed");
    } else {
      setValidationError("");
    }
  };
  useEffect(() => {
    handleValidationChange(phone);
  }, [phone]);

  return (
    <Box>
      <ResponsiveAppBar
        logo="MY LOGO"
        pages={["Home", "About", "Contact"]}
        settings={["Profile", "Logout"]}
        avatarSrc="/static/images/avatar/2.jpg"
        onPageClick={(page) => alert(`ไปหน้า ${page}`)}
        onSettingClick={(setting) => alert(`เลือก ${setting}`)}
      />
        <CustomBreadcrumb
            items={[
                { label: "Home", href: "/" },
                { label: "Components", href: "/components" },
                { label: "What is Component?", href: "/components/whatiscomponent" },
            ]}
        />
      <Box sx={{ p: 3 }}>
        <Grid container spacing={2}>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" gutterBottom>
              Text Input
            </Typography>
            <BasicTextFields
              value={text}
              variant="standard"
              label="name"
              id="name-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setText(e.target.value)
              }
            />
            <Typography variant="body2" sx={{ mt: 1 }}>
              Input Value: {text}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" gutterBottom>
              Validation Input
            </Typography>
            <ValidationTextFields
              value={phone}
              label="phone number"
              variant="outlined"
              id="validation-input"
              inputError={validationError}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPhone(e.target.value)
              }
            />
            <Typography variant="body2" sx={{ mt: 1 }}>
              Phone Value: {phone}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" gutterBottom>
              Select Input
            </Typography>
            <SelectTextFields
              label="เลือกภาษา"
              variant="outlined"
              id="select-language"
              value={selectedOption}
              select={true}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSelectedOption(e.target.value)
              }
              options={[
                { value: "typescript", label: "TypeScript" },
                { value: "javascript", label: "JavaScript" },
                { value: "python", label: "Python" },
              ]}
            />
            <Typography variant="body2" sx={{ mt: 1 }}>
              Selected: {selectedOption}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" gutterBottom>
              Button Usage
            </Typography>
            <ButtonUsage />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Typography variant="h6" gutterBottom>
              Drawer Menu
            </Typography>
            <TemporaryDrawer
              buttonLabel="เมนู"
              menuGroups={[
                [
                  { label: "Inbox" },
                  { label: "Starred" },
                  { label: "Send email" },
                  { label: "Drafts" },
                ],
                [{ label: "All mail" }, { label: "Trash" }, { label: "Spam" }],
              ]}
            />
          </Grid>

   
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Basic Card
            </Typography>
            <BasicCard
              backgroundColor="#ffe4e6"
              textColor="#be185d"
              title="Custom Card"
              subtitle="noun"
              description="custom description"
              buttonLabel="Click Me"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Outlined Card
            </Typography>
            <OutlinedCard
              borderColor="#e11d48"
              borderWidth={3}
              title="Custom Card"
              subtitle="noun"
              description="custom description"
              buttonLabel="Click Me"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Media Card
            </Typography>
            <MediaCard
              image="https://picsum.photos/id/237/400/300"
              imageHeight={180}
              title="Dog"
              description="This is a dog card."
              button1Label="Share"
              button2Label="Details"
              onButton1Click={() => alert("แชร์")}
              onButton2Click={() => alert("ดูรายละเอียด")}
            />
          </Grid>

   
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" gutterBottom>
              Alert Dialog
            </Typography>
            <Button variant="outlined" onClick={() => setOpen(true)}>
              Open alert dialog
            </Button>
            <AlertDialog
              open={open}
              onClose={() => setOpen(false)}
              onฺฺButtonOne={() => setResult("Agreed")}
              onฺฺButtonTwo={() => setResult("Disagreed")}
              title="ยืนยันการทำรายการ"
              description="คุณต้องการดำเนินการต่อหรือไม่?"
            />
            <Typography variant="body2" sx={{ mt: 1 }}>
              ผลลัพธ์จาก Dialog: {result}
            </Typography>
          </Grid>

         
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" gutterBottom>
              Snackbar
            </Typography>
            <Button variant="contained" onClick={() => setOpenSnackbar(true)}>
              Show Snackbar
            </Button>
            <CustomSnackbar
              open={openSnackbar}
              onClose={() => setOpenSnackbar(false)}
              message="ข้อความที่ปรับได้"
              vertical="bottom"
              horizontal="right"
            />
          </Grid>

         
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" gutterBottom>
              Typography
            </Typography>
            <Typography color="primary">ข้อความสีหลัก</Typography>
            <Typography sx={{ color: "#e11d48" }}>ข้อความสีแดง</Typography>
          </Grid>

      
          <Grid size={{ xs: 12 }}>
            <Typography variant="h6" gutterBottom>
              Table
            </Typography>
            <CustomPaginationTable
              columns={[
                { label: "Name", key: "name" },
                { label: "Calories", key: "calories", align: "right" },
                { label: "Fat", key: "fat", align: "right" },
              ]}
              rows={[
                { name: "Cupcake", calories: 305, fat: 3.7 },
                { name: "Donut", calories: 452, fat: 25.0 },
                { name: "Eclair", calories: 262, fat: 16.0 },
              ]}
              tableLabel="My Table"
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

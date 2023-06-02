import React from "react";
import Head from "next/head";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  TextareaAutosize,
} from "@mui/material";
import { useFormik } from 'formik';
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { CompaniesSearch } from "src/sections/companies/companies-search";
import * as Yup from 'yup';
import { CompanyCard } from "src/sections/companies/company-card";

const companies = [
  // Your company data...
];

const Page = () => {
  const formik = useFormik({
    initialValues: {
      question: '',
    },
    validationSchema: Yup.object({
      question: Yup
        .string()
        .required('Question is required'),
    }),
    onSubmit: async (values, helpers) => {
      try {
        await auth.signUp(values.email, values.name, values.password);
        router.push('/');
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });
  return (
  <>
    <Head>
      <title>Companies | Devias Kit</title>
    </Head>
    <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Stack direction="row" justifyContent="space-between" spacing={4}>
            <Stack spacing={1}>
              <Typography variant="h4">Legal Help</Typography>
            </Stack>
            <div>
              <Button
                variant="contained"
              >
                Ask
              </Button>
            </div>
          </Stack>
          <CompaniesSearch name="email" />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder=""
          />
        </Stack>
      </Container>
    </Box>
  </>
  )
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;

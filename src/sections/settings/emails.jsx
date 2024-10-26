import * as Yup from 'yup';
import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react';
import trash from '@iconify/icons-eva/trash-2-outline';
import addItem from '@iconify/icons-eva/plus-circle-outline';
import { Form, Field, Formik, FieldArray, ErrorMessage } from 'formik';

import { Box, Card, Radio, Button, TextField, Container, IconButton, FormControlLabel } from '@mui/material';

import useDialogState from 'src/routes/hooks/useSharedData';

import axiosInstance from 'src/utils/axios';

import { emailEndpoint } from 'src/configs/endpoints';

import EmailToken from './token';
import AlertDialog from '../modal/modal';
import { EmailTokenModal } from '../profile/view/constant';


const Emails = () => {
    const [primaryEmailIndex, setPrimaryEmailIndex] = useState(0);
    const [emails, setEmails] = useState([]);
    const [currentEmailId, setCurrentEmailId] = useState(null);
    const { openDialog, closeDialog, isDialogOpen } = useDialogState();
    // console.log(isDialogOpen());qlCzGr
    // Fetch emails on component mount
    useEffect(() => {
            // openDialog(EmailTokenModal)
        const fetchEmails = async () => {
            try {
                const response = await axiosInstance.get(emailEndpoint.emails);
                console.log(response.data);
                const index = response.data.findIndex(e => e.primary)
                setPrimaryEmailIndex(index)
                setEmails(response.data);
            } catch (error) {
                console.error('Error fetching emails:', error);
            }
        };
        fetchEmails();
    }, [openDialog]);
    console.log(currentEmailId);
    // Validation schema
    const validationSchema = Yup.object({
        emails: Yup.array()
          .of(
            Yup.string()
              .email('Invalid email address')
              .required('Email is required')
          )
          .required('Must have emails')
          .min(1, 'Minimum of 1 email required'),
    });

    // Add a new email
    const addEmail = async (email) => {
        try {
            const response = await axiosInstance.post(emailEndpoint.emails, { email: { address: email } });
            setEmails([...emails, response.data.email]); // Assuming response.data is the new email object
            console.log(response.data.email);
            setCurrentEmailId(response.data.email.id);
            openDialog(EmailTokenModal)
        } catch (error) {
            console.error('Error adding email:', error);
        }
    };
    
    // Set primary email
    const setPrimaryEmail = async (emailId) => {
        try {
            await axiosInstance.patch(`${emailEndpoint.emails}/${emailId}/set_primary`);
        } catch (error) {
            if(error.response.data.error === 'Email is not verified.'){
                openDialog(EmailTokenModal)
            }
            console.error('Error setting primary email:', error);
        }
    };

    // Delete email
    const deleteEmail = async (emailId) => {
        console.log(emailId);
        try {
            await axiosInstance.delete(`${emailEndpoint.emails}/${emailId}`);
            setEmails(emails.filter((email) => email.id !== emailId)); // Assuming each email has an id
        } catch (error) {
            console.error('Error deleting email:', error);
        }
    };
    const verifyOtp = async (token) => {
        console.log(token);
        // ylWmI7
        try {
            if(token.length === 6){
                await axiosInstance.post(`${emailEndpoint.emails}/${currentEmailId}/verify`, { token });
                closeDialog(EmailTokenModal);

            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
        }
    };

    return (
      <>
        <Card sx={{ px: 0 }}>
            <Container maxWidth="md">
                <Box mt={4} py={2}>
                    <Formik
                        initialValues={{ emails: emails.map(email => email.address) }} // Initialize with existing emails
                        enableReinitialize
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            // Handle submit to add new email
                            const newEmail = values.emails[values.emails.length - 1];
                            if (newEmail) {
                                addEmail(newEmail);
                            }
                        }}
                    >
                        {({ values, errors, touched }) => (
                            <Form>
                                <FieldArray name="emails">
                                    {({ insert, remove, push }) => (
                                        <div>
                                            {values.emails.length > 0 &&
                                                values.emails.map((email, index) => (
                                                    <Box key={index} display="flex" alignItems="left" mb={2}>
                                                        <Field
                                                            name={`emails.${index}`}
                                                            as={TextField}
                                                            label={`Email `}
                                                            variant="outlined"
                                                            style={{ width: '80%' }}
                                                            error={touched.emails && touched.emails[index] && Boolean(errors.emails && errors.emails[index])}
                                                            helperText={<ErrorMessage name={`emails.${index}`} />}
                                                        />
                                                        <IconButton
                                                            onClick={() => deleteEmail(emails[index]?.id)} // Delete email by ID
                                                            disabled={values.emails.length === 1}
                                                        >
                                                            <Icon color="primary" icon={trash} width={20} height={20} />
                                                        </IconButton>
                                                        {values.emails.length - 1 === index && (
                                                            <IconButton
                                                                onClick={() => push('')}
                                                            >
                                                                <Icon color="primary" icon={addItem} width={20} height={20} />
                                                            </IconButton>
                                                        )}
                                                        <FormControlLabel
                                                            control={
                                                                <Radio
                                                                    checked={primaryEmailIndex === index}
                                                                    onChange={() => {
                                                                        setPrimaryEmailIndex(index);
                                                                        setPrimaryEmail(emails[index]?.id); // Set primary email by ID
                                                                    }}
                                                                    value={index}
                                                                    name="primary-email"
                                                                    color="primary"
                                                                />
                                                            }
                                                            sx={{ fontSize: '18px', width: '200px' }}
                                                            label={primaryEmailIndex === index ? "Primary Email" : "Set as Primary"}
                                                            labelPlacement="end"
                                                        />
                                                    </Box>
                                                ))}
                                        </div>
                                    )}
                                </FieldArray>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                >
                                    Submit
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Container>
        </Card>

        <AlertDialog
        handleClose={() =>closeDialog(EmailTokenModal)}
        fullWidth
        maxWidth="sm"
        title="View & Share Request"
        component={<EmailToken onComplete={verifyOtp} />}
        open={isDialogOpen(EmailTokenModal)}
      />
      
      </>
    );
}

export default Emails;

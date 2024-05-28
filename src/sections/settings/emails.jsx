import * as Yup from 'yup';
import { Icon } from '@iconify/react';
import React, { useState } from 'react'
import trash from '@iconify/icons-eva/trash-2-outline'
import addItem from '@iconify/icons-eva/plus-circle-outline'
import {Form, Field, Formik, FieldArray, ErrorMessage } from 'formik';

import { Box, Card, Radio, Button, TextField, Container, IconButton, FormControlLabel } from '@mui/material';

const Emails = () => {
    const [primaryEmailIndex, setPrimaryEmailIndex] = useState(0);
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
      
  return (
    <Card sx={{px: 0}} >
    <Container maxWidth="md">
      <Box mt={4} py={2}  >
        
        <Formik
          initialValues={{ emails: [''] }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log('Form data:', values);
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
                            style={{width: '80%'}}
                            error={touched.emails && touched.emails[index] && Boolean(errors.emails && errors.emails[index])}
                            helperText={<ErrorMessage name={`emails.${index}`} />}
                          />
                          <IconButton
                            onClick={() => remove(index)}
                            disabled={values.emails.length === 1}
                          >
                             <Icon color='primary' icon={trash} width={20} height={20} />
                          </IconButton>
                          {values.emails.length - 1 === index && (
                            <IconButton
                              onClick={() => push('')}
                            >
                               <Icon color='primary' icon={addItem} width={20} height={20} />
                            </IconButton>
                          )}
                          <FormControlLabel
                            control={
                              <Radio
                                checked={primaryEmailIndex === index}
                                onChange={() => setPrimaryEmailIndex(index)}
                                value={index}
                                name="primary-email"
                                color="primary"
                              />
                            }
                            sx={{fontSize: '18px', width: '200px'}}
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
  )
}

export default Emails

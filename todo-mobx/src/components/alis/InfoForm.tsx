import styled from '@emotion/styled';
import {
  Box,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
} from '@mui/material';
import React, { useCallback } from 'react';
import { FieldName, Info, MaskFormat } from '../../data/info_data';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { getFieldState } from '../../utils/getFieldState';
import InputMask from 'react-input-mask';

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-text: center;
`;
const FieldsContainer = styled('div')`
  display: flex;
  flex-direction: row;
`;
type Inputs = {
  typeOfOrg: string;
  bin_iin: string;
  nameOfOrg: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  email: string;
  phone: string;
  status: string;
  main_status: string;
  region: string;
  location: string;
  legal_address: string;
  bank: string;
  bik: string;
  iik: string;
  kbe: string;
};
//{...getFieldState({ fieldState, formState })} {...field}

const RadioComponent = ({ data, fieldState, formState, field }: any) => {
  return (
    <RadioGroup
      {...field}
      {...getFieldState({ fieldState, formState })}
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group">
      {data.label.map((l: any) => (
        <FormControlLabel
          value={l.value}
          key={l.name}
          control={
            <Radio
              sx={{
                color: '#29345240',
                '&.Mui-checked': {
                  color: '#DC1832',
                },
              }}
            />
          }
          label={l.name}
        />
      ))}
    </RadioGroup>
  );
};

let id = 0;
const InfoForm = () => {
  const { handleSubmit, control, getValues } = useForm<Inputs>({
    mode: 'onChange',
    defaultValues: {
      [FieldName.typeOfOrg]: '',
      [FieldName.bin_iin]: '',
      [FieldName.nameOfOrg]: '',
      [FieldName.first_name]: '',
      [FieldName.last_name]: '',
      [FieldName.middle_name]: '',
      [FieldName.email]: '',
      [FieldName.phone]: '',
      [FieldName.status]: '',
      [FieldName.main_status]: '',
      [FieldName.region]: '',
      [FieldName.location]: '',
      [FieldName.legal_address]: '',
      [FieldName.bank]: '',
      [FieldName.bik]: '',
      [FieldName.iik]: '',
      [FieldName.kbe]: '',
    },
  });
  const onSubscribe = () => {
    console.log('data');
    console.log(getValues());
  };
  return (
    <Form onSubmit={handleSubmit(onSubscribe)}>
      {Info.map((item, ind) => (
        <div key={ind + id++}>
          <Typography
            style={{ color: '#002877', fontWeight: '500px', fontSize: '20px', lineHeight: '28px' }}
            align="center"
            variant="h4">
            {item.title}
          </Typography>
          <Box>
            {item.data.map((i, index) => (
              <div key={index + id++}>
                <label>
                  {i.mode ? <span style={{ color: '#DC1832' }}>*</span> : ''}
                  {i.title}
                  {i.mode ? '' : <span style={{ color: '#00000040' }}>(необязательный)</span>}
                </label>
                {typeof i.label === 'string' ? (
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <Controller
                      name={i.name}
                      control={control}
                      render={({ field, fieldState, formState }) =>
                        i.type === 'mask' ? (
                          <InputMask
                            mask={i.mask as MaskFormat}
                            style={{ width: '280px', height: 32 }}
                            {...getFieldState({ fieldState, formState })}
                            {...field}
                          />
                        ) : (
                          <TextField
                            type="text"
                            size="small"
                            style={{ width: '280px', height: 32 }}
                            placeholder={i.label as string}
                            {...getFieldState({ fieldState, formState })}
                            {...field}
                          />
                        )
                      }
                    />
                  </FormControl>
                ) : (
                  <FormControl>
                    <Controller
                      name={i.name}
                      control={control}
                      render={({ field, fieldState, formState }) => (
                        <RadioComponent
                          fieldState={fieldState}
                          field={field}
                          formState={formState}
                          data={i}
                        />
                      )}
                    />
                  </FormControl>
                )}
              </div>
            ))}
          </Box>
        </div>
      ))}
      <div>
        <Button type="submit" style={{ color: '#DC1832' }} variant="outlined">
          Подписать с ЭЦП
        </Button>
        <Button type="submit" style={{ color: '#DC1832' }} variant="contained">
          Подписать с ЭЦП
        </Button>
      </div>
    </Form>
  );
};
export default InfoForm;

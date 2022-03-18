import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from 'reactstrap';
import styled from 'styled-components';

const FormWrapper = styled.div`
  background-color: #cdd0dd;
  margin-top: 20px;
  padding: 40px;
`;

const AddEdit = ({ history, match }) => {
  let params = useParams();
  const isAddMode = !params.id;

  // functions to build form returned by useForm() hook
  const {
    register,
    handleSubmit,
    reset,
    // setValue,
    // getValues,
    errors,
    // formState,
  } = useForm();

  console.log('errors =>', errors);

  const onSubmit = (data) => {
    console.log('data ==>', data);
    return isAddMode ? createUser(data) : updateUser(params.id, data);
  };

  const createUser = (data) => {
    console.log('createUser service initiated...');
  };

  const updateUser = (id, data) => {
    console.log('updateUser service initiated...');
  };

  // useForm registry and validations
  const firstName = register('firstName', { required: true });
  const lastName = register('lastName', { required: true });
  const middleName = register('middleName');
  const dob = register('dob', { required: true });
  const profession = register('profession', { required: true });
  const education = register('education', { required: true });
  const email = register('email', { required: true });
  const whatsappNumber = register('whatsappNumber', { required: true });
  const phoneNumber = register('phoneNumber', { required: true });
  const gender = register('gender', { required: true });
  const basonta = register('basonta', { required: true });
  const pacenta = register('pacenta', { required: true });
  const maritalStatus = register('maritalStatus', { required: true });
  const residence = register('residence', { required: true });
  const nationality = register('nationality', { required: true });

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
        <h3>{isAddMode ? 'New Member' : 'Edit Member'}</h3>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                onChange={firstName.onChange}
                onBlur={firstName.onBlur}
                innerRef={firstName.ref}
                placeholder="First Name"
                type="text"
              />
              {errors?.firstName && (
                <FormFeedback>{errors.firstName?.message}</FormFeedback>
              )}
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                onChange={lastName.onChange}
                onBlur={lastName.onBlur}
                innerRef={lastName.ref}
                placeholder="Last Name"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="middleName">Middle Name</Label>
              <Input
                id="middleName"
                name="middleName"
                onChange={middleName.onChange}
                onBlur={middleName.onBlur}
                innerRef={middleName.ref}
                placeholder="Middle Name"
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="dob">Date of Birth</Label>
              <Input
                id="dob"
                name="dob"
                onChange={dob.onChange}
                onBlur={dob.onBlur}
                innerRef={dob.ref}
                placeholder="dob"
                type="date"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="profession">Profession</Label>
              <Input
                id="profession"
                name="profession"
                onChange={profession.onChange}
                onBlur={profession.onBlur}
                innerRef={profession.ref}
                placeholder="Profession"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="education">Education Level</Label>
              <Input
                id="education"
                name="education"
                onChange={education.onChange}
                onBlur={education.onBlur}
                innerRef={education.ref}
                placeholder="Education"
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                onChange={email.onChange}
                onBlur={email.onBlur}
                innerRef={email.ref}
                placeholder="member@makarioschurch.com"
                type="email"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="whatsappNumber">WhatsApp Number</Label>
              <Input
                id="whatsappNumber"
                name="whatsappNumber"
                onChange={whatsappNumber.onChange}
                onBlur={whatsappNumber.onBlur}
                innerRef={whatsappNumber.ref}
                placeholder="WhatsApp Number"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="whatsappNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                onChange={phoneNumber.onChange}
                onBlur={phoneNumber.onBlur}
                innerRef={phoneNumber.ref}
                placeholder="Phone Number"
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="gender">Gender</Label>
              <Input
                id="gender"
                name="gender"
                onChange={gender.onChange}
                onBlur={gender.onBlur}
                innerRef={gender.ref}
                placeholder="Gender"
                type="select"
              >
                <option>-</option>
                <option>Male</option>
                <option>Female</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="basonta">Basonta</Label>
              <Input
                id="basonta"
                name="basonta"
                onChange={basonta.onChange}
                onBlur={basonta.onBlur}
                innerRef={basonta.ref}
                placeholder="Basonta"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="pacenta">Pacenta</Label>
              <Input
                id="pacenta"
                name="pacenta"
                onChange={pacenta.onChange}
                onBlur={pacenta.onBlur}
                innerRef={pacenta.ref}
                placeholder="Pacenta"
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="residence">Residence</Label>
              <Input
                id="Residence"
                name="residence"
                onChange={residence.onChange}
                onBlur={residence.onBlur}
                innerRef={residence.ref}
                placeholder="Residence"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="maritalStatus">Marital Status</Label>
              <Input
                id="maritalStatus"
                name="maritalStatus"
                onChange={maritalStatus.onChange}
                onBlur={maritalStatus.onBlur}
                innerRef={maritalStatus.ref}
                placeholder="maritalStatus"
                type="select"
              >
                <option>-</option>
                <option>Single</option>
                <option>Married</option>
                <option>Widowed</option>
                <option>Divorced</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="nationality">Nationality</Label>
              <Input
                id="nationality"
                name="nationality"
                onChange={nationality.onChange}
                onBlur={nationality.onBlur}
                innerRef={nationality.ref}
                placeholder="nationality"
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>

        <Button>Save</Button>
        <Button>Cancel</Button>
      </Form>
    </FormWrapper>
  );
};

export default AddEdit;

import React from "react";
import Formsy, { withFormsy } from "formsy-react";
import Helmet from "react-helmet";
import Recaptcha from "react-recaptcha";
import TextArea from "react-textarea-autosize";
import styled from "styled-components";
import { Col, Grid, Row } from "react-flexbox-grid";

import { styles } from "./content";
import { EnvelopeIcon } from "./icons";

import theme from "../theme/main";
import { rhythm } from "../theme/typography";

const ActionButton = styled.button`
  cursor: pointer;
  outline: 0;

  font-family: ${theme.fonts.headerFontFamily}, sans-serif;
  font-weight: bold;
  font-size: ${rhythm(0.5)};
  line-height: ${rhythm(0.5)};

  ${styles.media.tablet`
    width: 304px;
  `}

  ${styles.media.phoneL`
    width: 100%;
  `}

  padding: ${rhythm(0.6)} ${rhythm(1)};

  -webkit-transition: background-color ${theme.animations.defaultDuration};
  transition: background-color ${theme.animations.defaultDuration};

  border: 2px solid ${theme.colors.mayaBlue};

  color: ${theme.colors.foreground};
  background-color: ${theme.colors.white};

  &:hover:enabled {
    color: ${theme.colors.white};
    background-color: ${theme.colors.mayaBlue};
  }

  &:disabled {
    cursor: default;

    color: ${theme.colors.gray};
    border: 2px solid ${theme.colors.gray};
  }
`;

const SendButton = ({ children, disabled, type }) => (
  <ActionButton type={type} disabled={disabled}>
    {children}
    <EnvelopeIcon />
  </ActionButton>
);

const FormControl = styled.div`
  margin: 0;
  padding: 0;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: small;
`;

const NiceTextarea = styled(TextArea)`
  min-width: 100%;
  min-height: 100px;
  resize: vertical;
  outline: 0;
  border: 0;
  border-bottom: 1px solid ${theme.colors.mayaBlue};
`;

class LongTextClass extends React.Component {
  constructor (props) {
    super(props);

    this.changeValue = this.changeValue.bind(this);
  }

  changeValue (event) {
    this.props.setValue(event.currentTarget.value);
  }

  render () {
    const error = this.props.showError();
    const required = this.props.showRequired();

    const errorMessage = this.props.getErrorMessage();

    return (
      <FormControl required={required} error={error}>
        <NiceTextarea
          maxLength={1000}
          onChange={this.changeValue}
          name={this.props.name}
          placeholder={this.props.title}
          value={this.props.getValue() || ``} />
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </FormControl>
    );
  }
};

const LongText = withFormsy(LongTextClass);

const NiceInput = styled.input`
  min-width: 100%;
  outline: 0;
  border: 0;
  border-bottom: 1px solid ${theme.colors.mayaBlue};
`;

class TextClass extends React.Component {
  constructor (props) {
    super(props);

    this.changeValue = this.changeValue.bind(this);
  }

  changeValue (event) {
    this.props.setValue(event.currentTarget[this.props.type === `checkbox`
                                            ? `checked`
                                            : `value`]);
  }

  render () {
    const error = this.props.showError();
    const required = this.props.showRequired();

    const errorMessage = this.props.getErrorMessage();

    return (
      <FormControl required={required} error={error}>
        <NiceInput
          maxLength={200}
          onChange={this.changeValue}
          placeholder={this.props.title}
          name={this.props.name}
          type={this.props.type || `text`}
          value={this.props.getValue() || ``} />
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </FormControl>
    );
  }
};

const Text = withFormsy(TextClass);

const FormGrid = styled(Grid)`
  .row {
    margin-bottom: ${rhythm(0.25)};
  }
`;

const RecaptchaContainer = styled.div`
  #g-recaptcha div {
    margin: 10px auto;
  }

  ${styles.media.phoneL`
    transform: scale(0.82);
    transform-origin: 0 0;
  `}

  ${styles.media.phoneM`
    transform: scale(0.89);
    transform-origin: 0 0;
  `}

  ${styles.media.phoneS`
    transform: scale(0.72);
    transform-origin: 0 0;
  `}
`;

export class ContactForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      formValid: false,
      captchaVerified: false,
      submitEnabled: false,
    };

    this.onValid = this.onValid.bind(this);
    this.onInvalid = this.onInvalid.bind(this);

    this.onLoad = this.onLoad.bind(this);
    this.onVerify = this.onVerify.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onValid () {
    this.setState({ formValid: true, submitEnabled: this.state.captchaVerified, captchaVerified: this.state.captchaVerified });
  }

  onInvalid () {
    this.setState({ formValid: false, submitEnabled: false, captchaVerified: this.state.captchaVerified });
  }

  onLoad () {
    this.setState({ formValid: this.state.formValid, submitEnabled: this.state.formValid, captchaVerified: false });
  }

  onVerify () {
    this.setState({ formValid: this.state.formValid, submitEnabled: this.state.formValid, captchaVerified: true });
  }

  onSubmit (data) {
    // eslint-disable-next-line no-console
    console.info(data, this.state);
  }

  render () {
    return (
      <FormGrid fluid>
        <Helmet>
          <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
        </Helmet>
        <Row center={`xs`}>
          <Col xs={12}>
            <Formsy onValidSubmit={this.onSubmit} onValid={this.onValid} onInvalid={this.onInvalid}>
              <Row center={`xs`}>
                <Col md={12} lg={6}>
                  <Text name={`text`} title={`Your name`} required />
                </Col>
                <Col md={12} lg={6}>
                  <Text name={`email`} title={`Your email`} validations={`isEmail`} validationError={`Invalid email`} required />
                </Col>
              </Row>
              <Row center={`xs`}>
                <Col xs={12}>
                  <LongText name={`message`} title={`Your message`} required />
                </Col>
              </Row>
              <Row center={`xs`} middle={`xs`}>
                <Col md={12} lg={6}>
                  <RecaptchaContainer>
                    <Recaptcha
                      sitekey={this.props.googleRecaptchaSiteKey}
                      render={`explicit`}
                      onloadCallback={this.onLoad}
                      verifyCallback={this.onVerify} />
                  </RecaptchaContainer>
                </Col>
                <Col md={12} lg={6}>
                  <SendButton type={`submit`} disabled={!this.state.submitEnabled}>Send message!</SendButton>
                </Col>
              </Row>
            </Formsy>
          </Col>
        </Row>
      </FormGrid>
    );
  }
};

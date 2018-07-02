import React, {Component} from 'react';
import {Col, Row, Form, Button} from 'reactstrap'
import {FormattedMessage, injectIntl} from 'react-intl'
import HelTextInput from '../../HelTextInput'

class Profile extends Component {
    render() {
        const {intl} = this.props
        return (
            <div className="profile-view">
                <Row>
                    <Col xs={12}>
                        <h2><FormattedMessage id="app.profile" /></h2>
                        <p><FormattedMessage id="app.profile.edit" /></p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h2><FormattedMessage id="app.basicInfo" /></h2>
                        <p><FormattedMessage id="app.not.public" /></p>
                    </Col>
                </Row>
                <Form>
                    <Row>
                        <Col xs={12} sm={6}>
                            <HelTextInput 
                                id="firstName"
                                type="text"
                                required={true}
                                label={intl.formatMessage({id: 'app.input.firstname'})}
                                placeHolder={intl.formatMessage({id: 'app.input.firstname'})}
                            />
                        </Col>

                        <Col xs={12} sm={6}>
                            <HelTextInput 
                                id="lastName"
                                type="text"
                                required={true}
                                label={intl.formatMessage({id: 'app.input.lastname'})}
                                placeHolder={intl.formatMessage({id: 'app.input.lastname'})}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <HelTextInput 
                                id="email"
                                type="email"
                                required={true}
                                label={intl.formatMessage({id: 'app.input.email'})}
                                placeHolder={intl.formatMessage({id: 'app.input.email'})}
                                helpText={intl.formatMessage({id:'app.input.email.helpBlock.notShare'})}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12}>
                            <HelTextInput 
                                id="password"
                                type="password"
                                required={true}
                                label={intl.formatMessage({id: 'app.input.password'})}
                            />
                        </Col>
                    </Row>

                    <Button
                        type="submit"
                    >
                        <FormattedMessage id="app.button.saveChanges" />
                    </Button>
                </Form>

                <Row>
                    <Col xs={12}>
                        <h2><FormattedMessage id="app.profileInformation" /></h2>
                        <p><FormattedMessage id="app.profileInformation.text" /></p>
                    </Col>
                </Row>

                <Form>
                    <Row>
                        <Col xs={12} sm={6}>
                            <div className="profile-picture">
                                <h3><FormattedMessage id="app.profile.picture" /></h3>
                                <div className="profile-picture__picture">
                                    {/* reserve for later */}
                                </div>
                                <Button><FormattedMessage id="app.profile.picture.delete"/></Button>
                            </div>
                        </Col>

                        <Col xs={12} sm={6}>
                            <div className="profile-image-upload">
                                <h3><FormattedMessage id="app.profile.picture.select.new" /></h3>
                                <div className="profile-image-upload__picture">
                                    <input type="file" />
                                </div>
                                <div className="profile-image-upload__help">
                                    <p><FormattedMessage id="app.profile.picture.limit" /></p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <HelTextInput 
                                id="nickname"
                                type="text"
                                required={true}
                                label={intl.formatMessage({id: 'app.profile.nickname'})}
                                helpText={intl.formatMessage({id:'app.profile.nickname.text'})}
                            />
                        </Col>
                    </Row>
                    <Button
                        type="submit"
                    >
                        <FormattedMessage id="app.button.saveChanges" />
                    </Button>
                </Form>
            </div>
        );
    }
}

export default injectIntl(Profile)

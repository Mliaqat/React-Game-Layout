import React from 'react'
import { Formstyle, Headerstyle, Buttonstyle } from './Cat1.style'
import { Form, Input, Button, Select } from 'antd';
import { Link } from 'react-router-dom';

const { Option } = Select;

const Header = () => {
    return (

        <Headerstyle>
            <h3>Note * mark field are mandatory</h3>
        </Headerstyle>


    )
}

const Buttontab = () => {
    return (
        <Buttonstyle>
            <Link to="/" className="login-btn">Back</Link>
            <Link to="/cs1" className="login-btn">Next</Link>

        </Buttonstyle>
    )
}


function Cat1() {
    return (
        <>
            <Header />
            <Formstyle>
                <article>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input placeholder="User Name" />
                        </Form.Item>
                        <Form.Item
                            label="Sure name"
                            name="Surename"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input placeholder="Sure Name" />
                        </Form.Item>
                        <Form.Item
                            label="E-Mail"
                            name="email"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input placeholder="Enter your E-mail" />
                        </Form.Item>
                        <Form.Item
                            label="Mobile-No"
                            name="Mobileno"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input placeholder="Enter your Mobile Number" />
                        </Form.Item>


                        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                            <Select
                                placeholder="Select Gender"
                                className="select"
                            >
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                                <Option value="other">Other</Option>
                            </Select>
                        </Form.Item>


                    </Form>
                </article>
                <article>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        autoComplete="off"
                    >

                        <Form.Item name="gender" label="Age" rules={[{ required: true }]}>
                            <Select
                                placeholder="Age"
                                className="select"
                            >
                                <Option value="male">Above 18</Option>
                                <Option value="female">Below 18</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="gender" label="Dropdowm" rules={[{ required: true }]}>
                            <Select
                                placeholder="Select"
                                className="select"
                            >
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                                <Option value="other">Other</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="gender" label="Dropdown" rules={[{ required: true }]}>
                            <Select
                                placeholder="Select"
                                className="select"
                            >
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                                <Option value="other">Other</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="gender" label="Dropdown" rules={[{ required: true }]}>
                            <Select
                                placeholder="Select"
                                className="select"
                            >
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                                <Option value="other">Other</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="gender" label="Dropdown" rules={[{ required: true }]}>
                            <Select
                                placeholder="Select"
                                className="select"
                            >
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                                <Option value="other">Other</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="gender" label="Dropdown" rules={[{ required: true }]}>
                            <Select
                                placeholder="Select"
                                className="select"
                            >
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                                <Option value="other">Other</Option>
                            </Select>
                        </Form.Item>

                    </Form>


                </article>
            </Formstyle>
            <Buttontab />
        </>

    )
}

export default Cat1;

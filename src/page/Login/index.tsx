import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Flex, Form, Input, Tabs, Typography } from 'antd';
import { useForm } from 'antd/es/form/Form';
import classes from './style.module.css';
const { Text, Title } = Typography;

export default function Login() {
	const [form] = useForm();

	const login = (data: any) => {
		if (data.user === 'admin' && data.password === 'admin!') {
			localStorage.setItem('token', 'ok');
			location.reload();
		} else {
			form.setFields([
				{ name: 'user', errors: ['invalid'] },
				{ name: 'password', errors: ['invalid'] },
			]);
		}
	};

	return (
		<Flex className={classes.login} vertical align='center'>
			<Flex className={classes.title} align='center'>
				<img width={44} height={44} src='/antd.svg' />
				<Title level={2}>Antd Dashboard</Title>
			</Flex>
			<Text type='secondary'>ant desgin admin dashboard demo</Text>
			<Flex vertical className={classes.form}>
				<Tabs centered items={[{ key: 'Account', label: 'Account Login' }]} />
				<Form size='large' form={form} onFinish={login}>
					<Form.Item name={'user'} required rules={[{ required: true }]}>
						<Input allowClear prefix={<UserOutlined />} placeholder='User Account' />
					</Form.Item>
					<Form.Item name={'password'} required rules={[{ required: true }]}>
						<Input.Password
							allowClear
							prefix={<LockOutlined />}
							placeholder='Password'
						/>
					</Form.Item>
					<Button block type='primary' htmlType='submit'>
						Login
					</Button>
				</Form>
			</Flex>
		</Flex>
	);
}

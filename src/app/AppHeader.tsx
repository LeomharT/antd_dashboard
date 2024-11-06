import { blue } from '@ant-design/colors';
import { LoginOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Flex, Layout, Typography } from 'antd';
import logoSVG from '/antd.svg';

const { Title } = Typography;

export default function AppHeader() {
	return (
		<Layout.Header style={{ background: 'transparent' }}>
			<Flex justify='space-between' style={{ height: '100%', paddingBlock: '12px' }}>
				<Flex className='app-logo'>
					<img src={logoSVG} />
					<Title level={5}>Antd Dashboard v1.0</Title>
				</Flex>
				<Flex align='center' gap={16}>
					<Dropdown
						menu={{
							items: [
								{
									key: 'logout',
									danger: true,
									label: 'Logout',
									icon: <LoginOutlined />,
									onClick: () => {
										localStorage.clear();
										window.location.reload();
									},
								},
							],
						}}
					>
						<Button type='text' style={{ height: '100%' }}>
							<Avatar style={{ backgroundColor: blue[4] }}>
								<UserOutlined />
							</Avatar>
							<Typography>Leo</Typography>
						</Button>
					</Dropdown>
				</Flex>
			</Flex>
		</Layout.Header>
	);
}

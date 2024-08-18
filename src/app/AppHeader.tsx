import { LoginOutlined, MoonOutlined, SunOutlined } from '@ant-design/icons';
import { useLocalStorage } from '@mantine/hooks';
import { Avatar, Button, Dropdown, Flex, Layout, Typography } from 'antd';
const { Title } = Typography;

type AppHeaderProps = {
	onToggleTheme: () => void;
};

export default function AppHeader(props: AppHeaderProps) {
	const [algorithm] = useLocalStorage<'light' | 'dark'>({
		key: 'theme',
		defaultValue: 'light',
	});

	return (
		<Layout.Header style={{ background: 'transparent' }}>
			<Flex
				vertical={false}
				justify='space-between'
				style={{ height: '100%', paddingBlock: '12px' }}
			>
				<Flex className='app-logo'>
					<img src='/antd.svg' />
					<Title level={4}>Antd Dashboard v1.0</Title>
				</Flex>
				<Flex align='center' gap={16}>
					<Button
						type='text'
						icon={algorithm === 'light' ? <MoonOutlined /> : <SunOutlined />}
						onClick={props.onToggleTheme}
					/>
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
										window.location.href = '/';
									},
								},
							],
						}}
					>
						<Avatar>A</Avatar>
					</Dropdown>
				</Flex>
			</Flex>
		</Layout.Header>
	);
}

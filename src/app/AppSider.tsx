import {
	AppstoreOutlined,
	DashboardOutlined,
	LeftOutlined,
	RightOutlined,
	SettingOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, MenuProps } from 'antd';

type AppSider = {
	collapsed?: boolean;
	open: () => void;
	close: () => void;
	toggle: () => void;
};

type MenuItem = Required<MenuProps>['items'][number];

export default function AppSider(props: AppSider) {
	const items: MenuItem[] = [
		{
			key: 'dashboard',
			label: 'Dashboard',
			icon: <DashboardOutlined />,
			children: [
				{
					key: 'g1',
					label: 'Charts',
					type: 'group',
					children: [
						{ key: 'analysis', label: 'Analysis' },
						{ key: 'monitor', label: 'Monitor' },
						{ key: 'wordspace', label: 'Workspace' },
					],
				},
			],
		},
		{
			key: 'sub2',
			label: 'Navigation Two',
			icon: <AppstoreOutlined />,
			children: [
				{ key: '5', label: 'Option 5' },
				{ key: '6', label: 'Option 6' },
				{
					key: 'sub3',
					label: 'Submenu',
					children: [
						{ key: '7', label: 'Option 7' },
						{ key: '8', label: 'Option 8' },
					],
				},
			],
		},
		{
			type: 'divider',
		},
		{
			key: 'sub4',
			label: 'Navigation Three',
			icon: <SettingOutlined />,
			children: [
				{ key: '9', label: 'Option 9' },
				{ key: '10', label: 'Option 10' },
				{ key: '11', label: 'Option 11' },
				{ key: '12', label: 'Option 12' },
			],
		},
	];

	return (
		<Layout.Sider
			width={256}
			breakpoint='lg'
			onBreakpoint={(borken) => {
				if (borken) {
					props.open();
				} else {
					props.close();
				}
			}}
			collapsible
			trigger={null}
			collapsed={props.collapsed}
			style={{ background: 'transparent' }}
		>
			<Button
				size='small'
				className='sider-toggle-btn'
				onClick={props.toggle}
				icon={props.collapsed ? <RightOutlined /> : <LeftOutlined />}
			/>
			<Menu
				mode='inline'
				items={items}
				defaultOpenKeys={['dashboard']}
				defaultSelectedKeys={['analysis']}
				style={{ background: 'transparent' }}
			/>
		</Layout.Sider>
	);
}

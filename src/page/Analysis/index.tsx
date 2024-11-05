import { blue, geekblue, gray, green, orange, purple, red, yellow } from '@ant-design/colors';
import {
	CaretDownOutlined,
	CaretUpOutlined,
	InfoCircleOutlined,
	MoreOutlined,
} from '@ant-design/icons';
import {
	Button,
	Card,
	DatePicker,
	Divider,
	Flex,
	List,
	Progress,
	Statistic,
	Table,
	Tabs,
	Tooltip,
	Typography,
} from 'antd';
import ButtonGroup from 'antd/es/button/button-group';
import Charts from 'react-apexcharts';
import classes from './style.module.css';

export default function Analysis() {
	return (
		<Flex vertical gap='24px'>
			<Flex className={classes.info}>
				<Card bordered={false}>
					<Typography>Total sale</Typography>
					<Tooltip title='Tips'>
						<Button className={classes.tip} type='text' icon={<InfoCircleOutlined />} />
					</Tooltip>
					<Statistic prefix={'$'} value={112893} />
					<Flex align='end' gap='16px' style={{ height: 46 }}>
						<Typography>
							Weekly &nbsp;12%
							<CaretUpOutlined style={{ color: red[5] }} />
						</Typography>
						<Typography>
							Monthly &nbsp;8%
							<CaretDownOutlined style={{ color: green[5] }} />
						</Typography>
					</Flex>
					<Divider />
					<Typography>Dayly Sales &nbsp;$11,270</Typography>
				</Card>
				<Card bordered={false}>
					<Typography>Access</Typography>
					<Tooltip title='Tips'>
						<Button className={classes.tip} type='text' icon={<InfoCircleOutlined />} />
					</Tooltip>
					<Statistic value={8864} />
					<Charts
						type='area'
						height='48px'
						options={{
							chart: {
								type: 'area',
								toolbar: {
									show: false,
								},
								zoom: {
									enabled: false,
								},
								sparkline: {
									enabled: true,
								},
							},
							stroke: {
								curve: 'smooth',
								width: 2,
							},
						}}
						series={[
							{
								name: 'STOCK ABC',
								data: [3, 4, 1, 5, 6, 3, 9],
							},
						]}
					/>
					<Divider />
					<Typography>Dayly Access &nbsp;1,234</Typography>
				</Card>
				<Card bordered={false}>
					<Typography>Payment</Typography>
					<Tooltip title='Tips'>
						<Button className={classes.tip} type='text' icon={<InfoCircleOutlined />} />
					</Tooltip>
					<Statistic value={6025} />
					<Charts
						type='bar'
						height='48px'
						options={{
							chart: {
								type: 'bar',
								toolbar: {
									show: false,
								},
								zoom: {
									enabled: false,
								},
								sparkline: {
									enabled: true,
								},
							},
						}}
						series={[
							{
								name: 'STOCK ABC',
								data: [3, 4, 1, 5, 6, 7, 9, 2, 3, 1, 4, 7, 1, 5],
							},
						]}
					/>
					<Divider />
					<Typography>Transform rate &nbsp;5,647</Typography>
				</Card>
				<Card bordered={false}>
					<Typography>Effect</Typography>
					<Tooltip title='Tips'>
						<Button className={classes.tip} type='text' icon={<InfoCircleOutlined />} />
					</Tooltip>
					<Statistic suffix={'%'} value={75} />
					<Flex align='end' style={{ height: 46 }}>
						<Progress
							percent={75}
							status='active'
							strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }}
						/>
					</Flex>
					<Divider />
					<Flex align='end' gap='16px'>
						<Typography>
							Weekly &nbsp;12%
							<CaretUpOutlined style={{ color: red[5] }} />
						</Typography>
						<Typography>
							Monthly &nbsp;8%
							<CaretDownOutlined style={{ color: green[5] }} />
						</Typography>
					</Flex>
				</Card>
			</Flex>
			<Card
				bordered={false}
				styles={{
					body: { paddingTop: 0 },
				}}
			>
				<Tabs
					size='large'
					tabBarExtraContent={
						<Flex>
							<ButtonGroup>
								<Button type='link'>Last Week</Button>
								<Button type='link'>Last Month</Button>
								<Button type='link'>Last Year</Button>
							</ButtonGroup>
							<DatePicker.RangePicker />
						</Flex>
					}
					items={[
						{ key: 'sales', tabKey: 'sales', label: 'Sales' },
						{ key: 'visits', tabKey: 'visits', label: 'Visits' },
					]}
				/>
				<Flex gap={16}>
					<div style={{ flex: '0 0 66.666%' }}>
						<Charts
							type='bar'
							width='100%'
							height='350px'
							options={{
								chart: {
									type: 'bar',
									toolbar: {
										show: false,
									},
									zoom: {
										enabled: false,
									},
								},
								plotOptions: {
									bar: {
										columnWidth: '60%',
									},
								},
								colors: [blue.primary],
								xaxis: {
									labels: {
										style: {
											colors: gray[3],
										},
									},
									categories: [
										'Jan',
										'Feb',
										'Mar',
										'Apr',
										'May',
										'Jun',
										'Jul',
										'Aug',
										'Sep',
										'Oct',
										'Nov',
										'Dec',
									],
								},
								yaxis: {
									labels: {
										style: {
											colors: gray[3],
										},
									},
								},
								dataLabels: {
									enabled: false,
								},
								grid: {
									strokeDashArray: 3,
									borderColor: '#d9d9d9',
								},
							}}
							series={[
								{
									data: [
										245, 349, 493, 787, 1163, 667, 329, 1000, 989, 910, 1037,
										453,
									],
								},
							]}
						/>
					</div>
					<List
						dataSource={[
							{ id: 0, region: '🇺🇸', client: 'Carlson Limited', price: '$887' },
							{ id: 1, region: '🇩🇪', client: 'Carlson Limited', price: '$887' },
							{ id: 2, region: '🇦🇨', client: 'Carlson Limited', price: '$887' },
							{ id: 3, region: '🇨🇳', client: 'Carlson Limited', price: '$887' },
							{ id: 4, region: '🇧🇷', client: 'Carlson Limited', price: '$887' },
							{ id: 5, region: '🇮🇹', client: 'Carlson Limited', price: '$887' },
							{ id: 6, region: '🇳🇴', client: 'Carlson Limited', price: '$887' },
						]}
						style={{ flexGrow: 1, maxHeight: '350px', overflow: 'auto' }}
						renderItem={(data, index) => (
							<List.Item key={data.id}>
								<Flex
									style={{
										width: '100%',
										gap: '18px',
										alignItems: 'center',
									}}
								>
									<Button
										size='small'
										shape='circle'
										color={index < 3 ? 'default' : undefined}
										variant='solid'
									>
										{++index}
									</Button>
									<Typography style={{ fontSize: '24px' }}>
										{data.region}
									</Typography>
									<Typography>{data.client}</Typography>
									<Typography style={{ marginLeft: 'auto' }}>
										{data.price}
									</Typography>
								</Flex>
							</List.Item>
						)}
					/>
				</Flex>
			</Card>
			<Flex justify='space-between' gap='24px'>
				<Card
					bordered={false}
					className={classes.online}
					title='Online Search Rank'
					extra={<Button type='text' icon={<MoreOutlined />} />}
				>
					<Flex gap='48px' justify='space-between' style={{ marginBottom: '24px' }}>
						<div>
							<Flex gap='8px'>
								<Typography>Search user</Typography>
								<Tooltip title='tips content'>
									<Button
										type='text'
										size='small'
										shape='circle'
										icon={<InfoCircleOutlined />}
									/>
								</Tooltip>
							</Flex>
							<Charts
								type='area'
								width='100%'
								height='48px'
								options={{
									chart: {
										type: 'area',
										toolbar: {
											show: false,
										},
										zoom: {
											enabled: false,
										},
										sparkline: {
											enabled: true,
										},
									},
									stroke: {
										curve: 'smooth',
										width: 0,
									},
									colors: [purple[4]],
								}}
								series={[
									{
										name: 'STOCK ABC',
										data: [3, 4, 1, 5, 6, 3, 9],
									},
								]}
							/>
						</div>
						<div>
							<Flex gap='8px'>
								<Typography>Average search</Typography>
								<Tooltip title='tips content'>
									<Button
										type='text'
										size='small'
										shape='circle'
										icon={<InfoCircleOutlined />}
									/>
								</Tooltip>
							</Flex>
							<Charts
								type='area'
								width='100%'
								height='48px'
								options={{
									chart: {
										type: 'area',
										toolbar: {
											show: false,
										},
										zoom: {
											enabled: false,
										},
										sparkline: {
											enabled: true,
										},
									},
									stroke: {
										curve: 'smooth',
										width: 0,
									},
									colors: [purple[4]],
								}}
								series={[
									{
										name: 'STOCK ABC',
										data: [2, 1, 7, 3, 6, 4, 8],
									},
								]}
							/>
						</div>
					</Flex>
					<Table
						rowKey='id'
						size='small'
						columns={[
							{ dataIndex: 'id', title: 'rank' },
							{
								dataIndex: 'keyword',
								title: 'keyword',
								render(value) {
									return <Button type='link'>{value}</Button>;
								},
							},
							{ dataIndex: 'user', title: 'user' },
							{
								dataIndex: 'increase',
								title: 'increase',
								render(value) {
									return (
										<Typography>
											{value}%
											{Math.random() > 0.5 ? (
												<CaretUpOutlined style={{ color: green[5] }} />
											) : (
												<CaretDownOutlined style={{ color: red[5] }} />
											)}
										</Typography>
									);
								},
							},
						]}
						dataSource={new Array(50).fill(0).map((_, index) => ({
							id: index + 1,
							keyword: `Search keyword${index}`,
							user: Math.floor(Math.random() * 100),
							increase: Math.floor(Math.random() * 100),
						}))}
						pagination={{
							size: 'small',
							pageSize: 5,
						}}
					/>
				</Card>
				<Card bordered={false} className={classes.categories} title='Sales categories'>
					<Charts
						type='donut'
						width='100%'
						height='350px'
						options={{
							title: {
								text: 'Sales',
							},
							chart: {
								type: 'donut',
							},
							dataLabels: {
								enabled: false,
							},
							labels: ['Phone', 'Appliances', 'Drinks', 'Car', 'Other'],
							colors: [blue[3], yellow[5], orange[5], purple[5], geekblue[5]],
							plotOptions: {
								pie: {
									donut: {
										size: '80%',
										labels: {
											show: true,
											total: {
												show: true,
												fontSize: '18px',
												fontWeight: 700,
											},
										},
									},
								},
							},
							legend: {
								show: false,
							},
						}}
						series={[20, 30, 50, 66, 75]}
					/>
					<Divider />
					<Flex gap='16px' justify='space-evenly' wrap='wrap'>
						{[
							{ label: 'Phone', color: blue[3] },
							{ label: 'Appliances', color: yellow[5] },
							{ label: 'Drinks', color: orange[5] },
							{ label: 'Car', color: purple[5] },
							{ label: 'Other', color: geekblue[5] },
						].map((value) => (
							<Flex align='center' gap='8px' key={value.label}>
								<span
									style={{
										display: 'inline-block',
										width: 16,
										height: 16,
										borderRadius: '50%',
										background: value.color,
									}}
								/>
								<Typography>{value.label}</Typography>
							</Flex>
						))}
					</Flex>
				</Card>
			</Flex>
		</Flex>
	);
}

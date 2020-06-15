import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import 'react-autosuggest/dist/theme.js';
import 'react-datepicker/dist/react-datepicker.css';
import 'chartist-plugin-tooltips/dist/chartist-plugin-tooltip.css';
import { makeStyles } from '@material-ui/core/styles';
import GridItem from '../Grid/GridItem.js';
import Table from '../Table/Table.js';
import Button from '../CustomButtons/Button.js';
import GridContainer from '../Grid/GridContainer.js';
import Card from '../Card/Card.js';
import CardHeader from '../Card/CardHeader.js';
import CardBody from '../Card/CardBody.js';
import CardFooter from '../Card/CardFooter.js';
import CardIcon from '../Card/CardIcon.js';
import wind from '../../img/wind.svg';
import humidity from '../../img/humidity.svg';
import pollution from '../../img/pollution.svg';
import circle from '../../img/circle.svg';
import World from './Maps/worldmap.js';
import CircularProgress from '@material-ui/core/CircularProgress';

import 'react-chartist/dist/chartist.css';
import styles from '../../assets/jss/material-dashboard-react/components/dashboardStyle.js';
import Autosuggest from 'react-autosuggest';
import 'react-autosuggest/dist/theme.js';
const getSuggestions = (value) => {
	const inputValue = value.trim().toLowerCase();
	const inputLength = inputValue.length;
	return inputLength === 0
		? []
		: languages.filter(
				(lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue
		  );
};
const getSuggestionValue = (suggestion) => suggestion.name;
const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;
const loaderStyle = makeStyles((theme) => ({
	root: {
		display: 'flex',
		'& > * + *': {
			marginLeft: theme.spacing(2),
		},
	},
}));

var languages = [
	{ name: 'Lahore' },
	{ name: 'Karachi' },
	{ name: 'Islamabad' },
	{ name: 'Multan' },
	{ name: 'Faislabad' },
	{ name: 'Rawalpindi' },
	{ name: 'Gujranwala' },
	{ name: 'Hyderabad' },
	{ name: 'Peshawar' },
	{ name: 'Quetta' },
	{ name: 'Sargodha' },
	{ name: 'Sialkot' },
	{ name: 'Bahawalpur' },
	{ name: 'Sukkur' },
	{ name: 'Kandhkot' },
	{ name: 'Sheikhupura' },
	{ name: 'Mardan' },
	{ name: 'Gujrat' },
	{ name: 'Larkana' },
	{ name: 'Kasur' },
	{ name: 'Rahim Yar Khan' },
	{ name: 'Sahiwal' },
	{ name: 'Okara' },
	{ name: 'Wah' },
	{ name: 'Dera Ghazi Khan' },
	{ name: 'Mingora' },
	{ name: 'Mirpur Khas' },
	{ name: 'Chiniot' },
	{ name: 'Nawabshah' },
	{ name: 'Kamoke' },
	{ name: 'Burewala' },
	{ name: 'Jhelum' },
	{ name: 'Sadiqabad' },
	{ name: 'Khanewal' },
	{ name: 'Hafizabad' },
	{ name: 'Kohat' },
	{ name: 'Jacobabad' },
	{ name: 'Shikarpur' },
	{ name: 'Muzaffargarh' },
	{ name: 'Khanpur' },
	{ name: 'Gojra' },
	{ name: 'Bahawalnagar' },
	{ name: 'Abottabad' },
	{ name: 'Muridke' },
	{ name: 'Pakpattan' },
	{ name: 'Khuzdar' },
	{ name: 'Jaranwala' },
	{ name: 'Chishtian' },
	{ name: 'Daska' },
	{ name: 'Mandi Bahauddin' },
	{ name: 'Kamalia' },
	{ name: 'Tando Adam' },
	{ name: 'Khairpur' },
	{ name: 'Dera Ismail Khan' },
	{ name: 'Vehari' },
	{ name: 'Nowshera' },
	{ name: 'Khushab' },
	{ name: 'Charsada' },
	{ name: 'Wazirabad' },
	{ name: 'Chakwal' },
	{ name: 'Mianwali' },
	{ name: 'Tando Allahyar' },
	{ name: 'Kot Adu' },
	{ name: 'Farooka' },
	{ name: 'Chichawatni' },
	{ name: 'Vehari' },
	{ name: 'Kotli' },
];
const tooltip = require('chartist-plugin-tooltips');
var Chartist = require('chartist');
const temp1 = [];
const temp2 = [];
const useStyles = makeStyles(styles);
class CurrentTrends extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: '',
			chartdata: '',
			//	coronaData: '',
			value: '',
			suggestions: [],
			iscard: '',
			isSpecific: '',
			isbar: '',
		};
	}
	onSuggestionsFetchRequested = ({ value }) => {
		this.setState({
			suggestions: getSuggestions(value),
		});
	};

	onSuggestionsClearRequested = () => {
		this.setState({
			suggestions: [],
		});
	};
	onChange = (event, { newValue }) => {
		this.setState({
			value: newValue,
		});
	};
	submit = async () => {
		if (this.state.value == '') {
			alert('Please Enter a city');
		} else {
			fetch('http://localhost:1000/api/CurrentTrends/city', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					city: this.state.value,
				}),
			})
				.then(async (data) => {
					console.log(data);
					var data = await this.callBackendAPI(
						'http://localhost:1000/api/CurrentTrends/c'
					);
					console.log(data.express);
					this.setState({
						chartdata: data.express,
					});
					if (this.state.chartdata.length > 9) {
						this.setState({
							iscard: 'yes',
							isSpecific: 'yes',
						});
					}
					console.log(this.state.iscard);
				})
				.catch((err) => alert(err));
		}
	};

	callBackendAPI = async (url) => {
		const response = await fetch(url);

		const body = await response.json();

		if (response.status !== 200) {
			throw Error(body.message);
		}
		return body;
	};

	//for displaying pollution category on card
	settingCardData(sp) {
		var result = '';
		if ((sp >= 0) & (sp <= 12)) {
			result = 'Pollution Level is Good';
		}
		if ((sp >= 12) & (sp <= 35)) {
			result = 'Pollution Level is Moderate';
		}
		if ((sp >= 35) & (sp <= 55)) {
			result = 'Pollution Level is Unhealthy for sensitive groups';
		}
		if ((sp >= 55) & (sp <= 150)) {
			result = 'Pollution Level is Unhealthy';
		}
		if ((sp >= 150) & (sp <= 250)) {
			result = 'Pollution Level is Very Unhealthy';
		}
		if ((sp >= 250) & (sp <= 500)) {
			result = 'Pollution Level is Hazardous';
		}
		return result;
	}
	graph(max, min, avg, label) {
		var maxarray = this.splitForGraph(max, 'Max Temperature');
		var minarray = this.splitForGraph(min, 'Min Temperature');
		var avgarray = this.splitForGraph(avg, 'Avg Temperature');

		var labels = [];
		var end = label.length - 1;
		label = label.substring(1, end);
		label = label.split(', ');
		for (let i = 0; i < label.length; i++) {
			let chunk = label[i].substring(1, label[i].length - 1);
			labels.push(chunk);
		}
		var delays = 80,
			durations = 500;
		var chart = {
			data: {
				labels: label,
				series: [maxarray, minarray, avgarray],
			},
			options: {
				lineSmooth: Chartist.Interpolation.cardinal({
					tension: 0,
				}),
				low: 10,
				high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
				plugins: [Chartist.plugins.tooltip()],
				chartPadding: {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
				},
			},

			// for animation
			animation: {
				draw: function (data) {
					if (data.type === 'line' || data.type === 'area') {
						data.element.animate({
							d: {
								begin: 600,
								dur: 700,
								from: data.path
									.clone()
									.scale(1, 0)
									.translate(0, data.chartRect.height())
									.stringify(),
								to: data.path.clone().stringify(),
								easing: Chartist.Svg.Easing.easeOutQuint,
							},
						});
					} else if (data.type === 'point') {
						data.element.animate({
							opacity: {
								begin: (data.index + 1) * delays,
								dur: durations,
								from: 0,
								to: 1,
								easing: 'ease',
							},
						});
					}
				},
			},
		};
		// console.log(chart.data);

		return chart;
	}
	graphPollution(array, label) {
		var finalArray = [];
		var end = array.length - 1;
		array = array.substring(1, end);
		array = array.split(', ');
		for (let i = 0; i < array.length; i++) {
			let chunk = parseInt(array[i]);
			var x = { meta: 'PM 2.5', value: chunk };

			finalArray.push(x);
		}

		var labels = [];
		var end = label.length - 1;
		label = label.substring(1, end);
		label = label.split(', ');
		for (let i = 0; i < label.length; i++) {
			let chunk = label[i].substring(1, label[i].length - 1);
			labels.push(chunk);
		}
		var delays = 80,
			durations = 500;
		var chart = {
			data: {
				labels: label,
				series: [finalArray],
			},
			options: {
				lineSmooth: Chartist.Interpolation.cardinal({
					tension: 0,
				}),
				low: 0,
				high: 65, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
				plugins: [Chartist.plugins.tooltip()],
				chartPadding: {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
				},
			},

			// for animation
			animation: {
				draw: function (data) {
					if (data.type === 'line' || data.type === 'area') {
						data.element.animate({
							d: {
								begin: 600,
								dur: 700,
								from: data.path
									.clone()
									.scale(1, 0)
									.translate(0, data.chartRect.height())
									.stringify(),
								to: data.path.clone().stringify(),
								easing: Chartist.Svg.Easing.easeOutQuint,
							},
						});
					} else if (data.type === 'point') {
						data.element.animate({
							opacity: {
								begin: (data.index + 1) * delays,
								dur: durations,
								from: 0,
								to: 1,
								easing: 'ease',
							},
						});
					}
				},
			},
		};
		// console.log(chart.data);

		return chart;
	}
	componentDidMount() {
		// Call our fetch function below once the component mounts
		this.callBackendAPI('http://localhost:1000/api/CurrentTrends/')
			.then((res) => this.setState({ data: res.express }))
			.catch((err) => console.log(err));

		this.callBackendAPI('http://localhost:1000/api/CurrentTrends/chart')
			.then((res) => this.setState({ chartdata: res.express }))
			.catch((err) => console.log(err));
	}

	setTempTable(cities, temp) {
		var end = cities.length - 2;
		cities = cities.substring(2, end);
		cities = cities.split(", Pakistan', '");
		var end = temp.length - 1;
		temp = temp.substring(1, end);
		temp = temp.split(', ');
		var table = [];
		for (let i = 0; i < cities.length; i++) {
			var x = [i + 1, temp[i], cities[i]];
			table.push(x);
		}
		return table;
	}
	splitForGraph(array, description) {
		var finalArray = [];
		var end = array.length - 1;
		array = array.substring(1, end);
		array = array.split(', ');
		for (let i = 0; i < array.length; i++) {
			let chunk = array[i].substring(1, array[i].length - 1);
			var x = { meta: description, value: chunk };

			finalArray.push(x);
		}
		return finalArray;
	}
	check() {
		// console.log(this.state.coronaData['Countries']);
	}
	render() {
		const { value, suggestions } = this.state;
		const inputProps = {
			placeholder: 'City Name',
			value,
			onChange: this.onChange,
		};
		return (
			<div id='page-container'>
				<div id='content-wrap'>
					{this.state && !this.state.chartdata && !this.state.data && (
						<div className={useStyles.root}>
							<CircularProgress
								style={{
									width: '70px',
									height: '70px',
									alignItems: 'center',
									justifyContent: 'center',
									position: 'absolute',
									left: '45%',
									bottom: '40%',
									right: '40%',
									top: '40%',
									color: '#8d0000',
								}}
								// color='#8d0000'
							/>
						</div>
					)}
					{this.state && this.state.chartdata && this.state.data && (
						<div>
							<GridContainer>
								{/* Islamabad */}
								<GridItem xs={12} sm={2} md={3}>
									<Card>
										<CardHeader>
											<CardIcon color='info'>
												<img src={this.state.data[0]} />
											</CardIcon>
											<h1>
												{this.state.data[1]} <sup>o</sup>C{' '}
											</h1>

											<div style={{ clear: 'right' }} />
										</CardHeader>
										<CardBody stats>
											<div>
												<b>
													<img
														src={circle}
														style={{ float: 'left', width: '10%' }}
														height='40px'
														width='40px'
													></img>
													<div style={{ paddingTop: '10px' }}>
														{this.state.data[2]}
													</div>
													<div style={{ clear: 'right' }} />
												</b>
											</div>
											<br />
											<div>
												<b>
													<img
														src={humidity}
														style={{ float: 'left', width: '10%' }}
														height='40px'
														width='40px'
													></img>
													<div style={{ paddingTop: '10px' }}>
														Humidity : {this.state.data[3]} km/h
													</div>
													<div style={{ clear: 'right' }} />
												</b>
											</div>
											<br />
											<div>
												<b>
													<img
														src={wind}
														style={{ float: 'left', width: '15%' }}
														height='40px'
														width='40px'
													></img>
													<div style={{ paddingTop: '10px' }}>
														Wind : {this.state.data[4]} km/h
													</div>
													<div style={{ clear: 'right' }} />
												</b>
											</div>
											<br />
											<div>
												<b>
													<img
														src={pollution}
														style={{ float: 'left', width: '12%' }}
														height='40px'
														width='40px'
													></img>
													<div style={{ paddingTop: '10px' }}>
														{this.settingCardData(this.state.data[5])}
													</div>
													<div style={{ clear: 'right' }} />
												</b>
											</div>
										</CardBody>
										<CardFooter stats>
											<div className={useStyles.stats}>
												<h5>Islamabad</h5>
											</div>
										</CardFooter>
									</Card>
								</GridItem>
								{/* Lahore */}
								<GridItem xs={12} sm={2} md={3}>
									<Card>
										<CardHeader>
											<CardIcon color='info'>
												<img src={this.state.data[6]} />
											</CardIcon>
											<h1>
												{this.state.data[7]} <sup>o</sup>C{' '}
											</h1>

											<div style={{ clear: 'right' }} />
										</CardHeader>
										<CardBody stats>
											<div>
												<b>
													<img
														src={circle}
														style={{ float: 'left', width: '10%' }}
														height='40px'
														width='40px'
													></img>
													<div style={{ paddingTop: '10px' }}>
														{this.state.data[8]}
													</div>
													<div style={{ clear: 'right' }} />
												</b>
											</div>
											<br />
											<div>
												<b>
													<img
														src={humidity}
														style={{ float: 'left', width: '10%' }}
														height='40px'
														width='40px'
													></img>
													<div style={{ paddingTop: '10px' }}>
														Humidity : {this.state.data[9]} km/h
													</div>
													<div style={{ clear: 'right' }} />
												</b>
											</div>
											<br />
											<div>
												<b>
													<img
														src={wind}
														style={{ float: 'left', width: '15%' }}
														height='40px'
														width='40px'
													></img>
													<div style={{ paddingTop: '10px' }}>
														Wind : {this.state.data[10]} km/h
													</div>
													<div style={{ clear: 'right' }} />
												</b>
											</div>
											<br />
											<div>
												<b>
													<img
														src={pollution}
														style={{ float: 'left', width: '12%' }}
														height='40px'
														width='40px'
													></img>
													<div style={{ paddingTop: '10px' }}>
														{this.settingCardData(this.state.data[11])}{' '}
													</div>
													<div style={{ clear: 'right' }} />
												</b>
											</div>
										</CardBody>
										<CardFooter stats>
											<div className={useStyles.stats}>
												<h5>Lahore</h5>
											</div>
										</CardFooter>
									</Card>
								</GridItem>
								{/* Karachi */}
								<GridItem xs={12} sm={2} md={3}>
									<Card>
										<CardHeader>
											<CardIcon color='info'>
												<img src={this.state.data[12]} />
											</CardIcon>
											<h1>
												{this.state.data[13]} <sup>o</sup>C{' '}
											</h1>

											<div style={{ clear: 'right' }} />
										</CardHeader>
										<CardBody stats>
											<div>
												<b>
													<img
														src={circle}
														style={{ float: 'left', width: '10%' }}
														height='40px'
														width='40px'
													></img>
													<div style={{ paddingTop: '10px' }}>
														{this.state.data[14]}
													</div>
													<div style={{ clear: 'right' }} />
												</b>
											</div>
											<br />
											<div>
												<b>
													<img
														src={humidity}
														style={{ float: 'left', width: '10%' }}
														height='40px'
														width='40px'
													></img>
													<div style={{ paddingTop: '10px' }}>
														Humidity : {this.state.data[15]} km/h
													</div>
													<div style={{ clear: 'right' }} />
												</b>
											</div>
											<br />
											<div>
												<b>
													<img
														src={wind}
														style={{ float: 'left', width: '15%' }}
														height='40px'
														width='40px'
													></img>
													<div style={{ paddingTop: '10px' }}>
														Wind : {this.state.data[16]} km/h
													</div>
													<div style={{ clear: 'right' }} />
												</b>
											</div>
											<br />
											<div>
												<b>
													<img
														src={pollution}
														style={{ float: 'left', width: '12%' }}
														height='40px'
														width='40px'
													></img>
													<div style={{ paddingTop: '10px' }}>
														{this.settingCardData(this.state.data[17])}{' '}
													</div>
													<div style={{ clear: 'right' }} />
												</b>
											</div>
										</CardBody>
										<CardFooter stats>
											<div className={useStyles.stats}>
												<h5>Karachi</h5>
											</div>
										</CardFooter>
									</Card>
								</GridItem>
								{/* Peshawar */}
								<GridItem xs={12} sm={2} md={3}>
									<Card>
										<CardHeader>
											<CardIcon color='info'>
												<img src={this.state.data[18]} />
											</CardIcon>
											<h1>
												{this.state.data[19]} <sup>o</sup>C{' '}
											</h1>

											<div style={{ clear: 'right' }} />
										</CardHeader>
										<CardBody stats>
											<div>
												<b>
													<img
														src={circle}
														style={{ float: 'left', width: '10%' }}
														height='40px'
														width='40px'
													></img>
													<div style={{ paddingTop: '10px' }}>
														{this.state.data[20]}
													</div>
													<div style={{ clear: 'right' }} />
												</b>
											</div>
											<br />
											<div>
												<b>
													<img
														src={humidity}
														style={{ float: 'left', width: '10%' }}
														height='40px'
														width='40px'
													></img>
													<div style={{ paddingTop: '10px' }}>
														Humidity : {this.state.data[21]} km/h
													</div>
													<div style={{ clear: 'right' }} />
												</b>
											</div>
											<br />
											<div>
												<b>
													<img
														src={wind}
														style={{ float: 'left', width: '15%' }}
														height='40px'
														width='40px'
													></img>
													<div style={{ paddingTop: '10px' }}>
														Wind : {this.state.data[22]} km/h
													</div>
													<div style={{ clear: 'right' }} />
												</b>
											</div>
											<br />
											<div>
												<b>
													<img
														src={pollution}
														style={{ float: 'left', width: '12%' }}
														height='40px'
														width='40px'
													></img>
													<div style={{ paddingTop: '10px' }}>
														{this.settingCardData(this.state.data[23])}{' '}
													</div>
													<div style={{ clear: 'right' }} />
												</b>
											</div>
										</CardBody>
										<CardFooter stats>
											<div className={useStyles.stats}>
												<h5>Peshawar</h5>
											</div>
										</CardFooter>
									</Card>
								</GridItem>
							</GridContainer>

							<GridContainer>
								<GridContainer>
									<GridItem xs={12} sm={12} md={6}>
										<Card>
											<CardHeader color='primary'>
												<h4 className={useStyles.cardTitleWhite}>
													Major Cities ranking by temperature
												</h4>
												{/* <p className={useStyles.cardCategoryWhite}>
									Here is a subtitle for this table
								</p> */}
											</CardHeader>
											<CardBody>
												<Table
													tableHeaderColor='primary'
													tableHead={['No. ', 'Temperature', 'City']}
													tableData={this.setTempTable(
														this.state.data[36],
														this.state.data[37]
													)}
												/>
											</CardBody>
										</Card>
									</GridItem>
									<GridItem xs={12} sm={12} md={6}>
										<Card>
											<CardHeader color='primary'>
												<h4 className={useStyles.cardTitleWhite}>
													Major Cities ranking by Pollution
												</h4>
												{/* <p className={useStyles.cardCategoryWhite}>
									Here is a subtitle for this table
								</p> */}
											</CardHeader>
											<CardBody>
												<Table
													tableHeaderColor='primary'
													tableHead={['No. ', 'PM 2.5 ', 'City']}
													tableData={this.setTempTable(
														this.state.data[38],
														this.state.data[39]
													)}
												/>
											</CardBody>
										</Card>
									</GridItem>

									<GridItem xs={12} sm={12} md={3}>
										<div style={{ backgroundColor: 'white' }}>
											<p style={{ color: '#00acc1', padding: '0.5em' }}>
												<b>
													To Check the Pollution and Weather condiitions of any
													other city enter the city name and click check.
												</b>
											</p>
											<p style={{ color: '#00acc1', padding: '0.5em' }}>
												By Default it is showing the data for Islamabad
											</p>
											<br />
											{/* ***********************************************************************************/}
											<Autosuggest
												suggestions={suggestions}
												onSuggestionsFetchRequested={
													this.onSuggestionsFetchRequested
												}
												onSuggestionsClearRequested={
													this.onSuggestionsClearRequested
												}
												getSuggestionValue={getSuggestionValue}
												renderSuggestion={renderSuggestion}
												inputProps={inputProps}
												formControlProps={{
													fullWidth: true,
												}}
												style={{ padding: '0.5em' }}
											/>
											<Button
												color='#00acc1'
												onClick={async () => {
													await this.submit();
													this.setState({ isbar: 'true' });
												}}
												style={{ align: 'center' }}
											>
												Check
											</Button>
											<br />
										</div>
									</GridItem>

									{this.state && this.state.iscard && (
										<GridItem xs={12} sm={2} md={3}>
											<Card>
												<CardHeader>
													<CardIcon color='info'>
														<img src={this.state.chartdata[9]} />
													</CardIcon>
													<h1>
														{this.state.chartdata[10]} <sup>o</sup>C{' '}
													</h1>

													<div style={{ clear: 'right' }} />
												</CardHeader>
												<CardBody stats>
													<div>
														<b>
															<img
																src={circle}
																style={{ float: 'left', width: '10%' }}
																height='40px'
																width='40px'
															></img>
															<div style={{ paddingTop: '10px' }}>
																{this.state.chartdata[11]}
															</div>
															<div style={{ clear: 'right' }} />
														</b>
													</div>
													<br />
													<div>
														<b>
															<img
																src={humidity}
																style={{ float: 'left', width: '10%' }}
																height='40px'
																width='40px'
															></img>
															<div style={{ paddingTop: '10px' }}>
																Humidity : {this.state.chartdata[12]} km/h
															</div>
															<div style={{ clear: 'right' }} />
														</b>
													</div>
													<br />
													<div>
														<b>
															<img
																src={wind}
																style={{ float: 'left', width: '15%' }}
																height='40px'
																width='40px'
															></img>
															<div style={{ paddingTop: '10px' }}>
																Wind : {this.state.chartdata[13]} km/h
															</div>
															<div style={{ clear: 'right' }} />
														</b>
													</div>
													<br />
													<div>
														<b>
															<img
																src={pollution}
																style={{ float: 'left', width: '12%' }}
																height='40px'
																width='40px'
															></img>
															<div style={{ paddingTop: '10px' }}>
																{this.settingCardData(this.state.chartdata[14])}
															</div>
															<div style={{ clear: 'right' }} />
														</b>
													</div>
												</CardBody>
												<CardFooter stats>
													<div className={useStyles.stats}>
														<h5>{this.state.value}</h5>
													</div>
												</CardFooter>
											</Card>
										</GridItem>
									)}
									{this.state && !this.state.isSpecific && (
										<GridItem xs={12} sm={12} md={3}>
											<div style={{ backgroundColor: 'white' }}>
												<p style={{ color: '#00acc1', padding: '0.5em' }}>
													Fine particulate matter (PM2.5) is an air pollutant
													that is a concern for people's health when levels in
													air are high. PM stands for particle pollution: the
													term for a mixture of solid particles and liquid
													droplets found in the air. Particulate matter contains
													microscopic solids or liquid droplets that are so
													small that they can be inhaled and cause serious
													health problems.
												</p>
											</div>
										</GridItem>
									)}
									{this.state && !this.state.isSpecific && this.state.isbar && (
										<GridItem xs={12} sm={12} md={6}>
											<div className={useStyles.root}>
												<CircularProgress
													style={{
														width: '70px',
														height: '70px',
														alignItems: 'center',
														justifyContent: 'center',
														position: 'absolute',
														left: '70%',
														bottom: '40%',
														right: '40%',
														top: '40%',
														color: '#8d0000',
													}}
												/>
											</div>
										</GridItem>
									)}
									<GridItem xs={12} sm={12} md={6}>
										{this.state && this.state.isSpecific && (
											<div style={{ backgroundColor: 'white' }}>
												<p style={{ color: '#00acc1', padding: '0.5em' }}>
													Fine particulate matter (PM2.5) is an air pollutant
													that is a concern for people's health when levels in
													air are high. PM stands for particle pollution: the
													term for a mixture of solid particles and liquid
													droplets found in the air. Particulate matter contains
													microscopic solids or liquid droplets that are so
													small that they can be inhaled and cause serious
													health problems.
												</p>
											</div>
										)}
										<Card chart>
											<CardHeader color='info'>
												<ChartistGraph
													className='ct-chart'
													data={
														this.graphPollution(
															this.state.chartdata[8],
															this.state.chartdata[1]
														).data
													}
													type='Line'
													options={
														this.graphPollution(
															this.state.chartdata[8],
															this.state.chartdata[1]
														).options
													}
													listener={
														this.graphPollution(
															this.state.chartdata[8],
															this.state.chartdata[1]
														).animation
													}
												/>
											</CardHeader>
											<CardBody>
												<h4> pollution of last 10 days</h4>
											</CardBody>
										</Card>
									</GridItem>

									<GridItem xs={12} sm={12} md={6}>
										<Card chart>
											<CardHeader color='info'>
												<ChartistGraph
													className='ct-chart'
													data={
														this.graph(
															this.state.chartdata[0],
															this.state.chartdata[2],
															this.state.chartdata[3],
															this.state.chartdata[1]
														).data
													}
													type='Line'
													options={
														this.graph(
															this.state.chartdata[0],
															this.state.chartdata[2],
															this.state.chartdata[3],
															this.state.chartdata[1]
														).options
													}
													listener={
														this.graph(
															this.state.chartdata[0],
															this.state.chartdata[2],
															this.state.chartdata[3],
															this.state.chartdata[1]
														).animation
													}
												/>
											</CardHeader>
											<CardBody>
												<h4> Temperature from past 10 days</h4>
											</CardBody>
										</Card>
									</GridItem>

									<GridItem xs={12} sm={12} md={6}>
										<Card chart>
											<CardHeader color='info'>
												<ChartistGraph
													className='ct-chart'
													data={
														this.graph(
															this.state.chartdata[4],
															this.state.chartdata[6],
															this.state.chartdata[7],
															this.state.chartdata[5]
														).data
													}
													type='Line'
													options={
														this.graph(
															this.state.chartdata[4],
															this.state.chartdata[6],
															this.state.chartdata[7],
															this.state.chartdata[5]
														).options
													}
													listener={
														this.graph(
															this.state.chartdata[4],
															this.state.chartdata[6],
															this.state.chartdata[7],
															this.state.chartdata[5]
														).animation
													}
												/>
											</CardHeader>
											<CardBody>
												<h4> Temperature of upcoming 10 days</h4>
											</CardBody>
										</Card>
									</GridItem>
								</GridContainer>

								<GridItem xs={12} sm={12} md={12}>
									<World />
								</GridItem>
							</GridContainer>
						</div>
					)}
				</div>
			</div>
		);
	}
}
export default CurrentTrends;

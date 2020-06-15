import React, { Component } from 'react';

import { floor } from 'mathjs';
import { ceil } from 'mathjs';
import Autosuggest from 'react-autosuggest';
import 'react-autosuggest/dist/theme.js';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import ColorBar from 'react-color-bar';
import 'react-datepicker/dist/react-datepicker.css';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import GridItem from '../Grid/GridItem.js';
import GridContainer from '../Grid/GridContainer.js';
import Button from '../CustomButtons/Button.js';
import Card from '../Card/Card.js';
import CardHeader from '../Card/CardHeader.js';
import CardBody from '../Card/CardBody.js';
import CardFooter from '../Card/CardFooter.js';
import { Form } from 'react-bootstrap';
import Punjab from './Maps/punjab.js';
import Sindh from './Maps/sindh.js';
import AzadKashmir from './Maps/azadkashmir';
import Pakistan from './Maps/pakistan.js';
import Balochistan from './Maps/balochistan';
import KPK from './Maps/KPK.js';
import Islamabad from './Maps/Islamabad.js';
import FATA from './Maps/FATA.js';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';

const styles = {
	cardCategoryWhite: {
		color: 'rgba(255,255,255,.62)',
		margin: '0',
		fontSize: '14px',
		marginTop: '0',
		marginBottom: '0',
	},
	cardTitleWhite: {
		color: '#FFFFFF',
		marginTop: '0px',
		minHeight: 'auto',
		fontWeight: '300',
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		marginBottom: '3px',
		textDecoration: 'none',
	},
};

const useStyles = makeStyles(styles);

var languages = [];
var sindhCities = [
	{ name: 'Badin' },
	{ name: 'Dadu' },
	{ name: 'Ghotki' },
	{ name: 'Hyderabad' },
	{ name: 'Jacobabad' },
	{ name: 'Jamshoro' },
	{ name: 'Karachi ' },
	{ name: 'Kashmore' },
	{ name: 'Khairpur' },
	{ name: 'Larkana' },
	{ name: 'Matiari' },
	{ name: 'Mirpur Khas' },
	{ name: 'Naushahro Firoze' },
	{ name: 'Shaheed Benazi Abad' },
	{ name: 'Shahdadkot' },
	{ name: 'Sanghar' },
	{ name: 'Shikarpur' },
	{ name: 'Sukkur' },
	{ name: 'Tando Allahyar' },
	{ name: 'Tando Muhammad Khan' },
	{ name: 'Tharparkar' },
	{ name: 'Thatta' },
	{ name: 'Umerkot' },
];
var azadkashmirCities = [
	{ name: 'Bagh' },
	{ name: 'Bhimber' },
	{ name: 'Kotli' },
	{ name: 'Mirpur' },
	{ name: 'Muzaffarabad' },
	{ name: 'Neelam' },
	{ name: 'Poonch ' },
	{ name: 'Sudhanoti ' },
];
const instructions = [
	{
		startpm: '0',
		endpm: '12',
		status: 'Good',
		type: 'Normal',
		effect: 'Air quality is very good. There are no health risks. ',
		precautions: 'Air quality is very good. There are no health risks.',
		travelSuggestion:
			'You can travel freely. The pollution level is good and safe',
	},
	{
		startpm: '0',
		endpm: '12',
		status: 'Good',
		type: 'Other',
		effect: 'Air quality is very good. There are no health risks',
		precautions: 'Air quality is very good. There are no health risks',
		travelSuggestion:
			'You can travel freely. The pollution level is good and safe',
	},
	{
		startpm: '13',
		endpm: '35',
		status: 'Moderate',
		type: 'Normal',
		effect: 'There are no health risks for you.',
		precautions: 'No precautionary measures needed.',
		travelSuggestion:
			'You can travel freely. This pollution level is safe for you.',
	},
	{
		startpm: '13',
		endpm: '35',
		status: 'Moderate',
		type: 'Other',
		effect:
			'Air quality is satisfactory but there may be moderate health concerns for you. You may experience slight respiratory symptoms but chances are less.',
		precautions:
			'To avoid any risk avoid heavy or prolong exertions.  Reduce the time of activity that include heavy exertions. Or replace the activity with any other one.',
		travelSuggestion:
			'You can continue with any outdoor plans or travelling. The city pollution level is moderate today.',
	},
	{
		startpm: '36',
		endpm: '55',
		status: 'Unhealthy for sensitive groups',
		type: 'Normal',
		effect: 'You may begin to feel a little discomfort in breathing.',
		precautions:
			'If you experience any symptoms then limit your outdoor activities. Otherwise this pollution level is not alarm for you.',
		travelSuggestion:
			'You can continue with any outdoor plans or travelling. The city pollution level is good for you.',
	},
	{
		startpm: '36',
		endpm: '55',
		status: 'Unhealthy for sensitive groups',
		type: 'Other',
		effect:
			'There is an increase in likelihood of respiratory symptoms and premature mortality to some extent. Long term exposure can aggravate your disease and may lead to heart attack.',
		precautions:
			'Limit prolong exertion. Reduce activity time or substitute another activity that involves less exertion. For example go for a walk instead of jog.',
		travelSuggestion:
			'Try not to travel if it’s not urgent.But in the other case it’s not very dangerous if you choose to move. Just take care and follow the precautions.',
	},
	{
		startpm: '56',
		endpm: '150',
		status: 'Unhealthy',
		type: 'Normal',
		effect:
			'You can experience significant increase in respiratory affects. Long term exposures can lead to heart attacks and arrhythmias.',
		precautions:
			'Avoid or limit prolonged exertions. Reduce activity time or substitute another activity that involves less exertion. For example go for a walk instead of jog. Do not exercise near busy roads. Don’t smoke. Use of vacuum cleaner can help reduce particle level inside house.',
		travelSuggestion:
			'Try not to travel if it’s not urgent.But in the other case it’s not very dangerous if you choose to move. Just take care and follow the precautions.',
	},
	{
		startpm: '56',
		endpm: '150',
		status: 'Unhealthy',
		type: 'Other',
		effect:
			'you can experience serious health effects. Increase aggravation of heart or lung disease. Long term exposures can lead to heart attacks.',
		precautions:
			'Don’t do activities that include heavy exertions. Take several precautionary actions like do not exercise near busy roads. Don’t smoke. Lessen the use of candles and wood burning stoves.',
		travelSuggestion:
			'You should cancel your outdoor plans. But if they are urgent try to limit the time. And wear masks while going outside. If you are not the resident of this city and planning to travel to here consider re planning your trip.',
	},
	{
		startpm: '151',
		endpm: '250',
		status: 'Very Unhealthy',
		type: 'Normal',
		effect:
			'You can have difficulty in breathing. And may experience serious respiratory symptoms. Long term exposures can lead to heart attacks',
		precautions:
			'Don’t do activities that include heavy exertions. Take several precautionary actions like do not exercise near busy roads. Don’t smoke. Lessen the use of candles and wood burning stoves.Wear masks when going outside.',
		travelSuggestion:
			'You should cancel your outdoor plans. But of they are urgent try to limit the time. And wear masks while going outside. If you are not the resident of this city and planning to travel to here consider re planning your trip.',
	},
	{
		startpm: '151',
		endpm: '250',
		status: 'Very Unhealthy',
		type: 'Other',
		effect:
			'you can experience serious health effects. Increase aggravation of heart or lung disease. Short term exposures can lead to heart attacks and other life threatening issues. Risks of premature mortality increases to a significant level.',
		precautions:
			'As the pollution level is not safe at all you should not do any activity that include heavy exertions. . Take several precautionary actions like do not exercise near busy roads. Don’t smoke. Lessen the use of candles and wood burning stoves. Room air cleaner can help reduce particle level inside house.',
		travelSuggestion:
			'You should not travel and risk your life. The pollution level is not safe at all today. Stay Inside.',
	},
	{
		startpm: '251',
		endpm: '500',
		status: 'Hazardous',
		type: 'Normal',
		effect:
			'This pollution level is very bad and hazardous for health. Even though you are not pollution sensitive but precautionary actions are must. You can experience serious health effects. Short term exposures can lead to heart attacks and arrhythmias.',
		precautions:
			'As the pollution level is not safe at all you should not do any activity that include heavy exertions. . Take several precautionary actions like do not exercise near busy roads. Don’t smoke. Lessen the use of candles and wood burning stoves. Room air cleaner can help reduce particle level inside house',
		travelSuggestion:
			'You should not travel and risk your life. The pollution level is not safe at all today. Stay Inside.',
	},
	{
		startpm: '251',
		endpm: '500',
		status: 'Hazardous',
		type: 'Other',
		effect:
			'Pollution level is very hazardous. Serious risks of heart attacks and premature mortality in case of short term exposures. Serious aggravation of heart and lungs disease. Even a very short term exposure can cause a life threatening issue.',
		precautions:
			'the pollution level is not safe at all you should not do any activity that include heavy exertions. . Take several precautionary actions like do not exercise near busy roads. Don’t smoke. Lessen the use of candles and wood burning stoves. Room air cleaner can help reduce particle level inside house.',
		travelSuggestion:
			'You should not travel at any cost and risk your life. The pollution level is not safe at all today. Stay Inside. ',
	},
];
var punjabCities = [
	{ name: 'Attock' },
	{ name: 'Bahawalnagar' },
	{ name: 'Bahawalpur' },
	{ name: 'Bhakkar' },
	{ name: 'Chakwal' },
	{ name: 'Chiniot' },
	{ name: 'Dera Ghazi Khan ' },
	{ name: 'Faisalabad' },
	{ name: 'Gujranwala' },
	{ name: 'Gujrat' },
	{ name: 'Hafizabad' },
	{ name: 'Jhang' },
	{ name: 'Jhelum' },
	{ name: 'Kasur' },
	{ name: 'Khanewal' },
	{ name: 'Khushab' },
	{ name: 'Lahore' },
	{ name: 'Layyah' },
	{ name: 'Lodhran' },
	{ name: 'Mandi Bahauddin' },
	{ name: 'Mianwali' },
	{ name: 'Multan' },
	{ name: 'Muzaffargarh' },
	{ name: 'Narowal' },
	{ name: 'Nankana Sahib' },
	{ name: 'Okara' },
	{ name: 'Pakpattan' },
	{ name: 'Rahim Yar Khan' },
	{ name: 'Rajanpur' },
	{ name: 'Rawalpindi' },
	{ name: 'Sahiwal' },
	{ name: 'Sargodha' },
	{ name: 'Sheikhupura' },
	{ name: 'Sialkot' },
	{ name: 'Toba Tek Singh' },
	{ name: 'Vehari' },
];
var balochitsanCities = [
	{ name: 'Awaran' },
	{ name: 'Barkhan' },
	{ name: 'Kachhi (Bolan)' },
	{ name: 'Chagai' },
	{ name: 'Dera Bugti' },
	{ name: 'Gwadar' },
	{ name: 'Harnai' },
	{ name: 'Jafarabad' },
	{ name: 'Jhal Magsi' },
	{ name: 'Kalat' },
	{ name: 'Kech (Turbat)' },
	{ name: 'Kharan' },
	{ name: 'Kohlu' },
	{ name: 'Khuzdar' },
	{ name: 'Killa Abdullah' },
	{ name: 'Killa Saifullah' },
	{ name: 'Lasbela' },
	{ name: 'Loralai' },
	{ name: 'Mastung' },
	{ name: 'Musakhel' },
	{ name: 'Nasirabad' },
	{ name: 'Nushki' },
	{ name: 'Panjgur' },
	{ name: 'Pishin' },
	{ name: 'Quetta' },
	{ name: 'Sherani' },
	{ name: 'Sibi' },
	{ name: 'Washuk' },
	{ name: 'Zhob' },
	{ name: 'Ziarat' },
];
var fataCities = [
	{ name: 'Bajaur Agency' },
	{ name: 'Mohmand Agency' },
	{ name: 'Khyber Agency' },
	{ name: 'Frontier Region Peshawar' },
	{ name: 'Frontier Region Kohat' },
	{ name: 'Orakzai Agency' },
	{ name: 'Kurram Agency' },
	{ name: 'Frontier Region Bannu' },
	{ name: 'North Waziristan Agency' },
	{ name: 'Frontier Region Lakki Marwat' },
	{ name: 'Frontier Region Tank' },
	{ name: 'South Waziristan Agency' },
	{ name: 'Frontier Region Dera Ismail Khan' },
];
var kpkCities = [
	{ name: 'Abbottabad' },
	{ name: 'Bannu' },
	{ name: 'Battagram' },
	{ name: 'Buner' },
	{ name: 'Charsadda' },
	{ name: 'Chitral' },
	{ name: 'Dera Ismail Khan' },
	{ name: 'Dir Upper' },
	{ name: 'Dir Lower' },
	{ name: 'Hangu' },
	{ name: 'Haripur' },
	{ name: 'Karak' },
	{ name: 'Kohat' },
	{ name: 'Kohistan' },
	{ name: 'Lakki Marwat' },
	{ name: 'Malakand' },
	{ name: 'Mansehra' },
	{ name: 'Mardan' },
	{ name: 'Nowshera' },
	{ name: 'Peshawar' },
	{ name: 'Swabi' },
	{ name: 'Swat' },
	{ name: 'Shangla' },
	{ name: 'Tank' },
];
var islCity = [{ name: 'Islamabad' }];

const currentdate = new Date();
const maxdate = currentdate.setDate(currentdate.getDate() + 13); //set new date 7 days from now(the correct 7 days)// Teach Autosuggest how to calculate suggestions for any given input value.

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

let graph = [];
class Pollution1 extends Component {
	static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

	constructor(props) {
		super(props);
		this.state = {
			hour: '',
			startDate: new Date(),
			endDate: new Date(),
			disease: 'heart disease',
			show_button: true,
			mydata: null,
			chart: null,
			dayDifference: '',
			endingDay: '',
			recommendation: null,
			//for auto suggest
			value: '',
			suggestions: [],
			all_suggestions: [],
			daily_suggestion: [],
			content: '',
			setContent: '',
			province: 'Pakistan',
			hour2: '',
			mappm25: '',
			selectedhour: '0',
			circlebar: '',
		};
	}

	onChange = (event, { newValue }) => {
		this.setState({
			value: newValue,
			chart: null,
			mydata: null,
			daily_suggestion: [],
			all_suggestions: [],
		});
		graph = [];
	};
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

	submit = () => {
		console.log(this.state.hour2);

		if (this.state.endingDay < 1) {
			alert('Please enter correct dates');
		} else {
			fetch('http://localhost:1000/api/pollution', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					city: this.state.value,
					// days: this.state.days,
					disease: this.state.disease,
					dayDifference: this.state.dayDifference,
					endingDay: this.state.endingDay,
					hour2: this.state.hour2,
				}),
			})
				.then(async (data) => {
					var alldata = await this.callBackendAPI();
					console.log(alldata);
					//setting map city color based on current value
					var mappm25data = alldata.express[5]
						.toString()
						.slice(1, this.state.mappm25.length - 1);
					this.setState({
						mappm25: mappm25data,
					});
					//	console.log(this.state.mappm25);
					///////////pm25 of graph///////
					var pm25val = alldata.express[1];
					var withoutEnds = pm25val
						.toString()
						.substring('0', pm25val.length - 1);
					var pm25splitted = withoutEnds.split(',');
					var finalArrayPM25 = [];
					pm25splitted.forEach(function (value) {
						finalArrayPM25.push(
							value.toString().substring('8', value.length - 2)
						);
					});
					///////////////////SPLITTING Time///////////////////////////
					var timeval = alldata.express[2];
					var newtime = timeval.toString().substring('1', timeval.length - 1);
					var timesplitted = newtime.split(',');
					var finaltime = [0];
					timesplitted.forEach(function (value) {
						var x = value.toString().substring('2', value.length - 1);
						if (x != '') {
							finaltime.push(x);
						}
					});
					//
					finaltime.map((i, e) =>
						graph.push({ pm: i, PM25: finalArrayPM25[e] })
					);

					var allStringPre = '';
					var day = 1;
					for (let i = 3; i < alldata.express.length; i++) {
						allStringPre =
							allStringPre + ' Day = ' + day + ' ' + alldata.express[i] + '\n';
						day = day + 1;
					}
					var index = 0;

					var d = this.state.endingDay * 24;
					var type = '';
					if (this.state.disease != 'Normal') {
						type = 'Other';
					} else {
						type = 'Normal';
					}
					var daycard = 0;

					for (let j = 0; j < d; j++) {
						var pm25 = floor(finalArrayPM25[index]);
						var x = this.getIndex(
							'' + pm25,
							type,
							instructions,
							'startpm',
							'endpm',
							'type'
						);
						if (index % 24 == 0) {
							daycard = daycard + 1;
						}
						const dailyObj = {
							day: daycard,
							hour: finaltime[index],
							pm25: finalArrayPM25[index],
							status: instructions[x]['status'],
							effect: instructions[x]['effect'],
							precaution: instructions[x]['precautions'],
							travelSuggestion: instructions[x]['travelSuggestion'],
						};
						index = index + 1;
						this.setState({
							daily_suggestion: this.state.daily_suggestion.concat(dailyObj),
						});
					}
					var chunk = this.chunkArray(this.state.daily_suggestion, 24);

					//	console.log(this.state.daily_suggestion);
					this.setState({
						mydata: allStringPre,
						show_button: true,
						chart: graph,
						all_suggestions: chunk,
					});
					console.log(this.state.all_suggestions);
				})

				.catch((err) => alert(err));
		}
	};
	chunkArray(array, size) {
		let result = [];
		for (let i = 0; i < array.length; i += size) {
			let chunk = array.slice(i, i + size);
			result.push(chunk);
		}
		return result;
	}

	setMap = () => {
		if (this.state.province == 'Pakistan') {
			return <Pakistan />;
		}
		if (this.state.province != 'Pakistan') {
			console.log(this.state.mappm25);
			if (this.state.province == 'Sindh') {
				languages = sindhCities;
				return (
					<Sindh cityname={this.state.value} valuepm25={this.state.mappm25} />
				);
			} else if (this.state.province == 'Punjab') {
				languages = punjabCities;

				return (
					<Punjab cityname={this.state.value} valuepm25={this.state.mappm25} />
				);
			} else if (this.state.province == 'AzadKashmir') {
				languages = azadkashmirCities;

				return (
					<AzadKashmir
						cityname={this.state.value}
						valuepm25={this.state.mappm25}
					/>
				);
			} else if (this.state.province == 'Balochistan') {
				languages = balochitsanCities;

				return (
					<Balochistan
						cityname={this.state.value}
						valuepm25={this.state.mappm25}
					/>
				);
			} else if (this.state.province == 'KPK') {
				languages = kpkCities;

				return (
					<KPK cityname={this.state.value} valuepm25={this.state.mappm25} />
				);
			} else if (this.state.province == 'Islamabad') {
				languages = islCity;

				return (
					<Islamabad
						cityname={this.state.value}
						valuepm25={this.state.mappm25}
					/>
				);
			} else if (this.state.province == 'Tribal') {
				languages = fataCities;
				return (
					<FATA cityname={this.state.value} valuepm25={this.state.mappm25} />
				);
			}
		}
	};
	startDateChange = async (date) => {
		await this.setState({
			startDate: date,
			hour2: currentdate.getHours() + '00',
		});
		await this.startDifference();
	};

	startDifference() {
		var tempDate = new Date();
		var Difference_In_Time =
			this.state.startDate.getTime() - tempDate.getTime();

		// To calculate the no. of days between two dates
		var Difference_In_Days = ceil(Difference_In_Time / (1000 * 3600 * 24));

		this.setState({
			dayDifference: Difference_In_Days,
		});
	}

	endDateChange = async (date) => {
		await this.setState({
			endDate: date,
		});
		await this.endDifference();
	};

	endDifference() {
		var Difference_In_Time2 =
			this.state.endDate.getTime() - this.state.startDate.getTime();

		// To calculate the no. of days between two dates
		var Difference_In_Days2 =
			ceil(Difference_In_Time2 / (1000 * 3600 * 24)) + 1;
		this.setState({
			endingDay: Difference_In_Days2,
		});
	}

	getIndex(sp, st, arr, startpm, endpm, type) {
		var nsp, nep;
		if ((sp >= 0) & (sp <= 12)) {
			nsp = '0';
			nep = '12';
		}
		if ((sp >= 13) & (sp <= 35)) {
			nsp = '13';
			nep = '35';
		}
		if ((sp >= 36) & (sp <= 55)) {
			nsp = '36';
			nep = '55';
		}
		if ((sp >= 56) & (sp <= 150)) {
			nsp = '56';
			nep = '150';
		}
		if ((sp >= 151) & (sp <= 250)) {
			nsp = '151';
			nep = '250';
		}
		if ((sp >= 251) & (sp <= 500)) {
			nsp = '251';
			nep = '500';
		}

		for (var i = 0; i < arr.length; i++) {
			if (
				(arr[i][startpm] === nsp) &
				(arr[i][endpm] === nep) &
				(arr[i][type] === st)
			) {
				return i;
			}
		}
		return -1; //to handle the case where the value doesn't exist
	}
	settingCardData(day) {
		var obj = '';

		var index = parseInt(day) - 1;
		var suggestArray = this.state.all_suggestions[index];
		for (var i = 0; i < suggestArray.length; i++) {
			if (suggestArray[i].hour == this.state.selectedhour) {
				obj = suggestArray[i];
			}
		}
		return obj;
	}

	componentDidMount() {}
	callBackendAPI = async () => {
		const response = await fetch('http://localhost:1000/api/Pollution');
		const body = await response.json();
		if (response.status !== 200) {
			throw Error(body.message);
		}
		return body;
	};

	render() {
		const { value, suggestions } = this.state;
		const inputProps = {
			placeholder: 'City Name',
			value,
			onChange: this.onChange,
		};
		const data = [
			{
				value: 5,
				color: '#15AB00',
				legendLabel: 'Good ( 0 - 12 )',
			},
			{
				value: 5,
				color: '#FEC34D',
				legendLabel: 'Moderate ( 12 - 35 )',
			},
			{
				value: 5,
				color: '#FF5C00',
				legendLabel: 'Unhealthy For sensitive Groups ( 35 - 55 )',
			},
			{
				value: 5,
				color: '#FF2B00',
				legendLabel: 'Unhealthy ( 55 - 150 )',
			},
			{
				value: 5,
				color: '#B44010',
				legendLabel: 'Very Unhealthy ( 150 - 250 )',
			},
			{
				value: 5,
				color: '#800000',
				legendLabel: 'Hazardous	( 250 - 500 )',
			},
		];
		return (
			<div>
				<Form>
					<GridContainer>
						<GridItem xs={12} sm={12} md={4}>
							<Card>
								<CardHeader color='primary'>
									<h4 className={useStyles.cardTitleWhite}>Fill Form</h4>
									<p className={useStyles.cardCategoryWhite}>
										To get specific data
									</p>
								</CardHeader>
								<CardBody>
									<GridContainer>
										<GridItem xs={12} sm={12} md={8}>
											<InputLabel id='demo-simple-select-required-label'>
												Select Region
											</InputLabel>
											<Select
												labelId='demo-simple-select-required-label'
												id='demo-simple-select-required'
												value={this.state.province}
												className={useStyles.selectEmpty}
												onChange={(e) =>
													this.setState({
														province: e.target.value,
														circlebar: '',
													})
												}
											>
												<MenuItem value='AzadKashmir'>Azad Kashmir</MenuItem>
												<MenuItem value='Balochistan'>Balochistan</MenuItem>
												<MenuItem value='Tribal'>
													Federally Administered Tribal Areas
												</MenuItem>
												<MenuItem value='Islamabad'>Islamabad</MenuItem>
												<MenuItem value='KPK'>Khyber Pakhtun Khwa</MenuItem>
												<MenuItem value='Punjab'>Punjab</MenuItem>
												<MenuItem value='Sindh'>Sindh</MenuItem>
											</Select>
										</GridItem>
									</GridContainer>
									<GridContainer>
										<GridItem xs={12} sm={12} md={10}>
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
											/>
										</GridItem>
									</GridContainer>
									<GridContainer>
										<GridItem xs={12} sm={12} md={10}>
											<InputLabel id='demo-simple-select-required-label'>
												Select which category you belong to. If you belong to
												more than one you can select any one of them.
											</InputLabel>
											<Select
												labelId='demo-simple-select-required-label'
												id='demo-simple-select-required'
												value={this.state.disease}
												className={useStyles.selectEmpty}
												onChange={(e) =>
													this.setState({ disease: e.target.value })
												}
											>
												<MenuItem value='heart disease'>
													I have any heart Disease
												</MenuItem>
												<MenuItem value='any enviromental allergy'>
													I have any kind of enviromental allergy{' '}
												</MenuItem>
												<MenuItem value='lungs disease'>
													I have any Lungs disease{' '}
												</MenuItem>
												<MenuItem value='older adult'>
													My age is greater than 60 years
												</MenuItem>
												<MenuItem value='children'>
													My age is less than 5 years
												</MenuItem>
												<MenuItem value='Normal'>
													I belong to none of the above
												</MenuItem>
											</Select>
										</GridItem>
									</GridContainer>
									<GridContainer>
										<GridItem xs={12} sm={12} md={6}>
											<InputLabel>Start Date</InputLabel>
											<DatePicker
												selected={this.state.startDate}
												onChange={this.startDateChange}
												minDate={moment().toDate()}
												maxDate={maxdate}
											/>
										</GridItem>
									</GridContainer>
									<GridContainer>
										<GridItem xs={12} sm={12} md={6}>
											<InputLabel>End Date</InputLabel>
											<DatePicker
												selected={this.state.endDate}
												onChange={this.endDateChange}
												minDate={moment().toDate()}
												maxDate={maxdate}
											/>
										</GridItem>
									</GridContainer>
								</CardBody>
								<CardFooter>
									<Button
										color='primary'
										onClick={async () => {
											await this.submit();
											this.setState({ circlebar: 'true' });
										}}
									>
										Show Results
									</Button>
								</CardFooter>
							</Card>
						</GridItem>

						<GridItem xs={12} sm={12} md={8}>
							{this.setMap()}
						</GridItem>
					</GridContainer>

					<GridContainer>
						<GridItem xs={12} sm={12} md={4}>
							<ColorBar data={data} />
						</GridItem>
						{this.state && this.state.chart && (
							<GridItem xs={12} sm={12} md={8}>
								<div style={{ backgroundColor: 'white' }}>
									<p style={{ color: 'black', padding: '0.5em' }}>
										<b>
											* Fine particulate matter (PM2.5) is an air pollutant that
											is a concern for people's health when levels in air are
											high. PM stands for particle pollution: the term for a
											mixture of solid particles and liquid droplets found in
											the air. Particulate matter contains microscopic solids or
											liquid droplets that are so small that they can be inhaled
											and cause serious health problems. The levels of PM 2.5
											and how dangerous they are displayed in the table.
										</b>{' '}
										<br />
										<b>
											* This Graph Shows the Value of PM 2.5 with an interval of
											3 hours in your selected dates. You can hover over the bar
											graph and see the value of PM 2.5 and match it with the
											table above that will help you know the Intensity Level.
										</b>
									</p>
								</div>
							</GridItem>
						)}

						{this.state && !this.state.chart && this.state.circlebar && (
							<div className={useStyles.root}>
								<CircularProgress
									style={{
										width: '70px',
										height: '70px',
										alignItems: 'center',
										justifyContent: 'center',
										position: 'absolute',
										left: '60%',
										// bottom: '10%',
										right: '30%',
										// top: '80%',
										color: '#8d0000',
									}}
									// color='#8d0000'
								/>
							</div>
						)}
						{this.state && this.state.chart && (
							<GridItem xs={12} sm={12} md={12}>
								<Card chart>
									<CardHeader color='danger'>
										<BarChart width={1000} height={350} data={this.state.chart}>
											<CartesianGrid strokeDasharray='3 3' />
											<XAxis dataKey='pm' />
											<YAxis />
											<Tooltip style={{ color: 'black' }} />
											<Legend />
											<Bar dataKey='PM25' fill='#D3D3D3' />
										</BarChart>
									</CardHeader>
									<CardBody>
										<h4 className={useStyles.cardTitle}>Pollution Graph</h4>
										<p className={useStyles.cardCategory}>
											Displaying Pm2.5 value
										</p>
										<p>X-Axis : Time</p>
										<p>Y-Axis : PM 2.5 Value</p>
									</CardBody>
								</Card>
							</GridItem>
						)}
					</GridContainer>
					<GridContainer>
						{this.state.all_suggestions.map((item, i) => (
							<GridItem xs={12} sm={12} md={4}>
								<Card chart>
									<CardHeader color='warning'>
										Day :{item[0].day}
										<Select
											labelId='demo-simple-select-required-label'
											id='demo-simple-select-required'
											value={this.state.selectedhour}
											className={useStyles.selectEmpty}
											onChange={(e) =>
												this.setState({ selectedhour: e.target.value })
											}
										>
											<MenuItem value='0'>12 AM</MenuItem>
											<MenuItem value='100'>1 AM</MenuItem>
											<MenuItem value='200'>2 AM</MenuItem>
											<MenuItem value='300'>3 AM</MenuItem>
											<MenuItem value='400'>4 AM</MenuItem>
											<MenuItem value='500'>5 AM</MenuItem>
											<MenuItem value='600'>6 AM </MenuItem>
											<MenuItem value='700'>7 AM </MenuItem>
											<MenuItem value='800'>8 AM </MenuItem>
											<MenuItem value='900'>9 AM</MenuItem>
											<MenuItem value='1000'>10 AM</MenuItem>
											<MenuItem value='1100'>11 AM</MenuItem>
											<MenuItem value='1200'>12 PM</MenuItem>
											<MenuItem value='1300'>1 PM</MenuItem>
											<MenuItem value='1400'>2 PM</MenuItem>
											<MenuItem value='1500'>3 PM</MenuItem>
											<MenuItem value='1600'>4 PM</MenuItem>
											<MenuItem value='1700'>5 PM</MenuItem>
											<MenuItem value='1800'>6 PM</MenuItem>
											<MenuItem value='1900'>7 PM</MenuItem>
											<MenuItem value='2000'>8 PM</MenuItem>
											<MenuItem value='2100'>9 PM</MenuItem>
											<MenuItem value='2200'>10 PM</MenuItem>
											<MenuItem value='2300'>11 PM</MenuItem>
										</Select>
									</CardHeader>

									<CardBody>
										<Card chart>
											<CardHeader color='danger'>PM 2.5</CardHeader>
											<CardBody>
												{this.settingCardData(item[0].day).pm25 +
													'		' +
													this.settingCardData(item[0].day).status}
											</CardBody>
										</Card>
										<Card chart>
											<CardHeader color='danger'>Effects</CardHeader>
											<CardBody>
												{this.settingCardData(item[0].day).effect}
											</CardBody>
										</Card>
										<Card chart>
											<CardHeader color='danger'>Precautions:</CardHeader>
											<CardBody>
												{this.settingCardData(item[0].day).precaution}
											</CardBody>
										</Card>{' '}
										<Card chart>
											<CardHeader color='danger'>
												Travel Suggestion :
											</CardHeader>
											<CardBody>
												{this.settingCardData(item[0].day).travelSuggestion}
											</CardBody>
										</Card>
									</CardBody>
								</Card>
							</GridItem>
						))}
					</GridContainer>
				</Form>
			</div>
		);
	}
}
export default Pollution1;

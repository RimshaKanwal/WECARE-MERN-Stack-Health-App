// Step 1 - Including react
import React from 'react';
import ReactDOM from 'react-dom';

// Step 2 - Including the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Step 3 - Including the fusioncharts library
import FusionCharts from 'fusioncharts';

// Step 4 - Including the map renderer
import FusionMaps from 'fusioncharts/fusioncharts.maps';

// Step 5 - Including the map definition file
// import World from 'fusioncharts/maps/fusioncharts.world';
import WorldMap from 'fusioncharts/maps/fusioncharts.worldwithcountries';

// Step 6 - Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Step 7 - Adding the map as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, FusionMaps, WorldMap, FusionTheme);

// Step 8 - Creating the JSON object to store the map configurations

// Step 10 - Creating the DOM element to pass the react-fusioncharts component
class World extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			coronaData: '',
		};
	}
	callBackendAPI = async (url) => {
		const response = await fetch(url);

		const body = await response.json();

		if (response.status !== 200) {
			throw Error(body.message);
		}
		return body;
	};
	componentDidMount() {
		this.callBackendAPI('https://api.covid19api.com/summary')
			.then((res) => this.setState({ coronaData: res }))
			.catch((err) => console.log(err));
	}
	tooltip(id) {
		var str =
			this.state.coronaData['Countries'][id].Country +
			'{br}Total: ' +
			this.state.coronaData['Countries'][id].TotalConfirmed +
			'{br}Deaths: ' +
			this.state.coronaData['Countries'][id].TotalDeaths +
			'{br}Recovered: ' +
			this.state.coronaData['Countries'][id].TotalRecovered;
		return str;
	}
	checkId(name) {
		var id = '';
		if (name == 'Antigua and Barbuda') {
			id = '01';
		} else if (name == 'Bahamas') {
			id = '02';
		} else if (name == 'Barbados') {
			id = '03';
		} else if (name == 'Belize') {
			id = '04';
		} else if (name == 'Canada') {
			id = '05';
		} else if (name == 'Costa Rica') {
			id = '06';
		} else if (name == 'Cuba') {
			id = '07';
		} else if (name == 'Dominica') {
			id = '08';
		} else if (name == 'Dominican Republic') {
			id = '09';
		} else if (name == 'El Salvador') {
			id = '10';
		} else if (name == 'Grenada') {
			id = '11';
		} else if (name == 'Guatemala') {
			id = '12';
		} else if (name == 'Haiti') {
			id = '13';
		} else if (name == 'Honduras') {
			id = '14';
		} else if (name == 'Jamaica') {
			id = '15';
		} else if (name == 'Mexico') {
			id = '16';
		} else if (name == 'Nicaragua') {
			id = '17';
		} else if (name == 'Panama') {
			id = '18';
		} else if (name == 'St. Kitts & Nevis') {
			id = '19';
		} else if (name == 'St. Lucia') {
			id = '20';
		} else if (name == 'St. Vincent & the Grenadines') {
			id = '21';
		} else if (name == 'Trinidad & Tobago') {
			id = '22';
		} else if (name == 'United States of America') {
			id = '23';
		} else if (name == 'Greenland') {
			id = '24';
		} else if (name == 'Argentina') {
			id = '25';
		} else if (name == 'Bolivia') {
			id = '26';
		} else if (name == 'Brazil') {
			id = '27';
		} else if (name == 'Chile') {
			id = '28';
		} else if (name == 'Colombia') {
			id = '29';
		} else if (name == 'Ecuador') {
			id = '30';
		} else if (name == 'Falkland Islands') {
			id = '31';
		} else if (name == 'French Guiana') {
			id = '32';
		} else if (name == 'Guyana') {
			id = '33';
		} else if (name == 'Paraguay') {
			id = '34';
		} else if (name == 'Peru') {
			id = '35';
		} else if (name == 'Suriname') {
			id = '36';
		} else if (name == 'Uruguay') {
			id = '37';
		} else if (name == 'Venezuela (Bolivarian Republic)') {
			id = '38';
		} else if (name == 'Algeria') {
			id = '39';
		} else if (name == 'Angola') {
			id = '40';
		} else if (name == 'Benin') {
			id = '41';
		} else if (name == 'Botswana') {
			id = '42';
		} else if (name == 'Burkina Faso') {
			id = '43';
		} else if (name == 'Burundi') {
			id = '44';
		} else if (name == 'Cameroon') {
			id = '45';
		} else if (name == 'Cape Verde') {
			id = '46';
		} else if (name == 'Central African Republic') {
			id = '47';
		} else if (name == 'Chad') {
			id = '48';
		} else if (name == 'Comoros') {
			id = '49';
		} else if (name == 'Ivory Coast') {
			id = '50';
		} else if (name == 'Congo (Brazzaville)') {
			id = '51';
		} else if (name == 'Djibouti') {
			id = '52';
		} else if (name == 'Egypt') {
			id = '53';
		} else if (name == 'Equatorial Guinea') {
			id = '54';
		} else if (name == 'Eritrea') {
			id = '55';
		} else if (name == 'Ethiopia') {
			id = '56';
		} else if (name == 'Gabon') {
			id = '57';
		} else if (name == 'Ghana') {
			id = '58';
		} else if (name == 'Guinea') {
			id = '59';
		} else if (name == 'Guinea-Bissau') {
			id = '60';
		} else if (name == 'Kenya') {
			id = '61';
		} else if (name == 'Lesotho') {
			id = '62';
		} else if (name == 'Liberia') {
			id = '63';
		} else if (name == 'Libya') {
			id = '64';
		} else if (name == 'Madagascar') {
			id = '65';
		} else if (name == 'Malawi') {
			id = '66';
		} else if (name == 'Mali') {
			id = '67';
		} else if (name == 'Mauritania') {
			id = '68';
		} else if (name == 'Morocco') {
			id = '69';
		} else if (name == 'Mozambique') {
			id = '70';
		} else if (name == 'Namibia') {
			id = '71';
		} else if (name == 'Niger') {
			id = '72';
		} else if (name == 'Nigeria') {
			id = '73';
		} else if (name == 'Rwanda') {
			id = '74';
		} else if (name == 'Sao Tome and Principe') {
			id = '75';
		} else if (name == 'Senegal') {
			id = '76';
		} else if (name == 'Seychelles') {
			id = '77';
		} else if (name == 'Sierra Leone') {
			id = '78';
		} else if (name == 'Somalia') {
			id = '79';
		} else if (name == 'South Africa') {
			id = '80';
		} else if (name == 'Sudan') {
			id = '81';
		} else if (name == 'Swaziland') {
			id = '82';
		} else if (name == 'Tanzania, United Republic of') {
			id = '83';
		} else if (name == 'Togo') {
			id = '84';
		} else if (name == 'Tunisia') {
			id = '85';
		} else if (name == 'Uganda') {
			id = '86';
		} else if (name == 'Western Sahara') {
			id = '87';
		} else if (name == 'Zambia') {
			id = '88';
		} else if (name == 'Zimbabwe') {
			id = '89';
		} else if (name == 'Gambia') {
			id = '90';
		} else if (name == 'Congo (Kinshasa)') {
			id = '91';
		} else if (name == 'Mauritius') {
			id = '92';
		} else if (name == 'Afghanistan') {
			id = '93';
		} else if (name == 'Armenia') {
			id = '94';
		} else if (name == 'Azerbaijan') {
			id = '95';
		} else if (name == 'Bangladesh') {
			id = '96';
		} else if (name == 'Bhutan') {
			id = '97';
		} else if (name == 'Brunei') {
			id = '98';
		} else if (name == 'Myanmar') {
			id = '99';
		} else if (name == 'Cambodia') {
			id = '100';
		} else if (name == 'China') {
			id = '101';
		} else if (name == 'Timor-Leste') {
			id = '102';
		} else if (name == 'Georgia') {
			id = '103';
		} else if (name == 'India') {
			id = '104';
		} else if (name == 'Indonesia') {
			id = '105';
		} else if (name == 'Iran, Islamic Republic of') {
			id = '106';
		} else if (name == 'Japan') {
			id = '107';
		} else if (name == 'Kazakhstan') {
			id = '108';
		} else if (name == 'Korea (North)') {
			id = '109';
		} else if (name == 'Korea (South)') {
			id = '110';
		} else if (name == 'Kyrgyzstan') {
			id = '111';
		} else if (name == 'Laos') {
			id = '112';
		} else if (name == 'Malaysia') {
			id = '113';
		} else if (name == 'Mongolia') {
			id = '114';
		} else if (name == 'Nepal') {
			id = '115';
		} else if (name == 'Pakistan') {
			id = '116';
		} else if (name == 'Philippines') {
			id = '117';
		} else if (name == 'Russian Federation') {
			id = '118';
		} else if (name == 'Singapore') {
			id = '119';
		} else if (name == 'Sri Lanka') {
			id = '120';
		} else if (name == 'Tajikistan') {
			id = '121';
		} else if (name == 'Thailand') {
			id = '122';
		} else if (name == 'Turkmenistan') {
			id = '123';
		} else if (name == 'Uzbekistan') {
			id = '124';
		} else if (name == 'Viet Nam') {
			id = '125';
		} else if (name == 'Albania') {
			id = '129';
		} else if (name == 'Andorra') {
			id = '130';
		} else if (name == 'Austria') {
			id = '131';
		} else if (name == 'Belarus') {
			id = '132';
		} else if (name == 'Belgium') {
			id = '133';
		} else if (name == 'Bosnia and Herzegovina') {
			id = '134';
		} else if (name == 'Bulgaria') {
			id = '135';
		} else if (name == 'Croatia') {
			id = '136';
		} else if (name == 'Czech Republic') {
			id = '137';
		} else if (name == 'Denmark') {
			id = '138';
		} else if (name == 'Estonia') {
			id = '139';
		} else if (name == 'Finland') {
			id = '140';
		} else if (name == 'France') {
			id = '141';
		} else if (name == 'Germany') {
			id = '142';
		} else if (name == 'Greece') {
			id = '143';
		} else if (name == 'Hungary') {
			id = '144';
		} else if (name == 'Iceland') {
			id = '145';
		} else if (name == 'Ireland') {
			id = '146';
		} else if (name == 'Italy') {
			id = '147';
		} else if (name == 'Latvia') {
			id = '148';
		} else if (name == 'Liechtenstein') {
			id = '149';
		} else if (name == 'Lithuania') {
			id = '150';
		} else if (name == 'Luxembourg') {
			id = '151';
		} else if (name == 'Macedonia') {
			id = '152';
		} else if (name == 'Malta') {
			id = '153';
		} else if (name == 'Moldova') {
			id = '154';
		} else if (name == 'Monaco') {
			id = '155';
		} else if (name == 'Montenegro') {
			id = '156';
		} else if (name == 'Netherlands') {
			id = '157';
		} else if (name == 'Norway') {
			id = '158';
		} else if (name == 'Poland') {
			id = '159';
		} else if (name == 'Portugal') {
			id = '160';
		} else if (name == 'Romania') {
			id = '161';
		} else if (name == 'San Marino') {
			id = '162';
		} else if (name == 'Serbia') {
			id = '163';
		} else if (name == 'Slovakia') {
			id = '164';
		} else if (name == 'Slovenia') {
			id = '165';
		} else if (name == 'Spain') {
			id = '166';
		} else if (name == 'Sweden') {
			id = '167';
		} else if (name == 'Switzerland') {
			id = '168';
		} else if (name == 'Ukraine') {
			id = '169';
		} else if (name == 'United Kingdom') {
			id = '170';
		} else if (name == 'Vatican City ') {
			id = '171';
		} else if (name == 'Cyprus') {
			id = '172';
		} else if (name == 'Turkey') {
			id = '173';
		} else if (name == 'Australia') {
			id = '175';
		} else if (name == 'Fiji') {
			id = '176';
		} else if (name == 'Kiribati') {
			id = '177';
		} else if (name == 'Marshall Islands') {
			id = '178';
		} else if (name == 'Micronesia') {
			id = '179';
		} else if (name == 'Nauru') {
			id = '180';
		} else if (name == 'New Zealand') {
			id = '181';
		} else if (name == 'Republic of Palau') {
			id = '182';
		} else if (name == 'Papua New Guinea') {
			id = '183';
		} else if (name == 'Samoa') {
			id = '184';
		} else if (name == 'Solomon Islands') {
			id = '185';
		} else if (name == 'Tonga') {
			id = '186';
		} else if (name == 'Tuvalu') {
			id = '187';
		} else if (name == 'Vanuatu') {
			id = '188';
		} else if (name == 'New Caledonia') {
			id = '189';
		} else if (name == 'Bahrain') {
			id = '190';
		} else if (name == 'Iraq') {
			id = '191';
		} else if (name == 'Israel') {
			id = '192';
		} else if (name == 'Jordan') {
			id = '193';
		} else if (name == 'Kuwait') {
			id = '194';
		} else if (name == 'Lebanon') {
			id = '195';
		} else if (name == 'Oman') {
			id = '196';
		} else if (name == 'Qatar') {
			id = '197';
		} else if (name == 'Saudi Arabia') {
			id = '198';
		} else if (name == 'Syrian Arab Republic (Syria)') {
			id = '199';
		} else if (name == 'United Arab Emirates') {
			id = '200';
		} else if (name == 'Yemen') {
			id = '201';
		} else if (name == 'Puerto Rico') {
			id = '202';
		} else if (name == 'Cayman Islands') {
			id = '203';
		} else if (name == 'South Sudan') {
			id = '204';
		} else if (name == 'Kosovo') {
			id = '205';
		} else if (name == 'Aruba') {
			id = '206';
		} else if (name == 'Anguilla') {
			id = '207';
		} else if (name == 'American Samoa') {
			id = '208';
		} else if (name == 'Bermuda') {
			id = '209';
		} else if (name == 'BES Islands') {
			id = '210';
		} else if (name == 'Cocos (Keeling) Islands') {
			id = '211';
		} else if (name == 'Cook Islands') {
			id = '212';
		} else if (name == 'Christmas Island') {
			id = '213';
		} else if (name == 'Curacao') {
			id = '214';
		} else if (name == 'Faroe Islands') {
			id = '215';
		} else if (name == 'French Polynesia') {
			id = '216';
		} else if (name == 'Gibraltar') {
			id = '217';
		} else if (name == 'Guam') {
			id = '218';
		} else if (name == 'Guadeloupe') {
			id = '219';
		} else if (name == 'Gaza Strip') {
			id = '220';
		} else if (name == 'Guernsey') {
			id = '221';
		} else if (name == 'Isle of Man') {
			id = '222';
		} else if (name == 'Jersey') {
			id = '223';
		} else if (name == 'Kingman Reef') {
			id = '224';
		} else if (name == 'Maldives') {
			id = '225';
		} else if (name == 'Montserrat') {
			id = '226';
		} else if (name == 'Mayotte') {
			id = '227';
		} else if (name == 'Martinique') {
			id = '228';
		} else if (name == 'Norfolk Island') {
			id = '229';
		} else if (name == 'Northern Mariana Islands') {
			id = '230';
		} else if (name == 'Niue') {
			id = '231';
		} else if (name == 'Pitcairn Islands') {
			id = '232';
		} else if (name == 'La Réunion') {
			id = '233';
		} else if (name == 'Sint Maarten') {
			id = '234';
		} else if (name == 'Saint Helena') {
			id = '235';
		} else if (name == 'Saint Pierre and Miquelon') {
			id = '236';
		} else if (name == 'Turks and Caicos Islands') {
			id = '237';
		} else if (name == 'Virgin Islands (UK)') {
			id = '238';
		} else if (name == 'Virgin Islands (US)') {
			id = '239';
		} else if (name == 'Palestine') {
			id = '240';
		} else if (name == 'Wallis and Futuna') {
			id = '241';
		} else if (name == 'Cape Town') {
			id = '242';
		} else if (name == 'La Paz') {
			id = '243';
		} else if (name == 'Abkhazia') {
			id = '244';
		} else if (name == 'Netherlands Antilles') {
			id = '245';
		} else if (name == 'Northern Cyprus') {
			id = '246';
		} else if (name == 'Svalbard and Jan Mayen Islands') {
			id = '247';
		} else if (name == 'Tokelau') {
			id = '248';
		}

		return id;
	}
	alldata() {
		var data = [];
		//Afghanistan
		for (let i = 0; i < this.state.coronaData['Countries'].length; i++) {
			data.push({
				id: this.checkId(this.state.coronaData['Countries'][i].Country),
				value: this.state.coronaData['Countries'][i].TotalConfirmed,
				tooltext: this.tooltip(i),
			});
		}
		//	console.log(data);
		return data;
	}

	render() {
		return (
			<div>
				{this.state && this.state.coronaData && (
					<ReactFC
						{...{
							type: 'worldwithcountries',
							width: '100%',
							height: '550',
							dataFormat: 'json',
							dataSource: {
								// Map Configuration
								chart: {
									caption: 'World Corona Statistics',
									subcaption: 'Hover over map to see data',
									labelsepchar: ': ',
									entityFillHoverColor: '#FFF9C4',
									theme: 'fusion',
								},
								// Aesthetics; ranges synced with the slider
								colorrange: {
									minvalue: '0',
									code: '#FFE0B2',
									gradient: '1',
									color: [
										{
											minvalue: '0',
											maxvalue: '500',
											color: '#ffebee',
										},
										{
											minvalue: '500',
											maxvalue: '5000',
											color: '#ffcdd2',
										},
										{
											minvalue: '5000',
											maxvalue: '20000',
											color: '#ef9a9a',
										},
										{
											minvalue: '20000',
											maxvalue: '50000',
											color: '#ef7373',
										},
										{
											minvalue: '50000',
											maxvalue: '100000',
											color: '#ef5350',
										},
										{
											minvalue: '100000',
											maxvalue: '150000',
											color: '#f44336',
										},
										{
											minvalue: '150000',
											maxvalue: '500000',
											color: '#e53935',
										},
										{
											minvalue: '500000',
											maxvalue: '1000000',
											color: '#d32f2f',
										},
										{
											minvalue: '1000000',
											maxvalue: '3000000',
											color: '#c62828',
										},
										{
											minvalue: '3000000',
											maxvalue: '4000000',
											color: '#b71c1c',
										},
									],
								},
								// Source data as JSON --> id represents countries of world.
								data: this.alldata(),
							},
						}}
					/>
				)}
			</div>
		);
	}
}
export default World;

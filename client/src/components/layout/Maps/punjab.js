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
import World from 'fusioncharts/maps/fusioncharts.world';
import Pakistan from 'fusioncharts/maps/fusioncharts.pakistan';
import PunjabPakistan from 'fusioncharts/maps/fusioncharts.punjabpakistan';

// Step 6 - Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Step 7 - Adding the map as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, FusionMaps, PunjabPakistan, FusionTheme);

// Step 8 - Creating the JSON object to store the map configurations

// Step 10 - Creating the DOM element to pass the react-fusioncharts component
class Punjab extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		const y = this.props.cityname;
		const val = this.props.valuepm25;

		console.log(y);
		var z = 0;
		if (y == 'Attock') {
			z = 1;
		} else if (y == 'Bahawalnagar') {
			z = 2;
		} else if (y == 'Bahawalpur') {
			z = 3;
		} else if (y == 'Bhakkar') {
			z = 4;
		} else if (y == 'Chakwal') {
			z = 5;
		} else if (y == 'Chiniot') {
			z = 6;
		} else if (y == 'Dera Ghazi Khan') {
			z = 7;
		} else if (y == 'Faisalabad') {
			z = 8;
		} else if (y == 'Gujranwala') {
			z = 9;
		} else if (y == 'Gujrat') {
			z = 10;
		} else if (y == 'Hafizabad') {
			z = 11;
		} else if (y == 'Jhang') {
			z = 12;
		} else if (y == 'Jhelum') {
			z = 13;
		} else if (y == 'Kasur') {
			z = 14;
		} else if (y == 'Khanewal') {
			z = 15;
		} else if (y == 'Khushab') {
			z = 16;
		} else if (y == 'Lahore') {
			z = 17;
		} else if (y == 'Layyah') {
			z = 18;
		} else if (y == 'Lodhran') {
			z = 19;
		} else if (y == 'Mandi Bahauddin') {
			z = 20;
		} else if (y == 'Mianwali') {
			z = 21;
		} else if (y == 'Multan') {
			z = 22;
		} else if (y == 'Muzaffargarh') {
			z = 23;
		} else if (y == 'Narowal') {
			z = 24;
		} else if (y == 'Nankana Sahib') {
			z = 25;
		} else if (y == 'Okara') {
			z = 26;
		} else if (y == 'Pakpattan') {
			z = 27;
		} else if (y == 'Rahim Yar Khan') {
			z = 28;
		} else if (y == 'Rajanpur') {
			z = 29;
		} else if (y == 'Rawalpindi') {
			z = 30;
		} else if (y == 'Sahiwal') {
			z = 31;
		} else if (y == 'Sargodha') {
			z = 32;
		} else if (y == 'Sheikhupura') {
			z = 33;
		} else if (y == 'Sialkot') {
			z = 34;
		} else if (y == 'Toba Tek Singh') {
			z = 35;
		} else if (y == 'Vehari') {
			z = 36;
		}

		return (
			<ReactFC
				{...{
					type: 'punjabpakistan',
					width: '800',
					height: '550',
					dataFormat: 'json',
					dataSource: {
						// Map Configuration
						chart: {
							caption: 'Pm2.5 INtensity Level',
							numbersuffix: 'µg/m³',
							includevalueinlabels: '1',
							labelsepchar: ': ',
							entityFillHoverColor: '#FFF9C4',
							theme: 'fusion'
						},
						// Aesthetics; ranges synced with the slider
						colorrange: {
							minvalue: '0',
							code: '#FFE0B2',
							gradient: '1',
							color: [
								{
									minvalue: '0',
									maxvalue: '12',
									color: '#15AB00'
								},
								{
									minvalue: '13',
									maxvalue: '35',
									color: '#FEC34D'
								},
								{
									minvalue: '36',
									maxvalue: '55',
									color: '#FF5C00'
								},
								{
									minvalue: '55',
									maxvalue: '150',
									color: '#FF2B00'
								},
								{
									minvalue: '150',
									maxvalue: '250',
									color: '#B44010'
								},
								{
									minvalue: '250',
									maxvalue: '500',
									color: '#800000'
								}
							]
						},
						// Source data as JSON --> id represents countries of world.
						data: [
							{
								id: '' + z,
								value: '' + val,
								showLabel: '1'
							}
						]
					}
				}}
			/>
		);
	}
}

export default Punjab;

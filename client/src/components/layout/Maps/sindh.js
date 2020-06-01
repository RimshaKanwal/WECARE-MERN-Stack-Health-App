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
import SindhPakistan from 'fusioncharts/maps/fusioncharts.sindh';

// Step 6 - Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Step 7 - Adding the map as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, FusionMaps, SindhPakistan, FusionTheme);

// Step 8 - Creating the JSON object to store the map configurations

// Step 10 - Creating the DOM element to pass the react-fusioncharts component
class Sindh extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		const y = this.props.cityname;
		const val = this.props.valuepm25;
		console.log(y);
		var z = 0;

		if (y == 'Badin') {
			z = 1;
		} else if (y == 'Dadu') {
			z = 2;
		} else if (y == 'Ghotki') {
			z = 3;
		} else if (y == 'Hyderabad') {
			z = 4;
		} else if (y == 'Jacobabad') {
			z = 5;
		} else if (y == 'Jamshoro') {
			z = 6;
		} else if (y == 'Karachi') {
			z = 7;
		} else if (y == 'Kashmore') {
			z = 8;
		} else if (y == 'Khairpur') {
			z = 9;
		} else if (y == 'Larkana') {
			z = 10;
		} else if (y == 'Matiari') {
			z = 11;
		} else if (y == 'Mirpur Khas') {
			z = 12;
		} else if (y == 'Naushahro Firoze') {
			z = 13;
		} else if (y == 'Shaheed Benazir Abad') {
			z = 14;
		} else if (y == 'Shahdadkot') {
			z = 15;
		} else if (y == 'Sanghar') {
			z = 16;
		} else if (y == 'Shikarpur') {
			z = 17;
		} else if (y == 'Sukkur') {
			z = 18;
		} else if (y == 'Tando Allahyarran') {
			z = 19;
		} else if (y == 'Tando Muhammad Khan') {
			z = 20;
		} else if (y == 'Tharparkar') {
			z = 21;
		} else if (y == 'Thatta') {
			z = 22;
		} else if (y == 'Umerkot') {
			z = 23;
		}

		return (
			<ReactFC
				{...{
					type: 'sindh',
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

export default Sindh;

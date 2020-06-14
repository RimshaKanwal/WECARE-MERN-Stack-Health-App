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
import FATAPakistan from 'fusioncharts/maps/fusioncharts.fata';

// Step 6 - Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Step 7 - Adding the map as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, FusionMaps, FATAPakistan, FusionTheme);

// Step 8 - Creating the JSON object to store the map configurations

// Step 10 - Creating the DOM element to pass the react-fusioncharts component
class FATA extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		const y = this.props.cityname;
		const val = this.props.valuepm25;
		console.log(y);
		var z = 0;

		if (y == 'Bajaur Agency') {
			z = 1;
		} else if (y == 'Mohmand Agency') {
			z = 2;
		} else if (y == 'Khyber Agency') {
			z = 3;
		} else if (y == 'Frontier Region Peshawar') {
			z = 4;
		} else if (y == 'Frontier Region Kohat') {
			z = 5;
		} else if (y == 'Orakzai Agency') {
			z = 6;
		} else if (y == 'Kurram Agency') {
			z = 7;
		} else if (y == 'Frontier Region Bannu') {
			z = 8;
		} else if (y == 'North Waziristan Agency') {
			z = 9;
		} else if (y == 'Frontier Region Lakki Marwat') {
			z = 10;
		} else if (y == 'Frontier Region Tank') {
			z = 11;
		} else if (y == 'South Waziristan Agency') {
			z = 12;
		} else if (y == 'Frontier Region Dera Ismail Khan') {
			z = 13;
		}
		return (
			<ReactFC
				{...{
					type: 'fata',
					width: '800',
					height: '550',
					dataFormat: 'json',
					dataSource: {
						// Map Configuration
						chart: {
							caption: 'Federally Administered Tribal Areas',
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
									maxvalue: '12',
									color: '#15AB00',
								},
								{
									minvalue: '13',
									maxvalue: '35',
									color: '#FEC34D',
								},
								{
									minvalue: '36',
									maxvalue: '55',
									color: '#FF5C00',
								},
								{
									minvalue: '55',
									maxvalue: '150',
									color: '#FF2B00',
								},
								{
									minvalue: '150',
									maxvalue: '250',
									color: '#B44010',
								},
								{
									minvalue: '250',
									maxvalue: '500',
									color: '#800000',
								},
							],
						},
						// Source data as JSON --> id represents countries of world.
						data: [
							{
								id: '' + z,
								value: '' + val,
								showLabel: '1',
							},
						],
					},
				}}
			/>
		);
	}
}

export default FATA;

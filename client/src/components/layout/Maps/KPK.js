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
import KPKPakistan from 'fusioncharts/maps/fusioncharts.khyberpakhtunkhwa';

// Step 6 - Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Step 7 - Adding the map as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, FusionMaps, KPKPakistan, FusionTheme);

// Step 8 - Creating the JSON object to store the map configurations

// Step 10 - Creating the DOM element to pass the react-fusioncharts component
class KPK extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		const y = this.props.cityname;
		const val = this.props.valuepm25;
		console.log(y);
		var z = 0;

		if (y == 'Abbottabad') {
			z = 1;
		} else if (y == 'Bannu') {
			z = 2;
		} else if (y == 'Battagram') {
			z = 3;
		} else if (y == 'Buner') {
			z = 4;
		} else if (y == 'Charsadda') {
			z = 5;
		} else if (y == 'Chitral') {
			z = 6;
		} else if (y == 'Dera Ismail Khan') {
			z = 7;
		} else if (y == 'Dir Upper') {
			z = 8;
		} else if (y == 'Dir Lower') {
			z = 9;
		} else if (y == 'Hangu') {
			z = 10;
		} else if (y == 'Haripur') {
			z = 11;
		} else if (y == 'Karak') {
			z = 12;
		} else if (y == 'Kohat') {
			z = 13;
		} else if (y == 'Kohistan') {
			z = 14;
		} else if (y == 'Lakki Marwat') {
			z = 15;
		} else if (y == 'Malakand') {
			z = 16;
		} else if (y == 'Mansehra') {
			z = 17;
		} else if (y == 'Mardan') {
			z = 18;
		} else if (y == 'Nowshera') {
			z = 19;
		} else if (y == 'Peshawar') {
			z = 20;
		} else if (y == 'Swabi') {
			z = 21;
		} else if (y == 'Swat') {
			z = 22;
		} else if (y == 'Shangla') {
			z = 23;
		} else if (y == 'Tank') {
			z = 24;
		}
		return (
			<ReactFC
				{...{
					type: 'khyberpakhtunkhwa',
					width: '800',
					height: '550',
					dataFormat: 'json',
					dataSource: {
						// Map Configuration
						chart: {
							caption: 'KPK',
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

export default KPK;

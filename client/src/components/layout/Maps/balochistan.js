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
import BalochistanPakistan from 'fusioncharts/maps/fusioncharts.balochistan';

// Step 6 - Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Step 7 - Adding the map as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, FusionMaps, BalochistanPakistan, FusionTheme);

// Step 8 - Creating the JSON object to store the map configurations

// Step 10 - Creating the DOM element to pass the react-fusioncharts component
class Balochistan extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		const y = this.props.cityname;
		const val = this.props.valuepm25;
		console.log(y);
		var z = 0;

		if (y == 'Awaran') {
			z = 1;
		} else if (y == 'Barkhan') {
			z = 2;
		} else if (y == 'Kachhi (Bolan)') {
			z = 3;
		} else if (y == 'Chagai') {
			z = 4;
		} else if (y == 'Dera Bugti') {
			z = 5;
		} else if (y == 'Gwadar') {
			z = 6;
		} else if (y == 'Harnai') {
			z = 7;
		} else if (y == 'Jafarabad') {
			z = 8;
		} else if (y == 'Jhal Magsi') {
			z = 9;
		} else if (y == 'Kalat') {
			z = 10;
		} else if (y == 'Kech (Turbat)') {
			z = 11;
		} else if (y == 'Kharan') {
			z = 12;
		} else if (y == 'Kohlu') {
			z = 13;
		} else if (y == 'Khuzdar') {
			z = 14;
		} else if (y == 'Killa Abdullah') {
			z = 15;
		} else if (y == 'Killa Saifullah') {
			z = 16;
		} else if (y == 'Lasbela') {
			z = 17;
		} else if (y == 'Loralai') {
			z = 18;
		} else if (y == 'Mastung') {
			z = 19;
		} else if (y == 'Musakhel') {
			z = 20;
		} else if (y == 'Nasirabad') {
			z = 21;
		} else if (y == 'Nushki') {
			z = 22;
		} else if (y == 'Panjgur') {
			z = 23;
		} else if (y == 'Pishin') {
			z = 24;
		} else if (y == 'Quetta') {
			z = 25;
		} else if (y == 'Sherani') {
			z = 26;
		} else if (y == 'Sibi') {
			z = 28;
		} else if (y == 'Washuk') {
			z = 27;
		} else if (y == 'Zhob') {
			z = 29;
		} else if (y == 'Ziarat') {
			z = 30;
		}
		return (
			<ReactFC
				{...{
					type: 'balochistan',
					width: '800',
					height: '550',
					dataFormat: 'json',
					dataSource: {
						// Map Configuration
						chart: {
							caption: 'Pakistan',
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

export default Balochistan;

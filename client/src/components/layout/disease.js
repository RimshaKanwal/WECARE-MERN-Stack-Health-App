import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import banner from '../../img/banner11.jpg';
import doc from '../../img/doc2.jpg';
import { Form, Col, Row, Container, Button } from 'react-bootstrap';
import styles from '../../assets/jss/material-dashboard-react/components/dashboardStyle.js';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../../App.css';
const useStyles = makeStyles(styles);
const languages = [
	{ name: 'itching' },
	{ name: 'skin_rash' },
	{ name: 'nodal_skin_eruptions' },
	{ name: 'shivering' },
	{ name: 'chills' },
	{ name: 'joint_pain' },
	{ name: 'stomach_pain' },
	{ name: 'acidity' },
	{ name: 'ulcers_on_tongue' },
	{ name: 'muscle_wasting' },
	{ name: 'vomiting' },
	{ name: 'burning_micturition' },
	{ name: 'spotting_ urination' },
	{ name: 'fatigue' },
	{ name: 'weight_gain' },
	{ name: 'anxiety' },
	{ name: 'cold_hands_and_feets' },
	{ name: 'mood_swings' },
	{ name: 'weight_loss' },
	{ name: 'restlessness' },
	{ name: 'lethargy' },
	{ name: 'patches_in_throat' },
	{ name: 'irregular_sugar_level' },
	{ name: 'cough' },
	{ name: 'high_fever' },
	{ name: 'sunken_eyes' },
	{ name: 'breathlessness' },
	{ name: 'sweating' },
	{ name: 'dehydration' },
	{ name: 'indigestion' },
	{ name: 'headache' },
	{ name: 'yellowish_skin' },
	{ name: 'dark_urine' },
	{ name: 'nausea' },
	{ name: 'loss_of_appetite' },
	{ name: 'pain_behind_the_eyes' },
	{ name: 'back_pain' },
	{ name: 'constipation' },
	{ name: 'abdominal_pain' },
	{ name: 'diarrhoea' },
	{ name: 'mild_fever' },
	{ name: 'yellow_urine' },
	{ name: 'yellowing_of_eyes' },
	{ name: 'acute_liver_failure' },
	{ name: 'fluid_overload' },
	{ name: 'swelling_of_stomach' },
	{ name: 'swelled_lymph_nodes' },
	{ name: 'malaise' },
	{ name: 'blurred_and_distorted_vision' },
	{ name: 'phlegm' },
	{ name: 'throat_irritation' },
	{ name: 'redness_of_eyes' },
	{ name: 'sinus_pressure' },
	{ name: 'runny_nose' },
	{ name: 'congestion' },
	{ name: 'chest_pain' },
	{ name: 'weakness_in_limbs' },
	{ name: 'fast_heart_rate' },
	{ name: 'pain_during_bowel_movements' },
	{ name: 'pain_in_anal_region' },
	{ name: 'bloody_stool' },
	{ name: 'irritation_in_anus' },
	{ name: 'neck_pain' },
	{ name: 'dizziness' },
	{ name: 'cramps' },
	{ name: 'bruising' },
	{ name: 'obesity' },
	{ name: 'swollen_legs' },
	{ name: 'swollen_blood_vessels' },
	{ name: 'puffy_face_and_eyes' },
	{ name: 'enlarged_thyroid' },
	{ name: 'brittle_nails' },
	{ name: 'swollen_extremeties' },
	{ name: 'excessive_hunger' },
	{ name: 'drying_and_tingling_lips' },
	{ name: 'slurred_speech' },
	{ name: 'knee_pain' },
	{ name: 'hip_joint_pain' },
	{ name: 'muscle_weakness' },
	{ name: 'stiff_neck' },
	{ name: 'swelling_joints' },
	{ name: 'movement_stiffness' },
	{ name: 'spinning_movements' },
	{ name: 'loss_of_balance' },
	{ name: 'unsteadiness' },
	{ name: 'weakness_of_one_body_side' },
	{ name: 'loss_of_smell' },
	{ name: 'bladder_discomfort' },
	{ name: 'foul_smell_of urine' },
	{ name: 'continuous_feel_of_urine' },
	{ name: 'passage_of_gases' },
	{ name: 'internal_itching' },
	{ name: 'toxic_look_(typhos)' },
	{ name: 'depression' },
	{ name: 'irritability' },
	{ name: 'muscle_pain' },
	{ name: 'altered_sensorium' },
	{ name: 'red_spots_over_body' },
	{ name: 'belly_pain' },
	{ name: 'abnormal_menstruation' },
	{ name: 'dischromic _patches' },
	{ name: 'watering_from_eyes' },
	{ name: 'increased_appetite' },
	{ name: 'polyuria' },
	{ name: 'family_history' },
	{ name: 'mucoid_sputum' },
	{ name: 'rusty_sputum' },
	{ name: 'lack_of_concentration' },
	{ name: 'visual_disturbances' },
	{ name: 'receiving_blood_transfusion' },
	{ name: 'receiving_unsterile_injections' },
	{ name: 'coma' },
	{ name: 'stomach_bleeding' },
	{ name: 'distention_of_abdomen' },
	{ name: 'history_of_alcohol_consumption' },
	{ name: 'fluid_overload' },
	{ name: 'blood_in_sputum' },
	{ name: 'prominent_veins_on_calf' },
	{ name: 'palpitations' },
	{ name: 'painful_walking' },
	{ name: 'pus_filled_pimples' },
	{ name: 'blackheads' },
	{ name: 'scurring' },
	{ name: 'skin_peeling' },
	{ name: 'silver_like_dusting' },
	{ name: 'small_dents_in_nails' },
	{ name: 'inflammatory_nails' },
	{ name: 'blister' },
	{ name: 'red_sore_around_nose' },
	{ name: 'yellow_crust_ooze' },
	{ name: 'prognosis' },
];
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

class Disease extends Component {
	constructor(props) {
		super(props);

		this.state = {
			symptomArray: [],
			value: '',
			suggestions: [],
			mydata: null,
			second: null,
			third: null,
			symptoms: [],
			firstaidDisease: '',
			percentage: '',
			checkDisease: '',
			check: '',
			percentage1: '',
			percentage2: '',
			percentage3: '',
		};
	}
	onChange = (event, { newValue }) => {
		this.setState({
			value: newValue,
		});
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

	submit = async () => {
		alert(this.state.value + ' ');
		await this.allSymptoms();

		fetch('http://localhost:1000/api/Disease', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				symptoms: this.state.symptomArray,
			}),
		})
			.then(async (data) => {
				console.log(data);
				var data = await this.callBackendAPI();
				console.log(data);
				this.setState({
					mydata: data.express[0],
					second: data.express[1],
					third: data.express[2],
					percentage: data.express[4],
					checkDisease: data.express[5],
					percentage1: data.express[6],
					percentage2: data.express[7],
					percentage3: data.express[8],
				});
				console.log(this.state.percentage);
				var x = '';

				console.log(this.state.firstaidDisease);
			})
			.catch((err) => alert(err));
	};

	allSymptoms = () => {
		this.setState({
			symptomArray: this.state.symptomArray.concat(this.state.value),
			value: '',
		});
	};

	state = {
		data: null,
	};

	callBackendAPI = async () => {
		const response = await fetch('http://localhost:1000/api/Disease');
		const body = await response.json();
		if (response.status !== 200) {
			throw Error(body.message);
		}

		return body;
	};
	checkFirstAid = () => {
		if (this.state.percentage1 >= 50) {
			this.setState({
				firstaidDisease: this.findAid(),
			});
		} else if (this.state.percentage2 >= 50) {
			this.setState({
				firstaidDisease: '2',
			});
		} else if (this.state.percentage3 >= 50) {
			this.setState({
				firstaidDisease: '3',
			});
		} else {
			this.setState({
				firstaidDisease:
					'The chances for this disease is less than 50 % so we cannot recommend any first aid. You need to add more symptoms or see your dooctor if you are unsure.',
			});
		}
	};

	findAid(disease) {
		var x = '';
		if (disease == 'Fungal infection') {
			x =
				'creams can be applied to superficial skin infections. Don’t pick at the infected area because this could cause another type of infection.';
		} else if (disease == 'Allergy') {
			x =
				'Apply hydrocortisone cream or calamine lotion. Cover the area with a bandage. If theres swelling, apply a cold compress to the area. Take an antihistamine to reduce itching, swelling, and hives.';
		} else if (disease == 'GERD') {
			x =
				'Try lifestyle modifications and over-the-counter medications. If you dont experience relief within a few weeks,  consult doctor.';
		} else if (disease == 'Chronic cholestasis') {
			x =
				'Taking a prescription drug called ursodiol (Actigall, Urso, Urso Forte), which helps to lower the level of bile in your blood. Consulting doctor is highly recommended.';
		} else if (disease == 'Drug Reaction') {
			x =
				'Try to keep the person calm, Help the person lie on their back. Raise their feet about 12 inches and cover them with a blanket. Turn them on their side if they’re vomiting or bleeding. Make sure their clothing is loose so they can breathe.';
		} else if (disease == 'Peptic ulcer diseae') {
			x =
				'use acetaminophen for over-the-counter pain relief. You should not use aspirin, ibuprofen, ketoprofen, or naproxen sodium.';
		} else if (disease == 'AIDS') {
			x = 'Consult doctor';
		} else if (disease == 'Diabetes') {
			x = 'Consult Doctor';
		} else if (disease == 'Gastroenteritis') {
			x =
				'Adequate rest is advised, Drink plenty of fluids to prevent dehydration, Gradually eat easy -to-digest food, Avoid diary products, Avoid eating if nauseated.';
		} else if (disease == 'Bronchial Asthma') {
			x =
				'Sit the person upright comfortably and loosen tight clothing. If the person has asthma medication, such as an inhaler, assist in using it. If the person doesn’t have an inhaler, use one from a first aid kit. Do not borrow someone else’s.';
		} else if (disease == 'Hypertension') {
			x = '';
		} else if (disease == 'Migraine') {
			x =
				'Have the person rest in a cool, dark room. Apply a cool compress or ice pack to the painful area. ibuprofen  for pain relief.';
		} else if (disease == 'Cervical spondylosis') {
			x =
				'Treatment of pain from spondylosis commonly includes anti-inflammatory medications, analgesics and muscle relaxants. Nonsteroidal anti-inflammatory medications, or NSAIDs, can be very effective in relieving back and neck pain from spondylosis';
		} else if (disease == 'Paralysis (brain hemorrhage)') {
			x =
				'Stay as calm as possible while waiting for emergency help. If you are caring for someone else having a stroke, make sure theyre in a safe, comfortable position. Preferably, this should be lying on one side with their head slightly raised and supported in case they vomit. Check to see if theyre breathing.';
		} else if (disease == 'Jaundice') {
			x =
				'Drink at least eight glasses of fluids per day, Consider adding milk thistle to your routine, Opt for fruits like papaya and mango, which are rich in digestive enzymes, Eat at least 2 1/2 cups of veggies and 2 cups of fruit per day';
		} else if (disease == 'Malaria') {
			x = 'Chloroquine (medication) is recommended for treatment of  malaria.';
		} else if (disease == 'Chicken pox') {
			x =
				'pat (not rub) the body dry. put calamine lotion on itchy areas (but not on the face, especially near the eyes, or on the genitals) use diphenhydramine for severe itching. give your child acetaminophen as needed to help relieve pain from the sores on the skin or in the mouth';
		} else if (disease == 'Dengue') {
			x =
				'use pain relievers with acetaminophen and avoid medicines with aspirin, which could worsen bleeding. You should also rest, drink plenty of fluids.';
		} else if (disease == 'Typhoid') {
			x =
				'use antibiotics such as ceftriaxone.  Other than antibiotics, it is important to rehydrate by drinking adequate water.';
		} else if (disease == 'hepatitis A') {
			x = 'You should Consult Doctor';
		} else if (disease == 'Hepatitis B') {
			x = 'You should Consult Doctor';
		} else if (disease == 'Hepatitis C') {
			x = 'You should Consult Doctor';
		} else if (disease == 'Hepatitis D') {
			x = 'You should Consult Doctor';
		} else if (disease == 'Hepatitis E') {
			x = 'You should Consult Doctor';
		} else if (disease == 'Alcoholic hepatitis') {
			x =
				'Stop drinking alcohol. This is the most critical part of the treatment. It may reverse the disease if your alcoholic hepatitis is mild. Your doctor may recommend medications, therapy, and support groups to help prevent or treat any withdrawal symptoms';
		} else if (disease == 'Tuberculosis') {
			x =
				'If you have been diagnosed with active TB, be sure to: Complete the full course of your TB medications. Stay at home especially during the first two weeks of treatment. Cover your mouth with a tissue when you cough or sneeze, and wear a face mask when around people during the first few weeks of treatment.';
		} else if (disease == 'Common Cold') {
			x =
				'Stay in bed and rest. Keep hydrated. Drinking water, iced tea, or very diluted juice to replenish fluids lost through sweating. Stay cool. Remove extra layers of clothing and blankets, unless you have the chills.';
		} else if (disease == 'Pneumonia') {
			x =
				'Control your fever with aspirin, nonsteroidal anti-inflammatory drugs (NSAIDs, such as ibuprofen or naproxen), or acetaminophen. Drink plenty of fluids to help loosen secretions and bring up phlegm. Do not take cough medicines without first talking to your doctor.';
		} else if (disease == 'Heartattack') {
			x =
				'Try to keep the person calm, and have them sit or lie down. If the person is not allergic to aspirin, have them chew and swallow a baby aspirin. (It works faster when chewed and not swallowed whole.) If the person stops breathing, you or someone else whos qualified should perform CPR right away.';
		} else if (disease == 'Varicoseveins') {
			x =
				'put a clean cloth or dressing on to the bleeding area and put firm pressure on it, for at least 10 minutes. Call an ambulance if the bleeding is heavy, or does not quickly stop.';
		} else if (disease == 'Hypothyroidism') {
			x = 'It might be a serious case, consult doctor';
		} else if (disease == 'Hypoglycemia') {
			x =
				'If the person is unconscious place him or her on their side and check the airway, breathing and pulse. Seek medical help immediately. If the person is conscious, give a sugary drink like lemonade, orange juice or even a glass of water with at least 2 teaspoons of sugar in it.';
		} else if (disease == 'Osteoarthristis') {
			x =
				'Use hot and cold therapy. Long, warm showers or baths — especially in the morning — help ease stiffness in your joints. Use an electric blanket or moist heating pad at night to keep your joints loose. Cold treatments are best for relieving joint pain, swelling, and inflammation';
		} else if (disease == '(vertigo) Paroymsal  Positional Vertigo') {
			x =
				'Have the person lie down and rest. The person should avoid sudden changes in body position. Help the person avoid abrupt head movements, especially looking up. Help the person avoid falls. If they are nauseous or throwing up, have them lie down on their side.';
		} else if (disease == 'Acne') {
			x =
				'Drinking plenty of water will help flush the bacteria out of the urinary tract. One of the simplest home remedies for a UTI is to drink plenty of water. This helps to flush the bacteria out of the body. The recommendation is for an individual to drink six to eight 8-ounce glasses of water in a day.';
		} else if (disease == 'Arthritis') {
			x =
				'Use hot and cold therapy. Long, warm showers or baths — especially in the morning help ease stiffness in your joints. Use an electric blanket or moist heating pad at night to keep your joints loose. Cold treatments are best for relieving joint pain, swelling, and inflammation.';
		} else if (disease == 'Urinary tract infection') {
			x =
				'Drinking plenty of water will help flush the bacteria out of the urinary tract. One of the simplest home remedies for a UTI is to drink plenty of water. This helps to flush the bacteria out of the body. The recommendation is for an individual to drink six to eight 8-ounce glasses of water in a day.';
		} else if (disease == 'Psoriasis') {
			x =
				'Bath solutions, such as Dead Sea salts, oil, oilated oatmeal, or Epsom salts can help psoriasis by removing scales and easing itching. To try Dead Sea salts and other bath solutions, mix them in the bath as directed, then soak in the tub for about 15 minutes';
		} else if (disease == 'Impetigo') {
			x =
				'Gently wash the infected area with antibacterial soap. Soak the area for 15 to 20 minutes in warm soapy water. Then gently remove the crusts. Cover the sores with a gauze bandage to keep the infection from spreading and to prevent scratching.';
		}
		return x;
	}

	render() {
		const { value, suggestions } = this.state;
		const inputProps = {
			placeholder: 'Symptoms',
			value,
			onChange: this.onChange,
		};

		return (
			<div>
				<div className='container'>
					<img className='dishead' src={banner} />
					<div class='centered'>
						<h1>FIRST AID</h1>
					</div>
					<div class='centeredd'>
						<h4>When minutes matter, BE FAST.</h4>
					</div>
					<div class='centereddd'>
						<h4>Know the disease & first aid of your symptoms.</h4>
					</div>
				</div>

				<Container>
					<Row>
						<Col sm={8}>
							<Form>
								<Form.Row>
									<Form.Group as={Col} controlId='formGridEmail'>
										<Form.Label className='newtext'>
											<b>Symptom 1:</b>
										</Form.Label>

										<Row>
											<Col sm={3}>
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
												/>
											</Col>
											<Col>
												<Button
													variant='danger'
													style={{ width: '3em' }}
													onClick={async () => {
														await this.allSymptoms();
														inputProps.placeholder = 'Add new Symptom';
													}}
												>
													<i class='fas fa-plus'></i>
												</Button>
											</Col>

											<Col>
												<Button
													variant='danger'
													style={{ width: '12em' }}
													onClick={async () => {
														await this.submit();

														this.setState({
															symptomArray: [],
															check: 'true',
														});
													}}
												>
													Check Disease
												</Button>
											</Col>
										</Row>

										<Row>
											{this.state.symptomArray.map((i) => {
												return (
													<Col style={{ paddingTop: '1em' }}>
														<div
															style={{
																backgroundColor: '#639bc0',
																color: 'white',
																width: '300px',
															}}
														>
															<label style={{ padding: '5px' }}>
																<b>{i}</b>
															</label>
															<Button
																onClick={() => {
																	var array = [...this.state.symptomArray];
																	var index = array.indexOf(i);
																	if (index !== -1) {
																		array.splice(index, 1);
																		this.setState({ symptomArray: array });
																		alert('deleted');
																	}
																}}
																style={{
																	float: 'right',
																	height: '40px',
																	backgroundColor: '#639bc0',
																}}
															>
																<b>X</b>
															</Button>
														</div>
													</Col>
												);
											})}
										</Row>
									</Form.Group>
								</Form.Row>

								<br />
								{this.state && !this.state.third && this.state.check && (
									<div className={useStyles.root}>
										<CircularProgress
											style={{
												width: '150px',
												height: '150px',
												alignItems: 'center',
												justifyContent: 'center',
												position: 'absolute',
												left: '40%',
												bottom: '40%',
												right: '40%',
												top: '40%',

												color: '#8d0000',
											}}
											// color='#8d0000'
										/>
									</div>
								)}
								{this.state && this.state.third && (
									<div>
										<Form.Row>
											<Form.Group as={Col} controlId='formGridEmail'>
												<Form.Label className='newtext'>
													<b>You are possibly having a following disease: </b>
												</Form.Label>
											</Form.Group>

											<Form.Group as={Col} controlId='formGridPassword'>
												<div class='disease'>
													<b>
														{this.state.mydata +
															' ' +
															this.state.percentage1 +
															' %'}
													</b>
												</div>
												<br />
												<div class='disease'>
													<b>
														{this.state.second +
															' ' +
															this.state.percentage2 +
															' %'}
													</b>
												</div>
												<br />
												<div class='disease'>
													<b>
														{this.state.third +
															' ' +
															this.state.percentage3 +
															' %'}
													</b>
												</div>
											</Form.Group>
										</Form.Row>
										<br />
										<Form.Row>
											<Form.Group as={Col} controlId='formGridEmail'>
												<Button
													variant='danger'
													style={{ width: '14em' }}
													onClick={this.checkFirstAid}
												>
													Check First Aid <i class='fas fa-first-aid'></i>
												</Button>
											</Form.Group>
										</Form.Row>
										<Form.Row>
											<Form.Group
												as={Col}
												controlId='formGridEmail'
											></Form.Group>

											<Form.Group as={Col} controlId='formGridEmail'>
												<Form.Label className='newtext'>
													<b>First Aid:</b>
												</Form.Label>
											</Form.Group>

											<Form.Group as={Col} controlId='formGridPassword'>
												<div>{this.state.firstaidDisease}</div>
											</Form.Group>

											<Form.Group
												as={Col}
												controlId='formGridEmail'
											></Form.Group>
										</Form.Row>
									</div>
								)}
							</Form>
						</Col>
						<Col sm={4}>
							<div class='flip-card'>
								<div class='flip-card-inner'>
									<div class='flip-card-front'>
										<img style={{ height: '30em' }} src={doc} />
									</div>
									<div class='flip-card-back'>
										<div className='newtext' style={{ margin: '2em' }}>
											<h1 className='guidehead'>
												<b>Guidelines:</b>
											</h1>

											<p>
												<i class='fas fa-arrow-circle-right'></i> Enter your
												symptom and click on add button.
											</p>
											<p>
												<i class='fas fa-arrow-circle-right'></i> You can add
												max of 3 symptoms
											</p>
											<p>
												<i class='fas fa-arrow-circle-right'></i> Diseases will
												be predicted probability wise.{' '}
											</p>
											<p>
												<i class='fas fa-arrow-circle-right'></i> Click on Check
												First Aid button and it'll show aid for the disease with
												highest probability{' '}
											</p>
											<center>
												<hr class='hrw' style={{ backgroundColor: 'white' }} />
											</center>
										</div>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Disease;

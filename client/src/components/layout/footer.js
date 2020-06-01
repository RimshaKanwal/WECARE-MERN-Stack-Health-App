import React, { Component } from 'react';
import { Col, Row, Container, Dropdown, Badge } from 'react-bootstrap';
class Footerr extends Component {
	render() {
		return (
			<div>
				<footer color='blue' className='font-small pt-4 mt-4'>
					<Container fluid className='text-center text-md-left'>
						<Row>
							<Col>
								<center>
									<h3 className='footertexthead'>WECARE</h3>
								</center>
								<center>
									{' '}
									<p className='footertext'>(We Take Care of You)</p>
								</center>
							</Col>
						</Row>

						<Row>
							<Col>
								<center>
									<label className='footertext'>Group Members:</label>
								</center>
							</Col>
							<Col>
								<center>
									<label className='footertext'>
										Muiz Ul Haq - FA16-BCS-080{' '}
									</label>
								</center>
							</Col>
							<Col>
								<center>
									<label className='footertext'>
										Rimsha Kanwal - FA16-BCS-046
									</label>
								</center>
							</Col>
							<Col>
								<center>
									<label className='footertext'>
										Nimra Iftikhar - FA16-BCS-055
									</label>
								</center>
							</Col>
						</Row>
						<br />
						<Row>
							<Col>
								<center>
									<p className='footertextt'>
										© 2020 Copyright: Comsats University Islamabad
									</p>
								</center>
							</Col>
						</Row>
					</Container>
				</footer>
			</div>
		);
	}
}

export default Footerr;

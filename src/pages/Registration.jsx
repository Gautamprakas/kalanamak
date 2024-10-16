import React from 'react'
const Registration = () =>{
	return (

		<div className='lg:px-28 md:px-12 sm:px-5 px-3  lg:py-8 py-4'>

            <div>
                <h1 className=' font-semibold sm:text-3xl text-2xl  inline-block pr-2 border-b-[#af7501] mb-3 border-b-2 text-[#0f5f17]'>
                   1. संस्था की सदस्यता एवं वर्ग (Organization Membership and Class)
                </h1>
            </div>

            <div className='my-2 md:my-4'>
                <div className='lg:w-[80%] w-[100%]'>
                    <table id='customers' className='mt-3 '>
                        <tr>
                            <th>सदस्यता का प्रकार</th>
                            <th>शुल्क रू0</th>
                            <th>सदस्य बनने की प्रक्रिया</th>
                        </tr>
                        <tr>
						    <td>आजीवन सदस्य (Life Time Member)</td>
						    <td>₹10,000</td>
						    <td>जो व्यक्ति संस्था के विकास हेतु निर्धारित शुल्क एक बार में या इतने ही मूल्य की चल-अचल सम्पत्ति के रूप में देगें, वे संस्था के आजीवन सदस्य होगें।</td>
						</tr>
						<tr>
						    <td>विशेष सदस्य (Special Member)</td>
						    <td>₹0</td>
						    <td>संस्था विशिष्ट सदस्यों को उनके सामाजिक एवं शैक्षिक उपलब्धियों के आधार पर चयनित करेगी। उनके लिए सदस्यता शुल्क का निर्धारण कार्यकारिणी करेगी।</td>
						</tr>
						<tr>
						    <td>सामान्य सदस्य (General Member)</td>
						    <td>₹1,000</td>
						    <td>जो व्यक्ति संस्था के उद्देश्यों में आस्था रखते हैं तथा संस्था के विकास हेतु निर्धारित वार्षिक सदस्यता शुल्क नियमानुसार निःस्वार्थ भाव से देते हैं, वे संस्था के सामान्य सदस्य होगें। इनका कार्यकाल 5 वर्ष का होगा।</td>
						</tr>
						<tr>
							<th colspan="3">
							<strong>सदस्यता की समाप्ति ( Termination fo Membership )</strong>
							</th>
						</tr>
						<tr>
							<td colspan="3">
								<ol className='my-2 mx-4 md:my-4 '>
									  <li>1.मृत्यु हो जाने पर।</li>
									  <li>2.पागल या दिवालिया हो जाने पर।</li>
									  <li>3.संस्था के विपरीत हानिकारक कार्य करने पर।</li>
									  <li>4.अविश्वास प्रस्ताव या त्याग पत्र पारित करने पर।</li>
									  <li>5.नियमित रूप से सदस्यता शुल्क न देने पर।</li>
									  <li>6.लगातार तीन बैठकों में अनुपस्थित होने पर।</li>
									  <li>7.नैतिक अपराधों में न्यायालय द्वारा दण्डित होने पर।
									  	  <ol className='mx-4'>
									  	  	<li>1.संस्था के अंग Society's Body</li>
									  	  	<li>2.साधारण सभा  General Body</li>
									  	  	<li>3.प्रबंधकारिणी समिति  Management Committee</li>
									  	  </ol>	
									  </li>
								</ol>
							
							</td>
						</tr>
						<tr>
							<th colspan="3">
							<strong>साधारण सभा ( General Body)</strong>
							</th>
						</tr>
						<tr>
					    <td>बैठकें  (Meetings):</td>
					    <td colspan="2">
					      साधारण सभा की सामान्य बैठक साल में एक बार व विशेष बैठक आवश्यकतानुसार किसी भी समय बुलाई जा सकती है। साधारण बैठक की सूचना लिखित अथवा किसी अन्य माध्यम से 01 से 24 घंटे पूर्व दी जायेगी। सूचना पत्र एजेंडा जारी किया जायेगा जिसमें बैठक बुलाने के कारण का उल्लेख होगा।
					    </td>
					  </tr>
					  <tr>
					    <td>सूचना अवधि  (Notice period):</td>
					    <td colspan="2">
					      साधारण सभा की सामान्य बैठक की सूचना कम से कम 15 दिन पूर्व व विशेष बैठक की सूचना 01 दिन पूर्व सदस्यों को दी जायेगी।
					    </td>
					  </tr>
					  <tr>
					    <td>गणपूर्ति  (Quorum):</td>
					    <td colspan="2">
					      साधारण सभा की गणपूर्ति हेतु कुल सदस्यों में से एक तिहाई सदस्यों की उपस्थिति गणपूर्ति हेतु मान्य होगी।
					    </td>
					  </tr>
					  <tr>
					    <td>विशेष वार्षिक अधिवेशन की तिथि  (Special Annual General meeting date):</td>
					    <td colspan="2">
					      विशेष वार्षिक अधिवेशन प्रति वर्ष एक बार कराया जायेगा। तिथि का निर्धारण अध्यक्ष द्वारा प्रबंधकारिणी समिति के सदस्यों की राय से किया जायेगा।
					    </td>
					  </tr>
					  <tr>
					    <td>साधारण सभा के अधिकार एवं कर्तव्य  (Rights and Duties of the General Body):</td>
					    <td colspan="2">
					      साधारण समिति के कर्तव्य KALANAMAK EXPORT DEVELOPMENT FOUNDATION के रूप रेखा पर विचार करना प्रयास एवं प्रसार करना होगा।
					    </td>
					  </tr>
											
                    </table>
                    {/*<h3>सदस्यता की समाप्ति @ Termination of Membership:</h3>*/}
					

                </div>
            </div>

            

            <div className='my-2 md:my-4'>
                <div className='lg:w-[80%] w-[100%]'>
                    <h2 className='font-semibold sm:text-3xl text-2xl  inline-block pr-2 border-b-[#af7501] mb-3 border-b-2 text-[#0f5f17]'>
                       2. प्रबंधकारिणी समिति (Management Committee)
                    </h2>
                    <table id='customers' className='mt-3 '>
                        {/*<tr>
                            <th>Year</th>
                            <th>Production in Total</th>
                            <th>Quantity of Rice in Total 70 Percent Rice </th>
                        </tr>*/}
                        <tr>
                            <td>गठन (Formation):</td>
                            <td colspan="2">साधारण सभा द्वारा निर्वाचित पदाधिकारियों सदस्यों को मिलाकर प्रबंधकारिणी समिति का गठन होगा, जिसमें सचिव कोषाध्यक्ष एवं सदस्य होगें, इस प्रकार स्थायी एवं प्रबंधकारिणी समिति के पदाधिकारियो सदस्यो की कुल संख्या मिलाकर 15 होगी।</td>
                        </tr>
                        <tr>
                            <td>बैठके (Meetings):</td>
                            <td colspan="2">प्रबंधकारिणी समिति की सामान्य बैठक साल में चार बार एवं विशेष बैठक आवश्यकतानुसार किसी भी समय बुलाई जा सकती है। असाधारण बैठक की सूचना लिखित या किसी अन्य माध्यम से 01 से 24 घंटे पूर्व दी जायेगी। सूचना हेतु कार्य (Agenda) जारी किया जायेगा जिसमें बैठक बुलाने के कारण का उल्लेख होगा। </td>
                        </tr>
                        <tr>
                            <td>सूचना अवधि (Notice Period)</td>
                            <td colspan="2">प्रबंधकारिणी समिति की सामान्य बैठक की सूचना कम से कम 7 दिन पूर्व व विशेष बैठक की सूचना 01 घंटे पूर्व सदस्यों को लिखित रूप से दी जायेगी।</td>
                        </tr>
                        <tr>
                            <td>गणपूर्ति (Quorum)</td>
                            <td colspan="2">प्रबंधकारिणी समिति की गणपूर्ति हेतु कुल सदस्यों में से एक तिहाई सदस्यों की उपस्थिति गणपूर्ति हेतु मान्य होगी।</td>
                        </tr>
                        <tr>
						    <td>प्रबंधकारिणी समिति के पदाधिकारियों के अधिकार एवं कर्तव्य (Rights and Responsibilities of office bearer of Management Committee):</td>
						    <td colspan="2">
						      प्रबंधकारिणी समिति के कर्तव्य KALANAMAK EXPORT DEVELOPMENT FOUNDATION के आयोजन के नीति निर्धारण एवं KALANAMAK EXPORT DEVELOPMENT FOUNDATION के आयोजन की सम्पूर्ण जिम्मेदारी प्रबंधकारिणी समिति की होगी तथा कलानमक बोर्ड के संचालन के लिए चयन प्रक्रिया द्वारा निर्वाचित पदों का चयन किया जायेगा।
						    </td>
						  </tr>
						  <tr>
						    <td>रिक्त स्थानों की पूर्ति (Fill up of vacant seats):</td>
						    <td colspan="2">
						      प्रबंधकारिणी समिति के अंतर्गत किसी भी प्रकार की आकस्मिकता से चलते स्थान के रिक्त होने पर उसकी पूर्ति साधारण सभा के दो तिहाई सदस्यों के बहुमत से शेष कार्यकाल के लिए की जायेगी।
						    </td>
						  </tr>
						  <tr>
						    <td>कार्यकाल (Tenure):</td>
						    <td colspan="2">
						      प्रबंधकारिणी समिति का कार्यकाल पदों के तैलता तक होगा।
						    </td>
						  </tr>
						  <tr>
						    <td>शासी निकाय समिति के सामान्य निकाय द्वारा निर्वाचन प्रक्रिया (Election Procedure of Management Committee by General Body):</td>
						    <td colspan="2">
						      साधारण सभा के बहुमत के आधार पर किया जायेगा।
						    </td>
						  </tr>
						  {/*<tr>
                            <th colspan="3">शासी निकाय समिति के पदाधिकारियों के अधिकार एवं कर्तव्य (Rights and duties of office bearer of the Governing Body)</th>
                        </tr>*/}
                    </table>
                </div>
            </div>
            <div>
                <h1 className=' font-semibold sm:text-3xl text-2xl  inline-block pr-2 border-b-[#af7501] mb-3 border-b-2 text-[#0f5f17]'>
                   3. शासी निकाय समिति के पदाधिकारियों के अधिकार एवं कर्तव्य (Rights and duties of office bearer of the Governing Body)
                </h1>
                <p className='pt-1 md:text-lg'>
	                <h1 className=' font-semibold sm:text-2xl text-2xl  inline-block pr-2 border-b-[#af7501]  mb-3 border-b-2 text-[#0f5f17]'>
	                    अध्यक्ष (President)
	                </h1>
                    <ol className='list-decimal pl-5 my-2 mx-4 md:my-4'>
					  <li><strong>Power and Duties of the President:</strong></li>
					  <ol className='list-decimal pl-5 my-2 mx-4 md:my-4'>
					    <li><strong>Rights:</strong></li>
					    <ol className='list-decimal pl-5 my-2 mx-4 md:my-4'>
					      <li>Implementation of all powers of the Committee in consultation with the committee.</li>
					      <li>Appointment of members of the General Committee other than the permanent members.</li>
					      <li>Formation of Sub-committee and nominating officers.</li>
					      <li>The right to Add/Cancel the membership of any member in Kalanamak export development foundation like a corporate (FPO) or such other the any member in the committee.</li>
					      <li>The right to accept or reject the resignation of any permanent member for any reason.</li>
					      <li>To fix the date of general meeting and special meeting.</li>
					      <li>After the decision taken by the General Assembly and approved by the Governing Body Committee regarding all the events of Kalanamak export development foundation.</li>
					      <li>Right to appoint Chartered Accountant.</li>
					      <li>Right of branch related to bank related article making bank related document.</li>
					    </ol>
					    <li><strong>Duties:</strong></li>
					    <ol className='list-decimal pl-5 my-2 mx-4 md:my-4'>
					      <li>It will be the duty of the President to call the meetings on time and action regarding the organization of Kalanamak export development foundation.</li>
					      <li>To review the decisions taken by the committee from time to time and issue guidelines for action accordingly.</li>
					      <li>To take action to get co-operation from various departments in connection with organizing the program of Kalanamak export development foundation.</li>
					    </ol>
					  </ol>
					</ol>

                </p>
                <p className='pt-1 md:text-lg'>
	                <h1 className=' font-semibold sm:text-2xl text-2xl  inline-block pr-2 border-b-[#af7501]  mb-3 border-b-2 text-[#0f5f17]'>
	                    उपाध्यक्ष (Voice President)
	                </h1>
                    <ol className='my-2 mx-4 md:my-4'>
					  <li><strong>Powers and Duties of the Vice-President</strong></li>
					  <ol className='list-decimal pl-5 my-2 mx-4 md:my-4'>
					    <li><strong>Rights:</strong></li>
					    <ol className='list-decimal pl-5 my-2 mx-4 md:my-4'>
					      <li>Implementation of various functions of the committee with the approval of the President.</li>
					      <li>To submit a proposal for the approval of the President for the appointment of members of the General Committee other than the permanent members.</li>
					      <li>Formation of 3 Sub-committees and submit a proposal for the approval of the President to nominate office bearers.</li>
					      <li>To submit a proposal for the approval of the President to cancel the membership of any member of Kalanamak export development foundation.</li>
					      <li>To send a recommendation to the Speaker to accept or reject the resignation of any permanent member for any reason.</li>
					      <li>To assist the Speaker in fixing the dates of general meetings and special meetings.</li>
					      <li>To assist the President in deciding the date for the committee after the decision taken by the General Assembly regarding the organization of all programs and approved by the Managing Committee.</li>
					      <li>To get the approval from the President regarding conferring the authority to the Secretary, Kalanamak export development foundation, to get the amount related to the account of the committee from the bank to be withdrawn from the bank.</li>
					      <li>To provide assistance to the Speaker for amending the rules.</li>
					      <li>The right to Add/Cancel the membership of any member in Kalanamak export development foundation like a corporate (FPO) or such other the any member in the committee.</li>
					    </ol>
					    <li><strong>Duty:</strong></li>
					    <ol className=' list-decimal pl-5 my-2 mx-4 md:my-4'>
					      <li>It will be the duty of the Vice-President to call the meetings on time after the approval of the President and take action regarding the organization of Kalanamak export development foundation. Organize all the events on the fixed date.</li>
					      <li>To review the decisions taken by the committee from time to time and issue guidelines for action accordingly.</li>
					      <li>To take action to get cooperation from various departments regarding the organization of the program and to apprise the President about the action taken.</li>
					    </ol>
					  </ol>
					</ol>


                </p>

                <p className='pt-1 md:text-lg'>
	                <h1 className=' font-semibold sm:text-2xl text-2xl  inline-block pr-2 border-b-[#af7501]  mb-3 border-b-2 text-[#0f5f17]'>
	                    संयुक्त सचिव (Joint Secretary):
	                </h1>
                    <ol className='my-2 mx-4 md:my-4'>
					  <li><strong>Powers and Duties of Joint Secretary</strong></li>
					 <ol className='list-decimal pl-5 my-2 mx-4 md:my-4'>
					  <li><strong>Rights:</strong></li>
					  <ol className='list-decimal pl-5 my-2 mx-4 md:my-4'>
					    <li>The right to convey meetings as per the orders of the President.</li>
					    <li>All rights of withdrawal and distribution with the permission of the President.</li>
					    <li>With the prior permission of the President, all rights of the management of the Program of the Kalanamak export development foundation.</li>
					    <li>To sanction hospitality, conveyance bills, travel, and other contingencies to the extent delegated.</li>
					    <li>To ensure all kinds of publications related to Kalanamak export development foundation and to get approval of designs from the President.</li>
					    <li>The right to purchase essential commodities related to the above, as per the rules. In all other cases, necessary action should be taken with the permission of the President.</li>
					    <li>Implementation of other powers/directives given by the Speaker.</li>
					  </ol>
					  <li><strong>Duties:</strong></li>
					  <ol className='list-decimal pl-5 my-2 mx-4 md:my-4'>
					    <li>It will be the duty of the Joint Secretary to provide co-operation to the President in connection with the organization of the program of Kalanamak export development foundation.</li>
					    <li>To organize all the meetings on time.</li>
					    <li>To ensure compliance with the decisions taken in the meetings.</li>
					    <li>To co-ordinate the work of various sub-committees.</li>
					    <li>Editing of other works related to Kalanamak export development foundation.</li>
					  </ol>
					</ol>

					</ol>


                </p>
                <p className='pt-1 md:text-lg'>
	                <h1 className=' font-semibold sm:text-2xl text-2xl  inline-block pr-2 border-b-[#af7501]  mb-3 border-b-2 text-[#0f5f17]'>
	                   सदस्य (Member):
	                </h1>
                    <ol className='my-2 mx-4 md:my-4'>
					  <li><strong>Rights and Duties of the members of the Managing Committee</strong></li>
					 <ol className='list-decimal pl-5 my-2 mx-4 md:my-4'>
						  <li><strong>Rights:</strong></li>
						  <ol className='list-decimal pl-5 my-2 mx-4 md:my-4'>
						    <li>The right to be called for information on the status of a case in the management of the organization of the Kalanamak export development foundation.</li>
						    <li>The right to demand reconsideration of the decisions of subcommittees/general committee.</li>
						  </ol>
						  <li><strong>Duties:</strong></li>
						  <ol className='list-decimal pl-5 my-2 mx-4 md:my-4'>
						    <li>To co-operate in connection with the organization of the program and to give suggestions regarding the management.</li>
						  </ol>
						</ol>


					</ol>


                </p>
            </div>
            <div className='my-2 md:my-4'>
                <div className='lg:w-[80%] w-[100%]'>
                    <table id='customers' className='mt-3 '>
                        <tr>
                            <th>SN</th>
                            <th>Permanent Members</th>
                            <th>Qualifications</th>
                        </tr>
                        <tr>
						    <td>1</td>
						    <td>President</td>
						    <td>District Magistrate</td>
						  </tr>
						  <tr>
						    <td>2</td>
						    <td>Vice President</td>
						    <td>Chief Development Officer</td>
						  </tr>
						  <tr>
						    <td>3</td>
						    <td>Joint Secretary</td>
						    <td>Deputy Director of Agriculture</td>
						  </tr>
						  <tr>
						    <td>4</td>
						    <td>Member</td>
						    <td>District Agriculture Officer</td>
						  </tr>
						  <tr>
						    <td>5</td>
						    <td>Member</td>
						    <td>Lead Bank Manager</td>
						  </tr>
						  <tr>
						    <td>6</td>
						    <td>Member</td>
						    <td>Chief Veterinary Officer</td>
						  </tr>
						  <tr>
						    <td>7</td>
						    <td>Member</td>
						    <td>Deputy Commissioner Industry</td>
						  </tr>
						  <tr>
						    <td>8</td>
						    <td>Member</td>
						    <td>Nominated by the President among Farmer/ or Agriculture Scientist /or Social Worker/ or Businessman dealing in Kalanamak </td>
						  </tr>
                    </table>
                    <p className='pt-1 md:text-lg'>
                    	Nominated member tenure will be 3 years, post which he can be re-Nominated for 3 more years by the President.
                    </p>
                </div>
                <div className='my-2 md:my-4'>
	                <div className='lg:w-[80%] w-[100%]'>
	                    <table id='customers' className='mt-3 '>
	                        <tr>
	                            <th>SN</th>
	                            <th>Management Committee</th>
	                            <th>Election Process</th>
	                            <th>Qualifications</th>
	                            <th>Members Participating in the Election process</th>
	                        </tr>
	                        <tr>
							    <td>9</td>
							    <td>Secretary</td>
							    <td>By General Election</td>
							    <td>CEO of Farmer Producer Organization. </td>
							    <td>Life time members, General members, except ex-officio/permanent members.</td>
							</tr>
							<tr>
							    <td>10</td>
							    <td>Treasurer</td>
							    <td>By General Election</td>
							    <td>Director of Farmer Producer Organization.</td>
							    <td></td>
							  </tr>
							  <tr>
							    <td>11</td>
							    <td>Import Export Manager</td>
							    <td>By General Election</td>
							    <td>Director of Farmer Producer Organization, Expert in Import-Export of Kalanamak Rice</td>
							    <td></td>
							  </tr>
							  <tr>
							    <td>12</td>
							    <td>Publicity Manager</td>
							    <td>By General Election</td>
							    <td>Director of Farmer Producer Organization, Expert in publicity and advertisement</td>
							    <td></td>
							  </tr>
							  <tr>
							    <td>13</td>
							    <td>Production Manager</td>
							    <td>By General Election</td>
							    <td>Director of Farmer Producer Organization, Expert in Production Process, Farmer engaged in production of Kalanamak</td>
							    <td></td>
							  </tr>
							  <tr>
							    <td>14</td>
							    <td>Research & Development Manager</td>
							    <td>By General Election</td>
							    <td>Director of Farmer Producer Organization, Scientist or Learned person who is expert in research and development</td>
							    <td></td>
							  </tr>
							  <tr>
							    <td>15</td>
							    <td>Quality Control Manager</td>
							    <td>By General Election</td>
							    <td>Director of Farmer Producer Organization, expert in Kalanamak rice in relation to quality control.</td>
							    <td></td>
							  </tr>
	                    </table>
	                    <p className='pt-1 md:text-lg'>
	                    	Tenure of Management committee- 3 years.
	                    </p>
	                </div>
                </div>
                <p className='pt-1 md:text-lg'>
	                <h1 className=' font-semibold sm:text-2xl text-2xl  inline-block pr-2 border-b-[#af7501]  mb-3 border-b-2 text-[#0f5f17]'>
	                   Functions of the office bearers of the Management committee	                </h1>
                    <ol className='my-2 mx-4 md:my-4'>
					  <li><strong>Secretary:</strong></li>
					  <ol className='my-2 mx-4 md:my-4'>
					    <li>Shall keep records of all matters concerning the association.</li>
					    <li>Shall record and read minutes at meetings.</li>
					    <li>Shall handle the correspondence of the Association and take such action as may be directed by the executive committee or the president, or in special circumstances act on their own initiative and report at a subsequent meeting.</li>
					    <li>Shall perform all other duties of secretarial and public relations natures as may be assigned by the management committee.</li>
					  </ol>
					  
					  <li><strong>Treasurer:</strong></li>
					  <ol className='my-2 mx-4 md:my-4'>
					    <li>Shall keep the savings book of the association.</li>
					    <li>Shall pay all monies handed over to them to the Association’s Bank Accounts and hand over all books of accounts requested for the preparation of accounts.</li>
					    <li>Shall keep an imprest determined by the executive committee for the running of the day-to-day affairs of the association.</li>
					  </ol>
					  
					  <li><strong>Import Export Manager:</strong></li>
					  <ol className='my-2 mx-4 md:my-4'>
					    <li>Shall keep records of all the documents required for import and export.</li>
					    <li>Shall serve as a liaison between agents, brokers, banks, shippers, and warehouse facilities.</li>
					    <li>Shall resolve custom delays, if any.</li>
					    <li>Shall perform other duties as assigned to them.</li>
					    <li>Shall organize buyer-seller meets and make efforts to increase the export of Kalanamak rice and other related products.</li>
					  </ol>
					  
					  <li><strong>Publicity Manager:</strong></li>
					  <ol className='my-2 mx-4 md:my-4'>
					    <li>Shall manage the public relations of the organization.</li>
					    <li>Shall analyze all media coverage of the organization and draft appropriate responses.</li>
					    <li>Shall organize promotional events such as press tours, conferences, etc.</li>
					    <li>Shall perform other duties as assigned to them.</li>
					  </ol>
					</ol>
					<ol className='my-2 mx-4 md:my-4'>
					  <li><strong>Production Manager:</strong></li>
					  <ol className='my-2 mx-4 md:my-4'>
					    <li>Shall take responsibility for the production plan and execution of approved plans.</li>
					    <li>Shall create systems for inventory control and storage.</li>
					    <li>Shall perform other duties as assigned to them.</li>
					  </ol>
					  
					  <li><strong>Research & Development Manager:</strong></li>
					  <ol className='my-2 mx-4 md:my-4'>
					    <li>Shall create a research and development program.</li>
					    <li>Shall develop new technology for the betterment of the production.</li>
					    <li>Shall perform other duties as assigned to them.</li>
					  </ol>
					  
					  <li><strong>Quality Control Manager:</strong></li>
					  <ol className='my-2 mx-4 md:my-4'>
					    <li>Shall implement and execute inspection, testing, and evaluation methods to ensure the best quality of the products.</li>
					    <li>Shall prepare reports by collecting data on inspections or other aspects such as production, which are analyzed in detail.</li>
					    <li>Shall perform other duties as assigned to them.</li>
					  </ol>
					</ol>



                </p>
                <p className='pt-1 md:text-lg'>
	                {/*<h1 className=' font-semibold sm:text-2xl text-2xl  inline-block pr-2 border-b-[#af7501]  mb-3 border-b-2 text-[#0f5f17]'>
	                   सदस्य (Member):
	                </h1>*/}
					 <ol className='list-decimal pl-5 my-2 mx-4 md:my-4'>
						  <li><strong>पदाधिकारी (Post):</strong></li>
						  <ol className='list-decimal pl-5 my-2 mx-4 md:my-4'>
						    <li>Secretary</li>
						    <li>Treasurer</li>
						    <li>Officers</li>
						  </ol>
						  <li><strong>आय के स्त्रोत (Source Of Income):</strong></li>
						  <ol className='list-decimal pl-5 my-2 mx-4 md:my-4'>
						   <li>Government Donation</li>
						    <li>Government Loan</li>
						    <li>Maintenace Amount</li>
						    <li>Membership Fee </li>
						    <li>Others</li>
						    <li>Self Generation Money </li>
						  </ol>
						</ol>




                </p>
                <p className='pt-1 md:text-lg'>
	                <h1 className=' font-semibold sm:text-2xl text-2xl  inline-block pr-2 border-b-[#af7501]  mb-3 border-b-2 text-[#0f5f17]'>
	                   संस्था के नियमों एवं विनियमों में संशोधन की प्रक्रिया (Society's Rules And Regulation Revision Process):
	                </h1>
					<p>साधारण सभा के दो तिहाई सदस्यों के बहुमत से परिवर्तन या परिवर्धन किया जायेगा(Change or additions will be done with the majority vote of 2/3 of General body’s members.)</p>

                </p>
                <p className='pt-1 md:text-lg'>
	                <h1 className=' font-semibold sm:text-2xl text-2xl  inline-block pr-2 border-b-[#af7501]  mb-3 border-b-2 text-[#0f5f17]'>
	                  संस्था का कोष (Society's Account Access Details):
	                </h1>
	                <p>
	                संस्था का कोष किसी राष्ट्रीयकृत बैंक अथवा शेड्यूल बैंक पोस्ट आफिस या प्राइवेट बैंक में संस्था के नाम से खाता खोला या जमा किया जायेगा जिसका संचालन Secretary एवं PRESIDENT के संयुक्त हस्ताक्षर द्वारा किया जायेगा।
	                </p>
	            </p>
	            <p className='pt-1 md:text-lg'>
	                <h1 className=' font-semibold sm:text-2xl text-2xl  inline-block pr-2 border-b-[#af7501]  mb-3 border-b-2 text-[#0f5f17]'>
	                  संस्था के द्वारा अथवा उसके विरूद्व अदालती से संचालन का उत्तरदायित्व (Responsibility for court operations of the society by or against):
	                </h1>
	                <p>
	                All the members of the Governing Body Committee will be responsible for the conduct and result of the court proceedings initiated by the institution or the court proceedings initiated against the institution, but the said proceedings will be conducted by the office bearers nominated by the president or the Vice-President. The jurisdiction of the cases will be Siddharthnagar.
	                </p>
	            </p>
	            <p className='pt-1 md:text-lg'>
	                <h1 className=' font-semibold sm:text-2xl text-2xl  inline-block pr-2 border-b-[#af7501]  mb-3 border-b-2 text-[#0f5f17]'>
	                  संस्था के आय व्यय का लेखा परीक्षण ¼आडिट½ (Budget Audit):
	                </h1>
	                <p>
	                संस्था के आय व्यय का लेखा परीक्षण प्रतिवर्ष सुयोग्य आडिटर द्वारा कराया जायेगा (The budget of the society will be audited by a qualified auditor)
	                </p>
	            </p>
	            <p className='pt-1 md:text-lg'>
					 <ol className='list-decimal pl-5 my-2 md:my-4'>
						  <strong>संस्था के अभिलेख (Society's records):</strong>
						  <ol className='list-decimal pl-5 my-2 mx-4 md:my-4'>
						    <li>सदस्यता रजिस्टर Membership Register</li>
						    <li>कार्यवाही रजिस्टर  Proceedings Register</li>
						    <ol className='list-decimal pl-5 my-2 mx-4 md:my-2'>
							    <li>साधारण सभा  General Body</li>
							    <li>कार्यकारी निकाय  Executive Body</li>
						    </ol>
						    <li>स्टॉक रजिस्टर  Stock Register</li>
						    <li>लेजर बुक  Ledger Book</li>
						    <li>कैश बुक  Cash Book</li>
						    <li>सदस्यता शुल्क रसीद बुक  Membership fee receipt book</li>
						    <li>दान रसीद बुक  Donate receipt book</li>
						    <li>विघटन  Dissociation:</li>
						</ol>
					</ol>

							




                </p>
                <p>संस्था का विघटन तथा समाप्ति की कार्यवाही सोसाइटीज रजिस्ट्रेशन एक्ट की धारा 13 व 14 के अंतर्गत की जायेगी (Society dissociation and termination will be according to societies Registration Act, under 13 and 14 )</p>

            </div>

        </div>
	)
}
export default Registration
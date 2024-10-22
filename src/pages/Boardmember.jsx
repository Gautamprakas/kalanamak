import React, { useContext, useState } from 'react'

const Boardmember = () => {

    return (
        <div className='lg:px-32 md:px-12 sm:px-5 px-3  lg:py-8 py-4'>

            <div className='text-center'>
                <h1 className=' font-semibold sm:text-3xl text-2xl  max-md:inline-block max-md:px-2 max-md:border-b-[#af7501] max-md:border-b-2   max-sm:py-1 text-center  px-1   text-[#0f5f17]'>
                    कालानमक एक्सपोर्ट डेवलपमेंट फाउडेंशन बोर्ड के प्रबन्धकारिणी सदस्यों की सूची
                </h1>
            </div>
            <div className='my-2 md:my-4'>
                <h2 className='font-semibold text-xl py-1 border-b-[#af7501] border-b text-[#0f5f17] '>
                    
                </h2>
                
            </div>
                  
            <div className='my-2 md:my-4'>
                <div className='lg:w-[80%] w-[100%]'>
                    {/*<h2 className='font-semibold text-xl py-1 border-b-[#af7501] border-b text-[#0f5f17]'>
                        Kalanamak Average Production Rice
                    </h2>*/}
                    <table id='customers' className='mt-3 '>
                        <tr>
                            <th>क०स०</th>
                            <th>नाम व मो०</th>
                            <th>पदनाम</th>
                            <th>पता</th>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>श्री अभिषेक सिंह, मो0- 6394579962</td>
                            <td>सचिव </td>
                            <td>निदेशक, शिवांस फार्मर प्रोड्यूसर कम्पनी लि0, खेसरहा।</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>श्री विकास उपाध्याय,मो0- 8002255038</td>
                            <td>कोषाध्यक्ष</td>
                            <td>प्रो0 सिद्धभूमि कालानमक राइस, मधुवापुर, विकास रोड, महुलानी सिद्धार्थनगर।</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>श्री बृजेश जयसवाल,मो0- 9540182525</td>
                            <td>आयात निर्यात प्रबन्धक</td>
                            <td>प्रो0 पी0-बी0 कालानमक राइस ग्राम-दुल्हा सुमाली, पो0 ककरहवा बाजार, वि0ख0-बर्डपुर।</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>श्री महेन्द्र नाथ पाण्डेय,मो0- 9839342588</td>
                            <td>प्रचार–प्रसार प्रबन्धक</td>
                            <td>निदेशक, भारतीय प्राकृतिक काला0 राइस कृ0उ0 संगठन ग्राम मूजडीह पो0 रिठिया बाजार तहसील- बांसी,सिद्धार्थनगर।</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>श्री अश्वनी कुमार सिंह,मो0- 8601890222</td>
                            <td>उत्पादन प्रबन्धक</td>
                            <td>श्री अश्वनी कुमार सिंह, कृषक ग्राम-महादेवा पो0 उदयराजगंज</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>श्री श्रीधर पाण्डेय,मो0-9415163366</td>
                            <td>रिसर्च एवं डेवलपमेंट प्रबन्धक</td>
                            <td>निदेशक, कपिलवस्तु फार्मर प्रोड्यूसर कम्पनी लि0, वि0ख0 उसका बाजार, सिद्धार्थनगर।</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>श्री उमेश श्रीवास्तव,मो0-9838343371</td>
                            <td>गुणवत्ता नियंत्रण प्रबन्धक</td>
                            <td>निदेशक, सिद्धार्थ महिला एग्रो० फार्मर प्रो० कम्पनी लि० वि०ख० नौगढ़, सिद्धार्थनगर</td>
                          </tr>
                                               
                    </table>
                    <p className='pt-1 md:text-lg my-2'>
                  
                   </p>
                    <p className='pt-1 md:text-lg my-2'>
                   
                    </p>
                </div>
            </div>



        </div>
    )
}

export default Boardmember;
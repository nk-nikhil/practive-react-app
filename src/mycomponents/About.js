import React from 'react'
import { Link } from 'react-router-dom'
import History from './History';
import Documents from './Documents'



export default function About() {
    return ( <
        div className = "container" >
        <
        div className = "row" >
        <
        div className = "col-sm-3" >
        <
        ul >
        <
        li className = "nav-item" >
        <
        Link className = "nav-link"
        to = "./History" > History < /Link> <
        /li> <
        li className = "nav-item" >
        <
        Link className = "nav-link"
        to = "./Documents" > Documents < /Link> <
        /li> <
        /ul> <
        /div> <
        div className = "col-sm-9" >
        <
        h2 >
        About NIAS <
        /h2> <
        p >
        The National Institute of Advanced Studies(NIAS) was conceived and established by the vision and initiative of the late Mr.J.R.D.Tata.He sought to create an institution which would conduct advanced research in multidisciplinary areas, and also serve as a forum that will bring together administrators and managers from industry and government, leaders in public affairs, eminent individuals in different walks of life, and the academic community in the natural & social sciences, and the arts & humanities. <
        /p> <
        p >
        Dr.Raja Ramanna, as the Founder Director, immensely contributed to the growth and development of this Institute.Over a period of time, NIAS initiated several research programmes and other activities that brought recognition and fame.NIAS is a registered society(on 20 June 1988) under the Karnataka Societies Registration Regulation Act.The Institute is an autonomous organisation governed by a council of management.It is located on the campus of the Indian Institute of Science, Bengaluru and was established in 1988 with Dr.Raja Ramanna as the Founder Director until his retirement in July 1997, and followed by Prof R.Narasimha until 2004, Dr.K.Kasturirangan during 2004 - 2009, Prof.V S Ramamurthy during 2009 - 2014 and Prof.Baldev Raj during September 2014 - 6 January 2018. Mr.S Ramadorai currently chairs the Council of Management.Dr Shailesh Nayak took over as the Director of NIAS on 19 March 2018. <
        /p> <
        p >
        Over the years, NIAS has moved towards fulfilling the dreams of its founder Mr.J.R.D.Tata.As a multidisciplinary Institute, NIAS combines scientific and humanistic perspectives on topics of national and international importance.Activities of NIAS include research, analysis, publications and teaching. <
        /p> <
        p >
        Following the ideas of its founder, NIAS has also been an educational centre
        for future leaders of India through its courses and educational programmes.NIAS has created a unique ambience wherein researchers, scholars, speakers and visitors from a variety of disciplines interact in a meaningful manner.The PhD programme that was initiated in 2004 has added to the dynamism with exploratory interest in many interdisciplinary areas of research.The Centre
        for Spatial Analytics and Advanced GIS(C - SAG) has been established under the aegis of NIAS Council of Management with support from Tata Trusts in October 2017. <
        /p> <
        History / >
        <
        Documents / >
        <
        /div> <
        /div> <
        /div>
    )
}

// export default Example;
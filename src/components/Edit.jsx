import React from 'react';
import {Link, useLocation} from "react-router-dom";


const  Edit = (props) => {
    
     const location = useLocation();
     const params = new URLSearchParams(location.search);
     const ind =  params.get('n');

        return(
            <div className="fields">
                <div>
                        <fieldset><legend>Name</legend>
                            <input id ="ip1" placeholder={props.stud[ind][0]} className='inp1' type="text" />
                        </fieldset>
                </div>
                <div>
                        <fieldset><legend>Age</legend>
                        <input id ="ip2" placeholder={props.stud[ind][1]} className='inp1' type="text" />
                        </fieldset>
                </div>
                <div>
                        <fieldset><legend>Course</legend>
                        <input id ="ip3" placeholder={props.stud[ind][2]} className='inp1' type="text" />
                        </fieldset>
                </div>
                <div>
                        <fieldset><legend>Batch</legend>
                        <input id ="ip4" placeholder={props.stud[ind][3]} className='inp1' type="text" />
                        </fieldset>
                </div>

                <div className='f3'>
                        <Link to="/students"><button className='c1' id='student-add'>Cancel</button></Link>
                        <Link to="/students"><button className='c2' onClick={() => {
                                let e1 = document.getElementById('ip1').value;
                                let e2 = document.getElementById('ip2').value;
                                let e3 = document.getElementById('ip3').value;
                                let e4 = document.getElementById('ip4').value;

                                props.edit(e1, e2, e3, e4, ind);
                        }} id='student-add'>Update</button></Link>
                </div>
                


            </div>
        );
        
}



export default Edit;
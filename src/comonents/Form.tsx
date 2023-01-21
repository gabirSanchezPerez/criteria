
import { useState } from 'react';
import { FaRegComment, FaGraduationCap, FaRegUser, FaSearch} from 'react-icons/fa';


const Form = () => {
    const [destination, setDestination] = useState("Any");
    const [provider, setProvider] = useState('Any');

    const _onFocus = (e: any, i: number) => {
        let val: String = e.target.value;
        if (val.toLocaleLowerCase() === "any") {
            if(i === 0) {
                setDestination("");
            } else {
                setProvider("");
            }
        }
    } 

    const _onBlur = (e: any, i: number ) => {
        let val: String = e.target.value;
        if (val.trim() === "") {
            if(i === 0) {
                setDestination("Any");
            } else {
                setProvider("Any");
            }
        }
    }
    
    return (
        <div className='card mt-4'>
            <div className=" card-header "> 
                <div className='row mx-4'>
                    <div className='col-sm-6 col-md-3'>
                        <FaRegComment  /> Language
                    </div>
                    <div className='col-sm-6 col-md-3'>
                        <FaGraduationCap /> Higher Ed.
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <div className='float-end'>
                            <FaRegUser /> Brasil, Onshore
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className=" card-body "> 
                <div className="row"> 
                    <div className='col-sm-6 col-md-3'>
                        <input type="text" value={destination} placeholder='Search' className='form-control' name='destination' onFocus={(val) => _onFocus(val, 0)} onBlur={(val) => _onBlur(val, 0)} onChange={(val) => setDestination(val.target.value)}/>
                    </div>
                    <div className='col-sm-6 col-md-3'>
                        <input type="text" value={provider} placeholder='Search' className='form-control' name='Provider' onFocus={(val) => _onFocus(val, 1)} onBlur={(val) => _onBlur(val, 1)} onChange={(val) => setProvider(val.target.value)}/>
                    </div>
                    <div className='col-sm-6 col-md-3'>
                        <input type="number" defaultValue='4' className='form-control' name='num_week'/>
                    </div>
                    <div className='col-sm-6 col-md-3'>
                        <button className='btn btn-primary btn-block' >
                            <FaSearch /> Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
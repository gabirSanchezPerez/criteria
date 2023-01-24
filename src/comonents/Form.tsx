
import { useState, useContext } from 'react';
import Modal from './Modal';
import { FaRegComment, FaGraduationCap, FaRegUser, FaSearch} from 'react-icons/fa';
import { CriteriaContext } from "./context/CriteriaContext";

const Form = () => {
    const [campus, setCampus] = useState("Any");
    const [location, setLocation] = useState('Any');
    const [origin, setOrigin] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const criteriaContext = useContext(CriteriaContext);

    const _onFocus = (e: any, i: number) => {
        setOrigin(i);
        let val: String = e.target.value;
        if (val.toLocaleLowerCase() === "any") {
            if(i === 0) {
                setLocation("");
            } else {
                setCampus("");
            }
            setShowModal(true);
        } else {
            setShowModal(true);
        }
    } 

    const _onBlur = (e: any, i: number ) => {
        let val: String = e.target.value;
        if (val.trim() === "") {
            if(i === 0) {
                setLocation("Any");
            } else {
                setCampus("Any");
            }
            setShowModal(false);
        }
    }

    const modalConfirm = () => {
        setShowModal(false);
        if (origin === 0) {
            setLocation(`${criteriaContext?.selectedDestination.length} Selected`);
        } else if (origin === 1) {
            setCampus(`${criteriaContext?.selectedProvider.length} Selected`);
        } 
        
    }
    const modalCancel = () => {
        setShowModal(false);
    }
    
    return (
        <>
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
                            <input type="text" value={location} placeholder='Search' className='form-control' name='location' onFocus={(val) => _onFocus(val, 0)} onBlur={(val) => _onBlur(val, 0)} onChange={(val) => setLocation(val.target.value)}/>
                        </div>
                        <div className='col-sm-6 col-md-3'>
                            <input type="text" value={campus} placeholder='Search' className='form-control' name='campus' onFocus={(val) => _onFocus(val, 1)} onBlur={(val) => _onBlur(val, 1)} onChange={(val) => setCampus(val.target.value)}/>
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
            <div className='content-modal'>
                {showModal && <Modal location={location} campus={campus} modalConfirm={modalConfirm} modalCancel={modalCancel} origin={origin} />}
            </div>
            
            
        </>
    );
}

export default Form;
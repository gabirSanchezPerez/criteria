
import { FaRegComment, FaGraduationCap, FaRegUser, FaSearch} from 'react-icons/fa';

const Form = () => {
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
                        <div className='text-right'>
                            <FaRegUser /> Brasil, Onshore
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className=" card-body "> 
                <div className="row"> 
                    <div className='col-sm-6 col-md-3'>
                        <input type="text" value='Any' placeholder='Search' className='form-control' name='destination'/>
                    </div>
                    <div className='col-sm-6 col-md-3'>
                        <input type="text" value='Any' placeholder='Search' className='form-control' name='rovider'/>
                    </div>
                    <div className='col-sm-6 col-md-3'>
                        <input type="number" value='4' className='form-control' name='num_week'/>
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
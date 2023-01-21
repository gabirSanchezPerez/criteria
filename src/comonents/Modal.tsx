import List from "./ui/list";
import {locations} from "../data/data";

const Modal = (props: any) => {
    const { destination, provider} = props;

    return (
        <div className='card mt-4 col-sm-8 col-md-6'>
                <div className=" card-body " > 
                    <div className="row "> 
                        <div className='col-sm-8 col-md-8 consten-modal'>
                            {locations.map((d: any, i:  number) => {
                                return (
                                    <List d={d} />
                                )
                            })}
                        </div>
                        <div className='col-sm-4 col-md-4 py-4'>
                            e {provider}
                        </div>
                    </div>
                </div>
                <div className='card-footer '>
                    <div className='float-end'>
                        <button className='btn btn-light btn-block' >Cancel </button>
                        <button className='btn btn-secondary btn-block' >Confirm </button>
                    </div>
                </div>
            </div>
    );
};

export default Modal;
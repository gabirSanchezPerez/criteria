import { useContext } from "react";
import List from "./ui/list";
import { CriteriaContext } from "./context/CriteriaContext";
import { Destination, Provider } from "./context/types";
import { FaRegTimesCircle} from 'react-icons/fa';

const Modal = (props: any) => {
    const { location, campus, modalConfirm, modalCancel, origin } = props;
    const criteriaContext = useContext(CriteriaContext);
    
    const _clickItemProvider = (item: Provider) => {
        criteriaContext?.saveProvider(item);
    }
    const _clickItemDestination = (item: Destination) => {
        criteriaContext?.saveDestination(item);
    }

    return (
        <div className={origin === 0 ? 'card mt-4 col-sm-8 col-md-6' : 'card mt-4 col-sm-8 col-md-6 offset-sm-3'}>
                <div className=" card-body " > 
                    <div className="row "> 
                        <div className='col-sm-8 col-md-8 content-location'>
                            <h4>Results</h4>
                            {origin === 0 && location.length > 2 ? 
                            criteriaContext?.destinations
                                .filter(l => l.name.includes(location))
                                .map((filteredDestination, i) => (
                                    <List key={i} d={filteredDestination} clickItem={_clickItemDestination} />
                            )): null}
                            {origin === 1 && campus.length > 2 ? 
                            criteriaContext?.providers
                                .filter(c => c.name.includes(campus))
                                .map((filteredProvider, i) => (
                                    <List key={i} d={filteredProvider} clickItem={_clickItemProvider} />
                            )): null}
                        </div>
                        {origin === 0 && <div className='col-sm-4 col-md-4'>
                            <h4>Selected({criteriaContext?.selectedDestination.length})</h4>
                            {criteriaContext?.selectedDestination.map( (d: Destination, i) => (<div className="d-selected" key={i}> {d.name} <FaRegTimesCircle onClick={() => criteriaContext?.updateDestination(d.id)} /></div>))}
                        </div>}
                        {origin === 1 && <div className='col-sm-4 col-md-4'>
                            <h4>Selected({criteriaContext?.selectedProvider.length})</h4>
                            {criteriaContext?.selectedProvider.map( (p: Provider, i) => (<div className="d-selected" key={i}> {p.name} <FaRegTimesCircle onClick={() => criteriaContext?.updateProvider(p.id)} /></div>))}
                        </div>}
                    </div>
                </div>
                <div className='card-footer '>
                    <div className='float-end'>
                        <button className='btn btn-light btn-block' onClick={() => {modalCancel()}} >Cancel </button>
                        <button className='btn btn-secondary btn-block' onClick={() => {modalConfirm()}}>Confirm </button>
                    </div>
                </div>
            </div>
    );
};

export default Modal;
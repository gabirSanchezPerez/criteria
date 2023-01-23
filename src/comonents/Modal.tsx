import { useState } from "react";
import List from "./ui/list";
import {locations} from "../data/data";

type Destination = {
    id: string,
    name: string,
    country: string,
  };

const Modal = (props: any) => {
    const { destination} = props;
    const [selectedDestination , setSelectedDestination] = useState<Destination[]>([])

    const _clickItem = (item: Destination) => {
        let selected = selectedDestination;
        selected.push(item)
        setSelectedDestination(selected);
    }

    return (
        <div className='card mt-4 col-sm-8 col-md-6 '>
                <div className=" card-body " > 
                    <div className="row "> 
                        <div className='col-sm-8 col-md-8 content-location'>
                            <h4>Results</h4>
                            {destination.length > 2 ? 
                            locations
                                .filter(locate => locate.name.includes(destination))
                                .map((filteredDestination, i) => (
                                    <List key={i} d={filteredDestination} clickItem={_clickItem} />
                            )): null}
                        </div>
                        <div className='col-sm-4 col-md-4'>
                            <h4>Selected({selectedDestination.length})</h4>
                            {selectedDestination.length > 0 && selectedDestination.map( (d: Destination, i) => (<div key={i}> {d.name}</div>))}
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
import { FaMapMarkerAlt } from 'react-icons/fa';

const list = ( props: any ) => {
    const { d } = props;

    return (
        <div className='row col-sm-12 list'>
            <div className='col-sm-1'>
                <FaMapMarkerAlt />
            </div>
            <div className='col'>
                <div><strong>ACA</strong></div>
                <div>{d.name}</div>
            </div>
        </div>
    );
};

export default list;
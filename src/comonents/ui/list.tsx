import { FaMapMarkerAlt } from 'react-icons/fa';

const list = ( props: any ) => {
    const { d, clickItem } = props;
    const location = d.name.split(",");
    const city = location[0];
    location.shift();
    const country = (location.length > 0) ? location.join(", "): '';
    //console.log(country)
    return (
        <div className='row col-sm-12 list' onClick={() => clickItem(d)}>
            <div className='col-sm-1'>
                <FaMapMarkerAlt />
            </div>
            <div className='col'>
                <div><strong>{city}</strong></div>
                <div>{country}</div>
            </div>
        </div>
    );
};

export default list;
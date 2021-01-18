import { typeAdded } from '../Redux/FilterSlice';
import store from '../Redux/Store';

import { useSelector } from 'react-redux';

const TypeFilter = () => {
    
    const currentType = useSelector(state => state.filters.type);

    const onClick = (e) => {
        e.preventDefault();
        if(currentType !== e.target.value){
            store.dispatch(typeAdded(e.target.value))
        }
    }
    
    return(
        <div className="typefilter-div" >
            <form>
                <button value='link' onClick={onClick} >Posts</button>
                <button value='sr' onClick={onClick} >Communities</button>
            </form>
        </div>
    )
}
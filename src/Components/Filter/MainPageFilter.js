import { useSelector } from 'react-redux';
import { categoryAdded, statusAdded } from '../Redux/PostsSlice';

import store from '../Redux/Store';


const MainPageFilter = () => {
    const currentFilter = useSelector(state => state.posts.category);

    const onSubmit = (e) => {
        e.preventDefault();
        
        if(e.target.value !== currentFilter){
            store.dispatch(categoryAdded(e.target.value));
            store.dispatch(statusAdded('idle'));
        } else {
            return
        }
    }

    return(
        <div className="mainpage-filter" >
            <form>
                <button value="best" onClick={onSubmit} >Best</button>
                <button value="hot" onClick={onSubmit} >Hot</button>
                <button value="new" onClick={onSubmit} >New</button>
                <button value="top" onClick={onSubmit} >Top</button>
                <button value="rising" onClick={onSubmit} >Rising</button>
            </form>
        </div>
    )
}

export default MainPageFilter;
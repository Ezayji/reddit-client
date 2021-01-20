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
                <button value="best" onClick={onSubmit} style={{ textShadow: currentFilter === 'best' ? '0px 0px 2px #e7e7e7' : 'none' }} >Best</button>
                <button value="hot" onClick={onSubmit} style={{ textShadow: currentFilter === 'hot' ? '0px 0px 2px #e7e7e7' : 'none' }} >Hot</button>
                <button value="new" onClick={onSubmit} style={{ textShadow: currentFilter === 'new' ? '0px 0px 2px #e7e7e7' : 'none' }} >New</button>
                <button value="top" onClick={onSubmit} style={{ textShadow: currentFilter === 'top' ? '0px 0px 2px #e7e7e7' : 'none' }} >Top</button>
                <button value="rising" onClick={onSubmit} style={{ textShadow: currentFilter === 'rising' ? '0px 0px 2px #e7e7e7' : 'none' }} >Rising</button>
            </form>
        </div>
    )
}

export default MainPageFilter;
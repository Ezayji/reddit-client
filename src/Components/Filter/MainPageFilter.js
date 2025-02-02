import { useSelector, useDispatch } from 'react-redux';
import { categoryAdded, statusAdded } from '../Redux/PostsSlice';

const MainPageFilter = () => {
    const dispatch = useDispatch();
    const currentFilter = useSelector(state => state.posts.category);

    const onSubmit = (e) => {
        e.preventDefault();
        
        if(e.target.value !== currentFilter){
            dispatch(categoryAdded(e.target.value));
            dispatch(statusAdded('idle'));
        } else {
            return
        }
    }

    return(
        <div className="mainpage-filter" >
            <form>
                <button value="best" onClick={onSubmit} style={{ textShadow: currentFilter === 'best' ? '0px 0px 2px #ffffffbe' : 'none',
                                                                 borderBottom: currentFilter === 'best' ? '2px solid #6a04ee' : 'none' }} >Best</button>
                <button value="hot" onClick={onSubmit} style={{ textShadow: currentFilter === 'hot' ? '0px 0px 2px #ffffffbe' : 'none',
                                                                 borderBottom: currentFilter === 'hot' ? '2px solid #6a04ee' : 'none' }} >Hot</button>
                <button value="new" onClick={onSubmit} style={{ textShadow: currentFilter === 'new' ? '0px 0px 2px #ffffffbe' : 'none',
                                                                 borderBottom: currentFilter === 'new' ? '2px solid #6a04ee' : 'none'  }} >New</button>
                <button value="top" onClick={onSubmit} style={{ textShadow: currentFilter === 'top' ? '0px 0px 2px #ffffffbe' : 'none',
                                                                 borderBottom: currentFilter === 'top' ? '2px solid #6a04ee' : 'none'  }} >Top</button>
                <button value="rising" onClick={onSubmit} style={{ textShadow: currentFilter === 'rising' ? '0px 0px 2px #ffffffbe' : 'none',
                                                                 borderBottom: currentFilter === 'rising' ? '2px solid #6a04ee' : 'none'  }} >Rising</button>
            </form>
        </div>
    )
}

export default MainPageFilter;
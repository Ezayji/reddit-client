


const Awards = ({ awards }) => {

    let count;

    let award_bar;

    if (awards){
        count = (
            awards.map((award) => (
              award.count  
            ))
        )
        award_bar = (
            awards.map((award, i) => (
                <div className="award" key={i} >
                    <img src={award.icon_url} height="16px" width="16px" alt={award.description} title={award.description} />
                    {count[i] > 1 && <p>{count[i]}</p>}
                </div>
            ))
        )
    } else {
        count = null;
        award_bar = null;
    }

    return (
        <div className="awards">
            {award_bar}
        </div>
    )
}

export default Awards;
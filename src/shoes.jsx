import data from './data.jsx';

{/* <div className="container">
    <div className="row">
        <div className="col-md-4">
            <img src='https://codingapple1.github.io/shop/shoes1.jpg' width="80%"/>
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].content}</p>
            <p>{shoes[0].price}</p>
        </div>
        <div className="col-md-4">
            <img src='https://codingapple1.github.io/shop/shoes2.jpg' width="80%"/>
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].content}</p>
        </div>
        <div className="col-md-4">
            <img src='https://codingapple1.github.io/shop/shoes3.jpg' width="80%"/>
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].content}</p>
        </div>
    </div>
</div> */}

function Shoes({ shoes }) {
    return (
        <div className='Container'>
            <div className='row'>
                {shoes.map((item, i) => (
                    <div className='col-md-4' key={i}>
                        <img src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`} width="80%" />
                        <h4>{item.title}</h4>
                        <p>{item.content}</p>
                        <p>{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shoes;
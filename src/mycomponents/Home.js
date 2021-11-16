import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card'
import Perform from './Perform';

export default function Home() {

    const [data, setData] = useState(null);

    //this.state={data:[],counter:0}
    //    const [list, updateList] = useState(data);

    const handleRemoveItem = (e) => {
        //    debugger
        // console.log("list",list)
        // console.log("data",data)
        const removeItem = data.filter((element) => {
            return element.id !== e.id;
        })
        /*   updateList(x); */
        setData(removeItem);
        // alert("Card removed successfully");

    };
    useEffect(() => {
        fetch(`https://api.github.com/users`)
            .then((response) => response.json())
            .then(setData);
    }, []);

    if (data) {
        return (
            <>
                {/* {JSON.stringify(data)} */}
                <div className="app" style={styles.app}>
                    {data.length !== 0 ?
                        data.slice(0, 3).map((data, index) => {
                            return (<Card data={data} key={index} handleRemoveItem={handleRemoveItem} />);
                        }) :
                        <div className="container"> <h2>No more cards available</h2></div>
                    }
                </div>
                <div>
                    <Perform />
                </div>
            </>
        );
    }
    return (
        <div>
            <h2>No Data Found</h2>
        </div>
    )
}



const styles = {
    app: {
        display: 'flex'
    }
}
// export default Main
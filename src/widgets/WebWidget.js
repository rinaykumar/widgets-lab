import React from 'react';

const WebWidget = () => {
    const [data, setData] = React.useState(null);
    
    React.useEffect(() => {
        // Trigger when the component renders
        fetch('https://cat-fact.herokuapp.com/facts')
            .then(res => res.json())
            .then(resData => {
                console.log(resData);
                const index = Math.floor(Math.random() * resData.all.length)
                setData(resData.all[index].text);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []); // Leave array empty to only trigger once
    
    return (
        <div className="widget">
            <h2>Web Widget</h2>
            <div>
                {data}
            </div>
        </div>
    );
};

export default WebWidget;
// import { WebWidget } if no 'default'
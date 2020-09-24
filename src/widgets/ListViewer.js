import React from 'react';

const optionValues = [1, 2, 3, 4, 5, 6, 7];
const optionNames = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven'
];

const ListItem = (props) => {
    return (
        <div>
            {props.name}
        </div>
    );
};

const ListViewer = () => {
    const [listSize, setListSize] = React.useState(1);

    const handleValueChange = e => {
        setListSize(parseInt(e.target.value));
    }

    let listToShow = [];
    for (let i = 0; i < listSize; i++) {
        listToShow.push(optionNames[i]);
    }

    return (
        <div className="widget">
            <h2>List Viewer</h2>
            <div>
                <select value={listSize} onChange={handleValueChange}>
                    {optionValues.map((value, i) => (
                        <option key={i} value={value}>{value}</option>
                    ))}
                </select>
                    {listToShow.map((item, i) => (
                        <ListItem key={i} name={item} />
                    ))}
            </div>
        </div>
    );
};

export default ListViewer;
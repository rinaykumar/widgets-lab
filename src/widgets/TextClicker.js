// Must import React
import React from 'react';

const TextClicker = () => {
    const[textValue, setTextValue] = React.useState('');
    
    const handleClick = () => {
        if (textValue.length > 0) {
            alert(textValue);
        } 
    };
    // Must return some JSX
    return (
        <div className="widget text-clicker-widget">
            <h2>Text Clicker</h2>
            <div>
                <input 
                    value={textValue}
                    onChange={(e) => {
                        // e.target.value is the value in the textbox
                        // Triggered when user types
                        // Add logic before using setter
                        if (e.target.value.length < 10) {
                            setTextValue(e.target.value);
                        }  
                    }}
                />
                <h4 onClick={handleClick} >
                    {textValue}
                </h4>
            </div>
        </div>
    );
};

export default TextClicker;
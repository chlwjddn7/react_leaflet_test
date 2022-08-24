import React, {useState} from 'react'

function Header () {

    const [headerData, setHeaderData] = useState(0);
    console.log('Header headerData : ', headerData);

    function headerDataChange () {
        for (let i = 0; i < 10; i++) {
            setHeaderData(headerData + 1);
        }
        console.log('function headerDataChange headerData : ', headerData);
    }

    

    return (
        <div>
            헤더입니다.
            <button onClick={headerDataChange}>+1</button>
        </div>
    )
}

export default Header;
import {List} from 'antd';
import React from "react";
import {useSelector} from "react-redux";

const SearchHistory = ({setCurrentLocation}) => {

    const places = useSelector((state) => state?.searchHistory?.searchResponse);

    return (
        <>
            {/* Search Results List */}
            <List
                itemLayout="horizontal"
                dataSource={places}
                style={{ marginTop: '20px' }}
                renderItem={(item) => (
                    <List.Item onClick={()=>setCurrentLocation([{...item}])}>
                        <List.Item.Meta
                            title={<>{item.name}</>}
                            description={item.address}
                        />
                    </List.Item>
                )}
            />
        </>
    );

};

export default SearchHistory;
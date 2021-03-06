import React from 'react';
import jsonShopData from './shop-data.json';

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: jsonShopData  
        };
    }

    render() {
        const {collections} = this.state;
        return (<div className="shop-page">
{
    collections.map(
        ({ id, ...otherSectionProps }) => (
        <CollectionPreview key={id} {...otherSectionProps} />
    ))
}
        </div>)
    }
};

export default ShopPage;
import React from "react";
import {connect } from "react-redux";
import './collection-overview.style.scss'
import CollectionPrevieww from "../../Components/preview-collection/collection-preview.component";
import { selectCollections } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";

const CollectionOverview = ({collections}) => (
    <div className="collections-overview">
           {
            collections.map(({id, ...otherCollectionProps}) =>(
              <CollectionPrevieww key={id} {...otherCollectionProps}/>
            ))
          }
    </div>
)


const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

  export default connect(mapStateToProps)(CollectionOverview);
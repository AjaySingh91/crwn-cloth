// import React from "react";
// // import {connect } from "react-redux";
// import './collection-overview.style.scss'
// import CollectionPrevieww from '../../Components/collection-preview/collection-preview.component'
// import { selectCollections } from "../../redux/shop/shop.selector";
// import { createStructuredSelector } from "reselect";
// import { useSelector } from "react-redux";

// const CollectionOverview = () => 
// {
//   const collections = useSelector(createStructuredSelector({
//     collections: selectCollections
//   }));
//   console.log(collections);
//   // console.log(collections.collections);
//   // if (!Array.isArray(collections.collections)) {
//   //   return (
//   //     <div className="err">Error in Array </div>
//   //   )
//   // }
  
  
// return(
//     <div className="collections-overview">
//            {
//             collections.map(({id, ...otherCollectionProps}) =>(
//               <CollectionPrevieww key={id} {...otherCollectionProps}/>
//             ))
//           }
//     </div>
// )}


// // const mapStateToProps = createStructuredSelector({
// //   collections: selectCollections
// // })

// //   export default connect(mapStateToProps)(CollectionOverview);

// export default CollectionOverview;


import React from "react";
import './collection-overview.style.scss'
import CollectionPreview from '../../Components/collection-preview/collection-preview.component'
import { selectCollections } from "../../redux/shop/shop.selector";
import { useSelector } from "react-redux";

const CollectionOverview = () => {
  const collections = useSelector(selectCollections);
  const collectionsArray = Object.values(collections);

  return (
    <div className="collections-overview">
      {collectionsArray.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionOverview;

import React from 'react'
import './collection.style.scss'
import { selectCollection } from '../../redux/shop/shop.selector'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CollectionItem from  '../../Components/collection-item/collection-item.component'

const CollectionPage = () => {

    
  const { collectionId } = useParams();
  const collections = useSelector((state) => selectCollection(collectionId)(state));
console.log();


const { title,items} = collections;

    return(
    <div className="collection-page">
        <h2 className='title'>{title}</h2>
        <div className="items">
        {items.map((item) => (
        <CollectionItem key={item.id} item={item} />
        ))}
        </div>
    </div>)
}


// // const MapStateToProps = (state) => (
  
// //   {
// //    collection: selectCollection(collectionId)(state)
// // });

// // export default (connect(MapStateToProps)(CollectionPage));

export default CollectionPage;


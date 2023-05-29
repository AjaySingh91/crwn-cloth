import React from 'react'
import './collection.style.scss'
// import { selectCollection } from '../../redux/shop/shop.selector'
import { selectCollection } from '../../redux/shop/shop.selector'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CollectionItem from  '../../Components/collection-item/collection-item.component'

const CollectionPage = () => {

    
  const { collectionId } = useParams();
  const collection = useSelector((state) => selectCollection(collectionId)(state));
console.log(collection);


const {title , items} = collection;

    return(
    <div className="collection-page">
        <h2 className='title'>{title}</h2>
        <div className="items">
          {
            items.map(item => (
              <CollectionItem  key={item.id} item={items} />
            ))
          }
        </div>
    </div>)
}


export default CollectionPage;
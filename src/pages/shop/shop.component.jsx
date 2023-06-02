import React from "react";
import { Route, Routes } from "react-router-dom";
import CollectionOverview from '../../Components/collections-overview/collection-overview.component'
import CollectionPage from "../Collection/collection.component";
import { firestore ,convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../Components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component { 

  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount(){
    const {updateCollections} = this.props;

    const collecitonRef = firestore.collection('collecctions ')

    // fetch('https://firestore.googleapis.com/v1/projects/crown-db-8f6e1/databases/(default)/documents/collections')
    // .then(Response => Response.json())
    // .then(collections => console.log(collections))

    collecitonRef.get().then(snapshot => {
      // console.log(snapshot);
     const collectionMap = convertCollectionSnapshotToMap(snapshot)
    // console.log(collectionMap);
    updateCollections(collectionMap);
    this.setState({loading: false}); 
    })
  }
  

  render() {
    const {loading} = this.props;
        return( 
          <div className="shop-page">
          <Routes>
          <Route path="/" element={<CollectionOverviewWithSpinner isLoading={loading} />} />
      <Route path="/:collectionId" element={<CollectionPageWithSpinner isLoading={loading} />} />
     </Routes>
        </div>
      );
        }
}

const mapDispatchToProps = dispatch => ({
  updateCollections : collectionMap => dispatch(updateCollections(collectionMap)) 
})

export default connect(null , mapDispatchToProps)(ShopPage);

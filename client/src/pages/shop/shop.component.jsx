import React from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import {fetchCollectionsStart} from '../../redux/shop/shop.actions'
import CollectionOverviewContainer from "../../Components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../Collection/collection-page.container";

class ShopPage extends React.Component { 


  componentDidMount(){
    const {fetchCollectionsStart} = this.props;
    fetchCollectionsStart();
  }
  

  render() {
        return( 
          <div className="shop-page">
          <Routes>
          <Route path="/" Component={CollectionOverviewContainer} />
      <Route path="/:collectionId" Component={CollectionPageContainer}/>
     </Routes>
        </div>
      );
        }
}



const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect( null,mapDispatchToProps)(ShopPage);

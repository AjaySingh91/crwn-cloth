import React from "react";
import { Route, Routes } from "react-router-dom";
import CollectionOverview from '../../Components/collections-overview/collection-overview.component'
import CollectionPage from "../Collection/collection.component";

const ShopPage = () => ( 
        <div className="shop-page">
          <Routes>
         <Route exact path="/" element={<CollectionOverview />} />
         <Route path="/:collectionId" element={<CollectionPage />} />
         </Routes>
        </div>
      );



export default ShopPage;

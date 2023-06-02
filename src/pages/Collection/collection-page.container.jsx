import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";
import WithSpinner from "../../Components/with-spinner/with-spinner.component";
import { compose } from "redux";
import CollectionPage from "./collection.component";


const mapStateToProps = createStructuredSelector({
    isCollectionLoaded: (state) => !selectIsCollectionsLoaded(state)
})

const CollectionPageContainer = compose (
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionPageContainer;
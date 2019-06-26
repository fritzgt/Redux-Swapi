import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getCharacters } from "../actions";

//Loader spinner
import Loader from "react-loader-spinner";

class CharacterListView extends React.Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    // call our action
    this.props.getCharacters();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <Loader type="Audio" color="#somecolor" height={80} width={80} />;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
//Reder to state.charsReducer because of the combined reducer
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.charsReducerfetching,
  error: state.charsReducer.error
});

export default connect(
  /* mapStateToProps replaces null here */
  mapStateToProps,
  {
    /* action creators go here */
    getCharacters
  }
)(CharacterListView);

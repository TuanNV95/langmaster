import { connect } from 'react-redux'
import { changeChapter } from '../actions/opening'
import Version1 from '../components/Version1'
import config from '../config/opening.json'

const mapStateToProps = () => ({})

const mapDispatchProps = dispatch => ({
  changeChapter() {
    const chapter = 'LastChapter'
    const description = config[chapter]
    dispatch(changeChapter(chapter, description))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchProps
)(Version1)

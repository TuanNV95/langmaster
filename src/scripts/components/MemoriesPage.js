import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import memories from '../config/memories'

export default class ProfilePage extends Component {
  componentDidMount() {
    const { changeChapter, closeMenu } = this.props
    changeChapter()
    closeMenu()
  }

  render() {
    return (
      <article className="page memories-page">
        <div className="page__bg"></div>
        <div className="page__decoration">
          <div></div><div></div><div></div><div></div>
        </div>
        <div className="page__frame"></div>
        <div className="page__inner">
          <section className="page__title">
            <div></div>
          </section>
          <section className="page__project"></section>
          <h2 className="page__sub-title top">Some daily challenges are completed slowly and are not found.<br />{'The status is "Done".'}</h2>
          <section className="memories-page__content">
            {memories.map((mem, key) => {
              return (
                <a className="content" href={mem.link} key={key} target="_blank" rel="noopener noreferrer" title={mem.title}>
                  <img className="thumb" src={mem.thumb} alt={mem.title} />
                  <div className="color">
                    {
                      mem.col_1_value === '' && <h5 className="title-habit-miss">{mem.col_1}{': '}</h5>}
                    {
                      mem.col_1_value !== '' && <h5 className="title-habit-done">{mem.col_1}{': '}{mem.col_1_value}</h5>
                    }
                    {
                      mem.col_2_value === '' && <h5 className="title-habit-miss">{mem.col_2}{': '}</h5>}
                    {
                      mem.col_2_value !== '' && <h5 className="title-habit-done">{mem.col_2}{': '}{mem.col_2_value}</h5>
                    }
                    {
                      mem.col_3_value === '' && <h5 className="title-habit-miss">{mem.col_3}{': '}</h5>}
                    {
                      mem.col_3_value !== '' && <h5 className="title-habit-done">{mem.col_3}{': '}{mem.col_3_value}</h5>
                    }
                    {
                      mem.col_4_value === '' && <h5 className="title-habit-miss">{mem.col_4}{': '}</h5>}
                    {
                      mem.col_4_value !== '' && <h5 className="title-habit-done">{mem.col_4}{': '}{mem.col_4_value}</h5>
                    }
                    <small className="date">{mem.date}</small>
                  </div>
                </a>
              )
            })}
          </section>

          <section className="page__space"></section>
        </div>
        <Link to="/" className="page__close-btn">
          <div></div><div></div>
        </Link>
      </article>
    )
  }
}

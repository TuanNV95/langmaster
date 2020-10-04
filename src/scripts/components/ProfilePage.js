import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import name from '../../images/profile-page/name.png'
// import wishlist from '../../images/profile-page/wishlist.svg'
import job from '../../images/profile-page/contact-me.png'
import avatar from '../../images/profile-page/avatar.png'

export default class ProfilePage extends Component {
  componentDidMount() {
    const { changeChapter, closeMenu } = this.props
    changeChapter()
    closeMenu()
  }

  render() {
    return (
      <article className="page profile-page">
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
          <img className="profile-page__icon" src={avatar} alt="avatar" />
          <img className="profile-page__name" src={name} alt="tuan95" />
          <h2 className="page__sub-title">What is my personality like？</h2>
          <p className="page__description">{ '※I don\'t know, because It\'s a secret.'}
          </p>
          <h2 className="page__sub-title">Infomation about me</h2>
          <section className="profile-page__table">
            <div className="inner">
              <h4>Status</h4><p>Alone</p>
              <h4>Gender</h4><p>Male</p>
              <h4>Birthday</h4><p>1995/12/25 - 25 years old</p>
              <h4>Action</h4><p>{ 'I\'m crazy'}</p>
              <h4>Favorite work</h4><p>Everything</p>
              <h4>Favorite person/ character</h4><p>Taylor Swift, Justin Bieber, Thuy Chi, Trong Hieu, ロロノア・ゾロ</p>
              <h4>Favorite technology</h4><p>.NET, Internet of Thing, JavaScript, CSS, HTML, Java - Android, Vuejs, Angular, All languages about Databases</p>
              <h4>Favorite foods</h4><p>{ 'I don\'t like anything'}</p>
              <h4>Gmail</h4><p>tuannguyen060196@gmail.com</p>
              <h4>Nickname</h4><p>tuan95</p>
              <h4 className="last">Facebook</h4><p className="lastname"><a href="https://www.facebook.com/tuan.naem" target="_blank" rel="noopener noreferrer">Tuan Nguyen</a></p>
            </div>
            {/* <a className="link-btn" rel="noopener noreferrer" href="http://amzn.asia/3Xubapz" target="_blank">
              <img src={wishlist} alt="ほしい物リスト" />
            </a> */}
          </section>
          <h2 className="page__sub-title">Job request</h2>
          <section className="profile-page__job">
            <p>
              <s>
              You want to request the job?<br />
              Sometimes I also do small jobs.<br />
              I will help you build. (Website, Applications, ...)<br />
              For job requests, use Mail or Facebook please!<br />
              Please ignore the above
              </s><br />
              {'Currently, I don\'t accept the job, thanks!'}
            </p>
            <a className="link-btn" rel="noopener noreferrer" href="https://www.messenger.com/t/tuan.naem" target="_blank">
              <img src={job} alt="https://www.messenger.com/t/tuan.naem" />
            </a>
          </section>
          <h2 className="page__sub-title">Twitter activity</h2>
          <section className="profile-page__timeline">
            <iframe src="./timeline.html" title="timeline"></iframe>
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

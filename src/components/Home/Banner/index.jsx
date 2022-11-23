import './style.css'
import bannerImg from './piz1.png'
import Logo from '../../Common/Logo'

const Banner = () => {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <div className="content-main">
          <h1>DELICIOUS PIZZAZzz FOR YOUR CRAVINGS</h1>
          <p>Everything that you need in your pizza : fast, fresh, and delicious</p>
          <button > View Menu <i className="fa-solid fa-arrow-down">
          </i> </button>
        </div>
      </div>
      <img src={bannerImg} alt='pizza banner' className="header-img" />
    </header>
  )
}

export default Banner
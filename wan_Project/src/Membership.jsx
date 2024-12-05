import './css/Membership.css';

function Membership() {
  return (
    <div className="home-container">
      <header id='navbar'>
        <img id="logo" src="../src/images/index/logo.svg" alt="logo" />
        <div id='icon'>
          <img id="icon-Member" src="../src/images/index/icon-Member.svg" alt="Member" />
          <img id="icon-Hamburger" src="../src/images/index/icon-Hamburger.svg" alt="Hamburger" />
        </div>
      </header>
      <main>
        <img id="membership_Title" src="../src/images/Membership/membership_Title.png" alt="" />
      </main>
    </div>
  )
}

export default Membership
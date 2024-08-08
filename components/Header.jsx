import Link from 'next/link';
import Image from 'next/image';

const logoPlaceholder = "https://via.placeholder.com/100x50";
const searchIconPlaceholder = "https://via.placeholder.com/20";
const heartIconPlaceholder = "https://via.placeholder.com/20";
const cartIconPlaceholder = "https://via.placeholder.com/20";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <Link href="/" passHref legacyBehavior>
            <a>
              <Image src={logoPlaceholder} alt="Card Kingdom Logo" width={100} height={50} />
            </a>
          </Link>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search Card Kingdom" />
          <button type="button">
            <Image src={searchIconPlaceholder} alt="Search Icon" width={20} height={20} />
          </button>
        </div>
        <div className="header-icons">
          <Link href="/sign-in" passHref legacyBehavior>
            <a>SIGN IN</a>
          </Link>
          <Link href="/favorites" passHref legacyBehavior>
            <a><Image src={heartIconPlaceholder} alt="Favorites" width={20} height={20} /></a>
          </Link>
          <Link href="/cart" passHref legacyBehavior>
            <a><Image src={cartIconPlaceholder} alt="Cart" width={20} height={20} /></a>
          </Link>
        </div>
      </div>
      <nav className="header-bottom">
        <ul className="nav-list">
          <li className="nav-item"><Link href="/magic-the-gathering" passHref legacyBehavior><a>MAGIC: THE GATHERING</a></Link></li>
          <li className="nav-item"><Link href="/supplies" passHref legacyBehavior><a>SUPPLIES</a></Link></li>
          <li className="nav-item"><Link href="/learn-community" passHref legacyBehavior><a>LEARN & COMMUNITY</a></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerRow}>
        <p>@Copyright</p>
        <p>Created by Binyam Yohannes</p>
      </div>
    </footer>
  );
}
 
export default Footer;
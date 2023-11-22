import "./styles/footer.css";
import socialLinks from "../config/placeholders/SocialLinks";

function Footer() {
  return (
    <footer>
      <div className="d-flex flex-column justify-content-center footer">
        <div>
          <h3>srisHty mAnGutte</h3>
        </div>
        <div>
          {socialLinks.map((l) => {
            const classes = "fab p-3 " + l.icon;
            return (
              <a target="_blank" rel="noopener noreferrer" href={l.url}>
                <i class={classes}></i>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import "./styles/footer.css";

function Footer() {
  return (
    <footer>
      <div className="d-flex flex-column justify-content-center footer">
        <div>
          <h3>srisHty mAnGutte</h3>
        </div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/m-srishty/"
          >
            <i class="fab fa-linkedin p-3"></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Srish-ty"
          >
            <i class="fab fa-github p-3"></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://stackoverflow.com/users/14859624/sidharth-bhatla"
          >
            <i class="fab fa-stack-overflow p-3"></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:srushtimangutte@gmail.com"
          >
            <i class="fas fa-envelope p-3"></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://openprofile.dev/profile/l4dybu6"
          >
            <i class="fab fa-hackerrank p-3"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

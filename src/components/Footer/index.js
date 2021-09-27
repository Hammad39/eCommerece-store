import React from "react";
import { Container } from "react-bootstrap";
import styles from "../Footer/Footer.module.css";
import { Link } from "react-router-dom";

export default function index() {
  return (
      <div className={styles.footer}>
        <Container>
            <div className={styles.footerWrap}>
                <div className={styles.footer_section}>
                    {/* <img src={bag} alt="logo" className={styles.footlogo} /> */}
                    <h5>About Us</h5>
                    <p className={styles.footer_logo_article}>
                    We help people achieve independence by making it easier to start,
                    run, and grow a business. We believe the future of commerce has
                    more voices, not fewer, so we’re reducing the barriers to business
                    ownership to make commerce better for everyone
                    </p>
                    <div className={styles.footer_social_wrap}>
                    <ul className={styles.footer_ul}>
                        <li className={styles.footer_li}>
                        <a href="#Facebook">
                            <i class="fab fa-facebook" aria-hidden="true"></i>
                        </a>
                        </li>
                        <li className={styles.footer_li}>
                        <a href="#Instagran">
                            <i class="fab fa-instagram-square"></i>
                        </a>
                        </li>
                        <li className={styles.footer_li}>
                        <a href="#YouTube">
                            <i class="fab fa-youtube"></i>
                        </a>
                        </li>
                        <li className={styles.footer_li}>
                        <a href="#pintrest">
                            <i class="fab fa-pinterest-square"></i>
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>

                <div id="footer-links" className={styles.footer_section}>
                    <h5 className={styles.footer_h1}>Useful Links</h5>
                    <ul className={styles.footer_ul_link}>
                        <li>
                            <Link to="/home" className={styles.footer_link}>
                            Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/Collections?id=electronics" className={styles.footer_link}>
                            Electronics
                            </Link>
                        </li>
                        <li>
                            <Link to="/Collections?id=jewelery" className={styles.footer_link}>
                            Jewelery
                            </Link>
                        </li>
                        <li>
                            <Link to="/Collections?id=men%27s%20clothing" className={styles.footer_link}>
                            Men's Collection
                            </Link>
                        </li>
                        <li>
                            <Link to="/Collections?id=women%27s%20clothing" className={styles.footer_link}>
                            Women's Collection
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.footer_section_last}>
                    <h5 className={styles.footer_h1}>SignUp for Newsletter</h5>
                    <span className={styles.footer_paragrap}>
                    We help people achieve independence by making it easier to start, run, 
                    and grow a business. We believe the future of commerce has more voices, 
                    not fewer, so we’re reducing the barriers to business ownership to make 
                    commerce better for everyone.
                    </span>

                    <form className={styles.form_table}>
                        <div className={styles.input_container}>
                            <input
                            class="form-control"
                            type="text"
                            placeholder=" Email..."
                            name="email"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </Container>
      </div>
    
  );
}
